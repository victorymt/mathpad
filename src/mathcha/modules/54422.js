/* module 54422 — 467 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => s
  });
  var n = r(98381);
  class i extends n.Y {
    getSymbol() {
      return "lim";
    }
    getFromClass() {
      return "from-lim";
    }
    getToClass() {
      return "to-lim";
    }
  }
  class o extends n.K {
    getViewComponent() {
      return i;
    }
    getLatextName() {
      return "\\lim";
    }
    getSymbol() {
      return "lim";
    }
  }
  const s = new o();
};
