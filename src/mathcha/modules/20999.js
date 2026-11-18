/* module 20999 — 486 chars */
module.exports = function (e, t, r) {
  var n = r(69302),
    i = r(36800);
  function o(e) {
    return n(function (t, r) {
      var n = -1,
        o = r.length,
        s = o > 1 ? r[o - 1] : void 0,
        a = o > 2 ? r[2] : void 0;
      for (s = e.length > 3 && "function" == typeof s ? (o--, s) : void 0, a && i(r[0], r[1], a) && (s = o < 3 ? void 0 : s, o = 1), t = Object(t); ++n < o;) {
        var l = r[n];
        l && e(t, l, n, s);
      }
      return t;
    });
  }
  e.exports = o;
};
