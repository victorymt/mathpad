# Mathcha 公式「所见即所得输入」管线（task-2）

分析对象：`mathcha-src/modules/*.js`（由 `.cache/cdn/bundle-f9164fb5-ced37e37.js` 按 webpack moduleId 拆出）。
符号名（属性名/方法名）未被混淆，局部变量被压缩；文中 `11154:7445` 之类表示 module 文件:行号。
【已核实】= 直接读到实现；【推测】= 由相邻代码/命名推断，未跑动态验证。

---

## 结论速览

1. 【已核实】输入不是 contenteditable。编辑器根节点是自定义元素 `<math-type>`，内部放一个**视觉上 0×0 的隐藏 `<textarea>`**（`<hidden-input-wrapper>` 内）承接键盘/输入法，另有一个 `readOnly` 的 `<input class="focus-element">` 只做焦点与 keydown 镜像。见 `11154:25783-25817`、CSS `hidden-input-wrapper{width:0;height:0;…transform:scale(0)}`（`.cache/cdn/styles-f9164fb5-ced37e37.css`）。
2. 【已核实】键盘总入口是 `keyboardInputHandler = new Wi(this)`（11154:7445 定义、24659 装配）。`onEditorKeyDown`(7454) 先处理 Alt/Enter 特例，再 `handleShortcut()`（用户自定义热键宏），最后把事件交给 `controller.handleKey(e, containerModel)`（`Wr.handleKey`，11154:3718），由 `target.handleResult(result, e)` 落地。
3. 【已核实】**普通字符不走 handleKey**：keydown 里 `nt.getCommandFrom()`（11154:1458）对无修饰键的 0-9/A-Z 直接返回 `{action:null}`，真正的文字来自 textarea 的 `onInput` → `onEditorInput`(7516) → `controller.handleTextInput(value, containerModel)`(3923) → `insertInput(text)` → `R.A.insertInput`(41587:278)。所以"键盘事件"和"字符事件"是两条道。
4. 【已核实】文本 vs 数学**不是输入模式开关**，而是"光标此刻在哪个容器里"：`ContainerModel.isTextModeSelected()`(24245) ← `modelDetect()` ← `Eu.scan/traverseDown/determineAtCompositeLeaf`(24002-24070)；命中 `\text-mode-group`、`\theorem`、表格 caption、`\raw-latex`、`\code-section`、`\boxed-container`、`\underline-section`、图片/图 caption 等才算 text，否则 math。同一个输入函数，只换容器与样式。
5. 【已核实】输入 `\` 有两条触发：keydown 的 `matchAutoCompleteKey`(7570)（keyCode **220**，可用设置 `suggestionBoxTriggerShortcut` 改，默认 `{keyCode:220}`，解析用 `ji.A.safeParseHotkey`，模块 20323）与 `onEditorInput` 里 `"\\" == value`(7526)。两条都只 `requestAutoComplete()`，**反斜杠本身不入模型**。
6. 【已核实】建议框打开后**焦点从隐藏 textarea 抢到框内搜索框**：模块 87010 `getInputRef` 在下一 tick `this.inputRef.focus()`，`handleInputChange` → `changeSearchText` → `symbolFilter.filter(data, value)`。所以 `\` 之后敲的 `f r a c` 根本不进文档，只做过滤；这也是"`\frac` 不显示成字面量"的原因。
7. 【已核实】过滤是 **fuse.js 模糊匹配**而非前缀：`va = new ya()`(13213) `filter()` 先去掉 query 开头的 `\`，再 `new Fuse(data, ba)`(13188)，keys 权重 names 0.4 / filterTag 0.4 / description 0.2，`caseSensitive:true, shouldSort:true`。
8. 【已核实】「命令表」不是一张大表，而是**几百个 symbol-component 模块的 `getSymbolInfo()` 并集**，在模块 98095 的注册表类 `A`(实例 `w`) 里建 `symbolMap`：`\frac` 条目在 43369:132-160，`{type:"composite", names:["\\frac"], description:"fraction", filterTag:"fraction", height:30, renderSymbol}`；基础文本符号来自 `S = JSON.parse(decompressFromBase64(require(71669)))`（71669 就是一段 base64 JSON）。
9. 【已核实】模板一步插入 = `getModelByInfo(info)` → `customSymbolMap[names[0]].getModel()`：基类 48440 `getModel()` 用 `getModelMeta()` 的 `text` 建 `createComposite(text)`，再对 `meta.elements` 每个 key 填 `createEmptyEditor()`；`\frac` 的 meta 在 43369:124-134：`{text:"\\frac", keyInsertOnSelection:"value", elements:{value:{onRemove:"all"}, sub1:{onRemove:"all"}}}`。
10. 【已核实】插入后光标落在**第一个 slot**：`insertModelAt` 返回后由 `a.A.buildSelectedForInsertedNewModel`(49812:256) 判断插入物是 non-text block → `getChildModelKeys(e)=Object.keys(e.elements)` → 取 meta 的 `keyInsertCursor`（若存在于 keys）否则 `keys[0]`；`\frac` keys=["value","sub1"] → 光标在分子。`\sqrt` 更细：meta 有 `keyInsertCursor:"sub1"` 但 `sub1:{defaultHide:!0}` 默认不建，所以实际仍进 `value`（68468:190-205）。
11. 【已核实】`^`/`_` 不走建议框，走 `at.handleText`(11154:1627)：math 模式下 `^`→`\power`、`_`→`\index`（`Je.A.getCompositeOrSingleModel`），`(`/`[`/`{`/`)`/`]`/`}`→同名 composite（自适应定界符）；text 模式下 `$`→`\inline-math` 容器（这就是"在正文里输入 `$` 进公式"）。
12. 【已核实】光标前进/后退是**几何命中测试**（按排版后的盒模型算），不是纯 slot 树遍历：`Ie.move`=`Me.move`(866)/`Ve.move`=`We.move`(1150) → `Pe.run`(802) → `ye.S.extractTuple`+`Oe.findByDirection`，返回 `line-up/line-down/next-char/inside-block` 等意图类型后再转成模型选区。**slot 之间跳（分子↔分母）另有便捷路径：Tab**，`br.next/previous`(3236) 直接用 `Pu` 表(24128) 改 `key`。
13. 【已核实】删除/撤销：Backspace=`vr.handleBackspace`(3186)→`R.A.removeCurrent`(41587:620)；槽位开头按 `getMetaDataByName(text).elements[key].onRemove`（`"only"`/`"all"`）决定"整块删除确认"，`\frac` 是 `all`。撤销=`historyHandler`(=class `Ge`,11154:1172) 的**快照栈**（非 command pattern），默认 1000ms 内连续输入合并成一步，栈上限 200/裁剪到 100；另有独立的 `cursorHistory`(`Ke`,1221) 记录左右键游走点。
14. 【已核实】IME：有 `onCompositionStart/End`，组合期把拼音串**实时插进模型**（`handleCompositionTextInput` 3904 → `R.A.replaceTextForComposition` 41587:520），组合结束用 `e.data` 终值替换（Firefox/iOS 分支把结果交给 handleResult）；同时在光标本位渲染 `<composition-indicator>` 提示条，隐藏 textarea 会移到光标处让输入法候选框贴住光标（`calculateHiddenInputPosition` 7776）。
15. 【已核实】还有第二套"输入自动更正"：字符序列快捷键表（模块 23017）。`->`→`→`、`<=`→`≤`、`=>`→`⇒` 等，在每次插入字符后由 `handleReplaceTextEnd`(13620:106) 用 `shortcutMatcher.matchSequenceByInsertedOneChar` 尝试替换；IME 组合文本也会走同一匹配（`handleReplaceFromReplacementOfComposition` 13620:190）。

---

## 完整输入链路（函数级）

### 0) DOM 层（11154:25770-25817）
```
<math-type tabIndex="-1">
  <hidden-input-wrapper>            ← CSS transform:scale(0), 位置被移到光标处
     <textarea onInput/onKeyDown/onKeyUp
               onCompositionStart/onCompositionEnd
               onCopy/onCut/onPaste ref=getHiddenInputRef>
  <hidden-input-wrapper>            ← 只读焦点元素（移动端/失焦恢复）
     <input class="focus-element" readOnly onKeyDown/onKeyUp>
  …
