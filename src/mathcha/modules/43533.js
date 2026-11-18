/* module 43533 — 6109 chars */
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
      o = void 0 === i ? .2 : i,
      a = t.sizePercentage,
      l = void 0 === a ? .2 : a,
      c = t.arrowWidthPercentage,
      d = void 0 === c ? .5 : c,
      p = s.A.rectWidth(e.data),
      u = s.A.rectHeight(e.data),
      g = Math.min(p, u),
      m = o * g,
      f = l * g,
      y = d * g,
      v = r.y,
      b = r.y + m,
      x = n.y - y,
      C = n.y - y / 2 - f / 2,
      S = n.y - y / 2,
      A = n.y - y / 2 + f / 2,
      w = n.y,
      E = r.x,
      k = r.x + m,
      O = n.x - y,
      D = n.x - y / 2 - f / 2,
      P = n.x - y / 2,
      M = n.x - y / 2 + f / 2,
      I = n.x;
    return h.A.pointsTransformed(e.data, [{
      x: E,
      y: S
    }, {
      x: k,
      y: x
    }, {
      x: k,
      y: C
    }, {
      x: D,
      y: C
    }, {
      x: D,
      y: b
    }, {
      x: O,
      y: b
    }, {
      x: P,
      y: v
    }, {
      x: I,
      y: b
    }, {
      x: M,
      y: b
    }, {
      x: M,
      y: A
    }, {
      x: k,
      y: A
    }, {
      x: k,
      y: w
    }, {
      x: E,
      y: S
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
          key: "left-up-arrow"
        }, o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(2px,1px) ",
            transformOrigin: "50% 50%"
          },
          d: " M1,13.18 L5.11,9.45 L5.11,11.3 L11.7,11.3 L11.7,6.11 L9.85,6.11 L13.57,2 L17.3,6.11 L15.45,6.11 L15.45,15.06 L5.11,15.06 L5.11,16.91 Z"
        }))
      };
    }
    getComponent() {
      return m;
    }
    getType() {
      return "left-up-arrow";
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
        c = void 0 === l ? .2 : l,
        d = i.sizePercentage,
        p = void 0 === d ? .2 : d,
        u = i.arrowWidthPercentage,
        g = void 0 === u ? .5 : u,
        m = s.A.rectWidth(e.data),
        f = s.A.rectHeight(e.data),
        y = Math.min(m, f),
        v = c * y,
        b = p * y,
        x = g * y,
        C = h.A.pointTransformed(e.data, {
          x: a.x,
          y: o.y + v
        }),
        S = h.A.pointTransformed(e.data, {
          x: a.x - x / 2 - b / 2,
          y: a.y - x / 2 - b / 2
        }),
        A = h.A.pointTransformed(e.data, {
          x: a.x - x,
          y: o.y
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
        i = t.sizePercentage,
        o = void 0 === i ? .2 : i,
        s = t.arrowWidthPercentage,
        a = void 0 === s ? .5 : s,
        l = n.x - r.x,
        c = n.y - r.y,
        p = Math.min(l, c),
        u = o * p,
        g = a * p;
      if ("md1" == e.key) {
        var m = h.A.reversePoint(e.shape.data, e.point),
          f,
          y = (d().clamp(m.y, r.y, r.y + p) - r.y) / p;
        return this.changeShapeData(e.shape, "arrowPercentage", y);
      }
      if ("md2" == e.key) {
        var v = h.A.reversePoint(e.shape.data, e.point),
          b = n.y - g / 2 + u / 2,
          x,
          C = (b - d().clamp(v.y, b - p, b)) / p;
        return this.changeShapeData(e.shape, "sizePercentage", C);
      }
      if ("md3" == e.key) {
        var S = h.A.reversePointFixedY(e.shape.data, r.y, e.point),
          A = d().clamp(S.x, n.x - p, n.x),
          w = (n.x - A) / p;
        return this.changeShapeData(e.shape, "arrowWidthPercentage", w);
      }
    }
    getPaperPath(e) {
      return p.A.fromPoints(f(e));
    }
  }
  var b = new v();
};
