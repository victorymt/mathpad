#!/usr/bin/env python3
"""Mathcha 本地版（自用，不对外）。

两种模式：
  默认 offline：/api/* 由 local_api.py 用本地 JSON 文件实现（不登录、不联网、文档存本机）
  --online        ：/api/* 代理到 www.mathcha.io，用 .cookies.json 里的登录态（文档仍在你云端账号）

公共部分：
  /              → 本地化的 Mathcha 编辑器页面（HTML/JS 里的 CDN 地址改成 /cdn）
  /cdn/*         → 从 cdn.mathcha.io 取静态资源并缓存到 .cache/cdn（之后本地直出）
"""
import gzip
import json
import os
import subprocess
import sys
import time

import local_api
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(ROOT, ".cache", "cdn")
LOGS = os.path.join(ROOT, ".logs")
CDN = "https://cdn.mathcha.io"
SITE = "https://www.mathcha.io"
UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36")

MODE = "online" if "--online" in sys.argv else "offline"
DATA_DIR = os.path.join(ROOT, ".data")
LOCAL_API = local_api.LocalApi(DATA_DIR) if MODE == "offline" else None

os.makedirs(CACHE, exist_ok=True)
os.makedirs(LOGS, exist_ok=True)

def load_cookies():
    """联网模式才需要；离线模式不需要账号。"""
    try:
        with open(os.path.join(ROOT, ".cookies.json"), encoding="utf-8") as f:
            return json.load(f).get("cookieHeader", "")
    except (OSError, ValueError):
        return ""


COOKIES = load_cookies()

META_MARK = b"\n__MC_META__"


