#!/usr/bin/env python3
"""Markdown ↔ Mathcha 本地版模型 转换器（P1：结构子集）。

只依赖标准库。模型字段规格来自实测探针：docs/re/data/md-encoding.json，
支持矩阵与有损点见 docs/markdown.md。

命令：
  python3 md_convert.py import notes.md [--name 名字] [--port 7801] [--offline] [--dry-run]
  python3 md_convert.py export <docId> [--port 7801] [--offline] [-o out.md]
  python3 md_convert.py check notes.md        # 只转换并打印统计/警告，不落库
  python3 md_convert.py list                  # 列出文档 id 与名字（导出用）

约定：
  - Markdown 是序列化层：模型里不存 Markdown 原文；不支持的语法一律降级并告警，不静默丢。
  - 标题只有 3 级（模型 listType=section + indentIndex 0..2），H4–H6 压到 H3 并告警。
  - 除 Markdown 的 `#` 外，也认 LaTeX 风格的标题行：`\\title1 文本`、`\\section{文本}`（扩展语法）。
"""
from __future__ import annotations

import argparse
import json
import os
import random
import re
import sys
import urllib.error
import urllib.parse
import urllib.request

ROOT = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(ROOT, ".data")
DEFAULT_PORT = 7801
DIGITS = "0123456789"

MONO_FONT = "pcr"  # Courier New（等宽），见 md-encoding.json / bundle 字体映射


# ---------------------------------------------------------------- 基础工具

def _rid(prefix: str) -> str:
    return prefix + "0." + "".join(random.choice(DIGITS) for _ in range(17))


def _text_block(text: str, style: dict | None = None) -> dict:
    b = {"id": _rid("n"), "text": text}
    if style:
        b["style"] = dict(style)
    return b


def _single_block(text: str) -> dict:
    return {"id": _rid("n"), "type": "single", "text": text}


def _composite(text: str, elements: dict, **attrs) -> dict:
    b = {"id": _rid("n"), "type": "composite", "text": text, "elements": elements}
    b.update(attrs)
    return b


def _line(blocks: list, style: dict | None = None) -> dict:
    line = {"id": _rid("n"), "blocks": blocks}
    if style:
        line["style"] = dict(style)
    return line


def _editor(blocks: list) -> dict:
    return {"id": _rid("n"), "lines": [{"id": _rid("n"), "blocks": blocks}]}


def _is_text_block(b: dict) -> bool:
    return "type" not in b


def _is_cjk(ch: str) -> bool:
    return "\u4e00" <= ch <= "\u9fff" or "\u3000" <= ch <= "\u303f" or "\uff00" <= ch <= "\uffef"


# ---------------------------------------------------------------- 行内 Markdown

INLINE_RE = re.compile(
    r"""
      (?P<escape>\\[\\`*_{}\[\]()#+\-.!$~>|])
    | (?P<code>`[^`\n]+`)
    | (?P<mathd>\$\$(?P<mathd_body>.+?)\$\$)
    | (?P<math>(?<!\\)\$(?P<math_body>[^$\n]+?)(?<!\\)\$)
    | (?P<img>!\[(?P<img_alt>[^\]]*)\]\((?P<img_url>[^)\s]+)\))
    | (?P<link>\[(?P<link_text>[^\]]*)\]\((?P<link_url>[^)\s]+)\))
    | (?P<bold>\*\*(?P<bold_body>.+?)\*\*)
    | (?P<bold2>__(?P<bold2_body>.+?)__)
    | (?P<strike>~~(?P<strike_body>.+?)~~)
    | (?P<ital>\*(?P<ital_body>[^*\n]+?)\*)
    | (?P<ital2>(?<![\w])_(?P<ital2_body>[^_\n]+?)_(?![\w]))
    | (?P<text>[^\\`$!\[*_~]+|.)
    """,
    re.X | re.S,
)


def _merge_spans(spans: list) -> list:
    """合并相邻同样式文本 span，保持模型里 block 数量不爆炸。"""
    out: list = []
    for sp in spans:
        if sp["kind"] == "text" and not sp.get("text"):
            continue
        if (
            out
            and sp["kind"] == "text"
            and out[-1]["kind"] == "text"
            and out[-1]["style"] == sp["style"]
        ):
            out[-1]["text"] += sp["text"]
        else:
            out.append(dict(sp))
    return out


