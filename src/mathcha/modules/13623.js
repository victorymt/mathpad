/* module 13623 — 903 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => c
  });
  var n = r(40927),
    i = r.n(n),
    o = r(97768),
    s = r(40490),
    a = r(66464);
  class l extends a.F {
    getViewComponent() {
      return o.WideTilde;
    }
    getLatextName() {
      return "\\tilde";
    }
    getSymbol() {
      return "~";
    }
    toLatex(e, t, r) {
      var n = "widetilde";
      return this.isEmptyOrOneCharEditor(e.elements.value) && (n = "tilde"), "\\".concat(n, "{").concat(r.toLatexFromEditor(e.elements.value, t), "}");
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        renderSymbol() {
          return i().createElement(s.A, {
            symbol: this.symbol,
            height: 10
          });
        }
      });
    }
  }
  const c = new l();
};
