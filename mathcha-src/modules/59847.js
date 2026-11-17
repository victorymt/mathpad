/* module 59847 — 3741 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => u
  });
  var n = r(2543),
    i = r.n(n),
    o = r(19539),
    s = r(53020),
    a = r(94240),
    l = r(33535),
    c = r(30803),
    d = r(80541),
    h = r(84369);
  class p {
    flattenToLines(e) {
      return l.A.genericLinesTransformed(e.data, this.flattenPaperPath(e.path.paperData, e));
    }
    createShape(e, t) {
      var r,
        n = d.A.toPaperPathInstance(e).bounds,
        i = d.A.absolutePathToBox(e, h.A.paperRectToRectangle(n), !0),
        o;
      return {
        id: c.w.nextDiagramCompositeShapeId(),
        type: "path-data-shape",
        data: {
          p1: {
            x: n.left,
            y: n.top
          },
          p2: {
            x: n.right,
            y: n.bottom
          }
        },
        path: {
          paperData: i
        },
        style: t
      };
    }
    getAbsolutePaperPath(e) {
      return d.A.pathInBoxedToAbsolute(e.path.paperData, e.data, !1);
    }
    getPaperPathForImporting(e) {
      var t = e.data,
        r = t.p1,
        n = t.flipX,
        i = t.rotation,
        c = t.skewX,
        d = o.A.rectWidth(e.data),
        h = o.A.rectHeight(e.data),
        p = e.path.paperData,
        u = o.A.getCenterPoint(e.data),
        g = e => l.A.segmentPointTransformedFromDetails(u, i, c, n, e);
      return a.A.segmentTransform(e => {
        if (s.A.isSegmentPoint(e)) return g([e[0] * d + r.x, e[1] * h + r.y]);
        var t = e[0],
          n = e[1],
          i = e[2],
          o = g([t[0] * d + r.x, t[1] * h + r.y]);
        return [o, n ? s.A.segPointSubstract(g([n[0] * d + r.x, n[1] * h + r.y]), o) : [0, 0], i ? s.A.segPointSubstract(g([i[0] * d + r.x, i[1] * h + r.y]), o) : [0, 0]];
      }, p);
    }
    flattenPaperPath(e, t) {
      switch (e[0]) {
        case "Path":
          return this.flattenSimplePaperPath(e, t);
        case "CompoundPath":
          return this.flattenCompoundPaperPath(e, t);
      }
    }
    flattenSimplePaperPath(e, t) {
      return this.segmentsToLine(e[1].segments, e[1].closed, t);
    }
    segmentsToLine(e, t, r) {
      if (e.length <= 1) return [];
      for (var n = r.data.p1, a = o.A.rectWidth(r.data), l = o.A.rectHeight(r.data), c = new Array(e.length - 1), d = 0; d < e.length - 1; d++) {
        var h = e[d],
          p = e[d + 1];
        c[d] = this.segmentToLine(h, p, a, l, n);
      }
      if (t) {
        var u = s.A.getSegmentPoint(e[0]),
          g = s.A.getSegmentPoint(i().last(e));
        s.A.segPointEquals(u, g) || c.push(this.segmentToLine(i().last(e), e[0], a, l, n));
      }
      return c;
    }
    segmentToLine(e, t, r, n, i) {
      var o = s.A.getSegmentPoint(e),
        a = s.A.getSegmentPoint(t);
      if (s.A.isSegmentPoint(e) || s.A.isSegmentPoint(t)) return {
        p1: {
          x: o[0] * r + i.x,
          y: o[1] * n + i.y
        },
        p2: {
          x: a[0] * r + i.x,
          y: a[1] * n + i.y
        }
      };
      var l = s.A.getHandleOut(e),
        c = s.A.getHandleIn(t);
      return l && c ? {
        p1: {
          x: o[0] * r + i.x,
          y: o[1] * n + i.y
        },
        cp: {
          x: l[0] * r + i.x,
          y: l[1] * n + i.y
        },
        cp2: {
          x: c[0] * r + i.x,
          y: c[1] * n + i.y
        },
        p2: {
          x: a[0] * r + i.x,
          y: a[1] * n + i.y
        }
      } : {
        p1: {
          x: o[0] * r + i.x,
          y: o[1] * n + i.y
        },
        p2: {
          x: a[0] * r + i.x,
          y: a[1] * n + i.y
        }
      };
    }
    flattenCompoundPaperPath(e, t) {
      return i().flatMap(e[1].children, e => this.flattenPaperPath(e, t));
    }
  }
  const u = new p();
};