```
装配：`focusHandler.renderHiddenInputWrapper()`、`keyboardInputHandler.onEditorInput/onEditorKeyDown/…`（25788-25817）。
焦点：`focusHandler.onHiddenInputFocus/onHiddenInputBlur`(11154:7720-7721)、`hidenInputFocus()`。

### A. 字符输入（普通字母/数字/符号）
```
textarea.onInput
 └─ Wi.onEditorInput(e)                                11154:7516
    ├─ changeSelectDisabledExcludeByDelay() → 拦截（文档忙）
    ├─ value == "\\" → target.requestAutoComplete()    → 见 B
    ├─ iOS 且非组合 → inferInputActionFromInput(e) 推断 insert/backspace/clear
    └─ controller.handleTextInput(value, containerModel)
       └─ Wr.handleTextInput                          11154:3923
          ├─ sanitizeTextInput (拒 \r\n\b、校验 surrogate pair)
          ├─ handleInternalShortcutForTextInput        11154:3895
          │   └─ at.handleText(text, model, displayStyle)   11154:1627
          │        text 模式: "$" → getInlineMathContainerModel()
          │        math 模式: [ ( { ) ] } → getCompositeOrSingleModel(ch)
          │                   "^"/"_" → getCompositeOrSingleModel("\\power"/"\\index")
          ├─ inputComposition ? handleCompositionTextInput() : insertInput(text, model)
          └─ Wr.insertInput(e,t,r)                     11154:3788
             └─ R.A.insertInput                          41587:278
                └─ insertInputToLine                     41587:413
                   └─ d.A.insertModelAt                  41587:788 → 13620:788
                      └─ insertModelAtNormal              13620:744
                         └─ handle_InsertText_CurrentText / handle_InsertNon_CurrentText / …
                            （字符串 → {id, text} 单块，41587:479）
          → 返回 visitResult → toKeyHandledResult()     11154:4288
          → Qe.fromDataOrCursorSelectedInfoChanged()    11154:1400  action="DataOrCursorSelectedInfoChanged"
          → target.handleResult() → fc.innerHandleResult()   11154:16790
             → target.changeModel() → modelTransaction.set()  11154:23265
             → 渲染 + addToHistory()
