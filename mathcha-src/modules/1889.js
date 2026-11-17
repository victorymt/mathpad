/* module 1889 — 1174 chars */
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
      return "ˇ";
    }
    getSymbolClassName() {
      return "check";
    }
    getMarginBottom() {
      return this.isSingleTextBlockAndUperSmall(this.props.data.elements.value) ? this.getRoundEmStr(-.2) : this.getRoundEmStr(-.05);
    }
  }
  class c extends a.F {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return l;
    }
    getLatextName() {
      return "\\check";
    }
    getSymbol() {
      return "ˇ";
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
