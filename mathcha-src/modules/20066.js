/* module 20066 — 4302 chars */
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
      s = void 0 === i ? .5 : i,
      a = t.sizePercentage,
      l = void 0 === a ? .5 : a,
      c = o.A.rectWidth(e.data),
      h = o.A.rectHeight(e.data),
      p = r.y,
      u = r.y + h / 2 * s,
      g = r.y + h / 2 + (h / 2 - h / 2 * s),
      m = n.y,
      f = r.x,
      y = r.x + c / 2 * l,
      v = r.x + c / 2,
      b = r.x + c / 2 + c / 2 * (1 - l),
      x = n.x;
    return d.A.pointsTransformed(e.data, [{
      x: f,
      y: u
    }, {
      x: v,
      y: p
    }, {
      x,
      y: u
    }, {
      x: b,
      y: u
    }, {
      x: b,
      y: g
    }, {
      x,
      y: g
    }, {
      x: v,
      y: m
    }, {
      x: f,
      y: g
    }, {
      x: y,
      y: g
    }, {
      x: y,
      y: u
    }, {
      x: f,
      y: u
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
          key: "up-down-arrow"
        }, i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,1px) rotate(90deg) scaleX(0.8)",
            transformOrigin: "50% 50%"
          },
          d: "  M1.43,10.07 L7.14,4.4 L7.14,7.23 L13.62,7.23 L13.62,4.4 L19.33,10.07 L13.62,15.73 L13.62,12.9 L7.14,12.9 L7.14,15.73 Z"
        }))
      };
    }
    getComponent() {
      return p;
    }
    getType() {
      return "up-down-arrow";
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
      return u(e).concat(o.A.getCenterPoint(e.data));
    }
    getBoundingRect(e) {
      var t = u(e);
      return o.A.getBoundingRectFromPoints(t);
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        s = i.p1,
        a = i.p2,
        l = i.arrowPercentage,
        c = void 0 === l ? .5 : l,
        h = i.sizePercentage,
        p = void 0 === h ? .5 : h,
        u = o.A.rectWidth(e.data),
        g = o.A.rectHeight(e.data),
        m = d.A.pointTransformed(e.data, {
          x: s.x,
          y: s.y + g / 2 * c
        }),
        f = d.A.pointTransformed(e.data, {
          x: s.x + u / 2 * p,
          y: a.y - g / 2 * c
        });
      return n.concat([{
        key: "md1",
        type: "square",
        p: m
      }, {
        key: "md2",
        type: "square",
        p: f
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key && "md2" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data,
        r = t.p1,
        n = t.p2,
        i = t.arrowPercentage,
        o = void 0 === i ? .5 : i,
        s = n.y - r.y;
      if ("md1" == e.key) {
        var a = d.A.reversePoint(e.shape.data, e.point),
          l,
          h = (c().clamp(a.y, r.y, r.y + s / 2) - r.y) / (s / 2);
        return this.changeShapeData(e.shape, "arrowPercentage", h);
      }
      if ("md2" == e.key) {
        var p = d.A.reversePointFixedY(e.shape.data, n.y - s / 2 * o, e.point),
          u = n.x - r.x,
          g,
          m = (c().clamp(p.x, r.x, r.x + u / 2) - r.x) / (u / 2);
        return this.changeShapeData(e.shape, "sizePercentage", m);
      }
    }
    getPaperPath(e) {
      return h.A.fromPoints(u(e));
    }
  }
  var f = new m();
};
