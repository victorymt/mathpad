/* module 10776 — 229 chars */
module.exports = function (e, t, r) {
  var n = r(30756),
    i = r(95950);
  function o(e) {
    for (var t = i(e), r = t.length; r--;) {
      var o = t[r],
        s = e[o];
      t[r] = [o, s, n(s)];
    }
    return t;
  }
  e.exports = o;
};
