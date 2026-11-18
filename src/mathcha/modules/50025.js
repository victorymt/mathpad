/* module 50025 — 7177 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    UL: () => f,
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
        t = d.A.pathsD(e.outerCircle),
        r = d.A.pathsD(e.eye1),
        n = d.A.pathsD(e.eye2),
        i = d.A.pathsD(e.smile),
        s = this.style(),
        a = this.styleNoFill();
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
        className: "transparent no-print",
        d: i,
        style: this.transparentStyle()
      }), o().createElement("path", {
        className: "real",
        d: t,
        style: s
      }), o().createElement("path", {
        className: "real",
        d: r,
        style: s
      }), o().createElement("path", {
        className: "real",
        d: n,
        style: s
      }), o().createElement("path", {
        className: "real",
        d: i,
        style: a
      }));
    }
  }
  function f(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.percentage,
      o = void 0 === i ? 1 : i,
      s = l.A.rectWidth(e.data),
      a = l.A.rectHeight(e.data),
      c = .33,
      d = .05,
      p = c * s,
      u = c * a,
      g = d * s,
      m = d * a,
      f = l.A.ellipseToCubicBeziers({
        x: r.x + p - g,
        y: r.y + u - m
      }, {
        x: r.x + p + g,
        y: r.y + u + m
      }),
      y = l.A.ellipseToCubicBeziers({
        x: n.x - p - g,
        y: r.y + u - m
      }, {
        x: n.x - p + g,
        y: r.y + u + m
      }),
      v = .05 * a,
      b = .75 * a - v + (2 * v - v * o * 2),
      x = .25 * s,
      C = l.A.quadraticToCubic({
        p1: {
          x: r.x + x,
          y: r.y + b
        },
        p2: {
          x: n.x - x,
          y: r.y + b
        },
        cp: {
          x: r.x + s / 2,
          y: r.y + .75 * a - 3 * v + v * o * 6
        }
      });
    return {
      outerCircle: h.A.genericLinesTransformed(e.data, l.A.ellipseToCubicBeziers(r, n)),
      eye1: h.A.genericLinesTransformed(e.data, f),
      eye2: h.A.genericLinesTransformed(e.data, y),
      smile: h.A.genericLinesTransformed(e.data, [C])
    };
  }
  class y extends c.US {}
  class v extends c.Au {
    constructor() {
      super(...arguments), (0, n.A)(this, "getSupplementaryLines", () => []);
    }
    getComponent() {
      return m;
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
          key: this.getType()
        }, o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1.5px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M3.4,10.4 C3.4,7.09 6.31,4.4 9.9,4.4 C13.49,4.4 16.4,7.09 16.4,10.4 C16.4,13.71 13.49,16.4 9.9,16.4 C6.31,16.4 3.4,13.71 3.4,10.4 Z"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1.5px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M7.04,8.36 C7.04,8.03 7.33,7.76 7.69,7.76 C8.05,7.76 8.34,8.03 8.34,8.36 C8.34,8.69 8.05,8.96 7.69,8.96 C7.33,8.96 7.04,8.69 7.04,8.36 Z"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1.5px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M11.46,8.36 C11.46,8.03 11.75,7.76 12.11,7.76 C12.47,7.76 12.76,8.03 12.76,8.36 C12.76,8.69 12.47,8.96 12.11,8.96 C11.75,8.96 11.46,8.69 11.46,8.36 Z"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1.5px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M6.65,12.8 C8.82,14.4 10.98,14.4 13.15,12.8"
        }))
      };
    }
    createShape(e) {
      return super.createShape(g(g({}, e), {}, {
        shapeWidth: e.shapeWidth || 70,
        shapeHeight: e.shapeHeight || 70
      }));
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.percentage,
        a = void 0 === s ? 1 : s,
        c = l.A.rectHeight(e.data),
        d = l.A.rectWidth(e.data),
        p = .05 * c,
        u = .75 * c - p + p * a * 2,
        g = h.A.pointTransformed(e.data, {
          x: o.x + d / 2,
          y: o.y + u
        });
      return n.concat([{
        key: "md1",
        type: "square",
        p: g
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data.p1,
        r = l.A.rectHeight(e.shape.data),
        n = .05 * r;
      if ("md1" == e.key) {
        var i = h.A.reversePoint(e.shape.data, e.point),
          o = t.y + .75 * r,
          s,
          c = (a().clamp(i.y, o - n, o + n) - (o - n)) / (2 * n);
        return this.changeShapeData(e.shape, "percentage", c);
      }
      return e.shape;
    }
    getType() {
      return "doc-smiley-face";
    }
    getSettingsComponent() {
      return y;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      var t = f(e);
      return {
        data: t.outerCircle.concat(t.eye1).concat(t.eye2).concat(t.smile)
      };
    }
    getSnapablePoints() {
      return [];
    }
    getBoundingRect(e) {
      var t = f(e);
      return l.A.genericLinesBbox(t.outerCircle);
    }
    getPaperPath(e) {
      var t = f(e);
      return p.A.fromGenericLines(t.outerCircle);
    }
  }
  var b = new v();
};
