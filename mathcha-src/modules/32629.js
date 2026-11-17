/* module 32629 — 7047 chars */
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
        t = a.A.pathsD(e);
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
      s = void 0 === i ? .5 : i,
      a = t.arrowWidthPercentage,
      l = void 0 === a ? .5 : a,
      c = t.sizePercentage,
      h = void 0 === c ? .3 : c,
      p = t.bendRatio,
      u = void 0 === p ? .6 : p,
      g = o.A.rectWidth(e.data),
      m = o.A.rectHeight(e.data),
      f = Math.min(g, m),
      y = Math.min(s * f, g),
      v = Math.min(l * f, m),
      b = Math.min(f * h, v),
      x = Math.min(m - (v - b) / 2, g - y),
      C = r.y,
      S = r.y + v / 2 - b / 2,
      A = r.y + v / 2,
      w = r.y + v / 2 + b / 2,
      E = r.y + v,
      k = n.y,
      O = r.x,
      D = r.x + b,
      P = n.x - y,
      M = n.x,
      I = x * u,
      T = Math.max(0, I - b),
      L = o.A.getLeftTopArc({
        x: O + I,
        y: S + I
      }, I, I),
      R = o.A.getLeftTopArcReverse({
        x: D + T,
        y: w + T
      }, T, T);
    return d.A.genericLinesTransformed(e.data, [{
      p1: {
        x: O,
        y: k
      },
      p2: {
        x: O,
        y: S + I
      }
    }, {
      p1: {
        x: O,
        y: S + I
      },
      p2: {
        x: O + I,
        y: S
      },
      cp: L.cp,
      cp2: L.cp2
    }, {
      p1: {
        x: O + I,
        y: S
      },
      p2: {
        x: P,
        y: S
      }
    }, {
      p1: {
        x: P,
        y: S
      },
      p2: {
        x: P,
        y: C
      }
    }, {
      p1: {
        x: P,
        y: C
      },
      p2: {
        x: M,
        y: A
      }
    }, {
      p1: {
        x: M,
        y: A
      },
      p2: {
        x: P,
        y: E
      }
    }, {
      p1: {
        x: P,
        y: E
      },
      p2: {
        x: P,
        y: w
      }
    }, {
      p1: {
        x: P,
        y: w
      },
      p2: {
        x: D + T,
        y: w
      }
    }, {
      p1: {
        x: D + T,
        y: w
      },
      p2: {
        x: D,
        y: w + T
      },
      cp: R.cp,
      cp2: R.cp2
    }, {
      p1: {
        x: D,
        y: w + T
      },
      p2: {
        x: D,
        y: k
      }
    }, {
      p1: {
        x: D,
        y: k
      },
      p2: {
        x: O,
        y: k
      }
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
          key: "bend-arrow"
        }, i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,1px)",
            transformOrigin: "50% 50%"
          },
          d: " M3.15,16.53 L3.15,10.04 C3.15,7.17 5.47,4.85 8.34,4.85 L13.26,4.85 L13.26,2.91 L19,6.63 L13.26,10.36 L13.26,8.42 L8.34,8.42 M6.72,10.04 C6.72,9.14 7.44,8.42 8.34,8.42 M6.72,10.04 L6.72,16.53 L3.15,16.53"
        }))
      };
    }
    getComponent() {
      return p;
    }
    getType() {
      return "bend-arrow";
    }
    getSettingsComponent() {
      return g;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: u(e)
      };
    }
    getSnapablePoints(e) {
      return u(e).map(e => e.p2);
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        s = i.p1,
        a = i.p2,
        l = i.arrowPercentage,
        c = void 0 === l ? .5 : l,
        h = i.arrowWidthPercentage,
        p = void 0 === h ? .5 : h,
        u = i.sizePercentage,
        g = void 0 === u ? .3 : u,
        m = i.bendRatio,
        f = void 0 === m ? .6 : m,
        y = o.A.rectWidth(e.data),
        v = o.A.rectHeight(e.data),
        b = Math.min(y, v),
        x = c * b,
        C = p * b,
        S = Math.min(b * g, C),
        A = Math.min(v - (C - S) / 2, y - x),
        w = d.A.pointTransformed(e.data, o.A.clampPoint({
          x: s.x + y - x,
          y: s.y
        }, s, a)),
        E = d.A.pointTransformed(e.data, o.A.clampPoint({
          x: s.x + S,
          y: a.y
        }, s, a)),
        k = d.A.pointTransformed(e.data, o.A.clampPoint({
          x: a.x,
          y: s.y + C
        }, s, a)),
        O = d.A.pointTransformed(e.data, o.A.clampPoint({
          x: s.x + A * f,
          y: s.y
        }, s, a));
      return n.concat([{
        key: "md1",
        type: "square",
        p: w
      }, {
        key: "md2",
        type: "square",
        p: E
      }, {
        key: "md3",
        type: "square",
        p: k
      }, {
        key: "md4",
        type: "square",
        p: O
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key && "md2" != e.key && "md3" != e.key && "md4" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data,
        r = t.p1,
        n = t.p2,
        i = t.arrowPercentage,
        s = void 0 === i ? .5 : i,
        a = t.arrowWidthPercentage,
        l = void 0 === a ? .5 : a,
        h = t.sizePercentage,
        p = void 0 === h ? .3 : h,
        u = e.shape.data,
        g = o.A.rectWidth(e.shape.data),
        m = o.A.rectHeight(e.shape.data),
        f = Math.min(g, m),
        y = s * f,
        v = l * f,
        b = Math.min(f * p, v),
        x = Math.min(m - (v - b) / 2, g - y);
      if ("md1" == e.key) {
        var C = d.A.reversePointFixedY(u, r.y, e.point),
          S = c().clamp(C.x, r.x, n.x),
          A = (n.x - S) / f;
        return this.changeShapeData(e.shape, "arrowPercentage", A);
      }
      if ("md2" == e.key) {
        var w = d.A.reversePointFixedY(u, n.y, e.point),
          E,
          k = (c().clamp(w.x, r.x, r.x + f) - r.x) / f;
        return this.changeShapeData(e.shape, "sizePercentage", k);
      }
      if ("md3" == e.key) {
        var O = d.A.reversePoint(u, e.point),
          D,
          P = (c().clamp(O.y, r.y, n.y) - r.y) / f;
        return this.changeShapeData(e.shape, "arrowWidthPercentage", P);
      }
      if ("md4" == e.key) {
        var M = d.A.reversePointFixedY(u, r.y, e.point),
          I,
          T = (c().clamp(M.x, r.x, r.x + x) - r.x) / x;
        return this.changeShapeData(e.shape, "bendRatio", T);
      }
    }
    getPaperPath(e) {
      return h.A.fromGenericLines(u(e));
    }
  }
  var f = new m();
};
