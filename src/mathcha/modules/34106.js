/* module 34106 — 4372 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    UL: () => v,
    mt: () => C
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
    u = r(84369),
    g = r(66563);
  function m(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function f(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? m(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class y extends c.dV {
    render() {
      var e = v(this.shape()),
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
  function v(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.angle1,
      o = void 0 === i ? 0 : i,
      s = t.angle2,
      c = void 0 === s ? 270 : s,
      d = (0, h.k)({
        p1: r,
        p2: n
      }, o, c),
      u = a().first(d),
      g = a().last(d),
      m = l.A.getCenterPoint(e.data);
    return p.A.genericLinesTransformed(e.data, [...d, {
      p1: g.p2,
      p2: m
    }, {
      p1: m,
      p2: u.p1
    }]);
  }
  class b extends g.s {
    getDefaultStart() {
      return 0;
    }
    getDefaultEnd() {
      return 270;
    }
  }
  class x extends c.Au {
    getComponent() {
      return y;
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
          d: " M16.3,10.01 C16.3,10.04 16.3,10.07 16.3,10.1 C16.3,13.36 13.66,16 10.4,16 C7.14,16 4.5,13.36 4.5,10.1 C4.5,6.84 7.14,4.2 10.4,4.2 C10.44,4.2 10.49,4.2 10.53,4.2 L10.4,10.1 Z"
        }))
      };
    }
    createShape(e) {
      return super.createShape(f(f({}, e), {}, {
        shapeWidth: e.shapeWidth || 60,
        shapeHeight: e.shapeHeight || 70
      }));
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = v(e);
      return n.concat([{
        key: "md1",
        p: i[0].p1,
        type: "square"
      }, {
        key: "md2",
        p: i[i.length - 3].p2,
        type: "square"
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key && "md2" != e.key) return super.moveControlPoint(e);
      var t = e.key,
        r = e.shape,
        n = r.data.p2,
        i = l.A.getCenterPoint(r.data),
        o = p.A.reversePoint(e.shape.data, e.point),
        s = l.A.angleFrom3Points360({
          x: n.x,
          y: i.y
        }, o, i);
      switch (t) {
        case "md1":
          return this.changeShapeData(e.shape, "angle1", s);
        case "md2":
          return this.changeShapeData(e.shape, "angle2", s);
      }
      return e.shape;
    }
    getType() {
      return "doc-pie";
    }
    getSettingsComponent() {
      return b;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: v(e)
      };
    }
    getSnapablePoints(e) {
      var t = v(e);
      return [a().first(t).p1, t[t.length - 3].p2].concat(l.A.getCenterPoint(e.data));
    }
    getPaperPath(e) {
      return u.A.fromGenericLines(v(e));
    }
  }
  var C = new x();
};
