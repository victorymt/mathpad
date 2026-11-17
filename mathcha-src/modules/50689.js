/* module 50689 — 1080 chars */
module.exports = function (e, t, r) {
  var n = r(50002),
    i = 1,
    o,
    s = Object.prototype.hasOwnProperty;
  function a(e, t, r, i, o, a) {
    var l = 1 & r,
      c = n(e),
      d = c.length,
      h,
      p;
    if (d != n(t).length && !l) return !1;
    for (var u = d; u--;) {
      var g = c[u];
      if (!(l ? g in t : s.call(t, g))) return !1;
    }
    var m = a.get(e),
      f = a.get(t);
    if (m && f) return m == t && f == e;
    var y = !0;
    a.set(e, t), a.set(t, e);
    for (var v = l; ++u < d;) {
      var b = e[g = c[u]],
        x = t[g];
      if (i) var C = l ? i(x, b, g, t, e, a) : i(b, x, g, e, t, a);
      if (!(void 0 === C ? b === x || o(b, x, r, i, a) : C)) {
        y = !1;
        break;
      }
      v || (v = "constructor" == g);
    }
    if (y && !v) {
      var S = e.constructor,
        A = t.constructor;
      S == A || !("constructor" in e) || !("constructor" in t) || "function" == typeof S && S instanceof S && "function" == typeof A && A instanceof A || (y = !1);
    }
    return a.delete(e), a.delete(t), y;
  }
  e.exports = a;
};
