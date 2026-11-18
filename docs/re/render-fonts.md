# 渲染与字体（task-4 / render-fonts）

> 证据来源：`src/mathcha/modules/<id>.js`（webpack5 模块，属性名未混淆）、`assets/cdn/bundle-f9164fb5-ced37e37.js`（未拆分的少数模块用 bundle 字节偏移标注）、
> `assets/cdn/styles-f9164fb5-ced37e37.css`、`assets/cdn/resources/fonts-*.css`、`assets/cdn/fonts/**`、`assets/cdn/dynamic-resources/data1`。
> 动态取证由 Lead 提供（tab 22，`http://127.0.0.1:7801/editor`，实测敲 `$` → `\frac` → a / Tab / b）。
> 自制脚本：`assets/re/scratch/render-fonts_otf.py`（极简 sfnt/cmap/hmtx 解析）、`assets/re/scratch/render-fonts_data1.js`（lz-string 解 data1）。
> 标记：【已核实】有代码或动态产物直接支撑；【推测】为合理推断。

---

## 结论速览

1. **屏幕渲染 = HTML 自定义元素 + CSS 文本流，不是 SVG Canvas，也不是每个 glyph 一条 path。**【已核实】
   公式树落成 `<math-type><math-edit-container><editarea><line><blocks><block>a</block>…`；一个字符就是一个 `<block>` 里的**普通文本节点**，`getComputedStyle` 的 `fontFamily = "Asana-Math, Asana"`（Lead 实测）。
   代码：`11154.js` `Hu.render` 造 `math-type`；`39791.js` 造 `editarea`/`area-container`；`48397.js` `renderNormalTextBlock` 造 `block`；`67882.js` 造 `editarea-line`。

2. **Mathcha 没有自己的"屏幕排版引擎"，它把浏览器当排版器，然后回读 DOM 尺寸。**【已核实】
   `48397.js` `storeCacheSize:` 用 `getBoundingClientRect` 量 `line` 和 `<baselineblock>`，算出 `{w,h,bl}`（`bl` = 基线占高比例）写进 `delayRenderCache`；Lead 的 `data/store.json` 里正是 `{"w":20.6016,"h":39.1953,"bl":0.6352}`。

3. **行内几何是手调常数 + em 单位 CSS，按"整像素"取整。**【已核实】
   `43369.js`（分式）写死 `marginBottom:-0.5em` / `marginTop:-0.41em`；`516.js` `getEmRound(e,t)=Math.round(e*t)/t` 把 em 量化到整数 px。17px 字号下 `-0.5em → -8/17 = -0.470588em`，与 Lead 抓到的 `-0.470588em` 完全一致。

4. **SVG 只用于"构造件/伸缩件"**：伸缩括号、花括号、方括号、角括号、斜杠（`57858.js`，内置贝塞尔点数组 → `<path d>`）；根号（`68468.js`+`7258.js`，legacy 是 `<polygon points>`，opentype 模式才是 glyph path）；横花括号/弧/箭头/重音（`7258.js`）；竖线/floor/ceil/上下箭头/DoubleVert 走 **CSS 重复字模片**（`vcomposed-symbol`）。【已核实】

5. **SVG 的尺寸也是量出来的**：`12481.js` `<SvgDrawing>` 组件先渲染一个空 `<svg>` 撑满容器，`componentDidMount` 后量 `getBCRect`+`fontSize`，再调 `renderSvg(width,height,fontSize)` 生成贴合该盒子的 path。【已核实】

6. **caret 是一个 2px 宽的 `<span class="text-cursor">`**，用 `border-left` 显形、`transform: translate(px,px)` 定位，高度 = 当前字号；位置来自 DOM 矩形几何（`baselineblock.bottom` 等）。【已核实】`11154.js` `Ts.drawWithSCursor` + Lead 抓到的 `style="height:17px; transform: translate(42.0781px,59.9757px)"`。

7. **选区 = 若干绝对定位的 `<selection>` 方块**，`transform: translate()+scale()`，装在 `<selection-wrapper>` 里；矩形由 Range 的 client rects 算。不是 SVG 高亮。【已核实】`11154.js` `gc.getRectElement`。

8. **命中测试 = 浏览器 event.target + 每行对 DOM Range 矩形二分查找 charIndex。** 点xx元素就交给该元素的 `reactInstance.selectCursorFromPosition`；行内把每个 block 的 unicode 串摊平，对字符区间二分（`13764.js` `search`），区间矩形由 `document.createRange().getClientRects()`（`10632.js`）给出。【已核实】

9. **字体 100% 静态资源**：`resources/fonts-<hash>.css` 里 **61 条 @font-face**，全部指向 `/fonts/**.otf`；`document.fonts` 显示 60 个 face 已 loaded，**没有任何 `blob:`/`data:` 字体**，bundle 里 `FontFace` 出现 **0 次**，`subset` 的 28 次全是 `\subset` 宏名或 FontAwesome 子集文件名 ⇒ **不存在运行时样式变换/子集化/FontFace 注入**。【已核实】

