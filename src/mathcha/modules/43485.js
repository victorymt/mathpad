/* module 43485 — 877 chars */
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
      d: "M14.438 2.5C6.438 2.563 0 9.063 0 17c0 8.063 6.5 14.563 14.5 14.563 3.5 0 6.625-1.188 9.125-3.188l-9.188-10.813zm16.875 13.063V15c0-8.063-6.5-14.563-14.563-14.563h-.063v15.125zM32 17.75H17.437l9.125 10.813C29.75 26 31.875 22.125 32 17.75z"
    }));
  };
  t.A = d;
};
