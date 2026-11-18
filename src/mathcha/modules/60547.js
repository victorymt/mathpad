/* module 60547 — 1403 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(38479),
    o = r(62156),
    s = r(93855),
    a = r(90646),
    l = r(75804),
    c = r(14594),
    d = ".",
    h = ":",
    p = !1;
  function u(e, t) {
    return e && "object" == typeof e && null != e.key ? l.escape(e.key) : t.toString(36);
  }
  function g(e, t, r, i) {
    var a = typeof e,
      c,
      p;
    if ("undefined" !== a && "boolean" !== a || (e = null), null === e || "string" === a || "number" === a || "object" === a && e.$$typeof === o) return r(i, e, "" === t ? d + u(e, 0) : t), 1;
    var m = 0,
      f = "" === t ? d : t + h;
    if (Array.isArray(e)) for (var y = 0; y < e.length; y++) m += g(c = e[y], p = f + u(c, y), r, i);else {
      var v = s(e);
      if (v) {
        var b = v.call(e),
          x;
        if (v !== e.entries) for (var C = 0; !(x = b.next()).done;) m += g(c = x.value, p = f + u(c, C++), r, i);else for (var S, A; !(x = b.next()).done;) {
          var w = x.value;
          w && (m += g(c = w[1], p = f + l.escape(w[0]) + h + u(c, 0), r, i));
        }
      } else if ("object" === a) {
        var E = "",
          k,
          O = String(e);
        n("31", "[object Object]" === O ? "object with keys {" + Object.keys(e).join(", ") + "}" : O, E);
      }
    }
    return m;
  }
  function m(e, t, r) {
    return null == e ? 0 : g(e, "", t, r);
  }
  e.exports = m;
};
