/* module 16627 — 441 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(88819),
    i = r(14594),
    o = n.isUnitlessNumber,
    s = null;
  function a(e, t, r, n) {
    var i;
    if (null == t || "boolean" == typeof t || "" === t) return "";
    var s = isNaN(t),
      a,
      l,
      c,
      d;
    if (n || s || 0 === t || o.hasOwnProperty(e) && o[e]) return "" + t;
    "string" == typeof t && (t = t.trim());
    return t + "px";
  }
  e.exports = a;
};
