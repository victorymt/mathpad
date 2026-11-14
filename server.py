#!/usr/bin/env python3
"""Mathcha 本地版 —— 严格离线服务。

设计原则：**运行期绝不联网**。

- 静态资源只从 `.cache/` 读；缓存里没有就返回 404（并记到 .data/cache-misses.log），不会回源。
- `/api/*` 由 `local_api.py` 用本地 JSON 实现（文档存 `.data/store.json`）。
- 响应带 CSP：`connect-src 'self'` 等，页面就算有代码想发外网请求也会被浏览器拦掉。
- 需要补资源/升级版本时，单独运行 `python3 fetch_assets.py`（这是唯一联网的脚本）。

用法：python3 server.py [端口]     默认 7801
"""
import gzip
import os
import re
import sys
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

import local_api

ROOT = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(ROOT, ".cache", "cdn")
EDITOR_CACHE = os.path.join(ROOT, ".cache", "editor.html")
DATA_DIR = os.path.join(ROOT, ".data")
os.makedirs(DATA_DIR, exist_ok=True)

LOCAL_API = local_api.LocalApi(DATA_DIR)

# 只允许同源资源；连外网 fetch/XHR/WebSocket/font/img 全部禁止
CSP = (
    "default-src 'self' data: blob:; "
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:; "
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

# 页面上与"联网才能用"相关的入口隐藏（其余按钮都离线可用）
HIDE_CSS = """
<style>
  [title="Insert Image"], [title="Insert Picture Box"], [title="Share"],
  [title*="图片"] { display: none !important; }
</style>
"""


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
            if path.startswith("/api/"):
                return self.serve_local_api(path, method)
            if path == "/favicon.ico":
                return self._send(204, b"")
            return self._send(404, "not found（本服务严格离线，只提供 .cache/ 里已有的资源）")
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
                "缓存缺失：请先联网运行一次  python3 fetch_assets.py  把编辑器资源下载到 .cache/，之后即可离线使用。",
                "text/plain; charset=utf-8",
            )
        with open(EDITOR_CACHE, "rb") as f:
            html = f.read()
        html = self._rewrite_cdn(html)

        # 1) 关闭分享/账号入口（mathGlobal 会被 index.js 合并，flag 会保留）
        html = html.replace(b'appMode: "main"', b'appMode: "main", shareDisabled: true, accountDisabled: true')
        # 2) 隐藏依赖联网的按钮
        html = html.replace(b"</head>", HIDE_CSS.encode("utf-8") + b"</head>")
        self._send(200, html, "text/html; charset=utf-8", {"Content-Security-Policy": CSP})

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
            for old, new in BUNDLE_PATCHES:
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
    port = int(args[0]) if args else 7801
    srv = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print(f"Mathcha 本地版（严格离线）: http://127.0.0.1:{port}/editor")
    print(f"数据目录: {os.path.abspath(DATA_DIR)}   （文档在 store.json）")
    print("Ctrl+C 停止")
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
