/* module 90720 — 3290 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    U: () => u,
    mt: () => f
  });
  var n = r(40927),
    i = r.n(n),
    o = r(2543),
    s = r.n(o),
    a = r(19539),
    l = r(29315),
    c = r(88925),
    d = r(33535),
    h = r(84369);
  class p extends l.dV {
    render() {
      var e = u(this.shape()),
        t = c.A.getLineD(e);
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
      i = t.percentage,
      o = void 0 === i ? .6 : i,
      s,
      l,
      c = a.A.rectWidth(e.data) / 2,
      h = a.A.rectHeight(e.data) / 2,
      p = Math.min(c, h),
      u = Math.min(c, o * p),
      g = r.y,
      m = n.y,
      f = r.x,
      y = r.x + u,
      v = n.x - u,
      b = n.x;
    return d.A.pointsTransformed(e.data, [{
      x: f,
      y: m
    }, {
      x: y,
      y: g
    }, {
      x: v,
      y: g
    }, {
      x: b,
      y: m
    }, {
      x: f,
      y: m
    }]);
  }
  class g extends l.US {}
  class m extends l.Au {
    getIcon() {
      return {
        caption: "",
        component: i().createElement("svg", {
          style: {
            width: 23,
            height: 20,
            position: "relative"
          },
          key: this.getType()
        }, i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1px,0px)"
          },
          d: " M3.2,14.78 L6.46,5.8 L14.04,5.8 L17.3,14.78 Z"
        }))
      };
    }
    getComponent() {
      return p;
    }
    getType() {
      return "doc-trapezoid";
    }
    getSettingsComponent() {
      return g;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: a.A.pointsToLines(u(e))
      };
    }
    getSnapablePoints(e) {
      return u(e).concat(a.A.getCenterPoint(e.data));
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.percentage,
        l = void 0 === s ? .6 : s,
        c,
        h,
        p = a.A.rectWidth(e.data) / 2,
        u = a.A.rectHeight(e.data) / 2,
        g = Math.min(p, u),
        m = Math.min(p, l * g),
        f = d.A.pointTransformed(e.data, {
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
        i = a.A.rectWidth(e.shape.data) / 2,
        o = a.A.rectHeight(e.shape.data) / 2,
        l = Math.min(i, o);
      if ("md1" == e.key) {
        var c = d.A.reversePointFixedY(e.shape.data, t.y, e.point),
          h,
          p = (s().clamp(c.x, t.x, t.x + i) - t.x) / l;
        return this.changeShapeData(e.shape, "percentage", p);
      }
    }
    getPaperPath(e) {
      return h.A.fromPoints(u(e));
    }
  }
  var f = new m();
};
