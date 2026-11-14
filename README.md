# Mathcha 本地版（严格离线）

把 Mathcha 网页编辑器原样跑在本机：`http://127.0.0.1:7801/editor`。
同一份前端代码（编辑体验与网页一致），但**运行期不联网、不需要账号、文档存本机**。

所有依赖 Mathcha 服务端的功能（账号、分享、协作、云端历史、图片上传、图表服务等）已**移除或拦截**。

![离线版](screenshots/offline.png)

## 首次安装（唯一需要联网的一步）

```bash
python3 fetch_assets.py          # 从 Mathcha CDN 下载编辑器资源到 .cache/（约 20 MB）
```

之后：

```bash
./start.sh                       # → http://127.0.0.1:7801/editor
```

> 本目录已经下载好资源，可直接 `./start.sh`。换了机器、或删了 `.cache/` 才需要再跑一次 `fetch_assets.py`。

## 离线是怎么保证的（三层）

| 层 | 做法 | 效果 |
|---|---|---|
| 服务端 | `server.py` **只读 `.cache/`**，缓存缺失直接 404 并记 `.data/cache-misses.log`，**没有任何回源代码** | 运行期永远不会替你发外网请求 |
| 浏览器 | 响应头带 CSP：`connect-src 'self'`、`font-src 'self'`、`img-src 'self' data: blob:` 等 | 即使前端代码想发外网 XHR/WebSocket/字体/图片，也会被浏览器拦掉 |
| 应用层 | 关闭分享/账号入口（`shareDisabled`/`accountDisabled`），隐藏"插入图片"；其余联网接口由本地实现返回空 | 不会出现点了没反应、或半路卡在请求上 |

**验证**：断网（或用死代理）打开，功能和联网时一致；页面资源全部来自 `127.0.0.1`。

## 能做什么

| 能力 | 状态 |
|---|---|
| 文本 + 公式 + 表格 + 图形编辑（完整 Mathcha 编辑器） | ✅ |
| 自动保存 / Ctrl+S / 重开恢复 | ✅（`.data/store.json`） |
| 导出 SVG / PNG / PDF / TikZ / LaTeX / `.mathcha` / HTML zip | ✅（全部前端完成） |
| 多文档：新建 / 切换 / 重命名 / 删除 | ✅ |

## 已移除的联网内容

| 功能 | 处理 |
|---|---|
| 账号 / 登录 / 云同步 | 移除（返回本地假用户 `Local`） |
| 分享链接、协作、云端历史 | 入口关闭；接口返回空 |
| 插入图片（上传到服务端） | 按钮隐藏 |
| Plotly 图表服务 / 文献在线查询 / 模板与共享文档 | 不请求，不可用 |
| CAS 符号计算 | 需要下载 Pyodide，运行时被 CSP 拦截（不可用） |

## 数据

| 项 | 位置 |
|---|---|
| 你的文档 | `.data/store.json`（纯 JSON） |
| 编辑器资源 | `.cache/`（可删，删了要重新 `fetch_assets.py`） |
| 接口日志 | `.data/api.log`（只有方法/路径/长度，无正文） |

- **备份**：复制 `.data/store.json`（或整个 `.data/`）。
- **清空**：删掉 `.data/store.json`，下次启动自动新建空文档。
- **换机器**：整个目录拷走（含 `.cache/` 就免下载）。

## 目录结构

```
mathcha-local/
├── server.py          # 严格离线的本地服务（静态只读缓存 + 本地 API）
├── local_api.py       # 把 /api/* 换成本地 JSON 读写
├── fetch_assets.py    # 唯一联网的脚本：首次安装/升级时下载资源
├── start.sh           # 启动
├── assets.txt         # 需要缓存的静态资源清单（由上次预热生成）
├── chunks.txt         # 懒加载 chunk 清单
├── .data/store.json   # 你的文档（唯一需要备份的文件）
├── .cache/            # 编辑器资源缓存（约 20 MB）
└── screenshots/
```

## 升级到 Mathcha 新版本

1. `python3 fetch_assets.py --force`（会重新拉取；如上游改了文件名，需要按新版本更新 `assets.txt` / `chunks.txt`）；
2. 重启服务，刷新浏览器。

> 当前固定版本：`f9164fb5-ced37e37`（2026-11-13 构建）。

## 排查

| 现象 | 处理 |
|---|---|
| 启动提示"缺少离线资源" | 联网跑一次 `python3 fetch_assets.py` |
| 页面 404 某个 `/cdn/...` | 看 `.data/cache-misses.log`；联网跑 `fetch_assets.py` 补齐 |
| 样式/字体异常 | 删 `.cache/` 后重新 `fetch_assets.py --force` |
| 文档打不开 | `python3 -m json.tool .data/store.json` 检查是否为合法 JSON |

## 合规

本目录做的是"用 Mathcha 公开发布的前端代码，在本机跑一个纯离线副本"，**仅供个人本机使用**：
不要分发这个目录、不要做成对外服务。需要官方离线版可购买 [Mathcha Notebook](https://www.mathcha.io/notebook/)。
