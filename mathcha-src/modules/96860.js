/* module 96860 — 4730 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => p
  });
  var n = r(64467),
    i = r(21744),
    o = r(2543),
    s = r.n(o),
    a = r(19539),
    l = r(86835),
    c = r(73700);
  class d {
    constructor() {
      (0, n.A)(this, "buckets", new Array(3));
    }
    get(e) {
      if (!e || e.length <= 0) return [];
      var t = e;
      1 == e.length && (t = e[0]);
      for (var r = 0; r < this.buckets.length; r++) {
        var n = this.buckets[r];
        if (n && n.dataToCompare == t) return n.points;
      }
    }
    store(e, t) {
      if (e && !(e.length <= 0)) {
        var r = e;
        1 == e.length && (r = e[0]);
        var n = this.findBucketSlotIndex();
        this.buckets[n] = {
          dataToCompare: r,
          points: t,
          time: new Date().getTime()
        };
      }
    }
    findBucketSlotIndex() {
      for (var e = Number.MAX_SAFE_INTEGER, t = 0, r = 0; r < this.buckets.length; r++) {
        var n = this.buckets[r];
        if (!n) return r;
        n.time < e && (e = n.time, t = r);
      }
      return t;
    }
  }
  class h {
    constructor() {
      (0, n.A)(this, "cache", new d());
    }
    detect(e, t, r, n) {
      var i = this.getSnapablePointsEntity(e);
      return 0 == i.length ? null : this.detectPoints(i, t, r, n);
    }
    detectPointFromSnapablePoints(e, t, r) {
      return this.innerDetect([e], t, r);
    }
    detectPoint(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        n = arguments.length > 3 ? arguments[3] : void 0;
      return this.detectPoints([e], t, r, n);
    }
    detectPoints(e, t, r, n) {
      var i = this.getSnapablePoints(t).concat(r);
      return this.innerDetect(e, i, n);
    }
    innerDetect(e, t, r) {
      if (0 == t.length) return null;
      isNaN(r) && (r = 2);
      var n = {
        inputPoint: e[0],
        minPoint: t[0],
        distance: a.A.distance2Points(e[0], t[0])
      };
      return e.forEach(e => {
        t.forEach(t => {
          var r = a.A.distance2Points(e, t);
          r < n.distance && (n = {
            inputPoint: e,
            minPoint: t,
            distance: r
          });
        });
      }), n.distance > r ? null : {
        inputPoint: n.inputPoint,
        snapPoint: n.minPoint,
        distance: n.distance,
        delta: {
          x: n.minPoint.x - n.inputPoint.x,
          y: n.minPoint.y - n.inputPoint.y
        }
      };
    }
    getSnapablePointsFromShapesInfo(e) {
      var t = e.shapes.concat(c.A.getTemporaryShapes(e.frameInfo, e.editors));
      return this.getSnapablePoints(t);
    }
    getSnapablePoints(e) {
      var t = this.cache.get(e);
      if (t) return t;
      var r = s().flatMap(e, e => this.getSnapablePointsEntity(e));
      return this.cache.store(e, r), r;
    }
    getSnapablePointsEntity(e, t) {
      if (l.A.isShapeArrow(e)) {
        if (l.A.isStraightLineArrow(e)) return this.getSnapPointsForStraightLine(e, t);
        if (l.A.isCubicLineArrow(e)) {
          var r = e.data.map(e => e.p1).concat(s().last(e.data).p2);
          return void 0 !== t && r.splice(t, 1), r;
        }
      } else {
        var n;
        if (l.A.isShapeComposite(e)) return i.A.getShapeManagement(e).getSnapablePoints(e);
        if (l.A.isPrimitiveShape(e)) {
          if (l.A.isPolygon(e)) return this.getSnapPointsForPolygon(e, t);
          if (l.A.isPolygonCurve(e)) {
            var o = e.data.map(e => e.p1).concat(s().last(e.data).p2);
            return void 0 !== t && o.splice(t, 1), 0 == t && o.splice(o.length - 1, 1), o;
          }
        } else {
          if (l.A.isGroupedEntity(e)) return s().flatMap(e.entities, e => this.getSnapablePointsEntity(e));
          if (l.A.isTemporaryEntity(e)) return e.snapPoints || [];
        }
      }
      return [];
    }
    getSnapPointsForPolygon(e, t) {
      for (var r = e.data, n = [], i = e.data.concat([e.data[0]]), o = 0; o < i.length - 1; o++) if (o !== t - 1 && o !== t && (0 !== t || o !== i.length - 2)) {
        var s = i[o],
          l = i[o + 1];
        a.A.distance2Points(s, l) <= 20 || n.push({
          x: (s.x + l.x) / 2,
          y: (s.y + l.y) / 2
        });
      }
      return void 0 !== t && (r = r.filter((e, r) => r != t)), r.concat(n);
    }
    getSnapPointsForStraightLine(e, t) {
      for (var r = e.data, n = [], i = 0; i < e.data.length - 1; i++) if (i !== t - 1 && i !== t) {
        var o = e.data[i],
          s = e.data[i + 1];
        a.A.distance2Points(o, s) <= 20 || n.push({
          x: (o.x + s.x) / 2,
          y: (o.y + s.y) / 2
        });
      }
      return void 0 !== t && (r = r.filter((e, r) => r != t)), r.concat(n);
    }
  }
  const p = new h();
};
