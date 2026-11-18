#!/usr/bin/env python3
"""Mathcha 本地版 —— 严格离线服务。

设计原则：**运行期绝不联网**。

- 静态资源只从 `assets/` 读；资源里没有就返回 404（并记到 `data/cache-misses.log`），不会回源。
- `/api/*` 由 `src/api.py` 用本地 JSON 实现（文档存 `data/store.json`）。
- 响应带 CSP：`connect-src 'self'` 等，页面就算有代码想发外网请求也会被浏览器拦掉。
- 需要补资源/升级版本时，单独运行 `npm run fetch`（唯一联网的步骤）。
- CAS（计算机代数系统，选中公式后的 fx 面板）也用同一套离线缓存：worker 在站点根
  `/cas-sympy-module-worker.js`，它内部再从 `/resources/pyodide/` 加载 Pyodide + SymPy。
  `CAS_ASSETS` 齐了才把 CAS 入口打开，缺资源时保持关闭（不影响其它功能）。

用法：python3 src/server.py [端口] [--open]     默认 7801；--open 启动后自动开浏览器
"""
import gzip
import os
import re
import sys
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

import api as local_api

SRC_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(SRC_DIR)
ASSETS = os.path.join(ROOT, "assets")
CACHE = os.path.join(ASSETS, "cdn")
EDITOR_CACHE = os.path.join(ASSETS, "editor.html")
# MATHCHA_DATA_DIR 便于测试/多实例隔离
DATA_DIR = os.environ.get("MATHCHA_DATA_DIR") or os.path.join(ROOT, "data")
WEB_DIR = os.path.join(SRC_DIR, "web")
os.makedirs(DATA_DIR, exist_ok=True)

LOCAL_API = local_api.LocalApi(DATA_DIR)

# 只允许同源资源；连外网 fetch/XHR/WebSocket/font/img 全部禁止
CSP = (
    "default-src 'self' data: blob:; "
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval' blob:; "
    "style-src 'self' 'unsafe-inline'; "
    "img-src 'self' data: blob:; "
    "font-src 'self' data:; "
    "media-src 'self' data: blob:; "
    "connect-src 'self' blob:; "
    "worker-src 'self' blob:; "
    "frame-src 'self' blob: data:; "
    "object-src 'none'; "
    "base-uri 'self'"
)

# 首页 JS 的定点补丁：关掉"分享"按钮（mathGlobal.shareDisabled 只管侧边栏菜单）
BUNDLE_NAME = "bundle-f9164fb5-ced37e37.js"
BUNDLE_PATCHES = [
    (
        b"supportShowProminentShareButton(){return this.getScreenWidth()>600&&!this.isElectronEnv()}",
        b"supportShowProminentShareButton(){return!1}",
    ),
]

# CAS 面板入口（bundle 里默认要 URL 带 ?cas-support=1 才开）。资源齐了就默认打开。
CAS_BUNDLE_PATCH = (
    b'this.casSupport=!!this.queryMap["cas-support"]',
    b"this.casSupport=!0",
)

