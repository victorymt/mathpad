/* module 4909 — 283 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(95423);
  function i(e, t) {
    return !(!e || !t) && (e === t || !n(e) && (n(t) ? i(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))));
  }
  e.exports = i;
};
