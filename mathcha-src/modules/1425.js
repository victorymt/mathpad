/* module 1425 — 4997 chars */
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
        t = d.A.pathsD(e);
      return o().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), this.getTransparentOnlyNoFill(t), o().createElement("path", {
        className: "real",
        d: t,
        style: this.style()
      }));
    }
  }
  function f(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.percentage,
      o = void 0 === i ? .5 : i,
      s = l.A.rectWidth(e.data),
      a,
      c = o * s,
      d = l.A.rectHeight(e.data) / 2,
      p = r.x + s + c,
      u = r.y + d,
      g = {
        x: -c,
        y: -d
      },
      m = Math.pow(g.y, 2) / (1 - Math.pow(g.x, 2) / Math.pow(s, 2)),
      f = Math.sqrt(m),
      y = l.A.ellipseToCubicBeziers({
        x: r.x,
        y: r.y
      }, {
        x: r.x + 2 * s,
        y: n.y
      }),
      v = l.A.ellipseToCubicBeziers({
        x: p - s,
        y: u - f
      }, {
        x: p + s,
        y: u + f
      }),
      b = l.A.splitBezierByLine(v[0], {
        p1: r,
        p2: {
          x: r.x + 2 * s,
          y: r.y
        }
      }),
      x = l.A.splitBezierByLine(v[3], {
        p1: {
          x: r.x,
          y: n.y
        },
        p2: {
          x: r.x + 2 * s,
          y: n.y
        }
      }),
      C = l.A.reverseBezierDirection(b.length > 0 ? b[0] : v[0]),
      S = l.A.reverseBezierDirection(x.length > 0 ? x[1] : v[3]);
    return C.p1 = y[0].p2, S.p2 = y[3].p1, h.A.genericLinesTransformed(e.data, [y[3], y[0], C, S]);
  }
  class y extends c.US {}
  class v extends c.Au {
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
            transform: "translate(1px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M13.63,16 C9.76,16 6.63,13.37 6.63,10.13 C6.63,6.88 9.76,4.25 13.63,4.25 C11.08,5.21 9.3,7.48 9.3,10.13 C9.3,12.77 11.08,15.04 13.63,16 Z"
        }))
      };
    }
    createShape(e) {
      return super.createShape(g(g({}, e), {}, {
        shapeWidth: e.shapeWidth || 40,
        shapeHeight: e.shapeHeight || 70
      }));
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.percentage,
        a = void 0 === s ? .5 : s,
        c = l.A.rectWidth(e.data),
        d = l.A.rectHeight(e.data),
        p = a * c,
        u = h.A.pointTransformed(e.data, {
          x: o.x + p,
          y: o.y + d / 2
        });
      return n.concat([{
        key: "md1",
        type: "square",
        p: u
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data,
        r = t.p1,
        n = t.p2,
        i = l.A.rectWidth(e.shape.data),
        o = l.A.rectHeight(e.shape.data);
      if ("md1" == e.key) {
        var s = h.A.reversePointFixedY(e.shape.data, r.y + o / 2, e.point),
          c,
          d = (a().clamp(s.x, r.x, n.x - i / 10) - r.x) / i;
        return this.changeShapeData(e.shape, "percentage", d);
      }
      return e.shape;
    }
    getType() {
      return "doc-moon";
    }
    getSettingsComponent() {
      return y;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: f(e)
      };
    }
    getSnapablePoints(e) {
      return f(e).map(e => e.p2);
    }
    getBoundingRect(e) {
      var t = f(e);
      return l.A.genericLinesBbox(t);
    }
    getPaperPath(e) {
      return p.A.fromGenericLines(f(e));
    }
  }
  var b = new v();
};
