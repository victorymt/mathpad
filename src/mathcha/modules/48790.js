/* module 48790 — 724 chars */
module.exports = function (e, t, r) {
  var n = r(35052),
    i = r(97368),
    o = r(1508),
    s = r(4228),
    a = r(81485),
    l = r(20762),
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
