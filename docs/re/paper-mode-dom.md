# 白纸模式：浏览器侧 DOM / 交互事实（动态实测）

> 目标：为「白纸模式」（整屏只剩一张干净白纸，复用 Mathcha 内置 Content View Only 做布局）提供**可直接抄的 selector 与实测数值**。
> 只调查**原生行为**，不含任何白纸模式的注入代码（唯一例外是第 5、4 节为验证「隐藏后还能不能触发」而临时做的一次性 DOM 操作，已注明）。
> 下所有数值均为 `getBoundingClientRect()` 实测（单位 CSS px），除非另注。

---

## 0. 环境与方法（先看，影响你复现）

| 项 | 值 |
|---|---|
| 被测实例 | `http://127.0.0.1:7899/editor`（隔离实例，数据目录 `data/paper-test-7899/.data`，与正式 7801 完全隔离） |
| 浏览器页签 | BrowserOS page id = **9**（`mcp__browseros__*` 的 `page:9`） |
| 上游产物 | `bundle-f9164fb5-ced37e37.js` + `styles-f9164fb5-ced37e37.css`（离线缓存，未改动） |
| 测试视口 | 默认 1440×900；响应式见第 6 节 |
| 文档状态 | 空白文档（1 个空行）与含公式文档两种都测过，结论一致（另注明差异处） |

**方法学注意（会踩坑）**：

1. **本机浏览器窗口是 150% 缩放**（`window.devicePixelRatio=1.5`）。CDP `Emulation.setDeviceMetricsOverride` 传的宽高会被再除以 1.5。要得到目标 CSS 视口 `W×H`，必须传 `width=W*1.5, height=H*1.5, deviceScaleFactor:1, mobile:false`。实测：传 `390` → `innerWidth=260`；传 `585` → `innerWidth=390`。
2. **真实键盘事件才可靠**：`Input.dispatchKeyEvent` 要用 `type:'rawKeyDown'`（`type:'keyDown'` + `text` 对 Alt+Shift+E 无效），且页签需要 `Page.bringToFront` 一次让窗口有焦点。`Input.insertText` 可直接输入文字。
3. **鼠标点击要真实**（`Input.dispatchMouseEvent` mousePressed/mouseReleased）：`el.click()` 走 React onClick 但不改变焦点，两者行为不同——这个差异恰好是第 4 节的核心结论。
4. **BrowserOS `screenshot` 不跟随 Emulation**（它抓的是窗口尺寸，1024×640 左右），因此响应式结论全部以 DOM 数值为准，截图只用于粗看。
5. 内置全屏**不持久化**：刷新后回到普通模式（实测）。localStorage 只有主题 `mathcha.ui-theme` 和视图模式 `mathcha-view-mode`。

---

## 1. 内置 Content View Only：状态判定与切换（Q1）

### 1.1 它是谁、状态存在哪

- 进入/退出的 UI 是右下角 `document-info-bar` 里的一个 `<span>`，由 bundle 里 `class sc` 渲染（`shouldComponentUpdate(e){return e.fullScreen!=this.props.fullScreen}`）。
- 真正的状态是 React 顶层组件 `bx` 的 `state.fullScreen`（`handleFullScreenToggle = () => this.setState({fullScreen:!this.state.fullScreen})`），**没有**暴露到 window、没有 CSS 类、没有 localStorage。
- 快捷键 `Alt+Shift+E` 来自编辑器容器里注册的全局 keydown 栈（bundle 原文，已拆分定位）：
  ```js
  // class pl，componentDidMount(){ va.A.stack(this.handleKeyDown) }  —— document 级 keydown
  69==t.keyCode && t.shiftKey && t.altKey && !t.ctrlKey && !t.metaKey &&
  (t.preventDefault(), t.stopPropagation(), this.props.onToggleFullScreen())
  ```
  所以判定条件就是 `keyCode=69` + `altKey` + `shiftKey`，**不检查 `isTrusted`**（见 1.4 合成事件结论）。

### 1.2 DOM 可观察信号（实测表，1440×900，空白文档）

| 观察点 | 普通模式 | Content View Only |
|---|---|---|
| `header#page-header` computed display | `flex` | `none` |
| `header#page-header` 的 **inline style** | 无（`null`） | 恰好是 `display: none;` |
| `container-layer` inline style | 无（`null`） | `height: 100%; min-height: 0px;` |
| `div.docs-container` inline style | `left: 224px; right: 0px; bottom: 0px;` | `left: 0px; right: 0px; bottom: 0px;` |
| `div.doc-scroll-container` inline style | `overflow: auto; height: calc(100% - 37px);` | `overflow: auto; height: 100%;` |
| `document-info-bar` 第 2 个子节点 | `<span class="full-view-button" title="Content View Only (Alt+Shift+E)">` | `<span title="Exit Content View Only (Alt+Shift+E)">`（**className 消失**） |
| `document-sidebar-container` inline style | `width: 220px;`（可见） | `display: none;` |
| `document-info-bar` 内的语言统计子节点 | 可见（`Lang: None, Words: N, Math: N` + `More`） | `display: none;`（React 内联） |
| `page` computed overflow | `hidden` | `hidden`（不变） |
| `document-info-bar` 尺寸 | 299×26 | 87×27 |
| `.full-view-button` 命中数 | 1 | **0** |

**结论（可靠度从高到低）**：

1. **最稳**：`container-layer` 的 inline `height:100%`（只由 `getContainerLayerStyle()` 在 `fullScreen` 时返回 `{height:"100%",minHeight:0}`）+ `header#page-header` inline `display:none`。两者同时成立才可能是全屏；普通模式这两条都不存在。
2. 次稳：`document.querySelector('[title^="Exit Content View Only"]') !== null`。
3. **不可靠 / 会误导**：
   - `.full-view-button` 只在**退出全屏后**存在 → 不能用「它存在」判定普通模式（全屏时它不存在，但移动端普通模式它也不存在，见 6.4）。
   - `document-info-bar` 本身：全屏时**仍然存在且可见**，只是内容变少。
   - `html` class / `data-*`：全屏不加任何类，`data-ui-theme` 只跟主题有关。

### 1.3 title 翻转是否可靠？

- 桌面视图：可靠，但注意 **class 会消失**。进入时是 `.full-view-button[title="Content View Only (Alt+Shift+E)"]`，进入后同一个 `<span>` 变成**无 class** 的 `[title="Exit Content View Only (Alt+Shift+E)"]`。
- 移动端视图（`localStorage['mathcha-view-mode']='mobile'`）：`document-info-bar` **根本不渲染**（`renderDocumentInfoBar(){ if(!Ar.A.isMobileOrTablet()) return ... }`），因此进/出都**没有这个 span**，title 判定完全失效（实测也确认：`.full-view-button` 与 Exit span 数量都是 0）。

