# 白纸模式（Paper Mode）独立验收报告

- 被测版本：`src/web/paper-mode.js` (2026-11-15 11:02:03, md5 `8eed6aec…`)、`src/web/paper-mode.css` (11:07:33, md5 `b5a598d8…`)、`src/server.py` (10:19, md5 `c171641a…`)、`docs/paper-mode.md` (11:02:38)
- 被测实例：`http://127.0.0.1:7802/editor`（Lead 起的 dev 实例，数据在 `data/paper-dev/`，CAS 启用；测试期间 7802 数据由我独占写入，未重启服务）
- 对照实例：`http://127.0.0.1:7801/editor`（旧版，无白纸模式注入；**只读**，只做测量，未打字、未改文档、未动用户页签）
- 测试页签：新开窗口 page 15（`document.visibilityState === 'visible'`，所有键鼠用 CDP 真实事件投递）
- 结论：**PASS 50 / FAIL 0 / 未验证 1**；**无 P0/P1，无阻塞发布问题**。核心链路（进入/退出/白纸外观/输入/公式/CAS 打开/保存/撤销/右键/查找/响应式/深色/状态同步/普通模式回归）全部可用。建议修复 1 个 P2（深色偏好冷启动时首屏短暂"非白纸态"）后再交付，其余为 P3 与文档/环境注记。
- **更新（2026-11-15 11:47）**：P2-1 已由 Lead 修复并通过专项复测（冷启动 rAF 逐帧采样 0 个 "paper-mode+dark" 帧；退出主题恢复回归一并修复）。详见 §5「P2 修复后专项复测」。**当前结论：可发布。**

---

## 0. 测试环境与限制（先读，影响结论解读）

| # | 事项 | 说明 / 处理 |
|---|---|---|
| 0.1 | 1.5 倍缩放怪癖 | CDP `Emulation.setDeviceMetricsOverride` 请求 `{2160,1350,dsf:1.5}` 得到 CSS `1440x900`，已用 `innerWidth/innerHeight` 逐个校准；1024x768 / 768x1024 / 390x844 分别请求 `1536x1152` / `1152x1536` / `585x1266`（mobile:false）后实测确为对应 CSS 尺寸 |
| 0.2 | rAF 冻结 | 本机 Chrome 窗口失焦时 `requestAnimationFrame` 不触发，CSS transition 停在 time=0（实测 `getAnimations()` 显示 running/t=0）。**浮层"淡出"验收以 `#paper-chrome` 的 class(`is-idle`) 与 CSS 目标规则(opacity:0 / pointer-events:none)为准**；窗口获焦时实测 transition 可完成（class 切换后 opacity 实际到 0，mousemove 后回 1）。按要求不记作 bug |
| 0.3 | 截图不可靠 | BrowserOS 截图在本环境返回缓存帧：同一页面修改 DOM（临时改成红色块）后再次截图 sha256 完全不变，最后一张请求直接超时。**外观结论全部来自 `getBoundingClientRect()/getComputedStyle()/elementFromPoint()`**，截图只作人工观感参考，不作为判据 |
| 0.4 | 触摸模拟 | CDP 无法模拟 `(hover: none)` 媒体特性，触摸屏"浮层常显"只能做 CSSOM 静态验证 |
| 0.5 | 数据 | 测试文档为 Lead 提供的丢弃型文档「空白-白纸测试」（`Q6OuLybeUlyA`），测试中写入 `hello`、行内公式 `x+1`、显示公式 `x^2-9`、`Z`、`X/Y` 等痕迹，均属测试数据；测试前后未触碰 7801 数据 |

---

## 1. 测试矩阵

> 结果判定：PASS = 实测符合期望；FAIL = 不符合；「未验证」= 无法在自动化环境里构造该场景，单列在 §3。

### A. 进入（5/5 PASS）

| ID | 用例 | 期望 | 实际 | 结果 |
|---|---|---|---|---|
| A1 | 普通模式右上角「白纸模式」入口按钮，真实鼠标点击 | 进入白纸模式；header 等 chrome 隐藏；编辑器可获得焦点 | `state={on:true,native:true}`、`html.paper-mode`、`activeElement=TEXTAREA`、入口按钮 `display:none` | PASS |
| A2 | 普通模式下真实键盘 `Alt+Shift+E` | 进入白纸模式 | 进入成功（`on:true,native:true`，localStorage 记 `1`） | PASS |
| A3 | URL `?paper=1` | 打开即白纸 | `url:true`，`on:true,native:true`，`stored:"1"` | PASS |
| A4 | URL `#paper` | 打开即白纸 | `hash=#paper`，`url:true`，`on:true,native:true` | PASS |
| A5 | localStorage 记忆：上次在白纸模式，刷新普通 `/editor`（无参数） | 自动进入白纸模式 | 3 次复现（含深色偏好时）：`on:true,native:true,stored:"1",url:null` | PASS |

