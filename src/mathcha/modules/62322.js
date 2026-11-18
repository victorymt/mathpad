/* module 62322 — 598 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(77981),
    i = r(43305),
    o = r(81485),
    s = r(35052),
    a = r(67574)("isConcatSpreadable");
  function l(e, t, r, c, d, h, p, u) {
    for (var g = d, m = 0, f = !!p && s(p, u, 3), y, v; m < c;) {
      if (m in r) {
        if (y = f ? f(r[m], m, t) : r[m], v = !1, i(y) && (v = void 0 !== (v = y[a]) ? !!v : n(y)), v && h > 0) g = l(e, t, y, o(y.length), g, h - 1) - 1;else {
          if (g >= 9007199254740991) throw TypeError();
          e[g] = y;
        }
        g++;
      }
      m++;
    }
    return g;
  }
  e.exports = l;
};
