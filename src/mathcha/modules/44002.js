/* module 44002 — 1731 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => i
  });
  class n {
    getPathInfo(e, t, r, n, i) {
      var o = {
          left: 0,
          top: r / 18,
          right: e - 0,
          bottom: Math.max(Math.min(e / 4, t / 1.1), r / 9) + r / 18
        },
        s = {
          x: (o = this.translateToBottom(o, t, r)).left,
          y: o.bottom
        },
        a = {
          x: (o.right + o.left) / 4,
          y: o.top
        },
        l = {
          x: o.left + .75 * (o.right - o.left),
          y: o.top
        },
        c = {
          x: o.right,
          y: o.bottom
        };
      s = n ? this.upsideDown(s, t) : s, a = n ? this.upsideDown(a, t) : a, l = n ? this.upsideDown(l, t) : l, c = n ? this.upsideDown(c, t) : c;
      var d = "M".concat(s.x, ",").concat(s.y),
        h = "C ".concat(a.x, " ").concat(a.y, ", ").concat(l.x, " ").concat(l.y, ", ").concat(c.x, " ").concat(c.y, " "),
        p;
      if (t > e) return {
        path: d + " " + h,
        strokeWidth: .07,
        fill: "none"
      };
      var u = r / 14,
        g = "";
      return {
        path: d + " " + h + " " + (g = i ? "C ".concat(l.x, " ").concat(l.y + u, ", ").concat(a.x, " ").concat(a.y + u, ", ").concat(s.x, " ").concat(s.y, " Z") : "l0,".concat(u, " C ").concat(l.x, " ").concat(l.y + u, ", ").concat(a.x, " ").concat(a.y + u, " ").concat(s.x, " ").concat(s.y + u, " L").concat(s.x, " ").concat(s.y)),
        strokeWidth: .03
      };
    }
    upsideDown(e, t) {
      return {
        x: e.x,
        y: t - e.y
      };
    }
    translateToBottom(e, t, r) {
      var n = Math.max(t - e.bottom - r / 18, 0);
      return e.bottom += n, e.top += n, e;
    }
  }
  const i = new n();
};
