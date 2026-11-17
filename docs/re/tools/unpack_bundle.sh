#!/usr/bin/env bash
# 把 .cache 里的 minified webpack bundle 还原成可读模块（mathcha-src/modules/<id>.js）。
#
# 用法：
#   docs/re/tools/unpack_bundle.sh            # 用默认 bundle（server.py 里锁定的版本）
#   docs/re/tools/unpack_bundle.sh <bundle.js> # 指定别的 bundle
#
# 依赖（只在「重新生成」时需要，运行编辑器不需要）：
#   node + @babel/parser + @babel/generator
#   可以放 .cache/tools/node_modules 里：
#     mkdir -p .cache/tools && cd .cache/tools && npm init -y
#     npm i @babel/parser @babel/generator
set -euo pipefail
cd "$(dirname "$0")/../../.." || exit 1

BUNDLE="${1:-}"
if [ -z "$BUNDLE" ]; then
  BUNDLE=".cache/cdn/$(python3 - <<'PY'
import re
src = open("server.py", encoding="utf-8").read()
m = re.search(r'BUNDLE_NAME\s*=\s*"([^"]+)"', src)
print(m.group(1) if m else "")
PY
)"
fi
if [ ! -f "$BUNDLE" ]; then
  echo "找不到 bundle: $BUNDLE" >&2
  echo "先跑一次 python3 fetch_assets.py 补齐 .cache/" >&2
  exit 1
fi

OUT=mathcha-src
TOOLS=.cache/tools
mkdir -p "$OUT/modules" "$TOOLS"

if [ ! -d "$TOOLS/node_modules/@babel/parser" ] && [ ! -d node_modules/@babel/parser ]; then
  echo "缺少 @babel/parser / @babel/generator（只在重新生成时需要）：" >&2
  echo "  mkdir -p $TOOLS && cd $TOOLS && npm init -y && npm i @babel/parser @babel/generator" >&2
  echo "装好后重跑本脚本。" >&2
  exit 1
fi

cp docs/re/tools/split_bundle.mjs "$TOOLS/"
node "$TOOLS/split_bundle.mjs" "$BUNDLE" "$OUT/modules"
mv "$OUT/modules/index.json" "$OUT/index.json"

echo "✓ 已还原 $(ls "$OUT/modules"/*.js | wc -l) 个模块 → $OUT/modules/（索引：$OUT/index.json）"
