/* module 49326 — 437 chars */
module.exports = function (e, t, r) {
  var n = r(31769),
    i = r(72428),
    o = r(56449),
    s = r(30361),
    a = r(30294),
    l = r(77797);
  function c(e, t, r) {
    for (var c = -1, d = (t = n(t, e)).length, h = !1; ++c < d;) {
      var p = l(t[c]);
      if (!(h = null != e && r(e, p))) break;
      e = e[p];
    }
    return h || ++c != d ? h : !!(d = null == e ? 0 : e.length) && a(d) && s(p, d) && (o(e) || i(e));
  }
  e.exports = c;
};
