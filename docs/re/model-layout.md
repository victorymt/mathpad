# 数学模型与排版引擎（task-1）

分析对象：`.cache/cdn/bundle-f9164fb5-ced37e37.js` 拆出的 `mathcha-src/modules/*.js`、
`.cache/cdn/styles-f9164fb5-ced37e37.css`、`.cache/cdn/resources/fonts-*.css`。
约定：`11154.js:24129` 表示「module 11154 第 24129 行」；【已核实】=直接看到实现/表数据；
【推测】=由实现合理外推但没逐行确认。

---

## 结论速览

1. 【已核实】文档模型是 `{id, lines:[{id, blocks:[...], style?}]}`；block 有三种形态：
   纯文本 `{id,text}`、`{type:"single",id,text}`、`{type:"composite",id,text,elements:{槽名: editor}}`。
   工厂在 **70224**（`createEmptyEditor/createEmptyLine/createComposite/createSingleBlock`）。
2. 【已核实】`type:"composite"` 的 `text` 就是 LaTeX 命令名（`"\\frac"`、`"\\math-container"`），
   `elements` 的键是**槽名**；槽的值是子 editor `{id, lines:[...]}`（不是 block 数组）。
   模型里**不存 LaTeX 字符串**，只存"命令名+槽+属性"（`toLatex` 才拼串）。
3. 【已核实】composite 除 `elements` 外可带任意附加属性，例如 `displayMode`、`style.mathModeType`、
   `isLimitKind`、`row/column`、`bracketName/size/isClose`、`prefixText`、`tableOfContent:{id,lines}`。
4. 【已核实】槽名不由 parser 硬编码，而由**符号定义类**的 `getModelMeta().elements` 决定；
   全量符号注册表在 **98095**（`initCustomSymbols()` 里 `r(59741), r(43369), r(68468), …` ~250 个模块）。
5. 【已核实】**排版不是 JS 逐 glyph 算坐标，而是 DOM+CSS 流式布局 + 浏览器度量 + post-render JS 修补**：
   line/blocks 是自定义元素（`<math-type><editarea><line><blocks><block>`），
   分数/上下标/根号/定界符各自是 React 组件，输出带 `em` 的 margin/float/flex/vertical-align；
   度量统一走 `getBoundingClientRect`。
6. 【已核实】`delayRenderCache` 的 `{w,h,bl}` = 浏览器实测的行宽/高/基线比例，用于延迟渲染的行占位，
   不是排版输入：`w=round4(widthOf(rect))`、`h=round4(heightOf(rect))`、`bl=round4((baseline.bottom-rect.top)/rect.height)`
   （48397.js:746-764）。
7. 【已核实】公式的"排版后修补"分两条：`postLineProcess` 里 **(a) 定界符对自动伸缩**（量区间内最大顶/底→
   `setHeightInfo` 给开闭括号换字号或换 SVG 拼合）；**(b) 上下标动态定位**（按基块 rect 现算负 margin），
   都在 **48397**。
8. 【已核实】上下标缩放系数 **0.7**（组件里 `fontSizeRatio: .7 * this.props.fontSizeRatio`，CSS 也写 `.7em`）；
   分式 inline 时整体 **0.75**（`.frac-inline{font-size:.75em}`）。
9. 【已核实】字体度量有两套：**19340** 是预烘焙的数学字体 MATH 表（`unitsPerEm:1000, axisHeight:280,
   scriptGapMin:200, radicalRuleThickness:76, …` + 每个 glyph 的 `path/bounds/width` + `vertical/horizontal`
   变体+拼装件），供 Fira/opentype 渲染器用；用户自定义文本字体才用 **45896**（Typr.js）运行时解析 OTF/TTF。
10. 【已核实】可伸缩零件（大括号/根号/花括号/箭头/重音）用 SVG `<path>`：变体选择/拼装算法在 **59769**
    （MATH variants → parts assembly，含 connector overlap），绘制变换在 **7258**
    （`translate(x - bounds[0]*s, y + bounds[3]*s) scale(s, -s)`，Y 轴翻转）。
11. 【已核实】`\left( … \right)` 在模型里**没有** left/right 节点，也没有定界符信息：
    PEG parser 把 `\left(`/`\right)` 降级成 `{type:"single", text:"("}`/`")"`（28623.js:300-306）；
    这些 single 的 symbol 组件（68517/90617）反过来把 `toLatex()` 固定写成 `\left(`/`\right)`，
    所以**导出时所有括号都变成 `\left(…\right)`**（渲染期一律自动伸缩，语义等价）。
    `\bigl/\bigr` 才是 composite（`bracketName/size/isClose` 属性，非槽）。
    渲染器还会往模型上写运行时标记 `___normal`（63869.js:100），供 MathML 导出判断 stretchy。
12. 【已核实】数学模式行高来自页面设置 `mathLineHeight`（默认 1.2，77664.js:60）作为 CSS `line-height`；
   行内间隙/上下标的"条带"补偿用常量 `upperSmallMarginTopEm:-0.24`、`lowerSmallMarginBottomEm:-0.15`（3897.js）。

---

## 数据流

**模型侧**：`LaTeX 字符串` --(PEG parser 28623 / 模板注册表 98095 `getModelByInfo`)-->
`composite/single/text block` --(插入服务 41587 `insertInput` → 模型编辑原语 13620 `insertModelAt`)-->
`{id,lines,blocks}` 树（存进 .data/store.json）。

**渲染侧**：模型树 → React 组件树（`<math-type>` 容器 → `<line>` → `<blocks><baselineblock/>` +
每个 block 的 `getViewComponent()`）→ 浏览器 CSS 流式布局（float/flex/em margin/字号缩放）
→ `postLineProcess`（48397：定界符配对伸缩 + 上下标动态 margin，读 `getBoundingClientRect`）
→ `storeCacheSize` 写 `delayRenderCache{lineId:{w,h,bl}}` → 屏幕。

**导出侧**（45896 `exportSvg`/`generateToStr`）：遍历同一 DOM，把文字 run 用 Range 逐字求 rect，
转成 SVG `<text>`（普通字体）或 `<path>`（自定义字体，Typr `glyphsToPath`，x 累加 hmtx advance + GPOS kern）。

```
LaTeX ──28623──┐
               ├─► {id,lines:[{id,blocks}]} ──41587/13620──► 树(增删槽)
模板 ──98095────┘            │
                             ▼
                   React 组件(25742 base) ─► DOM/CSS 流布局
                             │                 ▲ getBoundingClientRect 度量
                             ├─ postLineProcess(48397) ─┘
                             │    ├ 定界符对伸缩(71074/334/57858/7258)
                             │    └ 上下标动态定位(65507 + 48397 z 类)
                             ▼
                     delayRenderCache{w,h,bl} ──► 懒/延迟渲染占位
                             │
                             ▼
                     导出 exportSvg(45896) ──► SVG/PNG/PDF
```

---

## 关键位置

