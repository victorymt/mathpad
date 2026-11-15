# Mathcha offline

Mathcha 网页编辑器跑在本机：`http://127.0.0.1:7801/editor`。

![编辑器](screenshots/offline.png)

## 首次安装（联网一次）

```bash
python3 fetch_assets.py     # 下载编辑器资源到 .cache/（121 个文件，约 31 MB；其中 CAS 引擎 8 个文件约 11 MB）
```

之后不再需要联网。CAS 引擎也在这次下载里；万一 CAS 资源没下齐，编辑器照常可用，只是 fx 面板打不开，重跑一次即可。

## 日常使用

```bash
./start.sh                  # → http://127.0.0.1:7801/editor
# 想直接进白纸模式：http://127.0.0.1:7801/editor?paper=1
```
## 白纸模式

想要"一张干净的白纸"时：点右上角「白纸模式」，或直接打开 `http://127.0.0.1:7801/editor?paper=1`。
`Alt+Shift+E` 也能进出；退出点右上角「退出」或双击 `Esc`。详见 [docs/paper-mode.md](docs/paper-mode.md)。

![白纸模式](screenshots/paper-mode-desktop.png)

## Markdown 导入 / 导出

![Markdown 导入](screenshots/markdown-import.png)

Markdown 文件可以直接导成编辑器文档，文档也能导回 Markdown（**序列化层，模型里不存 Markdown 原文**）：

```bash
python3 md_convert.py import notes.md --name "我的笔记"   # 导入（服务需在跑；刷新页面即可看到）
python3 md_convert.py list                                # 列文档，拿 docId
python3 md_convert.py export <docId> -o notes.md          # 导出
python3 md_convert.py check notes.md                      # 只转换、看统计和降级警告
python3 md_selftest.py                                    # 自检（54 项，不需要服务）
```

支持：3 级标题（`#` 或 LaTeX 风格 `\title1` / `\section{…}`）、有序/无序列表（嵌套）、粗体/斜体/删除线/行内代码/链接、行内与块级公式（LaTeX 子集）。
在编辑器里也可以直接敲 `\title1` / `\title2` / `\title3` 生成层级标题（`web/title-command.js`，重启服务后生效）。
代码围栏 / 引用 / 表格 / 图片先降级为文本或链接并给出 `lossy:` 警告（不静默丢弃）。
详见 [docs/markdown.md](docs/markdown.md)，字段依据见 [docs/re/data/md-encoding.json](docs/re/data/md-encoding.json)。

## 现有功能

| 功能 | 说明 |
|---|---|
| **文本编辑** | 字体 / 字号 / 加粗斜体下划线 / 颜色 / 对齐 / 列表 / 缩进 / 章节 / 目录 / 定理环境 / 脚注 / 超链接 |
| **数学公式** | 所见即所得输入 LaTeX：分式、根号、上下标、积分与求和、矩阵/数组/分段、自动伸缩括号、输入建议框、符号/结构快捷键 |
| **CAS（计算机代数系统）** | 选中公式 → 浮动工具条的 fx → 33 个 SymPy 操作（化简 / 因式分解 / 求导 / 积分 / 极限 / 求和 / 解方程 / 矩阵运算）；结果插回文档，可继续编辑、导出。详见 [docs/cas.md](docs/cas.md) |
| **表格** | 增删行列、合并单元格、边框、对齐 |
| **图形** | 形状 / 箭头 / 直线曲线 / 坐标轴类工具 / 交换图（可导出 TikZ） |
| **多文档** | 新建、切换、重命名、删除（侧边栏） |
| **保存** | 自动保存 + `Ctrl+S`，重开恢复；数据在 `.data/store.json` |
| **导出** | SVG / PNG / PDF / TikZ / LaTeX / `.mathcha` / HTML(zip)，全部在前端完成 |
| **打印** | 菜单里的 Print（可另存为 PDF） |
| **白纸模式** | 一键把界面收成一张干净白纸：隐藏 header / 侧栏 / 工具栏 / 插入条 / 缩放条，整屏刷白；入口：右上角「白纸模式」按钮、`Alt+Shift+E`、`?paper=1`；退出：右上角「退出」、`Alt+Shift+E`、双击 `Esc`。写作 / 公式 / CAS / 自动保存照常，文档管理与导出走右上角「菜单」。详见 [docs/paper-mode.md](docs/paper-mode.md) |
| **外观** | 深色模式、缩放 |

