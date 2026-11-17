/* module 98222 — 726 chars */
module.exports = function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = t.calculateChange = function e(t, r, n) {
    var i = n.getBoundingClientRect(),
      o = i.width,
      s = i.height,
      a = "number" == typeof t.pageX ? t.pageX : t.touches[0].pageX,
      l = "number" == typeof t.pageY ? t.pageY : t.touches[0].pageY,
      c = a - (n.getBoundingClientRect().left + window.pageXOffset),
      d = l - (n.getBoundingClientRect().top + window.pageYOffset);
    c < 0 ? c = 0 : c > o ? c = o : d < 0 ? d = 0 : d > s && (d = s);
    var h = 100 * c / o,
      p = -100 * d / s + 100;
    return {
      h: r.h,
      s: h,
      v: p,
      a: r.a,
      source: "rgb"
    };
  };
};
