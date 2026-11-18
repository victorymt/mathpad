/* module 48852 — 5516 chars */
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
      s = void 0 === i ? .3 : i,
      a = t.arrowWidthPercentage,
      l = void 0 === a ? .4 : a,
      c = t.sizePercentage,
      h = void 0 === c ? .15 : c,
      p = o.A.rectWidth(e.data),
      u = o.A.rectHeight(e.data),
      g = p / 2,
      m = Math.min(g, u),
      f = m * l,
      y = m * h,
      v = u - f,
      b = m * s,
      x = r.y,
      C = r.y + b,
      S = r.y + u - 2 * f,
      A = r.y + v - y,
      w = r.y + v,
      E = r.y + v + y,
      k = n.y,
      O = r.x,
      D = r.x + b,
      P = r.x + g - f,
      M = r.x + g - y,
      I = r.x + g,
      T = r.x + g + y,
      L = r.x + g + f,
      R = r.x + p - b,
      B = n.x;
    return d.A.pointsTransformed(e.data, [{
      x: O,
      y: w
    }, {
      x: D,
      y: S
    }, {
      x: D,
      y: A
    }, {
      x: M,
      y: A
    }, {
      x: M,
      y: C
    }, {
      x: P,
      y: C
    }, {
      x: I,
      y: x
    }, {
      x: L,
      y: C
    }, {
      x: T,
      y: C
    }, {
      x: T,
      y: A
    }, {
      x: R,
      y: A
    }, {
      x: R,
      y: S
    }, {
      x: B,
      y: w
    }, {
      x: R,
      y: k
    }, {
      x: R,
      y: E
    }, {
      x: D,
      y: E
    }, {
      x: D,
      y: k
    }, {
      x: O,
      y: w
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
          key: "left-top-right-arrow"
        }, i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1px,1px)",
            transformOrigin: "50% 50%"
          },
          d: "   M2,12.33 L4.47,9.03 L4.47,11.1 L9.01,11.1 L9.01,5.01 L6.95,5.01 L10.25,2.53 L13.55,5.01 L11.49,5.01 L11.49,11.1 L16.02,11.1 L16.02,9.03 L18.5,12.33 L16.02,15.63 L16.02,13.57 L4.47,13.57 L4.47,15.63 Z"
        }))
      };
    }
    getComponent() {
      return p;
    }
    getType() {
      return "left-top-right-arrow";
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
      return u(e);
    }
    getBoundingRect(e) {
      var t = u(e);
      return o.A.getBoundingRectFromPoints(t);
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        s = i.p1,
        a = i.p2,
        l = i.arrowPercentage,
        c = void 0 === l ? .3 : l,
        h = i.arrowWidthPercentage,
        p = void 0 === h ? .4 : h,
        u = i.sizePercentage,
        g = void 0 === u ? .15 : u,
        m,
        f = o.A.rectWidth(e.data) / 2,
        y = o.A.rectHeight(e.data),
        v = Math.min(f, y),
        b = v * p,
        x = v * g,
        C = v * c,
        S = d.A.pointTransformed(e.data, {
          x: a.x,
          y: s.y + C
        }),
        A = d.A.pointTransformed(e.data, {
          x: s.x + f - x,
          y: s.y + C
        }),
        w = d.A.pointTransformed(e.data, {
          x: s.x + f - b,
          y: s.y
        });
      return n.concat([{
        key: "md1",
        type: "square",
        p: S
      }, {
        key: "md2",
        type: "square",
        p: A
      }, {
        key: "md3",
        type: "square",
        p: w
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key && "md2" != e.key && "md3" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data,
        r = t.p1,
        n = t.arrowPercentage,
        i = void 0 === n ? .3 : n,
        s = o.A.rectWidth(e.shape.data),
        a = o.A.rectHeight(e.shape.data),
        l = s / 2,
        h = Math.min(l, a),
        p = h * i;
      if ("md1" == e.key) {
        var u = d.A.reversePoint(e.shape.data, e.point),
          g,
          m = (c().clamp(u.y, r.y, r.y + h) - r.y) / h;
        return this.changeShapeData(e.shape, "arrowPercentage", m);
      }
      if ("md2" == e.key) {
        var f = d.A.reversePointFixedY(e.shape.data, r.y + p, e.point),
          y = c().clamp(f.x, r.x + l - h, r.x + l),
          v = (r.x + l - y) / h;
        return this.changeShapeData(e.shape, "sizePercentage", v);
      }
      if ("md3" == e.key) {
        var b = d.A.reversePointFixedY(e.shape.data, r.y, e.point),
          x = c().clamp(b.x, r.x + l - h, r.x + l),
          C = (r.x + l - x) / h;
        return this.changeShapeData(e.shape, "arrowWidthPercentage", C);
      }
    }
    getPaperPath(e) {
      return h.A.fromPoints(u(e));
    }
  }
  var f = new m();
};
