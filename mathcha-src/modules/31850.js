/* module 31850 — 4834 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    UL: () => y,
    mt: () => x
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(2543),
    a = r.n(s),
    l = r(19539),
    c = r(29315),
    d = r(88925),
    h = r(35900),
    p = r(33535),
    u = r(84369);
  function g(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function m(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? g(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class f extends c.dV {
    render() {
      var e = y(this.shape()),
        t = d.A.pathsD(e);
      return o().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), o().createElement("path", {
        className: "transparent no-print",
        d: t,
        style: this.transparentStyle()
      }), o().createElement("path", {
        className: "real",
        d: t,
        style: this.style()
      }));
    }
  }
  function y(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.percentage,
      o = void 0 === i ? .5 : i,
      s = 0,
      a = 270,
      c = (0, h.k)({
        p1: r,
        p2: n
      }, 0, a),
      d = l.A.rectWidth(e.data),
      u = l.A.rectHeight(e.data),
      g = o * d,
      m = o * u,
      f = {
        p1: {
          x: r.x + d / 2,
          y: r.y
        },
        p2: {
          x: n.x - d / 2 + g,
          y: r.y + u / 2 - m
        },
        cp: {
          x: n.x - d / 2 + Math.min(d / 2, g),
          y: r.y
        }
      },
      y = {
        p1: {
          x: n.x - d / 2 + g,
          y: r.y + u / 2 - m
        },
        p2: {
          x: n.x,
          y: r.y + u / 2
        },
        cp: {
          x: n.x,
          y: r.y + u / 2 - Math.min(u / 2, m)
        }
      };
    return p.A.genericLinesTransformed(e.data, [...c, l.A.quadraticToCubic(f), l.A.quadraticToCubic(y)]);
  }
  class v extends c.US {}
  class b extends c.Au {
    getComponent() {
      return f;
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
            transform: "translate(1px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M15.4,10.21 C15.4,13.19 13.01,15.6 10.07,15.6 C7.13,15.6 4.74,13.19 4.74,10.21 C4.74,7.24 7.13,4.83 10.07,4.83 C13.62,4.83 15.4,4.83 15.4,4.83 C15.4,4.83 15.4,6.62 15.4,10.21 Z"
        }))
      };
    }
    createShape(e) {
      return super.createShape(m(m({}, e), {}, {
        shapeWidth: e.shapeWidth || 60,
        shapeHeight: e.shapeHeight || 60
      }));
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.percentage,
        a = void 0 === s ? .5 : s,
        c = l.A.rectWidth(e.data),
        d = a * c,
        h = p.A.pointTransformed(e.data, {
          x: o.x + c / 2 + d,
          y: o.y
        });
      return n.concat([{
        key: "md1",
        p: h,
        type: "square"
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key && "md2" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data.p1,
        r = l.A.rectWidth(e.shape.data);
      if ("md1" === e.key) {
        var n = p.A.reversePointFixedY(e.shape.data, t.y, e.point),
          i,
          o = (a().clamp(n.x, t.x + r / 2, t.x + r / 2 + r) - (t.x + r / 2)) / r;
        return this.changeShapeData(e.shape, "percentage", o);
      }
      return e.shape;
    }
    getType() {
      return "doc-tear-drop";
    }
    getSettingsComponent() {
      return v;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: y(e)
      };
    }
    getSnapablePoints(e) {
      var t;
      return y(e).map(e => e.p2);
    }
    getBoundingRect(e) {
      var t = y(e);
      return l.A.genericLinesBbox(t);
    }
    getPaperPath(e) {
      return u.A.fromGenericLines(y(e));
    }
  }
  var x = new b();
};
