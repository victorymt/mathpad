# 白纸模式（Paper Mode）内部实现逆向

> 分析对象：`.cache/cdn/bundle-f9164fb5-ced37e37.js`（6,042,564 B，单行，1416 个 webpack 模块）、
> `.cache/cdn/styles-f9164fb5-ced37e37.css`（184,347 B，单行）、`.cache/cdn/index-f9164fb5-ced37e37.js`（19,917 B 加载器）、
> `.cache/editor.html`（5,812 B 启动页）。
>
> 取证方式：纯静态。按 webpack 模块边界切段 grep（模块 id + 字节偏移），**未改代码、未开浏览器**。
> 样式/脚本文件都是单行，所以本文引用「@字节偏移」而不是行号，复现方法见文末附录。
>
> 结论分级：【已核实】= 代码/样式里直接读到；【推测】= 由代码推断但未动态验证（交给动态验证的同学）。

---

## 0. TL;DR（先看这段）

1. **推荐路径：注入 JS 复用内置 Content View Only（`state.fullScreen`）+ 注入 CSS 洗白**。
   - 进入：点 `document-info-bar .full-view-button`（正常模式下一定存在）；
   - 退出：点 `document-info-bar span[title^="Exit Content View Only"]`，或派发 `Alt+Shift+E` keydown；
   - 内置快捷键 **Alt+Shift+E 不检查 `isTrusted`**，可以用合成 KeyboardEvent 触发，但需要 `keyCode: 69`（见 §4.3 的注意点）；
   - 该状态**只在 React state 里，不持久化**（无 localStorage / URL / API），所以持久化要我们自己写。
2. fullScreen 已经帮我们隐藏了：header、顶部工具栏、左侧文档侧栏、插入条、浮动/停靠面板，并把 `container-layer` 拉满
   （`height:100%;minHeight:0`）、滚动容器设成 `height:100%`。**它没隐藏的是**：右下信息条、`content-area` 的
   `padding-top:70px`、纸张描边、页宽拖拽条、灰色 workspace 背景。
3. **纯 CSS 模拟（不进 fullScreen）也能做到 95%**，但必须 `!important` 压掉 5 处 React 每次 render 重写的 inline style
   （`docs-container` 的 left/right/bottom、`doc-scroll-container` 的 height 等），而且拿不到 fullScreen 里
   `container-layer` 拉满、dock 尺寸归零这些布局收益。详见 §6.3。
4. 最大的两个风险：
   - **我们的 `<style>` 一定在应用主样式表之前**：主 CSS 是 `index.js` 在运行时 `loadAjax` 后 `document.head.appendChild` 的
     【已核实，§5.1】。所以等特异度的规则会被应用样式覆盖 → 注入 CSS 必须带 `!important` 或用 `html.paper-mode` 前缀提高特异度。
   - **React 会重写部分 inline style**（§6.1）。命中这些属性的纯 CSS 覆盖必须 `!important`，否则会在下一次 render 被打回。

---

## 1. 内置 Content View Only（fullScreen）实现

### 1.1 状态在哪个组件

【已核实】module **23759**，`class bx extends ne().Component`（模块内偏移 6,029,274；这就是渲染 `<page>` 的根组件）：

```js
// module 23759 @6,029,274
class bx extends ne().Component{
  constructor(e){ super(e), (0,nt.A)(this,"state",{}), ...
    (0,nt.A)(this,"handleFullScreenToggle",()=>{this.setState({fullScreen:!this.state.fullScreen})}),
    hx.A.initAll()   // hx = module 98095：符号度量表初始化，和键盘无关
  }
  render(){
    var t=pt()({ios:Ar.A.isIos(),"embedded-mode":Ar.A.isEmbedded()});
    return ne().createElement("page",{className:t,...},
      ne().createElement(dx,{hidden:!(!this.state.fullScreen&&!Ar.A.isEmbedded()), ...}),  // header
      ne().createElement(Eb,{fullScreen:this.state.fullScreen||Ar.A.isEmbedded(), onFullScreenToggle:this.handleFullScreenToggle, ...}),
      ...)
  }
}
```

要点：
- `state` 初始是 `{}` → `fullScreen` 初始 `undefined`（falsy）。
- **唯一的写入点就是 `handleFullScreenToggle`**（翻转 state），没有任何 componentDidMount 读 URL/localStorage。【已核实】
- `dx` = 连接后的 header 组件 `cx`（module 23759，`class cx`，渲染 `<header id="page-header">`）；
  `hidden` 计算式化简为 `fullScreen || isEmbedded()`。
- `Eb` = 连接后的 EditorContainer（`const Eb=et(...)` 紧跟在 module 23759 `renderForEmdbedMode` 之后，@5,980,327）；
  它把 `fullScreen` 一路传给 MathTypeDoc。

### 1.2 toggle 做了什么（受影响组件全表）

`handleFullScreenToggle` 只 `setState`，所有效果都由 prop 下传后各组件自己算。【已核实】

| 位置 | 符号 / 代码 | fullScreen 时的行为 |
|---|---|---|
| header | `dx`(`cx`) render：`this.props.hidden&&(e.display="none")` | `<header id="page-header">` inline `display:none`（仍挂载） |
| EditorContainer | `getContainerLayerStyle(){if(this.props.fullScreen)return{height:"100%",minHeight:0}}` | `container-layer` inline 高度拉满（压掉 CSS `height:calc(100% - 35px);min-height:400px`） |
| 文档侧栏 | `ha` 传 `hidden:this.props.fullScreen`；`da` render：`<document-sidebar-container style={{display:this.props.hidden?"none":void 0}}>` | inline `display:none` |
| 顶部编辑工具栏 | `gp`：`<div style={{display:this.props.hidden?"none":void 0}} className="doc-toolbar-container role-toolbar-wrapper">` | inline `display:none` |
| 插入条 | `mp`：`renderStateElement(){if(this.props.fullScreen){...cloneElement(this.state.element,{hiddenOnDefaultItemsBar:!0})}`；items-bar render 里 `hiddenOnDefaultItemsBar` → `itemsBarContainerStyle + {display:"none"}` | `<items-bar>` inline `display:none`（外层 `.doc-items-bar-container` 仍在） |
| dock 面板尺寸 | `getDockingSize(){if(this.props.fullScreen)return 0; ...}` + `hide:this.props.fullScreen` | 右侧/底部停靠尺寸归零（`docs-container` 的 right/bottom 变 0） |
| 左侧留白 | `getInnerContentLeft(){return this.props.isSidebarShown&&!isMobileOrTablet()?sideBarWidth+4:0}`，`isSidebarShown=Rt(e)&&(!t||!t.fullScreen)` | `docs-container` inline `left:0` |
| 滚动容器 | `getScrollContainerHeight(){return this.props.fullScreen?"100%":...}` | inline `height:100%`（正常是 `calc(100% - 37px)`） |
| 文档区 | `getMathTypeDocStyle(){return{height:"100%",position:"absolute",left:0,top:0,right:0,bottom:0}}` | 两种模式相同（无变化） |
| 信息条里的小元素 | `hc` render：`<span style={{display:this.props.fullScreen?"none":void 0}}>` 包住 `nc`（语言/元素计数） | 隐藏；**`document-info-bar` 本身仍显示**（`show:!0` 写死） |
| 信息条图标 | `sc`：fullScreen ? `<span title="Exit Content View Only (Alt+Shift+E)" onClick=onFullScreenToggle>` : `<span className="full-view-button" title="Content View Only (Alt+Shift+E)">` | 变成「退出」图标，所在信息条仍显示 |

### 1.3 Alt+Shift+E 的注册方式

【已核实】module **23759**，`class pl`（模块内偏移 5,466,170 起）。这是一个**只注册键盘、不渲染任何 DOM** 的组件：

```js
// module 23759 @5,466,170
class pl extends ne().Component{
  ... (0,nt.A)(this,"handleKeyDown",e=>{ var t=e.event;
      ...
      69==t.keyCode && t.shiftKey && t.altKey && !t.ctrlKey && !t.metaKey
        && (t.preventDefault(), t.stopPropagation(), this.props.onToggleFullScreen())
  })
  componentDidMount(){ va.A.stack(this.handleKeyDown) }
  componentWillUnmount(){ va.A.remove(this.handleKeyDown) }
  render(){ return ne().createElement("div",null) }   // 空 div
}
```

