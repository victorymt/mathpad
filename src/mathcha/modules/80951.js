/* module 80951 — 1084 chars */
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
      return "˘";
    }
    getSymbolClassName() {
      return "breve";
    }
    getMarginBottom() {
      return this.isSingleTextBlockAndUperSmall(this.props.data.elements.value) ? this.getRoundEmStr(-.4) : this.getRoundEmStr(-.2);
    }
  }
  class c extends a.F {
    getViewComponent() {
      return l;
    }
    getLatextName() {
      return "\\breve";
    }
    getSymbol() {
      return "˘";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        renderSymbol() {
          return o().createElement(s.A, {
            symbol: this.symbol,
            height: 6
          });
        }
      });
    }
  }
  const d = new c();
};
