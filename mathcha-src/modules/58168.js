/* module 58168 — 363 chars */
module.exports = function (e, t, r) {
  "use strict";

  function n() {
    return n = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }, n.apply(this, arguments);
  }
  r.d(t, {
    A: () => n
  });
};
