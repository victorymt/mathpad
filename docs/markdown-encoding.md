# Markdown 落模型：探针报告（P0）

> 目的：在写 Markdown 导入器之前，先把「Markdown 语法落到模型的哪个字段才真的能渲染」用实测钉死。
> 结论以 `docs/re/data/md-encoding.json` 为准（机器可读），本文是过程与证据。
> 原始模型样本：`docs/re/data/md-encoding-samples.json`（8 个探针文档完整模型，探针文档已从 `.data/store.json` 删除）。

## 1. 方法

浏览器实测，而不是读代码猜：

1. `python3 server.py 7801`，打开 `http://127.0.0.1:7801/editor?paper=0`；
2. 用 CDP 在页面里驱动操作：
   - **打字**：往隐藏 `textarea` 派发 `input` 事件（app 的 `onInput` 读 `value` 后自己清空）；
   - **快捷键**：在 `textarea` 上派发合成 `KeyboardEvent`（bundle 用 `keyCode` + `ctrlKey/altKey/shiftKey` 判定，合成事件可用）；
3. 每次操作后读 DOM 类名/`<prefix>` 印证渲染，再 `Ctrl+S` 保存；
4. 从 `.data/store.json` 抄出该文档 `data` 字段的**真实模型 JSON** —— 这是唯一可信的证据来源。

两个自动化坑（不影响结论，但复现时要注意）：

- **多字符不能一次 `input`**：一次塞 `"$x^2$"` 只会得到字面量文本；`$` 这类单字符快捷语法必须**逐字符**派发。
- **textarea 的 value 要自己清**：app 只在它自己处理完后清空，复现脚本里不清理会出现 `WORDWORD` 这种重复。

驱动脚本的核心片段（页面上下文里跑）：

```js
const curTA = () => document.activeElement.tagName === 'TEXTAREA'
  ? document.activeElement : [...document.querySelectorAll('textarea')].pop();
function fireKey(o) {                      // 快捷键
  const ev = new KeyboardEvent('keydown', Object.assign({bubbles:true, cancelable:true}, o));
  Object.defineProperty(ev, 'keyCode', { get: () => o.keyCode });
  curTA().dispatchEvent(ev);
}
async function typeChars(s) {              // 逐字符输入
  for (const ch of s) {
    const ta = curTA(); ta.value = ch;
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    await new Promise(r => setTimeout(r, 140));
    if (curTA()) curTA().value = '';
  }
}
```

## 2. 结论速览（Markdown → 模型）

| Markdown | 落点 | 模型字段 | 证据 |
|---|---|---|---|
| `#` / `##` / `###` | **行样式** | `line.style = {listType:"section", indentIndex:0/1/2}` | 实测 |
| `####` 及更深 | 无对应 | 模型只有 3 级（源码里 `>2` 会被钳回 `2`） | 实测+源码 |
| `-` 无序列表 | **行样式** | `{listType:"unorder"}`，缩进 1 时 `+ indentIndex:1` | 实测 |
| `1.` 有序列表 | **行样式** | `{listType:"order", indentIndex:N}`（编号渲染期算，不存） | 实测 |
| `**粗**` | **文本块样式** | `block.style = {isBold:true}`（被选中的字单独成块） | 实测 |
| `*斜*` | 文本块样式 | `{isItalic:true}` | 实测 |
| `~~删~~` | 文本块样式 | `{textDecoration:"line-through"}` | 源码 |
| `` `代码` `` | 文本块样式 | `{fontName:"pcr"}`（Courier New 等宽） | 源码 |
| `[文字](url)` | 文本块样式 | `{hyperLink:"https://…"}` | 实测 |
| `$…$` | **composite block** | `{type:"composite", text:"\\math-container", displayMode:false, elements:{mathValue:{lines:[…]}}}` | 实测 |
| `$$…$$` | composite block | 同上但 `displayMode:true` | 源码（渲染未实测） |

一句话：**结构类语法（标题/列表）全靠 `line.style`，行内类语法（粗斜删码链接）全是文本块 `style`，只有公式要 composite**。这和上一轮的设计判断一致；本轮把它从「推断」变成了「实测」。

## 3. 逐项证据

### 3.1 标题 = 行样式

操作：一行字 → `Ctrl+Alt+1`，保存。模型：

```json
{ "id": "n0.039…", "blocks": [ { "id": "n0.366…", "text": "H1TITLE" } ],
  "style": { "listType": "section", "indentIndex": 0 } }
```

- 渲染侧：`line` 拿到 `class="root text-mode section sindent-0"`，`<prefix>` 里是自动编号 `1. `；
- 二级/三级分别是 `sindent-1` / `sindent-2`，前缀 `1.1. ` / `1.1.1. `；
- 编号**不在模型里**，是渲染期按 section 计数器算的；
- 源码 `handleSectionAction`：与当前级别相同 → 取消 section；不同 → 设为目标级别（且要求选中的是 root 行）。`setListType` 里对 section 有 `indentIndex > 2 → 2` 的钳制。

