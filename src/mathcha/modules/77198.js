/* module 77198 — 7515 chars */
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
        t = e.slice(0, 3),
        r = e.slice(3),
        n = l.A.pathsD(t),
        i = l.A.pathsD(r);
      return o().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), o().createElement("path", {
        className: "transparent no-print",
        d: n,
        style: this.transparentStyle()
      }), o().createElement("path", {
        className: "transparent no-print",
        d: i,
        style: this.transparentStyle()
      }), o().createElement("path", {
        className: "real",
        d: n,
        style: this.style()
      }), o().createElement("path", {
        className: "real",
        d: i,
        style: this.style()
      }));
    }
  }
  function f(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.arrowPercentage,
      o = void 0 === i ? .4 : i,
      a = t.sizePercentage,
      l = void 0 === a ? .3 : a,
      c = t.arrowWidthPercentage,
      d = void 0 === c ? .5 : c,
      p = s.A.rectWidth(e.data),
      u = s.A.rectHeight(e.data),
      g = Math.min(p, u),
      m = g * d,
      f = g * Math.min(o, .9),
      y = Math.min(g * l, m),
      v = r.y,
      b = n.y - m / 2 - y / 2,
      x = n.y - m / 2,
      C = n.y - m / 2 + y / 2,
      S = r.x,
      A = r.x + f,
      w = n.x,
      E = s.A.ellipseToCubicBeziers({
        x: S - p,
        y: v
      }, {
        x: w,
        y: b
      }),
      k = s.A.ellipseToCubicBeziers({
        x: S - p,
        y: v + y
      }, {
        x: w,
        y: C
      }),
      O = E[1],
      D = s.A.reverseBezierDirection(k[1]),
      P = E[2],
      M = s.A.reverseBezierDirection(k[2]),
      I = {
        p1: {
          x: A,
          y: n.y
        },
        p2: {
          x: A,
          y: r.y
        }
      },
      T = s.A.splitBezierByLine(P, I)[0] || P,
      L = s.A.splitBezierByLine(M, I)[1] || M,
      R = (m - y) / 2;
    return h.A.genericLinesTransformed(e.data, [D, {
      p1: {
        x: D.p2.x,
        y: D.p2.y
      },
      p2: {
        x: O.p1.x,
        y: O.p1.y
      }
    }, O, T, {
      p1: {
        x: A,
        y: T.p2.y
      },
      p2: {
        x: A,
        y: T.p2.y - R
      }
    }, {
      p1: {
        x: A,
        y: T.p2.y - R
      },
      p2: {
        x: S,
        y: x
      }
    }, {
      p1: {
        x: S,
        y: x
      },
      p2: {
        x: A,
        y: L.p1.y + R
      }
    }, {
      p1: {
        x: A,
        y: L.p1.y + R
      },
      p2: {
        x: A,
        y: L.p1.y
      }
    }, L, {
      p2: {
        x: L.p2.x,
        y: L.p2.y
      },
      p1: {
        x: L.p2.x,
        y: L.p2.y - y
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
          key: "curve-right-arrow"
        }, o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,1px) scale(-1,1)",
            transformOrigin: "50% 50%"
          },
          d: " M3.5,7.16 C3.5,4.31 9.94,2 17.88,2 L17.88,5.38 C9.94,5.38 3.5,7.69 3.5,10.54"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,1px)  scale(-1,1)",
            transformOrigin: "50% 50%"
          },
          d: " M3.5,10.54 C3.5,12.73 7.3,14.6 12.66,15.35 L12.66,17.28 L17.88,14.01 L12.66,10.03 L12.66,11.97 C7.3,11.22 3.5,9.35 3.5,7.16 M3.5,10.54 L3.5,7.16"
        }))
      };
    }
    getComponent() {
      return m;
    }
    getType() {
      return "curve-right-arrow";
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
    createShape(e) {
      var t = super.createShape(g(g({}, e), {}, {
        shapeWidth: e.shapeWidth || 50,
        shapeHeight: e.shapeHeight || 70
      }));
      return t.style = {
        fillColor: [255, 255, 255, 1]
      }, t;
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        a = i.p2,
        l = i.arrowPercentage,
        c = void 0 === l ? .4 : l,
        d = i.sizePercentage,
        p = void 0 === d ? .3 : d,
        u = i.arrowWidthPercentage,
        g = void 0 === u ? .5 : u,
        m = s.A.rectWidth(e.data),
        f = s.A.rectHeight(e.data),
        y = Math.min(m, f),
        v = y * g,
        b = y * p,
        x = y * c,
        C = h.A.pointTransformed(e.data, {
          x: o.x + x,
          y: a.y
        }),
        S = h.A.pointTransformed(e.data, {
          x: o.x,
          y: o.y + b
        }),
        A = h.A.pointTransformed(e.data, {
          x: o.x,
          y: a.y - v
        });
      return n.concat([{
        key: "md1",
        type: "square",
        p: C
      }, {
        key: "md2",
        type: "square",
        p: S
      }, {
        key: "md3",
        type: "square",
        p: A
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key && "md2" != e.key && "md3" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data,
        r = t.p1,
        n = t.p2,
        i = n.x - r.x,
        o = n.y - r.y,
        s = Math.min(i, o);
      if ("md1" == e.key) {
        var a = h.A.reversePointFixedY(e.shape.data, n.y, e.point),
          l,
          c = (d().clamp(a.x, r.x, r.x + s) - r.x) / s;
        return this.changeShapeData(e.shape, "arrowPercentage", c);
      }
      if ("md2" == e.key) {
        var p = h.A.reversePoint(e.shape.data, e.point),
          u,
          g = (d().clamp(p.y, r.y, r.y + s) - r.y) / s;
        return this.changeShapeData(e.shape, "sizePercentage", g);
      }
      if ("md3" == e.key) {
        var m = h.A.reversePoint(e.shape.data, e.point),
          f = d().clamp(m.y, n.y - s, n.y),
          y = (n.y - f) / s;
        return this.changeShapeData(e.shape, "arrowWidthPercentage", y);
      }
    }
    getPaperPath(e) {
      return p.A.fromGenericLines(f(e));
    }
  }
  var b = new v();
};
