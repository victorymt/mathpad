/* module 77556 — 404 chars */
module.exports = function (e, t, r) {
  var n = r(51873),
    i = r(34932),
    o = r(56449),
    s = r(44394),
    a = 1 / 0,
    l = n ? n.prototype : void 0,
    c = l ? l.toString : void 0;
  function d(e) {
    if ("string" == typeof e) return e;
    if (o(e)) return i(e, d) + "";
    if (s(e)) return c ? c.call(e) : "";
    var t = e + "";
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
  }
  e.exports = d;
};
