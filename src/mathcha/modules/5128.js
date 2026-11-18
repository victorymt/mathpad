/* module 5128 — 231 chars */
module.exports = function (e, t, r) {
  var n = r(3290),
    i = r(64894);
  function o(e, t) {
    var r = -1,
      o = i(e) ? Array(e.length) : [];
    return n(e, function (e, n, i) {
      o[++r] = t(e, n, i);
    }), o;
  }
  e.exports = o;
};
