/* module 55298 — 215 chars */
module.exports = function (e, t, r) {
  var n = r(44968),
    i = r(30254)("iterator"),
    o = r(20210);
  e.exports = r(46438).getIteratorMethod = function (e) {
    if (null != e) return e[i] || e["@@iterator"] || o[n(e)];
  };
};
