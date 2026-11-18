/* module 93855 — 232 chars */
module.exports = function (e) {
  "use strict";

  var t = "function" == typeof Symbol && Symbol.iterator,
    r = "@@iterator";
  function n(e) {
    var n = e && (t && e[t] || e[r]);
    if ("function" == typeof n) return n;
  }
  e.exports = n;
};