### B. 退出（5/5 PASS）

| ID | 用例 | 期望 | 实际 | 结果 |
|---|---|---|---|---|
| B1 | 浮层「✕ 退出」真实鼠标点击 | 恢复完整界面；恢复原主题 | `on:false,native:false`、`html` 无 class、header `display:flex`；深色偏好下 `data-ui-theme` 恢复 `dark`、content-area/body 恢复 `rgb(27,30,34)`；localStorage 记 `0` | PASS |
| B2 | 白纸模式内真实键盘 `Alt+Shift+E` | 退出 | 退出成功（`on:false`，stored `0`） | PASS |
| B3 | 单次 `Esc` 不误退；150 ms 内连按两次 `Esc` | 单次不退出；双击退出 | 单次后 900 ms 仍 `on:true`；150 ms 双击后 `on:false`、`stored:"0"` | PASS |
| B4 | URL `?paper=0`（localStorage 记忆为 `1` 时） | 临时覆盖记忆：普通模式 | `on:false,url:false`，header/sidebar/toolbar 可见；`stored` 仍为 `"1"`（与文档"临时覆盖"一致） | PASS |
| B5 | URL `#normal`（记忆为 `1` 时） | 普通模式 | 普通布局，`on:false` | PASS |

### C. 白纸外观（9/9 PASS，其中 C6/C9 见环境注记）

| ID | 用例 | 期望 | 实际（1440×900） | 结果 |
|---|---|---|---|---|
| C1 | 背景全白 | html/body/#root/page/container-layer/content-area 全白 | 全部 `rgb(255,255,255)`（含 `math-type`、`.doc-scroll-container`） | PASS |
| C2 | chrome 全部不可见 | header/侧栏/格式工具栏/插入条/info bar/resize bar 不渲染 | 上述 8 类节点均 `display:none` 且 rect 0×0（`.menu-bar-container` 亦为 none） | PASS |
| C3 | 纸张无描边/阴影 | 无 border/outline/box-shadow | `border:0px none`、`outline-style:none`、`box-shadow:none`；`padding-top:32px` | PASS |
| C4 | 无横向滚动 | `scrollWidth == clientWidth` | docEl `1440=1440`；docScroll `1434=1434`；另在 1024/768/390 三档也满足（见 F） | PASS |
| C5 | 滚动条细浅 | 细、浅色 | `scrollbar-width:thin`、`scrollbar-color:rgb(220,220,220) transparent` | PASS |
| C6 | 浮层静止约 2.8 s 后淡出 | class 变 `is-idle`，目标 opacity 0 | 实测 `#paper-chrome` class=`is-idle`，CSS 目标 `opacity:0`；rAF 冻结时 computed 可能停在旧值（0.2 注记），窗口获焦时实测 opacity 到 0 | PASS |
| C7 | mousemove 后浮层唤回 | 去 `is-idle`、恢复可见可点 | 真实 mouseMoved 后 class 清空、opacity 1、按钮 `pointer-events:auto` | PASS |
| C8 | 淡出后不拦截纸张右上角点击 | 点在按钮位置应落到纸面 | `elementFromPoint(退出按钮坐标)` = `CONTENT-AREA`；按钮 `pointer-events:none`（`@media (hover:hover)`） | PASS |
| C9 | 触摸设备浮层常显 | `(hover:none)` 时 opacity 恒 1 | CSSOM 中存在规则 `@media (hover: none){html.paper-mode #paper-chrome,#paper-chrome.is-idle{opacity:1}}`（无法动态模拟触摸，仅静态验证） | PASS（静态） |

### D. 空白状态提示（5/5 PASS）

| ID | 用例 | 期望 | 实际 | 结果 |
|---|---|---|---|---|
| D1 | 空文档进入白纸模式（清 session 标记后刷新 `?paper=1`） | 提示出现 | `#paper-hint` `display:block`、opacity 1、rect `[440,342,560,60]`（水平居中，38vh），文案正确 | PASS |
| D2 | 提示不挡鼠标 | `pointer-events:none`，点击穿透到纸面 | `pointer-events:none`；`elementFromPoint(提示中心)` = `EDITAREA.root-editor` | PASS |
| D3 | 点击纸张 | 提示淡出、可继续书写 | class `is-hidden`→`display:none`、opacity 0、sessionStorage 标记 `1`；光标落在纸上 `[386,126]` | PASS |
| D4 | 直接输入字符 | 提示消失 | 输入 `b` 后提示 `display:none`、标记 `1`、正文变为 `b`（keydown 字符即触发 dismiss） | PASS |
| D5 | 同一会话内不再出现 | 退出再进 / 刷新（sessionStorage 保留）都不再出现 | 退/进后无 `#paper-hint`；刷新后仍无 | PASS |

