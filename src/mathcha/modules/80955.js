/* module 80955 — 8995 chars */
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
        t = l.A.pathsD(e);
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
      a = t.arrowWidthPercentage,
      l = void 0 === a ? .5 : a,
      c = t.sizePercentage,
      d = void 0 === c ? .3 : c,
      p = t.bendRatio,
      u = void 0 === p ? .6 : p,
      g = t.downPercentage,
      m = void 0 === g ? .8 : g,
      f = s.A.rectWidth(e.data),
      y = s.A.rectHeight(e.data),
      v = Math.min(f, y),
      b = o * v,
      x = l * v,
      C = Math.min(v * d, x),
      S = y * m,
      A = Math.min(y - (x - C) / 2, (f - x / 2 + C / 2) / 2, S - b),
      w = r.y,
      E = r.y + C,
      k = r.y + S - b,
      O = r.y + S,
      D = n.y,
      P = r.x,
      M = r.x + C,
      I = n.x - x,
      T = n.x - x / 2 - C / 2,
      L = n.x - x / 2,
      R = n.x - x / 2 + C / 2,
      B = n.x,
      F = Math.max(A * u, 0),
      j = Math.max(0, F - C),
      _ = s.A.getLeftTopArc({
        x: P + F,
        y: w + F
      }, F, F),
      N = s.A.getLeftTopArcReverse({
        x: M + j,
        y: E + j
      }, j, j),
      z = s.A.getRightTopArc({
        x: R - F,
        y: w + F
      }, F, F),
      H = s.A.getRightTopArcReverse({
        x: T - j,
        y: E + j
      }, j, j);
    return h.A.genericLinesTransformed(e.data, [{
      p1: {
        x: P,
        y: D
      },
      p2: {
        x: P,
        y: w + F
      }
    }, _, {
      p1: {
        x: P + F,
        y: w
      },
      p2: {
        x: R - F,
        y: w
      }
    }, z, {
      p1: {
        x: R,
        y: w + F
      },
      p2: {
        x: R,
        y: k
      }
    }, {
      p1: {
        x: R,
        y: k
      },
      p2: {
        x: B,
        y: k
      }
    }, {
      p1: {
        x: B,
        y: k
      },
      p2: {
        x: L,
        y: O
      }
    }, {
      p1: {
        x: L,
        y: O
      },
      p2: {
        x: I,
        y: k
      }
    }, {
      p1: {
        x: I,
        y: k
      },
      p2: {
        x: T,
        y: k
      }
    }, {
      p1: {
        x: T,
        y: k
      },
      p2: {
        x: T,
        y: E + j
      }
    }, H, {
      p1: {
        x: T - j,
        y: E
      },
      p2: {
        x: M + j,
        y: E
      }
    }, N, {
      p1: {
        x: M,
        y: E + j
      },
      p2: {
        x: M,
        y: D
      }
    }, {
      p1: {
        x: M,
        y: D
      },
      p2: {
        x: P,
        y: D
      }
    }]);
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
          key: "u-turn-arrow"
        }, o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1px,1px)",
            transformOrigin: "50% 50%"
          },
          d: " M2.5,16.91 L2.5,9.6 C2.5,6.07 5.37,3.2 8.9,3.2 L10.13,3.2 C13.66,3.2 16.53,6.07 16.53,9.6 L16.53,10.32 L19.3,10.32 L14.81,14.06 L10.32,10.32 L13.09,10.32 L13.09,9.6 C13.09,7.97 11.76,6.64 10.13,6.64 L8.9,6.64 C7.27,6.64 5.94,7.97 5.94,9.6 L5.94,16.91 L2.5,16.91"
        }))
      };
    }
    getComponent() {
      return m;
    }
    getType() {
      return "u-turn-arrow";
    }
    getSettingsComponent() {
      return y;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: f(e)
      };
    }
    getSnapablePoints(e) {
      return f(e).map(e => e.p2);
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        a = i.p2,
        l = i.arrowPercentage,
        c = void 0 === l ? .3 : l,
        d = i.arrowWidthPercentage,
        p = void 0 === d ? .5 : d,
        u = i.sizePercentage,
        g = void 0 === u ? .3 : u,
        m = i.bendRatio,
        f = void 0 === m ? .6 : m,
        y = i.downPercentage,
        v = void 0 === y ? .8 : y,
        b = s.A.rectWidth(e.data),
        x = s.A.rectHeight(e.data),
        C = Math.min(b, x),
        S = c * C,
        A = p * C,
        w = Math.min(C * g, A),
        E = x * v,
        k = Math.min(x - (A - w) / 2, (b - A / 2 + w / 2) / 2, E - S),
        O = h.A.pointTransformed(e.data, s.A.clampPoint({
          x: a.x - A,
          y: o.y + E - S
        }, o, a)),
        D = h.A.pointTransformed(e.data, s.A.clampPoint({
          x: o.x + w,
          y: a.y
        }, o, a)),
        P = h.A.pointTransformed(e.data, s.A.clampPoint({
          x: a.x - A,
          y: a.y
        }, o, a)),
        M = h.A.pointTransformed(e.data, s.A.clampPoint({
          x: o.x + k * f,
          y: o.y
        }, o, a)),
        I = h.A.pointTransformed(e.data, s.A.clampPoint({
          x: a.x,
          y: o.y + E
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
      }, {
        key: "md5",
        type: "square",
        p: I
      }]);
    }
    createShape(e) {
      return super.createShape(g(g({}, e), {}, {
        shapeWidth: e.shapeWidth || 50,
        shapeHeight: e.shapeHeight || 70
      }));
    }
    moveControlPoint(e) {
      if ("md1" != e.key && "md2" != e.key && "md3" != e.key && "md4" != e.key && "md5" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data,
        r = t.p1,
        n = t.p2,
        i = t.arrowPercentage,
        o = void 0 === i ? .3 : i,
        a = t.arrowWidthPercentage,
        l = void 0 === a ? .5 : a,
        c = t.sizePercentage,
        p = void 0 === c ? .3 : c,
        u = t.downPercentage,
        g = void 0 === u ? .8 : u,
        m = s.A.rectWidth(e.shape.data),
        f = s.A.rectHeight(e.shape.data),
        y = Math.min(m, f),
        v = o * y,
        b = l * y,
        x = Math.min(y * p, b),
        C = f * g,
        S = Math.min(f - (b - x) / 2, (m - b / 2 + x / 2) / 2, C - v);
      if ("md1" == e.key) {
        var A = h.A.reversePoint(e.shape.data, e.point),
          w = d().clamp(A.y, r.y + x, r.y + C),
          E = (r.y + C - w) / y;
        return this.changeShapeData(e.shape, "arrowPercentage", E);
      }
      if ("md2" == e.key) {
        var k = h.A.reversePointFixedY(e.shape.data, n.y, e.point),
          O,
          D = (d().clamp(k.x, r.x, r.x + y) - r.x) / y;
        return this.changeShapeData(e.shape, "sizePercentage", D);
      }
      if ("md3" == e.key) {
        var P = h.A.reversePointFixedY(e.shape.data, n.y, e.point),
          M = d().clamp(P.x, n.x - y, n.x),
          I = (n.x - M) / y;
        return this.changeShapeData(e.shape, "arrowWidthPercentage", I);
      }
      if ("md4" == e.key) {
        var T = h.A.reversePointFixedY(e.shape.data, r.y, e.point),
          L,
          R = (d().clamp(T.x, r.x, r.x + S) - r.x) / S;
        return this.changeShapeData(e.shape, "bendRatio", R);
      }
      if ("md5" == e.key) {
        var B = h.A.reversePoint(e.shape.data, e.point),
          F,
          j = (d().clamp(B.y, r.y + x, n.y) - r.y) / f;
        return this.changeShapeData(e.shape, "downPercentage", j);
      }
    }
    getPaperPath(e) {
      return p.A.fromGenericLines(f(e));
    }
  }
  var b = new v();
};