### 1.4 推荐的 isFullScreen / toggle 代码（已实测可用）

```js
// —— 判定：不依赖 .full-view-button，不同视图模式都成立 ——
function isContentViewOnly() {
  const header = document.querySelector('header#page-header');
  const layer  = document.querySelector('container-layer');
  const byHeader = !!header && header.style.display === 'none';       // React 内联
  const byLayer  = !!layer  && layer.style.height === '100%';         // getContainerLayerStyle()
  const byExit   = !!document.querySelector('[title^="Exit Content View Only"]');
  return byExit || (byHeader && byLayer);
}

// —— 切换：两条通道，互为兜底 ——
function setContentViewOnly(want) {
  if (isContentViewOnly() === want) return true;
  // 通道 A：点内置按钮/退出 span。display:none 也有效（见第 5 节实测），
  //         且 el.click() 不会把焦点从编辑器身上拿走（见第 4 节）。
  const el = want
    ? document.querySelector('.full-view-button')
    : document.querySelector('[title^="Exit Content View Only"]');
  if (el) { el.click(); return true; }

  // 通道 B：合成 Alt+Shift+E（移动端视图没有按钮时唯一的 DOM 办法）。
  //         bundle 只读 keyCode/shiftKey/altKey，不检查 isTrusted；实测能触发。
  const ev = new KeyboardEvent('keydown', {
    bubbles: true, cancelable: true, key: 'E', code: 'KeyE',
    altKey: true, shiftKey: true,
  });
  Object.defineProperty(ev, 'keyCode', { get: () => 69 });
  Object.defineProperty(ev, 'which',   { get: () => 69 });
  document.dispatchEvent(ev);
  return true; // 调用方下一帧再 isContentViewOnly() 复核
}
```

实测记录：

- `el.click()` 进入/退出都成功（**即使按钮已被 CSS/inline `display:none` 隐藏**，见 5.2）。
- 合成 `KeyboardEvent` + `keyCode` getter：**成功**从全屏切回普通（普通模式下同样能进入，已验证方向一致）。
- 直接 `document.dispatchEvent(new KeyboardEvent('keydown', {keyCode:69,...}))` 不行——Chrome 构造函数不吃 `keyCode`，必须 `Object.defineProperty` 覆盖 getter。

### 1.5 toggle 的副作用 / 风险

- 内部 `onToggleFullScreen` 会触发整棵文档组件重渲染（工具栏、侧栏、info bar 都会重挂载），**不要让白纸模式自己再维护一份"是否全屏"布尔值**，每次以 1.4 的 `isContentViewOnly()` 为准，避免和用户按 Alt+Shift+E 脱节。
- 真实鼠标点内置按钮会**偷走焦点**（第 4 节），用 `el.click()` 不会。
- 内置全屏只切布局，**不影响** autosave / 撤销 / CAS / 光标模型（实测打字、撤销均正常）。

---

## 2. 进入后布局与残留可见 UI（Q2）

### 2.1 布局数值（1440×900，空白文档，两侧对比）

| 元素 | 普通模式 rect [x,y,w,h] | 全屏 rect | 说明 |
|---|---|---|---|
| `header#page-header` | [0,0,1440,35] | 0×0（`display:none`） | React 内联 |
| `document-sidebar-container` | 可见，宽 222（`document-sidebar-expanded` [0,35,222,866]） | 0×0（`display:none`） | React 内联 |
| `div.doc-toolbar-container` | [222,35,1218,37] `display:block` | 0×0 `display:none` | React 内联 |
| `items-bar`（左侧竖排插入条） | [234,115,44,116]，`position:absolute`，`z-index:3` | 0×0 `display:none` | 内置全屏自动隐藏（`hiddenOnDefaultItemsBar`） |
| `div.doc-items-bar-container` | [224,900,1216,0] | [0,900,1440,0] | 常驻空容器，高度 0 |
| `div.doc-scroll-container` | [224,72,1216,828]，`z-index:2`，`overflow:auto` | [0,0,1440,900]，`z-index:2` | 全屏 height:100% |
| `content-area` | [224,72,1206,615] | [0,0,1430,615] | padding-top **70px**；内联 `min-width:950px; width:100%; text-align:center` |
| `editor-container` | [477,152,700,535] `display:inline-block` | [365,80,700,535] | |
| `math-type`（**白纸本体**） | [477,152,700,535] | [365,80,700,535] | 内联 `padding:15px 20px 20px; width:660px` → 外框正好 700 = `pageSettings.pageSize.width` |
| `resize-bar`（纸张右缘拖拽条） | [1175,152,3,535] | [1063,80,3,535] | `position:absolute; right:-1px; width:2px; border-left:1px solid var(--ui-border,#dedcdc); cursor:col-resize` |
| `document-info-bar` | [1126,869,299,26] | [1338,868,87,27] | `position:absolute; right:15px; bottom:5px`（内联 bottom 会变 5/15）；`z-index:4`；`opacity:.8`；`background:var(--ui-surface-muted,#f7f7f7)`；`border:1px solid var(--ui-border,lightgray)`；`box-shadow:1px 1px 1px var(--ui-shadow)` |
| 文档滚动条 | 有（scrollHeight 1015 > clientHeight 828） | **有**（scrollHeight 1015 > 900） | `.doc-scroll-container::-webkit-scrollbar{width:10px;height:10px}`，全屏时右侧占 10px（内容视口 1430） |
| `html/body/#root/page/container-layer/content-area` 背景 | `rgb(238,238,238)` | 同左 | 灰底来源，见 2.2 |

纸面自身样式（`editor-container>math-type` 规则）：

```css
editor-container>math-type{ background:#fff; outline:1px solid #d3d3d3 }
math-type{ color:#000; cursor:text; padding:15px 20px 20px; user-select:none }
math-type:not(.dark-mode){ background-color:#fff }   /* 暗色 UI 下的兜底 */
math-type.dark-mode{ background:#1e1e1e }            /* 文档配色设为深色时 */
```

- **纸面没有 box-shadow**（计算值 `none`），"边框"来自 `outline:1px solid #d3d3d3`；右侧还有 resize-bar 的 1px `#dedcdc` 竖线。
- 全屏纸面仍带 `padding-top:70px` 的顶部留白（来自 `container-layer content-area{padding-top:70px}`），所以纸面 y = contentArea.y + 70 + 10（inline-block 行盒额外 10px）→ 普通 152、全屏 80。

### 2.2 背景灰链（#eeeeee 到底哪来的）

CSS（已 grep 到原文）：