### E. 功能回归（白纸模式内）：10 PASS + 1 未验证

| ID | 用例 | 期望 | 实际 | 结果 |
|---|---|---|---|---|
| E1 | 输入文字 `hello` | 可正常输入、进文档模型并自动保存 | 正常插入；`api.log` 出现 `PUT /api/documents/Q6OuLybeUlyA/content` | PASS |
| E2 | 按 `$` | 插入行内公式 | 出现 `compositeblock.math-container-symbol inline`，内部 `x`/`+`/`1` 按 math block 渲染 | PASS |
| E3 | 按 `\` | 符号建议框出现且白底可读 | `.auto-complete-container` 282×291，背景 `#fff`/文字 `#333`（深色偏好下仍为浅色） | PASS |
| E4 | 建议框打开时 `Esc` | 不退出白纸模式（Esc 让给浮层） | 连按两次 Esc 后建议框关闭，全程 `on:true`；未发生误退（"单次 Esc 不关框"见 P3-1） | PASS |
| E5 | 选中公式 → `fx` 真实点击 | CAS 面板打开、列出 SymPy 操作 | 右侧面板 420×828 @`(1020,72)`，标题 `CAS Dialog`，`33/33` 加载完成，列出 Substitute/Simplify/Expand/Factor/Cancel/Partial Fractions/… 共 33 项，浅色主题 | PASS |
| E6 | 自动保存 | 编辑后写 `data`，刷新后仍在 | `data/paper-dev/data/store.json` 多次更新（11:09/11:10/11:11 等 PUT），刷新后正文（hello、x+1、x²−9、Z）完整恢复 | PASS |
| E7 | `Ctrl+S` | 触发保存 | `api.log` 出现 `PUT … body=2029B`，`Saved` 状态；深色/浅色下均正常 | PASS |
| E8 | `Ctrl+Z` 撤销 | 撤销最近输入 | `helloX` → `Ctrl+Z` → `hello` | PASS |
| E9 | 右键菜单 | 自定义上下文菜单打开 | `context-menu-container` @点击点 202×256、白底，含 Copy/Cut/Delete/Spell Check 等 | PASS |
| E10 | `Ctrl+F` 查找替换 | 打开查找替换面板、浅色可读 | `find-and-replace-area` @`(1031,0)` 397×61，背景 `#f7f7f7`，find 输入框存在 | PASS |
| E11 | CAS 实际执行（点 Simplify 的 Run） | 出 SymPy 结果 | 未观测到结果输出（点击面板导致编辑器选区丢失、SymPy 无输入；属 CAS 既有交互，非白纸模式引入） | 未验证 |

### F. 响应式（4/4 PASS）

> 全部用 CDP Emulation 模拟；用 `getBoundingClientRect()` 量测，不用截图量像素。

| ID | 视口（校准后） | 期望 | 实测 | 结果 |
|---|---|---|---|---|
| F1 | 1440×900 | 纸张 700 居中、无横向滚动、右上浮层不遮正文 | math-type `[367,91,700,552]`（左右留白 367/373）；docEl `1440=1440`；chrome `[1288,10,138,28]` 与纸张无重叠 | PASS |
| F2 | 1024×768 | 纸张不溢出、无横向滚动、浮层不遮正文 | math-type `[159,79,700,552]`（左右 159/165）；docEl `1024=1024`；chrome `[872,10,138,28]` 不重叠；`content-area` 上游 min-width 950 未造成溢出 | PASS |
| F3 | 768×1024 | 平板档：解除 950 最小宽度、纸张贴窗口、无横向滚动 | `@media(max-width:1023)` 生效：`content-area min-width:0`、`overflow-x:hidden`；math-type `[54,71,660,542]`（左右 54/54）；docEl `768=768` | PASS |
| F4 | 390×844 | 手机档：纸张满宽+18px 内边距、无横向滚动、浮层图标化 | `@media(max-width:599)` 生效：math-type `[0,38,390,552]`、`padding:34px 18px 18px`；正文最大右缘 372<390；chrome `[311,8,71,26]`（label 隐藏）；docEl `390=390` | PASS |

