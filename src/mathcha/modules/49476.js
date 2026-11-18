/* module 49476 — 8047 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    U: () => f,
    mt: () => b
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(19539),
    a = r(29315),
    l = r(88925),
    c = r(2543),
    d = r.n(c),
    h = r(33535),
    p = r(84369);
  function u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function g(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class m extends a.dV {
    render() {
      var e = f(this.shape()),
        t = l.A.getLineD(e);
      return o().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), this.getTransparentOnlyNoFill(t), o().createElement("path", {
        className: "real",
        d: t,
        style: this.style()
      }));
    }
  }
  function f(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.arrowPercentage,
      o = void 0 === i ? .3 : i,
      a = t.sizePercentage,
      l = void 0 === a ? .3 : a,
      c = t.arrowWidthPercentage,
      d = void 0 === c ? .3 : c,
      p = t.calloutWidthPercentage,
      u = void 0 === p ? .5 : p,
      g = s.A.rectWidth(e.data),
      m = s.A.rectHeight(e.data),
      f = g / 2,
      y = m / 2,
      v = Math.min(f, y),
      b = Math.min(g, m),
      x = Math.min(o * v, v),
      C = Math.min(d * b, b),
      S = Math.min(l * v, C),
      A = Math.min(u * y, v - x),
      w = Math.min(u * f, v - x),
      E = r.y,
      k = r.y + x,
      O = r.y + y - A,
      D = r.y + y - C / 2,
      P = r.y + y - S / 2,
      M = r.y + y,
      I = r.y + y + S / 2,
      T = r.y + y + C / 2,
      L = r.y + y + A,
      R = n.y - x,
      B = n.y,
      F = r.x,
      j = r.x + x,
      _ = r.x + f - w,
      N = r.x + f - C / 2,
      z = r.x + f - S / 2,
      H = r.x + f,
      W = r.x + f + S / 2,
      V = r.x + f + C / 2,
      U = r.x + f + w,
      q = n.x - x,
      G = n.x;
    return h.A.pointsTransformed(e.data, s.A.clampPoints([{
      x: F,
      y: M
    }, {
      x: j,
      y: D
    }, {
      x: j,
      y: P
    }, {
      x: _,
      y: P
    }, {
      x: _,
      y: O
    }, {
      x: z,
      y: O
    }, {
      x: z,
      y: k
    }, {
      x: N,
      y: k
    }, {
      x: H,
      y: E
    }, {
      x: V,
      y: k
    }, {
      x: W,
      y: k
    }, {
      x: W,
      y: O
    }, {
      x: U,
      y: O
    }, {
      x: U,
      y: P
    }, {
      x: q,
      y: P
    }, {
      x: q,
      y: D
    }, {
      x: G,
      y: M
    }, {
      x: q,
      y: T
    }, {
      x: q,
      y: I
    }, {
      x: U,
      y: I
    }, {
      x: U,
      y: L
    }, {
      x: W,
      y: L
    }, {
      x: W,
      y: R
    }, {
      x: V,
      y: R
    }, {
      x: H,
      y: B
    }, {
      x: N,
      y: R
    }, {
      x: z,
      y: R
    }, {
      x: z,
      y: L
    }, {
      x: _,
      y: L
    }, {
      x: _,
      y: I
    }, {
      x: j,
      y: I
    }, {
      x: j,
      y: T
    }, {
      x: F,
      y: M
    }], r, n));
  }
  class y extends a.US {}
  class v extends a.Au {
    getIcon() {
      return {
        caption: "",
        component: o().createElement("svg", {
          style: {
            width: 23,
            height: 20,
            position: "relative"
          },
          key: "callout-quad-arrow"
        }, o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1.5px,0.5px) ",
            transformOrigin: "50% 50%"
          },
          d: " M1.6,10.1 L3.85,7.85 L3.85,8.98 L6.8,8.98 L6.8,7.33 L8.73,7.33 L8.73,4.85 L7.6,4.85 L9.85,2.6 L12.1,4.85 L10.98,4.85 L10.98,7.33 L12.9,7.33 L12.9,8.98 L15.85,8.98 L15.85,7.85 L18.1,10.1 L15.85,12.35 L15.85,11.23 L12.9,11.23 L12.9,12.87 L10.98,12.87 L10.98,15.35 L12.1,15.35 L9.85,17.6 L7.6,15.35 L8.73,15.35 L8.73,12.87 L6.8,12.87 L6.8,11.23 L3.85,11.23 L3.85,12.35 Z"
        }))
      };
    }
    getComponent() {
      return m;
    }
    getType() {
      return "callout-quad-arrow";
    }
    getSettingsComponent() {
      return y;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: s.A.pointsToLines(f(e))
      };
    }
    getSnapablePoints(e) {
      return f(e);
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        a = i.p2,
        l = i.arrowPercentage,
        c = void 0 === l ? .3 : l,
        d = i.sizePercentage,
        p = void 0 === d ? .3 : d,
        u = i.arrowWidthPercentage,
        g = void 0 === u ? .3 : u,
        m = i.calloutWidthPercentage,
        f = void 0 === m ? .5 : m,
        y = s.A.rectWidth(e.data),
        v = s.A.rectHeight(e.data),
        b = y / 2,
        x = v / 2,
        C = Math.min(b, x),
        S = Math.min(y, v),
        A = Math.min(c * C, C),
        w = Math.min(g * S, S),
        E = Math.min(p * C, w),
        k = Math.min(f * b, C - A),
        O = h.A.pointTransformed(e.data, s.A.clampPoint({
          x: a.x - A,
          y: o.y
        }, o, a)),
        D = h.A.pointTransformed(e.data, s.A.clampPoint({
          x: a.x - A,
          y: o.y + x - E / 2
        }, o, a)),
        P = h.A.pointTransformed(e.data, s.A.clampPoint({
          x: a.x,
          y: o.y + x - w / 2
        }, o, a)),
        M = h.A.pointTransformed(e.data, s.A.clampPoint({
          x: o.x + b + k,
          y: a.y
        }, o, a));
      return n.concat([{
        key: "md1",
        type: "square",
        p: O
      }, {
        key: "md2",
        type: "square",
        p: D
      }, {
        key: "md3",
        type: "square",
        p: P
      }, {
        key: "md4",
        type: "square",
        p: M
      }]);
    }
    createShape(e) {
      return super.createShape(g(g({}, e), {}, {
        shapeWidth: e.shapeWidth || 110,
        shapeHeight: e.shapeHeight || 100
      }));
    }
    moveControlPoint(e) {
      if ("md1" != e.key && "md2" != e.key && "md3" != e.key && "md4" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data,
        r = t.p1,
        n = t.p2,
        i = n.x - r.x,
        o = n.y - r.y,
        s = i / 2,
        a = o / 2,
        l = Math.min(s, a);
      if ("md1" == e.key) {
        var c = h.A.reversePointFixedY(e.shape.data, r.y, e.point),
          p = d().clamp(c.x, n.x - s, n.x),
          u = (n.x - p) / l;
        return this.changeShapeData(e.shape, "arrowPercentage", u);
      }
      if ("md2" == e.key) {
        var g = h.A.reversePoint(e.shape.data, e.point),
          m = r.y + o / 2,
          f,
          y = (m - d().clamp(g.y, m - o / 2, m)) / l;
        return this.changeShapeData(e.shape, "sizePercentage", y);
      }
      if ("md3" == e.key) {
        var v = h.A.reversePoint(e.shape.data, e.point),
          b = d().clamp(v.y, r.y, r.y + a),
          x = (r.y + a - b) / l;
        return this.changeShapeData(e.shape, "arrowWidthPercentage", x);
      }
      if ("md4" == e.key) {
        var C = h.A.reversePointFixedY(e.shape.data, n.y, e.point),
          S,
          A = (d().clamp(C.x, r.x + i / 2, n.x) - (r.x + i / 2)) / (i / 2);
        return this.changeShapeData(e.shape, "calloutWidthPercentage", A);
      }
    }
    getPaperPath(e) {
      return p.A.fromPoints(f(e));
    }
  }
  var b = new v();
};
