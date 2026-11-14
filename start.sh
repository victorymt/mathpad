#!/usr/bin/env bash
# 启动 Mathcha 本地版
#   ./start.sh            → 离线模式（默认）：文档存本机 .data/，不需要账号
#   ./start.sh --online   → 联网模式：代理到 www.mathcha.io，用 .cookies.json 的登录态
#   ./start.sh 7900       → 指定端口
set -euo pipefail
cd "$(dirname "$0")"

MODE="offline"
PORT=""
for arg in "$@"; do
  case "$arg" in
    --online) MODE="online" ;;
    --offline) MODE="offline" ;;
    *) PORT="$arg" ;;
  esac
done
PORT="${PORT:-7801}"
URL="http://127.0.0.1:${PORT}/editor"

if ! command -v python3 >/dev/null 2>&1; then
  echo "需要 python3。" >&2
  exit 1
fi
if ! command -v curl >/dev/null 2>&1; then
  echo "需要 curl。" >&2
  exit 1
fi

ARGS=("$PORT")
if [ "$MODE" = "online" ]; then
  if [ ! -f .cookies.json ]; then
    echo "联网模式需要 .cookies.json（你的 Mathcha 登录态），见 README；或改用离线模式。" >&2
    exit 1
  fi
  ARGS+=("--online")
  echo "Mathcha 本地版（联网模式，数据在你 Mathcha 账号）→ ${URL}"
else
  echo "Mathcha 本地版（离线模式，数据存本机 .data/）→ ${URL}"
fi
echo

python3 server.py "${ARGS[@]}" &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null || true' EXIT INT TERM

# 等端口就绪再开浏览器
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