```css
:root, html[data-ui-theme=light] { --ui-workspace:#eee }
html,body,page,#root{ background:var(--ui-workspace,#eee); ...; overflow:hidden }
body{ background:var(--ui-workspace,#eee) }
container-layer{ background:var(--ui-workspace,#eee); height:calc(100% - 35px); ... }
container-layer content-area{ ... background:var(--ui-workspace,#eee); padding-top:70px; overflow:visible }
content-area{ float:left; background:var(--ui-workspace,#eee); width:100%; overflow:hidden }
```

实测普通/全屏两模式下 `body / page / container-layer / content-area` 背景都是 `rgb(238,238,238)`。
→ **白纸模式只需把 `--ui-workspace` 改成 `#fff`**（作用在 `html` 或 `html.paper-mode` 上），即可一次覆盖这 5 层；不必逐个写 background。

### 2.3 进入后**仍然可见**的东西（全清单，1440×900 全屏实测）

按可见性遍历 `page` 下所有元素、过滤 `svg` 内部与编辑内容后的结果：

| # | 元素 | selector | 位置/尺寸 | 视觉 |
|---|---|---|---|---|
| 1 | 工作区灰底（5 层） | `html, body, page, #root, container-layer, content-area` | 满屏 | `#eeeeee` |
| 2 | 白纸 | `editor-container > math-type` | 700×535 @ [365,80] | 白色 + 1px `#d3d3d3` outline |
| 3 | 纸张右缘拖拽条 | `math-type > resize-bar`（或 `editor-container resize-bar`） | 3×535 @ 纸右缘 | 1px `#dedcdc` 竖线，`cursor:col-resize`，**常驻，不是仅 hover** |
| 4 | 文档信息条 | `document-info-container > document-info-bar` | 87×27 @ 右下（right:15,bottom:5） | `#f7f7f7` 底 + 灰边 + `opacity:.8`（`:hover` → 1，唯一"悬停才变"的东西） |
| 5 | 退出按钮 | `document-info-bar > span[title^="Exit Content View Only"]` | 33×14 | SVG（fullScreenExit，25×25）`fill:var(--ui-text-muted,gray)` |
| 6 | 缩放 select | `document-info-bar .select-box-container`（`role=combobox`，`tabindex=0`） | 50×24，显示 `100%` | 白底 input-like |
| 7 | 文档滚动条 | `div.doc-scroll-container` 的 `::-webkit-scrollbar` | 右侧 10px | 系统滚动条（因为 `.mt-sa` 把 scrollHeight 撑到 1015） |
| 8 | 光标（编辑态，不属于"chrome"） | `span.text-cursor` | 2×17 | `border-left:2px solid green` |

**进入后已自动消失、无需我们处理的**（内置全屏已做）：`header#page-header`、`document-sidebar-container`、`div.doc-toolbar-container`、`items-bar`。
（注意 `div.doc-items-bar-container` 只是个 0 高容器，留在 DOM 里但不可见。）

### 2.4 「白纸模式应隐藏」精确 selector 清单

```css
/* —— 必隐藏 —— */
html.paper-mode body,            /* 或只改变量：html.paper-mode{--ui-workspace:#fff} */
html.paper-mode page,
html.paper-mode #root,
html.paper-mode container-layer,
html.paper-mode content-area { background: #fff !important; }      /* 二选一：改变量或显式覆盖 */

html.paper-mode document-info-bar,
html.paper-mode document-info-container { display: none !important; }  /* 退出图标 + 缩放 + 语言统计 */

html.paper-mode resize-bar { display: none !important; }               /* 纸张右缘 1px 竖线 + 拖拽热区 */

html.paper-mode editor-container > math-type { outline: none !important; }  /* 1px #d3d3d3 纸边框 */
/* 若不想动纸面背景/字体，别覆盖 math-type 的 background/color */

/* —— 可选：让纸面在窄屏不被裁切（见第 6 节） —— */
html.paper-mode content-area { min-width: 0 !important; padding-top: 24px !important; }
html.paper-mode div.doc-scroll-container { overflow: auto; }
```

> 为什么不建议 `display:none` 掉 `document-info-bar` 后还依赖它的按钮：用户点不到了；程序化 `el.click()` 仍然有效（第 5 节实测），所以**退出入口必须由白纸模式自己提供**（lead 计划里的浮动按钮）。

---

## 3. 关键浮层：DOM 根、z-index 与白名单（Q3）

### 3.1 实测汇总（全屏模式下逐个触发）

