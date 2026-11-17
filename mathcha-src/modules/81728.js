/* module 81728 — 366 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => s
  });
  var n = r(66464);
  class i extends n.t {
    getSymbol() {
      return "␒␒";
    }
  }
  class o extends n.F {
    getViewComponent() {
      return i;
    }
    getLatextName() {
      return "\\ddot";
    }
    getSymbol() {
      return "..";
    }
  }
  const s = new o();
};
