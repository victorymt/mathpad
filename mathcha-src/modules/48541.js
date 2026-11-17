/* module 48541 — 79554 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    lq: () => I,
    iA: () => T,
    Ay: () => M
  });
  var n = r(40927),
    i = r.n(n),
    o = r(2543),
    s = r.n(o),
    a = r(19539),
    l = r(21774),
    c = r(22005),
    d = r(64467),
    h = r(61848),
    p = r(58370),
    u = r(1825);
  class g {
    getWaveLines(e, t, r, n, i, o, s, l) {
      i = i || 0, o = o || 0, s = s || 0, l = l || 0;
      var c = a.A.distance2Points(e, t),
        d = null,
        h = null;
      i && (d = a.A.getMiddlePointLine(e, t, i / c, 0)), o && (h = a.A.getMiddlePointLine(e, t, 1 - o / c, 0));
      var p = [];
      d && p.push({
        p1: e,
        p2: d,
        length: i
      });
      for (var u = d || e, g = h || t, m = a.A.distance2Points(u, g), f = u, y = 1, v = r; v <= m; v += r) {
        var b = a.A.roundPoint(a.A.pointAtDistance(u, g, v)),
          x = a.A.roundPoint(a.A.getMiddlePointLine(f, b, .5, n * y));
        p.push({
          p1: f,
          cp: x,
          p2: b,
          length: r
        }), f = b, y = -y;
      }
      if (v < m + r) {
        var b = a.A.roundPoint(a.A.pointAtDistance(u, g, m));
        p.push({
          p1: f,
          p2: b,
          length: a.A.distance2Points(f, b)
        }), f = b;
      }
      if (u != t) {
        var b = a.A.roundPoint(a.A.pointAtDistance(e, t, c));
        p.push({
          p1: f,
          p2: b,
          length: a.A.distance2Points(f, b)
        }), f = b;
      }
      return s && (p = a.A.insertBreakForPaths(p, s, l, "ratio")), p;
    }
    getWaveLineCubics(e, t, r, n, i, o, s, a, l, c) {
      return this.getWavePaths(e, t, r, n, i, o, s, a, l, c, f);
    }
    getWavePaths(e, t, r, n, i, o, l, c, d, p, u) {
      n = n || 0, i = i || 0, o = o || 0, c = c || 0, ((l = l || 0) || c) && (e = s().clone(e));
      var g = new u(e, o);
      if (l && (e[0] = h.A.setProp(e[0], "p1", g.getPointFromDistance(e[0], l)), n = Math.max(0, n - l)), c) {
        var m = e[e.length - 1];
        e[e.length - 1] = h.A.setProp(m, "p2", g.getPointFromDistanceSecondPoint(m, c)), i = Math.max(0, i - c);
      }
      var g,
        f = [],
        y = (g = new u(e, o)).getPoint(0);
      n && (y = g.getPoint(n), f.push({
        p1: g.getPoint(0),
        p2: y,
        length: n
      }));
      for (var v = 1, b = t + n; b <= g.totalLength - i; b += t) {
        var x = g.getPoint(b - t / 2, g.perpendicularD + r * v, !0),
          C = g.getPoint(b, null, !0);
        f.push({
          p1: y,
          cp: x,
          p2: C,
          length: t
        }), v = -v, y = C;
      }
      return b < g.totalLength - i + t && (C = g.getPoint(g.totalLength - i, null, !0), f.push({
        p1: y,
        p2: C,
        length: a.A.distance2Points(y, C)
      }), y = C), i && (C = g.getPoint(g.totalLength, null, !0), f.push({
        p1: y,
        p2: C,
        length: a.A.distance2Points(y, C)
      }), y = C), d && (f = a.A.insertBreakForPaths(f, d, p, "ratio")), f;
    }
    getRulerLinesFromPoints(e, t, r) {
      var n = a.A.pointsToLines(e);
      return this.getRulerMarkPaths(n, t, r, 0, 0, 0, 0, 0, y);
    }
    getRulerBeziers(e, t, r) {
      var n = this.getRulerMarkPaths(e, t, r, 0, 0, 0, 0, 0, f);
      return e.concat(n);
    }
    getRulerMarkPaths(e, t, r, n, i, o, a, l, c) {
      n = n || 0, i = i || 0, a = a || 0, l = l || 0;
      var d = new c(e, o = o || 0);
      if ((a || l) && (e = s().clone(e)), a && (e[0] = h.A.setProp(e[0], "p1", d.getPointFromDistance(e[0], a)), n = Math.max(0, n - a)), l) {
        var p = e[e.length - 1];
        e[e.length - 1] = h.A.setProp(p, "p2", d.getPointFromDistanceSecondPoint(p, l)), i = Math.max(0, i - l);
      }
      for (var u = [], g = t + n; g < d.totalLength - i; g += t) {
        var m = d.getPoint(g, d.perpendicularD + r / 2, !0),
          f = d.getPoint(g, d.perpendicularD - r / 2, !0);
        u.push({
          p1: m,
          p2: f
        });
      }
      return u;
    }
  }
  class m {
    constructor(e, t) {
      (0, d.A)(this, "perpendicularD", void 0), (0, d.A)(this, "totalLength", 0), (0, d.A)(this, "pathInfos", void 0), (0, d.A)(this, "lastInfo", void 0), this.perpendicularD = t, this.pathInfos = s().map(e, (e, t) => {
        var r = this.getLength(e),
          n = {
            b: e,
            length: r,
            lengthSofar: this.totalLength,
            index: t
          };
        return this.totalLength += r, n;
      });
    }
    getMatchPath(e, t) {
      for (var r, n = t && this.lastInfo ? this.lastInfo.index : 0; n < this.pathInfos.length; n++) {
        var i = this.pathInfos[n];
        if (i.lengthSofar <= e && e <= i.lengthSofar + i.length) return i;
      }
    }
    action(e, t, r, n) {
      var i = this.getPoint(t, r, n);
      return " ".concat(e).concat(a.A.round2(i.x), ",").concat(a.A.round2(i.y));
    }
    getPoint(e, t, r) {
      t = t || this.perpendicularD;
      var n = this.getMatchPath(e, r);
      return null == n && this.pathInfos && this.pathInfos[0] && (n = this.pathInfos[0]), null == n ? {
        x: 0,
        y: 0
      } : (this.lastInfo = n, this.getPointFromDistance(n.b, e - n.lengthSofar, t));
    }
  }
  class f extends m {
    getLength(e) {
      return a.A.cubicBezierLength(e);
    }
    getPointFromDistance(e, t, r) {
      return a.A.pointAtDistanceCubic(e, t, r);
    }
    getPointFromDistanceSecondPoint(e, t, r) {
      return a.A.pointAtDistanceFromSecondPointCubic(e, t, r);
    }
  }
  class y extends m {
    getLength(e) {
      return a.A.distance2Points(e.p1, e.p2);
    }
    getPointFromDistance(e, t, r) {
      return a.A.pointAtDistance(e.p1, e.p2, t, r);
    }
    getPointFromDistanceSecondPoint(e, t, r) {
      return a.A.pointAtDistanceFromSecondPoint(e.p1, e.p2, t, r);
    }
  }
  const v = new g();
  var b = r(391);
  function x(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function C(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? x(Object(r), !0).forEach(function (t) {
        (0, d.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class S {
    infoForNormalLineType(e, t, r) {
      var n;
      return 2 == e.length && t ? {
        lines: a.A.insertBreakForPaths([{
          p1: e[0],
          p2: e[1]
        }], t, r)
      } : {
        points: e
      };
    }
    getLineShape(e, t, r) {
      var n = b.A.getArrowOrConnectionSettings(r.settings, "breakWidth"),
        i = b.A.getArrowOrConnectionSettings(r.settings, "breakPositionPercentage");
      if (e && "object" == typeof e) return this.infoForNormalLineType(t, n, i);
      switch (e) {
        case "-":
        case ".":
        case "--":
          return this.infoForNormalLineType(t, n, i);
        case "~":
        case "~.":
          var o;
          return 2 == t.length && n ? {
            lines: v.getWaveLines(t[0], t[1], 5, 2.5, r.tailWaveLineDistance, r.headWaveLineDistance, n, i)
          } : {
            lines: this.getWaveLinesFromPoints(t, 5, 2.5, r.tailWaveLineDistance, r.headWaveLineDistance)
          };
        case "|":
          var s = b.A.getArrowOrConnectionSettings(r.settings, "separatorDistance"),
            l = b.A.getArrowOrConnectionSettings(r.settings, "separatorLength");
          return {
            lines: v.getRulerLinesFromPoints(t, s, l),
            points: t
          };
        case "2-":
        case "2.":
        case "2--":
          var c = this.createParallelLines(t, 3, r.tailDoubleLineDistance, r.headDoubleLineDistance),
            d = c.lines1,
            h = c.lines2;
          if (2 == t.length && n) return d = a.A.insertBreakForPaths([d[0]], n, i), h = a.A.insertBreakForPaths([h[0]], n, i), {
            lines: d.concat(h)
          };
          var p = a.A.jointParallelLines(d, h),
            d = p.lines1,
            h = p.lines2;
          return {
            lines: d.concat(h)
          };
        case "2~":
        case "2~.":
          var u = this.createParallelLines(t, 3, r.tailDoubleLineDistance, r.headDoubleLineDistance),
            d = u.lines1,
            h = u.lines2,
            g = r.tailDoubleLineDistance ? 3 : 0,
            m = r.headDoubleLineDistance ? 3 : 0;
          if (2 == t.length && n) {
            var f = v.getWaveLines(d[0].p1, d[0].p2, 5, 2.5, g, m, n, i),
              y = v.getWaveLines(h[0].p1, h[0].p2, 5, 2.5, g, m, n, i);
            return {
              lines: f.concat(y)
            };
          }
          var x = a.A.jointParallelLines(d, h),
            d = x.lines1,
            h = x.lines2,
            C = this.getWaveLines(d, 5, 2.5, g, m),
            S = this.getWaveLines(h, 5, 2.5, g, m);
          return {
            lines: C.concat(S)
          };
      }
      return this.infoForNormalLineType(t, n, i);
    }
    infoForNormalLineTypeOfCubic(e, t, r) {
      var n;
      return 1 == e.length && t ? {
        lines: a.A.insertBreakForPaths([e[0]], t, r)
      } : {
        lines: e
      };
    }
    getLineCubicShape(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "-",
        n = b.A.getArrowOrConnectionSettings(t.settings, "breakWidth"),
        i = b.A.getArrowOrConnectionSettings(t.settings, "breakPositionPercentage");
      if (r && "object" == typeof r) return this.infoForNormalLineTypeOfCubic(e, n, i);
      switch (r) {
        case "-":
        case ".":
        case "--":
          return this.infoForNormalLineTypeOfCubic(e, n, i);
        case "~":
        case "~.":
          return 1 == e.length && n ? {
            lines: v.getWaveLineCubics(e, 5, 2.5, t.tailWaveLineDistance, t.headWaveLineDistance, 0, 0, 0, n, i)
          } : {
            lines: v.getWaveLineCubics(e, 5, 2.5, t.tailWaveLineDistance, t.headWaveLineDistance, 0, 0, 0)
          };
        case "|":
          var o = b.A.getArrowOrConnectionSettings(t.settings, "separatorDistance"),
            s = b.A.getArrowOrConnectionSettings(t.settings, "separatorLength");
          return {
            lines: v.getRulerBeziers(e, o, s)
          };
        case "2-":
        case "2.":
        case "2--":
          var l = this.createCubicParallelLines(e, 3, t.tailDoubleLineDistance, t.headDoubleLineDistance),
            c = l.beziers1,
            d = l.beziers2;
          if (1 == e.length && n) {
            var h = a.A.insertBreakForPaths(c, n, i),
              p = a.A.insertBreakForPaths(d, n, i);
            return {
              lines: h.concat(p)
            };
          }
          return {
            lines: c.concat(d)
          };
        case "2~":
        case "2~.":
          if (1 == e.length && n) {
            var u = v.getWaveLineCubics(e, 5, 2.5, t.tailWaveLineDistance, t.headWaveLineDistance, 1.5, t.tailDoubleLineDistance, t.headDoubleLineDistance, n, i),
              g = v.getWaveLineCubics(e, 5, 2.5, t.tailWaveLineDistance, t.headWaveLineDistance, -1.5, t.tailDoubleLineDistance, t.headDoubleLineDistance, n, i);
            return {
              lines: u.concat(g)
            };
          }
          var u = v.getWaveLineCubics(e, 5, 2.5, t.tailWaveLineDistance, t.headWaveLineDistance, 1.5, t.tailDoubleLineDistance, t.headDoubleLineDistance),
            g = v.getWaveLineCubics(e, 5, 2.5, t.tailWaveLineDistance, t.headWaveLineDistance, -1.5, t.tailDoubleLineDistance, t.headDoubleLineDistance);
          return {
            lines: u.concat(g)
          };
      }
    }
    createParallelLines(e, t, r, n) {
      for (var i = [], o = [], s = 0; s < e.length - 1; s++) {
        var l = e[s],
          c = e[s + 1],
          d = a.A.parallelLine(l, c, t / 2),
          h = a.A.parallelLine(l, c, -t / 2);
        0 == s && (d.p1 = a.A.pointAtDistance(d.p1, d.p2, r), h.p1 = a.A.pointAtDistance(h.p1, h.p2, r)), s == e.length - 2 && (d.p2 = a.A.pointAtDistanceFromSecondPoint(d.p1, d.p2, n), h.p2 = a.A.pointAtDistanceFromSecondPoint(h.p1, h.p2, n)), i.push(d), o.push(h);
      }
      return {
        lines1: i,
        lines2: o
      };
    }
    createCubicParallelLines(e, t, r, n) {
      for (var i = [], o = [], s = 0; s < e.length; s++) {
        var l = e[s],
          c = a.A.parallelCubicBezier(l, t / 2),
          d = a.A.parallelCubicBezier(l, -t / 2);
        i = i.concat(c), o = o.concat(d);
      }
      if (r && (i[0].p1 = a.A.pointAtDistanceCubic(i[0], r), o[0].p1 = a.A.pointAtDistanceCubic(o[0], r)), n) {
        var h = i.length - 1;
        i[h].p2 = a.A.pointAtDistanceFromSecondPointCubic(i[h], n), o[h].p2 = a.A.pointAtDistanceFromSecondPointCubic(o[h], n);
      }
      return {
        beziers1: i,
        beziers2: o
      };
    }
    getEmptyInfo(e, t) {
      return {
        p1: e,
        p2: t,
        headDoubleLineDistance: 0,
        tailDoubleLineDistance: 0,
        headWaveLineDistance: 0,
        tailWaveLineDistance: 0,
        headLineDistance: 0,
        tailLineDistance: 0,
        headInfo: null
      };
    }
    getCurveEmptyInfo(e) {
      return {
        headDoubleLineDistance: 0,
        tailDoubleLineDistance: 0,
        headWaveLineDistance: 0,
        tailWaveLineDistance: 0,
        headLineDistance: 0,
        tailLineDistance: 0,
        headInfo: null,
        bezier: e
      };
    }
    buildInfo(e, t, r, n, i, o, s, a) {
      return {
        p1: e,
        p2: t,
        headDoubleLineDistance: r.headDoubleLineDistance || 0,
        tailDoubleLineDistance: r.tailDoubleLineDistance || 0,
        headWaveLineDistance: r.headWaveLineDistance || 0,
        tailWaveLineDistance: r.tailWaveLineDistance || 0,
        headLineDistance: r.headLineDistance || 0,
        tailLineDistance: r.tailLineDistance || 0,
        headInfo: r.vectors(i, n, o, s, a)
      };
    }
    buildCurveInfo(e, t, r, n, i, o, s) {
      return {
        bezier: e,
        headDoubleLineDistance: t.headDoubleLineDistance || 0,
        tailDoubleLineDistance: t.tailDoubleLineDistance || 0,
        headWaveLineDistance: t.headWaveLineDistance || 0,
        tailWaveLineDistance: t.tailWaveLineDistance || 0,
        headLineDistance: t.headLineDistance || 0,
        tailLineDistance: t.tailLineDistance || 0,
        headInfo: t.vectors(n, r, i, o, s)
      };
    }
    getFirstPartStraightLine(e, t) {
      if (!t) return e;
      if (this.isSamePoint(e.p1, e.p2)) return e;
      var r;
      if (t >= a.A.distance2Points(e.p1, e.p2)) return {
        p1: e.p1,
        p2: e.p1
      };
      var n = a.A.pointAtDistanceFromSecondPoint(e.p1, e.p2, t);
      return {
        p1: e.p1,
        p2: n
      };
    }
    getLineHeadInfo(e, t, r, n) {
      var i = e.p1,
        o = e.p2;
      if (!t || "no" == t) return this.getEmptyInfo(i, o);
      var s = a.A.angleFrom2Points360(i.x, i.y, o.x, o.y),
        l = this.getArrowPartDrawingInfo(t, r, n);
      if (!l) return this.getEmptyInfo(i, o);
      var c = this.getFirstPartStraightLine(e, l.fromRight),
        d = this.getFirstPartStraightLine(c, l.headLineDistance);
      return this.buildInfo(d.p1, d.p2, l, s, c.p2, "head", r, n);
    }
    getLineMiddleInfo(e, t, r, n, i) {
      if (t && "no" != t) return e.map(e => {
        var o = this.getArrowPartDrawingInfo(t, r, n);
        if (o) {
          var s = e.p1,
            l = e.p2,
            c = a.A.angleFrom2Points360(s.x, s.y, l.x, l.y),
            d;
          if (1 == i) {
            var h = this.centerDeltaFromArrowHead(t, r, n),
              p = a.A.distance2Points(s, l),
              u = a.A.pointAtDistance(s, l, p / 2 + h);
            return o.vectors(u, c, "head", r, n);
          }
          var g = a.A.getCenterPoint(e);
          return o.vectors(g, c, "head", r, n);
        }
      });
    }
    getStartPartCurveByDistance(e, t, r) {
      if (this.isBezierAsOnePoint(e)) return e;
      var n = e;
      if (t >= r) n = C(C({}, e), {}, {
        p2: e.p1
      });else if (t) {
        var i = a.A.bezierRatioFromDistance(e, r - t),
          o;
        n = a.A.splitBezier(e, i)[0] || e;
      }
      return n;
    }
    isBezierAsOnePoint(e) {
      return this.isSamePoint(e.p1, e.p2);
    }
    isSamePoint(e, t) {
      return e.x == t.x && e.y == t.y;
    }
    getLineHeadInfoCubic(e, t, r, n, i) {
      if (!t || "no" == t || this.isBezierAsOnePoint(e)) return this.getCurveEmptyInfo(e);
      var o = this.getArrowPartDrawingInfo(t, r, n);
      if (!o) return this.getCurveEmptyInfo(e);
      var s = a.A.cubicBezierLength(e),
        l = this.getStartPartCurveByDistance(e, o.fromRight, s),
        c = a.A.angleEndPointOfCubicLine360(e, i || 0),
        d = this.getStartPartCurveByDistance(l, o.headLineDistance, s);
      return this.buildCurveInfo(d, o, c, l.p2, "head", r, n);
    }
    getLineMiddleInfoForCubic(e, t, r, n, i, o) {
      if (t && "no" != t) return e.map(e => {
        var s = this.getArrowPartDrawingInfo(t, r, n);
        if (s) {
          var l = a.A.cubicBezierLength(e),
            c;
          if (1 == i) {
            var d,
              h = .5 * l + this.centerDeltaFromArrowHead(t, r, n),
              p = this.isPointingRight(t),
              u = p ? o : -o,
              g = a.A.pointAtDistanceCubic(e, h),
              m = a.A.pointAtDistanceCubic(e, Math.max(h - u, 0)),
              f = p ? a.A.angleFrom2Points360P(m, g) : a.A.angleFrom2Points360P(g, m);
            return s.vectors(g, f, "head", r, n);
          }
          var y = a.A.pointAtDistanceCubic(e, .5 * l),
            v = a.A.pointAtDistanceCubic(e, Math.max(.5 * l - o, 0)),
            b = a.A.angleFrom2Points360P(v, y);
          return s.vectors(y, b, "head", r, n);
        }
      });
    }
    getBreakpointHeadInfoForStraight(e, t, r, n) {
      if (t && "no" != t && !(e.length <= 2)) {
        for (var i = [], o = 1; o < e.length - 1; o++) {
          var s = this.getArrowPartDrawingInfo(t, r, n);
          if (s) {
            var l = e[o - 1],
              c = e[o],
              d = e[o + 1],
              h = this.isPointingRight(t) ? a.A.angleFrom2Points360(l.x, l.y, c.x, c.y) : a.A.angleFrom2Points360(c.x, c.y, d.x, d.y);
            i.push(s.vectors(c, h, "head", r, n));
          }
        }
        return i;
      }
    }
    getBreakpointHeadInfoForCubic(e, t, r, n) {
      if (t && "no" != t && !(e.length <= 1)) {
        for (var i = [], o = 0; o < e.length - 1; o++) {
          var s = this.getArrowPartDrawingInfo(t, r, n);
          if (s) {
            var l = e[o].p2,
              c = this.isPointingRight(t) ? a.A.angleEndPointOfCubicLine360(e[o], 0) : a.A.angleStartPointOfCubicLine360(e[o + 1], 0);
            i.push(s.vectors(l, c, "head", r, n));
          }
        }
        return i;
      }
    }
    isPointingRight(e) {
      switch (e) {
        case "f>":
        case "fh>":
        case ">":
        case "2>":
        case ")":
        case "elg>":
        case ">>":
        case "2>>":
        case ">|":
        case "2>|":
        case ">>|":
        case "2>>|":
        case "hook-up-)":
        case "hook-down-)":
          return !0;
      }
      return !1;
    }
    centerDeltaFromArrowHead(e, t, r) {
      switch (e) {
        case "f>":
        case "fh>":
        case ">|":
        case "2>|":
          return 5 + 6 * (r - 1) + 1.8 * (t - 1);
        case "f<":
        case "fh<":
          return -(6.5 + 6 * (r - 1) + 1.8 * (t - 1));
        case ">":
        case "2>":
          return 6 + 6 * (r - 1) + 1.8 * (t - 1);
        case "<":
        case "2<":
        case "|<":
        case "2|<":
          return -(7 + 6 * (r - 1) + 1.8 * (t - 1));
        case ")":
        case "hook-up-(":
        case "hook-down-(":
          return 2.5 + 3 * (r - 1) + .8 * (t - 1);
        case "elg>":
          return 7 + 7 * (r - 1) + 3 * (t - 1);
        case "(":
          return -(3 + 3 * (r - 1) + .8 * (t - 1));
        case "elg<":
          return -(9 + 7 * (r - 1) + 3 * (t - 1));
        case "||":
          return -(3 + 3 * (r - 1) + .5 * (t - 1));
        case ">>":
        case "2>>":
          return 10 + 8.5 * (r - 1) + 3.6 * (t - 1);
        case "<<":
        case "2<<":
          return -(10 + 8.5 * (r - 1) + 2.8 * (t - 1));
        case ">>|":
        case "2>>|":
          return 9 + 9 * (r - 1) + 3.8 * (t - 1);
        case "|<<":
        case "2|<<":
          return -(10 + 8.5 * (r - 1) + 3.8 * (t - 1));
        case "hook-up-)":
        case "hook-down-)":
          return -(3.2 + 3 * (r - 1) + .8 * (t - 1));
      }
      return 0;
    }
    getLastLineStraightLine(e, t) {
      return t ? this.isSamePoint(e.p1, e.p2) ? e : t >= a.A.distance2Points(e.p1, e.p2) ? {
        p1: e.p2,
        p2: e.p2
      } : {
        p1: a.A.pointAtDistance(e.p1, e.p2, t),
        p2: e.p2
      } : e;
      var r, n;
    }
    getLineTailInfo(e, t, r, n) {
      var i = e.p1,
        o = e.p2;
      if (!t || "no" == t) return this.getEmptyInfo(i, o);
      var s = this.getArrowPartDrawingInfo(t, r, n);
      if (!s) return null;
      var l = a.A.angleFrom2Points360(i.x, i.y, o.x, o.y),
        c = this.getLastLineStraightLine(e, s.fromLeft),
        d = this.getLastLineStraightLine(c, s.tailLineDistance);
      return this.buildInfo(d.p1, d.p2, s, l, c.p1, "tail", r, n);
    }
    getEndPartCurveByDistance(e, t, r) {
      if (this.isBezierAsOnePoint(e)) return e;
      var n = e;
      if (t >= r) n = C(C({}, e), {}, {
        p1: e.p2
      });else if (t) {
        var i = a.A.bezierRatioFromDistance(e, t),
          o;
        n = a.A.splitBezier(e, i)[1] || e;
      }
      return n;
    }
    getLineTailInfoCubic(e, t, r, n, i) {
      if (!t || "no" == t || this.isBezierAsOnePoint(e)) return this.getCurveEmptyInfo(e);
      var o = this.getArrowPartDrawingInfo(t, r, n);
      if (!o) return this.getCurveEmptyInfo(e);
      var s = a.A.cubicBezierLength(e),
        l = this.getEndPartCurveByDistance(e, o.fromLeft, s),
        c = a.A.angleStartPointOfCubicLine360(e, i || 0),
        d = this.getEndPartCurveByDistance(l, o.tailLineDistance, s);
      return this.buildCurveInfo(d, o, c, l.p1, "tail", r, n);
    }
    round2(e) {
      return +e.toFixed(2);
    }
    getWaveLines(e, t, r, n, i) {
      for (var o = [], s = 0; s < e.length; s++) {
        var l = e[s],
          c = 0 == s ? n : 0,
          d = s == e.length - 1 ? i : 0,
          h = l.p1,
          p = l.p2,
          u = r;
        if (l.original && ("extend" == l.startPointScale && (c = a.A.distance2Points(h, l.original.p1)), "reduce" == l.startPointScale)) {
          var g = a.A.distance2Points(h, l.original.p1),
            m = Number.parseInt(g / t);
          (c = t * (m + 1) - g) > 0 && (m + 1) % 2 == 1 && (u = -u);
        }
        o = o.concat(v.getWaveLines(h, p, t, u, c, d));
      }
      return o;
    }
    getWaveLinesFromPoints(e, t, r, n, i) {
      for (var o = [], s = 0; s < e.length - 1; s++) {
        var a = e[s],
          l = e[s + 1],
          c = 0 == s ? n : 0,
          d = s == e.length - 2 ? i : 0;
        o = o.concat(v.getWaveLines(a, l, t, r, c, d));
      }
      return o;
    }
    getArrowPartDrawingInfo(e, t, r) {
      var n = w(t, r);
      switch (e) {
        case "elg>":
          return {
            fromRight: 0,
            fromLeft: t + 1,
            headLineDistance: 2 * t,
            tailLineDistance: 2 * -t,
            headDoubleLineDistance: 6,
            tailDoubleLineDistance: -6,
            headWaveLineDistance: 8,
            tailWaveLineDistance: 0,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                fill: !0,
                stroke: !1,
                rotation: t + 180,
                p: e,
                points: [{
                  x: 12 * o,
                  y: -3 * o
                }, {
                  x: 0 * o,
                  y: 0 * o
                }, {
                  x: 12 * o,
                  y: 3 * o
                }, {
                  x: 12 * o,
                  y: -3 * o
                }]
              };
            }
          };
        case "elg<":
          return {
            fromRight: t + 1,
            fromLeft: 0,
            tailLineDistance: 2 * t,
            headLineDistance: 2 * -t,
            headDoubleLineDistance: -6,
            tailDoubleLineDistance: 6,
            headWaveLineDistance: 0,
            tailWaveLineDistance: 8,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                fill: !0,
                stroke: !1,
                rotation: t,
                p: e,
                points: [{
                  x: 12 * o,
                  y: -3 * o
                }, {
                  x: 0 * o,
                  y: 0 * o
                }, {
                  x: 12 * o,
                  y: 3 * o
                }, {
                  x: 12 * o,
                  y: -3 * o
                }]
              };
            }
          };
        case "hook-down-(":
          return {
            fromRight: 0,
            fromLeft: 0,
            vectors(e, t, r) {
              var n,
                i,
                o = E(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t,
                p: e,
                arc: {
                  p1: {
                    x: 0,
                    y: 0
                  },
                  p2: {
                    x: 0,
                    y: 5.59 * o * 2
                  },
                  rx: 5.59 * o,
                  ry: 5.59 * o,
                  xRotation: 0
                }
              };
            }
          };
        case "hook-down-)":
          return {
            fromRight: 0,
            fromLeft: 0,
            vectors(e, t, r) {
              var n,
                i,
                o = E(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t + 180,
                p: e,
                arc: {
                  p1: {
                    x: 0,
                    y: -5.59 * o * 2
                  },
                  p2: {
                    x: 0,
                    y: 0
                  },
                  rx: 5.59 * o,
                  ry: 5.59 * o,
                  xRotation: 0
                }
              };
            }
          };
        case "hook-up-(":
          return {
            fromRight: 0,
            fromLeft: 0,
            vectors(e, t, r) {
              var n,
                i,
                o = E(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t,
                p: e,
                arc: {
                  p1: {
                    x: 0,
                    y: -5.59 * o * 2
                  },
                  p2: {
                    x: 0,
                    y: 0
                  },
                  rx: 5.59 * o,
                  ry: 5.59 * o,
                  xRotation: 0
                }
              };
            }
          };
        case "hook-up-)":
          return {
            fromRight: 0,
            fromLeft: 0,
            vectors(e, t, r) {
              var n,
                i,
                o = E(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t + 180,
                p: e,
                arc: {
                  p1: {
                    x: 0,
                    y: 0
                  },
                  p2: {
                    x: 0,
                    y: 5.59 * o * 2
                  },
                  rx: 5.59 * o,
                  ry: 5.59 * o,
                  xRotation: 0
                }
              };
            }
          };
        case ">":
          return {
            fromRight: 0,
            fromLeft: t + 1,
            headLineDistance: t + 1,
            headDoubleLineDistance: 6,
            tailDoubleLineDistance: -4,
            headWaveLineDistance: 8,
            tailWaveLineDistance: 0,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t + 180,
                p: e,
                lines: [{
                  p1: {
                    x: 10.93 * o,
                    y: -3.29 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: 0
                  },
                  cp: {
                    x: 4.96 * o,
                    y: -.45 * o
                  }
                }, {
                  p1: {
                    x: 0,
                    y: 0
                  },
                  p2: {
                    x: 10.93 * o,
                    y: 3.29 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: .45 * o
                  }
                }]
              };
            }
          };
        case "f>":
          return {
            fromRight: 0,
            fromLeft: t + 1,
            headLineDistance: t + 2,
            tailLineDistance: -t,
            headDoubleLineDistance: 6,
            tailDoubleLineDistance: -4,
            headWaveLineDistance: 8,
            tailWaveLineDistance: 0,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                fill: !0,
                stroke: !1,
                rotation: t + 180,
                p: e,
                points: [{
                  x: 8.93 * o,
                  y: -4.29 * o
                }, {
                  x: 0 * o,
                  y: 0 * o
                }, {
                  x: 8.93 * o,
                  y: 4.29 * o
                }, {
                  x: 8.93 * o,
                  y: -4.29 * o
                }]
              };
            }
          };
        case "fh>":
          return {
            fromRight: 0,
            fromLeft: t + 1,
            headLineDistance: t + 2,
            tailLineDistance: -t,
            headDoubleLineDistance: 6,
            tailDoubleLineDistance: -4,
            headWaveLineDistance: 8,
            tailWaveLineDistance: 0,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1) + .2;
              return {
                fill: !0,
                stroke: !1,
                rotation: t + 180,
                p: e,
                points: [{
                  x: 8.93 * o,
                  y: -4.29 * o
                }, {
                  x: 0 * o,
                  y: 0 * o
                }, {
                  x: 8.93 * o,
                  y: 4.29 * o
                }, {
                  x: 5.93 * o,
                  y: 0 * o
                }, {
                  x: 8.93 * o,
                  y: -4.29 * o
                }]
              };
            }
          };
        case "2>":
          return {
            fromRight: 0,
            fromLeft: t + 1,
            headLineDistance: t + 1,
            headDoubleLineDistance: 5,
            tailDoubleLineDistance: -4,
            headWaveLineDistance: 8,
            tailWaveLineDistance: 0,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t + 180,
                p: e,
                lines: [{
                  p1: {
                    x: 10.93 * o,
                    y: -4.9 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: -1 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 0 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: 1 * o
                  },
                  p2: {
                    x: 10.93 * o,
                    y: 4.9 * o
                  }
                }]
              };
            }
          };
        case "<":
          return {
            fromRight: t + 1,
            fromLeft: 0,
            tailLineDistance: t + 1,
            headDoubleLineDistance: -4,
            tailDoubleLineDistance: 6,
            headWaveLineDistance: 0,
            tailWaveLineDistance: 8,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t,
                p: e,
                lines: [{
                  p1: {
                    x: 10.93 * o,
                    y: -3.29 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: -.45 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 0 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: .45 * o
                  },
                  p2: {
                    x: 10.93 * o,
                    y: 3.29 * o
                  }
                }]
              };
            }
          };
        case "f<":
          return {
            fromRight: t + 1,
            fromLeft: 0,
            tailLineDistance: t + 2,
            headLineDistance: -t,
            headDoubleLineDistance: -4,
            tailDoubleLineDistance: 6,
            headWaveLineDistance: 0,
            tailWaveLineDistance: 8,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                fill: !0,
                stroke: !1,
                rotation: t,
                p: e,
                points: [{
                  x: 8.93 * o,
                  y: -4.29 * o
                }, {
                  x: 0 * o,
                  y: 0 * o
                }, {
                  x: 8.93 * o,
                  y: 4.29 * o
                }, {
                  x: 8.93 * o,
                  y: -4.29 * o
                }]
              };
            }
          };
        case "fh<":
          return {
            fromRight: t + 1,
            fromLeft: 0,
            tailLineDistance: t + 2,
            headLineDistance: -t,
            headDoubleLineDistance: -4,
            tailDoubleLineDistance: 6,
            headWaveLineDistance: 0,
            tailWaveLineDistance: 8,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1) + .2;
              return {
                fill: !0,
                stroke: !1,
                rotation: t,
                p: e,
                points: [{
                  x: 8.93 * o,
                  y: -4.29 * o
                }, {
                  x: 0 * o,
                  y: 0 * o
                }, {
                  x: 8.93 * o,
                  y: 4.29 * o
                }, {
                  x: 5.93 * o,
                  y: 0 * o
                }, {
                  x: 8.93 * o,
                  y: -4.29 * o
                }]
              };
            }
          };
        case "2<":
          return {
            fromRight: t + 1,
            fromLeft: 0,
            tailLineDistance: t + 1,
            headDoubleLineDistance: -4,
            tailDoubleLineDistance: 5,
            headWaveLineDistance: 0,
            tailWaveLineDistance: 8,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t,
                p: e,
                lines: [{
                  p1: {
                    x: 10.93 * o,
                    y: -4.9 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: -1 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 0 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: 1 * o
                  },
                  p2: {
                    x: 10.93 * o,
                    y: 4.9 * o
                  }
                }]
              };
            }
          };
        case ")":
          return {
            fromRight: 0,
            fromLeft: 0,
            vectors(e, t, r) {
              var n,
                i,
                o = E(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t + 180,
                p: e,
                arc: {
                  p1: {
                    x: 5.59 * o,
                    y: -5.59 * o
                  },
                  p2: {
                    x: 5.59 * o,
                    y: 5.59 * o
                  },
                  rx: 5.59 * o,
                  ry: 5.59 * o,
                  xRotation: 0
                }
              };
            }
          };
        case "(":
          return {
            fromRight: 0,
            fromLeft: 0,
            vectors(e, t, r) {
              var n,
                i,
                o = E(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t,
                p: e,
                arc: {
                  p1: {
                    x: 5.59 * o,
                    y: -5.59 * o
                  },
                  p2: {
                    x: 5.59 * o,
                    y: 5.59 * o
                  },
                  rx: 5.59 * o,
                  ry: 5.59 * o,
                  xRotation: 0
                }
              };
            }
          };
        case "|":
          return {
            fromRight: 0,
            fromLeft: 0,
            vectors(e, t, r) {
              var n,
                i,
                o = E(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t + 180,
                p: e,
                lines: [{
                  p1: {
                    x: 0 * o,
                    y: 5.59 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: -5.59 * o
                  }
                }]
              };
            }
          };
        case "||":
          return {
            fromRight: A(t),
            fromLeft: A(t),
            vectors(e, t, r) {
              var n,
                i,
                o = E(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return "head" == r ? {
                rotation: t + 180,
                p: e,
                lines: [{
                  p1: {
                    x: 0 * o,
                    y: 5.59 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: -5.59 * o
                  }
                }, {
                  p1: {
                    x: -3.35 * o * 1.5,
                    y: 5.59 * o
                  },
                  p2: {
                    x: -3.35 * o * 1.5,
                    y: -5.59 * o
                  }
                }]
              } : {
                rotation: t,
                p: e,
                lines: [{
                  p1: {
                    x: 0 * o,
                    y: 5.59 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: -5.59 * o
                  }
                }, {
                  p1: {
                    x: -3.35 * o * 1.5,
                    y: 5.59 * o
                  },
                  p2: {
                    x: -3.35 * o * 1.5,
                    y: -5.59 * o
                  }
                }]
              };
            }
          };
        case ">>":
          return {
            fromRight: 0,
            fromLeft: (t - 1) / 2,
            headDoubleLineDistance: 13,
            tailDoubleLineDistance: -8,
            headWaveLineDistance: 14,
            tailWaveLineDistance: 0,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t + 180,
                p: e,
                lines: [{
                  p1: {
                    x: 17.64 * o,
                    y: -3.29 * o
                  },
                  cp: {
                    x: 11.67 * o,
                    y: -.45 * o
                  },
                  p2: {
                    x: 6.71 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 6.71 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 11.67 * o,
                    y: .45 * o
                  },
                  p2: {
                    x: 17.64 * o,
                    y: 3.29 * o
                  }
                }, {
                  p1: {
                    x: 10.93 * o,
                    y: -3.29 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: -.45 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 0 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: .45 * o
                  },
                  p2: {
                    x: 10.93 * o,
                    y: 3.29 * o
                  }
                }]
              };
            }
          };
        case "2>>":
          return {
            fromRight: 0,
            fromLeft: (t - 1) / 2,
            headDoubleLineDistance: 11,
            tailDoubleLineDistance: -8,
            headWaveLineDistance: 14,
            tailWaveLineDistance: 0,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t + 180,
                p: e,
                lines: [{
                  p1: {
                    x: 17.64 * o,
                    y: -4.9 * o
                  },
                  cp: {
                    x: 11.67 * o,
                    y: -1 * o
                  },
                  p2: {
                    x: 6.71 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 6.71 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 11.67 * o,
                    y: 1 * o
                  },
                  p2: {
                    x: 17.64 * o,
                    y: 4.9 * o
                  }
                }, {
                  p1: {
                    x: 10.93 * o,
                    y: -4.9 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: -1 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 0 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: 1 * o
                  },
                  p2: {
                    x: 10.93 * o,
                    y: 4.9 * o
                  }
                }]
              };
            }
          };
        case "<<":
          return {
            fromRight: (t - 1) / 2,
            fromLeft: 0,
            headDoubleLineDistance: -8,
            tailDoubleLineDistance: 13,
            headWaveLineDistance: 0,
            tailWaveLineDistance: 14,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t,
                p: e,
                lines: [{
                  p1: {
                    x: 17.64 * o,
                    y: -3.29 * o
                  },
                  cp: {
                    x: 11.67 * o,
                    y: -.45 * o
                  },
                  p2: {
                    x: 6.71 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 6.71 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 11.67 * o,
                    y: .45 * o
                  },
                  p2: {
                    x: 17.64 * o,
                    y: 3.29 * o
                  }
                }, {
                  p1: {
                    x: 10.93 * o,
                    y: -3.29 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: -.45 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 0 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: .45 * o
                  },
                  p2: {
                    x: 10.93 * o,
                    y: 3.29 * o
                  }
                }]
              };
            }
          };
        case "2<<":
          return {
            fromRight: (t - 1) / 2,
            fromLeft: 0,
            headDoubleLineDistance: -8,
            tailDoubleLineDistance: 11,
            headWaveLineDistance: 0,
            tailWaveLineDistance: 14,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t,
                p: e,
                lines: [{
                  p1: {
                    x: 17.64 * o,
                    y: -4.9 * o
                  },
                  cp: {
                    x: 11.67 * o,
                    y: -1 * o
                  },
                  p2: {
                    x: 6.71 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 6.71 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 11.67 * o,
                    y: 1 * o
                  },
                  p2: {
                    x: 17.64 * o,
                    y: 4.9 * o
                  }
                }, {
                  p1: {
                    x: 10.93 * o,
                    y: -4.9 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: -1 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 0 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: 1 * o
                  },
                  p2: {
                    x: 10.93 * o,
                    y: 4.9 * o
                  }
                }]
              };
            }
          };
        case ">|":
          return {
            fromRight: 0,
            fromLeft: 0,
            headDoubleLineDistance: 7,
            tailDoubleLineDistance: 0,
            headWaveLineDistance: 8,
            tailWaveLineDistance: 0,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t + 180,
                p: e,
                lines: [{
                  p1: {
                    x: 0 * o,
                    y: 5.59 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: -5.59 * o
                  }
                }, {
                  p1: {
                    x: 10.93 * o,
                    y: -3.29 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: -.45 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 0 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: .45 * o
                  },
                  p2: {
                    x: 10.93 * o,
                    y: 3.29 * o
                  }
                }]
              };
            }
          };
        case "2>|":
          return {
            fromRight: 0,
            fromLeft: 0,
            headDoubleLineDistance: 5,
            tailDoubleLineDistance: 0,
            headWaveLineDistance: 8,
            tailWaveLineDistance: 0,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t + 180,
                p: e,
                lines: [{
                  p1: {
                    x: 0 * o,
                    y: 5.59 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: -5.59 * o
                  }
                }, {
                  p1: {
                    x: 10.93 * o,
                    y: -4.9 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: -1 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 0 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: 1 * o
                  },
                  p2: {
                    x: 10.93 * o,
                    y: 4.9 * o
                  }
                }]
              };
            }
          };
        case "|<":
          return {
            fromRight: 0,
            fromLeft: 0,
            headDoubleLineDistance: 0,
            tailDoubleLineDistance: 7,
            headWaveLineDistance: 0,
            tailWaveLineDistance: 8,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t,
                p: e,
                lines: [{
                  p1: {
                    x: 0 * o,
                    y: 5.59 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: -5.59 * o
                  }
                }, {
                  p1: {
                    x: 10.93 * o,
                    y: -3.29 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: -.45 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 0 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: .45 * o
                  },
                  p2: {
                    x: 10.93 * o,
                    y: 3.29 * o
                  }
                }]
              };
            }
          };
        case "2|<":
          return {
            fromRight: 0,
            fromLeft: 0,
            headDoubleLineDistance: 0,
            tailDoubleLineDistance: 5,
            headWaveLineDistance: 0,
            tailWaveLineDistance: 8,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t,
                p: e,
                lines: [{
                  p1: {
                    x: 0 * o,
                    y: 5.59 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: -5.59 * o
                  }
                }, {
                  p1: {
                    x: 10.93 * o,
                    y: -4.9 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: -1 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 0 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: 1 * o
                  },
                  p2: {
                    x: 10.93 * o,
                    y: 4.9 * o
                  }
                }]
              };
            }
          };
        case "+":
          return {
            fromRight: 0,
            fromLeft: 0,
            headDoubleLineDistance: 5,
            tailDoubleLineDistance: 5,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t,
                p: e,
                lines: [{
                  p1: {
                    x: -5.59 * o,
                    y: 0 * o
                  },
                  p2: {
                    x: 5.59 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 0 * o,
                    y: 5.59 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: -5.59 * o
                  }
                }]
              };
            }
          };
        case "x":
          return {
            fromRight: 0,
            fromLeft: 0,
            headDoubleLineDistance: 2,
            tailDoubleLineDistance: 2,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t + 45,
                p: e,
                lines: [{
                  p1: {
                    x: -5.59 * o,
                    y: 0 * o
                  },
                  p2: {
                    x: 5.59 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 0 * o,
                    y: 5.59 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: -5.59 * o
                  }
                }]
              };
            }
          };
        case ">>|":
          return {
            fromRight: 0,
            fromLeft: 0,
            headDoubleLineDistance: 14,
            tailDoubleLineDistance: 0,
            headWaveLineDistance: 14,
            tailWaveLineDistance: 0,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t + 180,
                p: e,
                lines: [{
                  p1: {
                    x: 0 * o,
                    y: 5.59 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: -5.59 * o
                  }
                }, {
                  p1: {
                    x: 17.64 * o,
                    y: -3.29 * o
                  },
                  cp: {
                    x: 11.67 * o,
                    y: -.45 * o
                  },
                  p2: {
                    x: 6.71 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 6.71 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 11.67 * o,
                    y: .45 * o
                  },
                  p2: {
                    x: 17.64 * o,
                    y: 3.29 * o
                  }
                }, {
                  p1: {
                    x: 10.93 * o,
                    y: -3.29 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: -.45 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 0 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: .45 * o
                  },
                  p2: {
                    x: 10.93 * o,
                    y: 3.29 * o
                  }
                }]
              };
            }
          };
        case "2>>|":
          return {
            fromRight: 0,
            fromLeft: 0,
            headDoubleLineDistance: 12,
            tailDoubleLineDistance: 0,
            headWaveLineDistance: 14,
            tailWaveLineDistance: 0,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t + 180,
                p: e,
                lines: [{
                  p1: {
                    x: 0 * o,
                    y: 5.59 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: -5.59 * o
                  }
                }, {
                  p1: {
                    x: 17.64 * o,
                    y: -4.9 * o
                  },
                  cp: {
                    x: 11.67 * o,
                    y: -1 * o
                  },
                  p2: {
                    x: 6.71 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 6.71 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 11.67 * o,
                    y: 1 * o
                  },
                  p2: {
                    x: 17.64 * o,
                    y: 4.9 * o
                  }
                }, {
                  p1: {
                    x: 10.93 * o,
                    y: -4.9 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: -1 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 0 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: 1 * o
                  },
                  p2: {
                    x: 10.93 * o,
                    y: 4.9 * o
                  }
                }]
              };
            }
          };
        case "|<<":
          return {
            fromRight: 0,
            fromLeft: 0,
            headDoubleLineDistance: 0,
            tailDoubleLineDistance: 14,
            headWaveLineDistance: 0,
            tailWaveLineDistance: 14,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t,
                p: e,
                lines: [{
                  p1: {
                    x: 0 * o,
                    y: 5.59 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: -5.59 * o
                  }
                }, {
                  p1: {
                    x: 17.64 * o,
                    y: -3.29 * o
                  },
                  cp: {
                    x: 11.67 * o,
                    y: -.45 * o
                  },
                  p2: {
                    x: 6.71 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 6.71 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 11.67 * o,
                    y: .45 * o
                  },
                  p2: {
                    x: 17.64 * o,
                    y: 3.29 * o
                  }
                }, {
                  p1: {
                    x: 10.93 * o,
                    y: -3.29 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: -.45 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 0 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: .45 * o
                  },
                  p2: {
                    x: 10.93 * o,
                    y: 3.29 * o
                  }
                }]
              };
            }
          };
        case "2|<<":
          return {
            fromRight: 0,
            fromLeft: 0,
            headDoubleLineDistance: 0,
            tailDoubleLineDistance: 12,
            headWaveLineDistance: 0,
            tailWaveLineDistance: 14,
            vectors(e, t, r) {
              var n,
                i,
                o = w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1);
              return {
                rotation: t,
                p: e,
                lines: [{
                  p1: {
                    x: 0 * o,
                    y: 5.59 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: -5.59 * o
                  }
                }, {
                  p1: {
                    x: 17.64 * o,
                    y: -4.9 * o
                  },
                  cp: {
                    x: 11.67 * o,
                    y: -1 * o
                  },
                  p2: {
                    x: 6.71 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 6.71 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 11.67 * o,
                    y: 1 * o
                  },
                  p2: {
                    x: 17.64 * o,
                    y: 4.9 * o
                  }
                }, {
                  p1: {
                    x: 10.93 * o,
                    y: -4.9 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: -1 * o
                  },
                  p2: {
                    x: 0 * o,
                    y: 0 * o
                  }
                }, {
                  p1: {
                    x: 0 * o,
                    y: 0 * o
                  },
                  cp: {
                    x: 4.96 * o,
                    y: 1 * o
                  },
                  p2: {
                    x: 10.93 * o,
                    y: 4.9 * o
                  }
                }]
              };
            }
          };
        case "*":
          return {
            fromRight: 0,
            fromLeft: 0,
            vectors(e, t, r) {
              var n, i, o;
              return {
                rotation: t,
                p: e,
                fill: !0,
                circle: {
                  cp: {
                    x: 0,
                    y: 0
                  },
                  r: 3.35 * w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1)
                }
              };
            }
          };
        case "o":
          return {
            fromRight: 0,
            fromLeft: 0,
            headLineDistance: 3.35 * n - 1,
            tailLineDistance: 3.35 * n - 1,
            vectors(e, t, r) {
              var n, i, o;
              return {
                rotation: t,
                p: e,
                circle: {
                  cp: {
                    x: 0,
                    y: 0
                  },
                  r: 3.35 * w(arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1)
                }
              };
            }
          };
      }
    }
  }
  function A() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    switch (e) {
      case 1:
        return 5;
      case 2:
        return 6;
      case 3:
        return 7;
      case 4:
        return 8;
      case 5:
        return 9;
      case 6:
        return 10;
      case 7:
        return 12;
      case 8:
        return 14;
      default:
        return e + 2;
    }
  }
  function w(e, t) {
    var r, n;
    switch (t = null !== (n = t) && void 0 !== n ? n : 1, e = null !== (r = e) && void 0 !== r ? r : 1) {
      case 1:
        return 1 * t;
      case 2:
        return 1.3 * t;
      case 3:
        return 1.6 * t;
      case 4:
        return 1.9 * t;
      case 5:
        return 2.3 * t;
      case 6:
        return 2.7 * t;
      case 7:
        return 3.1 * t;
      case 8:
        return 3.7 * t;
      default:
        return 1 + Math.pow(e, 1.2) / 4 * t;
    }
  }
  function E(e, t) {
    var r, n;
    switch (t = null !== (n = t) && void 0 !== n ? n : 1, e = null !== (r = e) && void 0 !== r ? r : 1) {
      case 1:
        return 1 * t;
      case 2:
        return 1.2 * t;
      case 3:
        return 1.4 * t;
      case 4:
        return 1.6 * t;
      case 5:
        return 1.7 * t;
      case 6:
        return 2 * t;
      case 7:
        return 2.3 * t;
      case 8:
        return 2.7 * t;
      default:
        return 1 + Math.pow(e, 1.2) / 4 * t;
    }
  }
  const k = new S();
  var O = r(32485),
    D = r.n(O),
    P = r(43923);
  class M extends i().Component {
    isStyleInfoDifferent(e, t) {
      return e != t && (!!e != !!t || !l.A.areEqualShallow(e.defs, t.defs) || !l.A.areEqualShallow(e.style, t.style));
    }
    shouldComponentUpdate(e) {
      var t;
      return !(e.tail == this.props.tail && e.headAngleByDistance == this.props.headAngleByDistance && e.mAngleBy == this.props.mAngleBy && e.mVer == this.props.mVer && e.head == this.props.head && e.middle == this.props.middle && e.bpHead == this.props.bpHead && e.shaft == this.props.shaft && e.thickness == this.props.thickness && e.headScale == this.props.headScale && e.type == this.props.type && e.isSelected == this.props.isSelected && e.isGroupSelected == this.props.isGroupSelected && e.isRemoteSelected == this.props.isRemoteSelected && e.remoteSelectedColor == this.props.remoteSelectedColor && e.settings == this.props.settings && e.style == this.props.style && !this.isStyleInfoDifferent(e.htmlStyleInfo, this.props.htmlStyleInfo) && e.className == this.props.className) || ("straight" == this.props.type ? !l.A.arrayEquals(this.props.data, e.data, (e, t) => a.A.pointEquals(e, t)) : "quadratic" == this.props.type ? !l.A.arrayEquals(this.props.data, e.data, (e, t) => a.A.pointEquals(e.p1, t.p1) && a.A.pointEquals(e.cp, t.cp) && a.A.pointEquals(e.p2, t.p2)) : "cubic" == this.props.type ? !l.A.arrayEquals(this.props.data, e.data, (e, t) => a.A.pointEquals(e.p1, t.p1) && a.A.pointEquals(e.cp, t.cp) && a.A.pointEquals(e.cp2, t.cp2) && a.A.pointEquals(e.p2, t.p2)) : e.data != this.props.data);
    }
    getSelectedClassName() {
      return D()(this.props.className, {
        selected: this.props.isSelected,
        "group-selected": this.props.isGroupSelected
      });
    }
    getTransparentStyle() {
      return P.A.getSelectionStyle(this.props, this.props.thickness);
    }
    renderStraightArrow(e) {
      var t = this.props,
        r = t.shaft,
        n = t.thickness,
        o = t.headScale,
        a = void 0 === o ? 1 : o,
        l = t.mVer,
        d = this.getSelectedClassName(),
        h,
        p,
        u,
        g,
        m,
        f,
        y = this.props.htmlStyleInfo.style;
      if (e.length > 1) {
        var v = T(e, this.props, this.props.settings, this.props.thickness || 1, a, l),
          b = T(e, s().assign({}, this.props, {
            shaft: "-",
            thickness: 1
          }), this.props.settings, this.props.thickness || 1, a, l);
        h = c.A.fromPathInfo(v.pathsInfo, d + " real", y, {
          shaft: r,
          thickness: n
        }), p = c.A.fromPathInfo(b.pathsInfo, "connection transparent no-print", this.getTransparentStyle(), {
          shaft: "-",
          thickness: 1
        }), g = c.A.fromHeadInfo(v.headInfo, y), u = c.A.fromHeadInfo(v.tailInfo, y), v.middleInfo && (m = i().createElement("g", null, v.middleInfo.map((e, t) => c.A.fromHeadInfo(e, y, t)))), v.bpHeadInfo && (f = i().createElement("g", null, v.bpHeadInfo.map((e, t) => c.A.fromHeadInfo(e, y, t))));
      }
      return i().createElement("g", {
        className: this.getArrowClss(),
        style: this.props.style,
        onDoubleClick: this.props.onDoubleClick,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.props.htmlStyleInfo ? this.props.htmlStyleInfo.defs : void 0, h, g, m, f, u, p);
    }
    renderQuadraticGuideLineToControlPoints(e, t) {
      return !t || this.props.noControlPointGuideLine ? null : [i().createElement("line", {
        className: "control-point-guide",
        key: "controlp1",
        x1: e.p1.x,
        y1: e.p1.y,
        x2: e.cp.x,
        y2: e.cp.y
      }), i().createElement("line", {
        className: "control-point-guide",
        key: "controlp2",
        x1: e.p2.x,
        y1: e.p2.y,
        x2: e.cp.x,
        y2: e.cp.y
      })];
    }
    renderCubicGuideLineToControlPoints(e, t) {
      return !t || this.props.noControlPointGuideLine ? null : c.A.getCubicControlPointGuides(e);
    }
    renderCubicArrow(e, t) {
      var r = this.props,
        n = r.shaft,
        o = r.thickness,
        a = r.headScale,
        l = void 0 === a ? 1 : a,
        d = r.mVer,
        h = this.getSelectedClassName(),
        p,
        u,
        g,
        m,
        f,
        y,
        v = this.props.htmlStyleInfo.style;
      if (e.length > 0) {
        var b,
          x,
          C = I(e, this.props, this.props.settings, o, l, this.props.headAngleByDistance || 0, d, null !== (b = this.props.mAngleBy) && void 0 !== b ? b : 6),
          S = I(e, s().assign({}, this.props, {
            shaft: "-",
            thickness: o
          }), this.props.settings, o, l, this.props.headAngleByDistance || 0, d, null !== (x = this.props.mAngleBy) && void 0 !== x ? x : 6);
        p = c.A.fromPathInfo(C.pathsInfo, h + " real", v, {
          shaft: n,
          thickness: o
        }), u = c.A.fromPathInfo(S.pathsInfo, "connection transparent no-print", this.getTransparentStyle(), {
          shaft: "-",
          thickness: o
        }), m = c.A.fromHeadInfo(C.headInfo, v), g = c.A.fromHeadInfo(C.tailInfo, v), C.middleInfo && (f = i().createElement("g", null, C.middleInfo.map((e, t) => c.A.fromHeadInfo(e, v, t)))), C.bpHeadInfo && (y = i().createElement("g", null, C.bpHeadInfo.map((e, t) => c.A.fromHeadInfo(e, v, t))));
      }
      return i().createElement("g", {
        className: this.getArrowClss(),
        style: this.props.style,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown,
        onDoubleClick: this.props.onDoubleClick
      }, this.props.htmlStyleInfo ? this.props.htmlStyleInfo.defs : void 0, u, p, g, f, y, m, t);
    }
    getArrowClss() {
      return D()("arrow-line", {
        selected: this.props.isSelected,
        "group-selected": this.props.isGroupSelected
      });
    }
    render() {
      if ("straight" == this.props.type) return this.renderStraightArrow(this.props.data);
      if ("quadratic" == this.props.type) {
        var e = this.props.data;
        if (e.length > 1) throw new Error("not supported");
        var t = a.A.quadraticToCubic(e[0]),
          r = this.renderQuadraticGuideLineToControlPoints(e[0], this.props.isSelected);
        return this.renderCubicArrow([t], r);
      }
      if ("cubic" == this.props.type) {
        var n = this.props.data,
          i = this.renderCubicGuideLineToControlPoints(n, this.props.isSelected);
        return this.renderCubicArrow(n, i);
      }
    }
  }
  function I(e, t, r, n, i, o, l, c) {
    e = s().clone(e);
    var d = t.head,
      h = t.tail,
      p = t.shaft,
      u = t.middle,
      g = t.bpHead,
      m = o ? a.A.ratioFromDistance(e[0], o) : 0,
      f = o ? a.A.ratioFromDistance(e[e.length - 1], o) : 0,
      y = k.getLineTailInfoCubic(e[0], h, n, i, m);
    e[0] = y.bezier;
    var v = k.getLineHeadInfoCubic(e[e.length - 1], d, n, i, f);
    e[e.length - 1] = v.bezier, e = L(e);
    var b = {
        headDoubleLineDistance: v.headDoubleLineDistance,
        tailDoubleLineDistance: y.tailDoubleLineDistance,
        headWaveLineDistance: v.headWaveLineDistance,
        tailWaveLineDistance: y.tailWaveLineDistance,
        headLineDistance: v.headLineDistance,
        tailLineDistance: y.tailLineDistance,
        settings: r
      },
      x = k.getLineCubicShape(e, b, p),
      C,
      S,
      A;
    u && (C = k.getLineMiddleInfoForCubic(e, u, n, i, l, c));
    return g && (A = k.getBreakpointHeadInfoForCubic(e, g, n, i)), {
      pathsInfo: x,
      headInfo: v.headInfo,
      tailInfo: y.headInfo,
      middleInfo: C,
      bpHeadInfo: A
    };
  }
  function T(e, t, r, n, i, o) {
    var l = t.head,
      c = t.tail,
      d = t.shaft,
      h = t.middle,
      p = t.bpHead,
      u = e[0],
      g = e[1],
      m = e[e.length - 1],
      f = e[e.length - 2],
      y = k.getLineTailInfo({
        p1: u,
        p2: g
      }, c, n, i),
      v = k.getLineHeadInfo({
        p1: f,
        p2: m
      }, l, n, i),
      b,
      x,
      C;
    h && (b = k.getLineMiddleInfo(a.A.pointsToLines(e), h, n, i, o));
    p && (C = k.getBreakpointHeadInfoForStraight(e, p, n, i));
    var S = {
      headDoubleLineDistance: v.headDoubleLineDistance,
      tailDoubleLineDistance: y.tailDoubleLineDistance,
      headWaveLineDistance: v.headWaveLineDistance,
      tailWaveLineDistance: y.tailWaveLineDistance,
      headLineDistance: v.headLineDistance,
      tailLineDistance: y.tailLineDistance,
      settings: r
    };
    return (e = s().clone(e))[0] = y.p1, e[e.length - 1] = v.p2, e = a.A.removePointsDuplicationAtStartEnd(e), {
      pathsInfo: k.getLineShape(d, e, S),
      headInfo: v.headInfo,
      tailInfo: y.headInfo,
      middleInfo: b,
      bpHeadInfo: C
    };
  }
  function L(e) {
    var t = e[0];
    t.p1.x == t.p2.x && t.p1.y == t.p2.y && e.shift();
    var r = e.length - 1;
    return r >= 0 && e[r].p1.x == e[r].p2.x && e[r].p1.y == e[r].p2.y && e.pop(), e;
  }
};