10. **`types-generated/*.otf` 是构建期产物：把 ASCII 直接映射成该样式字形的小字体。** 我解析了 cmap：`Asana-mathbb.otf` 63 个 glyph / 62 个码位，正好是 `0-9 A-Z a-z` → 双线体；`Asana-mathit.otf` 52 个字母。所以 `\mathbb{R}` 的渲染路径必然是"字符 + `font-family: Asana-Mathbb`"（该 family 的 cmap 只认 ASCII，反推文本里是 R 而不是 ℝ；实机 DOM 文本见"不确定"#2）。families 走 `@font-face` 换名，字体内部 name 仍是 "Asana Math"。【已核实（cmap+hmtx 实测）；DOM 文本【推测】】

11. **`*-mode.otf` 是"数学构造字体"**（`Asana-math-mode.otf` / `latinmodern-math-mode.otf` / `Sans-Math-mode.otf`）：只保留 ASCII 数学字母 + 数学扩展部件 `U+239B..U+23AF` + Mathcha 自定义部件槽 `U+23D0..U+243F`（161 个码位 / 162 个 glyph），且 **advance 被重调**（Asana 'A' 777→751、'a' 499→443），目的是让 CSS 里竖排重复的字模片无缝拼合。屏幕默认字体族第一顺位就是它（`Asana-Math` ← `Asana-math-mode.otf`），缺字自动回落到全量 `Asana`。【已核实】

12. **度量来源：屏幕不解析字体，导出才解析。** 导出子系统用 **Typr.js**（`45896.js`，含 `cmap/CFF/glyf/hmtx/kern` 解析与 `glyphsToPath`）在运行时解析**同一批 .otf**，把字符变成 `<path d>`。`dynamic-resources/data1` **不是 metrics**，是手写符号识别 convnet 的权重（lz-string → `{"layers":[{layer_type:"fc",…}]}`，由 `98095.js` 加载）。【已核实】

13. **打印/PDF 复用同一份 DOM**：`window.print()` + 内联 **61 条 `@font-face`** 的常量 CSS（bundle 偏移 ~5613970 的 `Kh`，与 CSS 文件逐条同款、路径改成相对 `/fonts/`），不是重新矢量排一遍。【已核实（window.print + Kh）；PDF 细节【推测】】

---

## 渲染管线

```
                         ┌──────────────────────────────────────────────────────────────┐
模型 model               │ lines[] → blocks[]（single 有 text；composite 有 elements 槽）│  task-1/2 范围
（data/store.json）     └──────────────────────────────────────────────────────────────┘
        │
        │ React 渲染（class 组件，createElement 自定义标签）
        ▼
┌─ 结构层（DOM 骨架）───────────────────────────────────────────────────────────┐
│ 11154.js  Hu.render            → <math-type> + <hidden-input-wrapper><textarea>│
│                                  + <math-edit-container>（还有光标/选区/工具栏）│
│ 39791.js  T(L).renderLinesContainer → <editarea> / <area-container> /          │
│                                        <area-baseline>                          │
│ 48397.js  行组件                → <line> <baselineblock/> <blocks> <block>…     │
│ 67882.js  单行编辑区            → <editarea-line class="frac-edit-area …">      │
│ （自定义元素无 customElements.define：只是未知标签 + CSS 选择器，React 直接渲）│
└───────────────────────────────────────────────────────────────────────────────┘
        │
        ▼
┌─ 排版（谁算位置）─────────────────────────────────────────────────────────────┐
│ 普通字符：**浏览器 CSS 排版**。每个 <block> 的内联 style 由                    │
│   47858.js getHtmlFromStyle/basicMathStyle 生成（fontFamily/fontSize/color/…）  │
│   styles-f9164fb5-ced37e37.css 负责 line/blocks/composite 的流式布局           │
│   （如 .fraction-symbol>.enumerator{float:left;width:100%}、                    │
│    .frac-line>inline{vertical-align:.25em;border-bottom:1px solid}）            │
│ 复合结构：各符号组件**手算 em 边距**（43369 分式、51164/90864 等符号组件各自写死）       │
│   并用 516.js getEmRound 量化到整 px；字号按 fontSizeRatio 传递                 │
│ <baselineblock>{width:0;height:0;display:inline-block} 提供一个零宽基线锚点     │
└───────────────────────────────────────────────────────────────────────────────┘
        │
        ▼
┌─ 绘制（屏幕上出现了什么）─────────────────────────────────────────────────────┐
│ 普通 glyph  → 文本节点 + @font-face 字体（Asana-Math / Asana-* 变体），         │
│               浏览器栅格化；没有 path、没有 <use>（动态实测 svg use = 0）        │
│ 构造件      → <svg><path d>/<polygon points>/<polyline points>（57858 / 7258 /  │
│               68468）；或 <vcomposed-symbol> CSS 竖排重复字模片（-mode 字体）    │
│ 装饰        → 分数线 <div class="frac-line"><inline style="border-bottom">      │
│ 光标/选区   → 绝对定位 <span class="text-cursor"> / <selection-wrapper><selection> │
│ 尺寸来源    → 12481.js 先量盒子，再让回调按 (width,height,fontSize) 生成 path    │
└───────────────────────────────────────────────────────────────────────────────┘
        │
        ▼
┌─ 事后测量（回填缓存）──────────────────────────────────────────────────────────┐
│ 48397.js storeCacheSize → getBCRect(line)/getBCRect(baselineblock) → {w,h,bl}   │
│ 11154.js Rp(延迟渲染管理) → delayRenderCache（懒渲染时用缓存尺寸占位）           │
└───────────────────────────────────────────────────────────────────────────────┘
        │
        ▼
┌─ 导出（不截图，重新生成）──────────────────────────────────────────────────────┐
│ SVG/PNG：45896.js generateToStr → 从 model 重新生成 SVG 树（读 live DOM 的      │
│           computed style + rect），文字块用 Typr 解析 OTF → <path d>；          │
│           renderToStaticMarkup → svg 字符串；PNG 再 drawToCanvas。              │
│ 打印/PDF：window.print() + Kh（内联全部 @font-face）                            │
│ TikZ/LaTeX：69153.js latexParser（文本/LaTeX 命令路径，非字形轮廓）              │
└───────────────────────────────────────────────────────────────────────────────┘
```

