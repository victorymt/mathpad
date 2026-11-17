# LaTeX 互转（toLatex 导出 / parseLatex 导入 / MathML）

> 分析对象：`.cache/cdn/bundle-f9164fb5-ced37e37.js` 拆包后的 `mathcha-src/modules/*.js`
> 约定：`【核实】` = 直接读到实现/字面量；`【推测】` = 由调用关系推断、未做运行时验证。
> 线上实测（Lead，tab 22）：`\frac` 的 DOM 类叫 enumerator/denominator，但模型槽位是 `value`/`sub1`；`\math-container` 槽位是 `mathValue`，带 `displayMode:false` 与 `style.mathModeType:"\\displaystyle"` —— 与本文静态结论一致。

## 结论速览

1. **不是集中式 switch，而是"每个符号组件自己实现双向转换"【核实】**。`98095.js` 的 `initExtendedSymbols()`+`initCustomSymbols()` 用 `r(…).default` 注册组件，去重后 **251 个模块**（`r(43369)`, `r(68468)`, `r(6720)`, `r(47316)`…；其中 171 个模块里有 `names:[...]` 字面量、其余用 `getLatextName()` 动态给名）。每个 class 都实现同一套接口：`getSymbolInfo()`（名字/建议框图标）、`getModelMeta()`（槽位声明）、`getModel()`（模板）、`toModel(...)`（LaTeX→模型）、`toLatex(...)`（模型→LaTeX）、`toMathml(...)`（模型→MathML）、`getViewComponent()`（渲染，见 task-4）。**导出器只是查表 dispatch，导入器只是语法动作里调 `toModel`** —— 这就是"模型是中心、LaTeX 只是编解码"的结构性原因。
2. **模型三层**：文档 `lines: []` → 每行 `blocks: []` → block 三种：
   - 文本块 `{id, text:"a+b"}`（无 `type`）
   - `single`：`{id, type:"single", text:"(" 或 "\left\langle"}`（括号/单字符结构；普通 `(` `[` `{` 在模型里就是原字符，不保留 `\left`；见映射表 #4）
   - `composite`：`{id, type:"composite", text:"\frac", elements:{ slot: {id, lines:[...]} , ... }}`
   槽位值本身又是一个 editor（`{id, lines}`），所以可无限嵌套；`id` 由 `30803.w.nextId()` 生成。
