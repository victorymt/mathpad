/* module 3408 — 1185 chars */
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
      return "`";
    }
    getSymbolClassName() {
      return "grave";
    }
    getMarginBottom() {
      return this.isSingleTextBlockAndUperSmall(this.props.data.elements.value) ? this.getRoundEmStr(-.35) : this.getRoundEmStr(-.1);
    }
  }
  class c extends a.F {
    getViewComponent() {
      return l;
    }
    getLatextName() {
      return "\\grave";
    }
    getSymbol() {
      return "`";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        renderSymbol() {
          return o().createElement(s.A, {
            overStyle: {
              fontFamily: "'Times New Roman', Times, serif"
            },
            symbol: this.symbol,
            height: 4
          });
        }
      });
    }
  }
  const d = new c();
};
