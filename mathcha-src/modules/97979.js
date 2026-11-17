/* module 97979 — 1157 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => c
  });
  var n = r(40927),
    i = r.n(n),
    o = r(90864),
    s = r(94114);
  class a extends o.U {
    getSymbol() {
      return "⋃";
    }
    getEditorFromToMarginLeft() {
      return "";
    }
    getToClass() {
      return "to-cup";
    }
    getFromClass() {
      return "from-cup";
    }
    getSymbolClassName() {
      return "custom-symbol";
    }
  }
  class l extends o.B {
    getViewComponent() {
      return a;
    }
    getLatextName() {
      return "\\bigcup";
    }
    getSymbol() {
      return "⋃";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName(), this.getSymbol()],
        symbol: this.getSymbol(),
        filterTag: "cup",
        height: 35,
        isExpanded: !0,
        renderSymbol() {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return i().createElement(s.A, {
            symbol: this.symbol,
            isSmall: !0,
            isExpanded: e
          });
        }
      });
    }
  }
  const c = new l();
};
