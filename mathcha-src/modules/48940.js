/* module 48940 — 549 chars */
module.exports = function (e) {
  "use strict";

  var t = Object.prototype.hasOwnProperty;
  function r(e, t) {
    return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
  }
  function n(e, n) {
    if (r(e, n)) return !0;
    if ("object" != typeof e || null === e || "object" != typeof n || null === n) return !1;
    var i = Object.keys(e),
      o = Object.keys(n);
    if (i.length !== o.length) return !1;
    for (var s = 0; s < i.length; s++) if (!t.call(n, i[s]) || !r(e[i[s]], n[i[s]])) return !1;
    return !0;
  }
  e.exports = n;
};
