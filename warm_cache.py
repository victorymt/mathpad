#!/usr/bin/env python3
"""预热本地缓存：把编辑器用到的静态资源全部抓进 .cache/，之后断网可用。

用法：
    ./start.sh          # 另开一个终端，先让本地服务跑起来
    python3 warm_cache.py            # 默认 http://127.0.0.1:7801
    python3 warm_cache.py 7802       # 指定端口

原理：通过本地服务请求一遍资源，server.py 会顺便把它们缓存到 .cache/。
"""
import sys
import urllib.request

BASE = "http://127.0.0.1:" + (sys.argv[1] if len(sys.argv) > 1 else "7801")

CORE = [
    "/editor",
    "/cdn/styles-f9164fb5-ced37e37.css",
    "/cdn/index-f9164fb5-ced37e37.js",
    "/cdn/bundle-f9164fb5-ced37e37.js",
    "/cdn/resources/fonts-f9164fb5-ced37e37.css",
    "/cdn/resources/icon-fonts-f9164fb5-ced37e37.css",
    "/cdn/resources/fonts-subset/fa-solid-900-subset.woff2",
    "/cdn/resources/fonts-subset/fa-regular-400-subset.woff2",
    "/cdn/resources/fonts-subset/fa-brands-400-subset.woff2",
    "/cdn/running.f9164fb5-ced37e37.builtin.worker.js",
    "/cdn/running.f9164fb5-ced37e37.document-info.worker.js",
]


def fetch(path):
    try:
        with urllib.request.urlopen(BASE + path, timeout=60) as r:
            return r.status, len(r.read())
    except Exception as exc:  # noqa: BLE001
        return None, str(exc)[:80]


def main():
    urls = list(CORE)
    try:
        with open("chunks.txt", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#"):
                    urls.append("/cdn/" + line.split("https://cdn.mathcha.io/")[-1])
    except OSError:
        print("（没有 chunks.txt，只预热核心资源）")

    ok = 0
    for u in urls:
        status, size = fetch(u)
        if status == 200:
            ok += 1
        else:
            print(f"  ✗ {u} -> {size}")
    print(f"完成：{ok}/{len(urls)} 个资源已缓存到 .cache/（其余失败的多半是上游 404，不影响）")


if __name__ == "__main__":
    main()
