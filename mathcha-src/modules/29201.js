/* module 29201 — 3048 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    Not: () => m,
    NotSc: () => f,
    default: () => y
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(39791),
    a = r(25742),
    l = r(80931),
    c = r(12481),
    d = r(516),
    h = r(60024),
    p = r(70224);
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
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class m extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "not"), (0, n.A)(this, "wrapRenderSvg", (e, t, r) => this.renderSvg(e, t, r));
    }
    renderSvg(e, t, r) {
      var n = r / 10,
        i = n,
        s;
      this.refMap.value && (n += (t - this.getElementHeight(this.refMap.value.editor)) / 2);
      var a = (e - r / 2) / 2,
        l = "".concat(e - a, ",").concat(0 + 2 * n, " ").concat(0 + a, ",").concat(t + i);
      return o().createElement("polyline", {
        points: l,
        strokeWidth: (0, d.U)(r),
        fill: "none"
      });
    }
    renderComponent() {
      return o().createElement("cancel-symbol", null, o().createElement(c.A, {
        fixedContextHandler: this.context.fixedContextHandler,
        renderSvg: this.wrapRenderSvg
      }), o().createElement(s.A, g(g({}, this.buildMetaDataDirectChildOrEmpty("value")), {}, {
        stripInfo: this.getMergedStripInfoWithProps({
          stripDown: !0,
          stripUp: !0
        })
      })));
    }
  }
  class f extends l.A {
    constructor() {
      super();
    }
    getViewComponent() {
      return m;
    }
    getLatextName() {
      return "\\not";
    }
    getSymbol() {
      return "not";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName(), this.getSymbol()],
        symbol: this.getSymbol(),
        height: 25,
        renderSymbol: () => o().createElement(h.A, null)
      });
    }
    toModel(e, t, r) {
      var n = this.getModel();
      return n.elements.value = p.A.createEditorWith(r), n;
    }
    toLatex(e, t, r) {
      var n = this.getLatextName();
      return "".concat(n, "{").concat(r.toLatexFromEditor(e.elements.value, t), "}");
    }
    toMathml(e, t) {
      return {
        type: "menclose",
        notation: "updiagonalstrike",
        element: t.generateEditor(e.elements.value)
      };
    }
  }
  const y = new f();
};
