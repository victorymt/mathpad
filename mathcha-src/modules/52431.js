/* module 52431 — 913 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(48440),
    i = r(30803);
  class o extends n.A {
    constructor() {
      super(), this.isBracket = !0;
    }
    toLatex(e, t, r, n) {
      return this.getLatextName() + " ";
    }
    toMathml(e) {
      var t = {
        type: "mo",
        fence: !0,
        value: this.getSymbol()
      };
      return e.___normal && (t.stretchy = !1), t;
    }
    toModel() {
      return null;
    }
    getModel() {
      return {
        id: i.w.nextId(),
        type: "single",
        text: this.getLatextName()
      };
    }
    getFilterTag() {}
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "single",
        description: "Height adjust automatically by its content",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        filterTag: this.getFilterTag()
      });
    }
  }
};
