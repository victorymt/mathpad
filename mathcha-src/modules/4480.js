/* module 4480 — 4607 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    U: () => f,
    mt: () => b
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(2543),
    a = r.n(s),
    l = r(19539),
    c = r(29315),
    d = r(88925),
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
  class m extends c.dV {
    render() {
      var e = f(this.shape()),
        t = d.A.getLineD(e);
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
      i = t.percentage,
      o = void 0 === i ? .6 : i,
      s,
      a,
      c = l.A.rectWidth(e.data) / 2,
      d = l.A.rectHeight(e.data) / 2,
      p = Math.min(c, d),
      u = Math.min(p, o * p),
      g = r.y,
      m = r.y + u,
      f = n.y - u,
      y = n.y,
      v = r.x,
      b = r.x + u,
      x = n.x - u,
      C = n.x;
    return h.A.pointsTransformed(e.data, [{
      x: b,
      y: g
    }, {
      x,
      y: g
    }, {
      x,
      y: m
    }, {
      x: C,
      y: m
    }, {
      x: C,
      y: f
    }, {
      x,
      y: f
    }, {
      x,
      y
    }, {
      x: b,
      y
    }, {
      x: b,
      y: f
    }, {
      x: v,
      y: f
    }, {
      x: v,
      y: m
    }, {
      x: b,
      y: m
    }, {
      x: b,
      y: g
    }]);
  }
  class y extends c.US {}
  class v extends c.Au {
    getIcon() {
      return {
        caption: "",
        component: o().createElement("svg", {
          style: {
            width: 23,
            height: 20,
            position: "relative"
          },
          key: this.getType()
        }, o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1.5px,0px)"
          },
          d: " M7.84,4.14 L12.59,4.14 L12.59,7.7 L16.14,7.7 L16.14,12.73 L12.59,12.73 L12.59,16.29 L7.84,16.29 L7.84,12.73 L4.29,12.73 L4.29,7.7 L7.84,7.7 Z"
        }))
      };
    }
    getComponent() {
      return m;
    }
    createShape(e) {
      return super.createShape(g(g({}, e), {}, {
        shapeWidth: e.shapeWidth || 70,
        shapeHeight: e.shapeHeight || 70
      }));
    }
    getType() {
      return "doc-cross";
    }
    getSettingsComponent() {
      return y;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: l.A.pointsToLines(f(e))
      };
    }
    getSnapablePoints(e) {
      return f(e).concat(l.A.getCenterPoint(e.data));
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.percentage,
        a = void 0 === s ? .6 : s,
        c,
        d,
        p = l.A.rectWidth(e.data) / 2,
        u = l.A.rectHeight(e.data) / 2,
        g = Math.min(p, u),
        m = Math.min(g, a * g),
        f = h.A.pointTransformed(e.data, {
          x: o.x + m,
          y: o.y
        });
      return n.concat([{
        key: "md1",
        type: "square",
        p: f
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data.p1,
        r,
        n,
        i = l.A.rectWidth(e.shape.data) / 2,
        o = l.A.rectHeight(e.shape.data) / 2,
        s = Math.min(i, o);
      if ("md1" == e.key) {
        var c = h.A.reversePointFixedY(e.shape.data, t.y, e.point),
          d,
          p = (a().clamp(c.x, t.x, t.x + i) - t.x) / s;
        return this.changeShapeData(e.shape, "percentage", p);
      }
    }
    getPaperPath(e) {
      return p.A.fromPoints(f(e));
    }
  }
  var b = new v();
};