### G. 深色模式（3/3 PASS）

| ID | 用例 | 期望 | 实际 | 结果 |
|---|---|---|---|---|
| G1 | `localStorage mathcha.ui-theme=dark` + 刷新进入白纸 | 整屏纯白、正文深色字 | 8 个背景节点全 `#fff`；`html[data-ui-theme]` 被强制为 `light`；正文 `rgb(0,0,0)` | PASS |
| G2 | 深色偏好下打开建议框 | 浅色可读 | 建议框 `#fff`/`#333`，列表项背景 `#f7f7f7`/`#dcebd8` 等浅色 | PASS |
| G3 | 退出白纸 | 恢复深色主题与完整界面 | `data-ui-theme=dark`、header `flex`、content-area/body `rgb(27,30,34)`；`mathcha.ui-theme` 未被改写 | PASS |

### H. 状态同步（2/2 PASS）

| ID | 用例 | 期望 | 实际 | 结果 |
|---|---|---|---|---|
| H1 | `Alt+Shift+E` 连续进出 5 次（CDP 真实快捷键路径） | 每次 `on/native` 一致、无卡 busy、无脱节 | 5 轮全部：进入 `on:true,native:true`；退出 `on:false,native:false`；`busy:false`；html class 正确；错误数组为空 | PASS |
| H2 | 原生快捷键双向：白纸内直接按 → 退出；普通模式按 → 进入 | 两方向都生效 | 均已用真实键盘事件实测通过（见 A2/B2） | PASS |

### I. 普通模式回归（4/4 PASS）

| ID | 用例 | 期望 | 实际 | 结果 |
|---|---|---|---|---|
| I1 | 7802 普通模式 vs 7801 旧版，逐元素几何 | 除新增入口按钮外界面一致 | 完全一致：header `1440×35`、sidebar `222×866@(0,35)`、toolbar `1218×37@(222,35)`、content-area `1206×615@(224,72)`、doc-scroll `1216×828@(224,72)`、info-bar `[1126,869,299,26]`、resize-bar `1175,152,3×535`、math-type `477,152,700×535` | PASS |
| I2 | 7802 普通模式无白纸模式残留 | 无 `paper-mode` class / 浮层 / 提示 | `html class=""`、`#paper-chrome display:none`、`#paper-hint` 不存在；唯一新增为入口按钮 `[1342,6,86,24]` | PASS |
| I3 | 7801 旧版确实无注入（对照） | 无 `paper-mode.*` 资源与入口 | `window.__paperMode` 不存在、无 `paper-mode.css` 样式表、无入口按钮；背景 `#eee` | PASS |
| I4 | 入口按钮可见可读（正常模式） | 绿色 header 右上白色半透明胶囊；窄屏只显示图标 | 桌面：`[1342,6,86,24]`、白字/白 12% 底/白 55% 边、opacity .62（hover 1）、`z-index:2147482000`、`elementFromPoint` 命中按钮内 `SPAN.pe-label`（最顶层）；390 宽：`[358,6,24,24]`、`right:8px`、`pe-label display:none`；与文档名文本 `[771,14,92,14]`（窄屏 `[246,14,92,14]`）无重叠 | PASS（DOM 判定；截图见 0.3） |

### J. JS 错误（3/3 PASS）

| ID | 用例 | 期望 | 实际 | 结果 |
|---|---|---|---|---|
| J1 | `window.onerror` / `unhandledrejection` | 无 uncaught error | 注入钩子后覆盖 入口/退出/双击 Esc/URL/深色/5 次切换/响应式/功能回归：错误数组始终 `[]` | PASS |
| J2 | `console.error` | 无 | 钩子捕获数组始终 `[]` | PASS |
| J3 | `window.__paperMode.state()` 一致性 | `on/native/busy/stored/url` 自洽 | A/B/H 各步逐次核对均自洽，未出现 `on:true,native:false` 之类脱节 | PASS |

**汇总：PASS 50，FAIL 0，未验证 1（E11，另见 §3 未覆盖清单）。**

---

## 2. 问题清单（按严重度）

### P0 / P1：无

未发现阻塞发布或破坏文档数据的问题。

### P2-1（中，已修复，复测见 §5）深色偏好冷启动时首屏短暂"非白纸态"（FOUC + 主题回写）

- **复现步骤**
  1. `localStorage['mathcha.ui-theme']='dark'`、`localStorage['mathcha-local.paper-mode']='1'`；
  2. 打开 `http://127.0.0.1:7802/editor`（无参数，走"记忆自动进入"）；
  3. 用 `setInterval(20ms)` 采样 `document.documentElement.className / data-ui-theme`。