| 浮层 | DOM 根（实测祖先链） | position / z-index | 尺寸与位置（1440×900 全屏） | Esc 行为（实测） |
|---|---|---|---|---|
| **公式自动建议框**（输入 `\` 或 `$`） | `math-type` 内部：`div.auto-complete-container`（父链在 `math-type`/`editor-container` 里，非 portal） | `absolute` / **z-index:12**，CSS 固定 `width:282px` | 282×291 @ [453,146]（跟随光标） | **关闭**（自身 document capture keydown：27→preventDefault+stopPropagation+hide） |
| **fx / CAS 浮动按钮** | `math-type > selection-wrapper > div[style*="position: absolute"][z-index:1] > button.btn-normal`（按钮文字 `fx`） | wrapper `absolute` / **z-index:1**（在 `selection-wrapper` 的 z 9 之上） | 27×22，位于选区上方 25px（实测 [418,70]） | 不处理 Esc；选区没了就消失 |
| **CAS 面板**（点 fx 后） | **在 `math-type` 内部**：`math-type > div.tw:flex.tw:flex-col`（`position:fixed; z-index:1000; top:72px; right:0; bottom:0; width:420px`）——停靠形态 | `fixed` / **z-index:1000** | 420×828 停靠右侧（[1020,72]） | **不关**（项目文档明确"只能走齿轮菜单 Close"） |
| **右键菜单** | `context-menu-container`（portal 到 body 直属或 page 下） | `fixed` / **z-index:13**，CSS `width:200px` | 202×256 @ 鼠标点 | **不关**（实测按 Esc 菜单仍在；它靠外部 `mousedown` 关闭） |
| **查找 / 替换** | **在 `math-type-doc` 内部**：`find-and-replace-area.no-print`（父链 `math-type-doc > … > container-layer`） | `absolute` / **z-index:5**，内联 `top: 0px; right:12px`（全屏）/ `top:36px`（普通，bundle 原文 `top:this.props.fullScreen?0:36`） | 397×33 @ [1031,0] | **关闭**（全局 keydown 栈里 `27==keyCode → onCloseFindAndReplace()`，无 preventDefault） |
| **模态对话框**（如 Print Settings） | `page > div.modal-dialog-root-container > div(遮罩, absolute z-index:10) > modal-container.mt-common-dialog` | 遮罩 `absolute z-index:10`；对话框 **z-index:20001** | 对话框 800×643 居中 | **关闭**（dialog 的 `handleEscape` 设 `e.stopOther=true`，吃掉后续 handler） |
| **各类下拉/设置浮层**（工具栏展开项、`More` 菜单等） | `.mt-common-dialog` / `.expandable-component` | `absolute` / **z-index:10 ~ 14** | — | 视组件而定（`expandable-component` 自带 Esc 关闭逻辑） |
| **文档信息条本身** | `math-type-doc > document-info-container > document-info-bar` | `absolute` / **z-index:4** | 见 2.1 | — |

其他相关 z-index（CSS 原文，便于判断层级）：`tool-bar`/`doc-toolbar-container` z 6，`items-bar` z 3，`selection-wrapper` z 9，`text-cursor` z 10，`loading-layer` z 10，`modal-dialog.swift.login-dialog` z 20000，print-preview z 99999。

### 3.2 白名单（怕误伤的话，别写这些规则）

**关键风险：白纸模式千万别写"清空某个容器里的所有浮层/子元素"这类规则**——CAS 面板和 fx 按钮都在 `math-type` 内部，find&replace 在 `math-type-doc` 内部。

安全做法是**只针对具体 chrome selector**（第 2.4 节那 4 条），并显式保护：

```css
/* 白名单：这些必须保持可显示、可点击、不被裁切 */
html.paper-mode .auto-complete-container,
html.paper-mode context-menu-container,
html.paper-mode find-and-replace-area,
html.paper-mode modal-dialog-root-container,
html.paper-mode modal-container.mt-common-dialog,
html.paper-mode .mt-common-dialog,
html.paper-mode .expandable-component,
html.paper-mode math-type > div[style*="z-index: 1000"]   /* CAS 面板 */
{ display: revert !important; }   /* 防御性，不要 override 它们的定位 */
```

另外三个要小心的点：

1. `content-area` 现在是 `overflow:hidden` 吗？**实测 computed 是 `visible`**；但 `doc-scroll-container` 是 `overflow:auto`，天然会裁切横向溢出 → 窄屏下 fx 按钮/建议框可能被裁（建议框 282px 宽，390 屏时可能贴边）。
2. 若要给纸面加 `overflow:hidden`/圆角/阴影，**不要加在 `math-type` 上**（CAS 面板、fx、建议框都是它的后代；`position:fixed` 的 CAS 面板不受 overflow 裁切，但 absolute 的 fx/建议框会被裁）。
3. `document-info-bar` 删除/隐藏后，`document-info-container` 仍在（`display:inline`，0 尺寸），没有布局影响。

---

## 4. 焦点与光标（Q4）

### 4.1 编辑器真正的焦点元素

点一下纸面后（真实鼠标 mousedown/up）：

```
document.activeElement
 = <textarea>（0×0，无 class）
 祖先链： math-type > hidden-input-wrapper > textarea
```

- 同一位置还有 `hidden-input-wrapper > input`、`math-type > input.focus-element` 两个候选，**都不是**焦点目标（实测 `textarea` 才是）。
- 光标位置由 `span.text-cursor` 表示（`border-left:2px solid green`，z 10）。空白文档点纸面后 caret 在纸面内容区左上：纸面 [477,152] → caret [496,170]（= 左 padding 20、上 padding 15 附近）。
- 空白文档 + 纸面没有 → 也能直接进入全屏后再打字，见 4.3。

### 4.2 进出全屏对焦点的影响（关键坑）

| 进入/退出方式 | 进入后 activeElement | 能否直接继续打字 | 证据 |
|---|---|---|---|
| `el.click()`（程序化） | 仍是 `TEXTAREA` | **能** | 进入前打字 `XYZ` 后焦点未变；进入后 `insertText('XYZ')` 成功写入 |
| **真实鼠标点** `document-info-bar` 里的内置按钮 | **`BODY`**（span 不可聚焦，mousedown 把编辑器的焦点 blur 掉） | **不能**：`insertText('FocusTest')` 完全没进文档 | 全屏前后 docText 都是 `x^2-9` |
| **真实键盘** `Alt+Shift+E` | 仍是 `TEXTAREA` | **能** | 空白文档实测：进入后 caret [384,98]，`insertText('Hi')` → doc `Hi`；退出后 `insertText('!')` → `Hi!` |
| 真实鼠标点退出按钮 | `BODY` | **不能**（`insertText('C')` 无效，doc 不变） | 退出后 doc 仍是 `x^2-AB9` |

**恢复焦点的两种办法（都实测成功）**：

```js
// A. 直接聚焦隐藏 textarea —— 实测有效：焦点回来，接着打字符就进文档
document.querySelector('hidden-input-wrapper textarea')?.focus();

// B. 点一下纸面（caret 属性/模型位置都还在，点完继续输入）
//    实测：进入全屏后点 caret 附近 → insertText('B') 成功
```

**更优解（给 lead 的实现建议，已实测）**：白纸模式自己的浮动按钮在 `mousedown` 里 `preventDefault()`，则真实点击**不会**抢焦点：

```
实测：编辑器聚焦（TEXTAREA）→ 真实点击一个 mousedown preventDefault 的测试按钮
→ activeElement 仍是 TEXTAREA，按钮 onClick 正常触发，随后 insertText('D') 成功入文档
```

这样进入白纸模式时"点按钮 → 切换 → 直接打字"可以无缝衔接，不需要额外 refocus。

### 4.3 空白文档进入后能否直接打字

**能**（前提是进入前焦点在编辑器里）：

1. 空白文档，鼠标点纸面 → `active=TEXTAREA`，caret [496,170]；
2. 真实键盘 Alt+Shift+E → 全屏，`active=TEXTAREA`（焦点未丢），caret 变成 [384,98]；
3. 直接 `insertText('Hi')` → 文档内容 `Hi`；
4. 再按 Alt+Shift+E 退出 → `active=TEXTAREA`，继续 `insertText('!')` → `Hi!`。

所以：**如果白纸模式通过"键盘/程序化 click"切换，焦点天然保持；如果通过真实鼠标点自绘按钮，务必在 mousedown preventDefault 或切换后 refocus textarea。**

### 4.4 其他焦点细节

- 按 Esc 会**立即失焦**（`TEXTAREA → BODY`），但**下一次按键会自动回焦**并正常输入（实测：Esc 后 `insertText('E')` 成功入文档、activeElement 变回 TEXTAREA）。不是致命问题，但"双击 Esc 退出"后可考虑 refocus。
- 输入建议框打开时焦点在建议框的 `<input>`（`document.activeElement.tagName === 'INPUT'`）；Esc 关掉建议框后焦点落回 `BODY`（不会自动回编辑器）。

---

## 5. 缩放 select / 退出按钮 / info bar 结构（Q5 + lead 追加问题）

### 5.1 `document-info-bar` 完整 DOM 结构

父级是自定义元素 `document-info-container`（computed `display:inline`），它有两个子节点：`document-info-bar` + 一个 0 高的 `div`（滚动条辅助组件）。

`document-info-bar` 的子节点**固定 4 个**（bundle 原文 + 实测）：

| # | 节点 | 普通模式 | 全屏 |
|---|---|---|---|
| 1 | `<div></div>`（拼写检查/语言状态占位） | 297×0，空 | 85×0，空 |
| 2 | `<span class="full-view-button" title="Content View Only (Alt+Shift+E)">` | 28×14，SVG 20×20 | 换成 `<span title="Exit Content View Only (Alt+Shift+E)">` 33×14，SVG 25×25，**无 class** |
| 3 | `<div class="select-box-container" role="combobox" aria-haspopup="listbox" tabindex="0" style="display:inline-block;width:50px">` 缩小 select | 50×24，内文 `100%`；全屏时内联追加 `vertical-align:2px; margin-right:2px` | 50×24 |
| 4 | `<span>`：`Lang: None, Words: N, Math: N` + `<span style="cursor:pointer;text-decoration:underline">More</span>` | 219×14，可见 | `<span style="display:none">`（React 内联隐藏） |

`document-info-bar` 自身：`position:absolute; right:15px; bottom:5px`（内联 bottom 会随滚动条可见性变 `5px`/`15px`），`z-index:4`，`opacity:.8`（`:hover` → 1），`background:#f7f7f7`，`border:1px solid lightgray`，`box-shadow:1px 1px 1px #e0dddd`。

