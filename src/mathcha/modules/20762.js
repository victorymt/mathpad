/* module 20762 — 215 chars */
module.exports = function (e, t, r) {
  var n = r(34848),
    i = r(67574)("iterator"),
    o = r(60906);
  e.exports = r(56094).getIteratorMethod = function (e) {
    if (null != e) return e[i] || e["@@iterator"] || o[n(e)];
  };
};
