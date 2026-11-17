/* module 63394 — 1358 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => d
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(40490),
    a = r(66464);
  class l extends a.t {
    constructor() {
      super(...arguments), (0, n.A)(this, "shouldAdjustSymbolWithCharacterSign", !0);
    }
    getSymbol() {
      return "ˆ";
    }
    getSymbolClassName() {
      return "small-hat";
    }
    getMarginBottom() {
      return this.isSingleTextBlockAndUperSmall(this.props.data.elements.value) ? this.getRoundEmStr(-.3) : this.getRoundEmStr(-.07);
    }
  }
  class c extends a.F {
    getViewComponent() {
      return l;
    }
    getLatextName() {
      return "\\small-hat";
    }
    getSymbol() {
      return "ˆ";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        filterTag: "hat",
        desciption: "small hat",
        renderSymbol() {
          return o().createElement(s.A, {
            overStyle: {
              fontFamily: "'Times New Roman', Times, serif"
            },
            symbol: this.symbol,
            height: 6
          });
        }
      });
    }
    toLatex(e, t, r) {
      return "\\hat{".concat(r.toLatexFromEditor(e.elements.value, t), "}");
    }
  }
  const d = new c();
};
