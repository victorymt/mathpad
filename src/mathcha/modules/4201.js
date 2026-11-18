/* module 4201 — 5750 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    U: () => u,
    mt: () => f
  });
  var n = r(40927),
    i = r.n(n),
    o = r(19539),
    s = r(29315),
    a = r(88925),
    l = r(2543),
    c = r.n(l),
    d = r(33535),
    h = r(84369);
  class p extends s.dV {
    render() {
      var e = u(this.shape()),
        t = a.A.getLineD(e);
      return i().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), this.getTransparentOnlyNoFill(t), i().createElement("path", {
        className: "real",
        d: t,
        style: this.style()
      }));
    }
  }
  function u(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.arrowPercentage,
      s = void 0 === i ? .4 : i,
      a = t.arrowWidthPercentage,
      l = void 0 === a ? .4 : a,
      c = t.sizePercentage,
      h = void 0 === c ? .15 : c,
      p = o.A.rectWidth(e.data),
      u = o.A.rectHeight(e.data),
      g = u / 2,
      m = p / 2,
      f = Math.min(m, g),
      y = r.y,
      v = r.y + f * s,
      b = r.y + g - l * f,
      x = r.y + g - f * h,
      C = r.y + g,
      S = r.y + g + f * h,
      A = r.y + g + l * f,
      w = r.y + u - f * s,
      E = n.y,
      k = r.x,
      O = r.x + f * s,
      D = r.x + m - l * f,
      P = r.x + m - f * h,
      M = r.x + m,
      I = r.x + m + f * h,
      T = r.x + m + l * f,
      L = r.x + p - f * s,
      R = n.x;
    return d.A.pointsTransformed(e.data, [{
      x: D,
      y: v
    }, {
      x: M,
      y
    }, {
      x: T,
      y: v
    }, {
      x: I,
      y: v
    }, {
      x: I,
      y: x
    }, {
      x: L,
      y: x
    }, {
      x: L,
      y: b
    }, {
      x: R,
      y: C
    }, {
      x: L,
      y: A
    }, {
      x: L,
      y: S
    }, {
      x: I,
      y: S
    }, {
      x: I,
      y: w
    }, {
      x: T,
      y: w
    }, {
      x: M,
      y: E
    }, {
      x: D,
      y: w
    }, {
      x: P,
      y: w
    }, {
      x: P,
      y: S
    }, {
      x: O,
      y: S
    }, {
      x: O,
      y: A
    }, {
      x: k,
      y: C
    }, {
      x: O,
      y: b
    }, {
      x: O,
      y: x
    }, {
      x: P,
      y: x
    }, {
      x: P,
      y: v
    }, {
      x: D,
      y: v
    }]);
  }
  class g extends s.US {}
  class m extends s.Au {
    getIcon() {
      return {
        caption: "",
        component: i().createElement("svg", {
          style: {
            width: 23,
            height: 20,
            position: "relative"
          },
          key: "quad-arrow"
        }, i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1px,1px)",
            transformOrigin: "50% 50%"
          },
          d: "  M7.14,4.48 L10.29,2 L13.43,4.48 L11.53,4.48 L11.53,8.03 L16.09,8.03 L16.09,6.12 L18.58,9.27 L16.09,12.41 L16.09,10.5 L11.53,10.5 L11.53,14.05 L13.43,14.05 L10.29,16.53 L7.14,14.05 L9.05,14.05 L9.05,10.5 L4.48,10.5 L4.48,12.41 L2,9.27 L4.48,6.12 L4.48,8.03 L9.05,8.03 L9.05,4.48 Z"
        }))
      };
    }
    getComponent() {
      return p;
    }
    getType() {
      return "quad-arrow";
    }
    getSettingsComponent() {
      return g;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: o.A.pointsToLines(u(e))
      };
    }
    getSnapablePoints(e) {
      return u(e).concat(o.A.getCenterPoint(e.data));
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        s = i.p1,
        a = i.p2,
        l = i.arrowPercentage,
        c = void 0 === l ? .4 : l,
        h = i.arrowWidthPercentage,
        p = void 0 === h ? .4 : h,
        u = i.sizePercentage,
        g = void 0 === u ? .15 : u,
        m = o.A.rectWidth(e.data),
        f,
        y = o.A.rectHeight(e.data) / 2,
        v = m / 2,
        b = Math.min(v, y),
        x = d.A.pointTransformed(e.data, {
          x: a.x,
          y: s.y + b * c
        }),
        C = d.A.pointTransformed(e.data, {
          x: s.x + v - b * g,
          y: s.y + b * c
        }),
        S = d.A.pointTransformed(e.data, {
          x: s.x + v - b * p,
          y: s.y
        });
      return n.concat([{
        key: "md1",
        type: "square",
        p: x
      }, {
        key: "md2",
        type: "square",
        p: C
      }, {
        key: "md3",
        type: "square",
        p: S
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key && "md2" != e.key && "md3" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data,
        r = t.p1,
        n = t.arrowPercentage,
        i = void 0 === n ? .4 : n,
        s = o.A.rectWidth(e.shape.data),
        a,
        l = o.A.rectHeight(e.shape.data) / 2,
        h = s / 2,
        p = Math.min(h, l);
      if ("md1" == e.key) {
        var u = d.A.reversePoint(e.shape.data, e.point),
          g,
          m = (c().clamp(u.y, r.y, r.y + p) - r.y) / p;
        return this.changeShapeData(e.shape, "arrowPercentage", m);
      }
      if ("md2" == e.key) {
        var f = d.A.reversePointFixedY(e.shape.data, r.y + p * i, e.point),
          y = c().clamp(f.x, r.x + h - p, r.x + h),
          v = (r.x + h - y) / p;
        return this.changeShapeData(e.shape, "sizePercentage", v);
      }
      if ("md3" == e.key) {
        var b = d.A.reversePointFixedY(e.shape.data, r.y, e.point),
          x = c().clamp(b.x, r.x + h - p, r.x + h),
          C = (r.x + h - x) / p;
        return this.changeShapeData(e.shape, "arrowWidthPercentage", C);
      }
    }
    getPaperPath(e) {
      return h.A.fromPoints(u(e));
    }
  }
  var f = new m();
};
