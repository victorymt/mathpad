/* module 99346 — 5043 chars */
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
  function f(e, t) {
    var r = e.data,
      n = r.p1,
      i = r.p2,
      o = r.yDiameterPercentage,
      s = void 0 === o ? .3 : o,
      a = l.A.rectWidth(e.data),
      c = l.A.rectHeight(e.data),
      d = c / 2,
      p = Math.min(a, c),
      u = Math.min(d, s * p),
      g = n.y,
      m = n.y + u / 2,
      f = i.y - u / 2,
      y = n.x,
      v = i.x,
      b = l.A.ellipseToCubicBeziers({
        x: y,
        y: g
      }, {
        x: v,
        y: m + u / 2
      }),
      x = l.A.ellipseToCubicBeziers({
        x: y,
        y: f - u / 2
      }, {
        x: v,
        y: f + u / 2
      });
    return t ? h.A.genericLinesTransformed(e.data, [{
      p1: {
        x: v,
        y: m
      },
      p2: {
        x: v,
        y: f
      }
    }, x[2], x[3], {
      p1: {
        x: y,
        y: f
      },
      p2: {
        x: y,
        y: m
      }
    }, b[0], b[1]]) : h.A.genericLinesTransformed(e.data, [{
      p1: {
        x: v,
        y: m
      },
      p2: {
        x: v,
        y: f
      }
    }, x[2], x[3], {
      p1: {
        x: y,
        y: f
      },
      p2: {
        x: y,
        y: m
      }
    }, b[0], b[1], b[2], b[3]]);
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
          d: " M4.6,5.98 C4.6,4.66 7.06,3.6 10.1,3.6 C13.14,3.6 15.6,4.66 15.6,5.98 C15.6,7.29 13.14,8.36 10.1,8.36 C7.06,8.36 4.6,7.29 4.6,5.98 L4.6,13.81 C4.6,15.13 7.06,16.2 10.1,16.2 C13.14,16.2 15.6,15.13 15.6,13.81 L15.6,5.98"
        }))
      };
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.yDiameterPercentage,
        a = void 0 === s ? .3 : s,
        c = l.A.rectHeight(e.data),
        d = l.A.rectWidth(e.data),
        p = c / 2,
        u = Math.min(d, c),
        g = Math.min(p, a * u),
        m = h.A.pointTransformed(e.data, {
          x: o.x + d / 2,
          y: o.y + g
        });
      return n.concat([{
        key: "md1",
        type: "square",
        p: m
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data.p1,
        r = l.A.rectHeight(e.shape.data),
        n = l.A.rectWidth(e.shape.data),
        i = r / 2,
        o = Math.min(n, r);
      if ("md1" == e.key) {
        var s = h.A.reversePoint(e.shape.data, e.point),
          c,
          d = (a().clamp(s.y, t.y, t.y + i) - t.y) / o;
        return this.changeShapeData(e.shape, "yDiameterPercentage", d);
      }
      return e.shape;
    }
    createShape(e) {
      return super.createShape(g(g({}, e), {}, {
        shapeWidth: e.shapeWidth || 60,
        shapeHeight: e.shapeHeight || 70
      }));
    }
    getType() {
      return "doc-can";
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
    getPaperPath(e) {
      return p.A.fromGenericLines(f(e, !0), !0);
    }
  }
  var b = new v();
};
