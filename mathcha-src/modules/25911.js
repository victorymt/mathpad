/* module 25911 — 968 chars */
module.exports = function (e, t, r) {
  var n = r(38859),
    i = r(14248),
    o = r(41600),
    s = 1,
    a = 2;
  function l(e, t, r, s, a, l) {
    var c = 1 & r,
      d = e.length,
      h = t.length;
    if (d != h && !(c && h > d)) return !1;
    var p = l.get(e),
      u = l.get(t);
    if (p && u) return p == t && u == e;
    var g = -1,
      m = !0,
      f = 2 & r ? new n() : void 0;
    for (l.set(e, t), l.set(t, e); ++g < d;) {
      var y = e[g],
        v = t[g];
      if (s) var b = c ? s(v, y, g, t, e, l) : s(y, v, g, e, t, l);
      if (void 0 !== b) {
        if (b) continue;
        m = !1;
        break;
      }
      if (f) {
        if (!i(t, function (e, t) {
          if (!o(f, t) && (y === e || a(y, e, r, s, l))) return f.push(t);
        })) {
          m = !1;
          break;
        }
      } else if (y !== v && !a(y, v, r, s, l)) {
        m = !1;
        break;
      }
    }
    return l.delete(e), l.delete(t), m;
  }
  e.exports = l;
};
