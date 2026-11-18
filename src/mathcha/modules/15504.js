/* module 15504 — 317 chars */
module.exports = function (e) {
  "use strict";

  function t(e) {
    var t,
      r = (e ? e.ownerDocument || e : document).defaultView || window;
    return !(!e || !("function" == typeof r.Node ? e instanceof r.Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName));
  }
  e.exports = t;
};
