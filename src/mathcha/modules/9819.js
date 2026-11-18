/* module 9819 — 1725 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => d
  });
  var n = r(40927),
    i = r.n(n),
    o = r(516),
    s = r(98381),
    a = r(64080);
  class l extends s.Y {
    getSymbol() {
      return "lim";
    }
    getFromClass() {
      return "from-varlimsup";
    }
    getToClass() {
      return "to-varlimsup";
    }
    getSymbolClassName() {
      return "sup";
    }
    getFromStyle() {
      var e = this.getFontLimitStyle(!0);
      return e || {
        marginBottom: this.isLimitKind() ? o.A.getEmRound(0, this.getMathFontSizePixel()) + "em" : o.A.getEmRound(-.49, this.getMathFontSizePixel()) + "em"
      };
    }
  }
  class c extends s.K {
    getViewComponent() {
      return l;
    }
    getLatextName() {
      return "\\varlimsup";
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
          return i().createElement(a.A, {
            symbol: this.symbol,
            isExpanded: !0,
            isBorderTop: !0
          });
        }
      });
    }
    toMathml(e, t) {
      var r = {
        type: "mover",
        accent: !0,
        base: {
          type: "mo",
          value: this.getSymbol(),
          largeop: !0
        },
        overscript: {
          type: "mo",
          value: "¯"
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
  const d = new c();
};
