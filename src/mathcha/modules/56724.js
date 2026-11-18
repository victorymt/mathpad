/* module 56724 — 1161 chars */
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
      d: "M23.375 15.75c-1.813-.563-2.813-3-2.813-3-.063-.25-.563-1.313-.563-1.563a93.2 93.2 0 0 1-.688-2.125l-.375-.813c-.25-.5-.688-1.375-1.25-2.063l-.313-.313-.25-.188c-.375-.25-.688-.375-1.063-.375s-1.063.188-1.563.688l-.5.688a5.836 5.836 0 0 1-.313.5c-.125.25-.313.563-.438.875l.125-.25-.375.75s-.438 1.063-.563 1.563c0 0-.25.75-.313 1.125 0-.125.063-.313.063-.438l-.313 1.063c-.25.438-.5 1.125-.5 1.125-.5.688-.875 2-3.188 2.875l-2.938 1-5.25 1.813 16 8 16-8zm-11.312-4.312c0 .063-.063.125-.125.188.063-.063.063-.125.125-.188z"
    }));
  };
  t.A = d;
};
