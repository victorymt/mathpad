/* module 41799 — 670 chars */
module.exports = function (e, t, r) {
  var n = r(37217),
    i = r(60270),
    o = 1,
    s = 2;
  function a(e, t, r, o) {
    var s = r.length,
      a = s,
      l = !o;
    if (null == e) return !a;
    for (e = Object(e); s--;) {
      var c = r[s];
      if (l && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
    }
    for (; ++s < a;) {
      var d = (c = r[s])[0],
        h = e[d],
        p = c[1];
      if (l && c[2]) {
        if (void 0 === h && !(d in e)) return !1;
      } else {
        var u = new n();
        if (o) var g = o(h, p, d, e, t, u);
        if (!(void 0 === g ? i(p, h, 3, o, u) : g)) return !1;
      }
    }
    return !0;
  }
  e.exports = a;
};