- **实测时间线**（本轮最终代码；两次冷启动采样模式一致，具体时刻因缓存/负载略有差异，下表为其中一次）
  - `t≈416ms`：`class=""`、`theme=dark`（尚未进入白纸态，界面为普通模式）
  - `t≈445ms`：`class="paper-mode paper-pending"`、`theme=light`
  - `t≈1124ms`：Mathcha 启动完成后把 `data-ui-theme` 写回 `dark`
  - `t≈1237ms`：`paper-pending` 移除（进入完成）
  - `t≈1277ms`：轮询把 `data-ui-theme` 拉回 `light`
- **期望**：首帧即白纸外观；深色偏好下 `data-ui-theme` 全程保持 `light`。
- **影响**：深色用户冷启动/用 `?paper=1` 书签打开时，可能看到约 0.4–0.6 s 的正常界面或深色浮层闪动（内容区因 CSS `!important` 一直是白底，核心功能与数据不受影响；实测 1.3 s 后即稳定为白纸态）。属观感问题，不阻塞核心功能。
- **涉及文件:行**
  - `src/server.py:105-108`（`PAPER_MODE_ASSETS` 以 `defer` 注入）、`src/server.py:227`（注入到 `</head>`）
  - `src/web/paper-mode.js:562-575`（`boot()` 在 DOMContentLoaded 后才加 `paper-mode` class）
  - `src/web/paper-mode.js:126-140`（`forceLightTheme`）、`src/web/paper-mode.js:539-546`（每 120 ms 轮询纠正 `data-ui-theme`）
- **建议修法**
  1. 在 `</head>` **最前面**注入一段非 `defer` 的内联脚本，同步读 localStorage/URL 后立即 `document.documentElement.classList.add('paper-mode','paper-pending')` 并 `setAttribute('data-ui-theme','light')`（此时 head 中已有 `paper-mode.css`，可保证首帧白）；
  2. 给 `data-ui-theme` 挂 `MutationObserver`，被上游改回 dark 时立即纠正，而不是等 120 ms tick；
  3. 如可接受极短空白，可再在 `html.paper-pending` 上 `visibility:hidden` 到进入完成，彻底消除闪动。

### P3-1（低，且非白纸模式引入）双击 Esc 与"关闭建议框"的交互和文档描述不符

- **实测**：无浮层时行为完全符合 B3（单次不退出、150 ms 双击退出）。但**"建议框/查找替换打开时单次 Esc 关闭它"在本机不成立**：建议框打开时第 1 次 Esc 后浮层仍在（约 500 ms 内多次采样仍可见），第 2 次 Esc 才关闭；随后 500 ms 内的下一次 Esc 也不会退出白纸模式（安全方向，不会误退）。
- **对照**：在 7802 **普通模式**（未进入白纸模式，白纸 JS 不拦截 Esc）重复同一操作，同样是"两次 Esc 才关建议框"，说明这是上游/环境行为，**不是白纸模式引入的回归**。
- **涉及文件:行**：`src/web/paper-mode.js:497-536`（`hasOpenOverlay()` + `escCount` 逻辑）、`docs/paper-mode.md:28`（文档表述）。
- **建议**：文档改为"浮层打开时 Esc 交给 Mathcha 关浮层（本机可能需连按两次），不会退出白纸模式；无浮层时 500 ms 内双击 Esc 退出"；代码无需改动（当前行为更安全）。

### P3-2（低）多页签共享 localStorage，白纸模式"记忆"会互相覆盖

- **实测**：7802 同源多页签并存时，另一个页签（`?paper=1`/刷新）会把 `mathcha-local.paper-mode` 写成 `"1"`，导致本页签退出后 `stored` 仍为 `"1"`（页面自身 UI 状态正确）；还观察到一次白纸模式中 `stored:"0"`。影响的是下次打开时的"自动进入"判断，不影响当前页工作。
- **涉及文件:行**：`src/web/paper-mode.js:25`（存储键）、`src/web/paper-mode.js:373-386`（`applyPaper` 持久化）、`src/web/paper-mode.js:562-575`（`boot` 读取）。
- **建议**：监听 `storage` 事件同步其它页签开关；或改用 `sessionStorage` 存"记忆"；至少文档注明多页签会互相影响。

### P3-3（低）`?paper=0` 只临时覆盖、不清记忆

