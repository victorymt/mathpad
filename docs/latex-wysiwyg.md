# mathcha-local 里「LaTeX 所见即所得」是怎么实现的

> 分析对象：本仓库离线运行的 Mathcha 编辑器，版本 `f9164fb5-ced37e37`（`assets/cdn/bundle-f9164fb5-ced37e37.js`，6.04 MB，webpack 5，1416 个模块）。
> 结论取证方式：把 bundle 按 webpack 模块拆成可读 JS（`src/mathcha/modules/`，脚本 `tools/split_bundle.mjs`）+ 浏览器里实测输入/导出/看 DOM。
> 详细笔记在 `docs/re/`：模型与排版 `model-layout.md`、输入管线 `input-editing.md`、LaTeX 互转 `latex-io.md`、渲染与字体 `render-fonts.md`。

---

## 0. 一句话结论

**它不是"编辑 LaTeX 源码 + 实时渲染"，而是"编辑一棵结构化公式树 + 让浏览器用 HTML/CSS 排版出公式"。**

- 屏幕上看到的每个字符、每条分数线、每个括号，都对应模型树里的一个节点；
- 内部**不保存 LaTeX 字符串**，只保存"命令名 + 槽位 + 属性"；LaTeX 只在 **导入 / 导出** 两个边界上出现；
- 排版不是自己逐 glyph 算坐标，而是**把结构映射成带 CSS 类的自定义 HTML 元素，交给浏览器排版**，再用 `getBoundingClientRect()` 回读尺寸做修补与缓存；
- 真正自己画矢量的只有"构造件"：伸缩括号、根号、横向花括号、重音等。

所以"所见即所得"的本质是：**文档的真相（source of truth）是结构树，不是 TeX 源文本**。

```text
键盘/IME → 字符或命令
              │
              ├─ 普通字符 ─────────────► 插入文本块 {id,text:"a"}
              └─ "\" → 建议框 → Enter ─► 插入模板 composite {text:"\frac", elements:{value,sub1}}
                                                        │
模型树 {id, lines:[{id, blocks:[...]}]}  ◄──────────────┘   （保存到 data/store.json）
              │
              ▼  React 渲染
<line><blocks><block>…</block><compositeblock class="fraction-symbol">…</compositeblock>
              │
              ▼  浏览器 CSS 排版（@font-face 数学字体）+ post-render JS 修补 + 测量回填
              ▼
           屏幕像素
```

---

## 1. 本仓库自己实现了什么（以及没实现什么）

`mathcha-local` 是一个**离线壳**，它本身不含编辑器逻辑：

| 文件 | 作用 |
|---|---|
| `src/server.py` | 托管 `assets/cdn/` 里的上游资源；把资源里的 `https://cdn.mathcha.io/...` 重写成 `/cdn/...`；CSP 禁止联网；少量 DOM/JS 补丁（隐藏分享按钮、默认打开 CAS 面板） |
| `src/api.py` | 用本地 JSON 实现客户端的 `/api/*`：文档树、`init2`、`active2`、文档内容保存（`data/store.json`） |
| `tools/fetch_assets.py` | 唯一联网脚本：首次安装时把 bundle/字体/懒加载 chunk 下到 `assets/` |

- WYSIWYG 的全部实现都在 `assets/cdn/bundle-f9164fb5-ced37e37.js` 里（以及 `assets/cdn/styles-*.css`、`resources/fonts-*.css`、`fonts/*.otf`）。
- `obsidian-mathpad/` 是另一个独立插件仓库（Obsidian 的 CAS 插件，渲染直接调 Obsidian 的 `renderMath`），**与本编辑器的所见即所得无关**。

---

## 2. 数据模型：公式是一棵「槽位树」

实测敲 `$` 进公式、`\frac` 插入模板、分子填 `a`、`Tab` 到分母填 `b` 后，客户端自动保存到 `data/store.json` 的原文（节选）：

```json
{
  "id": "r0.04460408237089222",
  "lines": [
    { "id": "n0.421...", "blocks": [] },
    { "id": "n0.806...", "blocks": [
      { "id": "n0.935...", "text": "f" },
      { "id": "n0.189...", "text": "\\math-container", "type": "composite",
        "elements": { "mathValue": { "id": "n0.656...", "lines": [{
          "id": "n0.298...", "blocks": [
            { "id": "n0.045...", "text": "f" },
            { "id": "n0.452...", "text": "\\frac", "type": "composite",
              "elements": {
                "value": { "id": "n0.015...", "lines": [{ "id": "n0.288...", "blocks": [{ "id": "n0.723...", "text": "a" }] }] },
                "sub1":  { "id": "n0.866...", "lines": [{ "id": "n0.619...", "blocks": [{ "id": "n0.634...", "text": "b" }] }] }
              } }
          ]}]},
        "displayMode": false,
        "style": { "mathModeType": "\\displaystyle" } } }
    ]}
  ],
  "pageSettings": { "pageSize": { "width": 700 } },
  "___version": 2, "version": 2, "av": 52,
  "delayRenderCache": { "av": 52, "map": {
    "n0.656...": { "n0.298...": { "w": 20.6016, "h": 39.1953, "bl": 0.6352 } } } }
}
```