- 匹配方式：**legacy `keyCode === 69`（'E'）+ `shiftKey && altKey && !ctrlKey && !metaKey`**；不检查 `isTrusted`。
- 注册在 module **32725** 的全局 keydown 栈（`va.A`）上，见 §4.1。
- `pl` 由 EditorContainer.render 无条件渲染（`ne().createElement(pl,{docTabs:...,onToggleFullScreen:this.props.onFullScreenToggle,...})`，@5,979,101 附近），
  **所以 fullScreen 状态下这个快捷键仍然有效**。【已核实】
- 同一个 handler 还占用：`Ctrl+Tab/Ctrl+Shift+Tab`、`Ctrl+1..5`（多标签时）、`Ctrl+S`、`Ctrl+F`、`Ctrl+H`、`Ctrl+P`、`Esc`（见 §4.4）。

### 1.4 是否能从外部触发（给注入 JS 用）

【已核实】两条入口都存在：
1. 正常模式 DOM：`document-info-bar` 里 `sc` 渲染的 `span.full-view-button[title="Content View Only (Alt+Shift+E)"]`，
   `onClick` → `hc.handleFullScreenToggle` → `props.onFullScreenToggle`（一路回到 `bx.handleFullScreenToggle`）。
2. fullScreen DOM：`document-info-bar > span[title^="Exit Content View Only"]`（无 class，只有 title/onClick）。
   ⚠️ 只要我们不隐藏 `document-info-container`，这个退出图标就是现成的。但白纸模式要隐藏信息条 → 需要自己放一个退出按钮。

【推测】`dispatchEvent(new KeyboardEvent('keydown',{key:'E',code:'KeyE',keyCode:69,shiftKey:true,altKey:true,bubbles:true}))`
应当能触发；但 `keyCode` 属于 legacy 字段，Chromium 对 `KeyboardEventInit.keyCode` 的支持需要实测确认。
**更稳的路径是直接 `.click()` 上面两个 span**（DOM 事件不涉及 keyCode 兼容性）。

### 1.5 持久化 / 副作用

- **不持久化**【已核实】：`state={}` 初始、唯一写入 `setState`，全 bundle 的 localStorage 键里没有 fullScreen（§3.3）。
  刷新即失效。
- **不影响保存/autosave**【已核实，推论】：autosave 由 SaveHandler（module 94513 `class Qm`，`registerSaveInterval`）与
  doc tab 的 `saveHandler` 独立驱动，fullScreen 只改布局 prop，不卸载 MathTypeDoc（同一 React key/type，只 re-render）。
- **不影响 CAS**【已核实】：CAS 面板 state 在 MathType 组件（module 11154，`casDockLayout`）；fullScreen 只是让
  MathTypeDoc/EditorContainer 重新 render。注意：`getMathTypeStyle()` 在 CAS 停靠右侧时给纸张加 `marginRight += dockSize`
  （§2.2），这个逻辑与 fullScreen 无关，照常生效。
- **焦点**【推测】：进入 fullScreen 前焦点在隐藏输入框（`editarea`）里；切换只改布局，不 remount → 焦点和光标应保留，
  但可能因 `display:none` 的兄弟节点重排产生一次 reflow；动态验证时请顺便确认「进入后能否直接打字」。

---

## 2. 布局常量与响应式

### 2.1 `content-area` 的 `padding-top:70px` 从哪来

【已核实】不在 bundle 里，是**样式表规则**（CSS @149,164）：

```css
container-layer content-area{color:var(--ui-text-muted,gray);box-sizing:border-box;flex-direction:column;
  align-items:center;width:100%;padding-top:70px;display:block;overflow:visible}
```

- 与之配套的还有（CSS @162,655）：`content-area{float:left;background:var(--ui-workspace,#eee);width:100%;overflow:hidden}`
  → **`content-area` 自己就是灰底来源之一**。
- 反证：上游 `@media print` 里就有 `content-area{padding:0!important}`（CSS @121,876 区块内），
  说明"打印时去掉 70px + 去掉灰底 + 去边框"是上游同款做法，可以直接抄。

### 2.2 fullScreen 下的高度/位置计算（全链条）

【已核实】自外向内：

| 层 | 值 / 代码 |
|---|---|
| `html,body,page,#root` | CSS：`background:var(--ui-workspace,#eee);width/height:100%;overflow:hidden`（CSS @148,282 区块尾） |
| `container-layer` | CSS：`background:var(--ui-workspace,#eee);height:calc(100% - 35px);min-height:400px;position:relative`（CSS @148,282）；**fullScreen inline 覆盖为 `{height:"100%",minHeight:0}`** |
| `.docs-container` | CSS：`position:absolute;inset:0;z-index:0`；inline `{left,right,bottom}`（fullScreen 全 0；CAS/停靠时才有值）；`getInnerContentLeft()/getDockingSize()` |
| `.math-type-doc` | `getMathTypeDocStyle()` → `{height:"100%",position:"absolute",left:0,top:0,right:0,bottom:0}` |
| `.doc-scroll-container` | inline `{overflow:"auto",height:getScrollContainerHeight()}`；fullScreen `"100%"`，正常 `calc(100% - 37px)`（37 = 工具栏 35 + 2） |
| `content-area` | inline `{minWidth: shouldUseBigBorder()? docWidth+250 : "100%", width:"100%", textAlign:"center"}` + CSS `padding-top:70px` |
| `editor-container`（纸张外框） | CSS：`margin:10px auto auto;display:block;position:relative`（CSS @149,164 附近） |
| `math-type`（纸张） | inline `{paddingLeft/Top/Right/Bottom: pageSize.margin→px, width: 文档宽度+padding, transform: scale(docZoom/100), transformOrigin:"left top"}`（`getMathTypeStyle()`，module 11154 @1,937,739）；CSS `padding:15px 20px 20px`、`editor-container>math-type{background:#fff;outline:1px solid #d3d3d3}` |

`getMathTypeStyle()` 关键代码（module 11154 @1,937,739）：

```js
getMathTypeStyle(){
  var e = ln.m.getMaringOrDefaultInPixel(this.getPageSettings().pageSize.margin,"clamp"),
      t = this.pageSettingsHandler.getDocumentWidth(),
      r = this.props.deprecatedPageWidth,
      i = e => { var t=this.state.casDockLayout;
                 return t ? ("right"===t.dockMode ? {...e, marginRight:(parseFloat(e.marginRight)||0)+t.dockSize} : void 0) : e };
  return r ? this.wrapByZoom(i({paddingLeft:e.left,paddingTop:e.top,paddingRight:e.right,paddingBottom:e.bottom,
              width: ln.m.calculatePageWidthCoutingPadding(t,e,"clamp")}, this.props.style))
           : this.wrapByZoom(i(this.props.style||{}));
}
```

`wrapByZoom(e)`：`docZoomPercentage!=100` 时加 `transform:scale(z)` + `transformOrigin:left top`。

### 2.3 纸宽 / pageSize

【已核实】
- `getCurrentDocWidth()`（MathTypeDoc，module 23759 @5,643,536）：

```js
getCurrentDocWidth(){
  var n=this.props.activeLoadedDocumentData; if(!n) return Cp;              // Cp=700（@5,634,130 `var Cp=700`）
  if(this.mathType) return this.mathType.getDocumentWidthPixel();           // → pageSettingsHandler.getDocumentWidth()
  if(n.data.pageSettings?.pageSize){ var i=n.data.pageSettings.pageSize;
     return Ec.m.widthFromKey(i.presetSize,i.width,i.sizeUnit,"px") }
  return n.settings?.width ?? Cp;
}
```
- `getDocumentWidth()`（module 11154 @1,377,162）：

```js
getDocumentWidth(){ var r=this.getTarget().state.mainModel.pageSettings?.pageSize ?? {width:700};
  return ln.m.widthFromKey(r.presetSize,r.width,r.sizeUnit,"px") }
```
- 默认 `pageSize.width = 700`（module 77664 默认 pageSettings 的 `pageSize:h`，且 `renderCustomSizeInput` 缺省 `r=700, i=1122`，
  module 23759 @5,510,071）。上游预置尺寸表在 module 16831（letter/tabloid/legal/a3/a4/a5/b4/b5/custom）。
