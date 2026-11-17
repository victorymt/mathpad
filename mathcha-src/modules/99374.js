/* module 99374 — 569 chars */
module.exports = function (e, t, r) {
  var n = r(54128),
    i = r(23805),
    o = r(44394),
    s = NaN,
    a = /^[-+]0x[0-9a-f]+$/i,
    l = /^0b[01]+$/i,
    c = /^0o[0-7]+$/i,
    d = parseInt;
  function h(e) {
    if ("number" == typeof e) return e;
    if (o(e)) return s;
    if (i(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = i(t) ? t + "" : t;
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = n(e);
    var r = l.test(e);
    return r || c.test(e) ? d(e.slice(2), r ? 2 : 8) : a.test(e) ? s : +e;
  }
  e.exports = h;
};
