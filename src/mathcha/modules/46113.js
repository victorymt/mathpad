/* module 46113 — 356 chars */
module.exports = function (e) {
  "use strict";

  function t(e, t) {
    var r = null === e || !1 === e,
      n = null === t || !1 === t;
    if (r || n) return r === n;
    var i = typeof e,
      o = typeof t;
    return "string" === i || "number" === i ? "string" === o || "number" === o : "object" === o && e.type === t.type && e.key === t.key;
  }
  e.exports = t;
};
