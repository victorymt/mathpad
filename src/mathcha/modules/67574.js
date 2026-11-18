/* module 67574 — 245 chars */
module.exports = function (e, t, r) {
  var n = r(44556)("wks"),
    i = r(4415),
    o = r(67526).Symbol,
    s = "function" == typeof o,
    a;
  (e.exports = function (e) {
    return n[e] || (n[e] = s && o[e] || (s ? o : i)("Symbol." + e));
  }).store = n;
};