**不同宽度下它是否被移走/隐藏？** 实测 390 / 768 / 1440 / 2560 四档（桌面 UA、桌面视图）：

- **不会被移走**，永远是 `math-type-doc` 右下角（`right:15px; bottom:5px`）。
- 宽度随内容变化：全屏恒 **87×27**；普通模式 299×26（≥768 宽）；**390 宽时内容换行 → 151×40**（docs 区只有 166px 宽，`Lang…More` 那一段被挤到第二行）。
- **只有 `localStorage['mathcha-view-mode']='mobile'`（移动端视图）时整条不渲染**（见 6.4），跟视口宽度无关（`isMobileOrTablet()` 只读 localStorage）。

### 5.2 被 CSS `display:none` 隐藏后，`el.click()` 还能触发 React onClick 吗？

**能，两个方向都实测通过**（这是 lead 最关心的结论）：

实验（普通模式，1440×900）：

1. `document-info-bar.style.display='none'` → computed `none`（React 之后把它保留成内联 `bottom: 5px; display: none;`）；
2. `.full-view-button.click()` → **成功进入全屏**：`header style="display: none"`，`.full-view-button` 数 0，Exit span 数 1；
3. 此时 Exit span 的 `getBoundingClientRect()` = 0×0（祖先 display:none），仍然 `ExitSpan.click()` → **成功退出全屏**：header 恢复 `flex`，`.full-view-button` 数 1；
4. 恢复 `display=''`，一切正常。

→ **结论：隐藏整条 `document-info-bar` 是安全的**，只要白纸模式自己的退出入口用 `el.click()` 触发（或者用 1.4 的合成 Alt+Shift+E 兜底）。注意：

- 真实鼠标当然点不到隐藏按钮；键盘也不行（span 不可聚焦）。
- 隐藏建议用 CSS（`html.paper-mode document-info-bar{display:none!important}`），不要用 JS 改 inline style（React 不会清掉你加的 `display`，但那样状态分散，且刷新后要重跑）。
- `.full-view-button` / Exit span 都是 `<span>`，本身没有 `tabindex`、`role=button`（无障碍上就是个图标）。

### 5.3 缩放 select 的可点击性

- 它是普通 DOM（`role=combobox tabindex=0`），隐藏后用户不可用；程序化点它只能打开下拉，不改变缩放值（改值要点列表项）。
- **白纸模式如果隐藏 info bar，就把缩放一起隐藏了**——若还想保留缩放，需要自己做一个入口调用 `handleDocZoomChange`（没有导出，未解，见第 9 节）。

---

## 6. 响应式实测：普通 vs Content View Only（Q6）

方法：CDP `Emulation.setDeviceMetricsOverride`（传 `目标*1.5`，见 0.1），每个尺寸等 450ms 再量。所有数值均为 `[x,y,w,h]`。

### 6.1 汇总表（paper = `math-type`；CA = `content-area`；SC = `doc-scroll-container`）

| 视口 | 模式 | header | sidebar | toolbar | 纸张 rect | CA rect（内联 min-width:950） | SC 可视区 / 内容 | 水平溢出 |
|---|---|---|---|---|---|---|---|---|
| 390×844 | 普通 | 390×35 | 222 宽 | 168 宽（被裁） | [349,152,700,535]（大部分在屏外） | [224,72,950,615] | 166×772，内容 950×1015 | 屏内无 overflow，但 **SC 内横向滚动**（sw 950 > cw 156） |
| 390×844 | 全屏 | none | hidden | none | [125,80,700,535] | [0,0,950,615] | 390×844，内容 950×1015 | sw 950 > cw 380 → **纸张左右都被裁，必须横向滚动** |
| 768×1024 | 普通 | 768×35 | 222 宽 | 546 宽 | [349,152,700,535] | [224,72,950,615] | 544×952，内容 950×1015 | SC 横向滚动（sw 950 > cw 534） |
| 768×1024 | 全屏 | none | hidden | none | [125,80,700,535] | [0,0,950,615] | 768×1024，内容 950×1015 | sw 950 > cw 758 → **横向滚动** |
| 1440×900 | 普通 | 1440×35 | 222 宽 | 1218 宽 | [477,152,700,535] | [224,72,1206,615] | 1216×828，内容 1206×1015 | 无（纸张完全可见，垂直可滚） |
| 1440×900 | 全屏 | none | hidden | none | [365,80,700,535] | [0,0,1430,615] | 1440×900，内容 1430×1015 | 无（垂直滚动条 10px） |
| 2560×1440 | 普通 | 2560×35 | 222 宽 | 2338 宽 | [1042,152,700,535] | [224,72,2336,615] | 2336×1368，内容 2336×1368 | 无 |
| 2560×1440 | 全屏 | none | hidden | none | [930,80,700,535] | [0,0,2560,615] | 2560×1440，内容 2560×1440 | 无 |

**纸张居中公式（实测吻合）**：

- `content-area` 内联 `min-width = 页面宽 + 250 = 700 + 250 = 950`（bundle 原文 `minWidth: Ar.A.shouldUseBigBorder()? e+250 : "100%"`，`e = getCurrentDocWidth()`）。
- 纸面在 content-area 内水平居中：
  - 当可用宽（视口 − 滚动条10px）≥ 950：`paper.x = (可用宽 − 700)/2`（1440→365，2560→930）；
  - 当可用宽 < 950：content-area 被撑到 950，`paper.x = (950 − 700)/2 = 125`，**纸张比屏幕宽 → 水平滚动**（390、768）。
