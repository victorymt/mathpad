/* module 87068 — 1039 chars */
module.exports = function (e, t, r) {
  var n = r(37217),
    i = r(25911),
    o = r(21986),
    s = r(50689),
    a = r(5861),
    l = r(56449),
    c = r(3656),
    d = r(37167),
    h = 1,
    p = "[object Arguments]",
    u = "[object Array]",
    g = "[object Object]",
    m,
    f = Object.prototype.hasOwnProperty;
  function y(e, t, r, h, m, y) {
    var v = l(e),
      b = l(t),
      x = v ? u : a(e),
      C = b ? u : a(t),
      S = (x = x == p ? g : x) == g,
      A = (C = C == p ? g : C) == g,
      w = x == C;
    if (w && c(e)) {
      if (!c(t)) return !1;
      v = !0, S = !1;
    }
    if (w && !S) return y || (y = new n()), v || d(e) ? i(e, t, r, h, m, y) : o(e, t, x, r, h, m, y);
    if (!(1 & r)) {
      var E = S && f.call(e, "__wrapped__"),
        k = A && f.call(t, "__wrapped__");
      if (E || k) {
        var O = E ? e.value() : e,
          D = k ? t.value() : t;
        return y || (y = new n()), m(O, D, r, h, y);
      }
    }
    return !!w && (y || (y = new n()), s(e, t, r, h, m, y));
  }
  e.exports = y;
};
