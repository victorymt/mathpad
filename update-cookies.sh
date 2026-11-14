#!/usr/bin/env bash
# 更新 Mathcha 登录态（.cookies.json）
#
# 用法：
#   ./update-cookies.sh "JSESSIONID=xxxx; remember-me=yyyy; heroku-session-affinity=zzzz"
#
# 怎么拿到这些值：
#   1. 浏览器打开 https://www.mathcha.io/editor 并登录；
#   2. F12 → Application（应用）→ Storage → Cookies → https://www.mathcha.io
#   3. 把 JSESSIONID、remember-me、heroku-session-affinity 三项的值照上面的格式拼起来（有哪项抄哪项，至少要有 JSESSIONID 和 remember-me）。
set -euo pipefail
cd "$(dirname "$0")"

if [ $# -lt 1 ]; then
  echo "用法: $0 \"JSESSIONID=...; remember-me=...\"" >&2
  exit 1
fi

python3 - "$1" <<'PY'
import json, os, sys

cookie = sys.argv[1].strip().strip('"').strip("'")
if "=" not in cookie:
    raise SystemExit("cookie 里没有 '='，格式应为 NAME=VALUE; NAME2=VALUE2")
pairs = [p.strip() for p in cookie.split(";") if p.strip()]
names = {p.split("=", 1)[0] for p in pairs}
need = {"JSESSIONID", "remember-me"}
missing = need - names
if missing:
    print("提示：缺少 " + ", ".join(sorted(missing)) + "，可能仍然能用，但更容易掉登录。")
with open(".cookies.json", "w", encoding="utf-8") as f:
    json.dump({"cookieHeader": "; ".join(pairs)}, f, ensure_ascii=False)
os.chmod(".cookies.json", 0o600)
print("已写入 .cookies.json（权限 600）")
PY
