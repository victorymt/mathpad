/* module 95838 — 726 chars */
module.exports = function (e, t, r) {
  var n = r(58852),
    i = r(27904),
    o = r(12828),
    s = r(80812),
    a = r(70181),
    l = r(55298),
    c = {},
    d = {},
    h = e.exports = function (e, t, r, h, p) {
      var u = p ? function () {
          return e;
        } : l(e),
        g = n(r, h, t ? 2 : 1),
        m = 0,
        f,
        y,
        v,
        b;
      if ("function" != typeof u) throw TypeError(e + " is not iterable!");
      if (o(u)) {
        for (f = a(e.length); f > m; m++) if ((b = t ? g(s(y = e[m])[0], y[1]) : g(e[m])) === c || b === d) return b;
      } else for (v = u.call(e); !(y = v.next()).done;) if ((b = i(v, g, y.value, t)) === c || b === d) return b;
    };
  h.BREAK = c, h.RETURN = d;
};