### 2.1 三层结构

```text
文档 doc {id, lines:[...], pageSettings, ___version, version, av, delayRenderCache}
 └─ 行 line {id, blocks:[...], style?}
     └─ block 三种形态：
        ├─ 纯文本 {id, text:"a"}                       ← 没有 type 字段
        ├─ single {type:"single", id, text:"("}        ← 不可拆的单个符号/定界符
        └─ composite {type:"composite", id, text:"\\frac",
                      elements:{ 槽名: {id, lines:[...]} }}   ← 槽值本身又是一个 editor，可无限嵌套
```

- 模型工厂：模块 `70224`（`createEmptyEditor / createEmptyLine / createComposite / createSingleBlock`）。
- id：子节点 `"n" + Math.random()`（模块 `30803`）；根 id `r0.…` 的生成代码不在 bundle 里。
- `composite.text` 就是 LaTeX 命令名；`elements` 的键是**槽名**。槽的值是 `{id, lines}`（一个子 editor），不是 block 数组。
- composite 除槽之外还能带任意属性：`displayMode`、`style.mathModeType`、`isLimitKind`、`bracketName/size/isClose`、`tableOfContent` 等。

### 2.2 槽名从哪来（关键：不是 parser 硬编码）

**约 250 个"符号组件"**各自实现 `getSymbolInfo() / getModelMeta() / getModel() / toModel() / toLatex() / toMathml() / getViewComponent()`，注册表在模块 `98095`（`initCustomSymbols()` / `initExtendedSymbols()`，实例方法 `getCustomSymbolComponent(name)`）。
槽位声明来自每个组件的 `getModelMeta().elements`，插入/删除/光标都读它。

| LaTeX / 符号 | 模块 | 槽名（顺序） | 备注 |
|---|---|---|---|
| `\frac`（`\dfrac/\tfrac/\cfrac`） | 43369 | `value`, `sub1` | 分子/分母；DOM 里才叫 enumerator/denominator |
| `\sqrt` | 68468 | `value`, `sub1` | `sub1` = 根指数（可隐藏，`onRemove:"only"`） |
| `\power-index` / `\power` / `\index` | 49632 / 53109 / 8444 | `powerValue`, `indexValue` / `powerValue` / `indexValue` | 上下标 |
| `\int`、`\sum` 等大运算符 | 51164 | `from`, `to` | `isLimitKind` 决定上下限是否贴上/贴下 |
| `\overunderset` / `\stackrel` / `\overbrace` | 91360 / 6604 / 48939 | `value,sub1,sub2` / `value,sub1` / `value,sub1` | |
| `\math-container` / `\inline-math` | 67928 | `mathValue` | `displayMode` 区分块级/行内 |
| `\text` / `\raw-latex` | 99588 / 71064 | `textValue` / `rawLatexValue` | |
| `\super-script` / `\sub-script`（文本模式上下标） | 66015 / 9340 | `tsuperValue` / `tsubValue` | |
| `\boxed` / `\boxed-container` / 图片 | 78518 / 64412 / 56599 | `value` / `value` / `caption` | |
| `\bigl`/`\bigr`、`\Big*` | 27332 | 无槽（属性 `bracketName/size/isClose`） | 尺寸 1.5/2.2/2.9/3.6 em |
| 矩阵 / `array` / `cases` / `aligned` | 47316 / 6720 | 单元格槽键 `"行_列"`（如 `"0_1"`），模块 90437 解析 | 渲染成 HTML `<table>` |
| `longdivision` | 64027 | `quotient,divisor,divident,r_0,r_1` | 特殊排版 |
| `exercise` / `theorem` / `z-schema` | 1318 / 33564 / 57728 | `question,hint,solution` / `theorem` / `name,symDec,conPre` | 结构化内容 |

### 2.3 模型里"没有"的东西

- **没有 LaTeX 字符串**（只有命令名 + 槽 + 属性），`\frac` 在模型里就是 `{text:"\\frac", elements:{value, sub1}}`。
- **没有 `\left…\right` 配对结构**：解析 `\left(` 时只得到 `{type:"single", text:"("}`（左右两个独立节点），伸缩是**渲染期**算的；`\bigl/\bigr` 才是 composite。
- **没有度量**：`delayRenderCache` 的 `{w,h,bl}` 是渲染后**回读**的缓存（见 §4.4），不是排版输入。
- 渲染器会往模型节点上写临时标记 `___normal`（"这个括号不需要伸缩"），导出时会读它 —— 属于偷懒实现（见 §5.3）。

---

## 3. 输入：从按键到"模板"（WYSIWYG 的关键一步）

