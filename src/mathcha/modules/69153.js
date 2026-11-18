/* module 69153 — 16571 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    xx: () => C,
    g4: () => x,
    Ay: () => S
  });
  var n = r(64467),
    i = r(2543),
    o = r.n(i),
    s = r(98095),
    a = r(51737),
    l = r(39314),
    c = r(97372);
  class d {
    partition(e) {
      var t = this.extractStyleRanges(e);
      return this.mergeRanges(t);
    }
    mergeRanges(e) {
      for (var t = [], r = o().clone(e); r.length > 0;) {
        var n = o().last(t);
        null != n && (r = this.splitBySingle(n, r));
        var i = o().maxBy(r, e => e.end - e.start);
        r = o().filter(r, e => e != i), t.push(i);
      }
      return t;
    }
    splitBySingle(e, t) {
      var r = this.splitByStart(e.start, t);
      return this.splitByEnd(e.end, r);
    }
    splitByStart(e, t) {
      return o().flatMap(t, t => t.start < e && e <= t.end ? this.splitRangeAt(t, e - 1) : [t]);
    }
    splitByEnd(e, t) {
      return o().flatMap(t, t => t.start <= e && e < t.end ? this.splitRangeAt(t, e) : [t]);
    }
    splitRangeAt(e, t) {
      var r = o().clone(e),
        n = o().clone(e);
      return r.start = e.start, r.end = t, n.start = t + 1, n.end = e.end, [r, n];
    }
    extractStyleRanges(e) {
      var t = [],
        r = [];
      e.forEach((e, n) => {
        var i = this.withStyle(e.style, t, n, e);
        t = i.accumulatedStyles, r = r.concat(i.ranges);
      });
      var n = this.withStyle({}, t, e.length, null);
      return r.concat(n.ranges);
    }
    withStyle(e, t, r, n) {
      var i = e = e || {},
        s = [];
      o().keys(e).forEach(e => {
        null !== i[e] && void 0 !== i[e] && "bgColor" != e && ("mathModeType" == e && "\\displaystyle" == i[e] && n && c.A.isInlineMathContainer(n) || ("color" != e || i[e] && !l.A.isBlackColor(i[e])) && (this.hasStyle(t, e, i[e]) || this.addStyle(s, e, i[e], r)));
      });
      var a = [];
      return {
        accumulatedStyles: (t = o().filter(t, e => {
          var t = i[e.key] == e.value;
          return t || a.push({
            key: e.key,
            value: e.value,
            start: e.start,
            end: r - 1
          }), t;
        })).concat(s),
        ranges: a
      };
    }
    hasStyle(e, t, r) {
      return o().some(e, e => e.key == t && e.value == r);
    }
    addStyle(e, t, r, n) {
      return e.push({
        key: t,
        value: r,
        start: n
      }), e;
    }
  }
  const h = new d();
  var p = r(47858),
    u = r(73524),
    g = r(49812),
    m = r(61848),
    f = r(79490),
    y = r(53359);
  function v(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function b(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? v(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class x {
    constructor() {
      (0, n.A)(this, "latexParser", new a.A());
    }
    getListTypeAsString(e) {
      return e instanceof Array ? "unorder" : e;
    }
    toLatex(e, t) {
      (t = m.A.update(t, {
        mathType: "mathjax",
        textType: this.getTextType(),
        convertedInfo: new C()
      })).headers || (t = b(b({}, t), {}, {
        headers: new Map()
      }));
      var r = this.toLatexInner(e, t),
        n = "",
        i = t.convertedInfo.getTheoremDefinition(),
        o = [];
      return i && o.push(i + "\n"), o.push(this.addingHeaders(t.headers, r)), o.join("\n");
    }
    getTextType() {
      return "plain";
    }
    toLatexFromEditor(e, t, r) {
      return this.toLatexInner(e.lines, t, r);
    }
    toLatexInner(e, t, r) {
      var n = {
          indents: [],
          lastSectionIndentIndex: -1,
          currentStr: "",
          align: null
        },
        i = !!t.noTagOnLineFirstLevel;
      i && (t = b(b({}, t), {}, {
        noTagOnLineFirstLevel: !1
      }));
      for (var o = null, s = 0, a = e.length; s < a; s++) {
        var l = e[s],
          c,
          d = (r && r.normalLinePrefix || "") + this.toLatexLineExtended(l, t);
        i && !y.p.shouldShowTagInfo(l) ? d += " \\notag" : l.tagInfo && "custom" == l.tagInfo.type && (d += " \\tag{".concat(l.tagInfo.tagName, "}"));
        var h = p.A.getLineStyle(l, "listType", void 0);
        null != h && n.align && (n = this.handleLineAlign(n, void 0)), n = "order" == h || "unorder" == h || h instanceof Array ? this.processListItem(l, d, h, n) : "section" == h ? this.processSection(l, d, n) : t.inMathExpression ? this.toLatexMathLine(l, d, n, o, t) : this.toLatexTextLine(l, d, n, o, t), o = l;
      }
      if (n.align && (n = this.handleLineAlign(n, void 0)), n.currentStr += this.popAllIndents(n), t.inMathExpression && e.length > 1 && (!r || !r.ignoreWrapMultiline)) {
        var u = t.displayMode ? "{>{\\displaystyle}l}" : "l";
        n.currentStr = this.surroundByLine(n.currentStr, " \\begin{array}{".concat(u, "}"), "\\end{array}");
      }
      return n.currentStr;
    }
    addingHeaders(e, t) {
      return !e || e.size <= 0 ? t : "".concat(Array.from(e.values()).join("\n"), "\n").concat(t);
    }
    toLatexMathLine(e, t, r, n, i) {
      var o = "" == r.currentStr ? "" : "\\\\\n",
        s = p.A.getLineStyle(e, "align");
      return "left" == s && (s = void 0), (r = this.handleLineAlign(r, s)).currentStr += o + t, r;
    }
    popAllIndentsIfExists(e) {
      var t;
      return e.indents.length - 1 >= 0 && (e.currentStr += this.popAllIndents(e)), e;
    }
    getNewLine(e) {
      return e.newLineUsingBackSlash ? "\\\\" : "\n\n";
    }
    toLatexTextLine(e, t, r, n, i) {
      var o = "" == r.currentStr ? "" : this.getNewLine(i),
        s = p.A.getLineStyle(e, "align");
      return "left" == s && (s = void 0), (r = this.popAllIndentsIfExists(r)).align != s && (o = ""), r = this.handleLineAlign(r, s), g.A.isSingeLineBlockInLine(e) && (o = "\n"), n && g.A.isSingeLineBlockInLine(n) && (o = "\n"), r.currentStr += o + t, r;
    }
    processSection(e, t, r) {
      r = this.popAllIndentsIfExists(r);
      var n = p.A.getLineTempOrStoreIndent(e, 0),
        i = "";
      return i = 0 == n ? "section" : 1 == n ? "subsection" : "subsubsection", r.currentStr += "\n\\".concat(i, "{").concat(t, "}"), r;
    }
    processListItem(e, t, r, n) {
      var i = p.A.getLineStyle(e, "listTypeSkip", !1),
        o = p.A.lineStyleToLatex("listType", r),
        s = n.indents.length - 1,
        a = p.A.getLineTempOrStoreIndent(e, 0);
      return s < a ? (n.currentStr += "\n\\begin{".concat(o, "}"), n.indents.push(o)) : (s == a || (n.currentStr += this.popAllIndents(n, s - a)), n = this.changeListItemIfDiffent(n, o)), n.currentStr += i ? "\n\n" : "\n\\item ", n.currentStr += t, n;
    }
    handleLineAlign(e, t) {
      return e.align && t && e.align != t && (e.currentStr = this.addNewLineStrAtEnd(e.currentStr, "\\end{".concat(p.A.lineStyleToLatex("align", e.align), "}")), e.currentStr += "\n\\begin{".concat(p.A.lineStyleToLatex("align", t), "}\n")), !e.align && t && (e.currentStr = this.addNewLineStrAtEnd(e.currentStr, "\\begin{".concat(p.A.lineStyleToLatex("align", t), "}\n"))), e.align && !t && (e.currentStr = this.addNewLineStrAtEnd(e.currentStr, "\\end{".concat(p.A.lineStyleToLatex("align", e.align), "}\n"))), e.align = t, e;
    }
    surroundByLine(e, t, r) {
      return this.addNewLineStrAtStart(this.addNewLineStrAtEnd(e, r), t);
    }
    addNewLineStrAtStart(e, t) {
      return e ? "\n" == e[0] ? t + e : t + "\n" + e : t;
    }
    addNewLineStrAtEnd(e, t) {
      return e ? "\n" == e[e.length - 1] ? e + t : e + "\n" + t : t;
    }
    changeListItemIfDiffent(e, t) {
      var r = o().last(e.indents);
      return t != r && (e.currentStr += "\n\\end{".concat(r, "}\n\\begin{").concat(t, "}")), e.indents.pop(), e.indents.push(t), e;
    }
    popAllIndents(e, t) {
      var r = "";
      for (void 0 === t && (t = 999); e.indents.length > 0 && t > 0;) {
        var n = e.indents.pop();
        r += "\n\\end{".concat(n, "}"), t--;
      }
      return r;
    }
    toModel(e, t) {
      return this.latexParser.parse(e, t);
    }
    toLatexLineExtended(e, t) {
      var r = e.blocks,
        n = o().map(r, e => ({
          block: e,
          styles: [],
          closeBraceTotal: 0,
          closeStyles: []
        })),
        i;
      h.partition(e.blocks).forEach(e => {
        n[e.start].styles.push({
          key: e.key,
          value: e.value
        }), n[e.end].closeBraceTotal += 1, n[e.end].closeStyles.unshift({
          key: e.key,
          value: e.value
        });
      });
      for (var s = [], a = 0; a < n.length; a++) {
        var l = n[a],
          c = {
            latexArray: s,
            blockIndex: a,
            wrapBlocks: n
          };
        if (s = t.inMathExpression ? this.appendStyleBeginForMath(l, s) : this.appendStyleBeginForText(l, s, t), "composite" == l.block.type || "single" == l.block.type) {
          var d = t.inMathExpression ? this.processNonTextForMathMode(l, t, c) : this.processNonTextForTextMode(l, t, c);
          s = this.pushIfNotEmpty(s, d);
        } else s = "unknown-command" == l.block.type ? this.pushIfNotEmpty(s, l.block.text + " ") : !0 === t.inMathExpression ? this.pushIfNotEmpty(s, this.processTextForMathMode(s, l.block.text, t)) : this.pushIfNotEmpty(s, this.processTextForTextMode(s, l.block.text));
        s = t.inMathExpression ? this.appendStyleEndForMath(l, s) : this.appendStyleEndForText(l, s);
      }
      var p = s.join("");
      return !t.inMathExpression && t.tikzNode && this.startWithHyphen(p) ? p.replace("-", "\\mbox{-}") : p;
    }
    pushIfNotEmpty(e, t) {
      return t ? o().isString(t) ? (e.push(t), e) : t.arrStr || e : e;
    }
    startWithHyphen(e) {
      return "-" == e.trim()[0] && "-" != e.trim()[1];
    }
    appendStyleBeginForMath(e, t) {
      return this.appendStyleBegin(e, t);
    }
    appendStyleEndForMath(e, t) {
      return this.appendStyleEnd(e, t);
    }
    appendStyleBeginForText(e, t, r) {
      return this.appendStyleBegin(e, t);
    }
    appendStyleEndForText(e, t) {
      return this.appendStyleEnd(e, t);
    }
    appendStyleBegin(e, t) {
      return e.styles.forEach(e => {
        var r = p.A.styleToLatex(e.key, e.value);
        "mathModeType" != e.key || "\\displaystyle" != e.value && "\\textstyle" != e.value ? t.push(r + "{") : t.push("{" + r + " ");
      }), t;
    }
    appendStyleEnd(e, t) {
      return e.closeBraceTotal > 0 && t.push(o().times(e.closeBraceTotal, () => "}").join("") + ""), t;
    }
    processNonTextForTextMode(e, t, r) {
      return this.processNonTextForAll(e, t, r);
    }
    processNonTextForMathMode(e, t, r) {
      return this.processNonTextForAll(e, t, r);
    }
    processNonTextForAll(e, t, r) {
      var n = s.A.getCustomSymbolComponent(e.block.text);
      if (null == n) throw new Error("could not found composite block info");
      if (n.isBracket && e.block.___normal) {
        if ("\\left." == e.block.text || "\\right." == e.block.text) return "";
        var i = n.toLatex(e.block, t, this, r);
        if ("string" != typeof i) return "";
        if (o().startsWith(i, "\\left")) return i.substr(5);
        if (o().startsWith(i, "\\right")) return i.substr(6);
      }
      return n.toLatex(e.block, t, this, r);
    }
    processTextForTextMode(e, t) {
      for (var r = u.Ay.getUnistringUncached(t), n = "", i = [], o = !1, s = 0; s < r.length; s++) {
        var a = r.clusterAt(s);
        if (" " != a) {
          o = !1;
          var l = a.codePointAt(0);
          if (l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122) i.push(a);else {
            var c = this.getLatexForSpecialCharTextMode(a);
            c ? (o = c.comsumeSpace, i.push(c.text)) : i.push(a);
          }
        } else i.push(o ? "\\ " : " "), o = !0;
      }
      return n + i.join("");
    }
    processTextForMathMode(e, t, r) {
      for (var n = r.customMappingSymbols || [], i = r.ignoreSpace, o = u.Ay.getUnistringUncached(t), s = this.getSpaceIfRequire(e), a = [], l = 0; l < o.length; l++) {
        var c = o.clusterAt(l);
        if (" " != c || i) {
          if (" " != c || i) {
            if (" " != c || i) {
              if ("<" != c) {
                if (">" != c) {
                  if ("Ω" != c) {
                    if ("∧" != c) {
                      if ("∨" != c) {
                        var d = c.codePointAt(0);
                        if (d >= 48 && d <= 57 || d >= 65 && d <= 90 || d >= 97 && d <= 122) a.push(c);else {
                          var h = this.getLatexForSpecialCharMathMode(c);
                          if (h) a.push(h.text);else {
                            var p = this.getForLatexTextCommand(c, n);
                            p ? ("\\vectimes" == p && (p = "\\times"), a.push(p + " ")) : a.push(c);
                          }
                        }
                      } else a.push("\\lor ");
                    } else a.push("\\land ");
                  } else a.push("\\si{\\ohm}");
                } else a.push(" " + c);
              } else a.push(c + " ");
            } else a.push("\\kern+0.4em ");
          } else a.push("\\kern+0.01em ");
        } else a.push("\\ ");
      }
      return s + a.join("");
    }
    buildLatexInfo(e) {
      var t;
      return {
        text: e,
        comsumeSpace: arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
      };
    }
    getForLatexTextCommand(e, t) {
      if (t) {
        var r = t.find(t => !t.type && t.symbol == e);
        if (r) return r.names[0];
      }
      var n;
      return s.A.getLatexTextCommandFromUnicode(e);
    }
    getLatexForSpecialCharTextMode(e) {
      switch (e) {
        case "$":
          return this.buildLatexInfo("\\$");
        case "&":
          return this.buildLatexInfo("\\&");
        case "%":
          return this.buildLatexInfo("\\%");
        case "#":
          return this.buildLatexInfo("\\#");
        case "_":
          return this.buildLatexInfo("\\_");
        case "{":
          return this.buildLatexInfo("\\{");
        case "}":
          return this.buildLatexInfo("\\}");
        case "~":
          return this.buildLatexInfo("\\textasciitilde ", !0);
        case "^":
          return this.buildLatexInfo("\\textasciicircum ", !0);
        case "\\":
          return this.buildLatexInfo("\\textbackslash ", !0);
      }
      return null;
    }
    getLatexForSpecialCharMathMode(e) {
      switch (e) {
        case "∆":
          return this.buildLatexInfo("\\Delta ");
        case "$":
          return this.buildLatexInfo("\\$");
        case "&":
          return this.buildLatexInfo("\\&");
        case "%":
          return this.buildLatexInfo("\\%");
        case "#":
          return this.buildLatexInfo("\\#");
        case "_":
          return this.buildLatexInfo("\\_");
        case "{":
          return this.buildLatexInfo("\\{");
        case "}":
          return this.buildLatexInfo("\\}");
        case "~":
          return this.buildLatexInfo("\\sim ");
        case "^":
          return this.buildLatexInfo("\\hat{}");
        case "\\":
          return this.buildLatexInfo("\\backslash ");
      }
      return null;
    }
    getSpaceIfRequire(e) {
      if (0 == e.length) return "";
      var t = e[e.length - 1];
      return t && (" " == t[t.length - 1] || "\n" == t[t.length - 1] || "{" == t[t.length - 1]) ? "" : " ";
    }
  }
  class C {
    constructor() {
      (0, n.A)(this, "unSupportedLatexes", []), (0, n.A)(this, "preambles", []), (0, n.A)(this, "theoremKeys", []), (0, n.A)(this, "theoremInfo", void 0);
    }
    addUnSupportedLatex(e) {
      this.unSupportedLatexes.indexOf(e) >= 0 || this.unSupportedLatexes.push(e);
    }
    addPreable(e) {
      this.preambles.indexOf(e) >= 0 || this.preambles.push(e);
    }
    addRequiredTheorem(e, t) {
      this.theoremInfo = t, this.theoremKeys.indexOf(e) >= 0 || this.theoremKeys.push(e);
    }
    getTheoremDefinition() {
      return this.theoremKeys.length <= 0 ? "" : f.T.toLatex(this.theoremKeys, this.theoremInfo);
    }
  }
  const S = new x();
};