| module | 符号名 | 作用 | 证据片段（节选） |
|---|---|---|---|
| 70224 | `a.createEmptyEditor/createEmptyLine/createComposite/createSingleBlock` | 模型工厂 | `return {id: i.Z.nextId(), lines: [{id: i.Z.nextId(), blocks: []}]}` / `{id, text: e, type:"composite", elements:{}}` |
| 30803 | `nextId()` | id 生成 | `nextId() { return "n" + Math.random(); }` |
| 28623 | PEG parser：`v`、`Nr`、`kr`、`Wr` | LaTeX→模型（import） | `Nr = e => { var t="\\left"+e; … return {type:"single", id: Xl.nextId(), text:t} }` |
| 98095 | `initCustomSymbols()` / `getModelByInfo` / `getCustomSymbolComponent` | 符号注册表：latex名→定义类 | `o().map([r(59741), r(43369), r(68468), …, r(84503)], e=>e.default\|\|e)` |
| 48440 | `getModel/getModelMeta/getSymbolInfo/fillSymbolInfo/toLatex` | 符号定义基类（Sc） | `getModelMeta(){return {text, keyInsertOnSelection, elements:{value:{onRemove:"all"}, sub1:{…}}}}`（43369 实例） |
| 25742 / 83846 | `class P`（`getCompositeBlockStyle/render/renderBaseLine/getMathFontSizePixel`） | composite 视图基类 | `render(){return createElement("compositeblock",{dir:"ltr",style:getCompositeBlockStyle()}, renderBaseLine(), renderComponentBase())}` |
| 48397 | `class he extends g`（line）、`class q`（定界符处理）、`class z`（上下标定位）、`class K.process` | 行渲染 + post-render 修补 + 度量缓存 | `renderForRoot(){ return createElement("line",{style:getBaseStyle(...)}, prefix, createElement("blocks",{dir}, createElement("baselineblock",{className:"inline"}), blocks)) }` |
| 30929 | `getTextBlockInfo / resolveVaryCategory / buildClassForOperatorName` | 文本字符→原子类别→CSS 间距类 | `return {text:d, category:h, key:e.id+""+c}`；`"Binary"/"Relation"` 类名 |
| 43369 | `class m`（fraction-symbol） | 分式视图 | 分子 `style:{marginBottom:getRoundEmStr(-.5)}`；分母 `{marginTop:getRoundEmStr(-.41)}`；`.75em`+`verticalAlign .35em` |
| 49632 | `class k`（power-index-symbol-container） | 上下标视图 | `fontSizeRatio: .7 * this.props.fontSizeRatio`；`mgBottomEm/mgTopEm` 来自 managedState |
| 65507 | `o=FF, s=Ac` | 上下标固定位移常量 | `FF={marginBottomEm:-.885714, marginTopEm:-.60899}`；`Ac={marginBottomEm:-1.065714,marginTopEm:-.747899}` |
| 68468 | `class C`（sqrt-symbol） | 根号视图 + 度量修补 | `contentOffsetEm = (0,y.V9)(font, radicandHeightEm)`；`paddingTop: .25em`；index `fontSizeRatio:.7` |
| 71074 | `class i.constructManageState` | 括号伸缩状态 | `height: Math.ceil(a)/r+"em"`；`hiddenSpanMarginTop: Math.round(e-1.05*r)/r+"em"` |
| 334 | `bracketWitdhFromHeight/fontSizeEmByHeight` | 括号字宽/字号放大系数 | 括号宽 `.45*fontSize`；paren `0.8+min(.2,(h-f)/250)`；brace `0.6+min(.5,(h-f)/140)` |
| 57858 | `class u`（`vcomposed-symbol`） | legacy 拼合括号/花括号（3/5 部件） | `<vcomposed-symbol><start/><middle><fixed>…</middle><end/></vcomposed-symbol>`，margin 在 CSS |
| 27332 | `class w`（big-delimiter-symbol）+ `class E` | `\bigl/\bigr` 定界符 | `"big":1.5,"Big":2.2,"bigg":2.9,"Bigg":3.6` em；`bracketName/isClose` 属性 |
| 19340 | 字体 profile 表 `i/s/u/g`、`zN/getFontSource` | 数学字体 MATH 常量+glyph 轮廓 | `const i={unitsPerEm:1000, axisHeight:280, scriptGapMin:200, radicalRuleThickness:76, …}`；profile `Fira.source=()=>i` |
| 59769 | `H` = getMathVariant | MATH 变体/拼装选择 | `variants.find(e=>e.advance>=r)`；否则 `parts` 组装：`extent`/`overlaps`/`repeats`/`fit` |
| 7258 | `si/_S/f/renderGlyph`、`class y/x`、`class A/E`(radical polygon) | 定界符/根号/花括号/重音 SVG 绘制 | `transform:"translate(x- b·s, y+ b3·s) scale(s,-s)"`；根号规则线 `rect{x:l-c,y:0,width:e-l+c,height:c}` |
| 71311 | `V9/Ul/lM/Zy/tc/b1/Vu` | 字体度量→CSS em 的换算 | `(n.bounds[2]-n.bounds[0])*n.fit/unitsPerEm + contentGapEm`；`scriptGapMin/unitsPerEm/scripts.scale` |
| 51164 | `class A/E`（lim-like editor style）+ `class H`（meta `from/to`） | `\int/\sum` 上下限布局 | `rawGetEditorStyleAsana("from","limit","inline","editor")→{marginLeft:.2,marginBottom:.05}`；`f("to",…)→{marginLeft:-.2,marginRight:.2,marginTop:.23}` |
| 67928 | `class S`（math-container-symbol）+ `class O` | `\math-container/\inline-math` | `getModelMeta(){text:"\\math-container", keyInsertOnSelection:"mathValue", elements:{mathValue:{onRemove:"all"}}}`；`getCompositeBlockStyle` 里 `fontSize: mathFontSizeBase*n` |
| 41587 | `class V.handleBySymbolInfo/insertInput/insertInputToLine/handleConfirmDelete` | 插入/删除入口 | `r=Je.A.getModelByInfo(e); n=this.insertInput(r,t,e)`；`onRemove` 决定删槽还是删整个 composite |
| 13620 | `class _`：`insertModelAt/insertLinesAt/removeCharAt/splitLineAt/joinBlocksIfPossible` | 模型编辑原语 | `insertModelAt(e,t,r,n)` → `handle_Insert{Text,Non}_Current{Text,Non}` |
| 90437 | `getTabularCellIndexFromKey` | 表格/矩阵槽名 | `/^[0-9]+_[0-9]+$/`，`{row,column}` |
| 45896 | Typr `y/v.U.glyphsToPath`、`exportSvg/generateToStr`、`class J`(baseline probe) | 文本字体解析 + 导出 | `n += o.hmtx.aWidth[s]; n += v.U.getPairAdjustment(o,s,a)`；`J(font)` 用 800px 的"A"测基线比 |

---

## 细节

### 1. 文档 → 行 → block 结构

【已核实】工厂（70224.js:30-116）：

```js
createEmptyEditor(e) { return { id: e || i.Z.nextId(),
  lines: [{ id: i.Z.nextId(), blocks: [] }] }; }
createEmptyLine()  { return { id: i.Z.nextId(), blocks: [] }; }
createComposite(e) { return { id: i.Z.nextId(), text: e, type:"composite", elements: {} }; }
createSingleBlock(e){ return { type:"single", id: i.Z.nextId(), text: e }; }
createPureTextLine/createLineFromBlocks/createEditorWith…
```

