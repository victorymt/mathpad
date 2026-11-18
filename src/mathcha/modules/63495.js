/* module 63495 — 4130 chars */
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
      u = r.y + h / 2 * l,
      g = r.y + h / 2,
      m = r.y + h / 2 + h / 2 * (1 - l),
      f = n.y,
      y = r.x,
      v = r.x + c * s,
      b = n.x;
    return d.A.pointsTransformed(e.data, [{
      x: y,
      y: g
    }, {
      x: v,
      y: p
    }, {
      x: v,
      y: u
    }, {
      x: b,
      y: u
    }, {
      x: b,
      y: m
    }, {
      x: v,
      y: m
    }, {
      x: v,
      y: f
    }, {
      x: y,
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
          key: "left-arrow"
        }, i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,1px) scaleX(-1)",
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
      return "left-arrow";
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
        i = o.A.rectHeight(e.data),
        s = {
          x: n.x,
          y: r.y + i / 2
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
          x: s.x + u * c,
          y: s.y
        }),
        f = d.A.pointTransformed(e.data, {
          x: a.x,
          y: s.y + g / 2 * p
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
