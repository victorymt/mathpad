/* module 95705 — 264 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(54949);
  function i(e) {
    for (var t; (t = e._renderedNodeType) === n.COMPOSITE;) e = e._renderedComponent;
    return t === n.HOST ? e._renderedComponent : t === n.EMPTY ? null : void 0;
  }
  e.exports = i;
};