- `content-area.minWidth = docWidth + 250`（`shouldUseBigBorder()` 恒 true 时的"大边距"，见 2.4）→ 纸张左右各留 125px 的可拖拽区域。

### 2.4 屏幕宽度 / 断点 / 移动视图

【已核实】全部在 module **84258**（env 单例）与 module **57381**（其子类，`Xe.A`/`Ar.A` 实际指向它）：

| 符号 | 实现 | 备注 |
|---|---|---|
| `getScreenWidth()` | `return window.screen.width` | **不是** `innerWidth`，与窗口缩放无关 |
| `shouldUseSmallLayout()` | `return this.isMobileOrTablet() && this.getScreenWidth()<900` | 唯一 900 断点 |
| `isMobileOrTablet()` | `return this.mobileViewEnabled` | **只看 localStorage**，不看 UA！ |
| `mobileViewEnabled` | `"mobile"===localStorage.getItem("mathcha-view-mode")` | 构造时读一次 |
| `saveViewMode(e)` | `localStorage.setItem("mathcha-view-mode", e?"mobile":"desktop")` | 菜单 "Switch to mobile view" 用它；**要生效需刷新**（构造期读） |
| `shouldUseBigBorder()` | `return this.isTestWithBigBorderAsPadding() \|\| !this.isTestEnv()` | 正常环境恒 `true` |
| `isTestEnv()` | `location.href.indexOf("---test---")>=0` | |
| `supportShowProminentShareButton()` | `getScreenWidth()>600 && !isElectronEnv()` | 600 断点；已被 server.py 补丁改成 `!1` |
| `isDarkMode()`(env) | `location.href.indexOf("-dark-mode-")>=0` | 这是**文档/纸张**暗色，不是 UI 主题 |

`isMobileOrTablet()` = true 时的影响（对白纸模式很重要）：
- `renderDocumentInfoBar(){ if(!Ar.A.isMobileOrTablet()) return <hc .../> }` → **移动视图根本没有右下信息条**（也就没有 fullScreen 入口按钮）；
- MathTypeDoc 里额外渲染 `<padding-element style={{width:"100%",height:"700px",display:"block",background:"transparent"}}>`（底部留白）；
- `getScrollContainerHeight` 多一个分支 `isMobileOrTablet()&&isDocReadonly() ? "calc(100% - 1px)"`；
- 大量组件按移动布局渲染（`mobile-tablet` class）。

> 结论：**不要**为了"极简"去设 `mathcha-view-mode:"mobile"` —— 会丢掉信息条（唯一内置 fullScreen 按钮）、
> 触发移动布局，没有任何其它收益。

---

## 3. 可复用的内置入口（URL 参数 / 配置 / localStorage）

### 3.1 `queryMap` 支持的 URL 参数全表

【已核实】`parseQuery`（module 84258）：`?a=1&b=2` → `decodeURIComponent`，无值记为 `""`；
布尔统一 `!!queryMap[key]`（**只要出现该 key 即为 true，`?embedded=0` 也算 true**）。

| 参数 | 读取处 | 语义 |
|---|---|---|
| `embedded` | `isEmbedded(){return !!this.queryMap.embedded}` | 嵌入模式（见 §3.4，**不可用于白纸模式**） |
| `cas-support` | `this.casSupport=!!queryMap["cas-support"]` | 打开 fx CAS 面板（server.py 已打补丁恒 true） |
| `math-white-bg` | `this.mathWhiteBg=!!queryMap["math-white-bg"]` | **只**给 composite block 加白底：module 67928 `getCompositeBlockStyle(){... b.A.mathWhiteBg&&(e.backgroundColor="white")}`；不是整页白纸 |
| `enable-page-view` | `this.enablePageView=...` | 唯一使用点 `renderPageView(){Xe.A.enablePageView}`（module 11154 @1,947,448）**没有实际渲染** → 死参数 |
| `graphing-disabled` | 同上 | 关图形计算 |
| `lazy-render-disabled` / `lazy-render-delay-time` / `lazy-render-view-delta` / `lazy-render-prevent-save-cache` | 同上 | 懒渲染相关（关掉可减少"渲染补丁"抖动） |
| `no-check-unsaved` | `noCheckUnsaved(){return !!queryMap["no-check-unsaved"]}` | 关闭未保存确认 |
| `in-course` | `inCourseTest(){return !!queryMap["in-course"]}` | 课程模式 |
| `test-undo-group-ms` | `getHistoryGroupingIntervalMs()`，默认 1000 | 撤销分组间隔 |
| `evaluation-api-url` / `test-print-error-should-log` / `test-doc-error-should-log` / `force-run-import-for-electron` / `render-image-prod` / `numberOfLinesToUseLazySeparateLines` / `plotSettingDialogFixHeight` / `download-and-using-local-dic` | 同上 | 测试/内部参数，白纸模式无用 |
| `col-tick-interval` | module 57381 `Number.parseInt(queryMap["col-tick-interval"]) \|\| 500` | 列编辑 tick 间隔 |

**没有任何 `readonly` / `itemsBarHide` / `mathTypeHidden` / `dock` 的 URL 参数**。【已核实】
`itemsBarHide`、`hidden` 是 React prop（由 store / 文档状态传入），不由 URL 控制。

### 3.2 `mathGlobal` 配置（server.py 现有注入点，比改 bundle 更干净）

【已核实】`.cache/editor.html` 里：

```html
<script>
  var g_ver_num=422; var g_version="f9164fb5-ced37e37";
  var mathGlobal = { appMode: "main" }      // server.py 已在此行后插 shareDisabled:true, accountDisabled:true
</script>
<script src="https://cdn.mathcha.io/index-f9164fb5-ced37e37.js"></script>
```

module **57381** 读这些 flag：

```js
isSaveDisabled(){return "main"!=mathGlobal.appMode}
isAppSettingStoreDisabled(){return "main"!=mathGlobal.appMode}
isDisableSideBar(){return location.href.indexOf("-side-bar-off-")>=0}
shareFeatureDisabled(){return !!mathGlobal.shareDisabled}
accountFeatureDisabled(){return !!mathGlobal.accountDisabled||this.isElectronEnv()}
headerAsTitle(){return !!mathGlobal.headerAsTitle}
hideMenu(){return !!mathGlobal.hideMenu}        // ← 有用：header 里的 Menu 栏换成 <div style={{width:60}}/>
licenseManagement(){...} windowControls(){...}
```

- `hideMenu:true` 的实际效果：module 23759 @5,997,526 `renderMenuBars(){ if(Ar.A.hideMenu()) return <div style={{width:60}}/> ... }`，
  且 `Ib`（logo）在 `hideMenu()` 时渲染 `.logo-hide` 空 div。**只是把菜单/logo 换成占位，不隐藏 header**。
- `headerAsTitle` 在本 build 里**只定义未被使用**（grep 只有定义处）。
- `appMode!="main"` 会同时关掉保存与设置存储，不建议。

> 这一层是"改了 editor.html 的注入内容"，不碰 bundle；如果白纸模式要顺带把 header 也做成极简，
> 那是可选优化。但注意它**永远隐藏不掉 header 本身**（要隐藏只能 fullScreen 或 CSS）。

### 3.3 localStorage 键全表

【已核实】bundle 里所有 `localStorage` 字面量键：

| 键 | 写入方 | 语义 |
|---|---|---|
| `mathcha.ui-theme` | 主题单例 `fr`（module 23759 @5,282,785 附近） | `"light" \| "dark" \| "system"`；同时监听 `storage` 事件 |
| `mathcha-view-mode` | `saveViewMode`（module 84258） | `"mobile" \| "desktop"`，构造期读 → 需刷新 |
| `settings` | `AppSettingStore`（module 23759 @5,326,191） | 通用 KV：`isReadQuickStart`、`isShowMobileTabletRestriction` 等 |
| `math-data` | 离线文档兜底存储（@5,280,811） | 压缩的模型 JSON |
| `tizkNodeSettings`、`sympy-cmd-history`、`dg-full-view-dialog-show-doc-name` | module 94513 / 98489 | 各自 UI 状态 |
| `<userId>-dockm` | `storeLayout()`（module 23759 @5,883,944） | **dock 面板布局**：`{current, dockedContainer, floatContainer, selectedKey}`；仅在 `props.userInfo` 存在时写（匿名可能不写） |

