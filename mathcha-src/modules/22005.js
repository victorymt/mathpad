/* module 22005 — 5181 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => u
  });
  var n = r(40927),
    i = r.n(n),
    o = r(2543),
    s = r.n(o),
    a = r(19539),
    l = r(88925),
    c = r(38070),
    d = r(20243),
    h = r(94240);
  class p {
    paperPath(e, t, r) {
      var n;
      return arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? i().createElement("g", {
        className: r,
        style: t
      }, h.A.pathDFromPaperPathSplit(e).map((e, t) => i().createElement("path", {
        key: t,
        d: e.pathD,
        style: e.closed ? void 0 : {
          fill: "none"
        }
      }))) : i().createElement("path", {
        style: t,
        className: r,
        d: h.A.pathDFromPaperPath(e)
      });
    }
    fromHeadInfo(e, t, r) {
      if (!e) return null;
      var n = e.rotation,
        o = e.p,
        s = e.points ? this.fromPoints(e.points) : void 0,
        a = e.lines ? this.fromPaths(e.lines) : void 0,
        l = e.circle ? this.fromCircle(e.circle) : void 0,
        c = e.arc ? this.fromArc(e.arc) : void 0,
        h = !1 === e.stroke ? "none" : t.stroke,
        p = !1 === e.stroke ? void 0 : t.strokeOpacity,
        u = e.fill ? t.stroke : void 0,
        g = e.fill ? t.strokeOpacity : void 0,
        m,
        f = {
          stroke: h,
          fill: u,
          strokeWidth: t.strokeWidth || 1
        };
      return i().createElement("g", {
        key: r,
        style: f,
        stroke: h,
        strokeOpacity: p,
        fill: u,
        fillOpacity: g,
        transform: new d.Z().rotateAround(n, o.x, o.y, "deg").translate(o.x, o.y).toCssStyle()
      }, s, a, l, c);
    }
    fromPathInfo(e, t, r, n) {
      var o = l.A.pathsInfoD(e),
        s = n ? this.getStrokeDashArray(n.shaft, n.thickness) : void 0;
      return i().createElement("path", {
        className: t,
        strokeDasharray: s,
        style: r,
        d: o
      });
    }
    fromCircle(e, t, r, n) {
      if (!e) return null;
      var o = n ? this.getStrokeDashArray(n.shaft, n.thickness) : void 0;
      return i().createElement("circle", {
        className: t,
        strokeDasharray: o,
        cx: e.cp.x,
        cy: e.cp.y,
        r: e.r,
        style: r
      });
    }
    fromRectangleLike(e, t, r, n) {
      if (!e) return null;
      var o = n ? this.getStrokeDashArray(n.shaft, n.thickness) : void 0;
      return i().createElement("rect", {
        className: t,
        strokeDasharray: o,
        x: e.p1.x,
        y: e.p1.y,
        width: e.p2.x - e.p1.x,
        height: e.p2.y - e.p1.y,
        style: r
      });
    }
    fromPoints(e, t, r, n) {
      if (!e) return null;
      var o = l.A.getLineD(e),
        s = n ? this.getStrokeDashArray(n.shaft, n.thickness) : void 0;
      return i().createElement("path", {
        className: t,
        style: r,
        d: o,
        strokeDasharray: s
      });
    }
    fromPaths(e, t, r, n) {
      if (!e) return null;
      var o = l.A.pathsD(e),
        s = n ? this.getStrokeDashArray(n.shaft, n.thickness) : void 0;
      return i().createElement("path", {
        className: t,
        style: r,
        d: o,
        strokeDasharray: s
      });
    }
    fromArc(e, t, r, n) {
      var o = n ? this.getStrokeDashArray(n.shaft, n.thickness) : void 0;
      return i().createElement("path", {
        className: t,
        style: r,
        strokeDasharray: o,
        d: "M".concat(e.p1.x, ",").concat(e.p1.y, " A ").concat(e.rx, ",").concat(e.ry, " ").concat(e.xRotation, " 0,0 ").concat(e.p2.x, ",").concat(e.p2.y)
      });
    }
    getCubicControlPointGuides(e) {
      return s().flatMap(e, (e, t) => [i().createElement("line", {
        key: "c1" + t,
        className: "control-point-guide",
        x1: e.p1.x,
        y1: e.p1.y,
        x2: e.cp.x,
        y2: e.cp.y
      }), i().createElement("line", {
        key: "c2" + t,
        className: "control-point-guide",
        x1: e.p2.x,
        y1: e.p2.y,
        x2: e.cp2.x,
        y2: e.cp2.y
      })]);
    }
    getAddShape(e, t) {
      var r = "translate(".concat(e.x - 8, ",").concat(e.y - 9, ") ");
      return i().createElement("g", {
        className: "add-label",
        transform: r,
        onMouseDown: t
      }, i().createElement("path", {
        transform: "scale(0.41)",
        d: "M29.27,19.5h-6V13a2,2,0,1,0-4,0V19.5h-6a2,2,0,1,0,0,4h6v6a2,2,0,0,0,4,0v-6h6A2,2,0,0,0,29.27,19.5Z"
      }));
    }
    getStrokeDashArray(e, t) {
      return c.A.getStrokeDasharrayFromStrokeType(e, t);
    }
    getDoubleWaveLine(e, t, r, n) {
      var o = a.A.parallelLine(e, t, 1.5),
        s = a.A.parallelLine(e, t, -1.5);
      return i().createElement("g", null, i().createElement("path", {
        d: this.getWaveLineD(o.p1, o.p2, r, n)
      }), i().createElement("path", {
        d: this.getWaveLineD(s.p1, s.p2, r, n)
      }));
    }
    getWaveLine(e, t, r, n, o, s) {
      return i().createElement("path", {
        d: this.getWaveLineD(e, t, r, n, o, s)
      });
    }
    round2(e) {
      return +e.toFixed(2);
    }
    getWaveLineD(e, t, r, n, i, o) {
      return l.A.getWaveLineD(e, t, r, n, i, o);
    }
  }
  const u = new p();
};
