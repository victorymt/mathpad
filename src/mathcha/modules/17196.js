/* module 17196 — 7857 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => p
  });
  var n = r(64467),
    i = r(97372),
    o = r(61848),
    s = r(49812),
    a = r(90437),
    l = r(70224);
  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? c(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class h {
    editorWithMathModelToExpression(e) {
      return e ? (e = e.lines[0].blocks[0].elements.mathValue, this.editorModelToExpression(e)) : "";
    }
    editorModelToExpression(e) {
      if (!e) return "";
      for (var t = "", r = 0; r < e.lines.length; r++) {
        var n = e.lines[r],
          i = this.handleAbs(n.blocks);
        i = this.handleFunctionCallWithSingleArg(i);
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          t += this.blockToFormula(s);
        }
      }
      return t;
    }
    splitBlockToWrapFirstCharInParen(e) {
      return 1 == e.text.length ? [d(d({}, e), {}, {
        text: "(".concat(e.text[0], ")")
      })] : [d(d({}, e), {}, {
        text: "(".concat(e.text[0], ")")
      }), d(d({}, e), {}, {
        text: e.text.substr(1)
      })];
    }
    isFirstCharOrDigit(e) {
      return e && !e.type && this.isAlphabetDigitOnly(e.text[0]) && (" " == e.text[1] || "\t" == e.text[1] || void 0 === e.text[1]);
    }
    handleFunctionCallWithSingleArg(e) {
      for (var t = [], r = 0; r < e.length; r++) {
        var n = e[r],
          i;
        if (e[r + 1]) {
          if ("composite" == n.type && this.getMapFunction(n)) {
            var o = this.blocksToHandle(e, r);
            if (o) {
              t = t.concat(o[0]), r = o[1];
              continue;
            }
          }
          t.push(n);
        } else t.push(n);
      }
      return t;
    }
    blocksToHandle(e, t) {
      var r = e[t],
        n = e[t + 1];
      if ("composite" == r.type && this.getMapFunction(r)) {
        if (this.isFirstCharOrDigit(n)) {
          var o = [];
          return o.push(l.A.createTextBlock("(")), o.push(r), (o = o.concat(this.splitBlockToWrapFirstCharInParen(n))).push(l.A.createTextBlock(")")), [o, t + 1];
        }
        if (n && "composite" == n.type && i.A.isPower(n)) {
          var s = e[t + 2];
          if (s && this.isFirstCharOrDigit(s)) {
            var a = [];
            return a.push(l.A.createTextBlock("(")), a.push(r), a.push(n), (a = a.concat(this.splitBlockToWrapFirstCharInParen(s))).push(l.A.createTextBlock(")")), [a, t + 2];
          }
        }
      }
    }
    isAlphabetDigitOnly(e) {
      return e.toUpperCase() != e.toLowerCase() || "0123456789".indexOf(e) >= 0;
    }
    handleAbs(e) {
      for (var t = !0, r = [], n = 0; n < e.length; n++) {
        var s = e[n];
        if (i.A.isTextBlock(s)) {
          for (var a = s.text, l = "", c = 0; c < a.length; c++) {
            var d = a[c];
            "|" == d && "|" != a[c - 1] && "|" != a[c + 1] ? (l += t ? " abs(" : ") ", t = !t) : l += d;
          }
          r.push(o.A.setProp(s, "text", l));
        } else r.push(s);
      }
      return r;
    }
    blockToFormula(e) {
      if (i.A.isTextBlock(e)) return this.replaceTextSymbol(e.text);
      var t = e;
      if (i.A.isOpenClose(t)) return 1 == t.text.length ? t.text : "\\left\\lceil" == t.text ? " ceil(" : "\\right\\rceil" == t.text ? ") " : "\\left\\lfloor" == t.text ? " floor(" : "\\right\\rfloor" == t.text ? ") " : "\\left|" == t.text ? " abs(" : "\\right|" == t.text ? ") " : "";
      var r = this.getMapFunction(e);
      if (r) return r;
      if (s.A.isSqrtLatexName(t.text)) {
        var n = this.editorModelToExpression(t.elements.value);
        if (!s.A.isEditorEmpty(t.elements.sub1)) {
          var o = this.editorModelToExpression(t.elements.sub1);
          return " safeNthRoot(".concat(n, ",").concat(o, ") ");
        }
        return " sqrt(".concat(n, ") ");
      }
      if (s.A.isFracClassLatexName(t.text)) {
        var a = this.editorModelToExpression(t.elements.value),
          l = this.editorModelToExpression(t.elements.sub1);
        return "((".concat(a, ")/(").concat(l, "))");
      }
      return "\\power" == t.text || "\\power-index" == t.text ? "^(".concat(this.editorModelToExpression(t.elements.powerValue), ")") : i.A.isPlotCases(t) ? this.processPlotCases(t) : "";
    }
    processPlotCases(e) {
      for (var t = [], r = 0; r < e.row; r++) {
        var n = e.elements[a.Z.getKeyFromRowCol(r, 0)],
          i = this.editorModelToExpression(n),
          o = this.editorModelToExpression(e.elements[a.Z.getKeyFromRowCol(r, 1)]),
          s = this.editorModelToExpression(e.elements[a.Z.getKeyFromRowCol(r, 2)]);
        t.push({
          result: i,
          condition: "".concat(o, " ").concat(this.comparisonToStr(n.comparison), " ").concat(s)
        });
      }
      return this.buildConditionExpression(t);
    }
    comparisonToStr(e) {
      if (!e) return ">";
      switch (e) {
        case "≤":
          return "<=";
        case "≥":
          return ">=";
        case "=":
          return "==";
        case "≠":
          return "!=";
        default:
          return e;
      }
    }
    buildConditionExpression(e) {
      for (var t = null, r = e.length - 1; r >= 0; r--) {
        var n = e[r],
          i = t || " NotANumber() ";
        t = "((".concat(n.condition, ") ? ((").concat(n.result, ")+breakMark(").concat(r, ")) : ").concat(i, " )");
      }
      return t;
    }
    replaceTextSymbol(e) {
      return e.replace(/×/g, "*").replace(/𝜋/g, "(pi)").replace(/°/g, " deg ");
    }
    getMapFunction(e) {
      var t;
      switch (e.text) {
        case "\\acos":
          return " acos ";
        case "\\acosh":
          return " acosh ";
        case "\\acot":
          return " acot ";
        case "\\acoth":
          return " acoth ";
        case "\\asec":
          return " asec ";
        case "\\asech":
          return " asech ";
        case "\\asin":
          return " asin ";
        case "\\asinh":
          return " asinh ";
        case "\\atan":
          return " atan ";
        case "\\atanh":
          return " atanh ";
        case "\\cos":
          return " cos ";
        case "\\cosh":
          return " cosh ";
        case "\\cot":
          return " cot ";
        case "\\coth":
          return " coth ";
        case "\\csc":
        case "\\cosec":
          return " csc ";
        case "\\csch":
          return " csch ";
        case "\\sec":
          return " sec ";
        case "\\sech":
          return " sech ";
        case "\\sin":
          return " sin ";
        case "\\sinh":
          return " sinh ";
        case "\\tan":
          return " tan ";
        case "\\tanh":
          return " tanh ";
        case "\\abs":
          return " abs ";
        case "\\log2":
          return " log2 ";
        case "\\log10":
          return " log10 ";
        case "\\ln":
          return " ln ";
        case "\\max":
          return " max ";
        case "\\min":
          return " min ";
        case "\\mod":
          return " mod ";
        case "\\floor":
          return " floor ";
        case "\\ceil-fun":
          return " ceil ";
      }
      return "";
    }
  }
  const p = new h();
};