- 纸面 y 恒为 `contentArea.y + 70 + 10`：普通 = 35+37+70+10 = 152，全屏 = 0+70+10 = 80。
- 滚动高度固定 1015（空白文档）= 纸面底 615 + `math-type>.mt-sa{inset:0 -100px -400px}` 多出的 400px。**全屏下这也是垂直滚动条常驻的原因**（1440 时 900 < 1015）。

### 6.2 逐尺寸问题清单（白纸模式要额外处理）

**390×844（手机）**

- 普通模式：侧栏 222px 占 57% 宽度，docs 区只剩 166px，纸张基本不可用 → 必须进全屏。
- 全屏后：侧栏/header/工具栏都没了，但 `content-area{min-width:950}` 仍在，**纸张 700 固定宽，左右各被裁约 155px，只能横向拖**；`resize-bar` 在 x=823 完全在屏外。
- `document-info-bar`（87×27）压在纸面右上方（x 288..375，纸面 125..825）→ 白纸模式隐藏后右上角就干净了。
- 建议：白纸模式在 ≤900px 时 `content-area{min-width:0!important; padding-top:24px!important}` + 纸面 `width:auto`（或用 transform/zoom 适配），否则"手机白纸"只剩中间一条。
- 顶部留白 80px + 底部滚动条，屏幕上真正可写区域不大。

**768×1024（平板）**

- 普通模式：侧栏 222 + 文档区 546，纸张 700 放不下 → 横向滚动；工具栏 546 宽但内部 `too-bar-container{min-width:770px}`，会被裁/挤。
- 全屏：视口 768 < 950 → 纸张 [125,825]，左右各裁约 125/57px，**横向滚动**；垂直方向 1024 > 1015，无垂直滚动。
- 建议同上：放宽 min-width 或让纸张自适应；纸面留白 80px 顶部可接受。

**1440×900（桌面，主场景）**

- 全屏后已经比较干净：只剩灰底、白纸、右侧 1px 竖线、右下信息条、垂直滚动条。
- 需要处理的：灰底→白、隐藏 info bar、隐藏 resize-bar、隐藏纸面 outline；垂直滚动条是否隐藏可选（隐藏会改变宽度 10px，注意重新居中）。
- 顶部 70px 留白（+10 行盒）→ 白纸模式可调 `padding-top` 让纸更居中或更靠上。

**2560×1440（大屏）**

- 全屏：纸张居中、无滚动、剩余问题同上（灰底/信息条/边框）。
- 大屏纸面 700px 会显得很小、两边大片留白；若想"纸更大"只能改 `pageSettings.pageSize.width`（会改文档设置并影响导出/打印，不建议）或对 `content-area` 做 `zoom`/transform 缩放（需要自己处理 caret 坐标，风险高）。

### 6.3 「Mathcha 移动端布局」到底是什么条件触发的

- `isMobileOrTablet()` 返回 `mobileViewEnabled`，而 `mobileViewEnabled` **只**来自 `localStorage['mathcha-view-mode'] === 'mobile'`（bundle 原文；没有 UA/宽度判断）。
- `shouldUseSmallLayout()` = `isMobileOrTablet() && screen.width < 900`（`screen.width` 是物理屏宽，本机 1920）。
- 也就是说：**把窗口缩到 390 宽，Mathcha 并不会自动切移动端布局**；移动端布局是菜单里的 "Switch to mobile view"（或写 localStorage）。这与第 6.1 表（桌面视图在 390 宽下仍渲染侧栏 222 + info bar）一致。

### 6.4 移动端视图模式实测（`localStorage['mathcha-view-mode']='mobile'`，390×844，刷新后）

| 观察点 | 结果 |
|---|---|
| `header#page-header` | 仍在，390×35 |
| `document-sidebar-expanded` | `display:none`（不渲染） |
| `div.doc-toolbar-container` | 可见，`[-2,35,392,45]`（**高 45**，移动端横向工具栏） |
| `document-info-bar` | **`null`（整条不渲染）** → `.full-view-button` 数量 0 |
| `paper` | [0,160,700,535]（左对齐，不是居中） |
| `content-area` | [0,80,950,1315]，仍 `min-width:950` |
| `SC` | [0,80,390,772]，内容 1120×1315（横向可滚） |
| 额外元素 | `math-type .mobile-keys-support-region` 存在（移动端软键盘辅助区） |
| 按真实 Alt+Shift+E | **能进入**：header→none、paper→[0,80]、content-area→[0,0]；但**没有任何内置退出按钮**，只能再按 Alt+Shift+E 或调 JS |

→ 白纸模式要兼容这种视图模式：**不要依赖 `document-info-bar` 是否存在**；退出必须用 1.4 的合成事件/自定义按钮；`isContentViewOnly()` 用 header+container-layer 的内联样式判定。

---

## 7. 深色模式：配色来源与强制白底需要覆盖什么（Q7）

### 7.1 机制

- 偏好存 `localStorage['mathcha.ui-theme']`，取值 `light` / `dark` / `system`（默认 `light`）；`system` 走 `matchMedia('(prefers-color-scheme: dark)')` 并监听变化。
- 应用方式：`document.documentElement.setAttribute('data-ui-theme', 'dark' | 'light')`。**没有 class、没有 data-* 以外的开关**。
- **文档自身配色是另一回事**：Document Settings 里的文档配色会给 `math-type` 加 `class="dark-mode"`（与 UI 主题独立）。

### 7.2 变量与实测颜色

| 变量 | light | dark |
|---|---|---|
| `--ui-workspace` | `#eee` | `#1b1e22` |
| `--ui-surface` | `#fff` | `#25282d` |
| `--ui-surface-muted` | `#f7f7f7` | `#2d3137` |
| `--ui-text` | 黑 | `#e6e9ed` |
| `--ui-text-muted` | gray | `#b9c1ca` |

深色 UI + 进入全屏实测：

| 元素 | 普通模式 | 全屏 |
|---|---|---|
| `body / page / container-layer / content-area` | `rgb(27,30,34)`（#1b1e22） | 同左 |
| `math-type`（纸面） | `rgb(255,255,255)`，黑字 | 同左（**深色 UI 不会把纸变黑**） |
| `document-info-bar` | `#2d3137`，文字 `#b9c1ca`，`opacity:.8` | 同左 |
| 文档配色 dark（`math-type.dark-mode`） | 纸面 `rgb(30,30,30)`，`editarea.root-editor` 文字 `#e0e0e0` | 同左 |

### 7.3 强制白底的覆盖清单