**每步实现位置（一表带走）**

| 步骤 | 位置（module / 文件） | 关键符号 |
|---|---|---|
| 顶层容器 | `11154.js`（导出 `Ay` = 类 `Hu`） | `render()`、`renderMathEditContainer`、`renderReadOnly` |
| 编辑区/行容器 | `39791.js` | `renderLinesContainer`、`createElement("editarea")`、`<area-container>` |
| 行与字符块 | `48397.js` | `renderForRoot/renderForTextMode/renderForMathMode`、`renderNormalTextBlock`、`renderBlocks` |
| 单行编辑区 | `67882.js` | `createElement("editarea-line", …)` |
| block→CSS 样式 | `47858.js` | `getHtmlFromStyle`、`basicMathStyle`、`getHtmlFromBlockStyle` |
| 数学字体族映射 | `58578.js` | `mathFontFamilyFromKey`、`asanaMathFontFamilyFromKey`、`defaultMathUsageFamily` |
| 分式几何 | `43369.js` | `renderComponent`（-0.5em/-0.41em 等） |
| 根号 | `68468.js` + `7258.js` + `71311.js` | `calculateSqrtSymbol`、`F[radical.renderer]`、`_S` |
| 伸缩定界符 | `57858.js`（legacy/Asana）+ `7258.js`（opentype 模式） | `renderLeftParen/Brace/Bracket`、`A3`、`si` |
| SVG 画布适配 | `12481.js` | `<SvgDrawing>`、`updateComponent`、`renderSvg(w,h,fs)` |
| 行尺寸缓存 | `48397.js` / `4258.js` / `11154.js` | `storeCacheSize`、`tryRunStoreCacheSizeOnHtmlLine`、`Mp.set/fetchCacheSize` |
| 光标几何 | `11154.js`（`Ms`/`Ts`）+ `516.js` | `buildFullCursorInformation`、`drawWithSCursor`、`getElementRect` |
| 选区几何 | `11154.js`（`gc`）+ Range | `innerSetSelectionInfo`、`getRectElement` |
| 命中测试 | `11154.js`（`Ui`）+ `25644.js` + `13764.js` + `10632.js` | `handleSelectFromPosition`、`buildCursorPosition`、`search`、`rangeRectsFrom2Idx` |
| 导出 SVG/PNG | `45896.js` + `77982.js` + `80137.js` | `exportSvg/getSvgText/drawToCanvas`、`buildTextBlock`、`generateVectorTextBlock` |
| 导出 HTML(zip) 字体 | bundle `Kh` 常量 | `Kh.replace(/\/fonts\//g,"fonts/")` + 内联全部 @font-face |
| 打印/PDF | bundle 类 `yl` `print()` | `setupCssPrint`、`window.print()` |

---

## 字体体系

### 1. 注册与加载（全部静态）

- `editor.html` 引 `<link rel=stylesheet href="https://cdn.mathcha.io/resources/fonts-f9164fb5-ced37e37.css">`，本地由 `src/server.py` 的 `_rewrite_cdn()` 改写成 `/cdn/resources/fonts-…css`。【已核实】
- 该 CSS **61 条 @font-face**，`url("https://cdn.mathcha.io/fonts/…")`，同样被重写到 `/cdn/fonts/…`。【已核实】
- bundle 里另有一份 **61 条 @font-face 的字符串常量 `Kh`**（偏移 ~5613970；我逐条解出：**61 rules = 42 个 math family + 16 条 Computer Modern 文本族 + 3 条 FontAwesome**，与 CSS 文件同款，仅 url 改为相对 `/fonts/…`），**只用于导出 HTML/打印**（`Kh.replace(/\/fonts\//g,"fonts/")` 后拼进导出页）；编辑器运行时并不注入它。【已核实】
  - 因此 bundle 里 `@font-face` 总出现 62 次 = 这份 `Kh` 的 61 条 + **运行时注入 `<style>` 的 1 条 FontAwesome 子集**（Lead 实测 `<style>` 里只有这一条）。
