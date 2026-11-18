/* module 38327 — 4141 chars */
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
      s = void 0 === i ? .4 : i,
      a = t.sizePercentage,
      l = void 0 === a ? .5 : a,
      c = o.A.rectWidth(e.data),
      h = o.A.rectHeight(e.data),
      p = r.y,
      u = r.y + h * s,
      g = n.y,
      m = r.x,
      f = r.x + c / 2 * l,
      y = r.x + c / 2,
      v = r.x + c / 2 + c / 2 * (1 - l),
      b = n.x;
    return d.A.pointsTransformed(e.data, [{
      x: m,
      y: u
    }, {
      x: y,
      y: p
    }, {
      x: b,
      y: u
    }, {
      x: v,
      y: u
    }, {
      x: v,
      y: g
    }, {
      x: f,
      y: g
    }, {
      x: f,
      y: u
    }, {
      x: m,
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
          key: "up-arrow"
        }, i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,1px) rotate(-90deg) scaleX(0.8)",
            transformOrigin: "50% 50%"
          },
          d: " M3,7 L12.07,7 L12.07,4 L20,10 L12.07,16 L12.07,13 L3,13 Z"
        }))
      };
    }
    getComponent() {
      return p;
    }
    getType() {
      return "up-arrow";
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
      var t = e.data,
        r = t.p1,
        n = t.p2,
        i = o.A.rectWidth(e.data),
        s = {
          x: r.x + i / 2,
          y: n.y
        };
      return u(e).concat(o.A.rotatePointsByShapeRect(e, [s]));
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
        c = void 0 === l ? .4 : l,
        h = i.sizePercentage,
        p = void 0 === h ? .5 : h,
        u = o.A.rectWidth(e.data),
        g = o.A.rectHeight(e.data),
        m = d.A.pointTransformed(e.data, {
          x: s.x,
          y: s.y + g * c
        }),
        f = d.A.pointTransformed(e.data, {
          x: s.x + u / 2 * p,
          y: a.y
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
        n = t.p2;
      if ("md1" == e.key) {
        var i = d.A.reversePoint(e.shape.data, e.point),
          o,
          s = (c().clamp(i.y, r.y, n.y) - r.y) / (n.y - r.y);
        return this.changeShapeData(e.shape, "arrowPercentage", s);
      }
      if ("md2" == e.key) {
        var a = d.A.reversePointFixedY(e.shape.data, n.y, e.point),
          l = n.x - r.x,
          h,
          p = (c().clamp(a.x, r.x, r.x + l / 2) - r.x) / (l / 2);
        return this.changeShapeData(e.shape, "sizePercentage", p);
      }
    }
    getPaperPath(e) {
      return h.A.fromPoints(u(e));
    }
  }
  var f = new m();
};
