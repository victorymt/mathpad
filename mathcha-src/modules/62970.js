/* module 62970 — 2302 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(19539),
    i = r(2543),
    o = r.n(i),
    s = r(86835);
  class a {
    snapEntities(e, t) {
      var r = n.A.getPointsFromPointTupple(t.groupBox);
      return {
        delta: this.getMinDeltaForPoints(r, t),
        handled: !0
      };
    }
    snapSingle(e, t) {
      if (s.A.isDiagramEditor(e)) return this.snapEditor(e, t);
      if (s.A.isStraightLineArrow(e)) return this.snapStraightArrow(e, t);
      if (s.A.isCubicLineArrow(e)) return this.snapCubicArrow(e, t);
      if (s.A.isPolygon(e)) return this.snapPolygon(e, t);
      if (s.A.isPolygonCurve(e)) return this.snapPolygonCurve(e, t);
      if (s.A.isGroupedEntity(e)) {
        var r = n.A.getPointsFromPointTupple(t.groupBox);
        return {
          delta: this.getMinDeltaForPoints(r, t),
          handled: !0
        };
      }
      return {
        delta: t.delta,
        handled: !1
      };
    }
    getMinDeltaForPoints(e, t) {
      for (var r = t.gridSize, i = t.delta, o = Number.MAX_SAFE_INTEGER, s = i, a = 0; a < e.length; a++) {
        var l = e[a],
          c = this.calculateNewDelta(l, i, r),
          d = n.A.distanceFromVector(c);
        d < o && (s = c, o = d);
      }
      return s;
    }
    snapPolygonCurve(e, t) {
      var r = e.data.map(e => e.p1).concat(o().last(e.data).p2);
      return {
        delta: this.getMinDeltaForPoints(r, t),
        handled: !0
      };
    }
    snapPolygon(e, t) {
      return {
        delta: this.getMinDeltaForPoints(e.data, t),
        handled: !0
      };
    }
    snapCubicArrow(e, t) {
      var r = e.data.map(e => e.p1).concat(o().last(e.data).p2);
      return {
        delta: this.getMinDeltaForPoints(r, t),
        handled: !0
      };
    }
    snapStraightArrow(e, t) {
      return {
        delta: this.getMinDeltaForPoints(e.data, t),
        handled: !0
      };
    }
    snapEditor(e, t) {
      var r = t.gridSize,
        n = t.delta,
        i;
      return {
        delta: this.calculateNewDelta(e.shape.data.p, n, r),
        handled: !0
      };
    }
    calculateNewDelta(e, t, r) {
      var i = n.A.addPoint(e, t),
        o = n.A.snapToGridSize(i, r),
        s;
      return n.A.substractPoint(o, e);
    }
  }
  const l = new a();
};
