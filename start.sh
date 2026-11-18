#!/usr/bin/env bash
# 兼容入口：等同 npm run dev（保留给习惯 ./start.sh 的人）
#   ./start.sh            → 起服务并自动开浏览器
#   ./start.sh 8080       → 指定端口
set -euo pipefail
cd "$(dirname "$0")"
exec node tools/dev.mjs --open "$@"