- **纯文本 block**：`{id, text}`，**没有 type**。`isTextBlock` 判据就是"没有 type"（11154 里到处是
  `p.A.isTextBlock(e)`）。字符级样式挂在 block 的 `style` 上。
- **single block**：`{type:"single", id, text}`。语义 = "一个不可拆的符号/字符"，`text` 可能是
  `"("`、`"\\int"`、`"\\left("` 变体等；它是 bracket 自动伸缩的候选（`opensymbolblock/closesymbolblock`）。
- **composite block**：`{type:"composite", id, text, elements:{槽名: {id, lines}}}`；
  还可能带非槽属性（见 §3）。`text` 是 latex 名，渲染时 `getCustomSymbolComponent(text).getViewComponent()`
  （48397.js:1140-1153）。

【已核实】Lead 实测原文与上面的判断一致（`\frac` → elements.value/sub1，`\math-container` → elements.mathValue，
`displayMode:false`、`style.mathModeType:"\\displaystyle"`，行/块 id 为 `n0.xxxx`）。

【推测】root 编辑器 id `r0.xxxx` 的生成代码不在拆分后的 bundle modules 里（只在样例 JSON 字面量中出现，
`grep "r0\."` 仅命中示例），应来自 app 外壳/服务端；子节点 id 一律是 `n + Math.random()`（30803.js:27）。
另外 30803 里的 `w.nextIdByPreviousId()` 只用于 diagram 类 id（`de/dc/da/...`）。

### 2. `\math-container` / `mathValue` 的层级

【已核实】67928（`class O` = MathContainerSc）：

```js
getModelMeta(){ return { text:"\\math-container", keyInsertOnSelection:"mathValue",
  elements:{ mathValue:{ onRemove:"all" } } }; }
toModel(e,t){ return { id:h.w.nextId(), type:"composite", text:"\\math-container",
  displayMode:e, elements:{ mathValue:{ id:h.w.nextId(), lines:t } } }; }
```

视图（class S）：`containerClassName="math-container-symbol role-mathmode-area"`，
`displayMode` 影响：`noAreaContainer`、`allowTag`、`inlineMath:!displayMode`、
`style.mathModeType=="\\displaystyle"` 视为 display 公式；
`getCompositeBlockStyle()` 里 `fontSize: mathFontSizeBase * ratio`（数学字号基线）。

嵌套样例（Lead 实测 + parser 6281 行）：

```
root {lines:[ {blocks:[ {text:"f"},
  {type:"composite", text:"\\math-container", displayMode:false,
   elements:{ mathValue:{id, lines:[{blocks:[ {text:"f"},
     {type:"composite", text:"\\frac",
      elements:{ value:{id,lines:[{blocks:[{text:"a"}]}]},
                 sub1 :{id,lines:[{blocks:[{text:"b"}]}]} } } ]}]} } } ]} ]}
```

即：**公式 = block 树**；一个 display 公式是 composite(`\math-container`) 里一个 `mathValue` editor，
`mathValue.lines[*].blocks` 才是真正公式内容。`\inline-math` 是同一模块的另一个 names 项（displayMode:!1）。

### 3. composite 槽位表（代表性 ≥20）

【已核实】来源：`getModelMeta().elements`（脚本 `scratch/model-layout_slots_final.json` 汇总）
＋ 51164 的 integrals ＋ 90437 的 tabular 键。`text` 为 `this.getLatextName()` 的按实际 latex 名代入。

| latex / 符号 | module | 槽名（顺序=插入/遍历顺序） | 备注 |
|---|---|---|---|
| `\frac`（含 `\dfrac/\tfrac/\cfrac`） | 43369 | `value`, `sub1` | 分子/分母；DOM class 才叫 enumerator/denominator |
| `\sqrt` | 68468 | `value`, `sub1` | `sub1`=根指数，`defaultHide:true, onRemove:"only"` |
| `\power-index` | 49632 | `powerValue`, `indexValue` | 上下标同体 |
| `\power` / `\index` | 53109 / 8444 | `powerValue` / `indexValue` | 只有单边 |
| `\int` 等积分/大运算符 | 51164(`class H`) | `from`, `to` | `isLimitKind` 属性决定 limit/non-limit |
| `\overunderset` | 91360 | `value`, `sub1`, `sub2` | 上/下同时 |
| `\stackrel`/`\overset`/`\overbrace` | 6604 / 48939 | `sub1`, `value`（brace 为 `value`,`sub1`） | brace 的注释挂 `sub1` |
| `\underset`/`\underbrace` | 59082 | `value`, `sub1` | |
| `\bra`/`\ket`/`\braket`/`\expval` | 70536 | `value`, `sub1`, `sub2` | ⟨⟩ 结构 |
| `\math-container` / `\inline-math` | 67928 | `mathValue` | |
| `\multiline` | 28979 | `mathValue` | |
| `\text` | 99588 | `textValue` | 文本模式子编辑器 |
| `\text-mode-group` / `\text-mode-group-inline` / `\math-mode-group` | 79787 / 22647 / 23148 | `value` | |
| `\raw-latex` | 71064 | `rawLatexValue` | |
| `\boxed`/`\boxed-container`/`\inline-boxed` | 78518 / 64412 / 80482 | `value` | |
| `\super-script` / `\sub-script`（文本模式） | 66015 / 9340 | `tsuperValue` / `tsubValue` | 与数学上下标分开 |
| `\textcircled` | 12215 | `value` | |
| `\underline-section` | 13376 | `ulvalue` | |
| `\exercise` | 1318 | `question`,`hint`,`solution` | |
| `\z-schema` | 57728 | `name`,`symDec`,`conPre` | |
| `\fracslashed` | 71289 | `value` | |
| `\longdivision` | 64027 | `quotient`,`divisor`,`divident`,`r_0`,`r_1` | |
| `\table-of-content-item` | 64722 | `value` | |
| `\mci-cas-item` | 84503 | `value` | |
| `\theorem` | 33564 | `theorem` | |
| `\image-container` | 56599 | `caption` | |
| 表格/矩阵（`\table`/`\matrix`/`\binom`…） | 90437 规则 | 单元格键 `"row_col"`（如 `0_0`，正则 `/^[0-9]+_[0-9]+$/`） | 行/列数存 block 的 `row/column` 属性 |

【已核实】另有"伪槽顺序表" `Pu`（11154.js:24127-24134），用于光标在槽间跳转：

```js
var Pu = {
  "\\frac": ["value","sub1"], "\\int": ["from","to"], "\\leftarrow": ["top","bottom"],
  "\\power-index": ["powerValue","indexValue"], "\\sqrt": ["sub1","value"],
  "\\overunderset": ["sub1","value","sub2"], "\\stackrel": ["sub1","value"],
  "\\underset": ["value","sub1"]
};
Pu["\\rightarrow"]=Pu["\\leftarrow"]; Pu["\\overset"]=Pu["\\stackrel"]; Pu["\\overbrace"]=Pu["\\stackrel"]; …
```

注意 `\sqrt` 的遍历顺序是 `["sub1","value"]`（先根指数），而 `\frac` 是 `["value","sub1"]`。
`\leftarrow/\rightarrow` 的 `top/bottom` 是箭头上下标注槽（在 11154 的分类里属 extended symbols）。