```css
/* 1) 一次性解决 5 层灰/黑底（关键！深浅色都生效） */
html.paper-mode { --ui-workspace: #fff; }

/* 2) 显式兜底（防止以后上游改结构；只在必要时用 !important） */
html.paper-mode body,
html.paper-mode page,
html.paper-mode #root,
html.paper-mode container-layer,
html.paper-mode content-area { background: #fff !important; }

/* 3) 纸面：UI 深色时本来就是白的，不用动。
      但如果想连「文档配色=深色」也强制白纸，需要同时处理文字颜色，风险高： */
/*
html.paper-mode math-type { background: #fff !important; }
html.paper-mode math-type.dark-mode editarea.root-editor { color: #000 !important; ... }
*/

/* 4) info bar 在深色下是 #2d3137 —— 隐藏它就没问题，不要改 --ui-surface-muted
      （会连带影响下拉框、工具栏、CAS 面板等一堆浮层） */
```

**不要做的事**：

- ❌ 不要全局覆写 `--ui-surface` / `--ui-surface-muted` / `--ui-text`：CAS 面板、select、对话框、右键菜单全用这些变量，改了会串色。
- ❌ 不要为了白纸去删 `math-type.dark-mode` 类：那是文档设置的一部分，删了等于改用户文档外观（且 React 会重新加回来）。
- ❌ 不要 `filter: invert()` 之类：SVG/公式/图片会毁。
- ✅ 主题切换是运行时可变的（Appearance 面板），白纸模式必须**两套主题都测**；用 `--ui-workspace` 覆盖是最省事且两套都对的方案。

---

## 8. Esc 的原生用途与「双击 Esc 退出」安全性（Q8）

### 8.1 Esc 谁在处理（bundle 定位 + 实测）

| 处理者 | 行为 | preventDefault / stopOther | 实测 |
|---|---|---|---|
| 自动建议框（`.auto-complete-container` 组件） | `27===keyCode && visible` → `preventDefault+stopPropagation+hide()` | 是（capture 阶段） | 打开建议框按 Esc → 关闭 |
| CAS 命令历史弹窗（sympy） | 27 → hide | 是 | 未单独测（同模式） |
| 自由绘制 `canvas` | 27 → `requestStopDrawing()` | 否 | 未测 |
| YouTube/链接输入框 | 27 → 关面板 | — | — |
| 文档搜索框 | 27 → 清空搜索词 | — | — |
| **编辑器容器全局 keydown（class pl，document 级）** | `27==keyCode → onCloseFindAndReplace()`（无 `preventDefault`） | 否 | 打开查找替换按 Esc → **关闭**（元素从 DOM 移除） |
| **模态对话框**（`modal-container` 的 handleEscape） | 27 → `e.stopOther=true`，然后 `onClose()`（除非 `preventCloseEscape`） | 是（吃掉后续） | Print Settings 对话框按 Esc → **关闭**（modal root children 归 0） |
| 右键菜单 `context-menu-container` | **不处理 Esc** | — | 按 Esc 菜单仍在（靠外部 mousedown 关闭） |
| CAS 面板 | **不处理 Esc**（项目文档：只能齿轮菜单 Close） | — | — |
| 内置全屏 | **不处理 Esc** | — | 连按两次 Esc，`header` 仍 `none`，模式不变 |
| 编辑器选区 | **不处理 Esc** | — | Esc 后 `selection-wrapper selection` 仍在 |
| 编辑器焦点 | 副作用：`activeElement: TEXTAREA → BODY` | — | 但下一次按键自动回焦（`insertText` 仍入文档） |

### 8.2 「双击 Esc 退出白纸」是否安全？

**结论：可行，但必须加"当前有无浮层"闸门，否则会和原生 Esc 抢第一下。**

理由：

- Esc 原生**不会**退出全屏（实测），所以第二下专门留给我们用不会冲突；
- 但第一下可能被原生用掉：关建议框 / 关查找替换 / 关模态框 / 关闭下拉。如果用户本来只想关对话框，第一下关了对话框、第二下就会误退出白纸模式。

推荐实现：

```js
// 浮层检测：任一为真就认为"Esc 会被原生消费"，本次不必退出
function hasOpenOverlay() {
  const visible = el => {
    if (!el) return false;
    const cs = getComputedStyle(el), r = el.getBoundingClientRect();
    return cs.display !== 'none' && cs.visibility !== 'hidden' && r.width > 0 && r.height > 0;
  };
  return visible(document.querySelector('.auto-complete-container'))
      || visible(document.querySelector('context-menu-container'))
      || visible(document.querySelector('find-and-replace-area'))
      || visible(document.querySelector('modal-container.mt-common-dialog'))
      || visible(document.querySelector('modal-dialog-root-container modal-container'))
      || visible(document.querySelector('math-type > div[style*="z-index: 1000"]'))  // CAS 面板
      || visible(document.querySelector('.mt-common-dialog'))
      || (document.querySelector('modal-dialog-root-container')?.children.length > 0)
      // 建议框打开时焦点在它的 input 上，也可用焦点判断
      || (document.activeElement && document.activeElement.closest?.('.auto-complete-container'));
}

let lastEsc = 0;
document.addEventListener('keydown', e => {
  if (e.keyCode !== 27 && e.key !== 'Escape') return;
  if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;   // 别抢组合键
  if (!isContentViewOnly()) return;                              // 只在白纸模式
  if (hasOpenOverlay()) { lastEsc = 0; return; }                  // 让原生先处理
  const now = performance.now();
  if (now - lastEsc < 600) { setContentViewOnly(false); lastEsc = 0; }
  else lastEsc = now;
}, true);   // capture：只观察，不 preventDefault，原生逻辑照常
```

要点：

- 用 `capture` 只读、不 `stopPropagation`（否则对话框关不掉、建议框关不掉）。
- 双击窗口建议 400–600ms；同时窗口内如果出现"有浮层打开"就重置计时。
- 别用 `e.key === 'Esc'`（老浏览器），`keyCode===27` 最稳（Mathcha 自己就用 keyCode）。
- 第 3 节的白名单同时就是"浮层检测"的 selector 来源，两边保持一致。
- 额外保险：若 `document.activeElement` 是 `INPUT/TEXTAREA` 且不在编辑器里（对话框/建议框输入），也视为有浮层。

### 8.3 其他 Esc 相关风险

- Esc 失焦后**用户可能以为键盘失效**（其实下一次按键会自动回焦）；如果白纸模式用双击 Esc 退出，退出后建议主动 `document.querySelector('hidden-input-wrapper textarea')?.focus()` 一下。
- 若用户在画图模式（drawing / diagram）里，Esc 用来停止绘制；第 8.2 的 `hasOpenOverlay` 覆盖不到它 → 建议再加一条：`document.querySelector('canvas')` 有 pointer 活跃时或 `math-type` 上有 drawing 相关 class 时忽略（画图模式未实测，见第 9 节）。
- 输入法/组合键：Esc 也会取消 IME 组合，尽量避免在 IME composing 时触发退出（可检测 `e.isComposing`）。

