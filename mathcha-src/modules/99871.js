/* module 99871 — 6659 chars */
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
      d = void 0 === c ? .6 : c,
      p = t.calloutWidthPercentage,
      u = void 0 === p ? .5 : p,
      g = s.A.rectWidth(e.data),
      m = s.A.rectHeight(e.data),
      f = Math.min(g, m),
      y = o * f,
      v = d * f,
      b = Math.min(l * f, v),
      x = Math.min(u * g, g - y),
      C = r.y,
      S = r.y + m / 2 - v / 2,
      A = r.y + m / 2 - b / 2,
      w = r.y + m / 2,
      E = r.y + m / 2 + b / 2,
      k = r.y + m / 2 + v / 2,
      O = n.y,
      D = r.x,
      P = r.x + x,
      M = n.x - y,
      I = n.x;
    return h.A.pointsTransformed(e.data, s.A.clampPoints([{
      x: D,
      y: C
    }, {
      x: P,
      y: C
    }, {
      x: P,
      y: A
    }, {
      x: M,
      y: A
    }, {
      x: M,
      y: S
    }, {
      x: I,
      y: w
    }, {
      x: M,
      y: k
    }, {
      x: M,
      y: E
    }, {
      x: P,
      y: E
    }, {
      x: P,
      y: O
    }, {
      x: D,
      y: O
    }, {
      x: D,
      y: C
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
          key: "callout-right-arrow"
        }, o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(2px,0.5px) ",
            transformOrigin: "50% 50%"
          },
          d: " M2.6,4.11 L10.9,4.11 L10.9,8.56 L15.01,8.56 L15.01,6.27 L19.1,10.02 L15.01,13.77 L15.01,11.48 L10.9,11.48 L10.9,15.93 L2.6,15.93 Z"
        }))
      };
    }
    getComponent() {
      return m;
    }
    getType() {
      return "callout-right-arrow";
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
        g = void 0 === u ? .6 : u,
        m = i.calloutWidthPercentage,
        f = void 0 === m ? .5 : m,
        y = s.A.rectWidth(e.data),
        v = s.A.rectHeight(e.data),
        b = Math.min(y, v),
        x = c * b,
        C = g * b,
        S = Math.min(p * b, C),
        A = Math.min(f * y, y - x),
        w = h.A.pointTransformed(e.data, s.A.clampPoint({
          x: a.x - x,
          y: o.y
        }, o, a)),
        E = h.A.pointTransformed(e.data, s.A.clampPoint({
          x: a.x - x,
          y: o.y + v / 2 - S / 2
        }, o, a)),
        k = h.A.pointTransformed(e.data, s.A.clampPoint({
          x: a.x,
          y: o.y + v / 2 - C / 2
        }, o, a)),
        O = h.A.pointTransformed(e.data, s.A.clampPoint({
          x: o.x + A,
          y: a.y
        }, o, a));
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
    createShape(e) {
      return super.createShape(g(g({}, e), {}, {
        shapeWidth: e.shapeWidth || 150,
        shapeHeight: e.shapeHeight || 60
      }));
    }
    moveControlPoint(e) {
      if ("md1" != e.key && "md2" != e.key && "md3" != e.key && "md4" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data,
        r = t.p1,
        n = t.p2,
        i = n.x - r.x,
        o = n.y - r.y,
        s = Math.min(i, o);
      if ("md1" == e.key) {
        var a = h.A.reversePointFixedY(e.shape.data, r.y, e.point),
          l = d().clamp(a.x, n.x - i, n.x),
          c = (n.x - l) / s;
        return this.changeShapeData(e.shape, "arrowPercentage", c);
      }
      if ("md2" == e.key) {
        var p = h.A.reversePoint(e.shape.data, e.point),
          u = r.y + o / 2,
          g,
          m = (u - d().clamp(p.y, u - o / 2, u)) / (s / 2);
        return this.changeShapeData(e.shape, "sizePercentage", m);
      }
      if ("md3" == e.key) {
        var f = h.A.reversePoint(e.shape.data, e.point),
          y = r.y + o / 2,
          v,
          b = (y - d().clamp(f.y, y - o / 2, y)) / (s / 2);
        return this.changeShapeData(e.shape, "arrowWidthPercentage", b);
      }
      if ("md4" == e.key) {
        var x = h.A.reversePointFixedY(e.shape.data, n.y, e.point),
          C,
          S = (d().clamp(x.x, r.x, n.x) - r.x) / i;
        return this.changeShapeData(e.shape, "calloutWidthPercentage", S);
      }
    }
    getPaperPath(e) {
      return p.A.fromPoints(f(e));
    }
  }
  var b = new v();
};
