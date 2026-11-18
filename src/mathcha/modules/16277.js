/* module 16277 — 3593 chars */
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
      i = t.snipPercentage,
      o = void 0 === i ? .7 : i,
      s,
      l,
      c = a.A.rectWidth(e.data) / 2,
      h = a.A.rectHeight(e.data) / 2,
      p = Math.min(c, h),
      u = Math.min(p, o * p),
      g = r.y,
      m = r.y + u,
      f = n.y,
      y = r.x,
      v = n.x - u,
      b = n.x;
    return d.A.pointsTransformed(e.data, [{
      x: y,
      y: g
    }, {
      x: v,
      y: g
    }, {
      x: b,
      y: m
    }, {
      x: b,
      y: f
    }, {
      x: y,
      y: f
    }, {
      x: y,
      y: g
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
            transform: "translate(1px,0.5px)"
          },
          d: " M3.67,5.01 L13.9,5.01 L17.44,8.55 L17.44,14.78 L3.67,14.78 Z"
        }))
      };
    }
    getComponent() {
      return p;
    }
    getType() {
      return "doc-snip-single-corner-rect";
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
      var t = e.data.p1,
        r = a.A.rectHeight(e.data),
        n = {
          x: t.x,
          y: t.y + r / 2
        };
      return u(e).concat(a.A.rotatePointsByShapeRect(e, [n])).concat(a.A.getCenterPoint(e.data));
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.p2,
        l = i.snipPercentage,
        c = void 0 === l ? .7 : l,
        h,
        p,
        u = a.A.rectWidth(e.data) / 2,
        g = a.A.rectHeight(e.data) / 2,
        m = Math.min(u, g),
        f = Math.min(m, c * m),
        y = d.A.pointTransformed(e.data, {
          x: s.x - f,
          y: o.y
        });
      return n.concat([{
        key: "md1",
        type: "square",
        p: y
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data,
        r = t.p1,
        n = t.p2,
        i,
        o,
        l = a.A.rectWidth(e.shape.data) / 2,
        c = a.A.rectHeight(e.shape.data) / 2,
        h = Math.min(l, c);
      if ("md1" == e.key) {
        var p = d.A.reversePointFixedY(e.shape.data, r.y, e.point),
          u = s().clamp(p.x, n.x - h, n.x),
          g = (n.x - u) / h;
        return this.changeShapeData(e.shape, "snipPercentage", g);
      }
    }
    getPaperPath(e) {
      return h.A.fromPoints(u(e));
    }
  }
  var f = new m();
};
