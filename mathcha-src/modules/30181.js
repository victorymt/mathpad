/* module 30181 — 292 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => o
  });
  var n = r(8009);
  class i extends n.C {
    getLatextName() {
      return "\\mod";
    }
    getSymbol() {
      return "mod";
    }
    toLatex() {
      return "\\bmod";
    }
  }
  const o = new i();
};
