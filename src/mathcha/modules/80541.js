/* module 80541 — 7034 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => C
  });
  var n = r(64467),
    i = r(86835),
    o = r(21744),
    s = r(41074),
    a = r.n(s),
    l = r(19539),
    c = r(84369),
    d = r(84258),
    h = r(94240),
    p = r(53020),
    u = r(33535),
    g = r(2543),
    m = r.n(g),
    f = r(61848),
    y = r(30873);
  function v(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function b(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? v(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  d.A.inNodeEnv() || a().setup([50, 50]);
  class x {
    splitAtPoint(e, t, r) {
      var n,
        i = Number.MAX_SAFE_INTEGER,
        o = {
          x: t,
          y: r
        };
      if (y.A.visit(e, {
        visitSimple: e => {
          var t;
          c.A.pathToLines(e, !0).forEach(t => {
            var r = l.A.distanceToGenericLine(t, o);
            r < i && (n = e, i = r);
          });
        }
      }), !n) return e;
      var s = y.A.update(e, {
        updateSimple: e => {
          if (e != n) return e;
          var t = c.A.pathToLines(e, !0),
            r = m().minBy(t, e => l.A.distanceToGenericLine(e, o)),
            i = e[1].segments;
          if (l.A.isCubicBezierData(r)) {
            var s,
              a = l.A.nearestPointOnBezier(o, r).location;
            if (0 == l.A.round2(a) || 1 == l.A.round2(a)) return e;
            var d = l.A.splitBezier(r, a);
            if (d.length <= 1) return e;
            var h = t.indexOf(r),
              p = c.A.fromGenericLines(d),
              u = this.replaceSegmentsWithTempPath(i, h, p);
            return ["Path", b(b({}, e[1]), {}, {
              segments: u
            })];
          }
          var g = l.A.splitByNearestPointOnLine(o, r.p1, r.p2),
            f = t.indexOf(r),
            y = c.A.fromGenericLines(g),
            v = this.replaceSegmentsWithTempPath(i, f, y);
          return ["Path", b(b({}, e[1]), {}, {
            segments: v
          })];
        }
      });
      return console.log(s), s;
    }
    replaceSegmentsWithTempPath(e, t, r) {
      if (t >= e.length - 1) {
        var n = [e[t], e[0]],
          i = [p.A.setHandleIn(r[1].segments[0], p.A.getHandleIn(n[0])), r[1].segments[1], p.A.setHandleOut(r[1].segments[2], p.A.getHandleOut(n[1]))],
          o = m().clone(e);
        return o.splice(t, 1, i[0], i[1]), o[0] = i[2], o;
      }
      var s = [e[t], e[t + 1]],
        a = [p.A.setHandleIn(r[1].segments[0], p.A.getHandleIn(s[0])), r[1].segments[1], p.A.setHandleOut(r[1].segments[2], p.A.getHandleOut(s[1]))],
        l = m().clone(e);
      return l.splice(t, 2, a[0], a[1], a[2]), l;
    }
    removeEndToCloseSegments(e) {
      if (e.length <= 3) return e;
      var t = e[0],
        r = m().last(e);
      if (p.A.isSegmentPoint(r)) return e.slice(0, e.length - 1);
      var n = p.A.getHandleIn(r),
        i = p.A.setHandleIn(t, n);
      return f.A.setIndex(e.slice(0, e.length - 1), 0, i);
    }
    removeFirstToCloseSegments(e) {
      if (e.length <= 3) return e;
      var t = e[0],
        r = m().last(e);
      if (p.A.isSegmentPoint(t)) return e.slice(1);
      var n = p.A.getHandleOut(t),
        i = p.A.setHandleOut(r, n);
      return f.A.setIndex(e, e.length - 1, i).slice(1);
    }
    unclosePath(e, t, r) {
      return y.A.update(e, {
        updateSimple: e => e != t || e[1].segments.length <= 2 || !e[1].closed ? e : this.uncloseSimplePath(e, r)
      });
    }
    uncloseSimplePath(e, t) {
      var r = this.shiftToIndex(e[1].segments, t),
        n = p.A.removeHandleIn(r[0]),
        i = p.A.segmentAddDelta(p.A.removeHandleOut(m().clone(r[0])), 10, 10, !0),
        o = f.A.setIndex(r, 0, n).concat([i]);
      return ["Path", b(b({}, e[1]), {}, {
        segments: o,
        closed: !1
      })];
    }
    shiftToIndex(e, t) {
      return 0 == t ? e : e.slice(t).concat(e.slice(0, t));
    }
    changeSegmentPoint(e, t) {
      return p.A.isSegmentPoint(e) ? [t[0], t[1]] : [[t[0], t[1]], e[1], e[2]];
    }
    absolutePathToBox(e, t, r) {
      var n = l.A.rectWidth(t),
        i = l.A.rectHeight(t),
        o = t.p1.x,
        s = t.p1.y;
      return h.A.segmentTransform(e => {
        if (p.A.isSegmentPoint(e)) return [(e[0] - o) / n, (e[1] - s) / i];
        var t = e[0],
          a = e[1],
          l = e[2];
        return r ? [[(t[0] - o) / n, (t[1] - s) / i], h.A.isZeroSegmentPoint(a) ? void 0 : [(t[0] + a[0] - o) / n, (t[1] + a[1] - s) / i], h.A.isZeroSegmentPoint(l) ? void 0 : [(t[0] + l[0] - o) / n, (t[1] + l[1] - s) / i]] : [[(t[0] - o) / n, (t[1] - s) / i], h.A.isZeroSegmentPoint(a) ? void 0 : [(a[0] - o) / n, (a[1] - s) / i], h.A.isZeroSegmentPoint(l) ? void 0 : [(l[0] - o) / n, (l[1] - s) / i]];
      }, e);
    }
    pathInBoxedToAbsolute(e, t, r) {
      var n = t.p1,
        i = t.flipX,
        o = t.rotation,
        s = t.skewX,
        a = l.A.rectWidth(t),
        c = l.A.rectHeight(t),
        d = l.A.getCenterPoint(t),
        g = e => u.A.segmentPointTransformedFromDetails(d, o, s, i, e),
        m = (e, t) => r ? p.A.segPointSubstract(g(e), t) : g(e);
      return h.A.segmentTransform(e => {
        if (p.A.isSegmentPoint(e)) return g([e[0] * a + n.x, e[1] * c + n.y]);
        var t = e[0],
          r = e[1],
          i = e[2],
          o = g([t[0] * a + n.x, t[1] * c + n.y]);
        return [o, r ? m([r[0] * a + n.x, r[1] * c + n.y], o) : void 0, i ? m([i[0] * a + n.x, i[1] * c + n.y], o) : void 0];
      }, e);
    }
    supportBooleanOperation(e) {
      if (i.A.isPolygon(e)) return !0;
      if (i.A.isPolygonCurve(e)) return !0;
      if (i.A.isCompositeShape(e)) {
        var t = o.A.getShapeManagement(e);
        if (!t || !t.getPaperPath) return;
        return !0;
      }
    }
    getPaperPath(e) {
      if (i.A.isPolygon(e)) {
        var t = l.A.pointsToLines(e.data, !0);
        return c.A.fromGenericLines(t);
      }
      if (i.A.isPolygonCurve(e)) {
        var r = l.A.toAbsoluteControlPointCubics(e.data);
        return c.A.fromGenericLines(r);
      }
      if (i.A.isCompositeShape(e)) {
        var n = o.A.getShapeManagement(e);
        if (!n || !n.getPaperPath) return;
        return n.getPaperPath(e);
      }
    }
    toPaperPathInstance(e) {
      var t = new (a().Group)();
      return t.importJSON(e), t.firstChild;
    }
    paperInstanceToData(e) {
      return e.exportJSON({
        asString: !1
      });
    }
  }
  const C = new x();
};
