/* module 70704 — 4093 chars */
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
      x: f,
      y: u
    }, {
      x: f,
      y: p
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
      x: y,
      y: g
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
          key: "down-arrow"
        }, i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,1px) rotate(90deg) scaleX(0.8)",
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
      return "down-arrow";
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
      var t = e.data.p1,
        r = o.A.rectWidth(e.data),
        n = {
          x: t.x + r / 2,
          y: t.y
        };
      return u(e).concat(o.A.rotatePointsByShapeRect(e, [n]));
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
          x: s.x,
          y: s.y + u * l
        }),
        m = d.A.pointTransformed(e.data, {
          x: s.x + p / 2 * h,
          y: s.y
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
        var i = d.A.reversePoint(e.shape.data, e.point),
          o,
          s = (c().clamp(i.y, r.y, n.y) - r.y) / (n.y - r.y);
        return this.changeShapeData(e.shape, "arrowPercentage", s);
      }
      if ("md2" == e.key) {
        var a = d.A.reversePointFixedY(e.shape.data, r.y, e.point),
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
