/* module 59074 — 5611 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    f: () => g
  });
  var n = r(64467),
    i = r(2543),
    o = r.n(i),
    s = r(30803),
    a = r(19539),
    l = r(61848),
    c = r(86835),
    d = r(391);
  function h(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? h(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class u {
    addPointsInside(e, t, r) {
      return o().map(e, e => {
        if (c.A.isStraightLineArrow(e)) {
          var n = g.addPointsInsidePoints(e.data, t, r);
          return l.A.setProp(e, "data", n);
        }
        return e;
      });
    }
    addPointsTo(e, t, r) {
      return o().map(e, e => {
        if (c.A.isStraightLineArrow(e) || c.A.isPolygon(e)) {
          var n = this.addNewPointToPoints(e.data, t, r.straight);
          return l.A.setProp(e, "data", n);
        }
        var i = d.A.getSettings(e, "isControlPointBreak");
        if (c.A.isCubicLineArrow(e)) {
          var o = this.addNewBeizer(e.data, !i, t, !1, r.curve);
          return l.A.setProp(e, "data", o);
        }
        if (c.A.isPolygonCurve(e)) {
          var s = this.addNewBeizer(e.data, !i, t, !0, r.curve);
          return l.A.setProp(e, "data", s);
        }
        return e;
      });
    }
    splitStraightLineInside(e, t, r) {
      var n = o().clamp(t || 0, 1, e.data.length - 1),
        i = n - 1,
        l = i <= 0 ? [] : [p(p({}, e), {}, {
          id: s.Z.nextDiagramArrowId(),
          data: e.data.slice(0, i + 1)
        })],
        c = n >= e.data.length - 1 ? [] : [p(p({}, e), {}, {
          id: s.Z.nextDiagramArrowId(),
          data: e.data.slice(n)
        })],
        d = [],
        h = {
          p1: e.data[i],
          p2: e.data[n]
        },
        u = e.data[i];
      return o().times(r, t => {
        var n = a.A.splitPath(h, 1 / (r + 1) * (t + 1));
        d.push(p(p({}, e), {}, {
          id: s.Z.nextDiagramArrowId(),
          data: [u, n[0].p2]
        })), u = n[0].p2, t >= r - 1 && d.push(p(p({}, e), {}, {
          id: s.Z.nextDiagramArrowId(),
          data: [n[1].p1, n[1].p2]
        }));
      }), l.concat(d).concat(c);
    }
    addPointsInsidePoints(e, t, r) {
      var n = o().clamp(t || 0, 1, e.length - 1),
        i = n - 1,
        s = [],
        c = {
          p1: e[i],
          p2: e[n]
        };
      return o().times(r, e => {
        var t = a.A.splitPath(c, 1 / (r + 1) * (e + 1));
        s.push(t[0].p2);
      }), l.A.insertMultiple(e, i + 1, s);
    }
    addNewPointToPoints(e, t, r) {
      var n = e[t = void 0 === t ? e.length - 1 : t];
      return l.A.insert(e, t + 1, {
        x: n.x + r.x,
        y: n.y + r.y
      });
    }
    addNewBeizer(e, t, r, n, i) {
      if ((r = n ? void 0 === r ? e.length - 1 : r : void 0 === r ? e.length : r) > e.length - 1) {
        var o = e[e.length - 1],
          s = {
            p1: o.p2,
            p2: a.A.addPoint(o.p2, i),
            cp: {
              dx: 25,
              dy: -25
            },
            cp2: {
              dx: -25,
              dy: 25
            }
          },
          c = l.A.insert(e, r + 1, s);
        return t ? a.A.smoothBeziers(c) : c;
      }
      var d = e[r],
        h = a.A.toAbsoluteControlPointCubic(d),
        p = a.A.splitBezier(h, .5),
        u = a.A.toRelativeControlPointCubic(p[0]),
        g = a.A.toRelativeControlPointCubic(p[1]),
        m = l.A.setIndex(e, r, u);
      return m = l.A.insert(m, r + 1, g), t ? a.A.smoothBeziers(m) : m;
    }
    removeBezier(e, t, r) {
      return 0 == t ? e = l.A.remove(e, t) : t > e.length - 1 ? e = l.A.remove(e, t - 1) : (e = l.A.setIndex(e, t - 1, {
        p1: e[t - 1].p1,
        p2: e[t].p2,
        cp: e[t - 1].cp,
        cp2: e[t - 1].cp2
      }), e = l.A.remove(e, t)), r ? a.A.smoothBeziers(e) : e;
    }
    removeBezierClosed(e, t, r) {
      var n = a.A.previousIndexLoop(t, e.length);
      return e = l.A.setIndex(e, n, {
        p1: e[n].p1,
        p2: e[t].p2,
        cp: e[n].cp,
        cp2: e[n].cp2
      }), e = l.A.remove(e, t), r ? a.A.smoothBeziers(e, !0) : e;
    }
    removeControlPoint(e, t) {
      var r = e;
      if (c.A.isStraightLineArrow(e)) {
        if (e.data.length <= 2) return e;
        var n = a.A.removePointFromPoints(e.data, t.index);
        r = l.A.setProp(e, "data", n);
      }
      if (c.A.isPolygon(e)) {
        if (e.data.length <= 3) return e;
        var i = a.A.removePointFromPoints(e.data, t.index);
        r = l.A.setProp(e, "data", i);
      }
      var o = d.A.getSettings(e, "isControlPointBreak");
      if (c.A.isCubicLineArrow(e)) {
        if (e.data.length <= 1) return e;
        var s = this.removeBezier(e.data, t.index, !o);
        r = l.A.setProp(e, "data", s);
      }
      if (c.A.isPolygonCurve(e)) {
        if (e.data.length <= 2) return e;
        var h = this.removeBezierClosed(e.data, t.index, !o);
        r = l.A.setProp(e, "data", h);
      }
      return r;
    }
  }
  var g = new u();
};