【已核实】`\left…\right` **不是** composite，且**模型里不保存定界符信息**：

- parser（28623.js:300-313）：`Or="\\left"`、`Dr=va("\\left")`；`Nr` 把 `\left(`、`\left[` 等分别降级为
  `{type:"single", id, text:"("}`（`"["`、`"("` 直接取原字符；`\left\{`→`\{`；`\left\langle`→`\left\angle` 之类的特例也在 `Nr` 里）。
- 这些 single 块的符号定义是 **68517**（`OpenParenthesis`）与 **90617**（`CloseParenthesis`），
  它们继承 **52431**（括号基类：`constructor(){ this.isBracket = !0 }`，`toMathml` 用 `e.___normal` 决定
  `stretchy:false`，`getModel()` 返回 `{type:"single", text:getLatextName()}` 的**反例**——68517/90617 覆写成
  `text:"("`），并把 `toLatex()` 固定成 `"\\left("` / `"\\right)"`：

```js
// 68517.js
class s extends n.A { bkType(){return "parenthesis"} bracketText(){return "("} delimiter(){return "open-parenthesis"} }
class a extends o.A {
  getLatextName(){ return "\\left("; }
  getModel(){ return { id:i.w.nextId(), type:"single", text:"(" }; }
  getSymbolInfo(){ return this.fillSymbolInfo({ type:"single", names:["\\left(","("],
    description:"Height adjust automatically by its content" }); }
  toLatex(){ return "\\left("; }
}
```

  → **结论**：模型不区分 `(` 与 `\left(`；**所有括号都是自动伸缩组件**，导出统一写 `\left(`/`\right)`。
  这解释了"导入 `\left(\frac12\right)` 再导出仍是 `\left(`"。渲染器 `renderBracket()` 会写运行时标记
  `this.props.data.___normal = !this.isNormalBracket()`（63869.js:100），MathML 导出据此设 `stretchy`。
  （Lead 实测导出 `\left(...\right)` 与此一致；DOM 里是 `opensymbolblock/closesymbolblock`，不是 `.big-delimiter-symbol`。）

`\middle` 才是 composite `"\\middle|"`（`Wr`，28623.js:315-319）。
`\bigl/\bigr/\Big…` 是 composite（27332），0 个槽，靠属性 `bracketName`(brace/bracket/vert/angle/ceil/floor/arrow…)、
`size`("big"/"Big"/"bigg"/"Bigg")、`isClose`。

### 4. 槽位的增删语义（meta 字段）

【已核实】`getModelMeta().elements[slot]` 支持：

- `onRemove: "all"` → 在槽首退格时**删除整个 composite**（把上级 editor 收缩）；
- `onRemove: "only"` → 只删这个槽（如 `\sqrt` 的根指数、`\int` 的 from/to）；
- `onRemove: "not"`（如 1318 的一部分）→ 保槽；
- `defaultHide: true` → 初始不建该槽（`\sqrt.sub1`、`\int.from/to`），选中时可点 `+` 创建（68468 `onSettingClick`）；
- `keyInsertOnSelection` → 选中该 composite 后键入文字时插入哪个槽（缺省 = 第一个 key）；
- `keyInsertCursor`（68468）→ 插入模板后光标落到哪个槽；
- `noInnerInsert` / `noInnerRemove`（41587.handleConfirmDelete、assignRemovedLine 中检查）。

证据（tab 删除/退格，41587.js:632-661）：

```js
var r = p.A.getMetaDataByName(e.compositeParent.text);
if (!r || r.noInnerRemove) return null;
if (!r.elements[e.compositeKey]) return null;
var n = r.elements[e.compositeKey].onRemove;
return "only"==n||"all"==n ? { customData:{ key: "only"==n ? e.compositeKey : void 0 } } : void 0;
```

插入模板（11154.js:3814 起 `handleBySymbolInfo`）：

```js
var r = Je.A.getModelByInfo(e);          // 注册表按 getModelMeta 建 composite + 空槽 editor
var n = this.toKeyHandledResult(this.insertInput(r, t, e), { clearHiddenIputText:false });
```

`insertInput`（41587.js:278）→ `insertInputToLine`（41587.js:413）→ `insertModelAt`（13620.js:788）→
`insertModelAtNormal` 按光标位置分派 `handle_InsertText_CurrentText / handle_InsertNon_CurrentText /
handle_InsertText_CurrentNon / handle_InsertNon_CurrentNon`（13620.js:744-787）。
文本块合并/拆分：`splitBlock`、`joinBlocksIfPossible`、`joinBlocksAndNormalizeStyleForLine`（13620.js:520-548）。
`\power`/`\index` 与积分限的合并特例在 13620 `class h.merge`：已有 `\int` 时再插 `\power` 会 `appendPowerIndexForIntegralLike(…,"from")`。

### 5. 排版引擎总述：DOM/CSS 流 + 浏览器度量 + JS 修补

【已核实】三个关键层：

1) **容器**：`<math-type>`（45896/48397 相关 CSS：`math-type{display:block;position:relative;…}`）。
2) **行**：`<line class="root|text-mode …"><prefix/><blocks dir="ltr"><baselineblock class="inline"/>…blocks</blocks></line>`
   （48397.js:997-1012 `renderForRoot`，1027-1043 `renderForTextMode`，1045+ `renderForMathMode`）。
   `line` 的 CSS 来自 `getBaseStyle`：数学模式 = `getCacheBaseStyle(pageSettings.mathLineHeight,0,0)`；
   文本模式 = `style.lineHeightEm || textLineHeight` + spacing（48397.js:990-993）。
3) **block**：composite 渲染成 `<compositeblock>`（25742.js:281-296 `class P.render`）：

```js
render() {
  var r = f()(this.getClassName(), { selected:t, inline:this.isInlineMode() }, this.baselineClass);
  return o().createElement("compositeblock", { dir:"ltr", id:this.props.id,
    style:this.getCompositeBlockStyle(), ref:this.getCompositeInstance, className:r },
    this.renderBaseLine(), this.renderComponentBase());
}
```

**基线**：每行第一个子元素是 `<baselineblock class="inline"/>`（CSS `baselineblock{width:0;height:0;
display:inline-block;overflow:hidden}`），它的底边即基线。个别"整块是表格/伸缩件"的 composite 用
`useCustomBaseLine()=true` 额外渲染 `<base-line-indicator>`（一个隐藏的 "a"，CSS `height:inherit`），
再用 `updateBaseLine()` 设 `margin-top: getBaseLine()/fontSize + "em"` 把它对到父基线
（25742.js:218-243；实现者：13067 矩阵、27332 大定界符）。`big-delimiter` 的
`baseLineIndicatorStyle(){marginTop:"-0.2em"}`（27332.js:72-75）。

**宽度/高度不靠 JS 累加**：行宽高、每个 block 的 rect 全部由浏览器给出，代码里到处是
`getBCRect/getBCHeight/getBCWidth/getBCWidthHeight`（60693 模块）；`maxTopBottom`、`isLeftOverlaped`、
`updateBaseLine` 都读 DOM 后再设 CSS。

### 6. 分式（\frac）的排版

