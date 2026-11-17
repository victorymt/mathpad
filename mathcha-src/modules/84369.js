/* module 84369 — 5163 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => c
  });
  var n = r(19539),
    i = r(2543),
    o = r.n(i),
    s = r(53020),
    a = r(30873);
  class l {
    paperRectToRectangle(e) {
      return {
        p1: {
          x: e.left,
          y: e.top
        },
        p2: {
          x: e.right,
          y: e.bottom
        }
      };
    }
    getSegmentsToPoints(e) {
      return e.map(e => {
        var t = s.A.getSegmentPoint(e);
        return {
          x: t[0],
          y: t[1]
        };
      });
    }
    getPathPoints(e) {
      return a.A.fold(e, {
        fold: (e, t) => e.concat(this.getSegmentsToPoints(t[1].segments)),
        initValue: []
      });
    }
    getPathHandledPoints(e, t) {
      return a.A.fold(e, {
        fold: (e, t) => {
          for (var r = [], n = 0; n < t[1].segments.length; n++) {
            var i = t[1].segments[n];
            s.A.isSegmentPoint(i) || (i[1] && r.push({
              x: i[1][0] + i[0][0],
              y: i[1][1] + i[0][1]
            }), i[2] && r.push({
              x: i[2][0] + i[0][0],
              y: i[2][1] + i[0][1]
            }));
          }
          return e.concat(r);
        },
        initValue: []
      });
    }
    pathToLines(e, t) {
      return a.A.fold(e, {
        fold: (e, r) => {
          var n = this.segmentsToLines(r[1].segments, r[1].closed, t);
          return e.concat(n);
        },
        initValue: []
      });
    }
    segmentsToLines(e, t, r) {
      if (e.length <= 1) return [];
      for (var n = new Array(e.length - 1), i = 0; i < e.length - 1; i++) {
        var a = e[i],
          l = e[i + 1];
        n[i] = this.segmentToLine(a, l, r);
      }
      if (t) {
        var c = s.A.getSegmentPoint(e[0]),
          d = s.A.getSegmentPoint(o().last(e));
        s.A.segPointEquals(c, d) || n.push(this.segmentToLine(o().last(e), e[0], r));
      }
      return n;
    }
    segmentToLine(e, t, r) {
      var n = s.A.getSegmentPoint(e),
        i = s.A.getSegmentPoint(t);
      if (s.A.isSegmentPoint(e) || s.A.isSegmentPoint(t)) return {
        p1: {
          x: n[0],
          y: n[1]
        },
        p2: {
          x: i[0],
          y: i[1]
        }
      };
      var o = s.A.getHandleOut(e),
        a = s.A.getHandleIn(t);
      return o && a ? r ? {
        p1: {
          x: n[0],
          y: n[1]
        },
        cp: {
          x: o[0] + n[0],
          y: o[1] + n[1]
        },
        cp2: {
          x: a[0] + i[0],
          y: a[1] + i[1]
        },
        p2: {
          x: i[0],
          y: i[1]
        }
      } : {
        p1: {
          x: n[0],
          y: n[1]
        },
        cp: {
          x: n[0],
          y: n[1]
        },
        cp2: {
          x: i[0],
          y: i[1]
        },
        p2: {
          x: i[0],
          y: i[1]
        }
      } : {
        p1: {
          x: n[0],
          y: n[1]
        },
        p2: {
          x: i[0],
          y: i[1]
        }
      };
    }
    compoundPath(e, t) {
      return ["CompoundPath", {
        applyMatrix: !0,
        children: e,
        fillRule: t && t.fillRule || void 0
      }];
    }
    fromPoints(e, t) {
      for (var r = e.length, i = new Array(r), s = 0; s < r; s++) {
        var a = e[s];
        i[s] = [a.x, a.y];
      }
      return ["Path", {
        applyMatrix: !0,
        segments: i,
        closed: !!t || n.A.pointEquals(e[0], o().last(e))
      }];
    }
    fromGenericLines(e, t) {
      for (var r = e.length, i = [], o = [], s = 0; s < r; s++) {
        var a = this.quadraticToCubicIfRequired(e[s]),
          l = this.quadraticToCubicIfRequired(s <= 0 ? void 0 : e[s - 1]),
          c;
        !(l && n.A.pointEquals(l.p2, a.p1)) && o.length > 0 && l && (o.push(this.makeSegment(l, {
          p1: l.p2,
          p2: {
            x: 0,
            y: 0
          }
        })), i.push(o), o = [], l = void 0), o.push(this.makeSegment(l, a)), s == r - 1 && (o.push(this.makeSegment(a, {
          p1: a.p2,
          p2: {
            x: 0,
            y: 0
          }
        })), i.push(o));
      }
      return i.length <= 1 ? this.makePathFromSegments(i[0], t) : ["CompoundPath", {
        applyMatrix: !0,
        children: i.map(e => this.makePathFromSegments(e, t))
      }];
    }
    makePathFromSegments(e, t) {
      return ["Path", {
        applyMatrix: !0,
        segments: e,
        closed: !!t || s.A.segPointEquals(s.A.getSegmentPoint(e[0]), s.A.getSegmentPoint(o().last(e)))
      }];
    }
    quadraticToCubicIfRequired(e) {
      if (e) return this.isQuadraticBezier(e) ? n.A.quadraticToCubic(e) : e;
    }
    makeSegment(e, t) {
      return e && this.isCubicBezier(e) ? this.isCubicBezier(t) ? [[t.p1.x, t.p1.y], [e.cp2.x - t.p1.x, e.cp2.y - t.p1.y], [t.cp.x - t.p1.x, t.cp.y - t.p1.y]] : [[t.p1.x, t.p1.y], [e.cp2.x - t.p1.x, e.cp2.y - t.p1.y], [0, 0]] : this.isCubicBezier(t) ? [[t.p1.x, t.p1.y], [0, 0], [t.cp.x - t.p1.x, t.cp.y - t.p1.y]] : [t.p1.x, t.p1.y];
    }
    isQuadraticBezier(e) {
      return !(!e.cp || e.cp2);
    }
    isCubicBezier(e) {
      return !(!e.cp || !e.cp2);
    }
  }
  const c = new l();
};
