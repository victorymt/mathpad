/* module 49602 — 3972 chars */
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
        t = a.A.getLineD(e);
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
      s = void 0 === i ? .6 : i,
      a = t.sizePercentage,
      l = void 0 === a ? .5 : a,
      c = o.A.rectWidth(e.data),
      h = o.A.rectHeight(e.data),
      p = Math.min(c, h),
      u = r.y,
      g = r.y + h / 2 * l,
      m = r.y + h / 2,
      f = r.y + h / 2 + h / 2 * (1 - l),
      y = n.y,
      v = r.x,
      b = r.x + .25 * p,
      x = r.x + c * s,
      C = n.x;
    return d.A.pointsTransformed(e.data, [{
      x: v,
      y: g
    }, {
      x,
      y: g
    }, {
      x,
      y: u
    }, {
      x: C,
      y: m
    }, {
      x,
      y
    }, {
      x,
      y: f
    }, {
      x: v,
      y: f
    }, {
      x: b,
      y: m
    }, {
      x: v,
      y: g
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
          key: "notched-right-arrow"
        }, i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1px,1.5px)"
          },
          d: " M3,5.51 L11.67,5.51 L11.67,1.9 L18.11,8.9 L11.67,15.9 L11.67,12.29 L3,12.29 L6.5,8.9 Z"
        }))
      };
    }
    getComponent() {
      return p;
    }
    getType() {
      return "notched-right-arrow";
    }
    getSettingsComponent() {
      return g;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: o.A.pointsToLines(u(e))
      };
    }
    getSnapablePoints(e) {
      return u(e);
    }
    getBoundingRect(e) {
      var t = u(e);
      return o.A.getBoundingRectFromPoints(t);
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        s = i.p1,
        a = i.arrowPercentage,
        l = void 0 === a ? .6 : a,
        c = i.sizePercentage,
        h = void 0 === c ? .5 : c,
        p = o.A.rectWidth(e.data),
        u = o.A.rectHeight(e.data),
        g = d.A.pointTransformed(e.data, {
          x: s.x + p * l,
          y: s.y
        }),
        m = d.A.pointTransformed(e.data, {
          x: s.x,
          y: s.y + u / 2 * h
        });
      return n.concat([{
        key: "md1",
        type: "square",
        p: g
      }, {
        key: "md2",
        type: "square",
        p: m
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key && "md2" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data,
        r = t.p1,
        n = t.p2;
      if ("md1" == e.key) {
        var i = d.A.reversePointFixedY(e.shape.data, r.y, e.point),
          o,
          s = (c().clamp(i.x, r.x, n.x) - r.x) / (n.x - r.x);
        return this.changeShapeData(e.shape, "arrowPercentage", s);
      }
      if ("md2" == e.key) {
        var a = d.A.reversePoint(e.shape.data, e.point),
          l = n.y - r.y,
          h,
          p = (c().clamp(a.y, r.y, r.y + l / 2) - r.y) / (l / 2);
        return this.changeShapeData(e.shape, "sizePercentage", p);
      }
    }
    getPaperPath(e) {
      return h.A.fromPoints(u(e));
    }
  }
  var f = new m();
};