【已核实】视图组件 43369 `class m`（`containerClassName="fraction-symbol"`）。结构（renderComponent）：

```jsx
[ <Editor editarea-line className="frac-edit-area enumerator" style={{marginBottom:getRoundEmStr(-0.5)}}
          fontSizeRatio={o} fracLevel={fracLevel+1} noAreaContainer noSpacingRule />,
  <div className="frac-line"><inline style={{borderBottom:"solid Npx"}}/></div>,
  <Editor ... className="frac-edit-area denominator" style={{marginTop:getRoundEmStr(-0.41)}} ... /> ]
```

- 线宽：`getLineThickness() = Math.max(1, Math.round(getMathFontSizePixel()/17))`（25742.js:70-72）。
- 缩小版（`shouldBeSmaller()` = inline 且一级 / `\tfrac` / 嵌套 fracLevel>0）：
  `fontSizeRatio=0.75`，分子 `{marginBottom:-0.4em, paddingTop:0.05em}`，线 `{verticalAlign:"0.35em"}`，
  分母 `{marginTop:-0.57em, marginBottom:-0.05em}`；`noSpacingRule` 打开（内部不再加原子间距）。
- 居中靠 CSS：`fraction-symbol{vertical-align:baseline;margin-left:.1em;margin-right:.1em}`；
  `>editarea{text-align:center;min-width:.6em}`；`.enumerator{float:left;clear:both;width:100%}`；
  `.frac-line{clear:both}`，`.frac-line>inline{vertical-align:.25em;border-bottom:1px solid;width:100%;display:inline-block}`；
  `.denominator{float:left;width:100%;margin-top:-5px}`（后被 inline style 覆盖）。
  → 分子/分母各占整宽（因此天然水平居中），靠负 margin 贴近分数线。
- `getRoundEm(x) = getEmRound(x, mathFontSizePixel)` = 按像素取整后的 em（25742.js:197-199），
  所以 inline style 常见 `-0.235294em` 这类"像素整数化"数值（Lead 观测一致）。

### 7. 上下标（\power-index）：缩放、固定与动态位移

【已核实】组件 49632 `class k`：
- 上标 `powerValue`、下标 `indexValue`，槽值 editor；
- 字号：`fontSizeRatio: .7 * this.props.fontSizeRatio`（单字符走轻量组件 68657 也一样），
  CSS 也写 `.power-value>line / .index-value{font-size:.7em}`；上标/下标默认框高 `.7em` 内再微调；
- 结构：`[renderTop(), <middle-base><inline/></middle-base>, renderBottom()]`——
  用一条 `middle-base` 作为基块占位，上标 `float:left;clear:both` 浮到上一行，下标 `float:left` 到下一行
  （CSS `>.power-value{float:left;clear:both;text-align:left}`、`>.power-value.small>line{margin-bottom:-.35em}`）。
- 位移：`mgBottomEm/mgTopEm` 来自 `managedState`（65507）：

```js
var o = { marginBottomEm:-.885714, marginTopEm:-.60899 };   // FF：上下标都有
var s = { marginBottomEm:-1.065714, marginTopEm:-.747899 }; // Ac：只有一边
```

这两个常量作用在"基块是普通字符"的情形（`handlePowerIndexForNormalCharAttached`，
48397.js:355-368；且会用字体特定修正 `(0,j.tc)(fontFamily)` 微调 marginTop，
`tc = u`: `scriptGapMin/unitsPerEm/scripts.scale`，71311.js:90-95）。

- **动态定位**（真正常用的路径，48397.js:300-345 `class z`）：
  基块若有 `getPowerIndexInfo()`（大括号、根号、积分等）直接取它给的 rect；否则量基块 rect 与自身 rect：

```js
a = baseRect.top - ownRect.top;   c = ownRect.height - a;      // halfTop / halfBottom
O = 基块 fontSize;  [E,k] = 上/下标实际 fontSize;  D=O/E; P=O/k;
// 基块"视为普通字符"(u)：
both: {marginBottomEm:(a/O-1.6)*D,  marginTopEm:(c/O-.58)*P}
one : {marginBottomEm:(a/O-1.75)*D, marginTopEm:(c/O-.63)*P}
// 否则：
both: {marginBottomEm:(a/O-1.4)*D,  marginTopEm:(c/O-.57)*P}
one : {marginBottomEm:(a/O-1.51)*D, marginTopEm:(c/O-.53)*P}
// 左移重叠（prime 情形）：marginLeftEm:-.1
```

  这些设置通过 `setManagedState()` 触达 49632 的 `wrapBlockStyleWithManagedState()`
  → `marginLeft: marginLeftEm+"em"`，上下标 editor 的 `mgBottomEm/mgTopEm`。
- **斜体校正/prime**：若上标是 `'`/`′`/`″`/`‴`/`⁗`，用 `(0,S.Zy)(font, text)`（71311 `p`）
  取 `scripts.primeMargins`（`"''"`:0.5, `"'"`:0.25, `"′"`:0.3,…, Fira 用 `source().primeWidths`），
  设 `marginLeft:-"r"em; minWidth:r+0.1em`（49632.isLeftOverlaped/getCompositeBlockStyle）。
  → 这就是"上下标相对斜体校正"的落点（用 prime 的视觉宽度做左移，而不是读取字体 italic correction）。
- **条带补偿（strip）**：行渲染时若该行没有"高字符/低字符"，给行加
  `marginTop: stripUpEm|upperSmallMarginTopEm(-0.24)` 或 `marginBottom: lowerSmallMarginBottomEm(-0.15)`
  （48397.getRenderBlocksInfo，3897.js 常量；度量由 53778 `fillMetricsForTextBlock/fillMetricsForNonTextBlock` 收集）。

### 8. 根号（\sqrt）

【已核实】组件 68468 `class C`：
- 结构：`[<sqrt-top>{根指数 sub1 editor, fontSizeRatio .7}</sqrt-top>,
   <sqrt-edit><Editor value style={{marginTop:.1em, marginLeft:(contentOffsetEm||t)+"em"}}/>
     <sqrt-symbol-line>(SVG/多边形绘制)</sqrt-symbol-line></sqrt-edit>]`；
- 容器 `paddingTop: .25em`（`calculateSqrtPaddingTop`）；`radicalHeightEm` 初值 1.2
  （`radical.initialHeightEm`），渲染后 `afterReactRenderWhenDataChanged` 里由
  `calculateSqrtSymbol()` 量 `sqrtEdit` 实际高度重算，并：
  `contentOffsetEm = (0,y.V9)(font, h/fontSize)`（71311 `V9`）
  = `(variant.bounds[2]-bounds[0]) * fit / unitsPerEm + font.radical.contentGapEm`（Fira gap .08em），
  再把 radicand editarea 的 `margin-left` 设为该值——即**根号符号占用的水平空间由字体度量算出**。
- 根指数：`sqrtTop` 的 `margin-right` 来自 `(0,y.lM)(font, height, fontSize)`（71311 `lM`），
  样式来自 `(0,y.Ul)(font, radicalHeightEm)`（71311 `Ul`：opentype 走 `US`，legacy 走
  `legacyDegreePaddingBottom`）——`US` 返回 `{paddingLeft:kernBeforeEm, marginRight:kernAfterEm,
  minWidth:max(0,-kernAfterEm), paddingBottom:hookTopEm+clearanceEm}`（7767.js:41-50 常量
  `{hookTopEm:.85, clearanceEm:.1, kernAfterEm:-.7, kernGrowthPerEm:1/8, kernGrowthMaxEm:.25}`）。
