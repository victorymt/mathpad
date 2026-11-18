/* module 33535 — 13268 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => d
  });
  var n = r(3453),
    i = r(64467),
    o = r(57507),
    s = r(19539);
  function a(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function l(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? a(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class c {
    anyMatrixTransformed(e) {
      return !!e.flipX || !!e.rotation || !!e.skewX;
    }
    threePointsToRectangleInfo(e, t, r) {
      var n = {
          x: r.x - (t.x - e.x),
          y: e.y + (r.y - t.y)
        },
        i = null;
      return i = this.isFlipped(e, t, r) ? l(l({}, i = o.A.threePointsToRectangleInfo(t, e, n)), {}, {
        flipX: !0
      }) : l(l({}, i = o.A.threePointsToRectangleInfo(e, t, r)), {}, {
        flipX: void 0
      }), this.makeSureNonZeroWidthHeight(i);
    }
    makeSureNonZeroWidthHeight(e) {
      return e.p1.x == e.p2.x && e.p1.y == e.p2.y ? l(l({}, e), {}, {
        p2: {
          x: e.p1.x + 1,
          y: e.p1.y + 1
        }
      }) : e.p1.x == e.p2.x ? l(l({}, e), {}, {
        p2: {
          x: e.p1.x + 1,
          y: e.p2.y
        }
      }) : e.p1.y == e.p2.y ? l(l({}, e), {}, {
        p2: {
          x: e.p2.x,
          y: e.p1.y + 1
        }
      }) : e;
    }
    isFlipped(e, t, r) {
      var n = e,
        i = r,
        o = t;
      return (i.x - n.x) * (o.y - n.y) - (i.y - n.y) * (o.x - n.x) > 0;
    }
    genericLinesTransformed(e, t) {
      var r = s.A.getCenterPoint(e),
        n = this.genericLinesFlipped(r, e.flipX, t);
      return o.A.genericLinesRotatedSkewedShape(e, n);
    }
    pointsTransformed(e, t) {
      var r = s.A.getCenterPoint(e);
      return t.map(t => this.pointTransformedFromDetails(r, e.rotation, e.skewX, e.flipX, t));
    }
    pointTransformed(e, t) {
      var r = s.A.getCenterPoint(e);
      return this.pointTransformedFromDetails(r, e.rotation, e.skewX, e.flipX, t);
    }
    pointTransformedFromDetails(e, t, r, i, s) {
      var a = this.pointsFlipped(e, i, [s]),
        l,
        c = (0, n.A)(a, 1)[0];
      return o.A.pointRotatedSkewed(e, t, r, c);
    }
    segmentPointTransformedFromDetails(e, t, r, n, i) {
      var s = this.segmentPointsFlipped(e, n, i);
      return o.A.segmentPointRotatedSkewed(e, t, r, s);
    }
    reversePointFixedY(e, t, r) {
      var n = s.A.getCenterPoint(e),
        i = o.A.reversePointRotatedSkewedFixedY(n, e.rotation, e.skewX, t, r);
      return this.pointsFlipped(n, e.flipX, [i])[0];
    }
    reversePoint(e, t) {
      var r = s.A.getCenterPoint(e),
        n = o.A.reversePointRotatedSkewed(r, e.rotation, e.skewX, t);
      return this.pointsFlipped(r, e.flipX, [n])[0];
    }
    segmentPointsFlipped(e, t, r) {
      return t ? [s.A.reflectSegmentPoint(r, e)[0], r[1]] : r;
    }
    pointsFlipped(e, t, r) {
      return t ? r.map(t => ({
        x: s.A.reflectPoint(t, e).x,
        y: t.y
      })) : r;
    }
    genericLinesFlipped(e, t, r) {
      return t ? r.map(r => {
        if (s.A.isCubicBezierData(r)) {
          var i = this.pointsFlipped(e, t, [r.p1, r.p2, r.cp, r.cp2]),
            o = (0, n.A)(i, 4),
            a,
            l,
            c,
            d;
          return {
            p1: o[0],
            p2: o[1],
            cp: o[2],
            cp2: o[3]
          };
        }
        if (s.A.isQuadraticBezierData(r)) {
          var h = this.pointsFlipped(e, t, [r.p1, r.p2, r.cp]),
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
        var f = this.pointsFlipped(e, t, [r.p1, r.p2]),
          y = (0, n.A)(f, 2),
          v,
          b;
        return {
          p1: y[0],
          p2: y[1]
        };
      }) : r;
    }
    rectTo4Points(e) {
      var t = e.skewX,
        r = e.rotation,
        i = e.flipX,
        s = o.A.rectTo4PointsSkewed(e, t, r),
        a = (0, n.A)(s, 4),
        l = a[0],
        c = a[1],
        d = a[2],
        h = a[3];
      return i ? [c, l, h, d] : [l, c, d, h];
    }
    moveControlPoint(e, t, r, n) {
      var i = this.moveControlPointInner(e, t, r, n);
      switch (e) {
        case "left-top":
        case "top-right":
        case "right-bottom":
        case "bottom-left":
          return i;
      }
      if (i.skewX && !!t.flipX != !!i.flipX) {
        var o = l(l({}, i), {}, {
          skewX: -i.skewX
        });
        return n.symmetricResize ? o : this.repositionRectAfterFlipSkew(e, i, o);
      }
      return i;
    }
    repositionRectAfterFlipSkew(e, t, r) {
      if ("top" == e || "bottom" == e) {
        var n = this.rectTo4Points(t),
          i = this.rectTo4Points(r),
          o = {
            x: 0,
            y: 0
          };
        switch (e) {
          case "top":
            o = s.A.substractPoint(n[2], i[2]);
            break;
          case "bottom":
            o = s.A.substractPoint(n[0], i[0]);
        }
        return this.repositionByPoint(r, o);
      }
      return r;
    }
    repositionByPoint(e, t) {
      return 0 == t.x && 0 == t.y ? e : l(l({}, e), {}, {
        p1: s.A.addPoint(e.p1, t),
        p2: s.A.addPoint(e.p2, t)
      });
    }
    moveControlPointInner(e, t, r, i) {
      t.p1.x == t.p2.x && (t = l(l({}, t), {}, {
        p2: {
          x: t.p1.x + 1,
          y: t.p2.y
        }
      })), t.p1.y == t.p2.y && (t = l(l({}, t), {}, {
        p2: {
          x: t.p2.x,
          y: t.p1.y + 1
        }
      }));
      var o = this.rectTo4Points(t),
        a = (0, n.A)(o, 4),
        c = a[0],
        d = a[1],
        h = a[2],
        p = a[3],
        u = s.A.getCenterPoint(t);
      switch (e) {
        case "left-top":
          var g = s.A.substractPoint(p, h),
            m = s.A.substractPoint(d, h),
            f = r,
            y = s.A.intersectRayRay(f, s.A.addPoint(f, g), h, d),
            v = s.A.intersectRayRay(f, s.A.addPoint(f, m), h, p),
            b = h;
          if (i.keepRatio) {
            var x = this.findMaxRatio(v, p, y, d, h);
            v = this.findPointByRatio(v, h, p, x), y = this.findPointByRatio(y, h, d, x), f = {
              x: v.x + (y.x - h.x),
              y: v.y - (h.y - y.y)
            };
          }
          i.symmetricResize && (b = s.A.reflectPoint(f, u), y = s.A.intersectRayRay(f, s.A.addPoint(f, g), b, s.A.addPoint(b, m)));
          var C = this.threePointsToRectangleInfo(f, y, b);
          return l(l({}, t), C);
        case "top":
          var S = s.A.substractPoint(p, h),
            A = s.A.substractPoint(p, c),
            w = s.A.intersectRayRay(r, s.A.addPoint(r, S), c, p),
            E = s.A.intersectRayRay(r, s.A.addPoint(r, S), h, d),
            k = h;
          if (i.keepRatio) {
            var O = s.A.distance2Points(w, p) / s.A.distance2Points(c, p);
            k = this.findPointByRatio(k, p, h, O), E = {
              x: w.x + (k.x - p.x),
              y: w.y + (k.y - p.y)
            };
          }
          if (i.symmetricResize) {
            var D = s.A.reflectPoint(E, u);
            k = s.A.intersectRayRay(D, s.A.addPoint(D, S), E, s.A.addPoint(E, A)), w = s.A.intersectRayRay(D, s.A.addPoint(D, A), E, s.A.addPoint(E, S));
          }
          var P = this.threePointsToRectangleInfo(w, E, k);
          return l(l({}, t), P);
        case "top-right":
          var M = s.A.substractPoint(c, p),
            I = s.A.substractPoint(h, p),
            T = r,
            L = s.A.intersectRayRay(T, s.A.addPoint(T, I), p, c),
            R = s.A.intersectRayRay(T, s.A.addPoint(T, M), p, h);
          if (i.keepRatio) {
            var B = this.findMaxRatio(L, c, R, h, p);
            L = this.findPointByRatio(L, p, c, B), R = this.findPointByRatio(R, p, h, B), T = {
              x: L.x + (R.x - p.x),
              y: L.y + (R.y - p.y)
            };
          }
          if (i.symmetricResize) {
            var F = s.A.reflectPoint(T, u);
            L = s.A.intersectRayRay(F, s.A.addPoint(F, M), T, s.A.addPoint(T, I)), R = s.A.intersectRayRay(F, s.A.addPoint(F, I), T, s.A.addPoint(T, M));
          }
          var j = this.threePointsToRectangleInfo(L, T, R);
          return l(l({}, t), j);
        case "right":
          var _ = s.A.substractPoint(c, p),
            N = s.A.substractPoint(h, p),
            z = s.A.intersectRayRay(r, s.A.addPoint(r, _), c, d),
            H = s.A.intersectRayRay(r, s.A.addPoint(r, _), p, h),
            W = c;
          if (i.keepRatio) {
            var V = s.A.distance2Points(z, c) / s.A.distance2Points(d, c);
            H = this.findPointByRatio(H, z, H, V);
          }
          i.symmetricResize && (W = s.A.reflectPoint(H, u), z = s.A.intersectRayRay(W, s.A.addPoint(W, N), H, s.A.addPoint(H, _)));
          var U = this.threePointsToRectangleInfo(W, z, H);
          return l(l({}, t), U);
        case "right-bottom":
          var q = s.A.substractPoint(c, p),
            G = s.A.substractPoint(c, d),
            K = r,
            Z = c,
            Y = s.A.intersectRayRay(K, s.A.addPoint(K, q), c, d),
            Q = s.A.intersectRayRay(K, s.A.addPoint(K, G), c, p);
          if (i.keepRatio) {
            var J = this.findMaxRatio(Q, p, Y, d, c);
            Y = this.findPointByRatio(Y, c, d, J), Q = this.findPointByRatio(Q, c, p, J), K = {
              x: Y.x - (c.x - Q.x),
              y: Y.y + (Q.y - c.y)
            };
          }
          i.symmetricResize && (Z = s.A.reflectPoint(K, u), Y = s.A.intersectRayRay(Z, s.A.addPoint(Z, G), K, s.A.addPoint(K, q)));
          var X = this.threePointsToRectangleInfo(Z, Y, K);
          return l(l({}, t), X);
        case "bottom":
          var $ = s.A.substractPoint(c, d),
            ee = s.A.substractPoint(h, d),
            te = s.A.intersectRayRay(r, s.A.addPoint(r, $), d, h),
            re = s.A.intersectRayRay(r, s.A.addPoint(r, $), c, p),
            ne = c,
            ie = d;
          if (i.keepRatio) {
            var oe = s.A.distance2Points(te, d) / s.A.distance2Points(h, d);
            ne = this.findPointByRatio(ne, d, c, oe), re = s.A.intersectRayRay(ne, s.A.addPoint(ne, ee), te, s.A.addPoint(te, $));
          }
          i.symmetricResize && (ie = s.A.reflectPoint(re, u), te = s.A.intersectRayRay(re, s.A.addPoint(re, $), ie, s.A.addPoint(ie, ee)), ne = s.A.intersectRayRay(re, s.A.addPoint(re, ee), ie, s.A.addPoint(ie, $)));
          var se = this.threePointsToRectangleInfo(ne, ie, te);
          return l(l({}, t), se);
        case "bottom-left":
          var ae = s.A.substractPoint(h, d),
            le = s.A.substractPoint(c, d),
            ce = r,
            de = s.A.intersectRayRay(ce, s.A.addPoint(ce, ae), c, d),
            he = s.A.intersectRayRay(ce, s.A.addPoint(ce, le), h, d),
            pe = d;
          if (i.keepRatio) {
            var ue = this.findMaxRatio(de, c, he, h, d);
            de = this.findPointByRatio(de, d, c, ue), he = this.findPointByRatio(he, d, h, ue), ce = s.A.intersectRayRay(de, s.A.addPoint(de, ae), he, s.A.addPoint(he, le));
          }
          i.symmetricResize && (pe = s.A.reflectPoint(ce, u), de = s.A.intersectRayRay(ce, s.A.addPoint(ce, ae), pe, s.A.addPoint(pe, le)), he = s.A.intersectRayRay(ce, s.A.addPoint(ce, le), pe, s.A.addPoint(pe, ae)));
          var ge = this.threePointsToRectangleInfo(de, pe, he);
          return l(l({}, t), ge);
        case "left":
          var me = s.A.substractPoint(d, h),
            fe = s.A.substractPoint(p, h),
            ye = s.A.intersectRayRay(r, s.A.addPoint(r, me), d, c),
            ve = d,
            be = h;
          if (i.keepRatio) {
            var xe = s.A.distance2Points(ye, d) / s.A.distance2Points(c, d);
            ve = this.findPointByRatio(ve, h, d, xe);
            var Ce = s.A.intersectRayRay(r, s.A.addPoint(r, me), h, p);
            ye = {
              x: Ce.x + (ve.x - h.x),
              y: Ce.y - (h.y - ve.y)
            };
          }
          i.symmetricResize && (be = s.A.reflectPoint(ye, u), ve = s.A.intersectRayRay(ye, s.A.addPoint(ye, fe), be, s.A.addPoint(be, me)));
          var Se = this.threePointsToRectangleInfo(ye, ve, be);
          return l(l({}, t), Se);
      }
      return t;
    }
    findPointByRatio(e, t, r, n) {
      var i = s.A.getMiddlePointLine(t, r, n),
        o = s.A.getMiddlePointLine(t, r, -n),
        a,
        l;
      return s.A.distance2Points(e, i) < s.A.distance2Points(e, o) ? i : o;
    }
    findMaxRatio(e, t, r, n, i) {
      return Math.max(s.A.distance2Points(e, i) / s.A.distance2Points(t, i), s.A.distance2Points(r, i) / s.A.distance2Points(n, i));
    }
  }
  const d = new c();
};
