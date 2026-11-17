/* module 4555 — 652 chars */
module.exports = function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = void 0,
    n = (r = "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).requestAnimationFrame || r.webkitRequestAnimationFrame || r.mozRequestAnimationFrame || r.oRequestAnimationFrame || r.msRequestAnimationFrame || function (e) {
      return r.setTimeout(e, 1e3 / 60);
    },
    i = r.cancelAnimationFrame || r.webkitCancelAnimationFrame || r.mozCancelAnimationFrame || r.oCancelAnimationFrame || r.msCancelAnimationFrame || function (e) {
      r.clearTimeout(e);
    },
    o = t.raf = n,
    s = t.caf = i;
};
