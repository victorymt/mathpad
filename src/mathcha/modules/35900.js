/* module 35900 — 1480 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    k: () => c
  });
  var n = r(2543),
    i = r.n(n),
    o = r(19539);
  function s(e, t, r) {
    var n = !1,
      s;
    (e = i().flatMap(e, e => {
      var r = o.A.splitBezierByLine(e, t);
      return r.length > 0 ? (r[1].mark1 = !0, n = !0, r) : [e];
    }), n) || (i().minBy(e, e => o.A.angleDifferentFrom3Points180(e.p1, t.p2, r)).mark1 = !0);
    return e;
  }
  function a(e, t, r) {
    var n = !1,
      s;
    (e = i().flatMap(e, e => {
      var r = o.A.splitBezierByLine(e, t);
      return r.length > 0 ? (r.forEach(t => t.mark1 = e.mark1), r[0].mark2 = !0, n = !0, r) : [e];
    }), n) || (i().minBy(e, e => o.A.angleDifferentFrom3Points180(e.p2, t.p2, r)).mark2 = !0);
    return e;
  }
  function l(e) {
    for (var t = i().findIndex(e, e => e.mark1), r = [], n = 0; n < e.length; n++) {
      var o = e[t];
      if (r.push(o), o.mark2) break;
      t++, t %= e.length;
    }
    return r;
  }
  function c(e, t, r) {
    var n = e.p1,
      i = e.p2,
      c = o.A.getCenterPoint(n, i),
      d = o.A.rectWidth(e),
      h = o.A.rectHeight(e),
      p = Math.max(d, h),
      u = {
        p1: c,
        p2: o.A.pointRotate({
          x: i.x + p,
          y: c.y
        }, c, t)
      },
      g = {
        p1: c,
        p2: o.A.pointRotate({
          x: i.x + p,
          y: c.y
        }, c, r)
      },
      m = o.A.ellipseToCubicBeziers(n, i);
    return l(m = a(m = s(m, u, c), g, c));
  }
};
