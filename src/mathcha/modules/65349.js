/* module 65349 — 464 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(19539);
  class i {
    actionWith(e, t, r) {
      return r ? " ".concat(e).concat(n.A.round2(t.x), ",").concat(n.A.round2(t.y)) : " ".concat(e).concat(t.x, ",").concat(t.y);
    }
    actionWithSegPoint(e, t, r) {
      return r ? " ".concat(e).concat(n.A.round2(t[0]), ",").concat(n.A.round2(t[1])) : " ".concat(e).concat(t[0], ",").concat(t[1]);
    }
  }
  const o = new i();
};
