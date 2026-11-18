/* module 81724 — 4937 chars */
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
      i = t.widthPercentage,
      o = void 0 === i ? .3 : i,
      s = t.heightPercentage,
      a = void 0 === s ? .3 : s,
      c = l.A.rectWidth(e.data),
      d = l.A.rectHeight(e.data),
      p = Math.min(c, d),
      u = Math.min(c, o * p),
      g = Math.min(d, a * p),
      m = r.y,
      f = r.y + g,
      y = n.y,
      v = r.x,
      b = r.x + u,
      x = n.x;
    return h.A.pointsTransformed(e.data, [{
      x: v,
      y: m
    }, {
      x: b,
      y: m
    }, {
      x: b,
      y: f
    }, {
      x,
      y: f
    }, {
      x,
      y
    }, {
      x: v,
      y
    }, {
      x: v,
      y: m
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
            transform: "translate(1px,0.5px)"
          },
          d: " M4.94,4.33 L11.67,4.33 L11.67,9.91 L15.44,9.91 L15.44,15.33 L4.94,15.33 Z"
        }))
      };
    }
    createShape(e) {
      return super.createShape(g(g({}, e), {}, {
        shapeWidth: e.shapeWidth || 70,
        shapeHeight: e.shapeHeight || 70
      }));
    }
    getComponent() {
      return m;
    }
    getType() {
      return "doc-l-shape";
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
      return f(e);
    }
    getBoundingRect(e) {
      var t = f(e);
      return l.A.getBoundingRectFromPoints(t);
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.widthPercentage,
        a = void 0 === s ? .3 : s,
        c = i.heightPercentage,
        d = void 0 === c ? .3 : c,
        p = l.A.rectWidth(e.data),
        u = l.A.rectHeight(e.data),
        g = Math.min(p, u),
        m = Math.min(p, a * g),
        f = Math.min(u, d * g),
        y = h.A.pointTransformed(e.data, {
          x: o.x + m,
          y: o.y
        }),
        v = h.A.pointTransformed(e.data, {
          x: o.x,
          y: o.y + f
        });
      return n.concat([{
        key: "md1",
        type: "square",
        p: y
      }, {
        key: "md2",
        type: "square",
        p: v
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key && "md2" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data,
        r = t.p1,
        n = t.p2,
        i = l.A.rectWidth(e.shape.data),
        o = l.A.rectHeight(e.shape.data),
        s = Math.min(i, o);
      if ("md1" == e.key) {
        var c = h.A.reversePointFixedY(e.shape.data, r.y, e.point),
          d,
          p = (a().clamp(c.x, r.x, n.x) - r.x) / s;
        return this.changeShapeData(e.shape, "widthPercentage", p);
      }
      if ("md2" == e.key) {
        var u = h.A.reversePoint(e.shape.data, e.point),
          g,
          m = (a().clamp(u.y, r.y, n.y) - r.y) / s;
        return this.changeShapeData(e.shape, "heightPercentage", m);
      }
    }
    getPaperPath(e) {
      return p.A.fromPoints(f(e));
    }
  }
  var b = new v();
};