```
字符序列自动更正（横向插入时）：
```
insertModelAtNormal → handleReplaceTextEnd          13620:106
  → shortcutMatcher.matchSequenceByInsertedOneChar()  63241:59（trie: analyzedInfo.charRootMap）
  → 命中后替换为 textModeLine/mathModeLine 的 blocks
```

### B. `\` → 建议框（Suggestion / auto-complete）
```
keydown(keyCode 220) 或 input.value=="\\"
 └─ Wi.matchAutoCompleteKey(e)                         11154:7570
      keyCode==220 无修饰 || ji.A.match(e, suggestionBoxHotkeyInfo)   [20323.safeParseHotkey 默认 {keyCode:220}]
      + checkWithIntlBackslashOrDeadKey（处理 IntlBackslash / Dead 键）
 └─ target.requestAutoComplete()                       11154:25454
    └─ Xa.requestAutoComplete()                        11154:14100  (autoCompleteHandler)
       守卫：readOnly/selectOnly/plainTextOnly/!isSelected/insideTextSymbol/insideCodeSection/isCursorControlled
       setState({autoCompleteInfo:{cursorInsertionState, autoCompleteLeftTop}})
       cursorInsertionState = buildCursorInsertionState(model)  11154:14118  → Qa.detectInsertionMode() 14001
 └─ renderAutoComplete()                               11154:14029
    └─ <auto-complete-container> = class Ka  11154:13814（Za）
       ├─ tab 切换: all/composite/categories/templates/drawing（textMode/z-spec 另有）
       ├─ 数据供给 pa = new ha()                       11154:13176
       │    getForComposite/getForTextMode/getForCategory("frac"|"matrix"|"alpha"|…)
       └─ 面板 Ca = 模块 87010
            renderInput: <input aria-label="Search symbols">（getInputRef → 下一 tick focus）
            handleInputChange → changeSearchText → symbolFilter.filter(data, text)   13266
                 va = new ya()  → Fuse(ba)  names .4 / filterTag .4 / description .2，去掉前导 "\"
```
建议框内键盘（焦点在搜索框）：
- 模块 34354 `C.handleKeyDown`：**Enter(13)** → `itemsRef.selectItem()`；**↑/↓(38/40)**、**Tab(9)** 切页、Shift(16) 展开；
- 模块 36606 `m.handleKeyDown`：↑↓←→ 在格子间移动选择；
- 框级 `Ka.handleDocumentKeyDown`(13819) 通过全局 document keydown 栈 `xa.A.stack`（**模块 32725**）只处理 **Escape(27)** 关闭。

提交：
```
Ka.handleItemCommit(info)                 11154:13822
  e.numberOfFrequency += 2；sort；"(" ")" 强制 forceCreateModel；onSelect(info)；onClose()
 └─ Xa.onAutoCompleteSelect(info)          11154:14019
    检查 detectInsertionMode 是否变化（上下文变了给 warning 拒绝）
    └─ target.insertBySymbolInfo(info)     11154:25244
       └─ insertDataHandler.insertBySymbolInfo  11154:18882  (class kd)
          ├─ 字体名（\mathrm/\mathbb/…）→ setMathFontName
          ├─ 特殊命令（\tag-select/\from-latex/\special-char/\theorem-options…）→ 弹框
          ├─ type=="template" 或 commandBlocks → controller.mtTemplateController.handle()  11154:3300(class wr)
          │     handleLatexBlocksTemplate → getByName(names[0]).commandBlocks
          │     → createLinesFromcommandBlocks → symbolProvider.getModelByName(blockName) → insertLines()
          │     （矩阵 / cases / eqnarray 这类"整行模板"走这里）
          └─ 其余 → controller.handleBySymbolInfo(info, containerModel)   11154:3813
             ├─ type composite/single → Je.A.getModelByInfo(info)          98095:158
             │     customSymbolMap[names[0]].getModel(info)   ← 43369(frac) / 68468(sqrt) / 53109(power) …
             │     → 基类 48440.getModel()：createComposite(meta.text) + 每个 meta.elements[key]=createEmptyEditor()
             ├─ forceCreateModel → createTextBlock(symbol) → insertInput
             ├─ type "mathxx" → createTextBlock(symbol,{style:{mathType}})
             └─ insertInput(model, containerModel, info)   11154:3788
