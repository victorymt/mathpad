/* module 88925 — 8529 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => y
  });
  var n = r(64467),
    i = r(19539),
    o = r(2543),
    s = r.n(o),
    a = r(61848),
    l = r(65349),
    c = r(58370),
    d = r.n(c),
    h = r(1825),
    p = r.n(h);
  class u {
    pathsD(e) {
      if (!e || e.length <= 0) return "";
      for (var t = "", r = null, n = e.length > 1, o = 0; o < e.length; o++) {
        var s = i.A.roundPath(e[o]),
          a = o > 0 ? i.A.roundPoint(e[o - 1].p2) : null,
          c = a && i.A.pointEquals(a, s.p1),
          d = o == e.length - 1,
          h = !s.cp;
        c && n && h && r && i.A.pointEquals(s.p2, r.p1) ? (t += " Z", r = null) : (c || (t += l.A.actionWith("M", s.p1)), s.cp2 ? (t += l.A.actionWith("C", s.cp), t += l.A.actionWith("", s.cp2), t += l.A.actionWith("", s.p2)) : s.cp ? (t += l.A.actionWith("Q", s.cp), t += l.A.actionWith("", s.p2)) : t += l.A.actionWith("L", s.p2), n && r && d && i.A.pointEquals(s.p2, r.p1) ? (t += " Z", r = null) : r || (r = i.A.roundPath(e[o])));
      }
      return t;
    }
    pathsInfoD(e) {
      var t = "";
      return e.points && (t += " " + this.getLineD(e.points)), e.lines && (t += " " + this.pathsD(e.lines)), t;
    }
    cubicBeziersD(e) {
      for (var t = "", r = 0; r < e.length; r++) {
        var n = i.A.roundCubicBezier(e[r]),
          o = r > 0 ? i.A.roundPoint(e[r - 1].p2) : null;
        o && o.x == n.p1.x && o.y == n.p1.y || (t += l.A.actionWith("M", n.p1)), t += l.A.actionWith("C", n.cp), t += l.A.actionWith("", n.cp2), t += l.A.actionWith("", n.p2);
      }
      return t;
    }
    quadraticBeziersD(e) {
      for (var t = "", r = 0; r < e.length; r++) {
        var n = i.A.roundQuadraticBezier(e[r]),
          o = r > 0 ? i.A.roundPoint(e[r - 1].p2) : null;
        o && o.x == n.p1.x && o.y == n.p1.y || (t += l.A.actionWith("M", n.p1)), t += l.A.actionWith("Q", n.cp), t += l.A.actionWith("", n.p2);
      }
      return t;
    }
    getBezierOrStraightLineD(e) {
      for (var t = "", r = 0; r < e.length; r++) {
        var n = e[r];
        r > 0 && e[r - 1].p2.x == n.p1.x && e[r - 1].p2.y == n.p1.y || (t += l.A.actionWith("M", i.A.roundPoint(n.p1))), n.cp && n.cp2 ? (t += l.A.actionWith("C", i.A.roundPoint(n.cp)), t += l.A.actionWith("", i.A.roundPoint(n.cp2)), t += l.A.actionWith("", i.A.roundPoint(n.p2))) : n.cp ? (t += l.A.actionWith("Q", i.A.roundPoint(n.cp)), t += l.A.actionWith("", i.A.roundPoint(n.p2))) : t += l.A.actionWith("L", i.A.roundPoint(n.p2));
      }
      return t;
    }
    getLineD(e) {
      if (!e || e.length <= 0) return " ";
      for (var t = l.A.actionWith("M", e[0], !0), r = 1; r < e.length; r++) {
        if (r > 0 && r == e.length - 1) {
          var n = e[0],
            i = e[r];
          if (n.x == i.x && n.y == i.y) {
            t += " Z";
            continue;
          }
        }
        t += l.A.actionWith("L", e[r], !0);
      }
      return t;
    }
    getWaveLineD(e, t, r, n, o, s, a, l) {
      o = o || 0, s = s || 0, a = a || 0, l = l || 0;
      var c = i.A.distance2Points(e, t),
        d = null,
        h = null;
      o && (d = i.A.getMiddlePointLine(e, t, o / c, 0)), s && (h = i.A.getMiddlePointLine(e, t, 1 - s / c, 0));
      var p = [],
        u = "",
        u;
      d && p.push({
        p1: e,
        p2: d,
        length: o
      });
      for (var g = d || e, m = h || t, f = i.A.distance2Points(g, m), y = g, v = 1, b = r; b <= f; b += r) {
        var x = i.A.roundPoint(i.A.pointAtDistance(g, m, b)),
          C = i.A.roundPoint(i.A.getMiddlePointLine(y, x, .5, n * v));
        p.push({
          p1: y,
          cp: C,
          p2: x,
          length: r
        }), y = x, v = -v;
      }
      if (b < f + r) {
        var x = i.A.roundPoint(i.A.pointAtDistance(g, m, f));
        p.push({
          p1: y,
          p2: x,
          length: i.A.distance2Points(y, x)
        }), y = x;
      }
      if (g != t) {
        var x = i.A.roundPoint(i.A.pointAtDistance(e, t, c));
        p.push({
          p1: y,
          p2: x,
          length: i.A.distance2Points(y, x)
        }), y = x;
      }
      return a && (p = i.A.insertBreakForPaths(p, a, l, "ratio")), this.getBezierOrStraightLineD(p);
    }
    getWaveLineCubicD(e, t, r, n, i, o, s, a, l, c) {
      return this.getWavePathD(e, t, r, n, i, o, s, a, l, c, m);
    }
    getWavePathD(e, t, r, n, o, l, c, d, h, p, u) {
      n = n || 0, o = o || 0, l = l || 0, d = d || 0, ((c = c || 0) || d) && (e = s().clone(e));
      var g = new u(e, l);
      if (c && (e[0] = a.A.setProp(e[0], "p1", g.getPointFromDistance(e[0], c)), n = Math.max(0, n - c)), d) {
        var m = e[e.length - 1];
        e[e.length - 1] = a.A.setProp(m, "p2", g.getPointFromDistanceSecondPoint(m, d)), o = Math.max(0, o - d);
      }
      var g,
        f = [],
        y = (g = new u(e, l)).getPoint(0);
      n && (y = g.getPoint(n), f.push({
        p1: g.getPoint(0),
        p2: y,
        length: n
      }));
      for (var v = 1, b = t + n; b <= g.totalLength - o; b += t) {
        var x = g.getPoint(b - t / 2, g.perpendicularD + r * v, !0),
          C = g.getPoint(b, null, !0);
        f.push({
          p1: y,
          cp: x,
          p2: C,
          length: t
        }), v = -v, y = C;
      }
      return b < g.totalLength - o + t && (C = g.getPoint(g.totalLength - o, null, !0), f.push({
        p1: y,
        p2: C,
        length: i.A.distance2Points(y, C)
      }), y = C), o && (C = g.getPoint(g.totalLength, null, !0), f.push({
        p1: y,
        p2: C,
        length: i.A.distance2Points(y, C)
      }), y = C), h && (f = i.A.insertBreakForPaths(f, h, p, "ratio")), this.pathsD(f);
    }
    getRulerLinesDFromPoints(e, t, r) {
      for (var n = "", i = [], o = 0; o < e.length - 1; o++) {
        var s = e[o],
          a = e[o + 1];
        0 == o && (n += l.A.actionWith("M", s)), n += l.A.actionWith("L", a), i.push({
          p1: s,
          p2: a
        });
      }
      return n += this.getRulerMarkPathD(i, t, r, 0, 0, 0, 0, 0, f);
    }
    getRulerBeziersD(e, t, r) {
      var n = this.cubicBeziersD(e);
      return n += this.getRulerMarkPathD(e, t, r, 0, 0, 0, 0, 0, m);
    }
    getRulerMarkPathD(e, t, r, n, i, o, l, c, d) {
      n = n || 0, i = i || 0, l = l || 0, c = c || 0;
      var h = new d(e, o = o || 0);
      if ((l || c) && (e = s().clone(e)), l && (e[0] = a.A.setProp(e[0], "p1", h.getPointFromDistance(e[0], l)), n = Math.max(0, n - l)), c) {
        var p = e[e.length - 1];
        e[e.length - 1] = a.A.setProp(p, "p2", h.getPointFromDistanceSecondPoint(p, c)), i = Math.max(0, i - c);
      }
      for (var u = "", g = t + n; g < h.totalLength - i; g += t) u += h.action("M", g, h.perpendicularD + r / 2, !0), u += h.action("L", g, h.perpendicularD - r / 2, !0);
      return u;
    }
  }
  class g {
    constructor(e, t) {
      (0, n.A)(this, "perpendicularD", void 0), (0, n.A)(this, "totalLength", 0), (0, n.A)(this, "pathInfos", void 0), (0, n.A)(this, "lastInfo", void 0), this.perpendicularD = t, this.pathInfos = s().map(e, (e, t) => {
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
      var o = this.getPoint(t, r, n);
      return " ".concat(e).concat(i.A.round2(o.x), ",").concat(i.A.round2(o.y));
    }
    getPoint(e, t, r) {
      t = t || this.perpendicularD;
      var n = this.getMatchPath(e, r);
      return this.lastInfo = n, this.getPointFromDistance(n.b, e - n.lengthSofar, t);
    }
  }
  class m extends g {
    getLength(e) {
      return i.A.cubicBezierLength(e);
    }
    getPointFromDistance(e, t, r) {
      return i.A.pointAtDistanceCubic(e, t, r);
    }
    getPointFromDistanceSecondPoint(e, t, r) {
      return i.A.pointAtDistanceFromSecondPointCubic(e, t, r);
    }
  }
  class f extends g {
    getLength(e) {
      return i.A.distance2Points(e.p1, e.p2);
    }
    getPointFromDistance(e, t, r) {
      return i.A.pointAtDistance(e.p1, e.p2, t, r);
    }
    getPointFromDistanceSecondPoint(e, t, r) {
      return i.A.pointAtDistanceFromSecondPoint(e.p1, e.p2, t, r);
    }
  }
  const y = new u();
};
