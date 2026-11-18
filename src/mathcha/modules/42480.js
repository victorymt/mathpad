/* module 42480 — 639 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(40927),
    i = r.n(n);
  const o = e => {
    var t = e.p1,
      r = e.p2,
      n = e.style,
      o = "M".concat(t.x, ",").concat(t.y, " L").concat(r.x, ",").concat(r.y, " \n        M").concat(t.x + 3, ",").concat(t.y - 2, " L").concat(t.x, ",").concat(t.y, "L").concat(t.x + 3, ",").concat(t.y + 2, "\n        M").concat(r.x - 3, ",").concat(r.y - 2, " L").concat(r.x, ",").concat(r.y, "L").concat(r.x - 3, ",").concat(r.y + 2);
    return i().createElement("g", {
      style: n
    }, i().createElement("path", {
      d: o
    }));
  };
  r.dn(o);
};