- **实测**：记忆为 `1` 时用 `?paper=0` / `#normal` 打开确为普通模式（`on:false`），但 localStorage 仍为 `"1"`，之后不带参数再打开又会自动进入白纸模式。文档 §1 已写明是"临时覆盖"，行为与文档一致，但用户可能误以为"退出没生效"。
- **涉及文件:行**：`src/web/paper-mode.js:82-93`（`urlPref`）、`src/web/paper-mode.js:562-575`；`docs/paper-mode.md:20`、`docs/paper-mode.md:107`。
- **建议**：文档加一句"想持久关闭请用界面按钮退出，或删 localStorage 键"；或提供 `?paper=0&forget=1` 之类可选语义。

### P3-4（低，非白纸模式范畴）CAS 面板没有可见关闭按钮

- 打开 fx 后按 Esc 不关闭、面板内仅有设置按钮，白纸模式下看不到完整菜单，用户可能只能再点 fx/刷新页面关闭。属既有 CAS 功能，白纸模式未改动它；建议另开任务（如加关闭按钮或 Esc 关闭）。

### P3-5（低，文档细节）桌面留白数值与文档不一致

- `docs/paper-mode.md:80` 称"上下留白约 5–7 vh"，实测 `src/web/paper-mode.css:112-115` 的 `content-area padding-top: clamp(48px,9vh,112px)`（1440×900 时为 81px，纸张顶边 y=91 ≈ 10.1vh），底部 `padding-bottom:28vh`。建议文档与 CSS 对齐。

### 环境注记（非 bug，供后续复测参考）

1. **rAF 冻结**：窗口失焦时 transition 不推进，`is-idle` 已加但 opacity 可能停在旧值；class 与目标样式正确，窗口获焦后 transition 可正常完成。验收/自动化请以 class + 目标规则为准，勿以截图 opacity 判 bug。
2. **截图工具缓存/超时**：同页面改 DOM 后截图 sha256 不变、末次超时；请以 DOM 量测为准。
3. **CDP 输入限制**：Enter/Tab/字符都通过 `Input.dispatchKeyEvent`/`insertText` 投递，Mathcha 工具栏按钮对合成 mouse 事件的响应不稳定（点击 Bold 后焦点落到 `DIV`，`Ctrl+B` 无效），因此富格式构造受限（见 §3）。

---

## 3. 未覆盖 / 无结论项

1. **CAS 实际运算结果**：点击 Simplify 的 Run 后未观察到 SymPy 结果输出——点击面板导致编辑器选区丢失，SymPy 拿不到表达式；属 CAS 既有交互，未在白纸模式内验证"Run 出结果"链路（面板打开、动作列表、浅色主题已验证）。
2. **富格式文档（多字号/颜色/表格/对齐）**：受 0.3/CDP 输入限制，未能构造粗体/颜色/表格样本。已做的替代验证：
   - 现有 30 个内容元素（文字、行内公式、显示公式）在白纸模式下 **0 个被隐藏**，字体/颜色/位置不变；
   - CSSOM 中 18 条 `html.paper-mode` 规则**没有一条**以后代/通配方式命中内容元素（只按具名 chrome 元素逐条隐藏），静态看误伤风险低。
   - 建议人工打开一份含表格/多字号的文档进入白纸模式复核（重点：`table` 系列节点、`[class*="page-break"]` 不会命中内容）。
3. **触摸屏 `(hover:none)` 浮层常显**：仅 CSSOM 静态验证，未能动态模拟触摸媒体特性。
4. **打印样式**（`@media print` 隐藏浮层）与 **`prefers-reduced-motion`**：代码存在但未动态验证。
5. **退出后恢复"原光标位置"**：未单独量测（只验证了退出后焦点回到编辑器、可继续输入）。
6. 7801 侧未做任何写操作，普通模式回归仅做只读量测对照。

---

## 4. 结论与建议

- **可以发布**：无 P0/P1，50 项验收全部通过，核心能力（书写、公式、CAS 面板、保存/自动保存、撤销、右键、查找、四档响应式、深色、状态同步、普通模式回归、无 JS 错误）在白纸模式内均可用。
- **建议发布前/后处理**：
  1. P2-1（首屏/深色主题闪动）建议优先修：改动小（内联预设 class + 主题 MutationObserver），收益是深色用户冷启动观感；
  2. P3-1 文档措辞修正（Esc 与浮层）；
  3. P3-2/P3-3 视产品预期决定是否处理（多页签记忆、临时关闭语义）；
  4. P3-4（CAS 关闭入口）建议另开任务；
  5. P3-5 文档数值对齐。
- **复测建议**：修复 P2-1 后用同样的 class/theme 采样脚本复核时间线；人工/真实输入复核富格式文档与触摸设备；补测 E11（CAS Run 出结果）。

---