3. **导出主类 = `69153.js` class `x`**（导出名 `g4`，单例 `Ay`；另有 `xx = class C` 转换上下文）。调用链：`toLatex(lines, opts)` / `toLatexFromEditor(editor, opts)` → `toLatexInner` → 每行 `toLatexLineExtended` → 每个 block：文本块走 `processTextForMathMode/TextMode`，`single`/`composite` 走 `processNonTextForAll` → `98095.A.getCustomSymbolComponent(block.text).toLatex(block, opts, this, ctx)`。上下文 opts 主要字段：`inMathExpression`、`displayMode`、`customMappingSymbols`、`ignoreSpace`、`usingStandardMathWrapper`、`newLineUsingBackSlash`、`mathType`（"mathjax"）、`convertedInfo`（class C：收集 `unSupportedLatexes`/`preambles`/`theoremKeys`）、`headers: Map`、`pageSettings`、`ignoreWrapMultiline`、`inTable`。`toLatex` 返回值可以是字符串或 `{arrStr:[...]}`（幂运算符跨 block 合并时用），`pushIfNotEmpty` 兼容两者。
4. **一份文档导出只出 body，不出 `\documentclass`**【核实】。`toLatexInner` 拼完各行就返回，前面最多拼 `convertedInfo` 收集的头部（theorem 定义、`\require{cancel}` 等）；所需宏包（amsmath/physics/tikz/cancel/color/siunitx/array/multirow/amssymb/extarrows/booktabs…）**只是导出对话框里给用户看的静态 "Include Script" 列表**（`11154` class `Nn.packagesInfo`），不会自动生成 `\usepackage`。**`64027.js` 不是文档级导出器**：它是 `\longdivision` 组件，`toLatex` 里用小 LaTeX-AST（`raw-element/group/tabular/environment/inline-environment`）描述竖式，再由 `78183.js fromElement()` 渲染成字符串。
5. **行的组织**：文本行之间默认 `"\n\n"`（`opts.newLineUsingBackSlash` 为真时用 `"\\\\"`，只有 **TikZ 节点文本**（`94513.js:15371`）和 **LaTeX 表格 `\makecell` 单元格**（`8685.js:86`）两处会置真）；数学行之间 `"\\\\\n"`；`listType` → `itemize/enumerate` + `\item`（缩进由 `popAllIndents` 收尾）；`align` 行样式 → `flushleft/center/flushright` 环境；`listType:"section"` → `\section/\subsection/\subsubsection`；行 `tagInfo` → ` \tag{...}` 或 ` \notag`。多行"纯数学选区"导出（`inMathExpression && lines>1`）时整体包 `\begin{array}{l}…\end{array}`（displayMode 时 `{>{\displaystyle}l}`）。
6. **`\math-container`（display 数学）导出**【核实，`67928.js` `toLatex`】：`displayMode:true` → `\begin{equation*}…\end{equation*}`，多行 → `gather*`，容器内任一行有 tag → `equation`/`gather`；内容行以 `\\` 分隔。`displayMode:false`（行内数学，`$...$` 解析得到的也是它）→ `$…$`，`usingStandardMathWrapper` 为真时 `\(…\)`，`style.mathModeType === "\\displaystyle"` 时加 `\displaystyle ` 前缀；空容器导出 `$ $` / `\( \)`。**Lead 实测与源码一致**（见"浏览器实测 A"）。
7. **`\text` 是"反向切模式"的容器**【核实，`99588.js`】：`\text{elements.textValue}`，`toLatex` 先把 opts 的 `inMathExpression` 置 false 再序列化内部，输出 `\text{...}`；文本模式内部走 `processTextForTextMode` 的转义（`\$ \& \% \# \_ \{ \}`，`~`→`\textasciitilde `、`^`→`\textasciicircum `、`\`→`\textbackslash `）。数学模式则是另一套：`~`→`\sim `、`^`→`\hat{}`、`\`→`\backslash `，且 `<`/`>` 被不对称补空格（`"< "`/`" >"`，Lead 实测 `x>0 → "x >0"`）。
8. **导入 = peggy 风格的生成式 PEG 解析器**【核实】：`51737.js` class `f`（导出名 `A`，实例 `ai`）`parse(src, startRule)` 调 `28623.js` 的 `g().parse(...)`，两个 start rule：`Expression`（整篇，文本为主，`$...$` 进数学）与 `MathExpression`（数学模式）。语法动作**直接构造模型对象**并调 `getCustomSymbolComponent(name).toModel(...)`，因此导入/导出共用同一张组件表。`51737` 的后处理还负责 `\over`→`\frac`、`\choose`→`\binom`、剥 `\group`/单列 `\gathered`、合并相邻同格式文本块、末尾补空行。
9. **命令分三类 + 两条容错路线**【核实】：(a) 语法里有专门规则的结构命令（见映射表白名单）；(b) 符号表命令（`\alpha`、`\sum`…）经 `98095.getByName` 得到纯 unicode 单字符 → 变成**一个文本块**；(c) 未知命令 → `{type:"unknown-command", text:"\\foo"}`（`28623.dc()`），导出时原样输出并补尾随空格（`69153.toLatexLineExtended`）。**但只发生在 MathExpression**：文档级 `Expression` 遇到不认识的整行会降级成纯文本（Lead 实测 `\foo{...}`→一行 text-mode，无 unknown-command）。语法错误时 PEG 抛 `SyntaxError`（带位置），`51737.parse` 全部 `catch` → `console.log` + 返回 `[]`；文档级因整行可当文本而**静默降级、不报错**（`\[ x^2 \]`、`\( x^2 \)`、`\textcolor{...}` 均如此）。
10. **粘贴/打开文件都不自动解析 LaTeX**【核实】：`11154.js` `onPaste` → 先试 HTML 表格粘贴（class `Ei`）→ 再试文件（`bi.tryGetFileFromEvent` 只接受 image/*，**没有 `.tex` 打开入口**）→ 最后 `pasteFrom(text/plain)` 走普通文本粘贴；LaTeX 只能从右键/菜单 **"From LaTeX"**（`\from-latex` 符号，`importLatex()`）打开的对话框（class `di`，`11154.js:6239`，textarea + 600ms 防抖 + 预览）粘贴导入，`forMathMode` 时结果再包一层 `\math-container(displayMode:true)`。
11. **MathML 是并行的第三条输出，不参与 LaTeX 互转**【核实】：71 个组件模块有 `toMathml`；`35847.js` class `g`（导出 `R`）把模型转 MathML AST（文本块按字符分类成 `mn/mo/mi`，`style.mathType`→`mathvariant`：`\mathbb`=double-struck、`\mathcal/\mathscr`=script、`\mathfrak`=fraktur…，颜色→`mathcolor`），`52175.js` 再转 React `<math>`，`11154.js` 用 `renderToStaticMarkup` 变成 MathML 字符串。用途只有导出对话框的 "MathML" 选项/复制；**没有 MathML 导入，也没有用于编辑器渲染的无障碍层接入**（隐藏 `mathmlContainer` span 有生成代码但主 bundle 无消费者）。
12. **其它导出路径**：**TikZ 导出复用同一个 LaTeX 转换器**（`94513.js` 对每个 diagram text node 调 `aa.H.toLatex(lines, {inMathExpression:!isTextMode, newLineUsingBackSlash:!0, tikzNode:{width}})`，前置 `% Text Node` 注释）；**SVG/PDF 不经过 LaTeX/MathML**（`45896.js exportSvg/generateToStr` = `renderToStaticMarkup` 序列化已渲染 SVG，PDF 由 svg2pdf 从该 SVG 转），见"导出链路 6)"。

## 离线运行时验证（harness：真实 28623 + 51737，符号组件用桩）

为了不依赖浏览器，用 Node 直接加载 **真实的** `28623.js`（PEG 语法）与 `51737.js`（入口/后处理），只把 `98095`（符号组件表）、`70224`（模型工厂）、`30803`（id）、`97372/86081/47858` 等替换成最小桩（记录调用参数），跑 `docs/re/tools/latex-io_parse_harness.js`。**语法/后处理/分派是真实代码，组件内部 `toModel` 的槽位细节是桩日志 + 静态源码对照**。

| 输入 | startRule | 结果 | 观察到的关键调用/结构 |
|---|---|---|---|
| `\frac{a}{b}` | MathExpression | ✅ 1 行 | `toModel("\frac", null, lines, lines)` → 两个 args 即两个花括号参数 |
| `x^{2}_{i}` | MathExpression | ✅ | `\power-index.toModel("^", lines("2"), arr[3])`（`t`=上标内容，`r[0]/r[2]`=后续 `_`+内容）；模型里 text 变成 `"^"`（组件内部再改成 `\power-index`） |
| `\sqrt[3]{x+y}` | MathExpression | ✅ | `toModel("\sqrt", lines("3"), lines("x+y"))` → 第 2 参=可选 `[...]` 槽（sub1），第 3 参=被开方数 |
| `\left( \frac{1}{2} \right)` | MathExpression | ✅ | 模型 = `single"(" + \frac + single")"`（**普通括号导入成纯字符，不带 `\left`**） |
| `\begin{pmatrix}1&2\\3&4\end{pmatrix}` | MathExpression | ✅ | `toModel("pmatrix", [ {sections:[…],firstHLine} , … ], false)`：环境名**不带反斜杠**，行→`sections`、单元格→`lines` |
| `\begin{cases}…\end{cases}` / `\begin{array}{l|c}…\end{array}` | MathExpression | ✅ | cases 同 pmatrix；array 第三参 = `"l|c"` 列格式串 |
| `\alpha + \beta \, \% \{y\}` | MathExpression | ✅ | 文本块 `α + β`，`\,`→空格，`\%`→`%`，`\{y\}`→`{y}`（**导入把转义解开成原字符**） |
| `\foo{x}` | MathExpression | ✅ | `unknown-command{text:"\foo"}` + `{x}` 花括号被 `\group` 摊平成内部 blocks（不丢内容、不报错） |
| `\[ x \]` | MathExpression | ❌ SyntaxError | `Expected " ", "!", ",", ":", ";", or [a-zA-Z\|] but "[" found` → **`\[…\]` 不支持**（`\(` 同理，found "("） |
| `$x^2$` | Expression | ✅ | 生成 `\math-container(displayMode:false)` 包裹（`toModel(false, lines)`）；语法把"数学内容"先以 `il()`(MathExpression) 解析 |
| `$$x^2$$` | Expression | ✅ | 行对象带 `singleBlock:true, mathContainer:true`，块是 `\math-container(displayMode:true)` |
| `\begin{equation}x^2\end{equation}` | Expression | ✅ | 同上（display 数学容器） |
| `\text{abc}` | MathExpression | ✅ | `\text` 组件的 `toModel` **第一参是三参文本内容 `"abc"`**（不是命令名） |
| `{a+b}` | MathExpression | ✅ | `\group.toModel(null, null, lines)` → 桩确认参数形态；真实 `isFlatten` 会返回内部 blocks（**分组被摊平**） |
| `\over` / `a \over b` / `a \choose b` | MathExpression | ✅ | 后处理把中缀命令改写成 `\frac` / `\binom` 的 `toModel(name, null, 前段, 后段)` |
| `\sum_{i=1}^{n}` | MathExpression | ✅ | 先 `\power-index.toModel("_", …)`，再 `\sum.toModel(…, args=[power-index composite])` → 大运算符从 `elements.powerValue/indexValue` 取 `from`/`to` |
| `\mathbb{R}` / `\mathrm{d}x` | MathExpression | ✅ | `toModel("\mathbb"|"\mathrm", null, lines)`，由 `\mathbb` 组件把 `mathType` 写成 style 并返回内部 blocks（**不保留 composite**） |
| `inline $x+1$ text` | Expression | ✅ | 文本行内嵌 `\math-container` |

> harness 只覆盖"导入"。导出没有对应离线验证（需要 DOM 渲染 + 组件表），故导出结论以源码 + 下一节"浏览器实测 A"为准。

## 浏览器实测（Lead，线上 127.0.0.1:7801/editor，最强证据）

### A) 导出（模型→LaTeX）—— 导入一段覆盖性 LaTeX 再 Export Selection to Latex
输入（Import 对话框）：`\begin{equation*}\frac{a}{b} + \sqrt[3]{x} + x^{2}_{i} + \left( \frac{1}{2} \right) + \begin{pmatrix}1&2\\3&4\end{pmatrix} + \begin{cases}a&x>0\\b&x<0\end{cases}\end{equation*}`

导出对话框中 textarea 原样输出（首尾各空行）：

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

对照代码逐条核实（全部【已核实】）：

| 观察 | 对应代码 |
|---|---|
| `\math-container(display)` → `\begin{equation*}…\end{equation*}`（首尾加空行） | `67928.getLatexName/toLatex` + `surroundByLine` |
| `\frac{a}{b}`（无空格） | `43369.toLatex`：`e.text + "{…}{…}"` |
| `\sqrt[3]{x}` | `68468.toLatex`：sub1 非空才出 `[...]` |
| **上下标顺序固定 `_{i}^{2}`**（模型里合成一个 `\power-index`，powerValue/indexValue 分槽） | `49632.toLatex`：先拼 `_{indexValue}` 再拼 `^{powerValue}` |
| `\left( \frac{1}{2} \right)` → `\left(\frac{1}{2}\right)`（**`\left` 保留了**） | `68517/90617.toLatex` + `69153.processNonTextForAll`（`___normal` 未置位 → 保留 `\left`；说明含分式时渲染把括号判成"非普通"） |
| 矩阵：`\begin{pmatrix}\n1 & 2\\\n3 & 4\n\end{pmatrix}` | `6720.C()/S()`：`\begin{name}\n` + rows(` & ` 连接、`\\\n` 分行) + `\n\end{name}` |
| cases 同理，且 `x>0 → "x >0"`、`x<0 → "x< 0"` | `69153.getLatexForSpecialCharMathMode`：`>` → `" >"`、`<` → `"< "`（**不对称加空格**，与空格策略相关） |
| 空格：模型里的空格块原样导出成 ` \sqrt`、` +\sqrt`（运算符前有、后无） | `69153.processTextForMathMode` 逐字符输出 + `getSpaceIfRequire` |
| 行内数学 → `$\displaystyle f…$`（另一文档实测） | `67928.toLatex` 的 inline 分支（`$…$`，style `\displaystyle` 时加前缀）|

导出入口（Dialog）：
- Menu 项 `data-name="export-selection"`（Export Selection to Latex）；另有 `save-as-mathcha` / `save-as-html` / `import` / `import-from-zip`。
- 导出对话框两个 radio（`11154.js:5890-5913`）：`latex-latex` = "Convert to Math Mode Latex + Latex (Diagram - Tikz, Section, List Item, Style)" → 转换器 `27077.H`；`latex` = "Convert to Math Mode Latex + Plain Text" → 转换器 `11154` 里 `Dn` 子类（文本模式直接输出原文）。
- "Do not convert space character" 开关 = `opts.ignoreSpace`，会关掉数学模式里逐字符空格/`\kern` 的输出（`processTextForMathMode` 里 `i` 即 `r.ignoreSpace`）。

### B) 导入定界符（From LaTeX 对话框逐个粘贴；观察 parse-error + 预览 DOM）

| 输入 | parse-error | 预览/DOM | 结论 |
|---|---|---|---|
| `\[ x^2 \]` | 空 | 原文、0 composite、一行 text-mode | ❌ 不支持，**静默降级成纯文本**。机制：Expression（文档级）语法把这一行整体当文本解析（不报错、不是 `[]`）；若在数学模式下解析则抛 SyntaxError→`[]`（harness 已证） |
| `\( x^2 \)` | 空 | 同上 | ❌ 不支持 |
| `$x^2$` | 空 | composites = `math-container-symbol role-mathmode-area inline` + `power-index-symbol-container has-power inline` | ✅ 行内数学 |
| `\begin{equation}x^2\end{equation}` | 空 | composites = `math-container-symbol … display` + `power-index-symbol-container` | ✅ display 容器 |

> 注意：Lead 的 B 表（文档级 Expression 模式）与我的离线 harness（MathExpression 模式）表现不同，这不是矛盾而是 **startRule 差异**：文档级把 `\[…\]` 当文本吃下；数学级则在 `\` 后只接受命令名字符，`[`/`(` 直接 SyntaxError。

### C) 未知命令/转义（文档级 Expression 模式）
`\foo{x} + \% + \{y\}` → 0 composite，预览是**一行 text-mode 里一个 block 含整串**：
`<line class="root text-mode">… <block>\foo{x} + \% + \{y\}</block></line>`

即：**Expression（文档级）模式下解析失败/不认识的整行会 fallback 成纯文本，不产生 `unknown-command` 节点**。而离线 harness 证明 **MathExpression 模式**下 `\foo{x}` 会产生 `unknown-command{text:"\foo"}` + `\group` 摊平的内容 —— 所以"unknown-command 保留"只发生在数学模式，文档模式是整行文本兜底。

### D) `\textcolor`
`\textcolor[rgb]{1,0,0}{abc}` → 0 composite、原文预览 → 同样降级整行文本（颜色丢失）。

### E) 导入入口代码（lead 核对）
- 对话框组件 = `11154` class `di`（`ri = r(51737)`, `ai = new ri.A()`），`parseLatex` 调 `ai.parse(text, mode)`，mode = `"MathExpression"`（`props.forMathMode`）/`"Expression"`（文档级）；`0 == r.length` → 显示 `"Could not parse latex"`。
- `wrapInMathContainer`（`11154:6278`）把文档级导入结果包成 `\math-container(displayMode:true)`。
- 默认示例文本 `ni`（`11154:6213`）含 `Big Matrix` / `Repeating fractions` / `Summation notation`，用 `$$…$$` 包裹（内含 `\begin{vmatrix}`），印证文档级 import 走 `$$` 再嵌套环境。

## 导出链路

### 1) 入口与文档级拼装（`69153.js`）
三层入口都收敛到 `toLatexInner(lines, opts, extra)`：

```js
// 69153.js St. 122 / 139 / 142
toLatex(e, t) {                    // 整篇或选区（e 是 lines 数组）
  (t = m.A.update(t, { mathType: "mathjax", textType: this.getTextType(), convertedInfo: new C() }))
  ... var r = this.toLatexInner(e, t); ...
  return i && o.push(i + "\n"), o.push(this.addingHeaders(t.headers, r)), o.join("\n");
}
toLatexFromEditor(e, t, r) { return this.toLatexInner(e.lines, t, r); }
toLatexInner(e, t, r) { /* 见下 */ }
```

`toLatexInner` 逐行处理，自身只负责"行间分隔 + 环境包裹 + indent 收尾"：

```js
// 69153.js St. 155-167
var d = (r && r.normalLinePrefix || "") + this.toLatexLineExtended(l, t);
i && !y.p.shouldShowTagInfo(l) ? d += " \\notag" : l.tagInfo && "custom" == l.tagInfo.type && (d += " \\tag{".concat(l.tagInfo.tagName, "}"));
...
n = "order" == h || "unorder" == h || h instanceof Array ? this.processListItem(l, d, h, n)
  : "section" == h ? this.processSection(l, d, n)
  : t.inMathExpression ? this.toLatexMathLine(l, d, n, o, t) : this.toLatexTextLine(l, d, n, o, t), o = l;
...
if (n.align && (n = this.handleLineAlign(n, void 0)), n.currentStr += this.popAllIndents(n), t.inMathExpression && e.length > 1 && (!r || !r.ignoreWrapMultiline)) {
  var u = t.displayMode ? "{>{\\displaystyle}l}" : "l";
  n.currentStr = this.surroundByLine(n.currentStr, " \\begin{array}{".concat(u, "}"), "\\end{array}");
}
```

- 文本行分隔：`toLatexTextLine` 用 `getNewLine(opts)` = `opts.newLineUsingBackslash ? "\\\\" : "\n\n"`；相邻两行都是"行内单 block"时改成 `"\n"`。
- 数学行分隔：`toLatexMathLine`：`var o = "" == r.currentStr ? "" : "\\\\\n"`。
- `handleLineAlign` 按需开关 `\begin{flushleft|center|flushright}`；`processListItem` 按缩进开关 `itemize/enumerate`；`processSection` → `\section{...}`。
- 行级样式（粗体/斜体/颜色/字号/超链接等）由 `toLatexLineExtended` 用 `partition(line.blocks)` 把跨 block 的 style range 拆开，`appendStyleBegin` 里 `styleToLatex(key, value) + "{"`，结束时按 `closeBraceTotal` 补 `}`。`styleToLatex`（`47858.js St. 338`）：`color` → `\textcolor[rgb]{r,g,b}`（0-1 浮点），`mathType` 原样返回（即 `\mathbb` 等），其它直接返回 value。
- 头部：`convertedInfo.getTheoremDefinition()`（theorem 环境定义）+ `headers`（`Map`）拼在最前；导出整篇时 `inMathExpression:false`，所以不会出现外层 array 包裹。

### 2) 每个 block 的分派（`toLatexLineExtended` → `processNonTextForAll`）

```js
// 69153.js St. 246-258（节选）
if ("composite" == l.block.type || "single" == l.block.type) {
  var d = t.inMathExpression ? this.processNonTextForMathMode(l, t, c) : this.processNonTextForTextMode(l, t, c);
  s = this.pushIfNotEmpty(s, d);
} else s = "unknown-command" == l.block.type ? this.pushIfNotEmpty(s, l.block.text + " ")
  : !0 === t.inMathExpression ? this.pushIfNotEmpty(s, this.processTextForMathMode(s, l.block.text, t))
  : this.pushIfNotEmpty(s, this.processTextForTextMode(s, l.block.text));
```

```js
// 69153.js St. 294-305
processNonTextForAll(e, t, r) {
  var n = s.A.getCustomSymbolComponent(e.block.text);
  if (null == n) throw new Error("could not found composite block info");
  if (n.isBracket && e.block.___normal) {                       // 渲染期打上的"普通括号"标记
    if ("\\left." == e.block.text || "\\right." == e.block.text) return "";
    var i = n.toLatex(e.block, t, this, r);
    if ("string" != typeof i) return "";
    if (o().startsWith(i, "\\left")) return i.substr(5);        // "\left(" -> "("
    if (o().startsWith(i, "\\right")) return i.substr(6);       // "\right)" -> ")"
  }
  return n.toLatex(e.block, t, this, r);
}
```

- `98095.getCustomSymbolComponent(text)`：`customSymbolMap[text] || extendedCustomMap[text] || customSymbolMap["\\not-found-symbol"]`，key 就是模型里 `block.text`（`"\\frac"`、`"("`、`"\left("` …）。
- `___normal` 是**渲染组件在布局时写到 model 节点上的临时布尔**（`14063/2651/32514/46522/26324` 等 bracket 组件里 `this.props.data.___normal = !0/!1`），导出据此决定 `(` 还是 `\left(`。也就是说导出结果受"上次渲染状态"影响，属于偷懒实现。它在 MathML 侧有对应语义：括号基类 `52431.toMathml` 里 `e.___normal && (t.stretchy = !1)`。
- 括号基类 `52431.js`（`class o extends 48440.A`，`this.isBracket = !0`）给 32 个定界符组件复用：`toLatex(e,t,r,n){ return this.getLatextName() + " " }`、`getModel(){ return {id, type:"single", text:this.getLatextName()} }`、`toMathml(){ return {type:"mo", fence:!0, value:this.getSymbol()} }`。`\left(`(68517)/`\right)`(90617) 只是覆写成不带尾随空格的版本。
- 第 4 个参数 `ctx = {latexArray, blockIndex, wrapBlocks}` 供"上标和前一个 `'` 合并"这类跨 block 决策使用（`49632.toLatex`）。

### 3) 纯文本块的转义（`processTextForMathMode` / `processTextForTextMode`）
- 字母/数字直接输出。
- 文本模式（`getLatexForSpecialCharTextMode`）：`$ & % # _ { }` → `\$ \& \% \# \_ \{ \}`；`~ → \textasciitilde `、`^ → \textasciicircum `、`\ → \textbackslash `（后三个带 `consumeSpace`，避免后面空格被吃掉）。
- 数学模式（`getLatexForSpecialCharMathMode`）：`$ & % # _ { }` 同上；`~ → \sim `、`^ → \hat{}`、`\ → \backslash `；另有一批 unicode 特判：`<` → `"< "`、`>` → `" >"`、`Ω → \si{\ohm}`、`∧ → \land `、`∨ → \lor `、`∆ → \Delta `。
- 空格：普通空格 → `\ `；`U+2009`(thin) → `\kern+0.01em `；`U+2002` → `\kern+0.4em `。
- 非 ASCII 符号：`getForLatexTextCommand(ch)` → 先查 `opts.customMappingSymbols`，再查 `98095.getLatexTextCommandFromUnicode`（`symbolMapByUnicodeChar[ch].names[0]` 必须是 `\` 开头），查到命令名后补一个空格（`\alpha `）。这就是"单字符符号 ↔ `\alpha`"的双向桥。
- `getSpaceIfRequire`：若已输出内容末字符是空格/换行/`{` 就不再加前导空格。

### 4) 特殊命令的处理（`\math-container` / `\text` / 未支持项）
- `\math-container`：见速览 7。**不带** `$…$` 也不留自定义命令名，直接变成 `equation*/gather*` 或 `$…$`。
- `\inline-math`：与 `\math-container` 同一个组件类（`67928.getSymbolInfo` 返回两项），导出同样落 `$…$`。
- `\text{...}`：见速览 8。`\mathcha`（`\mathcha` 徽标，`59741.js`）导出成字面量 `mathcha`；`\raw-latex`（`71064.js`）导出 `elements.rawLatexValue` 里的**原始文本**（不转义），用于手工塞 LaTeX。
- `\operatorname`（`83757.js`）→ `\operatorname{...}`；`\group`（`72480.js`）→ `{...}`（纯大括号，无命令）。
- 无法用 mathjax 表示的自定义符号会调 `convertedInfo.addUnSupportedLatex(name)`（如 `35667.js`、`60548.js` 里 `"mathjax"==t.mathType` 的分支），只收集名字，不抛错。
- `\longdivision`（`64027.js`）：`toLatex` 返回 LaTeX-AST，再经 `78183.js` 渲染：

```js
// 78183.js St. 12-25（LaTeX-AST -> 字符串）
fromElement(e) {
  switch (e.type) {
    case "raw-element": return e.rawText;
    case "group": return e.elements.map(e => this.fromElement(e)).join(e.delimiter || "");
    case "tabular": return e.rows.map(e => this.fromElement(e)).join("\\\\\n");
    case "tabular-row": return e.cells.map(e => this.fromElement(e)).join("&");
    case "group-by-lines": return e.lines.map(e => this.fromElement(e)).join("\n");
    case "environment": return this.fromEnvironment(e);
    case "inline-environment": var t = "\\".concat(e.name).concat(this.fromOptions(e.options), "{").concat(this.fromElement(e.element), "}");
```

### 5) 导出入口（`11154.js` LatexIoHandler）
- `getConverter(type)`：`"bbcode"→Bn`、`"latex"→Pn`、`"latex-latex"→Mn.H`（= `27077.js` class `c`，`69153.g4` 的子类，额外实现文本模式的 `\textbf/\textit/\underline/\st/\textcolor/\href/\fontfamily`，并 `getTextType()=="latex-latex"`）、`"text-only"→Ln`（只出纯文本，复制用）。
- `getSelectedLatex(type, ignoreSpace)`：取选区 → `converter.toLatex(selection, {inMathExpression: !isTextModeSelected, theoremInfo, mathTypeHtml, pageSettings, ignoreSpace, usingStandardMathWrapper})`。
- `requestExportAll(type)`：整篇 → `converter.toLatex(mainModel.lines, {inMathExpression:false, ...})`。
- 工具栏 "Latex → Copy Latex to Clipboard"：`handleExportLatexMathML` 里直接 `Mn.H.toLatex(...)`，`copyLatexToClipboard` 用 `ClipboardItem({"text/plain": Blob})` 写剪贴板；点 "Export" 则把同一字符串 + MathML 字符串塞进导出对话框，可另存 `document.title.txt`。

### 6) 其它导出路径与 latex-io 的关系（TikZ / SVG / PDF）

- **TikZ 导出会复用 LaTeX 转换器**（`94513.js`，长链）：遍历 diagram 里每个 `text editor`，用 `aa.H.toLatex(e.lines, {inMathExpression: !e.isTextMode, newLineUsingBackSlash: !0, tikzNode:{width}, mathTypeHtml, pageSettings})` 生成 TikZ `node` 的 text 内容，并前置注释 `% Text Node`；`tikzNode` 选项只影响"文本模式行首 `-` 转 `\mbox{-}`"这类细节（`69153.toLatexLineExtended` 末尾）。**这是 `newLineUsingBackSlash:!0` 的主要使用场景**——TikZ node 里多行文本要用 `\\` 而不是空行分隔。TikZ 导出对话框会警告 "Plots and images are not supported when converting to TikZ"。
- **SVG/PDF 导出完全不经过 LaTeX/MathML**【核实】：`45896.js` `class Y` 的 `exportSvg`/`exportDiagramSvg`/`generateToStr` 是 `renderToStaticMarkup(generateRootBlock(...))`，即把已渲染的 React/SVG 树序列化成字符串（`XMLSerializer`），PDF 由 lazy chunk `3609`（svg2pdf）从这份 SVG 转。因此公式在 SVG/PDF 里是**矢量 glyph 轮廓/字体引用**，与 latex-io 无关（字体细节见 task-4）。
- 需要"结构化 LaTeX"的只有两类特殊构造：长除法 `\longdivision`（`64027` → `78183` 的 LaTeX-AST writer）和 LaTeX 表格族（`8685` 里 `\multirow/\multicolumn/\makecell/\newcolumntype` 的拼装，`fromMultiColumn/fromMultiRow` 等），它们最终仍转成字符串交给同一个转换器。

## 导入链路

### 1) 入口
`11154.js` From-LaTeX 对话框（class `di`，`11154.js:6239`），默认示例文本是 `\begin{vmatrix}…` 大矩阵；textarea 输入后 600ms 防抖解析：

```js
// 11154.js:6278 / 6296
wrapInMathContainer(e) {
  var t = { id: vt.w.nextId(), type: "composite", text: "\\math-container",
    elements: { mathValue: { id: vt.w.nextId(), lines: e } }, displayMode: !0 };
  return [{ id: vt.w.nextId(), blocks: [t] }];
}
parseLatex(e) {
  var t = this.props.forMathMode ? "MathExpression" : "Expression",
    r = ai.parse(e, t);                                   // ai = new (51737.A)()
  return 0 == r.length ? r : this.props.forMathMode ? this.wrapInMathContainer(r) : r;
}
```
- 空结果 → `errorMessage:"Could not parse latex"`；成功 → `onSuccessfulParse(lines)` → `controller.insertLines(lines, target)` 插到光标处。
- `forMathMode`（在数学区域里用）：startRule 用 `MathExpression`，结果再包一层 `\math-container(displayMode:true)`。
- 同一解析器实例也用于别处（`11154.js` 外）：`69153.toModel(src, opts)` = `this.latexParser.parse(src, opts)`。

### 2) 解析器实现（`51737.js` + `28623.js`）
`51737.js` 只有 ~140 行，负责"语法 + 后处理"，真正的语法在 `28623.js`：

```js
// 51737.js St. 121-135
class f {
  parse(e, t) {
    try {
      t = t || "Expression";
      var r = g().parse(e, { _: i(), symbolProvider: o.A, openBraces: "{", closeBraces: "}",
        grammarHelper: h, startRule: t, generator: l.w, modelHelper: p.A, modelCreator: c.A });
      return this.addingLastLineIfNeeded(r);
    } catch (e) { return console.log(e), []; }
  }
```

`28623.js` 是 **peggy/PEG.js 生成的解析器**（特征：`va()` literal 匹配、`ba()` charclass、`n()` 失败、`t.startRule in i`、`r.buildMessage`/`expected/found/location` 的 SyntaxError）。两个 start rule：`{Expression: qa, MathExpression: il}`。175 个 `va()` 字面量就是它"结构化支持"的全部命令/环境名单（见映射表脚注）。

后处理（`51737.js` class `d`）值得注意：
- `processLines`：把嵌套数组摊平；连续文本行合并；文档末尾是单 block 时补一个空行（`addingLastLineIfNeeded`）。
- `processLine`：识别 `\choose` / `\over` 这两个"中缀"命令 → `handleLeftRightEditor(line, "\\over", "\\frac")`：把命令前后的 blocks 分别塞进 `\frac` 组件的 `toModel("\\frac", null, [前段], [后段])` 重建成 composite；`\choose` → `\binom`。
- `\displaystyle` / `\textstyle` 作为"待生效样式"，加到后续第一个 block 的 `style.mathModeType`。
- `handleOneGroup`：整篇只有一个 `\group`（`{...}`）时剥掉外壳取其 `elements.value.lines`；单列 `\gathered` 也摊成多行。

### 3) 命令 → 槽位的分配方式（语义动作直接调 toModel）
- 结构命令有专门语法规则，动作里把子表达式数组交给组件的 `toModel`：

```js
// 28623.js St. 226-229（\begin{matrix|pmatrix|...|cases|aligned|gathered|eqnarray|smallmatrix}）
bt = function (e, t) {
  var r = "\\matrix";
  return "cases" == e && (r = "\\cases"), "gathered" == e && (r = "\\gathered"),
    "aligned" == e && (r = "\\aligned"), "eqnarray" == e && (r = "\\aligned"),
    "smallmatrix" == e && (r = "\\smallmatrix"),
    Yl.getCustomSymbolComponent(r).toModel(e, t, "eqnarray" == e);
}
// St. 333-336（\begin{array}{spec} ... \end{array}）
At = function (e, t) { return Yl.getCustomSymbolComponent("\\array").toModel("array", t, e); }
// St. 408-411（\frac 族 / \binom 族 / \stackrel/\overset/\underset 走同一个动作）
an = function (e, t, r) { return Yl.getCustomSymbolComponent(e).toModel(e, (t || [])[1], r); }
```
  - 参数顺序即 `toModel(name, options, arg0, arg1, …)`：`options` 是 `[...]` 可选参数数组（如 `\sqrt[3]` 的 `3`、`\int` 的上下限），`arg0/arg1` 是花括号参数解析出的 **lines 数组**。各组件自己往里塞槽位：`43369.toModel(e,t,r,n)` → `elements.value = createEditorWith(r)`, `elements.sub1 = createEditorWith(n)`；`68468.toModel(e,t,r)` → `t` 非空塞 `sub1`，`r` 塞 `value`；`49632.toModel("^"/"_", t, r)` → `powerValue`/`indexValue`；`68142.toModel(e,t,r,n)` → `elements["0_0"]/["1_0"]`。
- 通用命令（无结构规则）走 `Fs` 分派：

```js
// 28623.js St. 621-677（节选）
Fs = function (e) {
  switch (e) {
    case "\\lVert": return { type: "single", id: Xl.nextId(), text: "\\left\\Vert" };
    ...
    case "\\tilde": return hc("~");      // 变单字符文本块
    case "\\hat":   return hc("^");
    case "\\quad":  return hc("  ");
    case "\\gets":  e = "\\leftarrow"; break;
    case "\\to":    e = "\\rightarrow"; break;
  }
  var t = Yl.getByName(e), r;
  return t && null == t.type ? hc(t.symbol)                                  // 纯符号 -> 文本块
    : t ? Yl.getCustomSymbolComponent(e).toModel(e)                          // 复合符号 -> 组件模板
    : dc(e);                                                                 // 未知
}
```
- 进 `Fs` 之前 `Bs(e)` 过滤：`\begin \end \item \section \subsection \subsubsection \hline` 不算符号（留给结构规则/文本规则）。
- `dc(e)` = `{ id, type:"unknown-command", text:e }`（`28623.js:1252`）。**未知命令不报错、不丢弃**，保留成 unknown-command block。
- 定界符：`$…$` → `\math-container(displayMode:false)`；`$$…$$`、`\begin{equation|math}`、`\begin{align|align*|gather|gather*}` 等 → `\math-container(displayMode:true)`（`oc()` 还打上 `singleBlock:true, mathContainer:true`）；`\begin{equation*}` 与 `\begin{equation}` 的差别体现在 tag 上。**字面量表里没有 `\[`、`\]`、`\(`、`\)`**，也没有 `\textcolor`/`\color`/`\include`/`\newcommand`；`\begin{未知环境}` 无通用规则（`Ma()` 这个通用 `\begin{X}…\end{X}` 规则在编译产物里**不可达**），会退化成 unknown-command `\begin` + `\group{未知环境名}` + 内容。
- 括号：**`\left(`/`\left[` 导入为纯字符 `single{text:"("}` / `"["`**（`28623.Nr` 里对 `(` `[` 走 `t = e`），`\right)`/`\right]` 同理成 `")"`/`"]"`；`\langle`/`<` → `"\\left\\angle"`，`\|` → `"\\left\\Vert"`，`\lbrace`/`\{` → `"{"`，`\lbrack` → `"["`；即**只有"非普通括号"的定界符才在模型里保留 `\left…` 名字**。`\middle|` → `composite{text:"\\middle|"}`。**左右定界符是两个独立 single block**，不配对成一个容器（配对/伸缩是渲染期的事，见 task-1/task-4）。【已核实：源码 + 离线 harness 实测 `\left( \frac{1}{2} \right)` → `single"(" + \frac + single")"`】
- 上下标：`^`/`_` 规则把"紧跟原子"和"上标内容"一起交给 `\power-index.toModel("^"|"_", atom, [arg0, …])`，所以 `x^2_i` 会尽量合成一个 `\power-index`（`powerValue`/`indexValue`），只有单边时 text 变成 `\power`/`\index`。
- `{...}` 分组 → `\group.toModel(null,null,lines)`；而 `\group` 组件 `isFlatten=true`（`72480.js:48`），`80931.js` 基类 `toModel` 在 `isFlatten && r.length==1` 时**直接返回内部 blocks**（不建 composite）——即 **LaTeX 的 `{}` 分组在导入时被摊平掉**，分组语义改由槽位树承载。
- 数学样式命令 `\mathrm/\mathbf/\ldots/\mathbb/\mathcal/\mathfrak/\mathsf/\mathtt/\mathscr` → 动作 `Ss` 统一转给 `\mathbb` 组件：`getCustomSymbolComponent("\\mathbb").toModel(e, null, t)`，`81676.toModel` 把 `mathType=e` 加到内部 blocks 的 style 上并返回 blocks（**不建 composite**）；导出的 `appendStyleBegin` 再把 `\mathbb{` … `}` 加回去。

### 4) 粘贴 LaTeX
- `11154.js:6847` `onPaste`：`ki.tryHandle`（HTML 表格 → `\table`）→ `xi.handlePasteAsFile` → 否则 `pasteFrom(text/plain)`（普通文本粘贴，可能识别 mathcha/json）。
- **没有"粘贴的文本像 LaTeX 就自动解析"的逻辑**；必须走 `\from-latex` 菜单/对话框（`11154.js:18899`：`"\\from-latex" == e.names[0] → this.getTarget().showImportLatex()`），或右键菜单项 `from-latex`（`11154.js:11921`, `12584`, `12681`）。

## 映射表（内部模型 ↔ LaTeX）

| # | 内部模型（`block.type` / `text` / 槽位） | LaTeX | 依据（module:符号） |
|---|---|---|---|
| 1 | `composite "\frac"`, elements `{value, sub1}`（DOM: enumerator/denominator） | `\frac{a}{b}`；`\cfrac/\dfrac/\tfrac` 只是 `text` 不同 | 43369:`toLatex/toModel/getModelMeta` |
| 2 | `composite "\sqrt"`, elements `{value, sub1?}`（sub1 默认隐藏） | `\sqrt{x}` / `\sqrt[3]{x}`（sub1 空则无 `[...]`） | 68468:`toLatex` |
| 3 | `composite "\power-index"`, elements `{powerValue, indexValue}`；单边时 text=`\power`/`\index` | `_{i}^{p}`（**导出固定先下标后上标**，Lead 实测 `x^{2}_{i}` → `x_{i}^{2}`；`'` 开头的上标特殊处理成 `^{\prime …}`；连续幂运算自动加 `{}` 包裹） | 49632:`toLatex/wrapIfConsecutivePowerIndex` |
| 4 | `single`：普通括号存**纯字符** `"("` / `")"` / `"["`；非普通定界符存名字 `"\left\langle"`、`"\left\Vert"`（左右是两个独立 block） | 组件 toLatex 输出 `\left(`/`\right)`/`\left\langle …`；`block.___normal`（渲染期标记）为真时把 `\left`/`\right` 前缀剥掉成 `(`/`)`；`\left.`/`\right.` 在 `___normal` 时导出空串。**所以 `\left(\frac12\right)` 往返时是否保留 `\left` 取决于上次渲染是否判定为"伸缩括号"** | 68517/90617/52431:`toLatex`；69153:`processNonTextForAll`；harness 实测导入侧 |
| 5 | `composite "\\middle|"` | `\middle| `（`___normal` 时 ` \| `） | 26324:`toLatex` |
| 6 | `composite "\pmatrix"`/`\bmatrix`/`\Bmatrix`/`\vmatrix`/`\Vmatrix`/`\matrix`，`row/column`，`elements["r_c"]` 是 editor | `\begin{pmatrix} a & b \\ c & d \end{pmatrix}`（行间 `\\\n`，单元 ` & `；`\hline` 由 hLines 生成；空行输出 ` \\\\`） | 6720:`toLatex/bracketFromName` + `C()/S()` |
| 7 | `composite "\array"`，`aligns`/`vLines`/`hLines` | `\begin{array}{l|c|r} … \end{array}`（spec 由 `q(e)` 拼） | 47316:`toLatex`; 6720:`C()` |
| 8 | `composite "\cases"` | `\begin{cases} … \end{cases}` | 47316:88/125（`innerToLatex(...,"cases")`） |
| 9 | `composite "\aligned"` / `"\gathered"` | `\begin{aligned}…\end{aligned}`；`\gathered` 单列 `gathered`，多列 `aligned`（列间 ` & & `） | 47316:748/808 |
| 10 | `composite "\binom"`，elements `{"0_0","1_0"}` | `\binom{n}{k}` | 68142:`toLatex` |
| 11 | `composite "\text"`, elements `{textValue}` | `\text{...}`（内部切文本模式转义） | 99588:`toLatex/toModel` |
| 12 | 任意 block 的 `style.mathType = "\mathbb"`（**不是 composite**） | `\mathbb{...}`（`\mathcal`/`\mathfrak`/`\mathsf`/`\mathtt`/`\mathrm`/`\mathbf`/`\boldsymbol` 同理；`\text` 走 mathvariant=normal） | 81676:`toModel`; 69153:`appendStyleBegin`+47858:`styleToLatex` |
| 13 | `style.color` | `\textcolor[rgb]{0.1,0.2,0.3}{...}`（0-1 浮点，保留 2 位） | 47858:`styleToLatex("color")`；27077:`appendStyleBeginForText` |
| 14 | `composite "\math-container"` elements `{mathValue}` + `displayMode` | display: `\begin{equation*}`/`gather*`（有 tag → `equation`/`gather`）；inline: `$…$` 或 `\(…\)`，`\displaystyle` 时加前缀 | 67928:`toLatex/getLatexName` |
| 15 | `composite "\group"` elements `{value}` | `{ … }`（导入时反而被摊平，不保留 composite） | 72480:`toLatex`; 80931:`toModel(isFlatten)` |
| 16 | `composite "\overline"`/`"\bar"`/`"\hat"`/`"\vec"`/`"\overbrace"`… elements `{value}` | `\overline{x}` 等（多数继承 80931 的 `"".concat(getLatextName(),"{",inner,"}")`；`\overline/\bar` 用 `e.text` 保持原命令） | 71219:`toLatex`; 80931:`toLatex` |
| 17 | 普通文本块 `{text:"α"}` 等 unicode 符号 | `\alpha `、`\sum `…（`symbolMapByUnicodeChar` 反查 names[0]，命令后补空格） | 69153:`getForLatexTextCommand`; 98095:`getLatexTextCommandFromUnicode` |
| 18 | 文本块特殊字符 `$ & % # _ { } ~ ^ \` | `\$ \& \% \# \_ \{ \}`、`\textasciitilde `、`\textasciicircum `、`\textbackslash `（数学模式 `~`→`\sim `、`^`→`\hat{}`、`\`→`\backslash `） | 69153:365/390 |
| 19 | `unknown-command` `{text:"\\foo"}` | `\foo `（原样 + 尾随空格） | 28623:`dc()`; 69153:`toLatexLineExtended` |
| 20 | `composite "\raw-latex"` elements `{rawLatexValue}` | 原文照抄（不转义），用于塞任意 LaTeX | 71064:`toLatex` |
| 21 | `single` 定界符对（普通括号=纯字符，特殊定界符=`\left\langle` 等）+ `composite "\middle|"` | 一对 `\left…\right`；是否输出 `\left/\right` 取决于渲染期 `___normal`；括号伸缩由渲染决定，模型不配对 | 28623:`Nr/Yr`; 68517/90617/52431; 69153:`processNonTextForAll` |
| 22 | `composite "\longdivision"`（长除法竖式，`layout`） | 由 `78183` 的 LaTeX-AST 渲染成 `\begin{array}{l|l}…\multicolumn…` 等 | 64027:`toLatex`; 78183:`fromElement` |
| 23 | 行 `tagInfo` | 行尾 ` \tag{...}` 或 ` \notag` | 69153:`toLatexInner` |
| 24 | `composite "\operatorname"` elements `{value}` | `\operatorname{...}` | 83757:`toLatex` |
| 25 | 大型运算符 composite（`"\sum"`/`"\int"`/`"\prod"`/`"\lim"`…），elements `{from, to}` + `isLimitKind` | `\sum\limits_{i}^{n}` / `\sum\nolimits …`；上下限复用 `\power-index` 的序列化（造一个 fake 复合节点喂给它） | 51164:`class H.toLatex/toModel/toMathml` |
| 26 | `composite "\inline-math"`（编辑器插入的行内数学，与 `\math-container` 同一个组件类） | `$…$` / `\(…\)` | 67928:`getSymbolInfo` 两项同一实例 |

（结构化命令的"白名单"= `28623.js` 里 175 个 `va()` 字面量，包括：frac/cfrac/dfrac/tfrac、binom/tbinom/dbinom、sqrt、stackrel/overset/underset、overbrace/underbrace、vec/overrightarrow/overline/widehat/widetilde/hat/tilde/bar/accent 系、cancel/bcancel/xcancel、boxed/fbox、textcircled、xrightarrow 族 15 个、`\left/\right/\middle/\big/\Big/\bigg/\Bigg`、`\begin{...}` 环境矩阵/array/cases/aligned/gathered/align/gather/equation/math/smallmatrix/eqnarray、`\begin{array}{spec}`、`\text/\mbox`、`\operatorname`、`\mathXX` 样式、`$`/`$$`、`\limits/\nolimits`、`\hline`、`\phantom/\vphantom`、`\not`、间距 `\,\:\;\quad\qquad\!`。）

## 关键位置

| module | 符号 | 作用 | 片段（≤15 行） |
|---|---|---|---|
| 69153 | `class x`（导出 `g4`）；单例 `Ay` | 模型→LaTeX 主写出器 | `toLatexFromEditor(e,t,r){return this.toLatexInner(e.lines,t,r)}` |
| 69153 | `toLatexInner` | 行拼装：`\n\n`/`\\`、`\item`、`\section`、`flushleft`、`tag/notag`、多行数学包 array | 见"导出链路 1)" |
| 69153 | `toLatexLineExtended` | 每个 block 的分派 + 跨 block 样式开合 | 见"导出链路 2)" |
| 69153 | `processNonTextForAll` | composite/single → `getCustomSymbolComponent(text).toLatex(...)`；`___normal` 括号降级 | 见 69153:294 |
| 69153 | `processTextForMathMode` / `processTextForTextMode` / `getLatexForSpecialChar*` | 文本转义、unicode→命令、空格/`\kern` | 见"导出链路 3)" |
| 69153 | `class C`（导出 `xx`） | 转换上下文：`unSupportedLatexes`/`preambles`/`theoremKeys` | `addUnSupportedLatex(e){this.unSupportedLatexes.push(e)}` |
| 98095 | `A`（单例 `w`）`getCustomSymbolComponent` | 命令名→组件实例（导出/导入共用路由） | `return this.customSymbolMap[e] || this.extendedCustomMap[e] || this.customSymbolMap["\\not-found-symbol"]` |
| 98095 | `initCustomSymbols()` | ~250 个组件模块的注册表（这就是"命令表"） | `o().map([r(59741), r(45612), r(500), … r(57728), r(66015), ...])` |
| 48440 | `A` | 组件基类：`getModel` 按 `getModelMeta()` 建 composite 与空槽位 | `var r = a.A.createComposite(t.text); keys(t.elements).forEach(n => ... r.elements[n]=createEmptyEditor())` |
| 52431 | `A`（括号基类，`isBracket=!0`） | 32 个 `\left/\right` 定界符组件复用：模型 text=LaTeX 名，导出=名+空格，MathML=`<mo fence>`/`stretchy=!___normal` | `toLatex(e,t,r,n){ return this.getLatextName() + " " }` |
| 70224 | `A` | 模型工厂：`createComposite/createEmptyEditor/createEditorWith/createOneTextEditor/createPureTextLine` | `createComposite(e){return {id:i.Z.nextId(), text:e, type:"composite", elements:{}}}` |
| 43369 | `\frac` 组件 | 分式：`value`/`sub1` 双槽位 | `toLatex(e,t,r){return "".concat(e.text,"{").concat(r.toLatexFromEditor(e.elements.value,t),"}{").concat(r.toLatexFromEditor(e.elements.sub1,t),"}" )}` |
| 68468 | `\sqrt` 组件 | 根式：`value` + 可选 `sub1`（隐藏槽） | `var o = this.isNotExistOrEmptyEditor(n) ? "" : "[".concat(r.toLatexFromEditor(n,t),"]"); return "\\sqrt".concat(o,"{").concat(r.toLatexFromEditor(i,t),"}" )}` |
| 49632 | `\power-index` 组件 | 上下标：`powerValue`/`indexValue`，导出顺序 `_` 后 `^`，撇号合并 | 见 49632:259-283 |
| 6720 | `v`（矩阵基类）/ `C`/`S`/`x`/`A` | 矩阵族共享的 LaTeX 行/列拼装；`convertToHVLines` 把边框/中线转 `\hline`/`|` | `function S(...){... o.join("\\\\\n")}` |
| 47316 | `\cases/\array/\aligned/\gathered` 组件 | 环境族；`q(e)` 生成 `{l|c|r}` spec | `return "\\begin{".concat(n,"}").concat(t,"\n")...` |
| 67928 | `\math-container` 组件 | display/inline 数学容器 ↔ `equation*/gather*/$…$/\(…\)` | 见速览 7 / 11154 `wrapInMathContainer` |
| 99588 | `\text` 组件 | 数学里切文本模式 | `"\\text{".concat(r.toLatexFromEditor(e.elements.textValue, t), "}")` |
| 80931 | 组件基类（`isFlatten`） | 单槽位命令的通用 toModel/toLatex；`isFlatten` 决定导入时是否摊平 | `if (this.isFlatten) { if (1 == r.length) return r[0].blocks; }` |
| 78183 | `class n`（导出 `A`） | LaTeX-AST（raw/group/tabular/environment）→ 字符串 | 见"导出链路 4)" |
| 51737 | `class f`（导出 `A`） | LaTeX→模型入口 `parse(src, startRule)`，吞异常返回 `[]` | 见"导入链路 2)" |
| 51737 | `class d`（`processLines/processLine/handleOneGroup`） | 后处理：合并文本行、`\over`→`\frac`、`\choose`→`\binom`、剥 `\group`/单列 `\gathered` | `o.isOver && (e=this.handleLeftRightEditor(e,"\\over","\\frac"))` |
| 28623 | PEG 解析器（`{Expression: qa, MathExpression: il}`） | 语法本体；175 个 `va()` 字面量 = 支持的命令/环境白名单 | `i = { Expression: qa, MathExpression: il }` |
| 28623 | `Fs` / `Bs` / `dc` / `hc` / `oc` | 命令分派 / 排除名单 / unknown-command / 单字符文本块 / display 数学容器 | 见"导入链路 3)" |
| 35847 | `class g`（导出 `R`） | 模型→MathML AST；`getMathVariant`：`\mathbb`→double-struck 等；颜色→`mathcolor` | `'mi'/'mo'/'mn' 时 (e.mathvariant = i)` |
| 52175 | `class s`（导出 `A`） | MathML AST→React `<math>`，注入 `columnalign/mathvariant/...` 自定义属性；附带隐藏的 `mathmlContainer` span | `generate(e){ var t=i().createElement("math",{display:e.display,xmlns:"…1998/Math/MathML"},…)}` |
| 11154 | `class di`（`:6239`） | From-LaTeX 对话框：防抖解析 + 预览 + `onSuccessfulParse` 插入 | 见"导入链路 1)" |
| 11154 | `getConverter` / `getSelectedLatex` / `requestExportAll` | 导出派发（`latex-latex`/`latex`/`text-only`/`bbcode`） | 见"导出链路 5)" |
| 11154 | `handleExportLatexMathML` / `copyLatexToClipboard` / `generateMathml` | 导出对话框 + 复制 LaTeX/MathML 到剪贴板 | `var s = Mn.H.toLatex(e,{...}); … requestExportDialog(s, a, …)` |
| 11154 | `onPaste` / `pasteFrom` | 粘贴：表格/文件/纯文本，**不解析 LaTeX** | 见"导入链路 4)" |
| 27077 | `class c`（导出 `H`） | `latex-latex` 转换器：文本模式样式 → `\textbf/\textit/\textcolor/\href/\fontfamily` | `getTextType(){return "latex-latex"}` |
| 47858 | `styleToLatex` / `lineStyleToLatex` | 样式→LaTeX（color→`\textcolor[rgb]`；align→flush*/center；listType→itemize/enumerate） | `if ("color"==e){... return "\\textcolor[rgb]{".concat(...)}` |
| 64027 | `LongDivision` 组件 | 长除法专用 LaTeX-AST 生成 | 见速览 14 |

## 不确定 / 待查

1. ~~`\[ \]` 定界符~~ **已证实不支持导入**：`\[ x \]` 与 `\( x \)` 在 MathExpression 语法层抛 `SyntaxError: Expected " ", "!", ",", ":", ";", or [a-zA-Z|] but "[" found`，`51737.parse` 捕获后返回 `[]`（数学模式下的 From-LaTeX 会提示 "Could not parse latex"）；而在 Expression（文档级）模式解析时它们被当普通文本吃掉，于是**静默降级为文本行**（Lead 实测 B 表）。导出侧 `67928` 在 `usingStandardMathWrapper` 时会输出 `\(…\)` —— 导出/导入不对称，属真实缺陷。【已核实（离线 harness + 浏览器）】
2. ~~实际导出的多行 display 公式形态~~ **已由 Lead 实测确认**（见"浏览器实测 A"）：display → `\begin{equation*}…\end{equation*}`；矩阵/cases 的输出与 `6720.C()/S()` 完全同形（`\begin{pmatrix}\n…\\\n…\n\end{pmatrix}`）。多行 display 是否用 `gather*` 仍只有静态依据（`67928.getLatexName`：`lines.length<=1 → equation*`，否则 `gather*`），未单独实测。【已核实（单行）；多行=推测】
3. ~~`\textcolor` 往返~~ **已确认会丢**：导出侧 `47858.styleToLatex("color")` 生成 `\textcolor[rgb]{r,g,b}{…}`，导入侧语法字面量里没有 `\textcolor`/`\color`（Lead 实测：文本模式导入 `\textcolor[rgb]{1,0,0}{abc}` → 整行降级纯文本，0 composite）。即**颜色只能单向导出，回导不回来**。【已核实】
4. **`mathmlContainer`（隐藏 MathML span）无消费者**：`52175.generate()` 返回 `{mathmlContainer, mathml}`，但全 bundle（含拆出的 chunk）都只用了 `.mathml`；`mathmlContainer` 可能是给读屏/A11y 预留或 dead code。`screenReader` 选项同理：没有任何 `new R({screenReader:…})` 调用点。是否用于其它 chunk/版本未知。【推测】
5. **`\begin{未知环境}` 的兜底**：`28623.Ma()` 是通用 `\begin{X}…\end{X}` 规则但**不可达**（无调用点）。实际行为按 startRule 分：(a) MathExpression 下会拆成 `unknown-command("\begin")` + `\group{"X"}` 摊平内容 + `unknown-command("\end")`，导出成 `\begin {X}`（命令后多空格）；(b) Expression（文档级）下整行大概率降级纯文本（同实测 C）。【已核实不可达；后果部分推测】
6. **`___normal` 的精确语义**：它是渲染组件在 `render` 时写回 model 节点的临时字段（`isNormalBracket()` 时 `=!0`），导出据此在 `(` 与 `\left(` 之间切换。哪个 bracket 组件在什么条件下置位，是 task-1/task-4 的细活，这里只确认"导出依赖它"。【核实存在，语义细节待查】
7. **`\over`/`\choose` 后处理的边界**：只处理"同一 line 内、命令前后各成一组"的情况；跨行/嵌套情形未验证。【推测】
8. **`toLatex2`（`68468` 里空实现）**：疑似旧版接口残留，无调用点。【推测】
9. **`11154.js` 里 `getConverter(type)` 只覆盖 `bbcode/latex/latex-latex/text-only`**；而导出对话框的 `getConverterType()` 可能返回 `"internal-latex"`（有 MathML 时 radio 默认值），`getConverter` 未覆盖该 case → 走 default 抛 `"Convert type internal-latexnot supported error"`。实际整篇导出默认是 `latex-latex`，只有"有 mathml 的选区导出 + 切换 radio"这条路径可能踩到，是否真触发未实测。【推测】
10. **MathML 输出是否被用于 copy-to-Word 之类**：本包只有导出对话框复制；剪贴板写入只有 `text/plain`（LaTeX 或 MathML 字符串），没有 `text/html` 的 MathML 复制路径。【核实（剪贴板 API 用法），用途范围待查】
11. **多行 display 的 `gather*` 与 `\tag`**：静态看 `\math-container` 里 `lines.length>1 → gather*`、任一行有 tag → `gather`/`equation`（非 starred）；未在浏览器构造多行 + tag 实测。【推测】
12. **`\left(` 往返的 `___normal` 判定条件**：Lead 实测含 `\frac` 的 `\left(\frac12\right)` 导出**保留了** `\left`；但纯小内容（如 `\left(x\right)`）是否会被判成普通括号而导出 `(x)` 未实测。取决于渲染组件何时置 `___normal`（task-1/task-4 范围）。【推测】
13. **`maxSize`/颜色导出到 LaTeX 的其它 style**：`27077.appendStyleBeginForText` 还处理 `fontName/fontSize/hyperLink/bgColor`，其中 `bgColor` 只输出一个 `{`（无对应命令），推测是留白/占位；未验证实际导出效果。【推测】
