# Mathcha 本地版（离线，不用账号）

把 Mathcha 网页编辑器**原样**跑在你机器上：`http://127.0.0.1:7801/editor`。
同一份前端代码，所以**编辑体验和网页完全一致**（光标、建议框、快捷键、菜单、导出都相同），但：

- **不需要账号**，不连 Mathcha 服务器
- **文档存本机**（`.data/store.json`），断网也能用（资源预热后）
- 不发分享/协作/云同步请求

![离线版](screenshots/offline.png)

## 快速开始

```bash
./start.sh
```

然后浏览器打开 <http://127.0.0.1:7801/editor>（脚本会自动尝试打开）。

> **第一次运行需要联网**：编辑器代码和字体要从 Mathcha 的 CDN 下载一次（约 20 MB），存进 `.cache/`。
> 之后断网也能打开（已用"死代理"模式验证：外部网络全断时编辑器照常加载）。

## 到底有多离线（实测，2026-11-14）

| 场景 | 离线可用？ | 说明 |
|---|---|---|
| 打开编辑器（缓存已预热） | ✅ | 用"死代理"模拟外网全断，编辑器正常加载、无报错 |
| 编辑公式 / 自动保存 / 重开恢复 | ✅ | 全部走本地 server 与 `.data/store.json`；实测刷新后内容仍在 |
| 导出 PNG / SVG / PDF / TikZ / LaTeX / `.mathcha` | ✅ | 前端完成，需要的懒加载 chunk（PDFKit 等）已预热 |
| 新建 / 切换 / 重命名 / 删除文档 | ✅ | 本地 API 实现 |
| 分享链接、协作、云端历史 | ❌ | 依赖 Mathcha 线上服务 |
| 插入图片（上传）、Plotly 图表、文献在线查询 | ❌ | 依赖上游服务或 CDN 资源 |
| CAS 符号计算 | ⚠️ | 首次使用要下载 Pyodide 运行时（约十几 MB），之后可离线 |
| 第一次运行（或删了 `.cache/`） | ❌ | 要联网下载一次编辑器资源（约 20 MB） |

**验证方法**（可复现）：

1. 页面级：加载完成后读 `performance.getEntriesByType('resource')` —— **64 个请求全部指向 `127.0.0.1`，外网 0 个**。
2. 断网级：`chromium --proxy-server=http://127.0.0.1:9 --proxy-bypass-list=127.0.0.1`（所有外网请求都打到死端口）—— 编辑器照常打开，控制台无错误。
3. 网络日志：`--log-net-log` 抓到的请求里，页面没有发起任何外网请求；日志中仅有的外网条目是 Chromium 自己的更新/账号检查，与页面无关。

**缓存兜底**：`server.py` 只在"缓存里没有"时才去 CDN 取（取到会顺手缓存）。如果哪天你点开某个功能发现要联网，跑一次：

```bash
python3 warm_cache.py        # 按 chunks.txt 把所有懒加载 chunk 预热进 .cache/
```

## 数据在哪 / 怎么备份

| 项 | 位置 |
|---|---|
| 你的文档 | `.data/store.json`（纯 JSON，含所有文档正文） |
| 编辑器缓存 | `.cache/`（可随便删，会重新下载） |
| 接口日志 | `.data/api.log`（只有路径和长度，不含正文） |

- **备份**：复制整个 `.data/` 目录即可；或只复制 `store.json`。
- **换机器**：拷贝整个 `mathcha-local/` 目录（含 `.cache/` 就免下载）。
- **清空**：删掉 `.data/store.json`，下次启动会新建一个空文档。

## 能做什么 / 不能做什么

