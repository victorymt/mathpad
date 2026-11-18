/* module 35113 — 4098 chars */
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
      o = void 0 === i ? .5 : i,
      s,
      a,
      c = l.A.rectWidth(e.data) * o,
      d = l.A.rectHeight(e.data) * o,
      p = r.y,
      u = r.y + d,
      g = n.y,
      m = r.x,
      f = r.x + c,
      y = n.x;
    return h.A.pointsTransformed(e.data, [{
      x: f,
      y: p
    }, {
      x: y,
      y: p
    }, {
      x: m,
      y: g
    }, {
      x: m,
      y: u
    }, {
      x: f,
      y: p
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
            transform: "translate(1px,0px)"
          },
          d: " M9.43,5.38 L16.1,5.38 L4.4,15.4 L4.4,9.69 Z"
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
      return "doc-diagonal-stripe";
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
    getBoundingRect(e) {
      var t = f(e);
      return l.A.getBoundingRectFromPoints(t);
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.percentage,
        a = void 0 === s ? .5 : s,
        c,
        d = l.A.rectWidth(e.data) * a,
        p = h.A.pointTransformed(e.data, {
          x: o.x + d,
          y: o.y
        });
      return n.concat([{
        key: "md1",
        type: "square",
        p
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data,
        r = t.p1,
        n = t.p2,
        i = l.A.rectWidth(e.shape.data);
      if ("md1" == e.key) {
        var o = h.A.reversePointFixedY(e.shape.data, r.y, e.point),
          s,
          c = (a().clamp(o.x, r.x, n.x) - r.x) / i;
        return this.changeShapeData(e.shape, "percentage", c);
      }
    }
    getPaperPath(e) {
      return p.A.fromPoints(f(e));
    }
  }
  var b = new v();
};
