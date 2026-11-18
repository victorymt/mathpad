/* module 7789 — 1222 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(3453),
    i = r(61848),
    o = r(33535),
    s = r(19539);
  class a {
    scalePropertyInData(e, t, r, n, o) {
      var s = {};
      return t.forEach(t => {
        var i = this.scalePoint(e[t], r, n, o);
        s[t] = i;
      }), i.A.update(e, s);
    }
    scalePoints(e, t, r, n) {
      var i = e.map(e => {
        var n = this.getFactor(e, t);
        return this.getPointFromFactor(r, n);
      });
      if (n) {
        var a = s.A.getCenterPoint(r);
        i = o.A.pointsFlipped(a, !0, i);
      }
      return i;
    }
    scalePoint(e, t, r, i) {
      var a = this.getFactor(e, t),
        l = this.getPointFromFactor(r, a);
      if (i) {
        var c = s.A.getCenterPoint(r),
          d = o.A.pointsFlipped(c, !0, [l]),
          h;
        l = (0, n.A)(d, 1)[0];
      }
      return l;
    }
    getFactor(e, t) {
      return {
        x: (e.x - t.p1.x) / (t.p2.x - t.p1.x),
        y: (e.y - t.p1.y) / (t.p2.y - t.p1.y)
      };
    }
    getPointFromFactor(e, t) {
      return {
        x: e.p1.x + (e.p2.x - e.p1.x) * t.x,
        y: e.p1.y + (e.p2.y - e.p1.y) * t.y
      };
    }
  }
  const l = new a();
};
