/* module 27232 — 4831 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    UL: () => f,
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
        style: g(g({}, this.style()), {}, {
          fillRule: "evenodd"
        })
      }));
    }
  }
  function f(e) {
    var t = y(e);
    return t.inner.concat(t.outer);
  }
  function y(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.percentage,
      o = void 0 === i ? .6 : i,
      s = l.A.rectWidth(e.data),
      a = l.A.rectHeight(e.data),
      c = Math.min(s / 2, a / 2),
      d = Math.min(o * c, c),
      p = l.A.ellipseToCubicBeziers(r, n),
      u = l.A.ellipseToCubicBeziers({
        x: r.x + d,
        y: r.y + d
      }, {
        x: n.x - d,
        y: n.y - d
      });
    return {
      outer: h.A.genericLinesTransformed(e.data, p),
      inner: h.A.genericLinesTransformed(e.data, u)
    };
  }
  class v extends c.US {}
  class b extends c.Au {
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
          d: " M7.06,10.11 C7.06,8.61 8.43,7.39 10.11,7.39 C11.8,7.39 13.16,8.61 13.16,10.11 C13.16,11.61 11.8,12.82 10.11,12.82 C8.43,12.82 7.06,11.61 7.06,10.11 M3.67,10.11 C3.67,6.74 6.55,4 10.11,4 C13.67,4 16.56,6.74 16.56,10.11 C16.56,13.48 13.67,16.22 10.11,16.22 C6.55,16.22 3.67,13.48 3.67,10.11"
        }))
      };
    }
    createShape(e) {
      return super.createShape(g(g({}, e), {}, {
        shapeWidth: e.shapeWidth || 60,
        shapeHeight: e.shapeHeight || 60
      }));
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.percentage,
        a = void 0 === s ? .6 : s,
        c = l.A.rectHeight(e.data),
        d = l.A.rectWidth(e.data),
        p = Math.min(d / 2, c / 2),
        u = Math.min(a * p, p),
        g = h.A.pointTransformed(e.data, {
          x: o.x + u,
          y: o.y + c / 2
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
        n = l.A.rectWidth(e.shape.data),
        i = Math.min(n / 2, r / 2);
      if ("md1" == e.key) {
        var o = h.A.reversePointFixedY(e.shape.data, t.y + r / 2, e.point),
          s,
          c = (a().clamp(o.x, t.x, t.x + i) - t.x) / i;
        return this.changeShapeData(e.shape, "percentage", c);
      }
      return e.shape;
    }
    getType() {
      return "doc-donut";
    }
    getSettingsComponent() {
      return v;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: f(e)
      };
    }
    getSnapablePoints(e) {
      return f(e).map(e => e.p2).concat(l.A.getCenterPoint(e.data));
    }
    getBoundingRect(e) {
      var t = f(e);
      return l.A.genericLinesBbox(t);
    }
    getPaperPath(e) {
      var t = y(e);
      return p.A.compoundPath([p.A.fromGenericLines(t.outer), p.A.fromGenericLines(t.inner)], {
        fillRule: "evenodd"
      });
    }
  }
  var x = new b();
};
