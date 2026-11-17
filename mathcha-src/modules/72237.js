/* module 72237 — 393 chars */
module.exports = function (e) {
  "use strict";

  var t = null;
  function r(e, r, n) {
    try {
      r(n);
    } catch (e) {
      null === t && (t = e);
    }
  }
  var n = {
      invokeGuardedCallback: r,
      invokeGuardedCallbackWithCatch: r,
      rethrowCaughtError: function () {
        if (t) {
          var e = t;
          throw t = null, e;
        }
      }
    },
    i;
  e.exports = n;
};
