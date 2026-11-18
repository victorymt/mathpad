/* module 71768 — 3923 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => d
  });
  var n = r(2543),
    i = r.n(n),
    o = r(19539),
    s = r(30803),
    a = r(21744),
    l = r(86835);
  class c {
    getShapesIntersectOrInsideWithRect(e, t) {
      var r = {
          type: "rectangle",
          id: s.w.nextDiagramCompositeShapeId(),
          data: t
        },
        n = i().filter(e, e => this.shapePointInsideRect(e, t));
      return i().filter(i().difference(e, n), e => {
        var t = this.getIntersects(r, e);
        return t && t.length > 0;
      }).concat(n);
    }
    shapePointInsideRect(e, t) {
      if (s.w.isDiagramGroupId(e.id)) {
        var r = e;
        return i().some(r.entities, e => this.shapePointInsideRect(e, t));
      }
      var n = this.getBreakDownInfo(e);
      return !!n && i().some(n.data, e => o.A.pointInsideRect(e.p1, t) || o.A.pointInsideRect(e.p2, t));
    }
    getIntersects(e, t) {
      if (s.w.isDiagramGroupId(e.id)) {
        var r = e;
        return i().flatMap(r.entities, e => this.getIntersects(e, t));
      }
      if (s.w.isDiagramGroupId(t.id)) {
        var n = t;
        return i().flatMap(n.entities, t => this.getIntersects(t, e));
      }
      var o = this.getBreakDownInfo(e),
        a = this.getBreakDownInfo(t);
      return o && a ? this.isBoxNoIntersection(o, a) ? [] : this.getIntersectsFromPaths(o.data, a.data, !1) : [];
    }
    getIntersectsFromPaths(e, t, r) {
      var n;
      return this.join(e, t, (e, t) => o.A.isLineData(e) ? o.A.isLineData(t) ? o.A.intersectLineToLine(e, t) : o.A.isEllipseData(t) ? o.A.intersectLineToEllipse(e, t) : (o.A.isQuadraticBezierData(t) && (t = o.A.quadraticToCubic(t)), o.A.intersectCubicBezierLineToLine(t, e)) : o.A.isEllipseData(e) ? o.A.isLineData(t) ? o.A.intersectLineToEllipse(t, e) : o.A.isEllipseData(t) ? o.A.intersectEllipseToEllipse(t, e) : (o.A.isQuadraticBezierData(t) && (t = o.A.quadraticToCubic(t)), o.A.intersectBezierToEllipse(t, e)) : (o.A.isQuadraticBezierData(e) && (e = o.A.quadraticToCubic(e)), o.A.isLineData(t) ? o.A.intersectCubicBezierLineToLine(e, t) : o.A.isEllipseData(t) ? o.A.intersectBezierToEllipse(e, t) : (o.A.isQuadraticBezierData(t) && (t = o.A.quadraticToCubic(t)), o.A.intersectCubicBezierLineToCubicBezier(e, t))), r);
    }
    isBoxNoIntersection(e, t) {
      if (!e.boxLines && !t.boxLines) return !1;
      if (e.boxLines && t.boxLines) {
        if (o.A.pointInsidePolygonLines(e.boxLines[0].p1, t.boxLines)) return !1;
        if (o.A.pointInsidePolygonLines(t.boxLines[0].p1, e.boxLines)) return !1;
      }
      if (e.boxLines && o.A.pointInsidePolygonLines(t.data[0].p1, e.boxLines)) return !1;
      if (t.boxLines && o.A.pointInsidePolygonLines(e.data[0].p1, t.boxLines)) return !1;
      var r = e.boxLines || e.data,
        n = t.boxLines || t.data,
        i;
      return this.getIntersectsFromPaths(r, n, !0).length <= 0;
    }
    join(e, t, r, n) {
      for (var i = [], o = 0; o < e.length; o++) for (var s = e[o], a = 0; a < t.length; a++) {
        var l,
          c = r(s, t[a]);
        if (c && (c instanceof Array ? c.length > 0 && (i = i.concat(c)) : i.push(c), n && i.length > 0)) return i;
      }
      return i;
    }
    getBreakDownInfo(e) {
      var t = l.A.getEntityType(e);
      if ("temporary" == t) return e.breakDownInfo;
      if ("shape-arrow" == t) return l.A.isStraightLineArrow(e) ? {
        data: o.A.pointsToLines(e.data)
      } : {
        data: o.A.toAbsoluteControlPointCubics(e.data)
      };
      var r = e,
        n;
      if ("shape-composite" == t) return a.A.getShapeManagement(r).getBreakdownInfo(r);
      if ("shape-object" == t) {
        if (l.A.isPolygon(r)) return {
          data: o.A.pointsToLines(r.data.concat(r.data[0]))
        };
        if (l.A.isPolygonCurve(r)) return {
          data: o.A.toAbsoluteControlPointCubics(r.data)
        };
      }
    }
  }
  const d = new c();
};
