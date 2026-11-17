/* module 57507 — 4558 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => s
  });
  var n = r(3453),
    i = r(19539);
  class o {
    threePointsToRectangleInfo(e, t, r) {
      e.y == r.y && (r = {
        x: r.x,
        y: e.y + 1
      });
      var o = {
          x: r.x - (t.x - e.x),
          y: e.y + (r.y - t.y)
        },
        s = i.A.angleFrom2Points360P(e, t),
        a,
        l = i.A.angleDifferentFrom3Points180(e, r, t) - 90,
        c = i.A.getMiddlePointLine(e, r, .5, 0),
        d = i.A.pointsRotate([e, t, r, o], c, -s),
        h = this.pointsFromSkew(c, -l, d),
        p = (0, n.A)(h, 3),
        u = p[0],
        g = p[2],
        m = i.A.round2(s);
      return 360 == m && (m = 0), {
        p1: u,
        p2: g,
        skewX: i.A.round2(l) || void 0,
        rotation: m || void 0
      };
    }
    pointsFromSkew(e, t, r) {
      if (!t) return r;
      var n = e.y,
        o = Math.tan(i.A.toRadians(t));
      return r.map(e => {
        var t = e.y - n,
          r = o * t;
        return {
          x: e.x + r,
          y: e.y
        };
      });
    }
    segmentPointFromSkew(e, t, r) {
      if (!t) return r;
      var n = e.y,
        o,
        s,
        a = Math.tan(i.A.toRadians(t)) * (r[1] - n);
      return [r[0] + a, r[1]];
    }
    pointsFromSkewedRect(e, t, r) {
      var n = i.A.getCenterPoint(e);
      return this.pointsFromSkew(n, t, r);
    }
    genericLinesFromSkewedRect(e, t, r) {
      var n = i.A.getCenterPoint(e);
      return this.genericLinesFromSkewedCenter(n, t, r);
    }
    genericLinesFromSkewedCenter(e, t, r) {
      return r.map(r => {
        if (!t) return r;
        if (i.A.isCubicBezierData(r)) {
          var o = this.pointsFromSkew(e, t, [r.p1, r.p2, r.cp, r.cp2]),
            s = (0, n.A)(o, 4),
            a,
            l,
            c,
            d;
          return {
            p1: s[0],
            p2: s[1],
            cp: s[2],
            cp2: s[3]
          };
        }
        if (i.A.isQuadraticBezierData(r)) {
          var h = this.pointsFromSkew(e, t, [r.p1, r.p2, r.cp]),
            p = (0, n.A)(h, 3),
            u,
            g,
            m;
          return {
            p1: p[0],
            p2: p[1],
            cp: p[2]
          };
        }
        var f = this.pointsFromSkew(e, t, [r.p1, r.p2]),
          y = (0, n.A)(f, 2),
          v,
          b;
        return {
          p1: y[0],
          p2: y[1]
        };
      });
    }
    pointsRotatedSkewedShape(e, t) {
      return i.A.rotatePointsByShapeRect({
        data: e
      }, this.pointsFromSkewedRect(e, e.skewX, t));
    }
    pointRotatedSkewedShape(e, t) {
      return i.A.rotatePointsByShapeRect({
        data: e
      }, this.pointsFromSkewedRect(e, e.skewX, [t]))[0];
    }
    pointRotatedSkewed(e, t, r, n) {
      var o = this.pointsFromSkew(e, r, [n])[0];
      return i.A.pointRotate(o, e, t);
    }
    segmentPointRotatedSkewed(e, t, r, n) {
      var o = this.segmentPointFromSkew(e, r, n);
      return i.A.segmentPointRotate(o, e, t);
    }
    pointSkewed(e, t, r) {
      return this.pointsFromSkew(e, t, [r])[0];
    }
    reversePointRotatedSkewed(e, t, r, n) {
      var o = i.A.pointRotate(n, e, -t);
      return this.pointsFromSkew(e, -r, [o])[0];
    }
    reversePointRotatedSkewedFixedY(e, t, r, n, o) {
      var s = i.A.pointRotate(o, e, -t);
      return this.pointsFromSkew(e, -r, [{
        x: s.x,
        y: n
      }])[0];
    }
    genericLinesRotatedSkewedShape(e, t) {
      return i.A.rotateGenericLinesByShapeRect({
        data: e
      }, this.genericLinesFromSkewedRect(e, e.skewX, t));
    }
    pointUnskewedRect(e, t) {
      var r = i.A.getCenterPoint(e);
      return this.pointsFromSkew(r, -e.skewX, t);
    }
    skewXAngleFromDisplacement(e, t, r) {
      var n = i.A.getCenterPoint(e),
        o,
        s = (r.x - t.x) / (t.y - n.y);
      return i.A.toDegree(Math.atan(s));
    }
    skewXAngleFromDisplacementCp(e, t, r) {
      var n,
        o = (r.x - t.x) / (t.y - e.y);
      return i.A.toDegree(Math.atan(o));
    }
    rectTo4PointsSkewed(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        n = e.p1,
        o = e.p2,
        s = this.pointsFromSkewedRect(e, t, [n, {
          x: o.x,
          y: n.y
        }, o, {
          x: n.x,
          y: o.y
        }]),
        a = i.A.getCenterPoint(e);
      return i.A.pointsRotate(s, a, r);
    }
  }
  const s = new o();
};