侧栏显隐/宽度**不**存 localStorage：redux 初始值 `Sx={show:!isMobileOrTablet()&&!isDisableSideBar(), width:220, ...}`
（module 23759 @6,032,384），宽度写回后端 `/api/user-settings/side-bar-width/...`（module 23759 `Zr`，仅登录用户）。
→ 本地离线环境下**没有"把侧栏默认关掉"的持久设置**。

### 3.4 `?embedded` 能不能当白纸模式？——不能

【已核实】理由（每条都有代码）：
1. `isDocReadonly(){return zn.isDocumentReadonly(...) || Ar.A.isEmbedded()}`（MathTypeDoc @5,643,645）→ **只读**；
   MathType 的 `readOnly:Ar.A.isEmbedded()`（@5,646,943）→ 不能编辑。
2. `renderForEmdbedMode(){ return <container-layer class="embedded-mode">{renderMathTypeDoc()}<ha 侧栏（没有 hidden）/></container-layer> }`
   （@5,973,952）→ **侧栏照样渲染**。
3. `renderForEmbeded()`（MathTypeDoc @5,644,159）还会把 `content-area` 报成 `className:"embedded-mode"`；
   注意 `.embedded-mode` 在 CSS 里没有任何规则（grep 0 命中）→ 只是布局分支标记。
4. header 在 embedded 下被隐藏（`hidden = fullScreen||embedded`），但 `Eb` 的 `fullScreen` 恒 true → dock 尺寸归零。

结论：`?embedded` = 只读嵌入模式，不是白纸编辑模式。

### 3.5 结论：能否用参数/设置把界面持久切成极简

- **URL 参数**：不能改变 UI 极简程度（只有 `embedded` 会大改布局，但是只读）；`math-white-bg` 只管公式块白底；
  `-side-bar-off-` / `---test---` / `-dark-mode-` 这类是 `location.href` 子串判断（**路径里出现才生效**，我们的 `/editor` 路由不带），
  除非改 server.py 让 `/editor-side-bar-off-` 也能返回页面（不推荐，侵入路由）。
- **配置（mathGlobal）**：`hideMenu` 只能把 header 的菜单换占位，不能隐藏 header。
- **设置（用户设置/侧栏）**：侧栏显隐不落 localStorage，本机离线没有持久位。
- **结论**：**唯一能持久化"极简布局"的入口就是内置 fullScreen + 我们自己的 localStorage 标记**。这也印证了任务书的方向。

---

## 4. 键盘冲突

### 4.1 全局 keydown 栈（module 32725）

【已核实】整个模块只有 833 B，就是这 20 行（@2,020,287 附近）：

```js
class i{
  constructor(){ this.funcArr=[]; this.isRegisted=false; this.keyInfo={stopOther:false,event:void 0};
    this.handleKeyDown = e => {
      if(this.funcArr.length<=0) return;
      var t=this.keyInfo; t.stopOther=false; t.event=e;
      for(var r=0;r<this.funcArr.length;r++){ this.funcArr[r](t);
        if(t.stopOther){ e.preventDefault(); e.stopPropagation(); break } } } }
  stack(e){ this.funcArr.unshift(e); this.registerOrDeregisterEvent() }   // 后注册的排前面（LIFO）
  remove(e){ this.funcArr=this.funcArr.filter(t=>t!=e); this.registerOrDeregisterEvent() }
  registerOrDeregisterEvent(){ ... document.addEventListener("keydown",this.handleKeyDown) ... }
}
const o=new i   // 导出 o，bundle 里别名有 va.A / xa.A / ig.A / f.A / c.A 等
```

语义要点：
- 监听 **document 冒泡阶段**（非 capture）；
- 处理器拿到 `{stopOther,event}`，谁先置 `stopOther=true` 谁赢，栈立即 `preventDefault()+stopPropagation()` 并 break；
- `event` 是原生 event → **没有任何 `isTrusted` 检查**，合成事件同样会被处理；
- 注册点（`grep '\.stack('` 全量，共 10 处）：
  module 94668 模态对话框 `handleEscape`；11154 自动补全 `Ka.handleDocumentKeyDown`；
  94513 绘图工具 `handleGlobalKey` + SaveHandler `handleSaveShortcutPress`（`Ctrl+S`）；
  23759 `pl`（本文 Alt+Shift+E 所在）+ 打印覆盖层 + 打印进度 + focus-scope 对话框 + 假工具栏对话框；
  26642 下拉展开组件。

### 4.2 命令表 `tt` / `rt`（module 11154 @1,285,779）

任务书里说的 `tt.map` / `rt.map` 就是这两个类（本 build 里类名被压成 `tt`/`rt`，**字面量 `tt.map` 在文件里搜不到**，不要用这个字符串 grep）：

```js
Xe.A.isMac() ? this.actionMapping=new tt : this.actionMapping=new rt;   // class $e
isSaveKey(e){ return this.actionMapping.isSaveKey(e) }
getCommandFrom(e,t){ if(!e.metaKey&&!e.ctrlKey&&!e.altKey&&this.isAlphaBetaNumber(e.keyCode))
                       return {action:null,e};            // 纯字母/数字直接放行给输入
                     return {action:this.actionMapping.map(e,t),e} }
```

非 Mac 表（`rt.map`）与白纸模式相关的键【已核实】：

| 键 | 结果 |
|---|---|
| `Ctrl+B` | 文本模式选中 → `toggle-bold`；否则 math 模式 → `toggle-mathbf` |
| **`Ctrl+Shift+B`** | 文本模式选中 → `toggle-bold`；**math 模式 → `toggle-mathbb`** ← **已占用** |
| `Ctrl+Shift+E` | 文本模式选中 → `align-middle`（math 模式无动作） |
| `Ctrl+Shift+R` / `Ctrl+Shift+C` / `Ctrl+Shift+L/J` | `toggle-mathrm` / `toggle-mathcal` / 文本对齐 |
| `Ctrl+1/2/3` | section-level-1/2/3 |
| `Ctrl+Shift+7/8` | order-list / unorder-list |
| `Ctrl+S`（另一个 stack handler） | 保存 |
| `Ctrl+F` / `Ctrl+H` / `Ctrl+P` | 查找 / 替换 / 打印（`pl` 的 handler，**只判 ctrlKey，不判 shiftKey**） |
| `Esc` | 不在 `map` 里（输入层不消费），由 stack 上各对话框消费，见 §4.4 |

### 4.3 快捷键建议

- **Alt+Shift+E 直接用内置的**（白纸模式进入/退出），零成本、零冲突；
  但要注意它的执行条件是 `keyCode===69 && shiftKey && altKey && !ctrlKey && !metaKey`。
  在浏览器里做合成事件时，`altKey` 会让某些系统/浏览器先吞掉按键（Windows 下 Alt 菜单栏），**所以更推荐 `.click()` 那两个 span**。【推测 → 动态验证】
- **不要用 Ctrl+Shift+B**：math 模式下它是 `\mathbb`（`toggle-mathbb`），抢了就破坏公式输入。
- 如果确实要加自定义键：优先 `Alt+Shift+<字母>`（除 E 外，`rt.map` 的 altKey 分支只占用了方向键/Backspace/Delete/↓duplicate-line，
  `pl` 也只认 E）。但 Windows 上 `Alt+Shift` 是输入法切换热键，可能被系统先吞掉，**必须动态验证**。
  另一个候选是 `Ctrl+Alt+M`（`rt.map` 的 ctrl+alt 只用于 `1/2/3` = section-level）——同样需实测。
  无论选哪个，都要在 **document capture 阶段** `preventDefault()+stopPropagation()`，否则事件还会冒泡到 32725 的栈里被别的组件消费。【推测】

### 4.4 Esc 的消费层级 / 双击 Esc 退出是否安全

【已核实】`Esc = keyCode 27`，消费者（设在 `stopOther` 即被消费、`preventDefault+stopPropagation`）：