- 加载器 `FontsLoader`（bundle 类 `On`，实例 `Dn`，偏移 ~5313954）：
  - `loadFamilyCss(name,url)` 动态 `<link rel=stylesheet>`；`loadFullName` 带 15s 超时；
  - 启动 `setTimeout(()=>this.loadAllFonts(), 4500)`，预载 7 个族：Asana/LatinModern/ThickerLm/Sans + 4 个 Computer Modern 文本族；
  - 用 **FontFaceObserver**（模块 `21801`）等字体就绪：`new (wn())(fullFontName).load(mathCalCharToTest|…, 15000)`；
  - `document.fonts` 60 条全 loaded，FontAwesome 子集未用 ⇒ unloaded，与 Lead 实测一致。【已核实】

### 2. family ↔ 文件 ↔ math 样式

文件清单来自 bundle 里的字体清单对象 `pn`（每族 10 个 math face；文件名规则 `hn("Asana","Mathbb") → "Asana-Mathbb"`）：【已核实】

| CSS font-family | 文件 | 说明 |
|---|---|---|
| `Asana` | `/fonts/Asana-Math.otf` (420KB, 3379 glyph) | 全量 Asana（含全部符号/字形） |
| `Asana-Math` | `/fonts/Asana-math-mode.otf` (30KB, 162 glyph) | **数学构造字体**：ASCII 字母 + U+239B.. 部件 + 自定义部件槽 |
| `Asana-Mathbb/-Mathit/-Mathcal/-Mathscr/-Mathfrak/-Mathsf/-Mathtt/-Mathrm` | `/fonts/types-generated/Asana-*.otf` (9–27KB) | 纯样式字：ASCII→该样式字形 |
| `LatinModern`,`LatinModern-Math` | `latinmodern-math.otf` (720KB) / `-mode.otf` | 同上模式 |
| `LatinModern-Math*` | `types-generated/latinmodern-*`（`latinmodern-mathscr.otf` 与 `Asana-mathscr.otf` 字节相同）；导出清单 `pn` 里 `LatinModern-Mathscr` 直接指向 `Asana-mathscr.otf` | 见下"共享变体" |
| `ThickerLm`,`ThickerLm-Math` | `thickerlm-math.otf` (693KB) / `-mode.otf` | ThickerLm = LatinModern 加粗版（自研） |
| `ThickerLm-Math*` | `types-generated/thickerlm-*`；`-Mathscr` 复用 `Asana-mathscr.otf` | |
| `Sans`,`Sans-Math`,`Sans-Bold` | `Sans-Math.otf` (176KB) / `Sans-Math-mode.otf` / `types-generated/Sans-bold.otf` | 自己造的 Sans Math |
| `Sans-Mathbb/-Mathcal/-Mathscr/-Mathfrak/-Mathsf/-Mathtt/-Mathrm` | **全部复用 `types-generated/Asana-*.otf`**；仅 `-Mathit`/`-Mathbf`/`-Bold` 是 `Sans-*` | 见下"共享变体" |
| `Computer Modern Serif/Sans/Typewriter/Thicker Computer Modern Serif` | `others-text-mode/computer-modern/**`（每族 4 个权重文件：Book/Bold/Italic/...) | 文本模式可选字体 |

**共享变体（重要结论）**：`\mathbb/\mathcal/\mathscr/\mathfrak/\mathsf/\mathtt/\mathrm` 这类"数学字母"样式在不同基础字体下**并不各自重造**——
导出用的字体清单 `pn`（bundle ~5306000）里 LatinModern/ThickerLm 的 `Mathscr`、Sans 的 `Mathbb/Mathcal/Mathscr/Mathfrak/Mathsf/Mathtt/Mathrm` 都指向 `Asana-*.otf`
（CSS 虽然另有 `latinmodern-mathscr.otf` 等文件，但内容与 `Asana-mathscr.otf` 逐字节相同）；
`md5sum types-generated/*.otf` 证实 `latinmodern-mathscr.otf = thickerlm-mathscr.otf = Asana-mathscr.otf`（`dc77ea6e…`），
`latinmodern-mathbb.otf = thickerlm-mathbb.otf`（`14da2bd7…`）等。【已核实】

样式 → CSS family 的代码（`58578.js` `asanaMathFontFamiltyFromKey`；LatinModern/ThickerLm/Sans 各有一份同样结构的 switch）：

```js
case "raw":                    return "Asana";
case "\\boldsymbol":
case "\\mathnormal":           return "Asana-Math, Asana";
case "\\mathbf":
case "\\mathrm":               return "Asana-Mathrm, Asana-Math, Asana";
case "\\mathit":               return "Asana-Mathit, Asana-Math, Asana";
case "\\mathbb":               return "Asana-Mathbb, Asana-Math, Asana";
case "\\mathcal":              return "Asana-Mathcal, Asana-Math, Asana";
case "\\mathfrak":             return "Asana-Mathfrak, Asana-Math, Asana";
case "\\mathsf":               return "Asana-Mathsf, Asana-Math, Asana";
case "\\mathtt":               return "Asana-Mathtt, Asana-Math, Asana";
case "\\mathscr":              return "Asana-Mathscr, Asana-Math, Asana";
```

