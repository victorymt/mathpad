# Markdown 导入 / 导出（P1）

把 Markdown 文件转成编辑器文档，或把文档导回 Markdown。

设计原则和 LaTeX 一致：**Markdown 是序列化层，模型里不存 Markdown 原文**。转换只做「语法 → 模型字段」的映射，
模型字段规格依据实测探针 [docs/re/data/md-encoding.json](re/data/md-encoding.json)（探针报告：[docs/markdown-encoding.md](markdown-encoding.md)）。

## 1. 用法

```bash
# 导入（需要服务在跑；结果出现在编辑器左侧文档列表，刷新页面即可看到）
python3 md_convert.py import notes.md --name "我的笔记"

# 只转换、不落库：打印模型 JSON 和降级警告
python3 md_convert.py import notes.md --dry-run

# 导出（docId 见 .data/store.json 的 documents[].id）
python3 md_convert.py export <docId> -o notes.md

# 只看转换统计（不落库）
python3 md_convert.py check notes.md
```

服务没在跑时也可以直接写本地 store（注意：服务运行期间不要这样做，会被服务内存状态覆盖）：

```bash
python3 md_convert.py import notes.md --offline
```

HTTP 接口（编辑器和脚本都能用）：

```bash
curl -s -X POST http://127.0.0.1:7801/api/md/import \
  -H 'Content-Type: application/json' \
  -d '{"name":"笔记","markdown":"# 标题\n\n正文"}'
# → {"docId":"…","name":"笔记","lines":3,"warnings":[]}

curl -s 'http://127.0.0.1:7801/api/md/export?docId=<docId>'
# → text/markdown
```

## 2. 支持矩阵

| Markdown | 模型落点 | 状态 |
|---|---|---|
| `#` `##` `###` | 行样式 `{listType:"section", indentIndex:0/1/2}` | ✅ 原生 |
| `####` ~ `######` | 压到 3 级（`indentIndex:2`） | ⚠️ 降级 + 告警 |
| 段落、软换行 | 段落合并成一行（中文之间不插空格） | ✅ |
| `-` / `*` / `+` 无序列表、缩进嵌套（最多 3 级） | 行样式 `{listType:"unorder"[, indentIndex]}` | ✅ |
| `1.` 有序列表 | 行样式 `{listType:"order"[, indentIndex]}`（编号渲染期自动算） | ✅ |
| `**粗**` `__粗__` | 文本块 `style.isBold` | ✅ |
| `*斜*` `_斜_` | `style.isItalic` | ✅ |
| `~~删除~~` | `style.textDecoration="line-through"` | ✅ |
| `` `行内代码` `` | `style.fontName="pcr"`（Courier 等宽） | ✅（样式化，非结构） |
| `[文字](url)` | `style.hyperLink=url` | ✅ |
| `$行内公式$` | composite `\math-container`（`displayMode:false`，槽 `mathValue`） | ✅ 子集，见 §4 |
| 独占一行的 `$$…$$` | composite `\math-container`（`displayMode:true`） | ✅ 子集 |
| 围栏代码块 ```` ``` ```` | 逐行降级为等宽文本行（`fontName:"pcr"`） | ⚠️ 降级 + 告警 |
| `> 引用` | 降级为普通段落 | ⚠️ 降级 + 告警 |
| GFM 表格 | 逐行降级为纯文本行（单元格用 ` \| ` 连接） | ⚠️ 降级 + 告警 |
| `![alt](url)` | 降级为链接文本 | ⚠️ 降级 + 告警 |
| `---` 分隔线 | 丢弃 | ⚠️ 告警 |
| 内嵌 HTML、脚注、任务列表、引用式链接 | 当普通文本处理 | ⚠️ 无专门处理 |

降级规则：**不静默丢弃**。CLI / API 都会返回 `lossy: …` 警告（带行号），导出的 Markdown 里对应内容仍然在（只是形态变了）。

## 3. 有损点与原因（模型限制）

| 现象 | 原因 |
|---|---|
| H4–H6 变 H3 | 模型只有 `indentIndex 0/1/2`，`setListType` 源码里 `>2` 会被钳到 2 |
| 代码块没有语法高亮 / 语言标记丢失 | 模型有 `\code-section` composite（槽 `rawCode`），但本轮尚未接入，先按等宽文本行降级 |
| 引用块没有左竖线 | 行样式里没有 blockquote 语义，也没有跨行容器 |
| 表格没有单元格/行列结构 | 模型有 `\table`（`"行_列"` 槽），但需要额外探针确认，本轮未接入 |
| 图片变成链接 | 图片走 `\image-container`，需要本地图片资源和额外字段，本轮未接入 |
| 有序列表编号被重排（1. 2. 3.） | 编号是渲染期计算的，原始编号不存模型 |
| 行内 HTML 不解析 | 文本块只存文字 |

## 4. 数学子集

`$…$` / `$$…$$` 里的 LaTeX 由内置的极简解析器转成模型块，支持：

- 普通字符、`+ - = < > , . / !` 等符号（文本块）
- 括号 `( ) [ ] |`（`single` 块；`\left( … \right)` 同理，模型不保存配对）
- 上下标 `^` `_`（`\power` / `\index` composite，脚本槽 `powerValue` / `indexValue`）
- `\frac` `\dfrac` `\tfrac` `\cfrac`（槽 `value` / `sub1`）
- `\sqrt{x}` / `\sqrt[n]{x}`（槽 `value` / `sub1`）
- `\text{…}`（槽 `textValue`）
- `\mathrm` `\mathbf` `\mathit` `\mathbb` `\mathcal` `\mathfrak` `\mathsf` `\mathtt` `\boldsymbol`（写到内部文本块的 `style.mathType`）
- 常用希腊字母 / 关系符 / 大运算符 / 集合符号（`\alpha`、`\sum`、`\int`、`\in`、`\infty` 等）
  —— 这些在模型里落成 **unicode 文本块**（如 `{text:"α"}`），不是 `single` 块（见 [latex-io.md](re/latex-io.md) 的符号表命令说明）；导出时按反向表还原成 `\alpha` 等
- 间距命令（`\,` `\;` `\:` `\!`）忽略

**不支持的命令**（例如 `\begin{cases}`、`\overbrace`、`\unknowncmd`）：降级为文本并告警，不会伪造符号块
（渲染器查不到符号会报错，宁可显示原文）。列完整白名单在代码 `MATH_SYMBOLS`。

## 5. 自检与验收

```bash
python3 md_selftest.py      # 51 项：结构断言 + 回环幂等 + 探针样本回归
```

- 结构断言：标题/列表/行内样式/行内数学/块级数学/降级警告/空输入/转义；
- 回环幂等：`md → 模型 → md → 模型` 两次导出文本一致；
- 探针样本回归：拿 [docs/re/data/md-encoding-samples.json](re/data/md-encoding-samples.json) 里实测落库的模型直接导出，验证导出器认识真实模型形态。

## 6. 后续（不在 P1 范围）

1. `\code-section` 接入（代码围栏 → 真代码块，需先探针确认 `rawCode` 槽与语言属性）；
2. `\table` 接入（GFM 表格 → 真表格，需确认 `"行_列"` 槽在导入侧的写法）；
3. 图片 / 多段引用 / H4+ 扩级（要改模型或加 composite）；
4. 引用式链接、脚注、任务列表、内嵌 HTML；
5. 导出的 `lossy` 警告回传（目前 export 只输出 Markdown 文本，警告打到 stderr）。
