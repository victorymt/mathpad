/* module 11331 — 482 chars */
module.exports = function (e, t, r) {
  var n = r(72552),
    i = r(28879),
    o = r(40346),
    s = "[object Object]",
    a = Function.prototype,
    l = Object.prototype,
    c = a.toString,
    d = l.hasOwnProperty,
    h = c.call(Object);
  function p(e) {
    if (!o(e) || n(e) != s) return !1;
    var t = i(e);
    if (null === t) return !0;
    var r = d.call(t, "constructor") && t.constructor;
    return "function" == typeof r && r instanceof r && c.call(r) == h;
  }
  e.exports = p;
};