## 5. P2 修复后专项复测（2026-11-15 11:38–11:47）

> 只复测 Lead 指定的 A/B/C 三项，不重跑全矩阵。

### 5.1 复测版本

| 文件 | mtime | md5 |
|---|---|---|
| `src/server.py`（新增 `PAPER_MODE_BOOT` 内联 boot 脚本，注入在 `</head>`、defer 脚本之前） | 2026-11-15 11:37:00 | `332324da…` |
| `src/web/paper-mode.js`（`forceLightTheme` 优先用 `__paperBootPrevTheme`；新增 `data-ui-theme` MutationObserver；退出先摘 class 再恢复主题） | 2026-11-15 11:34:59 | `79250847…` |
| `src/web/paper-mode.css` | 2026-11-15 11:07:33 | `b5a598d8…`（未变） |

复测页签：新建窗口 page 23（原 page 15 所在窗口此时 rAF 已冻结——未聚焦/被遮挡；新建窗口 rAF 正常，符合 §0.2 注记）。原 rAF 采样/错误钩子脚本注册在旧 target，本页签用新的 rAF 帧采样脚本。

### 5.2 A. 冷启动时间线（rAF 逐帧采样）—— PASS

**方法**：`localStorage['mathcha.ui-theme']='dark'` + `localStorage['mathcha-local.paper-mode']='1'` → `Page.addScriptToEvaluateOnNewDocument` 注入 rAF 递归采样（每帧记录 `Math.round(performance.now())`、`classList.contains('paper-mode')`、`data-ui-theme`、`__paperBootPrevTheme`；前 40 帧及状态变化帧额外记录 html/body/#root/page/container-layer/content-area 的计算背景色；上限 300 帧）→ reload 普通 `/editor`（走"记忆自动进入"）→ 读 `window.__frames`。

| 指标 | 原生窗口 415×303 | Emulation 1440×900 |
|---|---|---|
| 记录帧数 / 时间跨度 | 300 帧 / 108–5242 ms | 300 帧 / 110–5230 ms |
| 首帧（第 1 帧） | `paper=1`、`theme=light`、`bootPrev=dark`、html/body/#root 背景均 `rgb(255,255,255)` | 同左 |
| `paper-mode` class 首次出现 | t=108 ms（第 1 帧） | t=110 ms（第 1 帧） |
| `data-ui-theme=light` 首次出现 | t=108 ms（第 1 帧） | t=110 ms（第 1 帧） |
| **`paper-mode` 存在 + `theme=dark` 的帧数** | **0** | **0** |
| 无 `paper-mode` 的帧数 | 0 | 0 |
| `paper=1` 时非白背景的帧数（6 个 workspace 节点） | 0 | 0 |
| page / container-layer 首次出现 | t=369 ms，背景 `#fff` | t=349 ms，背景 `#fff` |
| content-area 首次出现 | t=406 ms，背景 `#fff` | t=395 ms，背景 `#fff` |
| 状态变化点 | 仅 1 个（起始即 light，300 帧内无任何变化） | 同左 |

对比修复前（旧版）时间线：`t≈445ms` class 才出现、`t≈1124ms` 上游把 theme 写回 dark、`t≈1277ms` 才被轮询拉回 → 修复后**首帧即白纸浅色**，300 帧内 0 次回退，两个视口均无 `paper-mode+dark` 帧。**PASS（D 项不适用：没有可上报的异常帧）。**

### 5.3 B. 退出恢复主题（3 次进出）—— PASS

白纸模式内退出 → 记录 900 ms 后与再 1.2 s 后的状态（确认不会被观察器反弹回 light）→ 再进入。

| 轮次 | 退出方式 / 再进入方式 | 退出后 | 再进入后 |
|---|---|---|---|
| 1 | 浮层「退出」点击 / 入口按钮点击 | `theme=dark`、html/body/content-area `rgb(27,30,34)`；1.2 s 后仍 dark | `theme=light`、全部 `#fff` |
| 2 | `Alt+Shift+E` / `Alt+Shift+E` | 同上，dark 稳定 | 同上，light |
| 3 | 浮层「退出」点击 / 入口按钮点击 | 同上，dark 稳定 | 同上，light |

补充：`localStorage['mathcha.ui-theme']` 全程保持 `dark`（未被改写）；`mathcha-local.paper-mode` 在 0/1 间正确切换；`__paperBootPrevTheme` 首次冷启动记录为 `dark`，退出恢复 dark。**PASS（"退出后深色主题恢复不了"的回归已修复）。**

### 5.4 C. 顺手回归 —— PASS

