/* module 79080 — 379 chars */
module.exports = function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = 15e5,
    n = 16777100,
    i = function e() {
      return "undefined" != typeof window;
    },
    o = function e() {
      return !!window.chrome && !!window.chrome.webstore;
    },
    s = t.getMaxElementSize = function e() {
      return i() && o() ? n : r;
    };
};