意义：CSS 的**逐字回退**就是整套"缺字兜底"机制——`-mode` 字体只带数学字母/部件，缺的标点、关系符、希腊字母等自动落到全量 `Asana`。
`\boldsymbol`/`\mathbf`/`\mathit` 还会额外加 `font-weight:bold` / `font-style:italic`（`47858.js` `basicMathStyle`），若该族没有对应子字体才用合成粗斜：

```js
basicMathStyle(e, t) {
  var r = {}; switch (r.fontFamily = g.A.mathFontFamilyFromKey(e, t, "characters"), e) {
    case "\\boldsymbol": r.fontWeight = "bold"; g.A.mathFontFamilySupportSubFont(t) || (r.fontStyle = "italic"); break;
    case "\\mathbf":     r.fontWeight = "bold"; break;
    case "\\mathit":     g.A.mathFontFamilySupportSubFont(t) || (r.fontStyle = "italic");
  } return r;
}
```

### 3. `types-generated/*.otf` 到底是什么（my parser 实测）

```
Asana-mathbb.otf : numGlyphs=63  codepoints=62  cmap=0x30..0x39,0x41..0x5A,0x61..0x7A   name="Asana Math"
Asana-mathit.otf : numGlyphs=53  codepoints=52  cmap=0x41..0x5A,0x61..0x7A               name="Asana Math"
latinmodern-mathbb.otf: numGlyphs=28 codepoints=27 cmap=0x41..0x5A + 0x6B               name="Latin Modern Math"
Asana-math-mode.otf : numGlyphs=162 codepoints=161
   cmap = 0x2D, 0x41..0x5A, 0x61..0x7A, 0x239B..0x23B7(括号/花括号/根号部件), 0x23DC..0x23E1(横花括号/弧),
          外加 Mathcha 自定义部件槽 0x23D0..0x23DB, 0x23E2..0x23FF, 0x2400..0x2405, 0x2410..0x2412, 0x2424..0x243F
  advance: 'A'=751 / 'a'=443（全量 Asana-Math.otf 里 'A'=777 / 'a'=499）→ 重新调过 sidebearing
```

⇒ 结论：**是"构建期生成的样式字体/构造字体"，不是运行时子集化**。
`19340.js` 里 Fira 族配置还留着构建命令证据：`assets:{directory:"fira/",buildCommand:"pnpm fonts:fira:build",faces:[…]}`（Fira 未随包发布，本地无 `/fonts/fira/`）。【已核实】

### 4. `thickerlm` / `Asana` / `latinmodern` 三套的角色

- **Asana（默认）**：`getbaseMathModeFontFamily(){ return …mathFontName || "Asana" }`；构造件几何是**纯手写**的 legacy 实现（硬编码贝塞尔点 + PUA 部件字模），最成熟。
- **LatinModern**：TeX 风格外观，同一套 legacy 构造件但换成 LM 点数组（`57858.js` 里 `renderLeftParen` 按族分派 `S/k/(0,m._)`）。
- **ThickerLm**：自研"加粗的 Latin Modern"，复用 LM 的绝大多数变体字（md5 相同），只有 `mathrm/math-mode` 另做（`thickerlm-math.otf`）。
- **Sans**：自研无衬线 Math（`MathchaSans-Math`），构造件另有一套（`legacyShape:"sans"`）。
- 三者/四者的差异集中在：(a) `19340.js` 字体配置（`scripts/arcs/arrows/radical` 参数）；(b) 构造件几何；(c) `-mode` 部件字体。**【推测】**（配置已核实，"仅差异在这三处"为归纳）

### 5. `@font-face` 数量对账

- `resources/fonts-<hash>.css`：**61 条** = 42 个 math family（Asana 10 + LatinModern 10 + ThickerLm 10 + Sans 12）+ 16 条 Computer Modern 文本族（4 族×normal/bold/italic/bolditalic）+ 3 条 FontAwesome。
- 导出模板常量 `Kh`：**同样 61 条**（逐条同款，url 换相对路径）。
- bundle 里 `@font-face` 出现 **62 次** = `Kh`(61) + 运行时注入 `<style>` 的 1 条 FontAwesome 子集（`fa-solid-900-subset.woff2`，来自 `resources/fonts-subset/`；Lead 实测 `<style>` 里只有这一条）。【已核实】

---

## 度量来源

### 1. 屏幕侧：不解析字体，靠"浏览器排版 + DOM 回读"

- 字符 advance width / 字宽全部由浏览器给出。Mathcha 只在需要**数值**时读 DOM：
  - `516.js` `getElementRect(e,t)`：`getBoundingClientRect`；对 `Range` 走 `getClientRects()`，并有 Safari 特判 `isNoBoundingClientRectSupportForRange()`。
  - `516.js` `rangeFromIndex/rangeFrom2Indexes`、`10632.js` `rangeRectsFrom2Idx/retrieveSingleRangePosInfo`：`document.createRange()` 取逐字/区间矩形。
  - `516.js` `getEmRound(e,t)=Math.round(e*t)/t`：把"em 值"量化到整 px。
- 行级尺寸/基线：`48397.js` `storeCacheSize`（截）： 