def parse_inline(s: str, warnings: list, lineno: int) -> list:
    """行内 Markdown → span 列表。

    span: {"kind":"text","text":..., "style":{...}} 或 {"kind":"math","latex":..., "display":bool}
    """
    spans: list = []
    pos = 0
    while pos < len(s):
        m = INLINE_RE.match(s, pos)
        if not m:  # 理论不可达（text 分支能匹配单字符），兜底推进
            spans.append({"kind": "text", "text": s[pos], "style": {}})
            pos += 1
            continue
        pos = m.end()
        g = m.lastgroup
        if m.group("escape") is not None:
            spans.append({"kind": "text", "text": m.group("escape")[1], "style": {}})
        elif g == "code":
            spans.append({"kind": "text", "text": m.group(0)[1:-1], "style": {"fontName": MONO_FONT}})
        elif g == "mathd":
            spans.append({"kind": "math", "latex": m.group("mathd_body").strip(), "display": True})
        elif g == "math":
            spans.append({"kind": "math", "latex": m.group("math_body").strip(), "display": False})
        elif g == "img":
            warnings.append(f"line {lineno}: 图片降级为链接文本（模型暂无可用图片路径）")
            spans.append(
                {"kind": "text", "text": m.group("img_alt") or m.group("img_url"),
                 "style": {"hyperLink": m.group("img_url")}}
            )
        elif g == "link":
            spans.append(
                {"kind": "text", "text": m.group("link_text"), "style": {"hyperLink": m.group("link_url")}}
            )
        elif g in ("bold", "bold2"):
            body = m.group("bold_body") if g == "bold" else m.group("bold2_body")
            for sp in parse_inline(body, warnings, lineno):
                if sp["kind"] == "text":
                    sp["style"] = dict(sp["style"], isBold=True)
                spans.append(sp)
        elif g == "ital":
            for sp in parse_inline(m.group("ital_body"), warnings, lineno):
                if sp["kind"] == "text":
                    sp["style"] = dict(sp["style"], isItalic=True)
                spans.append(sp)
        elif g == "ital2":
            for sp in parse_inline(m.group("ital2_body"), warnings, lineno):
                if sp["kind"] == "text":
                    sp["style"] = dict(sp["style"], isItalic=True)
                spans.append(sp)
        elif g == "strike":
            for sp in parse_inline(m.group("strike_body"), warnings, lineno):
                if sp["kind"] == "text":
                    sp["style"] = dict(sp["style"], textDecoration="line-through")
                spans.append(sp)
        else:  # text
            spans.append({"kind": "text", "text": m.group(0), "style": {}})
    return _merge_spans(spans)


# ---------------------------------------------------------------- 块级 Markdown

_ATX_RE = re.compile(r"^ {0,3}(#{1,6})[ \t]+(.*?)[ \t]*#*[ \t]*$")
# LaTeX 风格标题（本转换器的扩展语法，方便习惯 LaTeX 的人少敲）：\title1 文本 / \section{文本} …
_TITLE_SHORT_RE = re.compile(r"^ {0,3}\\(?:title|heading)[ \t]*([1-6])[ \t]*[.:：、]?[ \t]*(.*)$")
_TITLE_LATEX_RE = re.compile(r"^ {0,3}\\(section|subsection|subsubsection)[ \t]*\{(.*)\}[ \t]*$")
_FENCE_RE = re.compile(r"^\s*(```+|~~~+)\s*([\w+-]*)\s*$")
_LIST_RE = re.compile(r"^(\s*)([-*+]|\d{1,9}[.)])[ \t]+(.*)$")
_QUOTE_RE = re.compile(r"^\s*>\s?(.*)$")
_HR_RE = re.compile(r"^\s*([-*_])(?:[ \t]*\1){2,}\s*$")
_SETEXT_RE = re.compile(r"^\s*(=+|-+)\s*$")


def _join_soft_lines(parts: list) -> str:
    """软换行合并：中文之间不插空格，其余按空格。"""
    out = ""
    for p in parts:
        if not out:
            out = p
            continue
        if _is_cjk(out[-1]) and _is_cjk(p[0]):
            out += p
        else:
            out += " " + p
    return out