---

## 9. 未解 / 待确认

1. **缩放 select 的值变更入口**：组件是内部类，没有导出 API。白纸模式如果要保留缩放，只能把 `document-info-bar` 留下（但那样就不够"白纸"）或点开 select 后用真实鼠标点列表项（脆弱）。
2. **CAS 面板的关闭路径**：它的齿轮菜单 `button[title="CAS settings"]` 可以点开，但菜单项是繁体/动态渲染，我没稳定定位到 Close（不排除是在 portal 里）。目前只能靠 `display:none` 临时隐藏（测试时用过），真正的关闭方式仍是面板自己的齿轮菜单。
3. **右键菜单的关闭触发条件**：实测 Esc 不关、点纸面关；具体是 `document mousedown` 捕获，没继续深挖。
4. **自由绘制/图形模式下的 Esc 行为**：只做了静态定位（`27==keyCode → requestStopDrawing`），没做动态验证。
5. **移动端视图下纸张为什么是 `x=0`（左对齐）**：移动端 content-area 的布局路径和桌面不同，没继续拆；白纸模式若同时支持移动端视图需要再补测。
6. **真实鼠标点 info bar 按钮会丢焦点**已确认；但没测"点完按钮后再点纸面能否一次恢复到原 caret 位置"的精确行为（实测点 caret 附近可继续输入，caret 语义是否完全一致未逐字验证）。

---

## 10. 给白纸模式实现的最小结论清单

1. **切换**：复用内置 `Alt+Shift+E`；DOM 通道用 `.full-view-button.click()` / `[title^="Exit Content View Only"].click()`（隐藏也有效）；移动端/兜底用合成 KeyboardEvent（override `keyCode`）。
2. **判定**：`header#page-header` inline `display:none` **且** `container-layer` inline `height:100%`，或 Exit span 存在。别只看 `.full-view-button`。
3. **要 CSS 隐藏的**（4 条，见 2.4）：灰底 5 层（可用 `--ui-workspace:#fff` 一把梭）、`document-info-bar`（整条）、`resize-bar`、`math-type` 的 1px outline。
4. **浮层白名单**：`.auto-complete-container`(z12)、`context-menu-container`(z13)、`find-and-replace-area`(z5，在 `math-type-doc` 内)、`modal-container.mt-common-dialog`(z20001)、`.mt-common-dialog`(z14)、CAS 面板（`math-type > div[style*="z-index: 1000"]`）、fx 按钮（`selection-wrapper > div[z-index:1]`）——**不要用 `math-type > *` / `math-type-doc > *` 这类通配规则**。
5. **焦点**：真实鼠标点按钮会丢焦点（`activeElement=BODY`，打字丢失）；自绘按钮务必 `mousedown preventDefault`，或切换后 `hidden-input-wrapper textarea.focus()`（两条都实测有效）。键盘/程序化 click 切换不丢焦点。
6. **响应式**：纸面固定 700，`content-area` 内联 `min-width = 页面宽+250`（默认 950）→ 390/768 全屏下仍横向滚动、纸张被裁；要"手机白纸"必须覆盖 `content-area{min-width:0}` 并处理纸宽。
7. **深色**：只改 `--ui-workspace`（scoped 到 `html.paper-mode`），别动 `--ui-surface*`；纸面在深色 UI 下本来就是白；文档配色 dark 时纸面是 `#1e1e1e`（是否强制白需产品决策）。
8. **双击 Esc**：可行，但必须"有浮层就不算"，且 capture 只读不改事件；Esc 会让编辑器失焦（下一次按键自动回焦），退出后主动 refocus 更稳。

---

## 附录 A：复现脚本片段

```js
// A. 目标视口（本机 150% 缩放补偿）
async function setViewport(w, h) {
  await cdp('Emulation.setDeviceMetricsOverride', {
    width: Math.round(w * 1.5), height: Math.round(h * 1.5),
    deviceScaleFactor: 1, mobile: false,
  });
}

// B. 真实键盘（Alt+Shift+E）
await cdp('Page.bringToFront', {});          // 让窗口有焦点
await cdp('Input.dispatchKeyEvent', {
  type: 'rawKeyDown', key: 'E', code: 'KeyE',
  windowsVirtualKeyCode: 69, nativeVirtualKeyCode: 69, modifiers: 1 | 8,
});
await cdp('Input.dispatchKeyEvent', {
  type: 'keyUp', key: 'E', code: 'KeyE',
  windowsVirtualKeyCode: 69, nativeVirtualKeyCode: 69, modifiers: 9,
});

// C. 真实鼠标（点击纸面 / info bar 按钮）
await cdp('Input.dispatchMouseEvent', { type: 'mousePressed', x, y, button: 'left', clickCount: 1 });
await cdp('Input.dispatchMouseEvent', { type: 'mouseReleased', x, y, button: 'left', clickCount: 1 });

// D. 输入文字
await cdp('Input.insertText', { text: 'Hello' });

// E. 切主题 / 视图模式（刷新生效）
localStorage.setItem('mathcha.ui-theme', 'dark');       // light | dark | system
localStorage.setItem('mathcha-view-mode', 'mobile');   // mobile | desktop
```

## 附录 B：本次实测的原始关键数值（1440×900，空白文档）

```
普通模式
  header#page-header      [0,0,1440,35] flex
  document-sidebar-expanded [0,35,222,866] flex（父 container 可见）
  div.doc-toolbar-container [222,35,1218,37] block
  div.doc-scroll-container  [224,72,1216,828] overflow:auto  calc(100% - 37px)
  content-area              [224,72,1206,615] padding-top:70 min-width:950
  editor-container          [477,152,700,535]
  math-type                 [477,152,700,535] bg rgb(255,255,255) outline 1px #d3d3d3
  resize-bar                [1175,152,3,535]
  document-info-bar         [1126,869,299,26] right:15 bottom:5 z4 opacity .8

Content View Only
  header#page-header      0×0 display:none (inline)
  document-sidebar-container 0×0 display:none (inline)
  div.doc-toolbar-container  0×0 display:none (inline)
  items-bar                 0×0 display:none
  div.doc-scroll-container  [0,0,1440,900] height:100%
  content-area              [0,0,1430,615] padding-top:70 min-width:950
  editor-container          [365,80,700,535]
  math-type                 [365,80,700,535]（同上样式）
  resize-bar                [1063,80,3,535]
  document-info-bar         [1338,868,87,27] z4（子：空div / Exit span 33×14 / zoom 50×24 / hidden span）
  滚动条                    10px（scrollHeight 1015 > 900）
```