| 模块 | 组件 | 行为 |
|---|---|---|
| 94668 | 模态对话框 `y` | `27===event.keyCode → stopOther=true` → `onClose()`（除非 `preventCloseEscape`/`isCloseDisabled`） |
| 11154 | 自动补全 `Ka` | `27 → onClose(false); stopOther=true` |
| 23759 | print 覆盖层 `bl` | `27 → requestPrintClose(); stopOther=true` |
| 23759 | focus-scope 对话框（`openFocusScope`） | `27 → onClose(); stopOther=true` |
| 23759 | 打印进度 `nh` | `27 → stopOther=true`（**只吞不动作**） |
| 23759 | 假工具栏对话框 | `27 → onClose; stopOther=true` |
| 26642 | 展开下拉 | `27 && expand → closeExpand(); stopOther=true` |
| 98489 | CAS 命令历史下拉 | `27 → preventDefault+stopPropagation→ hide()` |
| 23759 | `pl`（本组件） | `27==keyCode && onCloseFindAndReplace()`（**不设 stopOther、不 preventDefault**） |

双击 Esc 评估：
- **编辑器核心不消费 Esc**（`rt.map`/`tt.map` 里没有 27，输入层只关心字符/结构键）→ Esc 在"没有弹窗/建议框/下拉"时是空转的。【已核实】
- 但**有弹窗时 Esc 会被消费并 `stopPropagation()`**，所以：
  - 若我们的监听挂在 `window`（冒泡阶段的更高层），被消费的 Esc 传不上来 → 天然安全；【已核实：栈在 document 上 stopPropagation】
  - 若挂在 document 且先于栈执行（capture），会误判。
  → **推荐实现：`window.addEventListener('keydown', handler)`（冒泡，非 capture）**；这样只有"没被任何 UI 消费的 Esc"才会到我们手里。
- 残余风险：`pl` 的 Esc（关查找/替换）不 stopPropagation → 关闭查找框那一下也会算一次 Esc；`preventDefault` 也拦不住我们。
  【推测】可以再加一层保险：检测"有可见浮层"就跳过这次 Esc，例如
  `[...document.querySelectorAll('modal-dialog,context-menu-container')].some(el=>el.offsetParent!==null)`（注意这些元素可能常驻 DOM，必须判可见性）。
- **结论**：双击 Esc 退出"基本安全"，但不是零风险；白纸模式本来就是要"安静的界面"，建议**主入口用 Alt+Shift+E / 自绘按钮，
  双击 Esc 作为附加**（且只在 paper mode 下启用）。

---

## 5. 样式来源

### 5.1 注入顺序（关键，决定必须用 `!important`）

【已核实】`editor.html` 里**没有** `<link rel=stylesheet href=...styles-*.css>`。主样式表是加载器在运行时拉取并 append 的：

```js
// .cache/cdn/index-f9164fb5-ced37e37.js @15,645
function setStyle(e){ var n=document.createElement("style");
  n.type="text/css"; n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e));
  document.head.appendChild(n) }
function loadMainStyle(){ return loadAjax(cdnPrefix+"/styles-"+mathGlobal.version+".css").then(e=>setStyle(e)) }
...
window.Promise.all([loadAjax(cdnPrefix+"/bundle-"+mathGlobal.version+".js"), loadMainStyle(), loadIconFonts()]...)
```

而 server.py 的 `HIDE_CSS` 是插在 `</head>` 之前 → **我们的 `<style>` 出现在应用主样式表之前**。
CSS 层叠同特异度时后者胜 → 我们必须在**特异度或 `!important`** 上做文章（`html.paper-mode xxx` 前缀通常够，但用 `!important` 更省心）。

⚠️ 另一层：bundle 里的 webpack 运行时也会懒加载 CSS chunk —— `s.miniCssF=e=>({270:"518a4946…",409:"544cc91b…"}[e]+"."+e+".bundle.css")`
（bundle @5,191,080），由运行时创建 `<link rel="stylesheet">` 插入 head。它同样晚于我们的注入。
实践建议：**所有白纸规则带 `!important`**。

### 5.2 `--ui-*` 变量清单（共 35 个）

【已核实】定义块（CSS @8,596 起），默认只有 5 个在裸 `html[data-ui-theme]` 上：

```
--ui-control-height, --ui-control-height-compact, --ui-control-font-size,
--ui-dialog-action-width, --ui-dialog-padding
```

`html[data-ui-theme=light]` / `html[data-ui-theme=dark]` 各自覆盖的 30 个：

```
--ui-action, --ui-action-hover, --ui-border, --ui-border-focus, --ui-border-hover,
--ui-danger, --ui-danger-action, --ui-danger-action-hover, --ui-danger-border, --ui-danger-surface,
--ui-disabled-overlay, --ui-focus, --ui-header, --ui-header-hover, --ui-header-inactive,
--ui-info, --ui-modal-backdrop-opacity, --ui-on-accent, --ui-selection, --ui-shadow,
--ui-success, --ui-surface, --ui-surface-active, --ui-surface-hover, --ui-surface-muted,
--ui-text, --ui-text-disabled, --ui-text-muted, --ui-warning, --ui-workspace
```

与白纸模式直接相关的一行（浅色 / 深色）：

```css
html[data-ui-theme=light]{... --ui-workspace:#eee; --ui-surface:#fff; --ui-border:#d3d3d3; --ui-text:#333; ...}
html[data-ui-theme=dark] {... --ui-workspace:#1b1e22; --ui-surface:#25282d; --ui-border:#505963; --ui-text:#e6e9ed; ...}
```

**`--ui-workspace` 就是"工作区灰底"的唯一来源**：`html,body,page,#root`、`container-layer`、`content-area`、`body` 全用它。
→ 白纸模式把它改成 `#fff` 一处，等于把周围所有灰底一次性洗白（比逐条 `background` 省事且不易漏）。

### 5.3 深色模式切换机制

【已核实】module 23759 @5,282,785 附近，`localStorage["mathcha.ui-theme"]` ∈ `light|dark|system`：

```js
apply(){
  var t = "dark"===this.preference || "system"===this.preference && !(this.media&&this.media.matches);
  document.documentElement.setAttribute("data-ui-theme", t?"dark":"light");
}
```

- 属性挂在 **`<html>`** 上：`html[data-ui-theme=dark]`（43 条规则）/ `html[data-ui-theme=light]`（1 条变量块）。
- 启动时 `yr.start()` 一定会 `apply()`（module 23759 在 `const yx=...` 之前有一句 `yr.start();`）→ 页面一定有该属性。
- **不要**用 class 切主题；要强制浅色，可 `document.documentElement.setAttribute('data-ui-theme','light')`（设置面板之外没人会改回）。【推测：主题单例只在 `setPreference/apply` 时写，不监听 attribute】
- ⚠️ **UI 主题 ≠ 纸张暗色**。纸张暗色是 `math-type.dark-mode`，来自
  `fixedContextHandler.setDarkMode(Xe.A.isDarkMode() || !!getPageSettings().isDarkMode)`（module 11154 @1,931,384），
  而 `Xe.A.isDarkMode()` 只看 URL 是否含 `-dark-mode-`。所以本地 `/editor` 下**纸张永远是白底**，
  除非将来把文档 `pageSettings.isDarkMode` 打开。

### 5.4 纸张 / 背景 / 边框 / 滚动条 / 装饰 的选择器

【已核实】（偏移均为 styles-*.css 字节偏移，单行文件）