### 3.1 输入不是 contenteditable

编辑器根节点是自定义元素 `<math-type>`，里面藏一个视觉上 0×0 的 `<textarea>` 承接键盘与输入法：

```html
<math-type class="math-type-no-print paragraph-mark enabled primary" aria-label="Editor Content">
  <div class="mt-sa"></div>
  <hidden-input-wrapper><input></hidden-input-wrapper>                        <!-- 移动端 -->
  <hidden-input-wrapper aria-hidden="true"><textarea spellcheck="false"></textarea></hidden-input-wrapper>
  <hidden-input-wrapper aria-hidden="true"><input class="focus-element" readonly></hidden-input-wrapper>
  <math-edit-container> … 真正的文档 DOM … </math-edit-container>
  <selection-wrapper></selection-wrapper>
  <composition-indicator></composition-indicator>
  <region-highlight-container></region-highlight-container>
</math-type>
```

`hidden-input-wrapper { transform: scale(0); }`；textarea 会被移动到光标处，让中文输入法的候选框贴着光标。

### 3.2 两条输入通道

| 通道 | 触发 | 用途 |
|---|---|---|
| `keydown` | `keyboardInputHandler = new Wi(this)`（模块 11154） | 只映射**动作**：方向键/退格/删除/回车/Tab/撤销/自定义快捷键。`getCommandFrom()` 对无修饰的字母数字直接返回 `{action:null}` |
| `input` | 隐藏 textarea 的 `onInput` | 真正的**字符**：`handleTextInput` → `insertInput` → `insertModelAt` |

**文本模式 vs 数学模式不是开关**，而是"光标此刻在哪个容器里"：`ContainerModel.isTextModeSelected()` → `Eu.scan / determineAtCompositeLeaf`（11154）沿树向上找，遇到 `\text-mode-group`、`\theorem`、表格 caption、`\raw-latex` 等白名单才是文本模式，否则是数学模式。两处走同一个插入函数，只是字体样式与可用命令不同。

### 3.3 输入 `\frac` 的完整链路（这就是"LaTeX 命令变成模板"）

```text
keydown keyCode 220 ("\")            ← 或 onInput 收到 value=="\\"
  └─ Wi.matchAutoCompleteKey / onEditorInput → target.requestAutoComplete()
        └─ renderAutoComplete → 建议框（ReactVirtualized__List），
           并把焦点抢到框内搜索 input（模块 87010 getInputRef 下一 tick focus）
              └─ 之后敲的 f r a c 只用于过滤，不进文档
                  过滤 = fuse.js 模糊匹配（模块 13213）：
                   query 去掉前导 "\"，keys 权重 names .4 / filterTag .4 / description .2
                        └─ Enter（模块 34354 handleKeyDown）→ handleItemCommit
                              └─ insertBySymbolInfo(25244) → 11154.handleBySymbolInfo
                                    └─ 98095.getModelByInfo(info)
                                          └─ 48440.getModel()：createComposite("\\frac")
                                              + 对 meta.elements 每个槽 createEmptyEditor()
                                                → {text:"\\frac", elements:{value:editor, sub1:editor}}
                                    └─ 41587.insertInput → 13620.insertModelAt（模型编辑原语）
                                          └─ 49812.buildSelectedForInsertedNewModel：
                                              光标落到 keyInsertOnSelection="value"（分子）
```

要点：
- **`\` 本身不入模型**；建议框打开后焦点离开 textarea，所以 `frac` 这几个字母不会出现在文档里。
- `\frac` 的元数据在模块 `43369`：`names:["\\cfrac","\\dfrac","\\frac","\\tfrac"]`、`description:"fraction"`、`filterTag:"fraction"`、槽 `{value:{onRemove:"all"}, sub1:{onRemove:"all"}}`、`keyInsertOnSelection:"value"`。
- `^` / `_` 不走建议框：`handleText` 直接换 `\power` / `\index`；`^`+`_` 同时出现时合成 `\power-index`。
- 矩阵 / `array` / `cases` 等走"命令块"模板分支，插入同样的 composite 树。
- 符号建议框的候选来自：约 250 个组件的 `getSymbolInfo()` 并集 + 基础符号表（模块 `71669`，一段 base64 压缩 JSON）。

### 3.4 在槽之间移动、删除、撤销

- **Tab** = 在槽位之间跳（模块 24128 `"\\frac":["value","sub1"]` 这类槽位顺序表），分子 ↔ 分母最顺手的键。
- **方向键** = 几何命中测试：`Pe.run` + `extractTuple / extractVLine / findByDirection`（按排版后的盒子算"line-up / next-char / inside-block"等意图），再换算成模型里的选区。
- **Backspace** 在槽首按 `getModelMeta().elements[key].onRemove` 决定行为：`"all"` = 删整个 composite（会弹确认），`"only"` = 只删这个槽。
- **撤销** = 快照栈（模块 1172，1000 ms 内连续输入合并为一步，栈上限 200 裁剪到 100）；另有独立的左右游走历史。
- **IME（中文）**：`compositionstart` 建 composition，组合过程中拼音串会**实时插进模型再替换**（`replaceTextForComposition`），`compositionend` 用最终 `e.data` 落字；`<composition-indicator>` 显示组合串。中文在数学容器里就是直立的文本块。

---

## 4. 渲染：浏览器排版 + 回读测量 + 构造件 SVG

### 4.1 屏幕 DOM 骨架（实测）

```html
<editarea class="root-editor" style="font-family:Arial,Helvetica,sans-serif;font-size:15px">
  <area-baseline aria-hidden="true">a</area-baseline>   <!-- 基线锚点 -->
  <area-container>
    <line class="root text-mode" style="line-height:1.4">
      <prefix></prefix>
      <blocks><baselineblock class="inline"></baselineblock><block>f</block>…</blocks>
    </line>
  </area-container>