| 能力 | 状态 |
|---|---|
| 文本 + 公式 + 表格 + 图形编辑（完整 Mathcha 编辑器） | ✅ 离线可用 |
| 自动保存 / Ctrl+S，重开恢复 | ✅ 存本机 |
| 导出 SVG / PNG / PDF / TikZ / LaTeX、`.mathcha` 文件、HTML zip | ✅ 前端完成，离线可用 |
| 多文档（侧边栏新建/切换/重命名/删除） | ✅ 基础实现 |
| 账号、云同步、分享链接、协作、云端历史 | ❌ 无（本地不需要这些） |
| 图片上传 / 图表服务（Plotly）/ 文献库在线查询 | ❌ 依赖 Mathcha 服务，离线不可用 |
| Mathcha 官方模板/共享文档 | ❌ 不请求上游 |

> 如果某个按钮点了没反应或报错，多半是它依赖线上服务（分享、图片、图表）。编辑和导出不受影响。

## 它是怎么工作的

```
浏览器 ──> 127.0.0.1:7801 ─┬─ /editor, /cdn/*  → 官网前端资源（首次下载后缓存在 .cache/）
                          └─ /api/*           → local_api.py 实现的本地接口（读写 .data/store.json）
```

- `server.py`：本地静态服务 + 让 HTML/JS/CSS 里的 CDN 地址指向本地（否则 worker 里的 `importScripts` 会失效）。
- `local_api.py`：实现了编辑器用到的接口——`init2`（用户+文档树）、`documents/active2`（当前文档）、`documents/<id>`（读）、`PUT .../content`（保存）、`POST /api/document`（新建）、`tree/*`（删除/移动）等；其余未用到的返回空对象，避免客户端报错。
- 没有账号体系：`init2` 返回一个本地假用户 `Local`。

## 可选：联网模式（用你的 Mathcha 账号）

如果你哪天想用云端那份文档：

1. 浏览器登录 <https://www.mathcha.io/editor>，F12 → Application → Cookies，复制 `JSESSIONID`、`remember-me`、`heroku-session-affinity`；
2. `./update-cookies.sh "JSESSIONID=...; remember-me=...; heroku-session-affinity=..."`；
3. `./start.sh --online`。

注：为安全起见默认**没有**保留你的登录 Cookie；离线模式完全不需要它。

## 限制与风险

| 项 | 说明 |
|---|---|
| 上游改版 | Mathcha 更新版本后，缓存里的旧代码仍能跑；但如果它改了接口/构建方式，可能需要清理 `.cache/` 重新拉取，或等本工具更新。 |
| 数据安全 | 全部在本机 `.data/store.json`，没有备份机制——重要内容请定期复制该文件（或用编辑器导出 `.mathcha`）。 |
| 版本差异 | 本工具固定使用 2026-11-13 那一版前端（`f9164fb5-ced37e37`）。上游新版功能（如有）不会自动出现。 |
| 合规 | 用的是 Mathcha 公开发布的前端代码，**仅供你个人本机使用**：不要分发这个目录、不要做成对外服务。想要合法离线版，可买官方 [Mathcha Notebook](https://www.mathcha.io/notebook/)（$9/3 个月 / $30/年）。 |

## 目录结构

```
mathcha-local/
├── server.py          # 本地静态服务 + CDN 缓存 + 路由（offline/online）
├── local_api.py       # 本地数据后端（离线模式的 /api/*）
├── start.sh           # 启动（默认离线；--online 用云端账号）
├── update-cookies.sh  # 仅联网模式需要：更新登录态
├── .data/store.json   # 你的文档（唯一需要备份的文件）
├── .cache/            # 编辑器静态资源缓存（可删）
└── screenshots/
```

## 排查

- **一直转圈 / 白屏**：首次运行需要联网下载资源；看 `.data/api.log` 有没有 `init2`，并确认网络能访问 `cdn.mathcha.io`。
- **样式或字体不对**：删掉 `.cache/` 重新加载。
- **文档打不开**：检查 `.data/store.json` 是否是合法 JSON（可用 `python3 -m json.tool .data/store.json` 验证）。
- **想从头开始**：删掉 `.data/store.json`。
