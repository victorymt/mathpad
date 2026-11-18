/* module 35847 — 9723 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    R: () => g
  });
  var n = r(64467),
    i = r(97372),
    o = r(73524),
    s = r(30929),
    a = r(98095),
    l = r(61848),
    c = r(39314),
    d = r(2543),
    h = r.n(d);
  function p(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class g {
    constructor() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (0, n.A)(this, "options", void 0), this.options = e;
    }
    withContextMathvariant(e) {
      var t = this.clone();
      return t.options = u(u({}, t.options), {}, {
        context: u(u({}, (t.options || {}).context), {}, {
          mathvariant: e
        })
      }), t;
    }
    getEmptyElement() {
      return this.options.screenReader ? {
        type: "mrow",
        elements: [{
          type: "mi",
          value: ""
        }],
        isNone: !0
      } : {
        type: "mrow",
        elements: [],
        isNone: !0
      };
    }
    clone() {
      return new g(h().cloneDeep(this.options));
    }
    generateEditor(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (!e || !e.lines || 0 == e.lines.length) return this.getEmptyElement();
      if (1 == e.lines.length && 0 == e.lines[0].blocks.length) return this.getEmptyElement();
      if (!t.forceTable && 1 == e.lines.length) {
        var r = {
          type: "mrow",
          elements: this.generateLine(e.lines[0])
        };
        return 1 == r.elements.length ? r.elements[0] : r;
      }
      return {
        type: "mtable",
        columnwidth: "100%",
        mcEditorGroup: !0,
        rows: e.lines.map(e => {
          var t;
          return {
            type: "mtr",
            cells: [{
              type: "mtd",
              element: this.firstOrWrapInRow(this.generateLine(e))
            }]
          };
        })
      };
    }
    firstOrWrapInRow(e) {
      return 1 == e.length ? e[0] : {
        type: "mrow",
        elements: e
      };
    }
    generateLine(e) {
      var t = {},
        r = e.blocks.flatMap(e => {
          var r = this.innerGenerateBlock(e, t),
            n = r.blockInfo,
            i = r.elements;
          return t = n, i;
        });
      return r = this.combineNumber(r), r = this.combineSpace(r), r = this.assignBaseForPower(r);
    }
    assignBaseForPower(e) {
      for (;;) {
        var t = e.findIndex(e => ("msub" == e.type || "msup" == e.type || "msubsup" == e.type) && null == e.base);
        if (t < 0) break;
        0 != t ? (e[t].base = e[t - 1], e = l.A.remove(e, t - 1)) : e[t].base = {
          type: "mrow",
          elements: []
        };
      }
      return e;
    }
    combineBy(e, t, r) {
      for (var n = [], i = null, o = 0; o < e.length; o++) {
        var s = e[o];
        t(s) ? i ? (i = r(s, i), n[n.length - 1] = i) : (i = r(s, null), n.push(i)) : (i = null, n.push(s));
      }
      return n;
    }
    combineNumber(e) {
      return this.combineBy(e, e => "mn" == e.type && "string" == typeof e.value, (e, t) => u(u({}, t = t || {
        type: "mn",
        value: ""
      }), {}, {
        value: t.value.toString() + e.value.toString()
      }));
    }
    combineSpace(e) {
      return this.combineBy(e, e => "mspace" == e.type, (e, t) => u(u({}, t = t || {
        type: "mspace",
        count: 0
      }), {}, {
        count: t.count + 1
      }));
    }
    innerGenerateBlock(e, t) {
      return i.A.isTextBlock(e) ? this.generateTextBlock(e, t) : this.innerGenerateCompositeBlock(e);
    }
    innerGenerateCompositeBlock(e) {
      var t = a.A.getCustomSymbolComponent(e.text);
      if (!t || !t.toMathml) return {
        blockInfo: {
          category: t.category,
          block: e,
          isOperatorName: t.isOperatorName
        },
        elements: []
      };
      var r = this.getMathVariant(e),
        n = this;
      r && (n = n.withContextMathvariant(r));
      var i = t.toMathml(e, n);
      return this.assignStyle(i, e.style), {
        blockInfo: {
          category: t.category,
          block: e,
          isOperatorName: t.isOperatorName
        },
        elements: [this.wrapInStyleIfRequired(e, i)]
      };
    }
    getContextMathVariant() {
      var e;
      return this.getSafeContext().mathvariant;
    }
    getSafeContext() {
      return this.options && this.options.context || {};
    }
    getMathVariant(e) {
      var t,
        r = (e.style || {}).mathType;
      if (!r) return this.getContextMathVariant();
      var n,
        i = [{
          l: "\\mathrm",
          f: "normal"
        }, {
          l: "\\mathbf",
          f: "bold"
        }, {
          l: "\\boldsymbol",
          f: "bold-italic"
        }, {
          l: "\\mathit",
          f: "italic"
        }, {
          l: "\\mathbb",
          f: "double-struck"
        }, {
          l: "\\mathcal",
          f: "script"
        }, {
          l: "\\mathscr",
          f: "script"
        }, {
          l: "\\mathfrak",
          f: "fraktur"
        }, {
          l: "\\mathsf",
          f: "sans-serif"
        }, {
          l: "\\mathtt",
          f: "monospace"
        }, {
          l: "\\text",
          f: "normal"
        }].find(e => e.l == r);
      return i ? i.f : this.getContextMathVariant();
    }
    generateTextBlock(e, t) {
      for (var r = [], n = o.Ay.getUnistringUncached(e.text), i = this.getMathVariant(e), a = null, l = 0; l < n.length; l++) {
        var c = n.clusterAt(l),
          d = this.getCharCategory(c, n.clusterAt(l - 1), n.clusterAt(l + 1));
        switch ("Vary" == d && (d = s.A.resolveVaryCategory(a, t)), d) {
          case "Space":
            r.push({
              type: "mspace",
              count: 1
            });
            break;
          case "Number":
            r.push({
              type: "mn",
              value: c
            });
            break;
          case "Unary":
            r.push({
              type: "mo",
              value: c,
              form: "prefix"
            });
            break;
          case "Binary":
          case "Relation":
            r.push({
              type: "mo",
              value: c,
              form: "infix"
            });
            break;
          case "Glyph":
            r.push({
              type: "mo",
              value: c
            });
            break;
          case "Opening":
          case "Closing":
          case "Fence":
            r.push({
              type: "mo",
              value: c,
              stretchy: !1
            });
            break;
          case "Punctuation":
            r.push({
              type: "mo",
              value: c,
              separator: !0
            });
            break;
          case "Diacritic":
            r.push({
              type: "mo",
              value: c,
              accent: !0
            });
            break;
          default:
            r.push({
              type: "mi",
              value: c
            });
        }
        a = this.getAbstractCategory(c, n.clusterAt(l - 1), n.clusterAt(l + 1));
      }
      return i && r.forEach(e => {
        "mi" != e.type && "mo" != e.type && "mn" != e.type || (e.mathvariant = i);
      }), r.forEach(t => {
        this.assignStyle(t, e.style);
      }), {
        elements: r,
        blockInfo: {
          block: e
        }
      };
    }
    getCharCategory(e, t, r) {
      if (" " == e) return "Space";
      if ("." == e && "Normal" == s.A.resolveDotCategory(t, r)) return "Number";
      var n = e.codePointAt(0),
        i;
      return n >= 48 && n <= 57 ? "Number" : a.A.categoryByUnicodeChar(e);
    }
    getAbstractCategory(e, t, r) {
      return "." == e ? s.A.resolveDotCategory(t, r) : s.A.getAbstractCategory(a.A.categoryByUnicodeChar(e));
    }
    wrapInStyleIfRequired(e, t) {
      return e.style ? "msup" == t.type || "msub" == t.type || "msubsup" == t.type ? t : e.style.mathModeType ? {
        type: "mstyle",
        displaystyle: "\\textstyle" != e.style.mathModeType,
        element: t
      } : t : t;
    }
    generateCompositeBlock(e) {
      var t = a.A.getCustomSymbolComponent(e.text);
      if (t && t.toMathml) {
        var r = t.toMathml(e, this);
        return this.assignStyle(r, e.style), r;
      }
      return null;
    }
    generateMath(e) {
      var t = this.generateCompositeBlock(e);
      if (!t) return null;
      if ("math" != t.type) return {
        type: "math",
        elements: [t]
      };
      if (1 == t.elements.length && "mrow" == t.elements[0].type) {
        var r = t.elements[0];
        return r.isNone ? {
          type: "math",
          elements: []
        } : u(u({}, t), {}, {
          elements: r.elements
        });
      }
      return t;
    }
    assignStyle(e, t) {
      this.options.screenReader || t && t.color && !c.A.isBlackColor(t.color) && (e.mathcolor = c.A.colorToHex(t.color, c.A.blackArr));
    }
    getOptions() {
      return this.options;
    }
  }
};