```js
var i = ne().findDOMNode(this), o = l.A.findBaseLineBlock(i),
    s = B.T.getBCRect(i, r.getDocZoomContainer()),
    a = this.fetchLineWithHeight(i), c = a.lw, d = a.lh,
    h = B.T.getBCRect(o, r.getDocZoomContainer()),
    p = { w: oe.A.round4(c), h: oe.A.round4(d), bl: oe.A.round4((h.bottom - s.top) / B.T.heightOf(s)) };
r.setLineCacheSize(this.props.parentEditAreaId, t.id, p);
```

- 这解释了两个易误解点：
  1. **`axisHeight / unitsPerEm` 等 TeX 参数不在屏幕排版里用**（`19340.js` 里那份 `{unitsPerEm:1000, axisHeight:280, radicalRuleThickness:76, …}` 只服务构造件/opentype 模式）。
  2. 分式的上/下位置、"缩小档位"（`fontSizeRatio`、`.75em`）是**常数表**，不是从字体度量推出来的。

### 2. 构造件侧：手写点数组 + 量出来的目标盒

- 伸缩括号/花括号/方括号/斜线/角：`57858.js` 顶部一堆 `new Path(); push("M …"); push("c …")` 的点数组（如 `x.push("M 30 1744") …`，配套 `{topPt, topBracketHeight, topBracketWidth, lineX, lineSize, scaleXRatio}`），
  按目标 `(height, fontPixelSize)` 缩放成 `<path d>`，带 svg cache（`class D` cacheMap + 5s 超时 clear）。
- 根号：`68468.js` 量 `getBCHeight(this.sqrtEdit)` → `(0,y.V9)(fontConfig, heightEm)` 得 contentOffsetEm → 再 `_S(fontConfig).update(...)` 让 renderer 画 `<polygon points>`（legacy）或 glyph path（opentype）。
- 横向花括号/弧/箭头/重音：`7258.js`（`v/b/P/I` 等），legacy 用几何绘制，opentype 用 `font.source()` 的 glyph path。
- 盒子尺寸来源：`12481.js`：

```js
this.rootElement = a().findDOMNode(this);
var e = d.T.getBCRect(this.rootElement, …), t = d.T.widthOf(e), r = d.T.heightOf(e);
var n = l.A.getComputedFontSize(this.rootElement);
… this.cache = {width:t, height:r, fontSize:n, …}; this.forceUpdate();
renderInsideSvg() { return this.props.renderSvg(this.cache.width, this.cache.height, this.cache.fontSize); }
```

⇒ **"CSS 决定盒子 → JS 生成贴合盒子的路径"** 是构造件的统一模式。

### 3. 导出侧：必须自己解析 OTF（Typr.js）

`45896.js` 开头几十行就是 Typr 的 sfnt 表解析（`cmap/head/hhea/maxp/hmtx/name/OS2/post/loca/glyf/kern/CFF /GPOS/GSUB/SVG`），
并带 `cmap.parse4/parse12`、`CFF.readCharString/_drawCFF`、`U.stringToGlyphs`、`U.glyphsToPath`。
真正用它的是导出时构建文字块（`45896.js` `buildTextBlock`，截）：

```js
getAppliedFontsFromElement(e){ var t=g._T(e,"font-family"), r=this.isElementBold(e), n="italic"==g._T(e,"font-style"); return this.getAppliedFonts(t,r,n); }
getAppliedFonts(e,t,r){
  var n = S.A.getFontsInfo(), o = this.splitFamilyNames(e).filter(e => n.isFontLoadable(e));
  return Promise.all(o.map(e => S.A.getFontsDataLoader().loadFontDataIfRequire(e,t,r)))   // 取 .otf 二进制
    .then(e => e.filter(e=>e).map(e => { var t={name:e.fullName, font:v.parse(e.data)}; … return t; }));
}
buildTextBlock(e){ … x.U.stringToGlyphs(l,h) … x.U.glyphsToPath(I,T) …
  p.push({ type:"vector-text", path: x.U.glyphsToPath(I,T), fontSize:…, unitsPerEm: T[0].head.unitsPerEm, … }); }
```

**"浏览器 FontFace 只有有限度量，为什么必须自己解析字体"**：
- CSS `FontFace` 只提供"加载成功/失败 + CSS 字体族匹配"，**没有任何字形轮廓 API**；
- `CanvasRenderingContext2D.measureText` 只能拿 advance（且拿不到 per-glyph 落到哪个字体、拿不到 path、拿不到 italic correction）；
- 而 SVG/PDF 导出要求**自包含矢量**（客户端不装 Asana 也要正确），只能把每个字符落成 path；
⇒ 所以导出时把 `@font-face` 用过的同一批 `.otf` 再用 Typr 解析一遍拿轮廓（`glyphsToPath` → `d`），或退化成 `<text>`（`type:"text", isCustomLoadedFont` 标记）。
注意：**屏幕渲染完全不需要这一步**，所以屏幕路径上没有任何 opentype 调用（Typr 只被 `77982.js`/`80137.js`（导出）引用）。【已核实】

### 4. `dynamic-resources/data1` 不是度量表

`98095.js`（手写符号识别器）：

