/* module 30254 — 246 chars */
module.exports = function (e, t, r) {
  var n = r(96308)("wks"),
    i = r(19191),
    o = r(66670).Symbol,
    s = "function" == typeof o,
    a;
  (e.exports = function (e) {
    return n[e] || (n[e] = s && o[e] || (s ? o : i)("Symbol." + e));
  }).store = n;
};
