/* module 9363 — 1328 chars */
module.exports = function (e, t, r) {
  var n;
  !function () {
    "use strict";

    function i(e, t) {
      var r = e.x - t.x,
        n = e.y - t.y;
      return r * r + n * n;
    }
    function o(e, t, r) {
      var n = t.x,
        i = t.y,
        o = r.x - n,
        s = r.y - i;
      if (0 !== o || 0 !== s) {
        var a = ((e.x - n) * o + (e.y - i) * s) / (o * o + s * s);
        a > 1 ? (n = r.x, i = r.y) : a > 0 && (n += o * a, i += s * a);
      }
      return (o = e.x - n) * o + (s = e.y - i) * s;
    }
    function s(e, t) {
      for (var r = e[0], n = [r], o, s = 1, a = e.length; s < a; s++) i(o = e[s], r) > t && (n.push(o), r = o);
      return r !== o && n.push(o), n;
    }
    function a(e, t, r, n, i) {
      for (var s = n, l, c = t + 1; c < r; c++) {
        var d = o(e[c], e[t], e[r]);
        d > s && (l = c, s = d);
      }
      s > n && (l - t > 1 && a(e, t, l, n, i), i.push(e[l]), r - l > 1 && a(e, l, r, n, i));
    }
    function l(e, t) {
      var r = e.length - 1,
        n = [e[0]];
      return a(e, 0, r, t, n), n.push(e[r]), n;
    }
    function c(e, t, r) {
      if (e.length <= 2) return e;
      var n = void 0 !== t ? t * t : 1;
      return e = l(e = r ? e : s(e, n), n);
    }
    void 0 === (n = function () {
      return c;
    }.call(t, r, t, e)) || (e.exports = n);
  }();
};
