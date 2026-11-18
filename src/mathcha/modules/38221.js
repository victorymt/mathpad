/* module 38221 — 1600 chars */
module.exports = function (e, t, r) {
  var n = r(23805),
    i = r(10124),
    o = r(99374),
    s = "Expected a function",
    a = Math.max,
    l = Math.min;
  function c(e, t, r) {
    var c,
      d,
      h,
      p,
      u,
      g,
      m = 0,
      f = !1,
      y = !1,
      v = !0;
    if ("function" != typeof e) throw new TypeError(s);
    function b(t) {
      var r = c,
        n = d;
      return c = d = void 0, m = t, p = e.apply(n, r);
    }
    function x(e) {
      return m = e, u = setTimeout(A, t), f ? b(e) : p;
    }
    function C(e) {
      var r,
        n,
        i = t - (e - g);
      return y ? l(i, h - (e - m)) : i;
    }
    function S(e) {
      var r = e - g,
        n;
      return void 0 === g || r >= t || r < 0 || y && e - m >= h;
    }
    function A() {
      var e = i();
      if (S(e)) return w(e);
      u = setTimeout(A, C(e));
    }
    function w(e) {
      return u = void 0, v && c ? b(e) : (c = d = void 0, p);
    }
    function E() {
      void 0 !== u && clearTimeout(u), m = 0, c = g = d = u = void 0;
    }
    function k() {
      return void 0 === u ? p : w(i());
    }
    function O() {
      var e = i(),
        r = S(e);
      if (c = arguments, d = this, g = e, r) {
        if (void 0 === u) return x(g);
        if (y) return clearTimeout(u), u = setTimeout(A, t), b(g);
      }
      return void 0 === u && (u = setTimeout(A, t)), p;
    }
    return t = o(t) || 0, n(r) && (f = !!r.leading, h = (y = "maxWait" in r) ? a(o(r.maxWait) || 0, t) : h, v = "trailing" in r ? !!r.trailing : v), O.cancel = E, O.flush = k, O;
  }
  e.exports = c;
};
