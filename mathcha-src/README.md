# Mathcha 上游编辑器源码（从 bundle 还原）

`mathcha-src/` 是把 `.cache/cdn/bundle-f9164fb5-ced37e37.js`（Mathcha 前端的 webpack 产物：
6.0 MB、单行压缩）按 webpack moduleId 还原出来的**可读模块**。

- **1416 个模块**，共约 12 MB；最大的两个：`11154`（编辑器核心，25.8k 行）、`94513`（约 976 KB）
- 每个 `modules/<id>.js` 都是合法的 CommonJS 文件：

  ```js
  /* module 11154 — 980486 chars */
  module.exports = function (e, t, r) {   // e=module  t=exports  r=require
    ...
  }
  ```

- 只做了「还原」：缩进/换行由 babel 重新生成，**属性名、类名、字符串没有混淆**；
  局部变量仍是压缩后的短名（`e`/`t`/`n`/`o`…），所以能读结构、能搜符号，但不是上游原始工程。
- **运行期不加载这里**：编辑器仍然加载 `.cache/` 里的原 bundle。这份代码用于阅读、
  检索、比对，以及给本地补丁（`server.py` 的 `BUNDLE_PATCHES`、`web/*.js`）定位。
- 版本对应上游构建 `f9164fb5-ced37e37`。上游发新版后 moduleId 会变，需要重新生成。

## 怎么用

```bash
# 按符号名找实现（属性名可读）
grep -rn "matchAutoCompleteKey" mathcha-src/modules/ | head
grep -rn "disableDefaultSuggesstionHotkey" mathcha-src/modules/

# 直接读某个模块
sed -n '1,120p' mathcha-src/modules/87010.js

# 每个文件都通过 node 语法检查（1416/1416）
node --check mathcha-src/modules/87010.js
```

`docs/re/*.md` 里写的「module 11154 的 7454 行」这类位置和这里**对得上**（同一套拆包流程；
若以后换了 babel 版本重新生成，行号可能略有偏移，以符号名为准）：

```bash
grep -n "onEditorKeyDown\|matchAutoCompleteKey" mathcha-src/modules/11154.js
```

## 关键模块

| 模块 | 作用 | 相关分析 |
|---|---|---|
| `11154` | 编辑器核心：键盘/IME、建议框总装、光标/选区/删除/撤销、历史、导入导出入口 | [input-editing.md](../docs/re/input-editing.md) |
| `87010` | 建议框面板：搜索框 + 过滤 UI | 同上 §B |
| `34354` | 建议框内键盘（Enter / ↑↓ / Tab） | 同上 |
| `32725` | 全局 `document` keydown 栈（浮层抢键） | 同上 |
| `20323` | 热键解析 `safeParseHotkey`（默认 `{keyCode:220}`，即 `\`） | 同上 |
| `98095` | 符号注册表：`symbolMap` / `customSymbolMap` / `getAllSymbols` | [model-layout.md](../docs/re/model-layout.md) |
| `91638` | 建议框按使用频率排序（`numberOfFrequency`） | — |
| `48440` | 符号基类 `getModel()`（模板 → composite 模型） | model-layout.md |
| `43369` / `68468` / `53109` | `\frac` / `\sqrt` / `\power` 组件 | model-layout.md |
| `41587` | `insertInput` / `removeCurrent`（落模型、删除语义） | input-editing.md |
| `13620` | `insertModelAtNormal` / 字符序列自动更正 | input-editing.md |
| `49812` | 光标落点、选区遍历工具 | input-editing.md |
| `23017` | 默认字符序列快捷键表（`->`→`→`、`<=`→`≤`…） | input-editing.md |
| `71669` | 基础文本符号表（base64 压缩 JSON） | model-layout.md |
| `28623` / `51737` | LaTeX 导入 PEG 语法 / 导入入口 | [latex-io.md](../docs/re/latex-io.md) |
| `69153` | 导出 `toLatex` walker | latex-io.md |

完整索引：`index.json`（id、文件、代码长度、字符串线索）。

## 重新生成

```bash
# 一次性：babel 依赖（只在重新生成时需要，运行编辑器不需要；需要联网装一次）
mkdir -p .cache/tools && cd .cache/tools
npm init -y && npm i @babel/parser @babel/generator
cd -

# 还原 → mathcha-src/modules/<id>.js + mathcha-src/index.json
docs/re/tools/unpack_bundle.sh
```

脚本会读 `server.py` 里锁定的 `BUNDLE_NAME` 作为输入；也可以手动传别的 bundle：

```bash
docs/re/tools/unpack_bundle.sh .cache/cdn/bundle-<别的hash>.js
```

实现细节在 `docs/re/tools/split_bundle.mjs`：只解析一遍 AST，找出 webpack 的模块表
（数字 key + 函数值的大对象），把每个模块生成成 `module.exports = function (...)`。

## 合规

这些文件是 Mathcha **公开发布**的前端 bundle 的本地还原，版权归 Mathcha；仅用于本机离线
运行、研究与补丁定位，不构成上游授权，也不代表可以再分发。上游发新版请重新生成并核对 moduleId。
