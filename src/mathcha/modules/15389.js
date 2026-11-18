/* module 15389 — 268 chars */
module.exports = function (e, t, r) {
  var n = r(93663),
    i = r(87978),
    o = r(83488),
    s = r(56449),
    a = r(50583);
  function l(e) {
    return "function" == typeof e ? e : null == e ? o : "object" == typeof e ? s(e) ? i(e[0], e[1]) : n(e) : a(e);
  }
  e.exports = l;
};
