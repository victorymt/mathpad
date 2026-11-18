/* module 49799 — 1061 chars */
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
      d: "M16 0L1.312 8v16L16 32l14.688-8V8zM4 11.313l4 2v4.125l-4-2.25zm19.063-.25l-4.688-2.375 4.188-2 4.5 2.5zm-2.25 1.187L16 14.688l-4.813-2.438L16 9.875zM8.938 11.063l-4-2 4.5-2.375 4.188 2zm1.75 3.625l4 2v4.5l-4-2.25zm4 9.437v4l-4-2.125v-4.125zm2.625 0l4-2.25V26l-4 2.125zm0-2.937v-4.5l4-2v4.25zM24 13.313l4-2v3.875l-4 2.25zm-3.75-8L16 7.438l-4.25-2.125L16 3.063zM4 18.25l4 2.313v4.125l-4-2.125zm20 6.438v-4.125l4-2.313v4.125z"
    }));
  };
  t.A = d;
};