| 目标 | 选择器与规则 | 偏移 |
|---|---|---|
| 纸张白底 | `editor-container>math-type{background:#fff;outline:1px solid #d3d3d3}` | @114,907 |
| 纸张内边距 | `math-type{color:#000;...;padding:15px 20px 20px;display:block;position:relative}` | @114,976 |
| 纸张暗色 | `editor-container>math-type.dark-mode,math-type.dark-mode{background:#1e1e1e}` | @8,432 附近 |
| 纸张暗色文字 | `math-type.dark-mode editarea.root-editor{color:#e0e0e0;fill:#e0e0e0;stroke:#e0e0e0;background:#1e1e1e;border-color:#e0e0e0}` | @8,432 之后 |
| 工作区灰底 | `html,body,page,#root{...background:var(--ui-workspace,#eee);...overflow:hidden}` | @148,282 区块 |
| 容器灰底 | `container-layer{background:var(--ui-workspace,#eee);height:calc(100% - 35px);min-height:400px;position:relative}` | @148,282 |
| 内容区灰底 + 70px | `content-area{float:left;background:var(--ui-workspace,#eee);width:100%;overflow:hidden}` | @162,655 |
| | `container-layer content-area{...padding-top:70px;display:block;overflow:visible}` | @149,164 |
| 文档区 | `container-layer .docs-container{z-index:0;position:absolute;inset:0}` | @148,571 |
| 滚动区 | `container-layer .doc-scroll-container{z-index:2;position:relative}` | @148,571 |
| 滚动条 | `::-webkit-scrollbar{background-color:#0000;-webkit-border-radius:100px;width:8px;height:8px}`；`::-webkit-scrollbar:hover{background-color:var(--ui-surface-hover,#e7e7e7)}` | @116,308 |
| 文档滚动条 | `container-layer .doc-scroll-container::-webkit-scrollbar{width:10px;height:10px}`；`.mobile-tablet` 时 4px | @148,607 |
| 顶部工具栏 | `.doc-toolbar-container{background:var(--ui-surface-muted,#f7f7f7);border:1px var(--ui-border,lightgray) solid;z-index:6;width:100%;margin-left:-2px}`；`.doc-toolbar-container>tool-bar{width:770px;min-width:770px;height:35px}` | @151,819 |
| 页宽拖拽条 | `class vc`（module 23759 @5,503,839），由 MathTypeDoc render `show:this.isDocWriteable()&&100==docZoom` @5,648,410；无 CSS 基础规则，全靠 inline：`renderResizeBar()` 给 `resize-bar` 内联 `{width:2,borderLeft:"1px solid var(--ui-border,#dedcdc)",cursor:"col-resize",position:"absolute",right:0,height:"100%",top:0}`；不显示时 `display:none` | JS module 23759 @5,504,888 |
| 页宽拖拽提示 | `resizing-bar` / `resizing-info`（内联定位 `top:70`，正好对应 2.1 的 70px） | 同处 |
| 右下信息条 | `document-info-container document-info-bar{background:var(--ui-surface-muted,#f7f7f7);box-shadow:1px 1px 1px 0px var(--ui-shadow,#e0dddd);border:1px var(--ui-border,lightgray) solid;color:var(--ui-text-muted,gray);opacity:.8;z-index:4;position:absolute;bottom:5px;right:15px}`；hover `opacity:1` | @151,186 |
| 绿色页眉条 | `container-layer content-area>green-bar{border-bottom:1px solid var(--ui-border,#c7c5c5);background:#4caf50;width:100%;height:15px;margin-top:-1px}` | @149,241 |
| page-break | **没有** `page-break*` 选择器（grep 0）。页面分隔视觉来自 `area-container-border`（只在 @media print 里出现）与纸张 `outline` | — |
| 深色 UI 下的工具栏/信息条配色 | `html[data-ui-theme=dark] .role-toolbar-wrapper, ... tool-bar, ... items-bar, ... document-info-bar{color:var(--ui-text-muted)}`（43 条同类规则之一） | @10,311 |

### 5.5 上游自带的「打印模式隐藏清单」——可以直接抄

【已核实】`@media print` 两个区块（CSS @120,519–123,371）已经定义了"白纸输出"要隐藏什么，**这正是白纸模式想要的语义**：

```css
@media print{
  .math-type-doc,.docs-container,.modal-dialog-root-container,.print-process-overlay,
  instructions-container{display:none!important}
  .print-preview-controls-container,.math-type-no-print{display:none!important}
  header,.export-bar-container{display:none!important}
  document-info-bar,document-sidebar-container{display:none!important}
  page,#root,body,html{background:#fff!important;width:100%!important;height:100%!important;
    position:relative!important;overflow:visible!important}
  ...
}
@media print{
  .setting-select,.no-print,ref-tag.empty-line-tag,.text-cursor,.sub-text-cursor,selection-wrapper,
  message-box-container,connection-controls,.control-point-guide,tool-bar,items-bar,document-sidebar,
  resize-bar,diagram-expander,warning-error-region,loading-layer,resizing-info,toc-refresh{display:none!important}
  container-layer{height:initial!important;background:0 0!important;margin:0!important;padding:0!important;overflow:visible!important}
  editor-container{background:0 0!important;border:none!important;width:100%!important;margin:0!important;padding:0!important}
  content-area{margin:0;background:0 0!important;padding:0!important}     /* ← 70px 的官方解法 */
  math-type{padding:0!important}
  ...
}
```

注意：第一段里 `.math-type-doc,.docs-container{display:none!important}` 是**打印**场景（打印用 `#print-container` 另建的树），
白纸模式**不能**抄这条隐藏项（会把整篇文档藏掉）。其余隐藏项（header/信息条/侧栏/工具栏/items-bar）可以照抄。

---

## 6. React 与我们注入 CSS 的抢状态风险

### 6.1 每次 render 会被重写的 inline style 清单

【已核实】白纸模式会碰到的元素：

| 元素 | inline style 来源 | 是否会重写 | 白纸模式是否需要改它 |
|---|---|---|---|
| `container-layer` | `getContainerLayerStyle()` → fullScreen `{height:"100%",minHeight:0}` | 只在 fullScreen prop 变化时 | 否（正是我们要的） |
| `.math-type-doc` | `getMathTypeDocStyle()` → `{height:"100%",position:absolute,left/top/right/bottom:0}` | 值恒定，但每次 render 重设 | 否 |
| `.doc-scroll-container` | `{overflow:"auto",height:getScrollContainerHeight()}` | fullScreen 变化会变 | 否（fullScreen 已是 100%） |
| `content-area` | `{minWidth: docWidth+250, width:"100%", textAlign:"center"}`（**不含 padding**） | 每次 MathTypeDoc render 重写 minWidth/width | **要**：`padding-top:70px` 是纯 CSS，可安全覆盖；`min-width`/`width` 是 inline，要改需 `!important` |
| `.docs-container` | `{left:sidebarWidth+4, right:dockRight, bottom:dockBottom}`（fullScreen 全 0） | 侧栏/停靠变化时 | fullScreen 下无需改；纯 CSS 方案要 `!important` 压 0 |
| `math-type`（纸张） | `getMathTypeStyle()` → padding/width/transform/marginRight(CAS) | 每次 MathType render 重写 | 白纸模式不建议动 width/padding（会破坏排版与缩放），只改背景/描边（CSS 可安全覆盖） |
| `document-info-bar` | `{bottom: scrollBarVisible?15:5}` | 滚动条出现/消失时 | 我们要整块隐藏（`document-info-container{display:none}` 是纯 CSS，无冲突） |
| `items-bar` | `itemsBarContainerStyle` + `hiddenOnDefaultItemsBar` 时 `{display:"none"}` | 选中变化时 | 我们隐藏 `.doc-items-bar-container`（纯 CSS，无冲突） |
| `header#page-header` | `hidden` 时 `{display:"none"}`（fullScreen） | fullScreen 变化时 | 无需 |
| `document-sidebar-container` | `hidden` 时 `{display:"none"}` | fullScreen 变化时 | 无需 |
| `.doc-toolbar-container` | `hidden` 时 `{display:"none"}` | fullScreen 变化时 | 无需 |
| `document-sidebar-expanded` | `{width:sidebarWidth, minWidth:isMobile?300:undefined, display:isSideBarShown?undefined:"none"}` | 侧栏变化时 | 无需 |
| `resize-bar` | 见 §5.4，`display:none` 或 2px 条 | `show`/`resizing` 变化 | 隐藏（纯 CSS 可压，因为它是元素级选择器 + 我们 `!important`） |
| CAS 停靠面板 | `{position:"fixed",zIndex:1000,top:72,right:0,bottom:0,width:dockSize,...}`（**普通 div，Tailwind class，无独有类名**） | dockMode/dockSize 变化 | **不能**用宽泛选择器（如「隐藏 content-area 里的 div」）会误杀它 |

### 6.2 纯 CSS 覆盖的可靠性结论

- **可靠（CSS 独有 / React 不写这些属性）**：
  `content-area` 的 `padding-top`、`container-layer`/`content-area`/`html/body` 的 `background`（走 `--ui-workspace` 变量）、
  `math-type` 的 `background`/`outline`（React 只写 padding/width/transform）、`document-info-container` 的 `display`、
  `.doc-items-bar-container` 的 `display`、`resize-bar` 的 `display`、`header#page-header` 的 `display`。
- **不可靠（会被 inline style 打回）**：`content-area` 的 `min-width`/`width`、`.docs-container` 的 `left/right/bottom`、
  `.doc-scroll-container` 的 `height`、`math-type` 的 `width/padding/transform/margin-right`、`document-info-bar` 的 `bottom`、
  `document-sidebar-expanded` 的 `width`。
  → 这些要么不用改（fullScreen 已给到我们想要的 0/100%），要么必须 `!important`（inline 无 `!important` 时，`!important` 的 CSS 声明永远赢）。