- 根的画法两种（7258.js:520-545 `renderer` 注册表）：
  - `legacy`：SVG `<polygon>`，点由 `class A(asana)/class E(sans)` 的 `getPoints(fontSize,height,width)`
    计算（基准点数组 `[16,596,218,488,425,927,745,23,1590,23,…]`，按 18/字号 缩放、平移、并求谷点；
    `n=18/e*43`、`i=t/18/5` 等常量在 `class C`）；线宽用 `radicalRuleThickness`。
  - `opentype`：`class x` 用 `(0,d.H)(fontSource,"√",height/scale)` 选变体/拼装，
    并画规则线 `rect{x:l-c, y:0, width:max(0, contentW-l+c), height:c}`，`c=radicalRuleThickness*scale`，
    `l=√glyph宽*scale`（7258.js:200-220）。
- `\sqrt` 的 `value/sub1` 顺序、`defaultHide` 见 §3；导出 `\sqrt[sub1]{value}`（68468.toLatex）。

### 9. `\left…\right` 自动伸缩 & 大定界符

【已核实】行渲染完成后（`postLineProcess`，48397.js:772-786），对整行执行定界符配对处理
（`class q`/`class K`，48397.js:410-700）：

1. 扫描 blocks：`findOpenCloseSymbolInfo(c)` 得到 open/close/middle（516.js:557；`isOpenCloseSymbol`
   来自 97372）；open 入栈（记 `level` 嵌套），close 弹出并 `processPair`；`\middle|` 进入 middleStack；
2. `maxTopBottom(blocks, openIdx+1, closeIdx, baselineY)`：对区间内每个 block 取
   `reactInstance.getVerticalInfo(fontSize)`（heightTop = 基线以上，heightBottom = 以下），
   特殊：`PowerIndex` 直接跟在 open 后 / `PreScript` 紧邻 close / middle / 字符 / anchor 等跳过；
   连续全是可忽略 block（`segmentToIgnore`）→ 不伸缩；
   `PowerIndex` 的 top 额外减 `fontSize/7` 再比；
3. 两边各加 `fontSize/10`；花括号 `brace` 用 **对称模式**（`getSymmetricBracketHeightInfo`：
   `halfTop = h - r/8`, `halfBottom = d + r/8`，`r=fontSize`），其它用不对称；
   `setHeightInfo(maxTop,maxBottom,fontSize,isSymmetric)` 通知每个括号（`74074/71074` state）；
4. `class z`(H).update 更新紧邻的 `\power-index`/pre-script 的 managedState（把上下标按新括号高度重定位）。

【已核实】括号状态怎么变成尺寸（71074.js:9-33）：

```js
if (symmetric) { var u = n.A.getSymmetricBracketHeightInfo(e,t,r);
  d = u.halfTop - r/10; h = u.halfBottom + r/10; a = 2*Math.max(d,h); }
else { l = Math.round(e-1.05*r)/r+"em"; c = "flex-start"; a = e+t; }
return { hiddenSpanMarginTop:l, hiddenSpanAlignSelf:c, calculatedHalfTop:d, calculatedHalfBottom:h,
  symmetric:i, fontSizeEm:n.A.fontSizeEmByHeight(a,r,o), fontSize:r,
  height: Math.ceil(a)/r+"em", heightTop:e, heightBottom:t };
```

即：**不换 glyph，先把字号放大**（334.js）：
`open-brace/close-brace`: `0.6+min(0.5,(h-f)/140)`；paren: `0.8+min(0.2,(h-f)/250)`；bracket: 1；
宽度：paren `.45*fs`、bracket `.43*fs`、vert `.3*fs`、brace `.8*fs`（`bracketWitdhFromHeight`；
`h<=1.4*fs` 时退化为 `round(h/2.6)`）。
渲染（63869 `class m`）：

```jsx
<opensymbolblock|closesymbolblock class={normal?} type={bkType} style={height}>
  <hidden-span style={{marginTop:hiddenSpanMarginTop, alignSelf:hiddenSpanAlignSelf}}>{bracketText}</hidden-span>
  {normal ? <bracket-span>{text}</bracket-span> : <vcomposed-symbol …/>}
</opensymbolblock>
```

`hidden-span` 保留普通字形宽度（行宽不变），实际括号用更高字形/拼合件叠加。
CSS：`opensymbolblock,closesymbolblock{display:inline-flex;align-items:center;margin-top/bottom:.1em}`
`.normal{margin:0}`、`>svg{width:.4em;height:100%}`。

【已核实】legacy 拼合件 = `vcomposed-symbol`（57858）：3 部件（start/middle/end）或 5 部件
（start/middle/middle-center/middle/end，用于 brace 的中段重复），部件是 Unicode 字符
（如 `⎧⎨⎩`），重复次数按根高度算（`renderRepeat(r, 2*s)`），负数 margin 在 CSS
（`vcomposed-symbol.non-safari>start{margin-bottom:-.05em}` 等），
Safari 上换成类名 `non-safari` 关闭这些 hack。opentype(Fira) 则用 §10 的 SVG。

【已核实】显式大定界符 `\bigl( \Big[ …`（27332）：composite 属性 `bracketName` + `size`：
`big→1.5em, Big→2.2em, bigg→2.9em, Bigg→3.6em`，渲染 `<big-delimiter class="big-open|big-close"
style={{height:sizeEm+"em", width: si(font,name)*fontSize || bracketWitdhFromHeight(...)}}>
<delimiter-svg …/></big-delimiter>`；CSS `.big-delimiter-symbol{display:inline-flex;align-items:center;
margin:.1em 0}`、`big-delimiter>svg{width:100%;height:100%}`。

### 10. 字体度量与 glyph 坐标（唯一出现"每个 glyph 的 (x,y)"的地方）

【已核实】**字体 profile**（19340）：
`const i = {unitsPerEm:1000, axisHeight:280, scriptGapMin:200, spaceAfterScript:41,
radicalRuleThickness:76, radicalKernBeforeDegree:276, radicalKernAfterDegree:-400,
radicalDegreeBottomRaisePercent:64, upperLimitGapMin:150, lowerLimitGapMin:150,
minConnectorOverlap:20, underlinePosition:-75, underlineThickness:50,
glyphs:{uni0028:{path:"M226 775…",bounds:[40,-215,284,775],width:324}, "uni0028.size1":{…}, …},
vertical:{"(":{variants:[{glyph:"uni0028",advance:991},{glyph:"uni0028.size1",advance:1320},…],
             parts:[{glyph:"uni239D",start:0,end:150,advance:2956,extender:false},
                    {glyph:"uni239C",start:150,end:150,advance:600,extender:true},
                    {glyph:"uni239B",start:150,end:0,advance:2956,extender:false}]}, …},
…}`
（`glyphs` 里 `uni0028.size1..size15` 是 16 档预缩放变体）。
profile 注册表：legacy 组 `u={id:"legacy",…radical.renderer:"legacy"}`，
`g={Asana, LatinModern, ThickerLm, Sans, Fira}`；Fira 用 opentype 渲染器且 `source:o`（返回上面 `i`）。

