/* module 51092 — 6179 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Q1: () => v,
    UL: () => y,
    mt: () => C
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(2543),
    a = r.n(s),
    l = r(19539),
    c = r(88925),
    d = r(29315),
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
  class f extends d.dV {
    render() {
      var e = v(y(this.shape())),
        t = c.A.pathsD(e);
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
  function y(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.angle1,
      o = void 0 === i ? 70 : i,
      s = t.angle2,
      c = void 0 === s ? 290 : s,
      d = t.sizePercentage,
      u = void 0 === d ? .4 : d,
      g = l.A.rectWidth(e.data),
      m = l.A.rectHeight(e.data),
      f = Math.min(g / 2, m / 2),
      y = Math.min(f, f * u),
      v = (0, h.k)({
        p1: r,
        p2: n
      }, o, c),
      b = a().reverse(l.A.reverseBeziersDirection((0, h.k)({
        p1: {
          x: r.x + y,
          y: r.y + y
        },
        p2: {
          x: n.x - y,
          y: n.y - y
        }
      }, o, c))),
      x = a().first(v),
      C = a().last(v),
      S = a().first(b),
      A = a().last(b);
    return {
      outerCurve: p.A.genericLinesTransformed(e.data, v),
      innerCurve: p.A.genericLinesTransformed(e.data, b),
      firstConnectionLine: p.A.genericLinesTransformed(e.data, [{
        p1: {
          x: C.p2.x,
          y: C.p2.y
        },
        p2: {
          x: S.p1.x,
          y: S.p1.y
        }
      }]),
      secondConnectionLine: p.A.genericLinesTransformed(e.data, [{
        p1: {
          x: A.p2.x,
          y: A.p2.y
        },
        p2: {
          x: x.p1.x,
          y: x.p1.y
        }
      }])
    };
  }
  function v(e) {
    return [...e.outerCurve, ...e.firstConnectionLine, ...e.innerCurve, ...e.secondConnectionLine];
  }
  class b extends d.US {}
  class x extends d.Au {
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
            transform: "translate(1px,0px)"
          },
          d: " M12.01,15.53 C11.46,15.69 10.87,15.78 10.27,15.78 C6.92,15.78 4.2,13.19 4.2,9.99 C4.2,6.79 6.92,4.2 10.27,4.2 C12.67,4.2 14.75,5.53 15.73,7.47 L12.76,8.84 C12.29,8.02 11.35,7.47 10.27,7.47 C8.72,7.47 7.47,8.6 7.47,9.99 C7.47,11.38 8.72,12.51 10.27,12.51 C10.53,12.51 10.79,12.48 11.03,12.41 Z"
        }))
      };
    }
    createShape(e) {
      return super.createShape(m(m({}, e), {}, {
        shapeWidth: e.shapeWidth || 70,
        shapeHeight: e.shapeHeight || 70
      }));
    }
    getType() {
      return "doc-block-arc";
    }
    getSettingsComponent() {
      return b;
    }
    getAngleCutPoints(e) {
      var t = y(e);
      return [{
        key: "ap1",
        p: a().first(t.outerCurve).p1,
        type: "square"
      }, {
        key: "ap2",
        p: a().first(t.innerCurve).p1,
        type: "square"
      }];
    }
    getSnapablePoints(e) {
      var t = y(e);
      return t.outerCurve.concat(t.innerCurve).map(e => e.p2).concat([t.outerCurve[0].p1, t.innerCurve[0].p1, l.A.getCenterPoint(e.data)]);
    }
    getControlPoints(e, t, r) {
      var n;
      return super.getControlPoints(e, t, r).concat(this.getAngleCutPoints(e));
    }
    moveControlPoint(e) {
      var t = e.key,
        r = e.shape,
        n = l.A.getCenterPoint(r.data),
        i = r.data,
        o = i.p1,
        s = i.p2,
        c = p.A.reversePoint(e.shape.data, e.point),
        d = l.A.angleFrom3Points360({
          x: s.x,
          y: n.y
        }, c, n),
        h = s.x - o.x,
        u = s.y - o.y,
        g = Math.max(h, u),
        f = Math.min(h / 2, u / 2);
      switch (t) {
        case "ap1":
          return this.changeShapeData(e.shape, "angle1", d);
        case "ap2":
          var y = {
              p1: n,
              p2: l.A.pointRotate({
                x: s.x + g,
                y: n.y
              }, n, d)
            },
            v = l.A.ellipseToCubicBeziers(o, s),
            b = r.data.sizePercentage,
            x = null;
          if (v.find(e => {
            var t = l.A.splitBezierByLine(e, y);
            if (t && t.length > 0) return x = t[0].p2, !0;
          }), x) {
            var C = l.A.distance2Points(x, n),
              S = l.A.distance2Points(c, n),
              A;
            b = a().clamp(C - S, 0, f) / f;
          }
          return m(m({}, r), {}, {
            data: m(m({}, r.data), {}, {
              angle2: d,
              sizePercentage: b
            })
          });
      }
      return super.moveControlPoint(e);
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: v(y(e))
      };
    }
    getPaperPath(e) {
      var t = v(y(e));
      return u.A.fromGenericLines(t);
    }
  }
  var C = new x();
};