```

### C. 落模型 + 落光标（一次插入的收尾）
```
R.A.insertInput                                    41587:278
 └─ shouldHandleInsertBracketAround(e,t)           41587:151   （有选区且输入 ( [ { | < → 包 \left..\right）
 └─ c.A.handleEditor(...) → insertInputToLine      41587:413
    ├─ assignRemovedLine                            41587:373
    │    （有选区文本被替换且插入物是 composite：meta.keyInsertOnSelection 决定文本塞哪个槽）
    ├─ insertModelAt                                13620:788 → insertModelAtNormal 744
    │    → handle_InsertNon_CurrentNon / handle_InsertNon_CurrentText / …
    └─ k.selected 为空 → a.A.buildSelectedForInsertedNewModel(inserted, editorSelected)   49812:256
         non-text block：
           r = Object.keys(e.elements)
           n = getMetaDataByName(e.text); n.keyInsertCursor ∈ r ? key=n.keyInsertCursor : key=r[0]
           selected = {lineIndex:0, charIndex:0}
         text block：charIndex += lengthByCache(e), selected=null
 → visitResult → toKeyHandledResult → Qe.fromDataOrCursorSelectedInfoChanged → target.handleResult
 → fc.innerHandleResult("DataOrCursorSelectedInfoChanged")   11154:16790
    → target.changeModel(model, isUndoRedo, {mainSelected, extendedMainSelected})
       → modelTransaction.set()  11154:23265（setState/局部重建页面）
       → addToHistory → historyHandler.push()   11154:3497 → class Ge 1172
    → hidenInputFocus(!0) 把焦点还给隐藏 textarea（insertBySymbolInfo 末尾 18930）
```

### D. 端到端：`\` + `f` `r` `a` `c` + `Enter`（屏幕上出现分式、光标在分子）
1. `Wi.onEditorKeyDown`(7454) → `matchAutoCompleteKey`(7570) 为真 → `target.requestAutoComplete()`；`preventDefault` 使 `\` 不产生 input。
2. `Xa.requestAutoComplete`(14100) 存 state → React 重渲染 `renderAutoComplete`(14029) 出 `<auto-complete-container>`(`Ka`)。
3. 模块 87010 `getInputRef` 下一 tick `focus()` 抢焦点 → 之后 f/r/a/c 进搜索框：`handleInputChange`→`changeSearchText`→`va.filter(data,"frac")`(13266)→fuse 匹配 `\frac`（names 去掉 `\` 后 "frac"）。
4. Enter(13)：模块 34354 `C.handleKeyDown` → `itemsRef.selectItem()` → `onCommit`/`onItemCommit` → `Ka.handleItemCommit`(13822) → `onSelect(info)`。
5. `Xa.onAutoCompleteSelect`(14019) → `target.insertBySymbolInfo(info)`(25244) → `kd.insertBySymbolInfo`(18882) → `controller.handleBySymbolInfo`(3813)。
6. `Je.A.getModelByInfo`(98095:158) → 43369 组件 `getModel()`(48440 基类) → `{type:"composite", text:"\\frac", elements:{value:<empty>, sub1:<empty>}}`。
7. `insertInput` → `R.A.insertInput`(41587:278) → `insertInputToLine` → `insertModelAt`(13620) 在光标 charIndex 处插入该 block。
8. `buildSelectedForInsertedNewModel`(49812:256)：keys=["value","sub1"]，meta 无 `keyInsertCursor` → key="value"、`{lineIndex:0,charIndex:0}` → **光标在分子**。
9. `toKeyHandledResult`(4288) → `Qe.fromDataOrCursorSelectedInfoChanged` → `resultHandler.innerHandleResult`(16780) → `changeModel` → `modelTransaction.set`(23265) 重渲染 + 入历史栈；`hidenInputFocus` 还焦点，建议框 `onClose` 关闭。
10. 渲染：43369 view 组件 `m`（`fraction-symbol`，`frac-edit-area enumerator`/`denominator`，分数线 borderBottom）画出模板；`editorCursorHandler.renderCursor()` 按新 `cursorSelected` 画光标。

---

## 关键位置

| module id | 符号名 | 作用 | 片段（≤15 行） |
|---|---|---|---|
| 11154 | `Wi` (`keyboardInputHandler`) | 键盘/输入法/粘贴事件总入口 | `onEditorKeyDown` 7454、`onEditorInput` 7516、`onEditorCompositionStart/End` 7543-7557 |
| 11154 | `$e.getCommandFrom` + `tt`/`rt.map` | keyCode→动作表；字母数字=文本输入 | `if (!e.metaKey&&!e.ctrlKey&&!e.altKey&&this.isAlphaBetaNumber(e.keyCode)) return {action:null,e}` 1458 |
| 11154 | `Wr.handleKey` / `innerHandleKey` | 动作分发（left/backspace/enter/undo/next-element…） | `handleKey` 3718；`innerHandleKey` 4082 的 `switch(r.action)` |
| 11154 | `Wr.handleTextInput` | 文本字符落模型 + 内部快捷键（$ ^ _ 括号） | 3923-3935 |
| 11154 | `st.handleText` (`at`) | `$`→inline-math；`^`/`_`→`\power`/`\index`；括号→composite | 1627-1641 |
| 11154 | `Xa.requestAutoComplete` | 建议框开关与定位 | `if (e.isInsideTextSymbol()) return !1; … setState({autoCompleteInfo:{cursorInsertionState, autoCompleteLeftTop}})` 14100-14116 |
| 11154 | `Ka` (`Za`) 建议框 / `Ka.handleItemCommit` | 面板+提交 | 13814/13822：`e.numberOfFrequency += 2; … this.props.onSelect(e); this.props.onClose(...)` |
| 11154 | `ya.filter`/`ba` (`va`) + `ha` (`pa`) | fuse.js 模糊过滤 / 数据供给 | 13213-13239、13188 |
| 11154 | `kd.insertBySymbolInfo` | 建议项→插入的枢纽（含命令/字体/模板分支） | 18882-18930 `var i=n.getController().handleBySymbolInfo(e,n.getContainerModel()); n.handleResult(i); n.hidenInputFocus(!0)` |
| 11154 | `Wr.handleBySymbolInfo` | 按 type 决定 composite/template/mathxx/text | 3813-3834 `var r=Je.A.getModelByInfo(e); … this.insertInput(r,t,e)` |
| 11154 | `Du`/`Mu` + `Pu` | composite 槽位遍历顺序表 | 24128-24138 `"\\frac": ["value","sub1"], "\\sqrt": ["sub1","value"], "\\power-index":["powerValue","indexValue"]` |
| 11154 | `br.next/previous` (`elementSwitchController`) | Tab 在槽位间跳（纯改 key） | 3236-3270 `n.key=t; n.selected={lineIndex:0,charIndex:0}; Qe.cursorPosition(...)` |
| 11154 | `Me`/`We`/`De`/`Pe` | 左右上下光标移动（几何） | 802-866 `Pe.run(...)` + `getInsideResultIfPossible` → `{type:"inside-block"}` |
| 11154 | `vr.handleBackspace` | 退格/删除 | 3186-3216 `var n=R.A.removeCurrent(e,!!r); return n instanceof R.h ? Qe.confirmDelete(n.selected) : …` |
| 11154 | `fc.innerHandleResult` | 结果落地（action 路由到 changeModel/setSelected） | 16790 起，`"DataOrCursorSelectedInfoChanged"` 分支 |
| 11154 | `Ge` (`historyHandler`) | 撤销/重做快照栈 | 1172-1246 `push()` 1000ms 内合并、`limitTheHistory()` 200→100、`undo()/redo()` |
| 11154 | `Ke` (`cursorHistory`) | 左右键游走历史 | 1221-1244 |
| 11154 | `Eu.scan` (`modelDetection`) | text/math 判定 | 24002-24070 `determineAtCompositeLeaf` 里 `n.isTextMode=!0` 的容器白名单 |
| 98095 | `A`（注册表）/`getModelByInfo`/`getCompositeOrSingleModel` | 命令表 ↔ 模型工厂 | `initCustomSymbols(){ return _.map([r(59741), …, r(43369), …]) }`；`getModelByInfo(e){var t=this.customSymbolMap[e.names[0]]; return t?t.getModel(e):…}` |
| 48440 | 基类 `getModel()`/`getModelFromStructure` | 由 `getModelMeta()` 生成 composite 模型 | `var t=this.getModelMeta(), r=a.A.createComposite(t.text); _.keys(t.elements).forEach(n=>{ … r.elements[n]=a.A.createEmptyEditor() })` |
| 43369 | `\frac` 组件 `getSymbolInfo/getModelMeta` | 命令表条目 + 槽位定义 | `getSymbolInfo(){return [{type:"composite",names:["\\frac"],description:"fraction",filterTag:"fraction",height:30,…}]}`；meta 见 124-134 |
| 68468 | `\sqrt` 组件 | `keyInsertCursor:"sub1"`、`sub1:{defaultHide:!0}` | 190-205 |
| 53109/8444 | `\power`/`\index` 组件 | `^`/`_` 的目标 composite | 53109:27-43 `{text:"\\power", elements:{powerValue:{onRemove:"only"}}}`、`shortcut:{char:"^"}` |
| 41587 | `insertInput`/`insertInputToLine` | 插入落模型 + 选区包裹括号 | 278-300、413-520 |
| 41587 | `assignRemovedLine` | 选区文本塞进 `keyInsertOnSelection` 槽 | 373-390 `i.keyInsertOnSelection && (n=i.keyInsertOnSelection)` |
| 41587 | `removeCurrent/removeCurrentFromEditor/handleConfirmDelete` | Backspace 语义 + 空槽删除确认 | 620-660 `var n=p.A.getMetaDataByName(e.compositeParent.text); … r.elements[e.compositeKey].onRemove` |
| 41587 | `replaceTextForComposition` | IME 拼音串实时替换 | 520-540 |
| 13620 | `insertModelAtNormal` / `handleReplaceTextEnd` | 块插入 / 字符序列自动更正 | 744-786、106-170 |
| 49812 | `buildSelectedForInsertedNewModel` | 插入后光标落点 | 256-276 |
| 63241 | `f`（ShortcutMatcher） | 字符序列 trie + 热键匹配 | `matchSequenceByInsertedOneChar` 59、`matchHotkey` 101、`setShortcutModels` 139 |
| 23017 | `s.get()`/`getForZSpec()` | 默认字符序列快捷键表 | `{shortcut:{type:"char-sequence",sequence:"->"}, textModeLine:createPureTextLine("→"), mathModeLine:…}` 1-13/195+ |
| 20323 | `ji.A` | 建议框热键解析/匹配 | `safeParseHotkey(e){…return {keyCode:220}}`、`match(e,t)` |
| 32725 | 全局 keydown 栈 `xa.A` | 建议框等浮层在 document 上抢键 | `stack(e){this.funcArr.unshift(e); this.registerOrDeregisterEvent()}` → `document.addEventListener("keydown",…)` |
| 87010 | `p`（建议框面板） | 搜索框 + 过滤 | `getInputRef=e=>{…l.A.next(()=>this.inputRef.focus())}`、`changeSearchText(e){var t=this.props.data; e&&(t=this.props.symbolFilter.filter(t,e)); …}` |
| 34354 | `C.handleKeyDown` | 建议框 Enter/↑↓/Tab | `13==e.keyCode ? (this.itemsRef.selectItem(), …)` 247-253 |
| 36606 | `m.handleKeyDown` | 网格内方向键选择 | 60-70 |
| 71669 | base64 JSON | 基础文本符号表（`S = JSON.parse(decompressFromBase64(require(71669)))`，98095:79-82） | `e.exports = "NobwRAzgFg9gTgFwMYFcFgFwDsUBtcA0kAngLYBGMumYAhGEVgIakCmEmwdDYAOr6wAeSXCzABdIhFZM4SKABUh6DHX5CRLAAQBRABoBhADIBBALImFASQDyAOS0WASgGkeSJglYBzeMRp2PAAm7EhwAJYADgjhMFg0GqKknrFYWslwANZgAL4E4NDwyGiYOPhSZJTUqgDEPMxsHBhc/HVE/DBICDAIsHCRrBJSMnKKyjStHV09fQNaWnYAqmYAQjpOWgDKVgDigUQeXr5w/qr7YCEQYVExcTRaOBSscFoQ4d7xeeDhEAAS4UEQvEMAg4ChWBUKFQaAASeosdiifQ=="`（截断） |

### 光标/选区模型（两种表示，别混）
- **模型路径** `selected` / `cursorSelected`：嵌套树 `{lineIndex, charIndex, key?, selected?}`。
  - `lineIndex` 在"当前这一级 editor"的 lines 里；`charIndex` 在该 line 的 blocks 累计字符索引里；`key` = 进入 composite 时用的元素名（`value`/`sub1`/`powerValue`…）。
  - 遍历/查询工具在 49812：`findLeafSelected`、`findLeafParentSelected`、`blockFromIndex`、`getSelectedBlockFromRoot`、`getSelectedLineFromRoot`、`getSelectedEditor`。
- **DOM/几何位置** `cursorPos`：`{type:"cursor-position", lineIndex, charIndex, line, editor, direction, requestGeoPos}`，由 `j.A.fullPosToDomPos`（25644）产生；左右键历史 `cursorHistory.push(j.A.fullPosToDomPos(...))`(11154:3712)。
- 点选/命中测试：`buildCursorPositionFromEvent`(25644) → `d.T.getFromAbsPos(clientX,clientY,geo)`；键盘移动用 `q.T.geoPosFromCursor(e,"ori")`(11154:869)。

---

## 命令表 / 快捷键表 抽样

### 1) 键盘→动作表（`tt.map`，mac；`rt.map` 为非 mac，11154:1473-1602）
```
keyCode 描述（mac 版，节选）
65 Cmd            → select-all
66 Cmd            → 文本模式 toggle-bold / math 模式 Shift toggle-mathbb / 否则 toggle-mathbf
67 Cmd            → copy；Cmd+Shift 且 math → toggle-mathcal
82 Cmd+Shift 且 math → toggle-mathrm；text → align-right
37 ←             → left（Cmd: first-line；Alt: previous-break）
38 ↑             → up（Cmd: home）
39 →             → right（Cmd: end-line；Alt: next-break）
40 ↓             → down（Cmd: end；Shift+Alt: duplicate-line）
13 Enter         → enter（Shift: enter-clear）
8  Backspace     → backspace（Alt: word-backspace）
46 Delete        → delete（Alt: word-delete）
90 Cmd+Z         → undo；Cmd+Shift+Z → redo
9  Tab           → text 模式 tab / 表格 next-cell / math 模式 findNextElementNameOfComposite() ? "next-element" : "step-out"
```
math 模式下 `Tab`/`Shift+Tab` 是**槽位切换**（`next-element`/`previous-element`），这也是"分子↔分母"的最直接跳法。

### 2) composite 槽位遍历表 `Pu`（11154:24128-24138）
```
Pu = {
  "\\frac": ["value", "sub1"],
  "\\int": ["from", "to"],
  "\\leftarrow": ["top", "bottom"],
  "\\power-index": ["powerValue", "indexValue"],
  "\\sqrt": ["sub1", "value"],
  "\\overunderset": ["sub1", "value", "sub2"],
  "\\stackrel": ["sub1", "value"],
  "\\underset": ["value", "sub1"]
}
// 别名：\dfrac/\cfrac/\tfrac→\frac；\iint/\sum/\prod/\lim/…→\int；\overset/\overbrace→\stackrel …
```

### 3) 命令表条目样例（symbol info）
```js
// 43369（\frac）
{ type: "composite", names: ["\\frac"], description: "fraction",
  filterTag: "fraction", height: 30, renderSymbol: () => <FractionIcon/> }
// 43369 getModelMeta()
{ text: "\\frac", keyInsertOnSelection: "value",
  elements: { value: { onRemove: "all" }, sub1: { onRemove: "all" } } }
// 68468（\sqrt）
{ type:"composite", names:["\\sqrt"], height:25, hasExpanded:!0, description:"square root", renderSymbol }
// getModelMeta(): { text:"\\sqrt", keyInsertOnSelection:"value", keyInsertCursor:"sub1",
//   elements:{ value:{onRemove:"all"}, sub1:{defaultHide:!0, onRemove:"only"} } }
// 53109（\power，^）
{ type:"composite", names:["\\power"], height:25, searchText:"power superscript",
  description:"power, superscript", shortcut:{ char:"^" }, renderSymbol }
// getModelMeta(): { text:"\\power", elements:{ powerValue:{ onRemove:"only" } } }
```
字段含义：`names` 用于 symbolMap 与 fuse 检索；`description/filterTag/searchText` 参与过滤与说明；`height` 是面板行高；`shortcut.char` 是面板上显示的输入提示；`type:"template"`/`commandBlocks` 表示整行模板（矩阵/cases），走 `mtTemplateController`。

### 4) 字符序列快捷键（默认表，模块 23017，节选）
```
"->"→"→"   "<-"→"←"   "<="→"≤"   "=>"→"⇒"   ">="→"≥"   "+-"→"±"   "-+"→"∓"
"<<"→"≪"   ">>"→"≫"   "~~"→"≈"   "=/"→"≠"   "=="→"≡"   "><"→"×"   ":-"→"÷"
"if "/"else "/"then "/"let "（startAtLineOrWhiteSpace:true）→ 加粗关键字块；" mod "/" div " → \mathrm
```
用户自定义：`settings.complexObject.inputShortcuts`（`uh.getShortcuts` 11154:20583）→ `Xd.p().setShortcutModels()`
（63241 的 ShortcutMatcher），支持 `char-sequence` 与 `hot-key`（含第二段键 secondKeyCode）。
触发点：`onEditorKeyDown` → `handleShortcut()`(11154:7577) → `Hi.handle`(7419) → `matcher.matchHotkey()`；
序列触发点：插入字符后 `handleReplaceTextEnd`(13620:106)。

### 5) `\` 触发方式相关设置
`settings.complexObject.disableDefaultSuggesstionHotkey`（注意拼写 Suggesstion）关闭默认 `\` 触发；
`settings.suggestionBoxTriggerShortcut` 为 JSON 热键 `{shift,optionOrAlt,control,meta,keyCode}`（模块 20323 解析，默认 keyCode 220）；
`settings.complexObject.suggestionBoxPreferPosition`（"default"/"avoid"）与 `autoCompleteUsingPositionFixed`、`autoCompleteAsModal` 影响弹层定位。

---

## 不确定 / 待查

1. 【推测】`\` keydown 与 `onInput` 两条路径的实际先后：keydown 里 `preventDefault()` 会阻止同一按键产生 input 事件，因此正常情况下只有 keydown 分支生效，`onInput` 的 `"\\"==value` 只是兜底（某些 IME/移动端不触发 keydown）。未在浏览器实测（Lead 可验证：关掉设置项后敲 `\` 应出现字面反斜杠）。
2. 【待查】建议框打开时，**第一次按键到搜索框拿到焦点之间**是否有丢字风险（`getInputRef` 用 `l.A.next` 下一 tick 才 focus）。若用户极快地打 `\f`，`f` 可能落进隐藏 textarea 变成文档字符。这是静态分析无法排除的竞态。
3. 【待查】`requestAutoComplete` 的 `getSafeSelected()` / `cursorInsertionState` 在"已输入若干字符后再按 `\`"场景下的过滤前缀来源：从 87010 看搜索框初始 `input:""`（`componentWillReceiveProps` 里 data 变化会重置），所以似乎**不会**用已有文本做初值；也就是说 Mathcha 这里是"输入 `\` 后重新打字过滤"，而不是"把已输入的 `\fr` 当 query"。需要动态验证一句话确认。
4. 【推测】"删除空 composite 自动塌缩"：`insertInputToLine`/move 路径里没找到显式"空槽即删"的清理；`removeCurrentFromEditor` 只在 Backspace 且槽首时按 `onRemove` 弹确认（`\frac` 的 `onRemove:"all"` 是"整块删"）。是否另有 `stepOut` 时清理空槽，需从 `Qe.stepOut`(1421) + `Ze.A.cleanEmpty*` 继续追（本次未展开）。
5. 【待查】`keyInsertCursor` 只在 68468（`\sqrt`：`sub1`）出现一次，`49812` 用它；多数 composite 只有 `keyInsertOnSelection`。`keyInsertOnSelection` 的两处语义不同：`41587.assignRemovedLine`（把被替换的选区文本塞进该槽）与 `49812`（不用它落光标）。写文档时要区分。
6. 【推测】`\left...\right` 与矩阵/cases 的实际插入细节未逐行展开：`\left` 走 `getCompositeOrSingleModel("\\left")` 或 `\left-pair` 类 symbol；矩阵走 `commandBlocks` 的 `type:"template"` 分支（`wr.handleLatexBlocksTemplate`）。具体哪些名字用 template、`commandBlocks` 的结构长什么样，建议交给 task-1/task-3 交叉确认。
7. 【未做】动态验证（本任务不开浏览器）。建议 Lead 在 http://127.0.0.1:7801/editor 上核对：①`\` 是否只弹框不入字；②`\frac` 后 Enter 是否光标在分子；③`^`/`_` 是否直接出上下标模板；④Tab 是否在分子/分母间跳；⑤中文输入法在 math/text 两种容器里的落字差异；⑥Backspace 在分子开头是否弹"删除"确认。
8. 【推测】`\inline-math`/`\math-container` 的进入方式：`$`（text 模式）与工具栏/命令面板插入；是否有 `Ctrl+M` 之类的快捷键**没有**在 `tt.map`/`rt.map` 里找到（只有一个 K=链接、L/G/J=复制类）。若宿主应用另有快捷键，不在本 bundle 的编辑器键盘表里。
