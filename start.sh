#!/usr/bin/env bash
# 启动 Mathcha 本地版（严格离线）
# 用法：./start.sh [端口]      默认 7801
set -euo pipefail
cd "$(dirname "$0")"

PORT="${1:-7801}"
URL="http://127.0.0.1:${PORT}/editor"

if ! command -v python3 >/dev/null 2>&1; then
  echo "需要 python3。" >&2
  exit 1
fi
if ! command -v curl >/dev/null 2>&1; then
  echo "需要 curl（仅用于探测端口是否就绪）。" >&2
  exit 1
fi

if [ ! -f .cache/editor.html ] || [ ! -f .cache/cdn/bundle-f9164fb5-ced37e37.js ]; then
  echo "缺少离线资源。首次使用请先联网运行一次：" >&2
  echo "    python3 fetch_assets.py" >&2
  echo "（约 20 MB；下载完成后本程序不再联网）" >&2
  exit 1
fi

echo "Mathcha 本地版（严格离线）→ ${URL}"
echo "数据目录: $(pwd)/.data   Ctrl+C 停止"
echo

python3 server.py "$PORT" &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null || true' EXIT INT TERM

for _ in $(seq 1 60); do
  if curl -s -o /dev/null -m 1 "http://127.0.0.1:${PORT}/editor"; then break; fi
  sleep 0.25
done

if command -v xdg-open >/dev/null 2>&1; then
  xdg-open "$URL" >/dev/null 2>&1 || true
elif command -v open >/dev/null 2>&1; then
  open "$URL" >/dev/null 2>&1 || true
fi

wait "$SERVER_PID"