```js
fetch(l.h.resolveStaticAssetPath("/dynamic-resources/data1"), {headers:h, credentials:"same-origin"})
  .then(e => e.text()).then(e => { var t = JSON.parse(c.decompressFromBase64(e)); this.net.fromJSON(t); });
```

我用脚本解出来的内容（`render-fonts_data1.js`）：

```
decompressed chars: 816606
top-level keys: ["layers"]
{"layers":[{"out_depth":160,"out_sx":1,"out_sy":1,"layer_type":"input"},
           {"out_depth":200,…,"layer_type":"fc","num_inputs":160,"filters":[{"sx":1,"sy":1,"depth":160,"w":[-0.1104,0.5065,…]}]}, … ]}
```

= **convnetjs 神经网络权重**（`layers` 序列，`fc` 层带 `filters[].w`），用于手写笔画 → LaTeX 符号识别；同一模块里那份 `"31;A;137;22\r\n…"` 字符串是符号表（index;latex;…）。
⇒ 与字体 metric 无关，**换字体成本不在这**。【已核实】

---

## 关键位置

| module / 资源 | 符号 | 作用 | 证据/样例 |
|---|---|---|---|
| `11154.js` | `Hu`（导出名 `Ay`）`render()` | MathType 顶层：`<math-type>`+隐藏输入+编辑区+光标+选区 | `createElement("math-type", …); renderMathEditContainer(!1); selectionHandler.renderSelection(); editorCursorHandler.renderCursor()` |
| `11154.js` | `Ws`(光标几何 `Ms`/`Ts`) `buildFullCursorInformation`/`drawWithSCursor` | caret 的 (left,top,height) 与位置类型 | `resolveTop`: `baseline`→`baselineBlockRect.bottom`；`cursorStyle:{height:i, transform:"translate(…px,…px)", borderColor}` |
| `11154.js` | `gc`（selection 组件） | 选区高亮用 `<selection>` 方块 | `innerSetSelectionInfo→Rt.buildSelectionRectsFromEditor`；`getRectElement: transform: translate/scale; createElement("selection")` |
| `11154.js` | `Ui.handleSelectFromPosition` | 命中入口：按 event.target 的 tag 分派 | `"EDITAREA"｜"EDITAREA-LINE"｜"EDITAREA-BLOCK"` → `reactInstance.selectCursorFromPosition` |
| `39791.js` | `T`（= `L`，editarea）、`selectCursorFromPosition` | `<editarea>`/`<area-container>` 渲染；行内定位入口 | `S.A.buildCursorPosition(this.editor,e,t)` |
| `25644.js` | `buildCursorPosition` / `findNearestLine` | 事件点 → (line, charIndex) | `d.T.getFromAbsPos(clientX,clientY,dz)` |
| `13764.js` | `search`（二分）/`findRangeRectStartWith` | 一行内 x→字符 | `for(…; g-u>1;) { f=Math.floor((g+u)/2); if(this.posIn(u,f,d,n,i)) g=f; … }` |
| `10632.js` | `rangeRectsFrom2Idx`、`retrieveSingleRangePosInfo` | 用 Range 取字符矩形 | `document.createRange()` + `getClientRects()` |
| `516.js` | `getElementRect`、`getEmRound`、`isEditAreaLine` 等 | DOM 几何/标签判定/em 取整 | `getEmRound(e,t){return Math.round(e*t)/t}` |
| `48397.js` | 行组件 `storeCacheSize`、`renderNormalTextBlock`、`getRoundEmStr` | 字符 = `<block style=…>{text}</block>`；行尺寸缓存 | `<block style={h.A.getHtmlFromStyle(e,…)} key={e.id}>{l}</block>` |
| `47858.js` | `getHtmlFromStyle`、`basicMathStyle` | block 的内联 style（fontFamily/size/color/…） | 见"字体体系"节 |
| `58578.js` | `mathFontFamilyFromKey`、`asanaMathFontFamilyFromKey` | 数学样式 → CSS font-family 栈 | 见上 |
| `43369.js` | `m.renderComponent` | 分式几何常数 | `marginBottom:getRoundEmStr(-.5)`；smaller: `verticalAlign:.35em, marginTop:-.57em` … |
| `12481.js` | `class h`（SvgDrawing） | 先量盒子后画 SVG | `renderSvg(this.cache.width,this.cache.height,this.cache.fontSize)` |
| `57858.js` | `renderLeftParen/…/renderLeftBrace`、`class u`(vcomposed) | 伸缩定界符：硬编码 path / CSS 重复字模片 | `x.push("M 30 1744"); …`；`<vcomposed-symbol><start>(</start><middle><fixed>…</fixed></middle><end>)</end></vcomposed-symbol>` |
| `68468.js` | `calculateSqrtSymbol` | 根号：量内容高度→生成 path/polygon | `(0,v._S)(t).update(t,{fontSize:e,height:…,width:…,polygon:this.svgPolygon,drawing:this.radicalDrawing})` |
| `7258.js` | `f/j/_S/N/A3/si/kO/Q5/…` | 构造件 renderer（opentype 用 `e.source().glyphs[…]`；legacy 用几何） | `transform:"translate(…) scale(n,-n)"` + `createElement("path",{d:a.glyphs[e.glyph].path})` |
| `19340.js` | 内部常量 `i`（220KB） | **Fira 的预抽取数据**：unitsPerEm/glyphs{path,bounds,width}/vertical/horizontal/arrows/accents；导出 `zN`(族配置)、`X$`、`u8` | `{unitsPerEm:1e3, axisHeight:280, glyphs:{uni0028:{path:"M226 775C…Z",bounds:[40,-215,284,775],width:324}}}`；Fira `buildCommand:"pnpm fonts:fira:build"` |
| `71311.js` | `V9/Vu/Zy/…` | 构造件的 em 偏移计算（opentype 模式下） | `if("opentype"===e.radical.renderer){var r=e.source(); …}` |
| `45896.js` | Typr(`y`/`v`) + 导出类 `X`(`A`)/`Q`(`R`) | 导出：sfnt 解析、`exportSvg/exportDiagramSvg/getSvgText/drawToCanvas`、`buildTextBlock` | `x.U.stringToGlyphs` / `x.U.glyphsToPath`；`renderToStaticMarkup(l)` → `{svg:…}` |
| `45896.js` | `generateVectorTextBlock` | 把 vector-text 变 `<path d>` | `<g transform="translate(n,i+g)"><path transform="scale(o,-o)" d={pathToSvgD(e.path)} fill=…/></g>`（`o=fontSize/unitsPerEm`） |
| `77982.js` / `80137.js` | `x.A.exportSvg/exportDiagramSvg` | 导出 UI 门面（唯一引用 45896 的两个模块） | `exportSvg(e,t).then(e=>e.getSvgText())` |
| `98095.js` | `class y` / `A` | 手写识别器：fetch `/dynamic-resources/data1` → `net.fromJSON` | 见"度量来源"节 |
| `resources/fonts-f9164fb5-ced37e37.css` | 61×`@font-face` | 屏幕字体注册 | `@font-face{font-family:Asana-Math;src:url("…/Asana-math-mode.otf") format("opentype")}` |
| `styles-f9164fb5-ced37e37.css` | `.text-cursor` / `selection-wrapper>selection` / `vcomposed-symbol` / `baselineblock` | 光标、选区、构造件、基线锚点的样式实现 | `.text-cursor{border-left:2px solid green;position:absolute;top:0;left:0}`；`vcomposed-symbol{flex-direction:column;…}` |
| bundle `Kh`（~5613970） | 61×`@font-face` 字符串 | 导出 HTML / 打印的字体内联（与 CSS 同款，路径相对 `/fonts/`） | `Kh.replace(/\/fonts\//g,"fonts/")` |
| bundle 字体清单 `pn` (~5306000) | `family → /fonts/*.otf` | 导出时的字体定位表（也是唯一完整 face 清单） | `[hn("Sans","Mathscr")]:"/fonts/types-generated/Asana-mathscr.otf"` |
| bundle 类 `On`(~5313954) | `FontsLoader` | 按需 `<link>` 加载字体 CSS + FontFaceObserver 等就绪 | `setTimeout(()=>{this.loadAllFonts()},4500)` |
| bundle 类 `yl`(~5471372) | `print(e){this.setupCssPrint(e);window.print()}` | PDF = 浏览器打印 | — |

