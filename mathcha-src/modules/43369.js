/* module 43369 — 6071 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => b
  });
  var n = r(40927),
    i = r.n(n),
    o = r(48440),
    s = r(64467),
    a = r(39791),
    l = r(67882),
    c = r(83846),
    d = r(49812),
    h = r(32485),
    p = r.n(h);
  function u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function g(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(Object(r), !0).forEach(function (t) {
        (0, s.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class m extends c.A {
    constructor() {
      super(...arguments), (0, s.A)(this, "containerClassName", "fraction-symbol"), (0, s.A)(this, "baselineClass", "");
    }
    getClassName() {
      return p()("fraction-symbol", {
        smaller: "\\frac" == this.props.data.text,
        "frac-inline": this.shouldBeSmaller()
      });
    }
    shouldBeSmaller() {
      return "\\tfrac" == this.props.data.text || "\\cfrac" != this.props.data.text && "\\dfrac" != this.props.data.text && (this.isFirstMathModeLevel() && this.isInlineMode() && "\\frac" == this.props.data.text || "\\frac" == this.props.data.text && this.getFracLevel() > 0);
    }
    getBorderBottomStyle() {
      return "solid ".concat(this.getLineThickness(), "px");
    }
    renderComponent() {
      var e = !1,
        t = {
          borderBottom: this.getBorderBottomStyle()
        },
        r = {
          marginBottom: this.getRoundEmStr(-.5)
        },
        n = {
          marginTop: this.getRoundEmStr(-.41)
        },
        o;
      this.shouldBeSmaller() ? (o = .75 * this.props.fontSizeRatio, e = !0, t = {
        verticalAlign: "0.35em",
        borderBottom: this.getBorderBottomStyle()
      }, r = {
        marginBottom: this.getRoundEmStr(-.4),
        paddingTop: this.getRoundEmStr(.05)
      }, n = {
        marginTop: this.getRoundEmStr(-.57),
        marginBottom: this.getRoundEmStr(-.05)
      }) : o = this.props.fontSizeRatio;
      var s = d.A.isSingleLineEditor(this.props.data.elements.value) ? l.A : a.A,
        c = d.A.isSingleLineEditor(this.props.data.elements.sub1) ? l.A : a.A;
      return [i().createElement(s, g(g({
        key: "1"
      }, this.buildMetaDataDirectChildOrEmpty("value")), {}, {
        style: r,
        className: "frac-edit-area enumerator",
        fontSizeRatio: o,
        fracLevel: this.getFracLevel() + 1,
        noAreaContainer: !0,
        noSpacingRule: e,
        stripInfo: this.getMergedStripInfoWithProps({
          stripDown: !1,
          stripUp: !0
        })
      })), i().createElement("div", {
        key: "2",
        className: "frac-line"
      }, i().createElement("inline", {
        style: t
      })), i().createElement(c, g(g({
        key: "3"
      }, this.buildMetaDataDirectChildOrEmpty("sub1")), {}, {
        style: n,
        className: "frac-edit-area denominator",
        fontSizeRatio: o,
        fracLevel: this.getFracLevel() + 1,
        noAreaContainer: !0,
        noSpacingRule: e,
        stripInfo: this.getMergedStripInfoWithProps({
          stripDown: !0,
          stripUp: !1
        })
      }))];
    }
  }
  var f = r(37058),
    y = r(70224);
  class v extends o.A {
    getViewComponent() {
      return m;
    }
    getModel(e) {
      var t = super.getModel(e);
      return e && "\\cfrac" == e.names[0] && (t.text = "\\cfrac"), e && "\\dfrac" == e.names[0] && (t.text = "\\dfrac"), e && "\\tfrac" == e.names[0] && (t.text = "\\tfrac"), t;
    }
    getModelMeta() {
      return {
        text: "\\frac",
        keyInsertOnSelection: "value",
        elements: {
          value: {
            onRemove: "all"
          },
          sub1: {
            onRemove: "all"
          }
        }
      };
    }
    getSymbolInfo() {
      return [{
        type: "composite",
        names: ["\\frac"],
        description: "fraction",
        filterTag: "fraction",
        height: 30,
        renderSymbol: () => i().createElement(f.A, null)
      }, {
        type: "composite",
        names: ["\\cfrac"],
        filterTag: "fraction",
        description: "Output fractions with the same size characters",
        height: 30,
        renderSymbol: () => i().createElement(f.A, null)
      }, {
        type: "composite",
        names: ["\\dfrac"],
        filterTag: "fraction",
        description: "Normal fractions font in \\inline-math",
        height: 30,
        renderSymbol: () => i().createElement(f.A, null)
      }, {
        type: "composite",
        names: ["\\tfrac"],
        filterTag: "fraction",
        description: "Smaller fractions font in \\math-container",
        height: 30,
        renderSymbol: () => i().createElement(f.A, null)
      }];
    }
    toLatex(e, t, r) {
      return "".concat(e.text, "{").concat(r.toLatexFromEditor(e.elements.value, t), "}{").concat(r.toLatexFromEditor(e.elements.sub1, t), "}");
    }
    toMathml(e, t) {
      var r = {
        type: "mfrac",
        numerator: t.generateEditor(e.elements.value),
        denominator: t.generateEditor(e.elements.sub1)
      };
      return "\\dfrac" == e.text || "\\cfrac" == e.text ? {
        type: "mstyle",
        displaystyle: !0,
        scriptlevel: "0",
        element: r
      } : "\\tfrac" == e.text ? {
        type: "mstyle",
        displaystyle: !1,
        scriptlevel: "0",
        element: r
      } : r;
    }
    toModel(e, t, r, n) {
      var i = this.getModel();
      return i.text = e, i.elements.value = y.A.createEditorWith(r), i.elements.sub1 = y.A.createEditorWith(n), i;
    }
  }
  const b = new v();
};