# CAS 需要镜像的上游资源（相对 assets/cdn/，与 CDN 路径一一对应）。
# 清单只在 src/manifests/cas-assets.txt 里维护一份（tools/fetch_assets.py 也读它），server 里不要另抄一份；
# 上游换版本时只改那个文件。
def _read_cas_assets():
    rels = []
    try:
        with open(os.path.join(SRC_DIR, "manifests", "cas-assets.txt"), encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#"):
                    # https://cdn.mathcha.io/resources/pyodide/x.whl → resources/pyodide/x.whl
                    parts = line.split("://", 1)[-1].split("/", 1)
                    if len(parts) == 2:
                        rels.append(parts[1])
    except OSError:
        pass
    return rels


CAS_ASSETS = _read_cas_assets()
# 上游把这两个路径写死在站点根（bundle 里的 "/cas-sympy-module-worker.js"、
# worker 里的 "/resources/pyodide/"），所以除了 /cdn/<rel> 也按原路径提供一份。
CAS_ROOT_FILES = tuple("/" + rel for rel in CAS_ASSETS if "/" not in rel)
CAS_ROOT_PREFIXES = tuple(sorted({"/" + rel.rsplit("/", 1)[0] + "/"
                                  for rel in CAS_ASSETS if "/" in rel}))
CAS_READY = bool(CAS_ASSETS) and all(
    os.path.isfile(os.path.join(CACHE, rel)) for rel in CAS_ASSETS
)

# 页面上与"联网才能用"相关的入口隐藏（其余按钮都离线可用）
HIDE_CSS = """
<style>
  [title="Insert Image"], [title="Insert Picture Box"], [title="Share"],
  [title*="图片"] { display: none !important; }
</style>
"""

# 白纸模式（Paper Mode）：注入到 editor.html 的本地样式/脚本。
# 只做"外壳增强"：不改上游 bundle，不动文档数据，普通模式零影响。
#   src/web/paper-mode.css  全白画布 + 隐藏 chrome + 极简浮层样式（限定 html.paper-mode）
#   src/web/paper-mode.js   进入/退出、快捷键、状态同步、空白提示
#
# 其中 BOOT 是一小段内联脚本：在首帧之前就把 paper-mode class / 浅色主题挂上，
# 避免深色偏好用户"先看到深色界面再刷成白纸"的闪动（上游 index.js 稍后还会
# 按自己的设置再写一次 data-ui-theme，我们的脚本会立刻纠正，见 paper-mode.js）。
PAPER_MODE_BOOT = """
<script>
(function () {
  try {
    var q = new URLSearchParams(location.search);
    var v = String(q.get('paper') || '').toLowerCase();
    var h = String(location.hash || '').toLowerCase();
    var want;
    if (v === '1' || v === 'true' || v === 'on' || v === 'yes') want = true;
    else if (v === '0' || v === 'false' || v === 'off' || v === 'no') want = false;
    else if (h === '#paper' || h === '#paper-mode' || h === '#papermode') want = true;
    else if (h === '#normal' || h === '#focused-off') want = false;
    else { try { want = localStorage.getItem('mathcha-local.paper-mode') === '1'; } catch (e) { want = false; } }
    if (!want) return;
    var root = document.documentElement;
    root.classList.add('paper-mode', 'paper-pending');
    try { window.__paperBootPrevTheme = root.getAttribute('data-ui-theme') || 'light'; } catch (e) {}
    root.setAttribute('data-ui-theme', 'light');
    // 上游 index.js 稍后会按 localStorage 把 data-ui-theme 写回深色；
    // 这里尽早挂一个观察器，在它写回的同一次任务里纠回浅色（deferred 脚本还会再兜一层）。
    try {
      new MutationObserver(function () {
        // 只在白纸模式里强制浅色；退出后要把深色主题还给用户
        if (!root.classList.contains('paper-mode')) return;
        if (root.getAttribute('data-ui-theme') !== 'light') {
          root.setAttribute('data-ui-theme', 'light');
        }
      }).observe(root, { attributes: true, attributeFilter: ['data-ui-theme'] });
    } catch (e) {}
  } catch (e) { /* 忽略：脚本失败不影响编辑器本身 */ }
})();
</script>
"""

PAPER_MODE_ASSETS = (
    '<link rel="stylesheet" href="/web/paper-mode.css" />'
    + PAPER_MODE_BOOT +
    '<script src="/web/paper-mode.js" defer></script>'
)

# 编辑器增强：正文里直接敲 \title1/\title2/\title3 生成层级标题（见 web/title-command.js）。
# 同样是"外壳增强"：不改上游 bundle、不动文档数据；不想要就不注入这段。
TITLE_COMMAND_ASSETS = '<script src="/web/title-command.js" defer></script>'


class Handler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"
    server_version = "MathchaLocal/2.0 (offline)"

    # ---------- 基础 ----------

    def _send(self, code, body, ctype="text/plain; charset=utf-8", extra=None):
        if isinstance(body, str):
            body = body.encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        for k, v in (extra or {}).items():
            if isinstance(v, (list, tuple)):
                for item in v:
                    self.send_header(k, item)
            else:
                self.send_header(k, v)
        self.end_headers()
        if self.command != "HEAD":
            self.wfile.write(body)

    def _cdn_base(self):
        host = self.headers.get("Host") or "127.0.0.1"
        return ("http://" + host + "/cdn").encode("utf-8")

    def _rewrite_cdn(self, data):
        return data.replace(b"https://cdn.mathcha.io", self._cdn_base())

    @staticmethod
    def guess_type(rel):
        ext = os.path.splitext(rel)[1].lower()
        return {
            ".js": "application/javascript; charset=utf-8",
            ".mjs": "application/javascript; charset=utf-8",
            ".css": "text/css; charset=utf-8",
            ".html": "text/html; charset=utf-8",
            ".json": "application/json; charset=utf-8",
            ".woff2": "font/woff2",
            ".woff": "font/woff",
            ".ttf": "font/ttf",
            ".otf": "font/otf",
            ".png": "image/png",
            ".jpg": "image/jpeg",
            ".svg": "image/svg+xml",
            ".ico": "image/x-icon",
            # CAS：Pyodide 运行时（wasm / 标准库 zip / wheel）
            ".wasm": "application/wasm",
            ".zip": "application/zip",
            ".whl": "application/octet-stream",
        }.get(ext, "application/octet-stream")

    # ---------- 路由 ----------

    def do_GET(self):
        self.route("GET")

    def do_POST(self):
        self.route("POST")

    def do_PUT(self):
        self.route("PUT")

    def do_DELETE(self):
        self.route("DELETE")

    def do_HEAD(self):
        self.route("HEAD")

    def do_OPTIONS(self):
        self._send(204, b"")

    def route(self, method):
        path = self.path.split("?")[0]
        try:
            if path in ("/", "/editor"):
                return self.serve_editor()
            if path.startswith("/cdn/"):
                return self.serve_cached(path[len("/cdn/"):])
            if path.startswith("/web/"):
                return self.serve_web(path[len("/web/"):])
            if path in CAS_ROOT_FILES or path.startswith(CAS_ROOT_PREFIXES):
                return self.serve_cached(path.lstrip("/"))
            if path.startswith("/api/"):
                return self.serve_local_api(path, method)
            if path == "/favicon.ico":
                return self._send(204, b"")
            return self._send(404, "not found（本服务严格离线，只提供 assets/ 里已有的资源）")
        except BrokenPipeError:
            pass
        except Exception as exc:  # noqa: BLE001
            sys.stderr.write(f"[ERR] {method} {path}: {exc!r}\n")
            try:
                self._send(500, f"error: {exc}")
            except Exception:  # noqa: BLE001
                pass

    # ---------- 页面 ----------

    def serve_editor(self):
        if not os.path.exists(EDITOR_CACHE):
            return self._send(
                503,
                "资源缺失：先联网跑一次  npm run fetch  把编辑器资源下载到 assets/，之后即可离线使用。",
                "text/plain; charset=utf-8",
            )
        with open(EDITOR_CACHE, "rb") as f:
            html = f.read()
        html = self._rewrite_cdn(html)

        # 1) 关闭分享/账号入口（mathGlobal 会被 index.js 合并，flag 会保留）
        html = html.replace(b'appMode: "main"', b'appMode: "main", shareDisabled: true, accountDisabled: true')
        # 2) 隐藏依赖联网的按钮
        html = html.replace(b"</head>", HIDE_CSS.encode("utf-8") + b"</head>")
        # 3) 白纸模式（本地样式 + 脚本，随 server.py 一起更新，无需重下缓存）
        html = html.replace(b"</head>", PAPER_MODE_ASSETS.encode("utf-8") + b"</head>")
        # 4) 正文标题命令（\title1/2/3）
        html = html.replace(b"</head>", TITLE_COMMAND_ASSETS.encode("utf-8") + b"</head>")
        self._send(200, html, "text/html; charset=utf-8", {"Content-Security-Policy": CSP})

    # ---------- 本地前端扩展（白纸模式的 css/js） ----------

    def serve_web(self, rel):
        """只读地提供 src/web/ 下的本地扩展文件（同源、no-store，便于改完刷新即生效）。"""
        safe = rel.split("?")[0].replace("\\", "/").replace("..", "_").lstrip("/")
        fpath = os.path.join(WEB_DIR, safe)
        if not safe or not os.path.isfile(fpath):
            return self._send(404, f"local web asset not found: {safe}")
        with open(fpath, "rb") as f:
            data = f.read()
        self._send(200, data, self.guess_type(safe))

    # ---------- 静态资源（只读缓存） ----------

    def serve_cached(self, rel):
        rel = rel.split("?")[0]
        safe = rel.replace("..", "_").lstrip("/")
        cpath = os.path.join(CACHE, safe)
        if not os.path.isfile(cpath):
            try:
                with open(os.path.join(DATA_DIR, "cache-misses.log"), "a", encoding="utf-8") as f:
                    f.write(f"{time.strftime('%F %T')} {rel}\n")
            except OSError:
                pass
            return self._send(404, f"resource not in cache: {rel}")
        with open(cpath, "rb") as f:
            data = f.read()
        if data[:2] == b"\x1f\x8b":
            try:
                data = gzip.decompress(data)
            except OSError:
                pass
        if any(safe.endswith(ext) for ext in (".js", ".mjs", ".css", ".html", ".json")):
            data = self._rewrite_cdn(data)
        if safe.endswith(BUNDLE_NAME):
            patches = list(BUNDLE_PATCHES)
            if CAS_READY:
                patches.append(CAS_BUNDLE_PATCH)
            for old, new in patches:
                data = data.replace(old, new)
        self._send(200, data, self.guess_type(safe))

    # ---------- 本地 API ----------

    def serve_local_api(self, path, method):
        length = int(self.headers.get("Content-Length") or 0)
        body = self.rfile.read(length) if length else b""
        status, ctype, data = LOCAL_API.handle(method, path, body)
        try:
            with open(os.path.join(DATA_DIR, "api.log"), "a", encoding="utf-8") as f:
                f.write(f"{time.strftime('%F %T')} {method} {path} body={len(body)}B -> {status} {len(data)}B\n")
        except OSError:
            pass
        self._send(status, data, ctype)


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    port = int(args[0]) if args else int(os.environ.get("MATHCHA_PORT", "7801"))
    url = f"http://127.0.0.1:{port}/editor"
    srv = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print(f"Mathcha 本地版（严格离线）: {url}")
    print(f"资源目录: {os.path.abspath(ASSETS)}")
    print(f"数据目录: {os.path.abspath(DATA_DIR)}   （文档在 store.json）")
    print("CAS: " + ("就绪（本地 Pyodide + SymPy，选中公式后点 fx）"
                    if CAS_READY else
                    "未安装（npm run fetch 可补齐 CAS 资源）"))
    print("Ctrl+C 停止")
    if "--open" in sys.argv[1:]:
        # 服务已 bind（listen 在构造函数里），稍等一下再开浏览器，避免抢跑
        import threading
        import webbrowser

        def open_browser():
            try:
                webbrowser.open(url)
            except Exception:  # noqa: BLE001 —— 无图形环境时静默跳过
                pass

        threading.Timer(0.6, open_browser).start()
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
