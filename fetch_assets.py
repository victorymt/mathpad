#!/usr/bin/env python3
"""从 Mathcha CDN 下载编辑器静态资源到 .cache/（**唯一需要联网的脚本**）。

什么时候用：
  - 第一次安装
  - 想更新编辑器版本
  - 发现某个功能提示资源缺失（run 一次即可）

用法：
    python3 fetch_assets.py

下载内容：
  - 编辑器 HTML → .cache/editor.html
  - assets.txt 里列出的资源（主 bundle、CSS、字体、worker 等）→ .cache/cdn/
  - chunks.txt 里列出的懒加载 chunk → .cache/cdn/

下载完成后，`python3 server.py` 就是纯离线服务（运行期不会再联网）。
"""
import os
import sys
import urllib.request

ROOT = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(ROOT, ".cache")
CDN = "https://cdn.mathcha.io"
EDITOR_URL = "https://www.mathcha.io/editor"
UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36")


def fetch(url, timeout=120):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Encoding": "identity"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read()


def fetch_editor():
    dest = os.path.join(CACHE, "editor.html")
    os.makedirs(CACHE, exist_ok=True)
    if os.path.exists(dest) and "--force" not in sys.argv:
        print("✓ editor.html 已存在（--force 可强制更新）")
        return
    data = fetch(EDITOR_URL)
    with open(dest, "wb") as f:
        f.write(data)
    print(f"✓ editor.html ({len(data)}B)")


def read_list(name):
    out = []
    path = os.path.join(ROOT, name)
    try:
        with open(path, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#"):
                    out.append(line)
    except OSError:
        pass
    return out


def download_all(rels):
    ok = bad = 0
    for rel in rels:
        rel = rel.split("https://cdn.mathcha.io/")[-1]
        dest = os.path.join(CACHE, "cdn", rel)
        if os.path.exists(dest) and "--force" not in sys.argv:
            ok += 1
            continue
        url = CDN + "/" + rel
        try:
            data = fetch(url)
        except Exception as exc:  # noqa: BLE001
            print(f"  ✗ {rel} ({exc})")
            bad += 1
            continue
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        with open(dest, "wb") as f:
            f.write(data)
        print(f"  ✓ {rel} ({len(data)}B)")
        ok += 1
    print(f"\n资源：{ok} 个已就绪，{bad} 个失败")
    return bad


def main():
    print("== 从 Mathcha CDN 下载离线资源（只需这一次）==")
    fetch_editor()
    rels = read_list("assets.txt") + read_list("chunks.txt")
    bad = download_all(rels)
    print("\n完成。之后运行：python3 server.py  （纯离线）")
    sys.exit(1 if bad and not ok_any(rels) else 0)


def ok_any(rels):
    """只要缓存里有主 bundle，就认为基本可用。"""
    for rel in rels:
        if rel.endswith("bundle-f9164fb5-ced37e37.js"):
            p = os.path.join(CACHE, "cdn", rel)
            return os.path.exists(p)
    return False


if __name__ == "__main__":
    main()
