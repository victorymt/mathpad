/* module 85505 — 401 chars */
module.exports = function (e, t, r) {
  "use strict";

  t.__esModule = !0;
  var n,
    i = o(r(63193));
  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  t.default = i.default || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  };
};
