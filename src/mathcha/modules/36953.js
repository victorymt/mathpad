/* module 36953 — 825 chars */
module.exports = function (e) {
  "use strict";

  var t = /["'&<>]/;
  function r(e) {
    var r = "" + e,
      n = t.exec(r),
      i;
    if (!n) return r;
    var o = "",
      s = 0,
      a = 0;
    for (s = n.index; s < r.length; s++) {
      switch (r.charCodeAt(s)) {
        case 34:
          i = "&quot;";
          break;
        case 38:
          i = "&amp;";
          break;
        case 39:
          i = "&#x27;";
          break;
        case 60:
          i = "&lt;";
          break;
        case 62:
          i = "&gt;";
          break;
        default:
          continue;
      }
      a !== s && (o += r.substring(a, s)), a = s + 1, o += i;
    }
    return a !== s ? o + r.substring(a, s) : o;
  }
  function n(e) {
    return "boolean" == typeof e || "number" == typeof e ? "" + e : r(e);
  }
  e.exports = n;
};