def parse_markdown(md: str) -> tuple[list, list]:
    """Markdown → 行 IR。每项：{kind, level?, ordered?, spans/latex, line}"""
    text = md.replace("\r\n", "\n").replace("\r", "\n")
    raw_lines = text.split("\n")
    ir: list = []
    warnings: list = []
    para: list[str] = []
    para_line = 0

    def flush_para():
        nonlocal para
        if not para:
            return
        joined = _join_soft_lines([p.strip() for p in para])
        ir.append({"kind": "paragraph", "spans": parse_inline(joined, warnings, para_line), "line": para_line})
        para = []

    i = 0
    while i < len(raw_lines):
        line = raw_lines[i]
        lineno = i + 1
        stripped = line.strip()

        # 围栏代码块
        m = _FENCE_RE.match(line)
        if m:
            flush_para()
            fence = m.group(1)
            lang = m.group(2)
            code_lines: list[str] = []
            i += 1
            while i < len(raw_lines) and not re.match(r"^\s*" + re.escape(fence[:3]), raw_lines[i]):
                code_lines.append(raw_lines[i])
                i += 1
            i += 1  # 跳过收尾围栏
            warnings.append(
                f"line {lineno}: 代码围栏降级为等宽文本行"
                + (f"（lang={lang}）" if lang else "")
                + "；模型有 \\code-section 但本轮不导入"
            )
            for cl in code_lines:
                ir.append(
                    {
                        "kind": "paragraph",
                        "spans": [{"kind": "text", "text": cl, "style": {"fontName": MONO_FONT}}],
                        "line": lineno,
                    }
                )
            continue

        # LaTeX 风格标题：\title1 文本 / \section{文本}
        m = _TITLE_SHORT_RE.match(line)
        if m:
            flush_para()
            level = int(m.group(1)) - 1
            ir.append({"kind": "heading", "level": level, "spans": parse_inline(m.group(2), warnings, lineno), "line": lineno})
            i += 1
            continue
        m = _TITLE_LATEX_RE.match(line)
        if m:
            flush_para()
            level = {"section": 0, "subsection": 1, "subsubsection": 2}[m.group(1)]
            ir.append({"kind": "heading", "level": level, "spans": parse_inline(m.group(2), warnings, lineno), "line": lineno})
            i += 1
            continue

        # ATX 标题
        m = _ATX_RE.match(line)
        if m:
            flush_para()
            level = len(m.group(1))
            ir.append({"kind": "heading", "level": level - 1, "spans": parse_inline(m.group(2), warnings, lineno), "line": lineno})
            i += 1
            continue

        # Setext 标题（上一段 + === / ---）
        if para and _SETEXT_RE.match(stripped) and stripped:
            level = 0 if stripped[0] == "=" else 1
            joined = _join_soft_lines([p.strip() for p in para])
            ir.append({"kind": "heading", "level": level, "spans": parse_inline(joined, warnings, para_line), "line": para_line})
            para = []
            i += 1
            continue

        # 列表项
        m = _LIST_RE.match(line)
        if m:
            flush_para()
            indent = len(m.group(1).expandtabs(4))
            level = min(indent // 2, 3)
            marker = m.group(2)
            ordered = marker[0].isdigit()
            ir.append(
                {
                    "kind": "list",
                    "level": level,
                    "ordered": ordered,
                    "spans": parse_inline(m.group(3), warnings, lineno),
                    "line": lineno,
                }
            )
            i += 1
            continue

        # 引用块：单段降级
        m = _QUOTE_RE.match(line)
        if m:
            flush_para()
            warnings.append(f"line {lineno}: 引用块降级为普通段落")
            ir.append({"kind": "paragraph", "spans": parse_inline(m.group(1), warnings, lineno), "line": lineno})
            i += 1
            continue

        # 分隔线：丢弃
        if _HR_RE.match(line):
            flush_para()
            warnings.append(f"line {lineno}: 分隔线（---）无模型对应，已丢弃")
            i += 1
            continue

        # 表格：整体降级为纯文本行
        if stripped.startswith("|"):
            flush_para()
            warnings.append(f"line {lineno}: 表格降级为纯文本行")
            while i < len(raw_lines) and raw_lines[i].strip().startswith("|"):
                row = raw_lines[i].strip()
                cells = [c.strip() for c in row.strip("|").split("|")]
                is_sep = bool(cells) and all(re.fullmatch(r":?-{2,}:?", c) for c in cells if c)
                if not is_sep:
                    ir.append(
                        {
                            "kind": "paragraph",
                            "spans": parse_inline(" | ".join(cells), warnings, i + 1),
                            "line": i + 1,
                        }
                    )
                i += 1
            continue

        # 独占一行的 $$ 块级公式
        if stripped.startswith("$$"):
            flush_para()
            body = stripped[2:]
            if body.endswith("$$"):
                body = body[:-2].strip()
                i += 1
            else:
                body_lines = [body] if body.strip() else []
                i += 1
                while i < len(raw_lines) and not raw_lines[i].strip().startswith("$$"):
                    body_lines.append(raw_lines[i])
                    i += 1
                i += 1  # 跳过收尾 $$
                body = "\n".join(body_lines).strip()
            ir.append({"kind": "display_math", "latex": body, "line": lineno})
            continue

        # 空行 = 段落分隔
        if not stripped:
            flush_para()
            i += 1
            continue

        # 普通段落行
        if not para:
            para_line = lineno
        para.append(line)
        i += 1

    flush_para()
    return ir, warnings


# ---------------------------------------------------------------- LaTeX → 数学块

MATH_SYMBOLS = {
    # 希腊字母
    "\\alpha": "α", "\\beta": "β", "\\gamma": "γ", "\\delta": "δ", "\\epsilon": "ε",
    "\\varepsilon": "ε", "\\zeta": "ζ", "\\eta": "η", "\\theta": "θ", "\\vartheta": "ϑ",
    "\\iota": "ι", "\\kappa": "κ", "\\lambda": "λ", "\\mu": "μ", "\\nu": "ν", "\\xi": "ξ",
    "\\pi": "π", "\\varpi": "ϖ", "\\rho": "ρ", "\\varrho": "ϱ", "\\sigma": "σ",
    "\\varsigma": "ς", "\\tau": "τ", "\\upsilon": "υ", "\\phi": "φ", "\\varphi": "ϕ",
    "\\chi": "χ", "\\psi": "ψ", "\\omega": "ω",
    "\\Gamma": "Γ", "\\Delta": "Δ", "\\Theta": "Θ", "\\Lambda": "Λ", "\\Xi": "Ξ",
    "\\Pi": "Π", "\\Sigma": "Σ", "\\Upsilon": "Υ", "\\Phi": "Φ", "\\Psi": "Ψ", "\\Omega": "Ω",
    # 运算符 / 关系 / 常用符号
    "\\pm": "±", "\\mp": "∓", "\\times": "×", "\\div": "÷", "\\cdot": "⋅",
    "\\ast": "∗", "\\star": "⋆", "\\circ": "∘", "\\bullet": "∙",
    "\\le": "≤", "\\leq": "≤", "\\ge": "≥", "\\geq": "≥", "\\ne": "≠", "\\neq": "≠",
    "\\approx": "≈", "\\equiv": "≡", "\\sim": "∼", "\\simeq": "≃", "\\cong": "≅",
    "\\propto": "∝", "\\to": "→", "\\rightarrow": "→", "\\leftarrow": "←",
    "\\Rightarrow": "⇒", "\\Leftarrow": "⇐", "\\leftrightarrow": "↔", "\\mapsto": "↦",
    "\\infty": "∞", "\\partial": "∂", "\\nabla": "∇", "\\sum": "∑", "\\prod": "∏",
    "\\coprod": "∐", "\\int": "∫", "\\iint": "∬", "\\iiint": "∭", "\\oint": "∮",
    "\\in": "∈", "\\notin": "∉", "\\ni": "∋", "\\subset": "⊂", "\\subseteq": "⊆",
    "\\supset": "⊃", "\\supseteq": "⊇", "\\cup": "∪", "\\cap": "∩", "\\setminus": "∖",
    "\\forall": "∀", "\\exists": "∃", "\\nexists": "∄", "\\emptyset": "∅",
    "\\varnothing": "∅", "\\angle": "∠", "\\perp": "⊥", "\\parallel": "∥", "\\mid": "∣",
    "\\ldots": "…", "\\cdots": "⋯", "\\dots": "…", "\\vdots": "⋮", "\\ddots": "⋱",
    "\\prime": "′", "\\hbar": "ℏ", "\\ell": "ℓ", "\\Re": "ℜ", "\\Im": "ℑ",
    "\\aleph": "ℵ", "\\wp": "℘", "\\neg": "¬", "\\land": "∧", "\\lor": "∨",
    "\\implies": "⟹", "\\iff": "⟺", "\\because": "∵", "\\therefore": "∴", "\\triangle": "△",
}

# 反向表：unicode → LaTeX 命令（导出用；命令后补空格避免粘连）
MATH_SYMBOLS_REV = {ch: cmd + " " for cmd, ch in MATH_SYMBOLS.items()}

MATH_BRACKETS = {"(": "(", ")": ")", "[": "[", "]": "]", "|": "|"}

MATH_DELIM_MAP = {
    "(": "(", ")": ")", "[": "[", "]": "]", "|": "|",
    "\\{": "\\{", "\\}": "\\}", "\\langle": "\\left\\angle", "\\rangle": "\\right\\angle",
    "\\lbrace": "{", "\\rbrace": "}", "\\lbrack": "[", "\\rbrack": "]",
    "\\|": "\\left\\Vert", "\\Vert": "\\left\\Vert",
}

MATH_DELIM_REV = {
    "\\left\\angle": "\\langle", "\\right\\angle": "\\rangle",
    "\\left\\Vert": "\\|", "\\{": "\\{", "\\}": "\\}",
}


class MathParser:
    """极简 LaTeX 子集 → 数学块列表。不支持的命令降级为文本并告警。"""

    def __init__(self, src: str):
        self.s = src
        self.i = 0
        self.warnings: list[str] = []

    # ---- 低层读取
    def _peek(self, n: int = 1) -> str:
        return self.s[self.i:self.i + n]

    def _eof(self) -> bool:
        return self.i >= len(self.s)

    def _skip_space(self):
        while not self._eof() and self.s[self.i] in " \t\n\r":
            self.i += 1

    def _read_group_raw(self) -> str:
        """读 {...} 的内容（不含外层花括号）；支持嵌套与转义。"""
        self._skip_space()
        if self._peek() != "{":
            return ""
        self.i += 1
        depth = 1
        start = self.i
        while not self._eof():
            ch = self.s[self.i]
            if ch == "\\":
                self.i += 2
                continue
            if ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0:
                    inner = self.s[start:self.i]
                    self.i += 1
                    return inner
            self.i += 1
        return self.s[start:]

    def _read_bracket_raw(self) -> str:
        self._skip_space()
        if self._peek() != "[":
            return ""
        end = self.s.find("]", self.i + 1)
        if end < 0:
            return ""
        inner = self.s[self.i + 1:end]
        self.i = end + 1
        return inner

    def _read_argument(self) -> str:
        self._skip_space()
        if self._eof():
            return ""
        if self._peek() == "{":
            return self._read_group_raw()
        if self._peek() == "\\":
            m = re.match(r"\\[A-Za-z]+|\\.", self.s[self.i:])
            if m:
                self.i += len(m.group(0))
                return m.group(0)
            return ""
        ch = self.s[self.i]
        self.i += 1
        return ch

    def _read_delimiter(self) -> str:
        self._skip_space()
        if self._eof():
            return ""
        if self._peek() == "\\":
            m = re.match(r"\\[A-Za-z]+|\\.", self.s[self.i:])
            if not m:
                return ""
            self.i += len(m.group(0))
            return MATH_DELIM_MAP.get(m.group(0), m.group(0))
        ch = self.s[self.i]
        self.i += 1
        return MATH_DELIM_MAP.get(ch, ch)

    # ---- 解析
    def parse(self, stop_cmd: str | None = None) -> list:
        blocks: list = []
        textbuf: list[str] = []

        def flush():
            if textbuf:
                blocks.append(_text_block("".join(textbuf)))
                textbuf.clear()

        while not self._eof():
            if stop_cmd and self.s.startswith(stop_cmd, self.i):
                after = self.s[self.i + len(stop_cmd):self.i + len(stop_cmd) + 1]
                if not after.isalpha():
                    break
            ch = self.s[self.i]

            if ch in " \t\n\r":
                self.i += 1
                flush()
                continue

            if ch == "{":
                flush()
                inner = self._read_group_raw()
                blocks.extend(self._parse_fragment(inner))
                continue

            if ch == "}":
                self.i += 1
                flush()
                continue

            if ch in "^_":
                flush()
                mark = ch
                self.i += 1
                arg = self._read_argument()
                script = self._parse_fragment(arg)
                if not blocks:
                    self.warnings.append(f"数学：{mark} 缺少基座，已降级为文本")
                    blocks.append(_text_block(mark + arg))
                    continue
                if mark == "^":
                    blocks.append(_composite("\\power", {"powerValue": _editor(script)}))
                else:
                    blocks.append(_composite("\\index", {"indexValue": _editor(script)}))
                continue

            if ch == "\\":
                flush()
                blocks.extend(self._read_command())
                continue

            if ch in MATH_BRACKETS:
                flush()
                blocks.append(_single_block(MATH_BRACKETS[ch]))
                self.i += 1
                continue

            textbuf.append(ch)
            self.i += 1

        flush()
        return blocks

    def _parse_fragment(self, src: str) -> list:
        p = MathParser(src)
        out = p.parse()
        self.warnings.extend(p.warnings)
        return out

    def _read_command(self) -> list:
        start = self.i
        self.i += 1  # 吃掉反斜杠
        m = re.match(r"[A-Za-z]+", self.s[self.i:])
        if not m:
            # 转义 / 间距命令
            ch = self._peek()
            self.i += 1 if ch else 0
            if ch in "{}%$&#_":
                return [_text_block(ch)]
            if ch in ",;:! ":
                return []
            if ch == "\\":
                return []
            return [_text_block("\\" + ch)] if ch else []

        name = "\\" + m.group(0)
        self.i += len(m.group(0))

        if name in ("\\frac", "\\dfrac", "\\tfrac", "\\cfrac"):
            a = self._read_argument()
            b = self._read_argument()
            return [
                _composite(
                    "\\frac",
                    {"value": _editor(self._parse_fragment(a)), "sub1": _editor(self._parse_fragment(b))},
                )
            ]

        if name == "\\sqrt":
            idx = self._read_bracket_raw()
            body = self._read_argument()
            els = {"value": _editor(self._parse_fragment(body))}
            if idx.strip():
                els["sub1"] = _editor(self._parse_fragment(idx))
            return [_composite("\\sqrt", els)]

        if name in ("\\text", "\\textrm", "\\textnormal", "\\mbox", "\\operatorname"):
            body = self._read_group_raw()
            return [_composite("\\text", {"textValue": _editor([_text_block(body)] if body else [])})]

        if name in ("\\mathrm", "\\mathbf", "\\mathit", "\\mathbb", "\\mathcal", "\\mathfrak",
                    "\\mathsf", "\\mathtt", "\\boldsymbol"):
            body = self._read_argument()
            inner = self._parse_fragment(body)
            for b in inner:
                if _is_text_block(b):
                    b.setdefault("style", {})["mathType"] = name
            return inner

        if name == "\\left":
            delim = self._read_delimiter()
            inner_blocks = self.parse(stop_cmd="\\right")
            close = ""
            if self.s.startswith("\\right", self.i):
                self.i += len("\\right")
                close = self._read_delimiter()
            out = []
            if delim:
                out.append(_single_block(delim))
            out.extend(inner_blocks)
            if close:
                out.append(_single_block(close))
            return out

        if name == "\\right":
            return []

        if name in ("\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"):
            return []

        if name in MATH_SYMBOLS:
            # 模型里符号表命令落成 unicode 文本块（如 {text:"α"}），不是 single 块
            return [_text_block(MATH_SYMBOLS[name])]

        # 未知命令：不伪造 single（渲染器查不到会报错），降级为文本并告警
        self.warnings.append(f"数学：不支持的命令 {name}（已按文本保留）")
        return [_text_block(name)]


def math_to_blocks(latex: str) -> tuple[list, list]:
    p = MathParser(latex)
    blocks = p.parse()
    return blocks, p.warnings


def _math_container(latex: str, display: bool, warnings: list) -> dict:
    inner, warns = math_to_blocks(latex)
    warnings.extend(warns)
    return _composite(
        "\\math-container",
        {"mathValue": _editor(inner)},
        displayMode=bool(display),
        style={"mathModeType": "\\displaystyle"},
    )


# ---------------------------------------------------------------- 行内 span → 模型块

def _span_to_blocks(spans: list, warnings: list) -> list:
    blocks: list = []
    for sp in spans:
        if sp["kind"] == "math":
            blocks.append(_math_container(sp["latex"], sp.get("display", False), warnings))
        else:
            blocks.append(_text_block(sp["text"], sp.get("style")))
    return blocks


def ir_to_model(ir: list, warnings: list) -> dict:
    lines: list = []
    for item in ir:
        kind = item["kind"]
        if kind == "heading":
            level = item["level"]
            if level > 2:
                warnings.append(
                    f"line {item.get('line', '?')}: 标题 H{level + 1} 超出模型上限（3 级），已压到 H3"
                )
                level = 2
            lines.append(
                _line(_span_to_blocks(item["spans"], warnings), {"listType": "section", "indentIndex": level})
            )
        elif kind == "list":
            style: dict = {"listType": "order" if item["ordered"] else "unorder"}
            if item["level"] > 0:
                style["indentIndex"] = item["level"]
            lines.append(_line(_span_to_blocks(item["spans"], warnings), style))
        elif kind == "display_math":
            lines.append(_line([_math_container(item["latex"], True, warnings)]))
        else:
            lines.append(_line(_span_to_blocks(item["spans"], warnings)))

    if not lines:
        lines.append({"id": _rid("n"), "blocks": []})
    # 编辑器习惯：文档末尾留一个空行
    if lines[-1]["blocks"]:
        lines.append({"id": _rid("n"), "blocks": []})
    return {
        "id": _rid("r"),
        "lines": lines,
        "pageSettings": {"pageSize": {"width": 700}},
        "___version": 2,
        "version": 2,
        "av": 46,
    }


def markdown_to_model(md: str) -> tuple[dict, list]:
    ir, warnings = parse_markdown(md)
    model = ir_to_model(ir, warnings)
    return model, warnings


# ---------------------------------------------------------------- 模型 → Markdown

MATH_SINGLE_REV = {
    "(": "(", ")": ")", "[": "[", "]": "]", "|": "|",
    "\\left\\angle": "\\langle", "\\right\\angle": "\\rangle",
    "\\left\\Vert": "\\|", "\\{": "\\{", "\\}": "\\}",
    "\\lbrace": "{", "\\rbrace": "}", "\\lbrack": "[", "\\rbrack": "]",
}

_MD_ESCAPE_RE = re.compile(r"([\\`*_\[\]$~])")


def esc_md(text: str) -> str:
    return _MD_ESCAPE_RE.sub(r"\\\1", text)


def math_blocks_to_latex(blocks: list, warnings: list) -> str:
    out: list[str] = []
    for b in blocks:
        if "type" not in b:
            raw = b.get("text", "")
            # unicode 数学符号还原成命令（lpha、\pm …），其余字符原样
            out.append("".join(MATH_SYMBOLS_REV.get(ch, ch) for ch in raw))
            continue
        name = b.get("text", "")
        els = b.get("elements") or {}

        def slot(key: str) -> str:
            ed = els.get(key) or {}
            lines = ed.get("lines") or []
            if not lines:
                return ""
            return math_blocks_to_latex(lines[0].get("blocks") or [], warnings)

        if b.get("type") == "single":
            out.append(MATH_SINGLE_REV.get(name, name))
        elif name == "\\frac":
            out.append("\\frac{" + slot("value") + "}{" + slot("sub1") + "}")
        elif name == "\\sqrt":
            idx = slot("sub1")
            body = slot("value")
            out.append(("\\sqrt[" + idx + "]{" + body + "}") if idx else ("\\sqrt{" + body + "}"))
        elif name == "\\power":
            out.append("^{" + slot("powerValue") + "}")
        elif name == "\\index":
            out.append("_{" + slot("indexValue") + "}")
        elif name == "\\power-index":
            out.append("_{" + slot("indexValue") + "}^{" + slot("powerValue") + "}")
        elif name == "\\text":
            out.append("\\text{" + slot("textValue") + "}")
        elif name == "\\math-container":
            lines = (els.get("mathValue") or {}).get("lines") or []
            for ln in lines:
                out.append(math_blocks_to_latex(ln.get("blocks") or [], warnings))
        else:
            warnings.append(f"导出：未知 composite {name}（已按名字输出）")
            out.append(name)
    return "".join(out)


def _text_block_to_md(b: dict) -> str:
    style = b.get("style") or {}
    raw = b.get("text", "")
    if style.get("fontName") == MONO_FONT:
        return "`" + raw.replace("`", "\\`") + "`"
    text = esc_md(raw)
    if style.get("textDecoration") == "line-through":
        text = "~~" + text + "~~"
    if style.get("isItalic"):
        text = "*" + text + "*"
    if style.get("isBold"):
        text = "**" + text + "**"
    if style.get("mathType"):
        text = "`" + raw + "`" if not text else text  # 数学样式在 md 里没有对应，保留原文
    link = style.get("hyperLink")
    if link:
        text = "[" + text + "](" + link + ")"
    return text


def _blocks_to_md(blocks: list, warnings: list) -> str:
    parts: list[str] = []
    for b in blocks:
        if "type" not in b:
            parts.append(_text_block_to_md(b))
            continue
        name = b.get("text", "")
        if name == "\\math-container":
            els = b.get("elements") or {}
            latex = ""
            for ln in (els.get("mathValue") or {}).get("lines") or []:
                latex += math_blocks_to_latex(ln.get("blocks") or [], warnings)
            if b.get("displayMode"):
                parts.append("$$\n" + latex + "\n$$")
            else:
                parts.append("$" + latex + "$")
        elif name == "\\text":
            ed = (b.get("elements") or {}).get("textValue") or {}
            inner = ""
            for ln in ed.get("lines") or []:
                inner += math_blocks_to_latex(ln.get("blocks") or [], warnings)
            parts.append(inner)
        elif b.get("type") == "single":
            parts.append(MATH_SINGLE_REV.get(name, name))
        else:
            warnings.append(f"导出：不支持的行内 composite {name}（已降级为占位文本）")
            parts.append(name)
    return "".join(parts)


def model_to_markdown(model: dict) -> tuple[str, list]:
    warnings: list[str] = []
    items: list[tuple[str, str, tuple | None]] = []  # (kind, text, list_meta=(type, level) | None)

    for line in model.get("lines") or []:
        blocks = line.get("blocks") or []
        style = line.get("style") or {}
        list_type = style.get("listType")
        content = _blocks_to_md(blocks, warnings)

        if list_type == "section":
            level = int(style.get("indentIndex") or 0)
            items.append(("block", "#" * (min(level, 2) + 1) + " " + content, None))
        elif list_type in ("order", "unorder"):
            level = int(style.get("indentIndex") or 0)
            marker = "- " if list_type == "unorder" else "1. "
            items.append(("list", "  " * level + marker + content, (list_type, level)))
        elif content.strip():
            items.append(("block", content, None))
        else:
            items.append(("blank", "", None))

    # 组装：同类型列表项之间不空行；块级项之间空行；有序列表按连续段编号；连续空行压成一个
    out: list[str] = []
    prev_kind = ""
    prev_meta: tuple | None = None
    numbers: dict[int, int] = {}

    for kind, text, meta in items:
        if kind == "blank":
            prev_kind = "blank"
            if out and out[-1] != "":
                out.append("")
            continue

        if kind == "list" and meta:
            list_type, level = meta
            if prev_meta and prev_meta[0] != list_type:
                numbers = {}
            numbers = {k: v for k, v in numbers.items() if k <= level}
            numbers[level] = numbers.get(level, 0) + 1
            text = re.sub(r"^(\s*)1\. ", lambda m, n=numbers[level]: f"{m.group(1)}{n}. ", text, count=1)
            # 类型切换（无序↔有序）之间留空行，避免被解析成同一个列表
            if prev_kind == "list" and prev_meta and prev_meta[0] != list_type and out and out[-1] != "":
                out.append("")
            if not (kind == "list" and prev_kind == "list") and out and out[-1] != "":
                out.append("")
        else:
            numbers = {}
            if out and out[-1] != "":
                out.append("")

        out.append(text)
        prev_kind = kind
        prev_meta = meta

    while out and out[-1] == "":
        out.pop()
    return "\n".join(out) + ("\n" if out else ""), warnings


# ---------------------------------------------------------------- 服务器 / 落库

def _base(port: int) -> str:
    return f"http://127.0.0.1:{int(port)}"


def _http_json(method: str, port: int, path: str, payload: dict | None = None, timeout: float = 5.0):
    data = json.dumps(payload).encode("utf-8") if payload is not None else None
    req = urllib.request.Request(
        _base(port) + path, data=data, method=method, headers={"Content-Type": "application/json"}
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        raw = resp.read().decode("utf-8", "replace")
    return json.loads(raw)


def server_alive(port: int) -> bool:
    try:
        with urllib.request.urlopen(_base(port) + "/editor", timeout=1.5):
            return True
    except (urllib.error.URLError, OSError):
        return False


def _offline_store():
    sys.path.insert(0, ROOT)
    import local_api  # noqa: WPS433（延迟导入，避免循环）

    return local_api.LocalApi(DATA_DIR)


def _http_import(markdown: str, name: str | None, port: int) -> tuple[str, list]:
    resp = _http_json("POST", port, "/api/md/import", {"markdown": markdown, "name": name or ""})
    if resp.get("error"):
        raise SystemExit(f"导入失败：{resp['error']}")
    return resp["docId"], resp.get("warnings") or []


def _offline_import(markdown: str, name: str | None, model: dict) -> tuple[str, list]:
    api = _offline_store()
    doc = api.store.create_doc(name or "Markdown 导入", json.dumps(model, ensure_ascii=False))
    return doc["id"], []


def _http_export(doc_id: str, port: int) -> str:
    with urllib.request.urlopen(_base(port) + "/api/md/export?docId=" + urllib.parse.quote(doc_id), timeout=5) as r:
        return r.read().decode("utf-8", "replace")


def _offline_export(doc_id: str) -> str:
    api = _offline_store()
    doc = api.store.find(doc_id)
    if not doc:
        raise SystemExit(f"找不到文档 {doc_id}")
    model = json.loads(doc["data"])
    md, warns = model_to_markdown(model)
    for w in warns:
        print("lossy: " + w, file=sys.stderr)
    return md


# ---------------------------------------------------------------- CLI

def _read_text(path: str) -> str:
    with open(path, encoding="utf-8") as f:
        return f.read()


def cmd_import(args) -> int:
    markdown = _read_text(args.file)
    model, warnings = markdown_to_model(markdown)
    name = args.name or os.path.splitext(os.path.basename(args.file))[0]

    if args.dry_run:
        print(json.dumps(model, ensure_ascii=False, indent=1))
        for w in warnings:
            print("lossy: " + w, file=sys.stderr)
        print(f"# 共 {len(model['lines'])} 行模型（dry-run，未落库）", file=sys.stderr)
        return 0

    if args.offline:
        if server_alive(args.port):
            print(
                "警告：检测到本地服务在运行，--offline 直接写 store.json 可能被服务内存状态覆盖；"
                "建议去掉 --offline 走 HTTP。",
                file=sys.stderr,
            )
        doc_id, _ = _offline_import(markdown, name, model)
    else:
        if not server_alive(args.port):
            print(
                f"错误：{_base(args.port)} 上没有服务。先 `python3 server.py {args.port}`，"
                "或加 --offline 直接写 .data/store.json。",
                file=sys.stderr,
            )
            return 2
        doc_id, warnings = _http_import(markdown, name, args.port)

    for w in warnings:
        print("lossy: " + w, file=sys.stderr)
    print(f"已导入为文档 {doc_id}（{name}，{len(model['lines'])} 行）")
    print(f"打开查看：{_base(args.port)}/editor")
    return 0


def cmd_export(args) -> int:
    if args.offline:
        md = _offline_export(args.doc_id)
    else:
        if not server_alive(args.port):
            print(f"错误：{_base(args.port)} 上没有服务，可加 --offline 直接读 store.json。", file=sys.stderr)
            return 2
        md = _http_export(args.doc_id, args.port)
    if args.output:
        with open(args.output, "w", encoding="utf-8") as f:
            f.write(md)
        print(f"已写出 {args.output}（{len(md)} 字符）")
    else:
        sys.stdout.write(md)
    return 0


def cmd_list(args) -> int:
    """列出文档 id 与名字，方便 export 用。"""
    if args.offline or not server_alive(args.port):
        api = _offline_store()
        docs = api.store.docs()
    else:
        data = _http_json("GET", args.port, "/api/init2")
        docs = ((data or {}).get("tree") or {}).get("documents") or []
    if not docs:
        print("（没有文档）")
        return 0
    for d in docs:
        print(f"{d.get('id', '?'):<14} {d.get('name', '')}")
    return 0


def cmd_check(args) -> int:
    markdown = _read_text(args.file)
    model, warnings = markdown_to_model(markdown)
    lines = model["lines"]
    sections = sum(1 for l in lines if (l.get("style") or {}).get("listType") == "section")
    lists = sum(1 for l in lines if (l.get("style") or {}).get("listType") in ("order", "unorder"))
    blocks = sum(len(l.get("blocks") or []) for l in lines)
    print(f"文件: {args.file}")
    print(f"模型: {len(lines)} 行 / {blocks} 块；标题 {sections} 行、列表 {lists} 行")
    print(f"警告: {len(warnings)} 条")
    for w in warnings:
        print("  lossy: " + w, file=sys.stderr)
    return 0


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(description="Markdown ↔ Mathcha 本地版模型转换器")
    sub = ap.add_subparsers(dest="cmd", required=True)

    p_imp = sub.add_parser("import", help="把 Markdown 文件导入为编辑器文档")
    p_imp.add_argument("file")
    p_imp.add_argument("--name", help="文档名（默认用文件名）")
    p_imp.add_argument("--port", type=int, default=DEFAULT_PORT)
    p_imp.add_argument("--offline", action="store_true", help="不走 HTTP，直接写 .data/store.json")
    p_imp.add_argument("--dry-run", dest="dry_run", action="store_true", help="只打印模型 JSON，不落库")
    p_imp.set_defaults(func=cmd_import)

    p_exp = sub.add_parser("export", help="把文档导出为 Markdown")
    p_exp.add_argument("doc_id")
    p_exp.add_argument("--port", type=int, default=DEFAULT_PORT)
    p_exp.add_argument("--offline", action="store_true")
    p_exp.add_argument("-o", "--output")
    p_exp.set_defaults(func=cmd_export)

    p_chk = sub.add_parser("check", help="只转换并统计（不落库）")
    p_chk.add_argument("file")
    p_chk.set_defaults(func=cmd_check)

    p_ls = sub.add_parser("list", help="列出文档 id 与名字（导出用）")
    p_ls.add_argument("--port", type=int, default=DEFAULT_PORT)
    p_ls.add_argument("--offline", action="store_true", help="直接读 .data/store.json")
    p_ls.set_defaults(func=cmd_list)

    args = ap.parse_args(argv)
    return args.func(args)


if __name__ == "__main__":
    raise SystemExit(main())
