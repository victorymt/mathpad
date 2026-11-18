/* module 14273 — 616 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => a
  });
  var n = r(64467),
    i = r(66464);
  class o extends i.t {
    constructor() {
      super(...arguments), (0, n.A)(this, "shouldAdjustSymbolWithCharacterSign", !0);
    }
    getSymbol() {
      return "˚";
    }
    getSymbolClassName() {
      return "ring";
    }
    getSymbolHeight() {
      return this.getRoundEmStr(.45);
    }
  }
  class s extends i.F {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\ring";
    }
    getSymbol() {
      return "˚";
    }
  }
  const a = new s();
};
