# 逆向分析原始笔记与工具

主报告：`docs/latex-wysiwyg.md`（先读它）。

本目录是"LaTeX 所见即所得"专项逆向分析的完整证据链，每条结论都标注了 webpack module id、原始符号名和代码片段，并区分【已核实】/【推测】。

| 文件 | 内容 |
|---|---|
| `model-layout.md` | 数据模型（lines/blocks/composite 槽位）、约 250 个符号组件的槽位表、排版与 post-render 修补、MATH 度量表 |
| `input-editing.md` | 键盘/IME、`\` → 建议框 → 模板插入链路、光标/选区/删除/撤销、快捷键表 |
| `latex-io.md` | 导入（PEG 语法）与导出（toLatex walker）、内部模型↔LaTeX 映射表，含离线 PEG harness 验证结果 |
| `render-fonts.md` | 屏幕渲染（HTML+CSS）、SVG 构造件、字体体系与 @font-face、度量来源、导出取轮廓 |
| `paper-mode-internals.md` | 白纸模式（极简全白界面）的静态逆向：内置 fullScreen 状态/快捷键、隐藏清单与白名单、`--ui-*` 变量与深色机制、注入 CSS 与 React 抢状态的风险 |
| `paper-mode-dom.md` | 白纸模式的浏览器动态验证：稳定判定/toggle 代码、focus 坑、浮层 z-index、响应式 4 档实测、Esc 行为 |
| `data/composite-slots.json` | 从符号注册表抽出的 33 个"带槽 composite"：module、LaTeX 名、槽名、`keyInsertOnSelection` |
| `tools/split_bundle.mjs`（仓库根 `tools/`） | 把单行 webpack bundle 拆成 `modules/<id>.js` 的脚本（依赖 `@babel/parser`、`@babel/generator`） |
| `tools/latex-io_parse_harness.js` | 在 Node 里加载**真实的** 28623（PEG 语法）+ 51737（导入入口），用桩替换符号组件的离线 harness |

## 还原出来的源码

拆好的模块已经提交在仓库里：`src/mathcha/`（1416 个模块 + 索引，说明见
[src/mathcha/README.md](../../src/mathcha/README.md)）。所以**不需要先拆包**就能直接搜：

```bash
grep -n 'toLatex' src/mathcha/modules/69153.js
grep -n 'matchAutoCompleteKey' src/mathcha/modules/11154.js
```

本目录笔记里的「module 11154:7454」这类位置，在 `src/mathcha/modules/11154.js` 里就是第 7454 行
（同一套拆包流程，已核对）；以后换 babel 版本重新生成时行号可能偏移，按符号名 grep 兜底。

> 分析期间产生的临时文件（当时放在 `.cache/re/scratch/`：抽取脚本、中间 JSON、DOM 快照等）没有入库；
> 仓库里保留的是结论（本目录 md/data）和可复现的工具（`tools/`）。

## 如何重新生成 / 复现拆包

```bash
# 1) 一次性：装 Babel（只有拆包/还原需要，日常运行不需要）
npm install

# 2) 还原 → src/mathcha/modules/<moduleId>.js（1416 个模块）+ src/mathcha/index.json
npm run unpack
```

```bash
# 3) 动态验证：启动本地编辑器，浏览器里敲公式看 DOM / 导入导出 LaTeX
npm run dev          # → http://127.0.0.1:7801/editor
# 文档存在 data/store.json；模型原文直接可读（data 字段是 JSON 字符串）
```

> 说明：`bundle-f9164fb5-ced37e37.js` 版本号是上游构建 hash；上游发新版后模块 id 会变，需重新拆包并核对。
> 本目录的分析针对 `f9164fb5-ced37e37`。
