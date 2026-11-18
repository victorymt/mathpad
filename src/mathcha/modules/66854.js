/* module 66854 — 709 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(58219),
    i = r(54311),
    o = r(59820),
    s = r(36569),
    a = r(66310),
    l = r(7001),
    c = Object.assign;
  e.exports = !c || r(81984)(function () {
    var e = {},
      t = {},
      r = Symbol(),
      n = "abcdefghijklmnopqrst";
    return e[r] = 7, n.split("").forEach(function (e) {
      t[e] = e;
    }), 7 != c({}, e)[r] || Object.keys(c({}, t)).join("") != n;
  }) ? function e(t, r) {
    for (var c = a(t), d = arguments.length, h = 1, p = o.f, u = s.f; d > h;) for (var g = l(arguments[h++]), m = p ? i(g).concat(p(g)) : i(g), f = m.length, y = 0, v; f > y;) v = m[y++], n && !u.call(g, v) || (c[v] = g[v]);
    return c;
  } : c;
};
