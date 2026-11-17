/* module 89368 — 1448 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => c
  });
  var n = r(40927),
    i = r.n(n),
    o = r(98381),
    s = r(64080);
  class a extends o.Y {
    getSymbol() {
      return "lim";
    }
    getFromClass() {
      return "from-lim";
    }
    getToClass() {
      return "to-lim";
    }
    getSymbolClassName() {
      return "inf";
    }
  }
  class l extends o.K {
    getViewComponent() {
      return a;
    }
    getLatextName() {
      return "\\varliminf";
    }
    getSymbol() {
      return "lim";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        height: 30,
        renderSymbol() {
          return i().createElement(s.A, {
            symbol: this.symbol,
            isExpanded: !0,
            isBorderBottom: !0
          });
        }
      });
    }
    toMathml(e, t) {
      var r = {
        type: "munder",
        accent: !0,
        base: {
          type: "mo",
          value: this.getSymbol(),
          largeop: !0
        },
        underscript: {
          type: "mo",
          value: "_"
        }
      };
      return e.elements.from || e.elements.to ? {
        type: "munderover",
        base: r,
        overscript: t.generateEditor(e.elements.from),
        underscript: t.generateEditor(e.elements.to)
      } : r;
    }
  }
  const c = new l();
};