### 6.3 推荐实现路径

**方案 B（推荐）：注入 JS 复用内置 fullScreen + 注入 CSS 洗白**

1. 用户点「白纸模式」→ 注入 JS `document.querySelector('document-info-bar .full-view-button')?.click()`；
   若已在 fullScreen（`document-info-container` 里存在 `span[title^="Exit Content View Only"]`）则点它退出。
2. 同时给 `<html>` 加 `class="paper-mode"`（**注意是加 class，不动 `data-ui-theme`**），并写 `localStorage["mathcha-local-paper-mode"]="1"`。
3. 注入 CSS（§7.3）在 `html.paper-mode` 作用域内洗白 + 隐藏残留装饰。
4. 启动时：轮询/`MutationObserver` 等 `.full-view-button` 出现 → 若 localStorage 标记为开且当前不在 fullScreen → click。
   （bundle 是异步加载的，`DOMContentLoaded` 时编辑器还没挂载。）
5. 因为 fullScreen 的 UI 入口（信息条）被我们隐藏了，**必须**在 paper 模式下放一个我们自己的一键退出按钮
   （fixed 右下角 12px 半透明），或依赖 Alt+Shift+E。

理由：
- fullScreen 已经处理了 80% 的"布局切换"（拉满容器、侧栏/工具栏/插入条/header 全隐藏、dock 归零），
  我们只补「背景白 + 去掉 70px + 去纸张描边 + 隐藏信息条/拖拽条」；
- fullScreen 是 React state 驱动的**正常 UI 状态**，不 hack fiber；退出时所有内联样式会自己恢复，不会留下脏状态；
- 需要我们 `!important` 压的 inline 样式几乎为 0（只剩可选的 `content-area{min-width:100%!important}` 以防窗口变窄出横向滚动）。

**方案 A（纯 CSS 模拟，不进 fullScreen）**：可行但更脆
- 需要覆盖：`header#page-header{display:none!important}`、`.doc-toolbar-container{display:none!important}`、
  `document-sidebar-container{display:none!important}`、`document-info-container{display:none!important}`、
  `.doc-items-bar-container{display:none!important}`、`resize-bar{display:none!important}`、
  `content-area{padding-top:0!important;min-width:100%!important}`、
  `.docs-container{left:0!important;right:0!important;bottom:0!important}`、
  `.doc-scroll-container{height:100%!important}`、`container-layer{height:100%!important}`、
  `--ui-workspace:#fff`、`math-type{outline:none!important}`。
- 风险：React 重新 render 时 inline 会重设（我们用 `!important` 顶住，但这是持续对抗）；`Fl` 滚动条探测、
  页宽拖拽、`getScrollContainerHeight` 的 `calc(100% - 37px)` 等仍按"正常模式"算，可能出现 1~2px 抖动或多出滚动条。
- **结论**：只作为 CSS 注入层的兜底（即使 fullScreen 点击失败，界面也已接近白纸），不作为主路径。

**方案 C（`?embedded`）**：否决，见 §3.4（只读 + 侧栏还在）。

---

## 7. 建议：白纸模式的精确 selector 清单

### 7.1 需要隐藏（hide list）

> 依据：§1.2 的组件表 + §5.4/§5.5 的 CSS 证据。建议全部带 `!important`。

```css
/* 白纸模式下要"彻底消失"的 chrome */
html.paper-mode header#page-header                        {display:none!important}  /* 35px 绿 header：logo/菜单/标签/账号 */
html.paper-mode .doc-toolbar-container                    {display:none!important}  /* 顶部编辑工具栏（fullScreen 已隐藏，兜底） */
html.paper-mode document-sidebar-container                {display:none!important}  /* 左侧文档树侧栏 */
html.paper-mode document-info-container                   {display:none!important}  /* 右下信息条：缩放+fullScreen 按钮+滚动条探测 */
html.paper-mode .doc-items-bar-container                  {display:none!important}  /* 插入条容器（fullScreen 已 display:none，兜底） */
html.paper-mode resize-bar, html.paper-mode resizing-bar, html.paper-mode resizing-info {display:none!important}  /* 页宽拖拽条/提示 */
html.paper-mode container-layer content-area>green-bar    {display:none!important}  /* 绿色页眉条（若文档有） */
html.paper-mode .export-bar-container                     {display:none!important}  /* 极窄屏下的导出栏（正常不存在） */

/* 布局装饰：把 70px 顶部留白与"大边距拖拽区"去掉 */
html.paper-mode container-layer content-area              {padding-top:0!important; min-width:100%!important}
html.paper-mode container-layer                           {background:#fff!important}

/* 纸张：纯白、无描边 */
html.paper-mode math-type                                 {background:#fff!important; outline:none!important}
html.paper-mode math-type.dark-mode                       {background:#fff!important}           /* 文档暗色兜底 */
html.paper-mode math-type.dark-mode editarea.root-editor  {color:#000!important; fill:#000!important; stroke:#000!important;
                                                           background:#fff!important; border-color:#000!important}

/* 工作区灰底：一处改全局（html/body/page/#root/container-layer/content-area 全用它） */
html.paper-mode { --ui-workspace:#fff !important; }

/* 可选：让滚动条不抢镜（仍可滚） */
html.paper-mode .doc-scroll-container::-webkit-scrollbar   {width:0!important; height:0!important}
```

### 7.2 必须保留（白名单）——**不要**用宽泛选择器误杀

| 功能 | 选择器 / 元素 | 说明 |
|---|---|---|
| 自动建议框（`\frac` 下拉） | `.auto-complete-container`（主建议框，inline 定位、`z-index:999999`）+ `.auto-complete-external-area`（modal 版 "Symbol suggestions"） | 公式输入的核心 UI；两者都靠 inline 定位，不受 padding/布局覆盖影响 |
| 右键菜单 | `context-menu-container`（`position:fixed;width:200px;z-index:13`，CSS @130,601） | 全站右键 |
| 模态对话框 | `modal-dialog`, `modal-container.mt-common-dialog`（CSS @170 起） | 页面设置/导入导出/用户设置/关于 |
| CAS（fx 面板） | 停靠态是**普通 div**：inline `{position:fixed;zIndex:1000;top:72;right:0;bottom:0;width:420}` + Tailwind class；浮动态是 `modal-dialog` | 只能靠"不做宽泛隐藏"来保；不要写 `content-area div{display:none}` 之类 |
| CAS 命令历史下拉 | `h-cmd-item` / 终端区（module 98489） | 同上 |
| 消息条 | `.message-box-container`（CSS @148,838，`bottom:4px`） | 保存失败/错误提示，建议保留（也会占白纸底部，可接受） |
| 查找/替换 | `find-and-replace-area`（CSS @148,539） | Ctrl+F 打开；若隐藏会"打开但看不见" |
| 加载/错误浮层 | `loading-layer.show`（CSS @149,660）, `warning-error-region` | 出错时唯一提示 |
| 打印/导出浮层 | `.print-preview-container`, `.print-process-overlay` | 导出时 |
| 页面设置类小面板 | `.setting-select`, `tool-bar`（**缩略图里**的）等 | 注意：`tool-bar` 在 diagram/quick-start 里也出现，**别全局隐藏 `tool-bar`**；只隐藏 `.doc-toolbar-container` |
| 图表编辑条 | `.dg-items-bar-container`, `diagram-bar-region`, `diagram-settings` | 在 `math-diagram` 内部，白纸模式仍要能编辑图表 |

> 隐藏策略总结：**只隐藏「文档级 chrome 的具名类/自定义元素」**（header、doc-toolbar-container、
> document-sidebar-container、document-info-container、doc-items-bar-container、resize-bar），
> 绝不用 `content-area > *` / `math-type-doc > *` 这种后代通配。

### 7.3 注入骨架（仅供参考，不是本次改动）

CSS（由 server.py 的 `HIDE_CSS` 之后追加，或单独一段注入）：

```css
html.paper-mode{--ui-workspace:#fff!important}
html.paper-mode header#page-header,
html.paper-mode .doc-toolbar-container,
html.paper-mode document-sidebar-container,
html.paper-mode document-info-container,
html.paper-mode .doc-items-bar-container,
html.paper-mode resize-bar{display:none!important}
html.paper-mode container-layer content-area{padding-top:0!important;min-width:100%!important}
html.paper-mode math-type{background:#fff!important;outline:none!important}
```

