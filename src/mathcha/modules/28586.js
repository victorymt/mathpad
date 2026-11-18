/* module 28586 — 370 chars */
module.exports = function (e, t, r) {
  var n = r(56449),
    i = r(44394),
    o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    s = /^\w*$/;
  function a(e, t) {
    if (n(e)) return !1;
    var r = typeof e;
    return !("number" != r && "symbol" != r && "boolean" != r && null != e && !i(e)) || s.test(e) || !o.test(e) || null != t && e in Object(t);
  }
  e.exports = a;
};