【已核实】**变体/拼装算法**（59769 `H`）：给定目标 extent（font units）：
`variants.find(e=>e.advance>=r)`；没有则用 `parts`+connectors 组装：
每部件 `advance`、`start/end`、`extender`；求总 extent 与 overlap，
`fit = target/extent`，返回 `{mode:"variant"|"assembly", placements:[{glyph,x,y}], bounds, fit, overlaps, repeats}`。

【已核实】**绘制坐标**（7258 `f`，所有 SVG glyph 的最终 transform）：

```js
createElement("g", {
  transform: "translate(" + (i - r.bounds[0]*n) + "," + (s + r.bounds[3]*n) + ") scale(" + n + "," + (-n) + ")",
  …}, r.placements.map(e => createElement("g",{transform:`translate(${e.x},${e.y})`},
        createElement("path",{d:a.glyphs[e.glyph].path,stroke:"none"}))))
```

`n = fontSize/unitsPerEm * fit`，`i`=水平起点，`s`=垂直起点；`scale(n,-n)` 把字体 Y-up 翻成 SVG Y-down。
定界符：`renderGlyph(width,height)` 里 `targetSize = (height - 2*fontSize*svg.delimiterInsetEm)/scale`，
水平居中 `(width - (bounds[2]-bounds[0])*y)/2`，垂直 `fontSize*delimiterInsetEm`；
`axis-fit`（Fira）兜底：把最大变体非等比拉伸到目标高度。
花括号：`⏞/⏟`（横）/`⏝⏜`（arc）同样走 variants+assembly。

【已核实】用户自定义文本字体（非数学字体）才在运行时解析 OTF/TTF：45896 内含 Typr.js 风格解析器
（tables `cmap/head/hhea/hmtx/name/OS\/2/post/loca/glyf/kern/CFF /GPOS/GSUB/SVG `），
导出时 `v.U.glyphsToPath` 累加位置：`n += o.hmtx.aWidth[s]; n += v.U.getPairAdjustment(o,s,a)`；
`pathToSVG` 生成 `d`。屏幕上的普通文字仍是浏览器字体渲染。

【已核实】**兜底基线测量**（45896.js:3521 `class J`）：对自定义字体在 offscreen 用
`font-size:800px; line-height:960px` 渲染 "A"，`ratio = spanTop / spanHeight`；
导出 SVG `<text>` 时 `y = rect.top + height*(ratio + .025)`（generatePlainTextBlock）。

【已核实】`axisHeight` 只在 19340 常量表里出现，bundle 内没有消费点（grep 仅 1 处）；
实际"轴线"相关计算用的是 `fontSize` 的分数（`r/8`、`r/10`、`1.05r` 等）。→ 见不确定项。

### 11. 间距表（operator/relation/punctuation/…）

【已核实】不是 JS 加空盒，而是**按字符类别加 CSS padding**：

- CSS：`block.Binary{padding:0 .2em}`、`block.Relation{padding:0 .3em}`、`block.Punctuation{padding-right:.2em}`
  （styles-f9164fb5-ced37e37.css，另有 `.close-left/.close-right/.int-ml/.oint-ml` 等 operator-name 类）。
- 类别判定（30929.js）：`categoryByUnicodeChar`（98095）→ `getAbstractCategory`
  （`Normal/Alphabetic/…`→"Normal"）→ `resolveVaryCategory`（`-`、`:` 等 Vary 类按前后块决定 Unary/Binary/Relation）
  → `resolveDotCategory`（`.` 两边是数字则 Normal 否则 Punctuation）→ 合并同类别连续字符；
  文本 block 被拆成 `<block class="Binary">-</block>` 之类的碎片（48397.renderNormalTextBlock，
  `className: x()(p.category)`）。
- `noSpacingRule` 属性：脚本/根号内部/分数内部等不再套类别 padding（组件把 `noSpacingRule` 传给子 editor）。
- 大型运算符/积分的额外左右空隙另在 CSS（16790 附近精确定位，如
  `.lim-like-symbol.non-limit-kind>editarea-block.from{margin-left:2.072em}`、`from-lim 2.1756em`、
  `from-liminf 4.44em`、`from-limsup 4.9728em`、`from-sup 2.3828em` 等，用于积分限在非 limit 模式的左对齐）。
- 文本中的显式空格、`\quad` 之类由字符本身/CSS 处理（未在本 bundle 找到 TeX 空格表）；见不确定项。

### 12. 行高、断行、对齐、缓存

【已核实】
- 行高：数学模式 `pageSettings.mathLineHeight`（默认 **1.2**，77664.js:60）作为 CSS `line-height`
  套在 `<line>` 上；页面设置对话框字段名就是 "Math Line Height"（6283.js:1355）。
- 行内布局：`<blocks>` + `baselineblock`；块级 `display:inline`；`line` 上根据 style 有
  `align-left/center/right/justify`、`has-rtl`、`indent-N`、`listType` 等 CSS 类（48397 `getBaseLineClass`）。
- 断行：文本模式 `block{white-space:pre}`，行内换行由 `line-wrap` 逻辑（编辑器层面把同一逻辑行拆成多个
  渲染行，11154 大量 `"line-wrap"` 光标类型）；导出时 `buildTextBlock` 的 `e.lineWrap` 用
  `Range` 比较逐字 rect 的 `top` 变化判断换行（45896.js:1355-1362）。
- `delayRenderCache`（11154.js:22540-22680、48397.js:716-770）：延迟/懒渲染时每行先渲染为占位框，
  尺寸取缓存 `{w,h,bl}`（`av` = 模型结构版本，版本不符则失效）；数值由真实 DOM rect 得到：

```js
var i = ne().findDOMNode(this), o = l.A.findBaseLineBlock(i),
    s = B.T.getBCRect(i, r.getDocZoomContainer()),
    a = this.fetchLineWithHeight(i), c = a.lw, d = a.lh,
    h = B.T.getBCRect(o, r.getDocZoomContainer()),
    p = { w: oe.A.round4(c), h: oe.A.round4(d),
          bl: oe.A.round4((h.bottom - s.top) / B.T.heightOf(s)) };
r.setLineCacheSize(this.props.parentEditAreaId, t.id, p);
```

（Lead 实测 `{"w":20.6016,"h":39.1953,"bl":0.6352}` 与该结构/量纲一致：bl 是"基线距行顶/行高"的无量纲比。）

### 13. 绝对坐标 vs 相对坐标

【已核实】屏幕布局**全部是 CSS 流式相对布局**：块与块挨着排，复合件内部用 float/flex/负 margin 叠；
没有"为每个 glyph 写 x/y"的代码路径。绝对定位只用于设置按钮/弹窗/光标（`.text-cursor{position:absolute}`、
`applyReverseZoomStyle` 等）与 SVG 内部（`transform`）。

