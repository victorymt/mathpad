/* module 56698 — 3030 chars */
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
      o = void 0 === i ? .5 : i,
      s = a.A.rectWidth(e.data),
      l = r.y,
      c = n.y,
      h = r.x,
      p = r.x + s * o,
      u = n.x;
    return d.A.pointsTransformed(e.data, [{
      x: p,
      y: l
    }, {
      x: u,
      y: c
    }, {
      x: h,
      y: c
    }, {
      x: p,
      y: l
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
            transform: "translate(1px,-1px)"
          },
          d: " M10,5.75 L15.63,15.25 L4.38,15.25 Z"
        }))
      };
    }
    getComponent() {
      return p;
    }
    getType() {
      return "doc-triangle";
    }
    getSettingsComponent() {
      return g;
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.percentage,
        l = void 0 === s ? .5 : s,
        c,
        h = a.A.rectWidth(e.data) * l,
        p = d.A.pointTransformed(e.data, {
          x: o.x + h,
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
        i = a.A.rectWidth(e.shape.data);
      if ("md1" == e.key) {
        var o = d.A.reversePointFixedY(e.shape.data, r.y, e.point),
          l,
          c = (s().clamp(o.x, r.x, n.x) - r.x) / i;
        return this.changeShapeData(e.shape, "percentage", c);
      }
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: a.A.pointsToLines(u(e))
      };
    }
    getSnapablePoints(e) {
      return u(e).concat(a.A.getCenterPoint(e.data));
    }
    getBoundingRect(e) {
      var t = u(e);
      return a.A.getBoundingRectFromPoints(t);
    }
    getPaperPath(e) {
      return h.A.fromPoints(u(e));
    }
  }
  var f = new m();
};