</editarea>
```

数学区是**递归的 editor**：`\math-container` 渲染成

```html
<compositeblock dir="ltr" class="math-container-symbol role-mathmode-area selected inline" style="font-size:17px">
  <editarea class="math-mode-font lazyable no-area-container" style="font-family: Asana-Math, Asana">
    <line class="selected" style="line-height:1.2">
      <baselineblock></baselineblock>
      <block class="Normal">f</block>
      <compositeblock class="fraction-symbol smaller">…</compositeblock>
    </line>
  </editarea>
</compositeblock>
```

字符就是 `<block>` 里的**普通文本节点**（`getComputedStyle` → `font-family:"Asana-Math, Asana"`，17px），由浏览器栅格化；**没有 path、没有 `<use>`**。

### 4.2 每种结构一个 CSS 类，几何是"手调 em 常数"

主样式表 `assets/cdn/styles-*.css`（184 KB）里是成体系的符号类：

```css
.fraction-symbol{margin-left:.1em;margin-right:.1em}
math-type compositeblock.fraction-symbol.frac-inline{font-size:.75em}
math-type compositeblock.fraction-symbol>.enumerator{float:left;clear:both;width:100%}
math-type compositeblock.fraction-symbol>.denominator{float:left;width:100%;margin-top:-5px}
math-type compositeblock.fraction-symbol>.frac-line>inline{vertical-align:.25em;border-bottom:1px solid;width:100%;display:inline-block}

.sqrt-symbol{white-space:nowrap;align-items:stretch;position:relative}
.big-delimiter-symbol{align-items:center;margin:.1em 0;display:inline-flex;position:relative}
math-type .big-delimiter-symbol>big-delimiter>svg{width:100%;height:100%}
math-type .matrix-symbol>matrix>table>tbody>tr>td.selected{…}   /* 矩阵是真 <table> */
```

组件除了套 CSS 类，还算**行内 em 边距**，并且量化到整像素（模块 `516` `getEmRound(e,t)=Math.round(e*t)/t`）。实测分式：

```html
<compositeblock dir="ltr" class="fraction-symbol smaller selected">
  <editarea-line class="frac-edit-area enumerator" style="line-height:1.2; margin-top:-0.235294em; margin-bottom:-0.470588em;">
    <baselineblock></baselineblock><block class="Normal">a</block></editarea-line>
  <div class="frac-line"><inline style="border-bottom:1px solid;"></inline></div>
  <editarea-line class="frac-edit-area denominator" style="line-height:1.2; margin-top:-0.411765em; margin-bottom:-0.176471em;">
    <baselineblock></baselineblock><block class="Normal">b</block></editarea-line>
</compositeblock>
```

`-0.470588em` 就是 `-8px / 17px`（字号 17px 下 `-0.5em` 取整到 -=8px）。

上下标（实测）：

```html
<compositeblock class="power-index-symbol-container has-power">
  <editarea-block class="power-value" style="line-height:1.2; margin-top:0em; margin-bottom:-1.05378em;">2</editarea-block>
  <middle-base><inline></inline></middle-base>
  <editarea-block class="index-value" style="line-height:1.2; margin-top:-0.60899em; margin-bottom:0em;">i</editarea-block>
