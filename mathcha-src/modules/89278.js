/* module 89278 — 1077 chars */
module.exports = function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = t.calculateChange = function e(t, r, n, i) {
    var o = i.clientWidth,
      s = i.clientHeight,
      a = "number" == typeof t.pageX ? t.pageX : t.touches[0].pageX,
      l = "number" == typeof t.pageY ? t.pageY : t.touches[0].pageY,
      c = a - (i.getBoundingClientRect().left + window.pageXOffset),
      d = l - (i.getBoundingClientRect().top + window.pageYOffset);
    if ("vertical" === r) {
      var h = void 0;
      if (d < 0) h = 359;else if (d > s) h = 0;else {
        var p;
        h = 360 * (-100 * d / s + 100) / 100;
      }
      if (n.h !== h) return {
        h,
        s: n.s,
        l: n.l,
        a: n.a,
        source: "rgb"
      };
    } else {
      var u = void 0;
      if (c < 0) u = 0;else if (c > o) u = 359;else {
        var g;
        u = 360 * (100 * c / o) / 100;
      }
      if (n.h !== u) return {
        h: u,
        s: n.s,
        l: n.l,
        a: n.a,
        source: "rgb"
      };
    }
    return null;
  };
};
