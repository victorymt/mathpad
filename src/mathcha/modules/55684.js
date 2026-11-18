/* module 55684 — 871 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => c
  });
  var n = r(40927),
    i = r.n(n),
    o = r(73843),
    s = r(90826),
    a = r(66464);
  class l extends a.F {
    getViewComponent() {
      return o.WideHat;
    }
    getLatextName() {
      return "\\hat";
    }
    getSymbol() {
      return "^";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        renderSymbol() {
          return i().createElement(s.A, {
            symbol: this.symbol
          });
        }
      });
    }
    toLatex(e, t, r) {
      var n = "widehat";
      return this.isEmptyOrOneCharEditor(e.elements.value) && (n = "hat"), "\\".concat(n, "{").concat(r.toLatexFromEditor(e.elements.value, t), "}");
    }
  }
  const c = new l();
};
