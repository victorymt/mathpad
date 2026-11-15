#!/usr/bin/env python3
"""md_convert.py 自检：结构断言 + 导出回环幂等 + 探针样本回归。

跑法：python3 md_selftest.py        （全绿返回 0，任何失败返回 1）
只依赖标准库，不需要启动服务。
"""
from __future__ import annotations

import json
import os
import sys

import md_convert as mc

ROOT = os.path.dirname(os.path.abspath(__file__))
SAMPLES = os.path.join(ROOT, "docs", "re", "data", "md-encoding-samples.json")

PASSED = 0
FAILED: list[str] = []


def check(name: str, cond: bool, detail: str = ""):
    global PASSED
    if cond:
        PASSED += 1
        print(f"  ok   {name}")
    else:
        FAILED.append(name)
        print(f"  FAIL {name}" + (f"  —— {detail}" if detail else ""))


def section_list(model: dict) -> list:
    return [l for l in model["lines"] if (l.get("style") or {}).get("listType") == "section"]


def blocks_of_line(model: dict, idx: int) -> list:
    return model["lines"][idx].get("blocks") or []


def text_styles(blocks: list) -> dict:
    """{文本: style} 便于断言行内样式"""
    return {b.get("text", ""): (b.get("style") or {}) for b in blocks if "type" not in b}


def test_headings():
    model, warns = mc.markdown_to_model("# A\n\n## B\n\n### C\n\n#### D\n")
    secs = section_list(model)
    check("标题：4 行都是 section", len(secs) == 4, f"实际 {len(secs)}")
    check("标题：级别 0/1/2/2（H4 压到 H3）", [s["style"]["indentIndex"] for s in secs] == [0, 1, 2, 2], str(secs))
    check("标题：H4 压级有告警", any("H4" in w for w in warns), str(warns))


def test_lists():
    md = "- a\n- b\n  - b1\n\n1. x\n2. y\n"
    model, _ = mc.markdown_to_model(md)
    styles = [(l.get("style") or {}) for l in model["lines"] if l.get("style")]
    check("列表：无序 0 级 listType=unorder", "unorder" in [s.get("listType") for s in styles])
    check("列表：缩进项带 indentIndex=1", {"listType": "unorder", "indentIndex": 1} in styles, str(styles))
    check("列表：有序 listType=order", {"listType": "order", "indentIndex": 0} in styles or
          {"listType": "order"} in styles, str(styles))


def test_inline_styles():
    md = "a **b** *i* ~~s~~ `c` [t](https://e.com) d\n"
    model, warns = mc.markdown_to_model(md)
    blocks = blocks_of_line(model, 0)
    styles = text_styles(blocks)
    check("行内：加粗 isBold", styles.get("b", {}).get("isBold") is True, str(styles))
    check("行内：斜体 isItalic", styles.get("i", {}).get("isItalic") is True, str(styles))
    check("行内：删除线 textDecoration", styles.get("s", {}).get("textDecoration") == "line-through", str(styles))
    check("行内：行内代码 fontName=pcr", styles.get("c", {}).get("fontName") == mc.MONO_FONT, str(styles))
    check("行内：链接 hyperLink", styles.get("t", {}).get("hyperLink") == "https://e.com", str(styles))
    check("行内：普通文字不带 style", styles.get("a", {}) == {}, str(styles))
    check("行内：无告警", not warns, str(warns))


def test_inline_math():
    model, warns = mc.markdown_to_model("前 $x^2$ 后\n")
    blocks = blocks_of_line(model, 0)
    kinds = ["type" in b for b in blocks]
    check("行内数学：一行三块（文字/公式/文字）", kinds == [False, True, False], str(kinds))
    comp = blocks[1]
    check("行内数学：text=\\math-container", comp.get("text") == "\\math-container", str(comp.get("text")))
    check("行内数学：displayMode=false", comp.get("displayMode") is False)
    inner = comp["elements"]["mathValue"]["lines"][0]["blocks"]
    check("行内数学：x 是文本块", inner[0].get("text") == "x")
    check("行内数学：^2 是 \\power 复合块", inner[1].get("text") == "\\power" and "powerValue" in inner[1]["elements"])
    check("行内数学：无告警", not warns, str(warns))


def test_display_math():
    model, warns = mc.markdown_to_model("$$\n\\frac{a}{b}\n$$\n")
    blocks = blocks_of_line(model, 0)
    check("块级数学：单块 composite", len(blocks) == 1 and blocks[0].get("type") == "composite")
    check("块级数学：displayMode=true", blocks[0].get("displayMode") is True)
    check("块级数学：\\frac 槽齐全", set(blocks[0]["elements"]["mathValue"]["lines"][0]["blocks"][0]["elements"]) == {"value", "sub1"})


def test_math_symbols():
    model, warns = mc.markdown_to_model("$\\alpha + \\pm \\sum$\n")
    inner = blocks_of_line(model, 0)[0]["elements"]["mathValue"]["lines"][0]["blocks"]
    texts = [b.get("text") for b in inner if "type" not in b]
    check("数学符号：\\alpha 落成 unicode 文本块", "α" in "".join(t for t in texts if t), str(texts))
    check("数学符号：不产生 single 块", all(b.get("type") != "single" for b in inner), str(inner))
    md, _ = mc.model_to_markdown(model)
    check("数学符号：导出回 \\alpha", "\\alpha" in md and "\\sum" in md, repr(md))
    check("数学符号：无告警", not warns, str(warns))


