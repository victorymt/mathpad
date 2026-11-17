/* module 46412 — 959 chars */
module.exports = function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = t.calculateChange = function e(t, r, n, i, o) {
    var s = o.clientWidth,
      a = o.clientHeight,
      l = "number" == typeof t.pageX ? t.pageX : t.touches[0].pageX,
      c = "number" == typeof t.pageY ? t.pageY : t.touches[0].pageY,
      d = l - (o.getBoundingClientRect().left + window.pageXOffset),
      h = c - (o.getBoundingClientRect().top + window.pageYOffset);
    if ("vertical" === n) {
      var p = void 0;
      if (p = h < 0 ? 0 : h > a ? 1 : Math.round(100 * h / a) / 100, r.a !== p) return {
        h: r.h,
        s: r.s,
        l: r.l,
        a: p,
        source: "rgb"
      };
    } else {
      var u = void 0;
      if (i !== (u = d < 0 ? 0 : d > s ? 1 : Math.round(100 * d / s) / 100)) return {
        h: r.h,
        s: r.s,
        l: r.l,
        a: u,
        source: "rgb"
      };
    }
    return null;
  };
};