---

## 不确定 / 待查

1. **伸缩件在 Asana 下的实际 DOM 分支**：静态看 Asana（`radical.renderer:"legacy"`、无 `source`）应走 `57858` 的硬编码 path；
   但 Lead 抓的样本里没有 `\left(…\right)`/`\sqrt`/矩阵。建议再要一次：`$\left(\frac{a}{b}\right)$` 与 `$\sqrt{x}$` 的 `big-delimiter`/`sqrt-symbol` outerHTML，以及 `svg path` 的 `d` 前缀（应为 `M 30 …`/`M 226 …` 之类），即可 100% 定案。
2. **`\mathbb{R}` 在 DOM 里的真实文本**：是字符 `R` + `font-family:Asana-Mathbb`（我的推断，依据 `types-generated` 的 cmap 只有 ASCII），还是 `ℝ`（U+211D）+ 兜底字体。
   若要我方定案，让 Lead 在会 `\mathbb{R}` 的 block 上取 `textContent` 与 computed fontFamily 即可。
3. **PDF 导出的具体实现细节**：`yl.print()` 是 `setupCssPrint`+`window.print()` 已核实；但"打印的是当前 live DOM 还是克隆进 iframe + `Kh`"只看到 `Kh` 与 `mathTypeHtml` 传递链，未逐行确证。【推测：克隆/新窗口 + Kh】
4. **TikZ 导出的字形处理**：`69153.js` 有 `latexParser`，文本走 LaTeX 命令；但它是否把数学部分也导成 TeX、还是导成 TikZ path 未展开核实（task-3 的范围，与本任务只交叉一点）。
5. **`19340.js` 那份 glyph 数据归属**：我判定是 Fira（唯一带 `source: o` 的族）的预抽取数据，且 Fira 未随包发布（`/fonts/fira/` 404）。
   若后续发现 `source()` 被注入到别的族（例如构建时替换），则"legacy 族完全不用 glyph 表"这一条需要修正。