def fetch(url, method="GET", body=None, headers=None, timeout=120, want_headers=False):
    """用 curl 子进程访问上游，返回 (status, content_type, body[, header_lines])。

    本机 Python 的 ssl 握手对 www.mathcha.io 会偶发超时，curl 稳定，故改用 curl。
    """
    import tempfile

    hdr_file = tempfile.NamedTemporaryFile(delete=False, suffix=".hdr") if want_headers else None
    cmd = ["curl", "-sS", "--compressed", "--max-time", str(timeout), "-L",
           "-X", method, "-H", "User-Agent: " + UA,
           "-o", "-", "-w", "\n__MC_META__%{http_code}|%{content_type}"]
    if hdr_file:
        cmd += ["-D", hdr_file.name]
    for k, v in (headers or {}).items():
        cmd += ["-H", f"{k}: {v}"]
    if body is not None:
        cmd += ["--data-binary", "@/dev/stdin"]
    cmd.append(url)
    last_err = None
    try:
        for attempt in range(3):
            if attempt:
                import time as _t
                _t.sleep(0.6 * attempt)
            proc = subprocess.run(cmd, input=body, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            if proc.returncode == 0:
                out = proc.stdout
                idx = out.rfind(META_MARK)
                if idx >= 0:
                    meta = out[idx + len(META_MARK):].decode("utf-8", "replace").strip()
                    payload = out[:idx]
                    code_s, _, ctype = meta.partition("|")
                    try:
                        code = int(code_s)
                    except ValueError:
                        code = 0
                    hdrs = []
                    if hdr_file:
                        with open(hdr_file.name, "r", encoding="latin-1") as f:
                            hdrs = [ln.rstrip("\r\n") for ln in f if ln.strip()]
                    if want_headers:
                        return code, (ctype or "application/octet-stream"), payload, hdrs
                    return code, (ctype or "application/octet-stream"), payload
            last_err = proc.stderr.decode("utf-8", "replace")[:300]
            if proc.returncode not in (28, 6, 7, 35, 52, 56):  # 仅在网络/超时类错误上重试
                break
    finally:
        if hdr_file:
            try:
                os.unlink(hdr_file.name)
            except OSError:
                pass
    raise RuntimeError(f"curl 失败: {last_err}")


class Handler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"
    server_version = "MathchaLocal/1.0"

    # ---------- 基础工具 ----------

    def _send(self, code, body, ctype="application/json; charset=utf-8", extra=None):
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

    def _log_api(self, method, path, req_body, status, resp_body):
        # 默认不记录正文（里面是文档内容），排查问题时设 MATHCHA_LOCAL_DEBUG=1
        debug = os.environ.get("MATHCHA_LOCAL_DEBUG") == "1"
        rec = {
            "method": method,
            "path": path,
            "status": status,
            "req_len": len(req_body or b""),
            "resp_len": len(resp_body or b""),
        }
        if debug:
            rec["req"] = (req_body or b"")[:4000].decode("utf-8", "replace")
            rec["resp"] = (resp_body or b"")[:8000].decode("utf-8", "replace")
        try:
            with open(os.path.join(LOGS, "api.jsonl"), "a", encoding="utf-8") as f:
                f.write(json.dumps(rec, ensure_ascii=False) + "\n")
        except OSError:
            pass

    def _cache_path(self, rel):
        safe = rel.replace("..", "_").lstrip("/")
        return os.path.join(CACHE, safe)

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
        self._send(204, b"", "text/plain", {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
            "Access-Control-Allow-Headers": "*",
        })

    def route(self, method):
        path = self.path
        try:
            if path in ("/", "/editor") or path.startswith("/editor?"):
                return self.serve_editor()
            if path.startswith("/cdn/"):
                return self.serve_cdn(path[len("/cdn/"):], method)
            if path.startswith("/api/"):
                if MODE == "offline":
                    return self.serve_local_api(path, method)
                return self.serve_api(path, method)
            if path == "/favicon.ico":
                return self._send(204, b"", "image/x-icon")
            # 其它路径：当作 CDN 资源兜底
            if path.startswith("/resources/") or path.endswith((".js", ".css", ".woff2", ".png", ".svg")):
                return self.serve_cdn(path.lstrip("/"), method)
            return self._send(404, "not found", "text/plain; charset=utf-8")
        except BrokenPipeError:
            pass
        except Exception as exc:  # noqa: BLE001
            sys.stderr.write(f"[ERR] {method} {path}: {exc!r}\n")
            try:
                self._send(502, f"proxy error: {exc}", "text/plain; charset=utf-8")
            except Exception:  # noqa: BLE001
                pass

    def _cdn_base(self):
        """当前请求下的 CDN 前缀（绝对 URL，worker 里也能用）。"""
        host = self.headers.get("Host") or "127.0.0.1"
        return ("http://" + host + "/cdn").encode("utf-8")

    def _rewrite_cdn(self, data):
        base = self._cdn_base()
        return data.replace(b"https://cdn.mathcha.io", base)

    # ---------- 页面 ----------

    def serve_editor(self):
        cache = os.path.join(ROOT, ".cache", "editor.html")
        if not os.path.exists(cache):
            code, ctype, html = fetch(SITE + "/editor")
            if code != 200:
                return self._send(code or 502, f"upstream {code}", "text/plain; charset=utf-8")
            with open(cache, "wb") as f:
                f.write(html)
        with open(cache, "rb") as f:
            html = f.read()
        # CDN 全站改成本地绝对地址（含 index.js 里的 cdnPrefix）
        html = self._rewrite_cdn(html)
        self._send(200, html, "text/html; charset=utf-8")

    # ---------- 本地 API（offline 模式） ----------

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

    # ---------- CDN 静态资源（带磁盘缓存） ----------

    def serve_cdn(self, rel, method):
        if method not in ("GET", "HEAD"):
            return self._send(405, "method not allowed", "text/plain")
        rel = rel.split("?")[0]
        cpath = self._cache_path(rel)
        if os.path.exists(cpath):
            with open(cpath, "rb") as f:
                data = f.read()
            # 兼容早期缓存下来的 gzip 原始字节
            if data[:2] == b"\x1f\x8b":
                try:
                    data = gzip.decompress(data)
                    with open(cpath, "wb") as f:
                        f.write(data)
                except OSError:
                    pass
            if any(rel.endswith(ext) for ext in (".js", ".mjs", ".css", ".html", ".json")):
                data = self._rewrite_cdn(data)
            return self._send(200, data, self.guess_type(rel))

        url = f"{CDN}/{rel.lstrip('/')}"
        try:
            code, ctype, data = fetch(url)
        except Exception as exc:  # noqa: BLE001
            return self._send(502, f"CDN fetch failed: {exc}", "text/plain; charset=utf-8")
        if code != 200:
            return self._send(code, f"CDN {code}: {rel}", "text/plain; charset=utf-8")
        if data[:2] == b"\x1f\x8b":
            try:
                data = gzip.decompress(data)
            except OSError:
                pass
        os.makedirs(os.path.dirname(cpath), exist_ok=True)
        with open(cpath, "wb") as f:
            f.write(data)
        self._send(200, data, ctype)

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
            ".png": "image/png",
            ".jpg": "image/jpeg",
            ".svg": "image/svg+xml",
            ".ico": "image/x-icon",
        }.get(ext, "application/octet-stream")

    # ---------- API 代理（带 Cookie） ----------

    def serve_api(self, path, method):
        length = int(self.headers.get("Content-Length") or 0)
        req_body = self.rfile.read(length) if length else None
        # 优先用浏览器里的本地 Cookie（登录后由上游 Set-Cookie 种下），再用 .cookies.json 补齐
        local_cookie = self.headers.get("Cookie") or ""
        if local_cookie:
            have = {c.split("=", 1)[0].strip() for c in local_cookie.split(";") if "=" in c}
            missing = [c for c in COOKIES.split("; ") if c.split("=", 1)[0] not in have]
            cookie = local_cookie + ("; " + "; ".join(missing) if missing else "")
        else:
            cookie = COOKIES
        headers = {"Cookie": cookie}
        if self.headers.get("Content-Type"):
            headers["Content-Type"] = self.headers["Content-Type"]
        if self.headers.get("Accept"):
            headers["Accept"] = self.headers["Accept"]
        url = SITE + path
        try:
            status, ctype, data, hdrs = fetch(url, method=method, body=req_body,
                                              headers=headers, want_headers=True)
        except Exception as exc:  # noqa: BLE001
            self._log_api(method, path, req_body, 502, repr(exc).encode())
            return self._send(502, f"api proxy error: {exc}", "text/plain; charset=utf-8")
        self._log_api(method, path, req_body, status, data)
        # 把上游 Set-Cookie 改成本地 origin 可用的形式
        extra = {}
        set_cookies = [h for h in hdrs if h.lower().startswith("set-cookie:")]
        if set_cookies:
            rewritten = []
            for h in set_cookies:
                v = h.split(":", 1)[1].strip()
                parts = [p.strip() for p in v.split(";")]
                base = parts[0]
                attrs = []
                for attr in parts[1:]:
                    low = attr.lower()
                    if low.startswith("domain=") or low == "secure" or low.startswith("samesite=none"):
                        continue
                    if low.startswith("path="):
                        attrs.append("Path=/")
                        continue
                    attrs.append(attr)
                rewritten.append("; ".join([base] + attrs))
            extra["Set-Cookie"] = rewritten
        self._send(status, data, ctype, extra)


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    port = int(args[0]) if args else 7801
    srv = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print(f"Mathcha 本地版: http://127.0.0.1:{port}/editor")
    if MODE == "offline":
        print(f"模式: offline（本地数据，目录 {os.path.abspath(DATA_DIR)}）")
    else:
        print("模式: online（代理到 www.mathcha.io，使用 .cookies.json 登录态）")
    print("Ctrl+C 停止")
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
