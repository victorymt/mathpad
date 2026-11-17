/* module 96936 — 279 chars */
module.exports = function (e) {
  "use strict";

  var t = function (e) {
    return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function (t, r, n, i) {
      MSApp.execUnsafeLocalFunction(function () {
        return e(t, r, n, i);
      });
    } : e;
  };
  e.exports = t;
};
