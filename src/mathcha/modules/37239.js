/* module 37239 — 5745 chars */
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
      o = void 0 === i ? .4 : i,
      a = t.sizePercentage,
      l = void 0 === a ? .3 : a,
      c = t.arrowWidthPercentage,
      d = void 0 === c ? .6 : c,
      p = s.A.rectWidth(e.data),
      u = s.A.rectHeight(e.data),
      g = Math.min(p, u),
      m = o * g,
      f = d * g,
      y = Math.min(l * g, f),
      v = r.y,
      b = r.y + m,
      x = n.y - y,
      C = n.y,
      S = r.x,
      A = n.x - f,
      w = n.x - f / 2 - y / 2,
      E = n.x - f / 2,
      k = n.x - f / 2 + y / 2,
      O = n.x;
    return h.A.pointsTransformed(e.data, s.A.clampPoints([{
      x: S,
      y: x
    }, {
      x: w,
      y: x
    }, {
      x: w,
      y: b
    }, {
      x: A,
      y: b
    }, {
      x: E,
      y: v
    }, {
      x: O,
      y: b
    }, {
      x: k,
      y: b
    }, {
      x: k,
      y: C
    }, {
      x: S,
      y: C
    }, {
      x: S,
      y: x
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
          key: "bend-up-arrow"
        }, o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(2px,1px) ",
            transformOrigin: "50% 50%"
          },
          d: " M3,12.34 L10.4,12.34 L10.4,7.39 L7.5,7.39 L12.5,2 L17.5,7.39 L14.6,7.39 L14.6,16.53 L3,16.53 Z"
        }))
      };
    }
    getComponent() {
      return m;
    }
    getType() {
      return "bend-up-arrow";
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
        c = void 0 === l ? .4 : l,
        d = i.sizePercentage,
        p = void 0 === d ? .3 : d,
        u = i.arrowWidthPercentage,
        g = void 0 === u ? .6 : u,
        m = s.A.rectWidth(e.data),
        f = s.A.rectHeight(e.data),
        y = Math.min(m, f),
        v = c * y,
        b = g * y,
        x = Math.min(p * y, b),
        C = h.A.pointTransformed(e.data, s.A.clampPoint({
          x: a.x,
          y: o.y + v
        }, o, a)),
        S = h.A.pointTransformed(e.data, s.A.clampPoint({
          x: o.x,
          y: a.y - x
        }, o, a)),
        A = h.A.pointTransformed(e.data, s.A.clampPoint({
          x: a.x - b,
          y: o.y
        }, o, a));
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
    createShape(e) {
      return super.createShape(g(g({}, e), {}, {
        shapeWidth: e.shapeWidth || 50,
        shapeHeight: e.shapeHeight || 60
      }));
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
        var a = h.A.reversePoint(e.shape.data, e.point),
          l,
          c = (d().clamp(a.y, r.y, n.y) - r.y) / s;
        return this.changeShapeData(e.shape, "arrowPercentage", c);
      }
      if ("md2" == e.key) {
        var p = h.A.reversePoint(e.shape.data, e.point),
          u = d().clamp(p.y, r.y, n.y),
          g = (n.y - u) / s;
        return this.changeShapeData(e.shape, "sizePercentage", g);
      }
      if ("md3" == e.key) {
        var m = h.A.reversePointFixedY(e.shape.data, r.y, e.point),
          f = d().clamp(m.x, r.x, n.x),
          y = (n.x - f) / s;
        return this.changeShapeData(e.shape, "arrowWidthPercentage", y);
      }
    }
    getPaperPath(e) {
      return p.A.fromPoints(f(e));
    }
  }
  var b = new v();
};
