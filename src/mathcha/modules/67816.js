/* module 67816 — 286 chars */
module.exports = function (e, t, r) {
  var n = r(66670),
    i = r(46438),
    o = r(74742),
    s = r(84336),
    a = r(78423).f;
  e.exports = function (e) {
    var t = i.Symbol || (i.Symbol = o ? {} : n.Symbol || {});
    "_" == e.charAt(0) || e in t || a(t, e, {
      value: s.f(e)
    });
  };
};