【已核实】真正的"字符级 x/y"只出现在两个地方：
1) SVG 绘制伸缩件（§10，坐标 = MATH 表 placement × scale + translate）；
2) 导出：DOM Range 逐字 rect（`getRect(t,r,rawIndexAt(g),rawIndexAt(f),…)`）→ SVG `<text x y>`/`<path>`，
   `x` 用容器 rect 左边界，`y` 用 `rect.top + height*(baselineRatio+.025)`（§10）。

---

## 附：模型 → DOM/CSS 对应（Lead 实测交叉验证，均为【已核实】）

| 模型节点 | 渲染出的 DOM/样式 | 驱动代码 |
|---|---|---|
| `{text:"\\frac", elements:{value,sub1}}` | `<compositeblock class="fraction-symbol smaller">` + `<editarea-line class="frac-edit-area enumerator" style="line-height:1.2;margin-top:-0.235294em;margin-bottom:-0.470588em">` + `<div class="frac-line"><inline style="border-bottom:1px solid">` + …`denominator` | 43369 `renderComponent`（negative margins 由 `getRoundEmStr(-.5/-.41)` 生成，`getLineThickness()` 给 px 线宽） |
| `{text:"\\power-index", elements:{powerValue,indexValue}}` | `<compositeblock class="power-index-symbol-container has-power"><editarea-block class="power-value">2</editarea-block><middle-base><inline></inline></middle-base><editarea-block class="index-value">i</editarea-block></compositeblock>` | 49632 `renderTop/renderBottom`（class 名 `.power-value/.index-value`、`middle-base` 占位） |
| `{text:"\\sqrt", elements:{value,sub1?}}` | `<compositeblock class="sqrt-symbol"><sqrt-top>…</sqrt-top><sqrt-edit>…<sqrt-symbol-line><svg><polygon points="0.35,10.29 4.79,7.92 …">` | 68468（legacy radical 是 `<polygon>`，点由 7258 `class A/E.getPoints` 算；Fira 是 `<path>`） |
| 矩阵/`cases`（`row/column` + `"r_c"` 槽） | `<compositeblock class="matrix-symbol matrix-like …"><matrix><svg style="width:.5em;height:43.8px"><path d="M 6.27 1.70 c…"/></svg><table><tbody><tr class="math-row"><td><editarea-line class="editor-cell">` | 13067 / 44833（定界符 path 由 7258 绘制；`useCustomBaseLine()=true` 用 `<base-line-indicator>` 对基线） |
| `\left(` 语义（模型只是 `{type:"single",text:"("}`） | `<opensymbolblock class="normal?">` / `<closesymbolblock>` | 68517/90617 + 63869 + 48397 的配对处理器（§9） |
| 文档级 `delayRenderCache:{av, map}` | 懒渲染行占位 `{w,h,bl}` | 48397.storeCacheSize（DOM 实测）+ 11154 `Rp` 延迟渲染器（`av`=结构版本，失配重建） |

导出实测（Lead）：`\frac{a}{b}`、`\sqrt[3]{x}`、`x_{i}^{2}`（**先下标后上标** —— 对应 49632.toLatex 中
先拼 `_{}` 再拼 `^{}`）、`\left(\frac{1}{2}\right)`、`\begin{pmatrix}…\end{pmatrix}`、`\begin{cases}…\end{cases}`。
`x_{i}^{2}` 的槽序与 §3 表一致：`\power-index` 的 toLatex 先 indexValue 后 powerValue（49632.js:255-260）。

---

## 不确定 / 待查

1. **root id `r0.`**：生成处不在拆分后的 bundle modules（只有样例 JSON 字面量出现）。子节点 id 确认 `"n"+Math.random()`。
   【推测】由 app 外壳/服务端/旧版数据生成。另 `grep '"r0'` 仅在 11154/28730 的示例 JSON 中命中。
2. **axisHeight=280/1000 的实际消费者**：`grep axisHeight` 全模块只命中 19340 常量表本身；
   上下标/括号用的是 fontSize 比例（r/8、r/10、1.05r），未见用 axisHeight 做轴。可能由导出/PDF 或
   "axis-fit" 之外的分支使用，未定位。同理 `radicalDegreeBottomRaisePercent` 等 MATH 常量是否被消费
   未逐一核对（71311 用到 radicalKern*、scriptGapMin、upper/lowerLimitGapMin、spaceAfterScript、
   italicCorrection、integrals/limitOperators/namedLimit 等）。
3. **间距表是否只有 CSS 三条**：TeX 的 thin/med/thick（3mu/4mu/5mu）与 `\,` `\:` `\;` `\quad` 表没找到；
   `block.Binary/Relation/Punctuation` 是唯一显式间距规则。`\thinspace` 之类可能在 parser/字符表里，
   未验证。此外 `block.Binary{padding:0 .2em}` 与类别判定的组合是否覆盖 `\mathrel{}` 等（78090 是 group 包装），
   未做动态验证。
4. **`\left…\right` 的导出**已核清（见 §3 末）：模型无 left/right，symbol 组件 toLatex 固定输出
   `\left(`/`\right)`，所以"所有括号导出成 \left(…)"。剩余不确定：多行/跨行括号和嵌套括号导出时
   是否会重复输出（每次 `(` 都输出 `\left(` 理论上仍合法，但嵌套语义依赖 toLatex 的组装顺序），未逐例验证。
   另 `___normal` 是渲染器写在模型对象上的临时字段，是否被持久化未查（推测不会——store.json 里未见）。
5. **`class z` 中变量 `u`（shouldConsiderAsChar）的精确语义**：来自 `getPowerIndexInfo().shouldConsiderAsChar`
   （矩阵/根号/积分各自返回），只知道为真时用 -1.6/-0.58 一组常数，未逐组件核对语义。
6. **line-wrap 的换行判定**：编辑器逻辑行的换行规则（哪些不可断点、行宽来源）只在 11154 里看到大量
   `"line-wrap"` 光标/渲染状态样本，未完整逆出（那是 input-editing 任务范畴）。
7. **`\sqrt` 根指数顶置的轻微上移/负 margin**（`lM` 的 `minWidth: -kernAfterEm`）在无根指数时是否残留
   影响行宽：68468 只在 `sub1` 存在时渲染 sqrt-top，但 `getTopStyle` 仍可能被调用（返回 undefined 时安全），
   未做像素级验证。
8. **Typr 在数学 SVG 渲染中是否使用**：目前证据是数学字体用预烘焙 19340 表；Typr 只用于
   用户加载字体（`getAppliedFontsFromElement`/`loadFontDataIfRequire`）与导出文本 path。
   "Fira 字体是否也走 Typr 解析"未看到直接把 OTF 转成 `source()` 的代码（19340 里 Fira.source 直接返回预烘焙 `i`）。

---

## 附：证据脚本/中间产物

- `.cache/re/scratch/model-layout_slots_final.json`：从 98095 注册表抽取的 33 个带槽 composite
  （module、latex 名、槽名、keyInsertOnSelection）。
- `.cache/re/scratch/model-layout_css_rules.json`：从 `styles-f9164fb5-ced37e37.css` 拆出的 1770 条规则
  （`[selector, body]`），用于检索 `fraction-symbol/sqrt-symbol/big-delimiter/power-index/opensymbolblock/block.Binary` 等。
- `.cache/re/scratch/model-layout_extract_slots3.py / _extract_slots4.py`：抽取脚本。
