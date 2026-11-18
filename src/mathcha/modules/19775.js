/* module 19775 — 721 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n;
  n = {
    value: !0
  };
  var i = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    },
    o,
    s = c(r(40927)),
    a,
    l = c(r(56451));
  function c(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var d = function e(t) {
    return s.default.createElement(l.default, i({
      viewBox: "0 0 32 32"
    }, t), s.default.createElement("path", {
      d: "M32 5.313l-9.375 14.688L6.687 5.313-.001 18.688v7.938l8-14.625 16 14.625 8-13.313z"
    }));
  };
  t.A = d;
};
