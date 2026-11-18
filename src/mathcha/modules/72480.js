/* module 72480 — 2073 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    GroupSc: () => p,
    default: () => u
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(39791),
    a = r(25742),
    l = r(80931);
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
  class h extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "math-group");
    }
    renderComponent() {
      return o().createElement(s.A, d({
        borderIfEmpty: !0
      }, this.buildMetaDataFromName("value")));
    }
  }
  class p extends l.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "isFlatten", !0);
    }
    getViewComponent() {
      return h;
    }
    getLatextName() {
      return "\\group";
    }
    getSymbol() {
      return "Group";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName(), this.getSymbol()],
        symbol: this.getSymbol(),
        renderSymbol: () => o().createElement("div", {
          className: "group-icon"
        }, o().createElement("div", {
          className: "rectangle"
        }))
      });
    }
    toLatex(e, t, r) {
      return "{".concat(r.toLatexFromEditor(e.elements.value, t), "}");
    }
    toMathml(e, t) {
      return t.generateEditor(e.elements.value);
    }
  }
  const u = new p();
};
