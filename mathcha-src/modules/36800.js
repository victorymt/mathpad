/* module 36800 — 284 chars */
module.exports = function (e, t, r) {
  var n = r(75288),
    i = r(64894),
    o = r(30361),
    s = r(23805);
  function a(e, t, r) {
    if (!s(r)) return !1;
    var a = typeof t;
    return !!("number" == a ? i(r) && o(t, r.length) : "string" == a && t in r) && n(r[t], e);
  }
  e.exports = a;
};
