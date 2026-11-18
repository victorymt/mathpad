/* module 67928 — 8793 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    MathContainerSc: () => O,
    default: () => D
  });
  var n = r(64467),
    i = r(3453),
    o = r(40927),
    s = r.n(o),
    a = r(2543),
    l = r.n(a),
    c = r(48440),
    d = r(69153),
    h = r(30803),
    p = r(32485),
    u = r.n(p),
    g = r(38937),
    m = r(25742),
    f = r(18808),
    y = r(39791),
    v = r(47858),
    b = r(84258);
  function x(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function C(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? x(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class S extends m.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "showSelectedAnyLevel", !0);
    }
    getClassName() {
      return u()("math-container-symbol role-mathmode-area", {
        display: !!this.props.data.displayMode
      });
    }
    getCompositeBlockStyle() {
      var e = super.getCompositeBlockStyle(),
        t = this.props.data,
        r = t.style && t.style.fontSize || void 0,
        n = f.l.getFontSizeRatio(r, this.context.fontSizeBase);
      return this.props.fontSizeRatio && (n *= this.props.fontSizeRatio), b.A.mathWhiteBg && (e.backgroundColor = "white"), C(C({}, e), {}, {
        fontSize: this.context.mathFontSizeBase * n
      });
    }
    generateMathClssKey() {
      var e = "",
        t = this.props.data.style;
      return null != t && t.fontSize && (e = "object" == typeof t.fontSize ? t.fontSize.fType ? "abs-".concat(t.fontSize.value) : "rlt-".concat(t.fontSize.value) : t.fontSize), "mce-".concat(this.context.mathFontSizeBase, "-").concat(this.props.fontSizeRatio || 1, "-").concat(e);
    }
    shouldUseOpm(e) {
      return e.shouldUseOpmEditArea();
    }
    renderComponent() {
      var e = this.props.data,
        t = this.getMtFuncs(),
        r = e.style && "\\displaystyle" == e.style.mathModeType,
        n = this.shouldUseOpm(t) ? g.s : y.A,
        i = e.elements.mathValue,
        o = this.props.extendedSelected && "mathValue" == this.props.extendedSelected.key ? this.props.extendedSelected.selected : void 0;
      return s().createElement(n, C(C({}, this.buildMetaDataFromName("mathValue")), {}, {
        key: this.generateMathClssKey(),
        delayEnabled: this.shouldDelayEnabled(t),
        insideSingleLine: 1 == i.lines.length,
        allowTag: e.displayMode && !1 !== this.props.allowTag,
        className: "math-mode-font",
        noAreaContainer: e.displayMode,
        displayMode: e.displayMode || r,
        isFirstMathModeLevel: !0,
        extendedSelected: o,
        showBorderOnSelected: !1,
        optimizeForOneLine: !0,
        ignoreFindingMovingBlocks: !0,
        inlineMath: !e.displayMode,
        style: v.A.basicMathStyle(this.getSubMathFont(), this.context.baseMathModeFontFamily)
      }));
    }
  }
  var A = r(53359),
    w = r(70224);
  function E(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function k(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? E(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class O extends c.A {
    getViewComponent() {
      return S;
    }
    getModel(e) {
      var t = super.getModel(e);
      return t.displayMode = e && e.displayMode, t;
    }
    getModelMeta() {
      return {
        text: "\\math-container",
        keyInsertOnSelection: "mathValue",
        elements: {
          mathValue: {
            onRemove: "all"
          }
        }
      };
    }
    toModel(e, t) {
      return (!t || t.length <= 0) && (t = [w.A.createEmptyLine()]), {
        id: h.w.nextId(),
        type: "composite",
        text: "\\math-container",
        displayMode: e,
        elements: {
          mathValue: {
            id: h.w.nextId(),
            lines: t
          }
        }
      };
    }
    getSymbolInfo() {
      return [this.fillSymbolInfo({
        type: "composite",
        names: ["\\inline-math"],
        height: 25,
        shortcut: {
          char: "$"
        },
        displayMode: !1,
        insertInTextModeOnly: !0,
        renderSymbol: () => s().createElement("div", {
          className: "icon-math-container-symbol"
        }, s().createElement("mcs-border", {
          style: {
            borderBottom: "2px solid var(--ui-border, gray)",
            marginBottom: "3px",
            display: "inline-block",
            width: "5px"
          }
        }), s().createElement("mcs-fx", {
          style: {
            color: "var(--ui-text-muted, gray)",
            paddingLeft: 2,
            paddingRight: 2
          }
        }, "fx"), s().createElement("mcs-border", {
          style: {
            borderBottom: "2px solid var(--ui-border, gray)",
            marginBottom: "3px",
            display: "inline-block",
            width: "5px"
          }
        }))
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\math-container"],
        height: 40,
        displayMode: !0,
        insertInTextModeOnly: !0,
        renderSymbol: () => s().createElement("div", {
          className: "icon-display-math-container-symbol",
          style: {
            minWidth: 28
          }
        }, s().createElement("mcs-border", {
          style: {
            borderBottom: "2px solid var(--ui-border, gray)",
            marginBottom: "1px",
            display: "block",
            width: "auto",
            marginLeft: 4,
            marginRight: 4
          }
        }), s().createElement("mcs-fx", {
          style: {
            color: "var(--ui-text-muted, gray)",
            paddingLeft: 2,
            paddingRight: 2
          }
        }, "fx"), s().createElement("mcs-border", {
          style: {
            borderBottom: "2px solid var(--ui-border, gray)",
            marginBottom: "1px",
            display: "block",
            width: "auto",
            marginLeft: 4,
            marginRight: 4
          }
        }))
      })];
    }
    getLatexName(e) {
      var t = e.lines.some(e => !!A.p.shouldShowTagInfo(e));
      return e.lines.length <= 1 ? t ? ["equation", t] : ["equation*", t] : t ? ["gather", t] : ["gather*", t];
    }
    toLatex(e, t, r, n) {
      t = l().assign({}, t, {
        inMathExpression: !0
      });
      var o = e.elements.mathValue,
        s = t.inTable ? "\\vspace{-1em}" : "",
        a = "";
      if (e.displayMode) {
        var c = this.getLatexName(o),
          h = (0, i.A)(c, 2),
          p = h[0],
          u = h[1];
        t = k(k({}, t), {}, {
          noTagOnLineFirstLevel: u
        });
        var g = r.toLatexFromEditor(o, t, {
          ignoreWrapMultiline: !0
        });
        return d.Ay.surroundByLine(g, "".concat(a, "\\begin{").concat(p, "}"), "".concat(s, "\\end{").concat(p, "}"));
      }
      var m = e.style && "\\displaystyle" == e.style.mathModeType ? "\\displaystyle " : "";
      t = k(k({}, t), {}, {
        displayMode: e.style && "\\displaystyle" == e.style.mathModeType
      });
      var f = r.toLatexFromEditor(o, t);
      return f ? t.usingStandardMathWrapper ? "\\(".concat(m).concat(f, "\\)") : "$".concat(m).concat(f, "$") : t.usingStandardMathWrapper ? "\\( \\)" : "$ $";
    }
    toMathml(e, t) {
      var r = t.generateEditor(e.elements.mathValue);
      return "mtable" == r.type && r.mcEditorGroup && (r.columnalign = e.displayMode ? "center" : "left", r.width = "100%"), e.style && "\\displaystyle" == e.style.mathModeType && (r = {
        type: "mstyle",
        displaystyle: !0,
        element: r
      }), {
        type: "math",
        display: e.displayMode ? "block" : void 0,
        elements: [r]
      };
    }
  }
  const D = new O();
};
