/* module 19947 — 672 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => o
  });
  var n = r(30803);
  class i {
    getModel(e) {
      return {
        id: n.w.nextId(),
        text: e ? e.symbol : ""
      };
    }
    getSymbolInfo() {
      return [this.getSymbolBy("\\lparenthesis", "("), this.getSymbolBy("\\rparenthesis", ")"), this.getSymbolBy("\\lbrace", "{"), this.getSymbolBy("\\rbrace", "}"), this.getSymbolBy("\\lbracket", "["), this.getSymbolBy("\\rbracket", "]")];
    }
    getSymbolBy(e, t) {
      return {
        searchText: e + " " + t,
        names: [e],
        symbol: t,
        forceCreateModel: !0
      };
    }
  }
  const o = new i();
};