def test_math_degrade():
    model, warns = mc.markdown_to_model("$\\unknowncmd{x}$\n")
    check("数学：未知命令告警", any("unknowncmd" in w for w in warns), str(warns))
    check("数学：未知命令不产生 single 块", all(b.get("type") != "single" for b in blocks_of_line(model, 0)))


def test_paragraph_join():
    model, _ = mc.markdown_to_model("第一行\n第二行\n")
    check("段落：软换行合并为一行", len(model["lines"]) == 2, f"实际 {len(model['lines'])}")
    text = blocks_of_line(model, 0)[0].get("text")
    check("段落：中文行之间不插空格", text == "第一行第二行", repr(text))
    model2, _ = mc.markdown_to_model("line one\nline two\n")
    check("段落：英文行之间插空格", blocks_of_line(model2, 0)[0].get("text") == "line one line two")


def test_code_fence():
    md = "```python\nx = 1\ny = 2\n```\n"
    model, warns = mc.markdown_to_model(md)
    check("代码围栏：有告警", any("代码围栏" in w for w in warns), str(warns))
    styles = [b.get("style") for l in model["lines"] for b in l["blocks"]]
    check("代码围栏：降级为等宽文本块", {"fontName": mc.MONO_FONT} in styles, str(styles))


def test_quote_table_hr_image():
    model, warns = mc.markdown_to_model("> 引用\n\n| a | b |\n| --- | --- |\n| 1 | 2 |\n\n---\n")
    joined = " ".join(warns)
    check("引用：降级告警", "引用块" in joined, joined)
    check("表格：降级告警", "表格" in joined, joined)
    check("分隔线：丢弃告警", "分隔线" in joined, joined)
    model2, warns2 = mc.markdown_to_model("![alt](https://e.com/a.png)\n")
    styles = text_styles(blocks_of_line(model2, 0))
    check("图片：降级为链接", styles.get("alt", {}).get("hyperLink") == "https://e.com/a.png", str(styles))
    check("图片：有告警", any("图片" in w for w in warns2), str(warns2))


def test_empty_and_escape():
    model, warns = mc.markdown_to_model("")
    check("空输入：不崩且至少 1 行", len(model["lines"]) >= 1, str(len(model["lines"])))
    model2, _ = mc.markdown_to_model("a \\* b\n")
    check("转义：\\* 变字面星号", "*" in (blocks_of_line(model2, 0)[0].get("text") or ""))
    md_out, _ = mc.model_to_markdown(mc.markdown_to_model("字面 * 星号\n")[0])
    check("导出：字面星号被转义", "\\*" in md_out, repr(md_out))


FIXTURES = [
    "# 项目笔记\n\n这是**重点**，也是*补充*。\n\n## 清单\n\n- 第一项\n- 第二项\n  - 子项\n\n1. 步骤一\n2. 步骤二\n\n$$\n\\frac{a}{b} = \\sqrt{x}\n$$\n",
    "# 只有标题\n",
    "普通段落，没有标题。\n\n第二段带 `代码` 和 [链接](https://example.com)。\n",
    "## 数学为主\n\n行内 $a^2 + b^2 = c^2$，块级：\n\n$$\n\\alpha + \\beta = \\frac{1}{2}\n$$\n",
]


def test_roundtrip():
    for i, md in enumerate(FIXTURES):
        model, warns1 = mc.markdown_to_model(md)
        md1, warns2 = mc.model_to_markdown(model)
        model2, _ = mc.markdown_to_model(md1)
        md2, _ = mc.model_to_markdown(model2)
        check(f"回环幂等 fixture#{i}", md1 == md2, repr(md1[:80]) + " != " + repr(md2[:80]))


def test_probe_samples():
    if not os.path.exists(SAMPLES):
        print("  skip 探针样本（缺 docs/re/data/md-encoding-samples.json）")
        return
    data = json.load(open(SAMPLES, encoding="utf-8"))
    docs = data.get("docs") or {}
    check("探针样本：可加载", bool(docs), str(len(docs)))
    expected = {
        "md-probe2": ["# H1TITLE", "- UNORDER1", "  - CHILD1", "1. ORDER1"],
        "md-p-bold": ["**BOLD**"],
        "md-p-italic": ["*ITAL*"],
        "md-p-link": ["[LINKWORD](https://example.com/x)"],
        "md-p-math2": ["$x^{2}$", "$x$"],
    }
    for name, needles in expected.items():
        if name not in docs:
            check(f"探针样本 {name} 存在", False)
            continue
        md, warns = mc.model_to_markdown(docs[name]["model"])
        ok = all(n in md for n in needles)
        check(f"探针样本 {name} 导出", ok, f"md={md[:120]!r} warns={warns}")


def main() -> int:
    print("md_convert 自检")
    for fn in (
        test_headings, test_lists, test_inline_styles, test_inline_math, test_display_math,
        test_math_symbols, test_math_degrade, test_paragraph_join, test_code_fence, test_quote_table_hr_image,
        test_empty_and_escape, test_roundtrip, test_probe_samples,
    ):
        print(f"- {fn.__name__}")
        fn()
    print()
    if FAILED:
        print(f"FAILED {len(FAILED)} / {PASSED + len(FAILED)}")
        for f in FAILED:
            print("  -", f)
        return 1
    print(f"PASS {PASSED}/{PASSED}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
