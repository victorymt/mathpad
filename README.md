# Mathcha 本地版（严格离线）

把 Mathcha 网页编辑器原样跑在本机：`http://127.0.0.1:7801/editor`。
与网页版同一套前端代码，**编辑体验一致**；但纯单机运行——不需要账号、不联网、文档存本机。

![编辑器](screenshots/offline.png)

## 首次安装（联网一次）

```bash
python3 fetch_assets.py     # 下载编辑器资源到 .cache/（113 个文件，约 20 MB）
```

之后不再需要联网。

## 日常使用

```bash
./start.sh                  # → http://127.0.0.1:7801/editor
```

本目录的资源已下载好，可直接 `./start.sh`。

## 现有功能

| 功能 | 说明 |
|---|---|
| **文本编辑** | 字体 / 字号 / 加粗斜体下划线 / 颜色 / 对齐 / 列表 / 缩进 / 章节 / 目录 / 定理环境 / 脚注 / 超链接 |
| **数学公式** | 所见即所得输入 LaTeX：分式、根号、上下标、积分与求和、矩阵/数组/分段、自动伸缩括号、输入建议框、符号/结构快捷键 |
| **表格** | 增删行列、合并单元格、边框、对齐 |
| **图形** | 形状 / 箭头 / 直线曲线 / 坐标轴类工具 / 交换图（可导出 TikZ） |
| **多文档** | 新建、切换、重命名、删除（侧边栏） |
| **保存** | 自动保存 + `Ctrl+S`，重开恢复；数据在 `.data/store.json` |
| **导出** | SVG / PNG / PDF / TikZ / LaTeX / `.mathcha` / HTML(zip)，全部在前端完成 |
| **打印** | 菜单里的 Print（可另存为 PDF） |
| **外观** | 深色模式、缩放 |

> 范围之外（纯单机所以没有）：账号、云同步、分享链接、协作、云端历史、图片上传、图表/文献在线服务。

## 数据

| 项 | 位置 |
|---|---|
| 你的文档 | `.data/store.json`（纯 JSON） |
| 接口日志 | `.data/api.log`（仅方法/路径/长度） |
| 编辑器资源 | `.cache/`（可删，删了要重新 `fetch_assets.py`） |

- **备份**：复制 `.data/store.json` 或整个 `.data/`。
- **清空**：删掉 `.data/store.json`，下次启动自动建空文档。
- **换机器**：整个目录拷走（含 `.cache/` 就免下载）。

## 离线保证

1. **服务端**：`server.py` 只读 `.cache/`；缓存缺失直接 404（不回源），并记 `.data/cache-misses.log`。
2. **浏览器**：页面响应头带 CSP（`connect-src 'self'`、`font-src 'self'`、`img-src 'self' data: blob:` 等），外网请求一律被拦。
3. **界面**：账号/分享入口已关闭，"插入图片"按钮已隐藏，其余联网接口由本地实现返回空。

## 目录结构

```
mathcha-local/
├── server.py          # 严格离线的本地服务（静态只读缓存 + 本地 /api 实现）
├── local_api.py       # 文档存取：init2 / active2 / 读 / 保存 / 新建 / 重命名 / 删除
├── fetch_assets.py    # 唯一的联网脚本：首次安装或升级时下载资源
├── start.sh           # 启动
├── assets.txt         # 静态资源清单（88 项）
├── chunks.txt         # 懒加载 chunk 清单（25 项）
├── .data/store.json   # 你的文档（唯一需要备份的文件）
├── .cache/            # 编辑器资源缓存（约 20 MB）
└── screenshots/
```

## 排查

| 现象 | 处理 |
|---|---|
| 启动提示"缺少离线资源" | 联网跑一次 `python3 fetch_assets.py` |
| 页面 404 某个 `/cdn/...` | 看 `.data/cache-misses.log`，再跑 `fetch_assets.py` 补齐 |
| 样式 / 字体异常 | 删掉 `.cache/` 后 `fetch_assets.py --force` |
| 文档打不开 | `python3 -m json.tool .data/store.json` 检查 JSON |

## 合规

用 Mathcha 公开发布的前端代码在本机跑一个纯离线副本，**仅供个人本机使用**：不要分发、不要做成对外服务。
需要官方离线版可购买 [Mathcha Notebook](https://www.mathcha.io/notebook/)。