## 数据

| 项 | 位置 |
|---|---|
| 你的文档 | `.data/store.json`（纯 JSON） |
| 接口日志 | `.data/api.log`（仅方法/路径/长度） |
| 编辑器资源 | `.cache/`（可删，删了要重新 `fetch_assets.py`） |

- **备份**：复制 `.data/store.json` 或整个 `.data/`。
- **清空**：删掉 `.data/store.json`，下次启动自动建空文档。
- **换机器**：整个目录拷走（含 `.cache/` ）。
## 目录结构

```
mathcha-local/
├── server.py          # 本地服务（静态只读缓存 + 本地 /api 实现）
├── local_api.py       # 文档存取：init2 / active2 / 读 / 保存 / 新建 / 重命名 / 删除 / md 导入导出
├── md_convert.py      # Markdown ↔ 模型 转换器（CLI + HTTP 接口的实现）
├── md_selftest.py     # Markdown 转换自检（结构断言 + 回环幂等 + 探针样本回归）
├── fetch_assets.py    # 唯一的联网脚本：首次安装或升级时下载资源
├── start.sh           # 启动
├── assets.txt         # 静态资源清单（88 项）
├── chunks.txt         # 懒加载 chunk 清单（25 项）
├── cas-assets.txt     # CAS 引擎资源清单（8 项）
├── docs/              # 说明文档（CAS 用法、白纸模式等）
├── web/               # 本地前端扩展（白纸模式、\title1/2/3 标题命令；server.py 注入）
├── .data/store.json   # 你的文档（唯一需要备份的文件）
├── .cache/            # 编辑器资源缓存（约 31 MB）
└── screenshots/
```

## 排查

| 现象 | 处理 |
|---|---|
| 启动提示"缺少离线资源" | 联网跑一次 `python3 fetch_assets.py` |
| 页面 404 某个 `/cdn/...` | 看 `.data/cache-misses.log`，再跑 `fetch_assets.py` 补齐 |
| 样式 / 字体异常 | 删掉 `.cache/` 后 `fetch_assets.py --force` |
| 白纸模式入口没出现 / 进入后还是灰底 | 重启 `./start.sh`（旧的 server.py 进程不会注入 `web/paper-mode.*`）；再看浏览器控制台里 `/web/paper-mode.css` 是否 404 |
| 选公式点 fx 面板一直转圈 / 报 `Could not initialize CAS worker` | 联网跑一次 `python3 fetch_assets.py` 补 CAS 资源（约 11 MB）；还缺就看 `.data/cache-misses.log` 里缺哪个 `/resources/pyodide/...` |
| 某个 CAS 运算失败 | 看操作卡片底部的红条（SymPy 报错摘要），点 Details 看完整 traceback。常见原因：选区不是数学公式 / 不是矩阵却跑矩阵操作 / 方程没有解析解 |
| 文档打不开 | `python3 -m json.tool .data/store.json` 检查 JSON |
| `md_convert.py import` 报连不上服务 | 先 `./start.sh`，或加 `--offline` 直接写 store（服务运行期间别用 `--offline`） |
| 导入 Markdown 时看到 `lossy:` | 正常降级提示（代码块/引用/表格/图片/H4+），不丢内容，详见 [docs/markdown.md](docs/markdown.md) |

## 合规

用 Mathcha 公开发布的前端代码在本机跑一个纯离线副本，**仅供个人本机使用**
需要官方离线版可购买 [Mathcha Notebook](https://www.mathcha.io/notebook/)。

CAS 引擎是 Pyodide（MPL-2.0）和 SymPy（BSD）的本地 wasm 副本，只随本机缓存使用，不对外分发。
