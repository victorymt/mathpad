/* module 94483 — 947 chars */
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
      d: "M0 5.313h5.313v5.375H0zm5.313 16V16H0v10.688h10.688v-5.375zm5.375-16h5.313v5.375h-5.313zm-5.375 5.375h5.375v5.313H5.313zm10.687 0h5.313v5.313H16zM10.688 16h5.313v5.313h-5.313zm16-10.687h-5.375v5.375h5.375v5.313h5.313V5.313zM21.313 16h5.375v5.313h-5.375zM16 21.313h5.313v5.375H16zm10.688 0h5.313v5.375h-5.313z"
    }));
  };
  t.A = d;
};
