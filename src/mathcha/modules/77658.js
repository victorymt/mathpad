/* module 77658 — 5827 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    U: () => u,
    mt: () => y
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(19539),
    a = r(29315),
    l = r(88925),
    c = r(2543),
    d = r.n(c),
    h = r(33535);
  class p extends a.dV {
    render() {
      var e = u(this.shape()),
        t = l.A.getLineD(e.points1),
        r = l.A.getLineD(e.points2),
        n = l.A.getLineD(e.points3);
      return o().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), o().createElement("path", {
        className: "transparent no-print",
        d: t,
        style: this.transparentStyle()
      }), o().createElement("path", {
        className: "transparent no-print",
        d: r,
        style: this.transparentStyle()
      }), o().createElement("path", {
        className: "transparent no-print",
        d: n,
        style: this.transparentStyle()
      }), o().createElement("path", {
        className: "real",
        d: t,
        style: this.style()
      }), o().createElement("path", {
        className: "real",
        d: r,
        style: this.style()
      }), o().createElement("path", {
        className: "real",
        d: n,
        style: this.style()
      }));
    }
  }
  function u(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.arrowPercentage,
      o = void 0 === i ? .6 : i,
      a = t.sizePercentage,
      l = void 0 === a ? .5 : a,
      c = s.A.rectWidth(e.data),
      d = s.A.rectHeight(e.data),
      p,
      u = .25 * Math.min(c, d),
      g = r.x,
      m = r.x + .2 * u,
      f = r.x + .4 * u,
      y = r.x + .8 * u,
      v = r.y,
      b = r.y + d / 2 * l,
      x = r.y + d / 2,
      C = r.y + d / 2 + d / 2 * (1 - l),
      S = n.y,
      A = r.x + u,
      w = r.x + c * o,
      E = n.x;
    return {
      points1: h.A.pointsTransformed(e.data, [{
        x: A,
        y: b
      }, {
        x: w,
        y: b
      }, {
        x: w,
        y: v
      }, {
        x: E,
        y: x
      }, {
        x: w,
        y: S
      }, {
        x: w,
        y: C
      }, {
        x: A,
        y: C
      }, {
        x: A,
        y: b
      }]),
      points2: h.A.pointsTransformed(e.data, [{
        x: g,
        y: b
      }, {
        x: m,
        y: b
      }, {
        x: m,
        y: C
      }, {
        x: g,
        y: C
      }, {
        x: g,
        y: b
      }]),
      points3: h.A.pointsTransformed(e.data, [{
        x: f,
        y: b
      }, {
        x: y,
        y: b
      }, {
        x: y,
        y: C
      }, {
        x: f,
        y: C
      }, {
        x: f,
        y: b
      }])
    };
  }
  function g(e) {
    return e.points1.concat(e.points2).concat(e.points3);
  }
  class m extends a.US {}
  class f extends a.Au {
    constructor() {
      super(...arguments), (0, n.A)(this, "getPaperPath", void 0);
    }
    getIcon() {
      return {
        caption: "",
        component: o().createElement("svg", {
          style: {
            width: 23,
            height: 20,
            position: "relative"
          },
          key: "striped-right-arrow"
        }, o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1px,0.5px)"
          },
          d: " M7.05,7.1 L12.46,7.1 L12.46,4 L18.9,10.35 L12.46,16.71 L12.46,13.61 L7.05,13.61 Z"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1px,0.5px)"
          },
          d: " M2.6,7.1 L3.04,7.1 L3.04,13.61 L2.6,13.61 Z"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1px,0.5px)"
          },
          d: " M4.82,7.1 L5.27,7.1 L5.27,13.61 L4.82,13.61 Z"
        }))
      };
    }
    getComponent() {
      return p;
    }
    getType() {
      return "striped-right-arrow";
    }
    getSettingsComponent() {
      return m;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: s.A.pointsToLines(g(u(e)))
      };
    }
    getSnapablePoints(e) {
      return g(u(e));
    }
    getBoundingRect(e) {
      var t = u(e);
      return s.A.getBoundingRectFromPoints(g(t));
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        a = i.arrowPercentage,
        l = void 0 === a ? .6 : a,
        c = i.sizePercentage,
        d = void 0 === c ? .5 : c,
        p = s.A.rectWidth(e.data),
        u = s.A.rectHeight(e.data),
        g = h.A.pointTransformed(e.data, {
          x: o.x + p * l,
          y: o.y
        }),
        m = h.A.pointTransformed(e.data, {
          x: o.x,
          y: o.y + u / 2 * d
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
        var i = h.A.reversePointFixedY(e.shape.data, r.y, e.point),
          o,
          s = (d().clamp(i.x, r.x, n.x) - r.x) / (n.x - r.x);
        return this.changeShapeData(e.shape, "arrowPercentage", s);
      }
      if ("md2" == e.key) {
        var a = h.A.reversePoint(e.shape.data, e.point),
          l = n.y - r.y,
          c,
          p = (d().clamp(a.y, r.y, r.y + l / 2) - r.y) / (l / 2);
        return this.changeShapeData(e.shape, "sizePercentage", p);
      }
    }
  }
  var y = new f();
};