JS（注入到 `</body>` 前的普通 `<script>`，不打包、不动 bundle）：

```js
(function(){
  var KEY='mathcha-local-paper-mode';
  function inFullView(){
    return !!document.querySelector('document-info-container [title^="Exit Content View Only"]');
  }
  function toggle(){
    if(inFullView()){
      var exit=document.querySelector('document-info-container [title^="Exit Content View Only"]');
      exit && exit.click();
      document.documentElement.classList.remove('paper-mode');
      localStorage.setItem(KEY,'0');
    }else{
      var enter=document.querySelector('document-info-bar .full-view-button');
      if(!enter) return false;              // 编辑器还没挂载
      enter.click();
      document.documentElement.classList.add('paper-mode');
      localStorage.setItem(KEY,'1');
    }
    return true;
  }
  // 首次挂载后按持久化标记恢复
  var timer=setInterval(function(){
    if(localStorage.getItem(KEY)==='1' && !inFullView()){
      if(toggle()) clearInterval(timer);
    }else if(document.querySelector('document-info-bar')){
      clearInterval(timer);
    }
  },250);
  // Alt+Shift+E 是内置的：用户按它时 state 会变，这里只同步 class
  window.addEventListener('keydown',function(e){
    if(e.keyCode===69&&e.shiftKey&&e.altKey&&!e.ctrlKey&&!e.metaKey){
      setTimeout(function(){ document.documentElement.classList.toggle('paper-mode', inFullView()); },0);
    }
  },true);
  window.__paperModeToggle = toggle;    // 供界面按钮/快捷键调用
})();
```

> 注意：上面的 toggle 依赖"内置 fullScreen 是唯一状态源"。如果用户用内置按钮退出，`paper-mode` class 需要同步
> （用 `MutationObserver` 监听 `document-info-container` 的子树变化最稳，或定时对比 `inFullView()`）。

### 7.4 留给动态验证同学的清单（静态只能到这一步）

1. `.full-view-button` 在真实 DOM 里是否可点、点后 `document-info-container` 是否出现 Exit 图标；
2. 合成 `KeyboardEvent(keyCode:69, altKey:true, shiftKey:true)` 能否触发（Chromium 对 init.keyCode 的处理）；
3. 进入 fullScreen 后 `container-layer` / `docs-container` / `content-area` 的 computed style 是否如 §2.2 预期；
4. 隐藏 `document-info-container` 后是否还有任何"退出白纸"的内置入口（预期：没有）；
5. 中文输入法/光标在进入 fullScreen 后是否仍在 `editarea`（能否直接打字）；
6. 建议覆盖项在应用主样式表之后注入时能否生效（`!important` 是否必需）；
7. CAS（fx）面板在 paper 模式下是否仍可见可用（停靠右侧时纸张的 `marginRight` 会 +420）。

---

## 附录 A：证据索引（module id → 符号）

| module | 符号/内容 | 位置（字节偏移） |
|---|---|---|
| 23759 | `class bx`：`state.fullScreen` + `handleFullScreenToggle` + `<page>` 根渲染 | @6,029,274 |
| 23759 | `cx`（header 组件）/ `const dx=et(...)(cx)`（连接版） | `class cx` @6,022,363 / `const dx` @6,026,154 |
| 23759 | `class pl`：Alt+Shift+E keydown、`va.A.stack`、`render(){return <div>}` | @5,466,170 |
| 23759 | `class sc`：`full-view-button` / Exit 图标 span | @5,496,036 |
| 23759 | `class hc`：`document-info-bar` 组件（`show:!0`、`bottom:` inline） | @5,500,442 |
| 23759 | `class Sp`（MathTypeDoc）：`getCurrentDocWidth`/`getScrollContainerHeight`/`getMathTypeDocStyle`/`renderPaddingElement` | @5,634,141 起 |
| 23759 | EditorContainer：`getContainerLayerStyle`/`getDockingSize`/`renderMathTypeDoc`/`renderForEmdbedMode` | `class r` @5,961,535（`getContainerLayerStyle` @5,973,952） |
| 23759 | `class gp`（doc toolbar container）/ `class mp`（items bar container） | @5,629,893 / @5,630,892 |
| 23759 | 主题单例 `fr`（`mathcha.ui-theme` / `data-ui-theme`） | @5,282,785 |
| 23759 | `storeLayout()`（`<userId>-dockm`） | @5,883,944 |
| 23759 | 页宽拖拽 `renderResizeBar()` + `resize-bar` 内联样式 | @5,504,888 |
| 23759 | redux 侧栏初值 `Sx={show:...}` | @6,032,384 |
| 84258 | env 单例 `a`：`queryMap`、`mobileViewEnabled`、`getScreenWidth`、`shouldUseBigBorder`、`isEmbedded`、`isDarkMode` | 模块 @273,516（符号约在 274k–281k） |
| 57381 | `mathGlobal` 读取：`hideMenu`/`headerAsTitle`/`isDisableSideBar`/`appMode` | 模块 @4,362,300（`hideMenu` @4,363,002） |
| 11154 | MathType 根：`getMathTypeStyle`/`getDocumentWidth`/`wrapByZoom`/`renderReadOnly` | @1,937,739 / @1,377,162 |
| 11154 | keymap `class tt`(Mac) / `class rt`(非 Mac) + `class $e` | @1,285,779 |
| 11154 | 自动补全 `class Ka`（Esc→onClose） | @1,626,824 |
| 11154 | `getCasInputBlocks` / `renderCasDialog` / `updateCasDockLayout` | @1,899,789 / @1,946,336 |
| 32725 | 全局 keydown 栈单例 | @2,020,287 |
| 94668 | 模态对话框 Esc | @396,237 |
| 16831 | 预置 pageSize 表（letter/a4/...） | @891,869 附近 |
| 77664 | pageSettings 默认值（`pageSize`、`isDarkMode` 等） | @1,243,005 |
| 67928 | `mathWhiteBg` 使用点（composite block 白底） | @3,932,730 |
| index.js | `setStyle` / `loadMainStyle` / `Promise.all([bundle, styles, fonts])` | @15,432 / @15,645 / @18,945；`miniCssF` 见 bundle @5,191,080 |
| styles.css | `--ui-*` 变量表 / dark / light | @8,596 |
| styles.css | `@media print` 两个 hide 区块 | @120,519–123,371 |
| styles.css | `container-layer` 基础块（灰底/高度） | @148,282 |
| styles.css | `container-layer content-area{padding-top:70px}` | @149,164 |
| styles.css | `content-area{float:left;background:var(--ui-workspace,#eee)}` | @162,655 |

## 附录 B：复现命令

```bash
cd /data/project/BTW/mathcha-local/.cache/cdn

# JS：按 webpack 模块边界定位符号归属（bundle 是单行，先建边界索引再 bisect）
python3 - <<'PY'
import re,bisect
s=open('bundle-f9164fb5-ced37e37.js',encoding='utf-8',errors='replace').read()
pat=re.compile(r'([{,])(\d{1,6})\(([a-zA-Z,]*)\)\{')
ms=list(pat.finditer(s)); starts=[m.start() for m in ms]; ids=[m.group(2) for m in ms]
def mod(o):
    i=bisect.bisect_right(starts,o)-1; return ids[i] if i>=0 else '?'
for kw in ['fullScreen','padding-top','Alt+Shift+E','document-info-bar']:
    for m in re.finditer(re.escape(kw),s):
        print(kw,mod(m.start()),'@',m.start(),'|',s[max(0,m.start()-150):m.start()+150])
PY

# CSS：规则切分后按选择器关键字过滤（样式也是单行）
python3 - <<'PY'
C=open('styles-f9164fb5-ced37e37.css',encoding='utf-8',errors='replace').read()
rules=[r+'}' for r in C.split('}') if r.strip()]
for kw in ['content-area','document-info-bar','math-type{','--ui-workspace']:
    print('##',kw)
    for r in rules:
        if kw in r.split('{')[0]: print(r[:300])
PY
```

> 免责：module id / 字节偏移都对应 `f9164fb5-ced37e37` 这一个构建；上游换版本后需重跑上面的脚本重新定位。