| ID | 用例 | 实测 | 结果 |
|---|---|---|---|
| C1 | `localStorage.paper-mode=1`、`theme=dark` 时打开 `?paper=0` | 普通模式；`data-ui-theme=dark`、html/body/content-area `rgb(27,30,34)`、header `flex`；该文档 300 帧采样全部 `paper=0`/`theme=dark`，0 个 light 帧；`__paperBootPrevTheme` 未产生（内联 boot 因不满足条件提前 return） | PASS |
| C2 | 普通模式 Menu→Appearance 切到 **Light** → 进入白纸 | 白纸内强制 light（`#fff`） | PASS |
| C3 | C2 后退出白纸 | 恢复 **Light**（工作区 `rgb(238,238,238)`），不是 stale dark | PASS |
| C4 | 再切回 **Dark** → 进入白纸 | 白纸内仍强制 light（`#fff`），LS theme 仍 dark | PASS |
| C5 | C4 后退出白纸 | 恢复 **Dark**（html/body/content-area `rgb(27,30,34)`） | PASS |

### 5.5 复测结论

- **P2-1 已修复**：415×303 与 1440×900 两个视口各 300 帧 rAF 采样，**0 帧**出现 `paper-mode` + `theme=dark`，0 帧普通模式，0 帧非白背景；首帧即白纸浅色（首帧 t≈108–110 ms）。
- **退出深色主题恢复回归已修复**：3 轮「退出→dark / 再进入→light」，退出后 dark 稳定不反弹；手动进入白纸使用当前主题，退出正确恢复用户所选主题（C 项覆盖 light/dark 两个方向）。
- `?paper=0` 下深色正常（不被强制 light），普通模式主题切换与白纸模式互不污染。
- **未发现新问题**，本轮无需进一步修复。§2 的 P2-1 关闭；复测 A/B/C 共 7 项全部 PASS（A 冷启动时间线 1 项、B 退出主题 3 轮 1 项、C 回归 5 项），报告整体计数：**PASS 50（首轮）+ 复测 7/7 PASS，FAIL 0**。

---

## 附录 A：关键量测数据

**A.1 白纸模式背景色（1440×900，最终版本）**

| 节点 | backgroundColor |
|---|---|
| `html` / `body` / `#root` / `page` | `rgb(255,255,255)` |
| `container-layer` / `content-area` | `rgb(255,255,255)` |
| `.doc-scroll-container` / `math-type` | `rgb(255,255,255)` |

**A.2 四档尺寸（CDP Emulation，CSS 视口已校准）**

| 视口 | math-type rect | 左右留白 | 横向滚动 | 右上浮层 rect | 浮层与纸张/正文重叠 |
|---|---|---|---|---|---|
| 1440×900 | `[367,91,700,552]` | 367 / 373 | 无（1440=1440） | `[1288,10,138,28]` | 否 |
| 1024×768 | `[159,79,700,552]` | 159 / 165 | 无（1024=1024） | `[872,10,138,28]` | 否 |
| 768×1024 | `[54,71,660,542]` | 54 / 54 | 无（768=768，overflow-x hidden） | `[616,10,138,28]` | 否 |
| 390×844 | `[0,38,390,552]` | 0 / 0（内边距 18px） | 无（390=390，overflow-x hidden） | `[311,8,71,26]` | 否 |

**A.3 冷启动时间线（深色偏好 + 记忆进入，最终版本）**

```
t≈416ms  cls=""                                  theme=dark
t≈445ms  cls="paper-mode paper-pending"          theme=light
t≈1124ms cls="paper-mode paper-pending"          theme=dark   ← 上游启动写回
t≈1237ms cls="paper-mode"                        theme=dark
t≈1277ms cls="paper-mode"                        theme=light  ← 轮询纠正（最长约 120ms）
```

---

## 附录 B：测试过程文件与数据痕迹

- 测试用页签：新窗口 page 15（1440×900 模拟）；7801 对照页签用完即关，未写入。
- 7802 测试文档「空白-白纸测试」内容已包含 `hello`、`x+1`（行内公式）、`x^2-9`（显示公式，因多次点击/撤销产生多份）、`Z`、`X`、`Y` 等测试痕迹；均属丢弃型数据。
- 为验证浮层"淡出不拦截点击"，测试中曾临时给入口按钮设置内联样式做像素级诊断，已还原（`style` 属性移除，计算样式恢复为原设计：opacity .62 / 背景 `rgba(255,255,255,0.12)` / 边框 `rgba(255,255,255,0.55)`）；未修改任何源码文件。
- 本报告是本次任务唯一产出的文件（未提交其它源码/文档改动）。