</compositeblock>
```

- 缩放：上下标 `0.7×`（组件里 `fontSizeRatio: .7 * this.props.fontSizeRatio`），行内分式整体 `0.75em`。
- 线宽：分数线的 `border-bottom` 宽度 = `max(1, round(fontPx/17))`。
- 间距：只有三条 CSS —— `block.Binary{… .2em}`、`block.Relation{… .3em}`、`block.Punctuation{… .2em}`；字符类别由模块 `30929` 按 unicode + 前后块推断（`-` `/` `:` 有消歧义）。**没有 TeX 的 3/4/5 mu 表**。

### 4.3 构造件才用 SVG

| 结构 | 实现 |
|---|---|
| 伸缩括号 / 花括号 / 方括号 / 斜杠 | 模块 `57858` 内置**贝塞尔控制点数组** → `<path d>`；尺寸由状态机 `71074.constructManageState` 算 `height:…em`，字号放大系数在 `334`（paren `0.8+min(.2,(h-f)/250)`，brace `0.6+min(.5,(h-f)/140)`） |
| 根号 | `<sqrt-symbol-line><svg><polygon points="0.35,10.29 4.79,7.92 9.66,18.24 16.36,0.00 25.50,0.00 …"/></svg></sqrt-symbol-line>`（legacy polygon，模块 `68468`+`7258`） |
| 横花括号 / 弧 / 箭头 / 重音 | 模块 `7258`，`transform:"translate(x-b·s, y+b3·s) scale(s,-s)"`（Y 轴翻转） |
| 竖线 / floor / ceil / 上下箭头 | CSS 重复字模片 `<vcomposed-symbol>`（`-mode.otf` 里专门的字形部件） |
| 矩阵 / cases 的左右括号 | `<matrix>` 里一条 `<svg style="width:0.5em;height:43.7969px"><path d="M 6.27 1.70 c …">` —— **高度直接等于 Table 实测高度**；内容在 `<table><tbody><tr class="math-row"><td><editarea-line class="editor-cell">` |
| 根号/分式的"结构件" | 分数线是 `border-bottom`，不用 SVG |

SVG 尺寸不是猜的：组件 `12481 <SvgDrawing>` 先渲染空 svg 撑满容器，`componentDidMount` 后量盒子，再按 `(width,height,fontSize)` 生成 path。

### 4.4 排版后修补 + 测量回填

`postLineProcess`（模块 `48397`）在每次渲染后做三件事，都靠 `getBoundingClientRect()`：

1. **定界符配对自动伸缩**：扫一行里的 `opensymbolblock/closesymbolblock`，量区间内最大顶/底，给开闭括号换字号或换拼合件（`71074` 状态 → `334` 系数 → `57858`/`7258`）。
2. **上下标动态定位**：按基块的 rect 现算负 margin（`class z`；固定兜底常量在 `65507`，如 `{marginBottomEm:-.885714, marginTopEm:-.60899}`）。
3. **测量回填**：`storeCacheSize` 量 `line` 和 `<baselineblock>`，写 `delayRenderCache = {w, h, bl}`（`w=round4(rect.width)`、`h=round4(rect.height)`、`bl=round4((baseline.bottom-rect.top)/rect.height)`）。`<line class="… lazyable">` 就是靠这份缓存先占位、再渲染。

**所以：屏幕上的排版是浏览器做的，Mathcha 只做"结构 → CSS"和"事后修补"。**

### 4.5 光标 / 选区 / 命中测试

- 光标：`<span class="text-cursor" style="height:17px; transform: translate(42.0781px, 59.9757px); border-color: rgb(0,128,0);"></span>` —— 2 px 宽、`border-left` 显形、绝对定位。
- 选区：`<selection-wrapper><selection transform="translate(…) scale(…)">` 方块（不是 SVG 高亮）。
- 点选定位：`event.target` 找到元素 → 行内把字符摊平后用 DOM Range 矩形**二分**定位 charIndex（模块 `13764 search` / `10632 rangeRectsFrom2Idx`）。

### 4.6 字体体系

- `resources/fonts-<hash>.css` 里有 **61 条 `@font-face`**，全部指向本地 `/fonts/**.otf`；编辑器的 `@font-face` 路径上游写的是 `https://cdn.mathcha.io/...`，本地由 `src/server.py` 的 `_rewrite_cdn()` 改写成 `/cdn/...`，离线才生效。
- 家族：`Asana` / `Asana-Math`（数学模式主字体）、`LatinModern(-Math)`、`ThickerLm(-Math)`、Computer Modern 文本字体、`Sans*`，以及 **每种数学样式一份**的 `*-Mathbb/-Mathit/-Mathcal/-Mathscr/-Mathfrak/-Mathsf/-Mathtt/-Mathrm`。
  - `types-generated/*.otf` 是**构建期产物**：字形直接映射到 ASCII（如 `Asana-mathbb.otf` 把 `0-9A-Za-z` 映射成双线体），所以 `\mathbb{R}` 是"字符 R + `font-family:Asana-Mathbb`"。
  - `*-mode.otf` 是"构造字体"：只含 ASCII 数学字母 + `U+239B..` 的扩展件 + Mathcha 自定义部件槽（`U+23D0..U+243F`），并重调了 advance，好让 CSS 里竖排拼合无缝。
  - **不存在运行时字体子集化 / FontFace 注入**（bundle 里 `FontFace` 出现 0 次，`subset` 全是 `\subset` 宏名或 FontAwesome 子集文件名）。
- 数学字体度量有一份**预烘焙 MATH 表**（模块 `19340`：`unitsPerEm:1000, axisHeight:280, scriptGapMin:200, radicalRuleThickness:76, …` + 每个 glyph 的 `path/bounds/width` + vertical/horizontal 变体与拼装件），供 SVG 伸缩件绘制与导出使用。
- 运行时解析 OTF 的是 **Typr.js**（模块 `45896`，含 `cmap/CFF/glyf/hmtx` 与 `glyphsToPath`），只在**导出**（SVG/PNG/PDF）时用：浏览器不提供字形轮廓 API，所以必须自己解析。
- 打印/PDF：复用同一份 DOM + `window.print()`（内联 61 条 @font-face 的常量 CSS）。
- `dynamic-resources/data1` **不是**度量表，是手写符号识别的 convnet 权重（lz-string 压缩的 `{layers:[…]}`）。

---

## 5. LaTeX 互转：只是一层边界编解码

### 5.1 导入（LaTeX → 模型）

- 入口：菜单 **Menu → Import from Latex**（`data-name="import"`）→ 对话框（组件 `11154` class `di`，textarea 600 ms 防抖预览）。
- 解析：`51737` class `f` 的 `parse(src, startRule)` → `28623`（peggy 风格的生成式 PEG 语法）。两个 start rule：
  - `Expression`：文档级，以文本为主，`$...$` 进入数学容器；
  - `MathExpression`：数学模式内容。
- 语法动作**直接构造模型对象**并调 `getCustomSymbolComponent(name).toModel(...)` —— 和导出共用同一张符号组件表。
- 常见处理：
  - `\frac{a}{b}` → `toModel(name, null, 分子lines, 分母lines)` → `{value, sub1}`；
  - `\sqrt[3]{x}` → 第 2 参是可选根指数（槽 `sub1`）、第 3 参是被开方数（槽 `value`）；
  - `x^{2}_{i}` → 先 `\power-index`，再合并；`\over`/`\choose` 后处理成 `\frac`/`\binom`；
  - `{a+b}` 分组、`\mathbb{R}`/`\mathrm{d}` **被摊平**成 style，不留 composite；
  - `\sum_{i=1}^{n}` → 大运算符从 `elements.powerValue/indexValue` 取 `from`/`to`；
  - 符号命令（`\alpha` 等）查表变 unicode 文本块；转义 `\%`→`%`、`\{y\}`→`{y}`、`\,`→空格；
  - 未知命令：数学模式下 → `{type:"unknown-command"}`（导出时原样 + 尾随空格）；文档级 → **整行静默降级为纯文本**。
- **实测支持/不支持**（浏览器实测，临时文档）：

  | 输入 | 结果 |
  |---|---|
  | `$x^2$` | ✅ 行内 `\math-container(displayMode:false)` |
  | `$$x^2$$`、`\begin{equation}x^2\end{equation}` | ✅ 块级 `\math-container(displayMode:true)` |
  | `\[ x^2 \]`、`\( x^2 \)` | ❌ 语法层不支持 → **静默变成纯文本一行**（不报错） |
  | `\textcolor[rgb]{1,0,0}{abc}` | ❌ 不支持 → 纯文本 |
  | `\foo{x} + \% + \{y\}`（文档级） | ⚠️ 整行变纯文本（无 composite） |

- 粘贴（Ctrl+V）**不会**自动解析 LaTeX（粘贴处理器只认 mathcha/json、HTML 表格、图片文件）；`.tex` 也没有打开入口 —— 必须走 Import 对话框。

### 5.2 导出（模型 → LaTeX）

- 文档级导出器：模块 **`69153` class `x`**（另有单例）。链路：
  `toLatex(lines, opts)` → `toLatexInner` → 每行 `toLatexLineExtended` → 每个 block：
  文本块走 `processTextForMathMode/TextMode`；`single`/`composite` 走 `processNonTextForAll` →
  `98095.getCustomSymbolComponent(block.text).toLatex(...)` —— **每个符号组件自己负责自己的 LaTeX**，导出器只查表 dispatch。
- 整篇只输出 body，**不生成 `\documentclass` / `\usepackage`**；对话框里的"Include Script"只是一份给用户看的建议宏包列表。
- 行间组织：文本行 `"\n\n"`，数学行 `"\\\n"`；列表 `itemize/enumerate`+`\item`；章节 `\section/\subsection/\subsubsection`；对齐 `flushleft/center/flushright`；行 tag → `\tag{...}`/`\notag`。
- `\math-container`：`displayMode:true` → `\begin{equation*}…\end{equation*}`（多行 `gather*`，带 tag 时 `equation/gather`）；`displayMode:false` → `$…$`（`usingStandardMathWrapper` 时 `\(…\)`，`style.mathModeType` 为 `\displaystyle` 时加前缀）。
- 矩阵族统一拼 `\begin{pmatrix}` + ` & `（列） + `\\\n`（行）；`array` 生成 `{l|c}` 列格式；`cases/aligned/gathered` 同族。
- **实测输出**（真实编辑器，Import 一段覆盖性公式后 Export Selection to Latex）：

  ```latex
  \begin{equation*}
  \frac{a}{b} +\sqrt[3]{x} +x_{i}^{2} +\left(\frac{1}{2}\right) +\begin{pmatrix}
  1 & 2\\
  3 & 4
  \end{pmatrix} +\begin{cases}
  a & x >0\\
  b & x< 0
  \end{cases}
  \end{equation*}
  ```

  可核对：`\frac{a}{b}`、`\sqrt[3]{x}`、**上下标顺序固定 `_` 再 `^`**、`\left(…\right)` 保留、矩阵 ` & `/`\\`、cases 同；`+` 前有一个空格、后没有（导出会规范化空格）；行内 display 时前面会带 `\displaystyle`。

### 5.3 两个"偷懒但要记住"的实现细节

1. **`\left` / `\right` 不是模型结构**：`\left(` 解析成 `single{text:"("}`，`\bigl/\bigr` 才是 composite。符号组件 `68517/90617` 的 `toLatex()` 固定写死 `"\\left("` / `"\\right)"`；导出器 `69153.processNonTextForAll` 里再判断：

   ```js
   if (n.isBracket && e.block.___normal) {
     if ("\\left." == e.block.text || "\\right." == e.block.text) return "";
     var i = n.toLatex(e.block, t, this, r);
     if (o().startsWith(i, "\\left"))  return i.substr(5);   // → "("
     if (o().startsWith(i, "\\right")) return i.substr(6);   // → ")"
   }
   return n.toLatex(e.block, t, this, r);
   ```

   而 `___normal` 是**渲染组件在布局时写到模型节点上的临时布尔**（"这个括号没被撑开"）。所以**导出结果取决于这个公式当前是否被渲染过、以及括号是否被判定为普通大小** —— 同一个文档在不同状态下导出可能不同（`(` 还是 `\left(`）。这是逆向时最反直觉的一处。
2. **导出的空格由 `opts.ignoreSpace` 控制**（对话框里的 "Do not convert space character"）；模式 radio 是 "Convert to Math Mode Latex + Latex (Diagram - Tikz, Section, List Item, Style)" 与 "+ Plain Text"（后者走纯文本转换器）。

### 5.4 其它导出

- **SVG / PNG / PDF**：不走 LaTeX。直接序列化渲染后的 SVG 树：文本 run 用 Range 逐字取 rect，转 `<text>`（普通字体）或 `<path>`（自定义字体，Typr `glyphsToPath`，advance = hmtx + GPOS kern）；PDF 是 `svg2pdf` / `window.print()`。
- **TikZ**：复用同一套 LaTeX 转换器（`94513` 对每个 text node 调 `toLatex`，并把 `newLineUsingBackSlash` 置真）。
- **MathML**：第三条并行输出（71 个组件实现 `toMathml`，`35847` 生成 AST、`52175` 转 React、`renderToStaticMarkup` 出字符串），只在导出对话框/复制里用，**没有 MathML 导入**，也没有用于屏幕上渲染或无障碍层。

---

## 6. 为什么这么设计：取舍

| | 好处 | 代价 |
|---|---|---|
| 结构化模型（而非 TeX 文本） | 真正的编辑语义：槽位、Tab 跳槽、几何光标、跨槽删除、撤销快照；同一模型可导出 LaTeX / MathML / TikZ / SVG / PDF / PDF-print | LaTeX 只是"投影"：往返不保证等价（`\[..\]` 不支持、`\textcolor` 不支持、空格/括号会被规范化）；无法直接用宏/包；`___normal` 这种渲染期标记让导出依赖渲染状态 |
| 浏览器排版 + CSS 符号类 | 不需要自己写行/字形/断行引擎；字体直接吃 OTF；排版质量与系统字体渲染一致；实现量小 | 想改字号/字体就要重调所有 em 常数；跨浏览器/字体回退要小心；"几何"分散在 CSS + JS 里 |
| 事后测量回填 `delayRenderCache` | 长文档可懒渲染、可测量占位 | 模型与渲染状态耦合；文档里混入测量缓存（`av` 版本号要跟着涨） |
| 构造件用 SVG / `<table>` | 伸缩括号、根号、矩阵这类"形状"用矢量精确控制 | 每类结构都要手写几何（贝塞尔点、字号放大系数、变体拼装算法），代码体积大 |

一句话：**它把"公式排版"外包给了浏览器，把"公式语义"留给了自己的树模型，LaTeX 只是进出口。** 这也是为什么它不需要 KaTeX/MathJax（bundle 里 0 处），也为什么它的 LaTeX 导出"看起来对、细节不完美"。

---

## 7. 如果想在别的项目复刻：最小可行清单

1. **模型**：`lines → blocks`，block 三型（text / single / composite+命名槽）。先实现 `{type:"composite", text:"\\frac", elements:{value, sub1}}` 这一种，就够跑通分式。
2. **模板注册表**：每个符号一条 `{names, description, filterTag, meta:{text, elements, keyInsertOnSelection}, getModel(), getViewComponent()}`。
3. **输入**：隐藏 `<textarea>`（`transform:scale(0)`）承接键盘/IME；`keydown` 只处理动作，`input` 处理字符；`\` 打开建议框并把焦点抢到搜索框（否则字母会漏进文档）；Enter → 按注册表插入模板 → 光标进第一个槽。
4. **渲染**：每个 slot 一个 `<div>`，按符号类型加 CSS class；分式=float/clear+负 margin，上下标=负 margin+0.7 缩放，矩阵=`<table>`，伸缩括号/根号=SVG。
5. **测量**：渲染后 `getBoundingClientRect` 回填 `{w,h,baseline}` 缓存，供懒渲染/导出占位。
6. **I/O**：导出器要能遍历树 → 查表 `toLatex`；导入器用现成 PEG（peggy）写 `$`/`$$`/环境/结构命令，动作里调同一个 `toModel`。
7. **字体**：数学字母用现成 OTF（Asana Math / Latin Modern Math），按数学样式准备独立字体族；需要伸缩件时再补一份 MATH 度量表。

---

## 8. 代码地图（模块 id → 作用）

> `src/mathcha/modules/<id>.js` 是拆包后可读源码；`tools/split_bundle.mjs` 可重新生成。

| module | 作用 |
|---|---|
| 11154 | 编辑器外壳：`<math-type>` 渲染、隐藏 textarea、键盘/光标/选区/建议框/历史/导入导出对话框 |
| 98095 | 符号注册表（`initCustomSymbols/initExtendedSymbols`、`getCustomSymbolComponent`、`getModelByInfo`） |
| 48440 / 70224 / 30803 | 符号基类 / 模型工厂 / id 生成 |
| 28623 / 51737 | PEG 语法（peggy 生成）/ 导入入口 `parse(src,startRule)` |
| 69153 | 文档级 LaTeX 导出器（`toLatex → toLatexInner → processNonTextForAll`） |
| 6720 / 47316 / 90437 | 矩阵族 LaTeX 拼装 / array·cases·aligned 定义 / 表格槽键解析 |
| 67928 | `\math-container` / `\inline-math` 定义与视图 |
| 43369 / 68468 / 49632 / 65507 | 分式 / 根号 / 上下标 视图与常数 |
| 48397 | 行渲染 + `postLineProcess`（定界符伸缩/上下标定位/`storeCacheSize` 测量） |
| 71074 / 334 / 57858 / 7258 | 定界符伸缩状态 / 字号放大系数 / SVG 贝塞尔拼合 / SVG 绘制变换 |
| 59769 / 19340 | MATH 变体与拼装选择 / 预烘焙数学字体度量表 |
| 45896 | Typr.js（OTF/CFF 解析）+ SVG 导出（`exportSvg/generateToStr`） |
| 30929 | 字符原子类别 → CSS 间距类 |
| 41587 / 13620 | 模型编辑原语（`insertInput/insertModelAt/removeCurrent`） |
| 71669 | 基础符号表（base64 JSON） |
| 94513 / 68517 / 90617 / 52431 / 99588 / 71064 / 66515… | TikZ 导出 / 括号组件 / 括号基类 / `\text` / `\raw-latex` / 其它符号组件 |

---

## 9. 这份报告是怎么来的（可复现）

1. `assets/cdn/bundle-f9164fb5-ced37e37.js` 是单行 6.04 MB 的 webpack 5 产物。用 `@babel/parser` 解析后按"数字键 + `(e,t,r)` 工厂函数"抽出模块表，拆成 1416 个文件（`src/mathcha/modules/<id>.js`，局部变量被压缩但**属性名/方法名未混淆**，可直接 grep）。
2. 把关键模块与 `assets/cdn/styles-*.css`、`resources/fonts-*.css`、`fonts/*.otf` 对照阅读，得到模型/渲染/互转的主体结论。
3. 在浏览器（`http://127.0.0.1:7801/editor`）实测：敲 `$`→`\frac`→a→Tab→b 看 DOM/模型；用 Menu → Import from Latex 导入覆盖性公式，再 Menu → Export Selection to Latex 取真实导出文本；逐个测 `\[..\]`/`\(..\)`/`$..$`/`equation`/未知命令。
4. 详细证据（带 module id、符号名、行号、≤15 行片段）在 `docs/re/`：
   - `docs/re/model-layout.md`（631 行）：模型、槽位表、排版与修补
   - `docs/re/input-editing.md`（300 行）：键盘/IME/建议框/光标/撤销
   - `docs/re/latex-io.md`（410 行）：导入导出、映射表、离线 PEG harness 验证
   - `docs/re/render-fonts.md`（358 行）：DOM/字体/度量/导出
   - `tools/split_bundle.mjs`：拆包脚本