### 3.2 列表 = 行样式

无序（`Ctrl+Shift+8`，`Tab` 缩进）：

```json
{ "blocks": [{ "id": "n0.…", "text": "UNORDER1" }], "style": { "listType": "unorder" } }
{ "blocks": [{ "id": "n0.…", "text": "CHILD1"   }], "style": { "listType": "unorder", "indentIndex": 1 } }
```

有序（`Ctrl+Shift+7`）：

```json
{ "blocks": [{ "id": "n0.…", "text": "ORDER1" }], "style": { "listType": "order", "indentIndex": 1 } }
```

- 渲染前缀：无序 `• `（0 级）/ `– `（1 级）；有序 0 级 `1.`、1 级 `(a)` —— 编号方案由 `orderDefaults` 决定，模型只存 `listType`+`indentIndex`；
- **`indentIndex: 0` 时该键直接省略**（不是写 0），这是行样式归一化的结果；
- 空行也能带列表样式（探针里 `blocks: []` + `{listType:"order", indentIndex:1}`）。

### 3.3 行内样式 = 文本块 style，且按 range 拆块

`BOLDWORD` 只给前 4 个字母加粗后：

```json
{ "blocks": [
    { "id": "n0.…", "text": "BOLD", "style": { "isBold": true } },
    { "id": "n0.…", "text": "WORD" } ] }
```

同类实测：`isItalic`（斜）、`textDecoration:"underline"`（下划线）、`hyperLink:"https://example.com/x"`（链接，渲染成 `block.role-hyper-link[data-hyper-link-url]`）。

所以行内 Markdown **不需要新 block 类型**：把一段文字按样式区间拆成若干文本块即可；导出侧本来就有「按 style range 拆开再补 LaTeX 括号」的逻辑。

### 3.4 行内公式 = composite（额外收获）

逐字符输入 `$x^2$` 后保存：

```json
{ "type": "composite", "text": "\\math-container", "displayMode": false,
  "style": { "mathModeType": "\\displaystyle" },
  "elements": { "mathValue": { "id": "n0.…", "lines": [ { "blocks": [
      { "text": "x" },
      { "type": "composite", "text": "\\power", "elements": { "powerValue": { … "2" … } } },
      { "text": "$" } ] } ] } } }
```

- 文本模式里**单个 `$` 字符**就触发建容器（源码走 `getInlineMathContainerModel()`，但落库 `text` 是 `"\\math-container"` + `displayMode:false`）；
- 容器内再打 `$` 是普通字符（所以上面残留了一个 `"$"`），退出容器要按 `→`；
- 混排形态（`AB$x$CD` 实测）：一行 blocks = `[text "AB", composite(\\math-container), text "CD"]`；
- 单个上标是 `composite{text:"\\power", elements:{powerValue}}`（上下标同体才是 `\\power-index`）。

对 Markdown 的直接含义：`$…$` 必须自己解析成 mathValue 里的块树（或先转 LaTeX），数学是唯一需要「迷你 parser」的部分；`$$…$$` 需自己构造 `displayMode:true`，渲染尚未实测。

## 4. 对「最小改动」清单的修正

| 原计划项 | 探针结论 |
|---|---|
| 标题落 `line.style{listType:"section", indentIndex}` | ✅ 成立，但**只有 3 级**，H4–H6 必须降级（或扩模型） |
| 列表落 `line.style{listType, indentIndex}` | ✅ 成立，注意 0 级省略 `indentIndex` |
| 行内样式落 `block.style` | ✅ 成立，键名确认为 `isBold`/`isItalic`/`textDecoration`/`hyperLink`；行内代码用 `fontName:"pcr"`（源码级） |
| 写入前「先探针取证」 | ✅ 已由本报告完成，导入器可直接引用 `md-encoding.json` |
| 数学「方案 B：最小 LaTeX 子集」 | 形状已确认（`\math-container`+`mathValue`+`\power`），可做；但要覆盖 `\frac/\sqrt/\left` 仍需子集 parser |

## 5. 仍未验证（下一轮再探）

1. `textDecoration:"line-through"`（删除线）——只源码确认导出为 `\st{}`，未 UI 实测怎么触发；
2. `fontName:"pcr"`（等宽/行内代码）——只源码确认字体映射，未 UI 实测选择路径；
3. `displayMode:true`（块级公式）的渲染与插入入口；
4. `listItemResetIndex`（有序列表重新编号）；
5. 表格 / 代码围栏 / 图片 / 多段引用（对应 `\table` / `\code-section` / `\image-container`，需另做探针）；
6. 中文、`$`/`\`/`%` 等特殊字符在文本块里的转义与导出（大字量下的表现）。

## 6. 附带产物与清理

- 探针期间通过 `/api/document` 建的 8 个文档（`md-probe*`、`md-p-*`）已从 `.data/store.json` 删除；
- 完整模型原文保留在 `docs/re/data/md-encoding-samples.json`，可直接当回归 fixture 用；
- 探针前备份：`.data/store.json.bak-122923`（内容为探针前的空文档状态）。
