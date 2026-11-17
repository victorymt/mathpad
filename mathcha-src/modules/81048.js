/* module 81048 — 3473 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Ay: () => u,
    GU: () => f,
    cC: () => m,
    mt: () => y
  });
  var n = r(40927),
    i = r.n(n),
    o = r(19539),
    s = r(29315),
    a = r(2778),
    l = r(33535),
    c = r(88925),
    d = r(38070),
    h = r(391),
    p = r(84369);
  class u extends s.dV {
    render() {
      var e = h.A.getSettings(this.shape(), "cornerRadius"),
        t = f(this.shape(), e),
        r = c.A.pathsD(t);
      return i().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), this.getTransparentOnlyNoFill(r), i().createElement("path", {
        className: "real",
        d: r,
        style: this.style()
      }));
    }
  }
  class g extends s.US {}
  class m extends s.Au {
    getComponent() {
      return u;
    }
    getIcon() {
      var e = d.A.getIconSvgStyle();
      return {
        component: i().createElement("svg", {
          key: this.getType(),
          style: e
        }, i().createElement("rect", {
          x: "5",
          y: "6",
          width: "13",
          height: "9"
        }))
      };
    }
    getType() {
      return "rectangle";
    }
    getSettingsComponent() {
      return g;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: f(e)
      };
    }
    getSnapablePoints(e) {
      var t = e.data,
        r = t.p1,
        n = t.p2,
        i = o.A.getCenterPoint(r, n);
      return f(e).map(e => e.p2).concat((0, a.sE)(e), i);
    }
    getPaperPath(e) {
      var t = h.A.getSettings(e, "cornerRadius");
      return p.A.fromGenericLines(f(e, t));
    }
  }
  function f(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
      r = e.data,
      n = r.p1,
      i = r.p2,
      s = o.A.getPointsRect(e.data),
      a = o.A.pointsToLines(s);
    if (t <= 0) return l.A.genericLinesTransformed(e.data, a);
    var c = i.x - n.x,
      d = i.y - n.y,
      h = t < c / 2 ? t : c / 2,
      p = t < d / 2 ? t : d / 2,
      u = {
        x: n.x + h,
        y: n.y + p
      },
      g = {
        x: i.x - h,
        y: n.y + p
      },
      m = {
        x: i.x - h,
        y: i.y - p
      },
      f = {
        x: n.x + h,
        y: i.y - p
      },
      y = o.A.getLeftTopArc(u, h, p),
      v = o.A.getRightTopArc(g, h, p),
      b = o.A.getRightBottomArc(m, h, p),
      x = o.A.getLeftBottomArc(f, h, p),
      C = [];
    return C.push(y), o.A.distance2Points(a[0].p1, a[0].p2) > 2 * t && C.push({
      p1: o.A.addPoint(a[0].p1, {
        x: t,
        y: 0
      }),
      p2: o.A.addPoint(a[0].p2, {
        x: -t,
        y: 0
      })
    }), C.push(v), o.A.distance2Points(a[1].p1, a[1].p2) > 2 * t && C.push({
      p1: o.A.addPoint(a[1].p1, {
        x: 0,
        y: t
      }),
      p2: o.A.addPoint(a[1].p2, {
        x: 0,
        y: -t
      })
    }), C.push(b), o.A.distance2Points(a[2].p1, a[2].p2) > 2 * t && C.push({
      p1: o.A.addPoint(a[2].p1, {
        x: -t,
        y: 0
      }),
      p2: o.A.addPoint(a[2].p2, {
        x: t,
        y: 0
      })
    }), C.push(x), o.A.distance2Points(a[3].p1, a[3].p2) > 2 * t && C.push({
      p1: o.A.addPoint(a[3].p1, {
        x: 0,
        y: -t
      }),
      p2: o.A.addPoint(a[3].p2, {
        x: 0,
        y: t
      })
    }), l.A.genericLinesTransformed(e.data, C);
  }
  var y = new m();
};
