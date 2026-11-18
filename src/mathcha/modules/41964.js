/* module 41964 — 8369 chars */
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
        t = d.A.getLineD(e.outerBox),
        r = d.A.getLineD(e.innerBox),
        n = d.A.getLineD(e.leftTopLink),
        i = d.A.getLineD(e.rightTopLink),
        s = d.A.getLineD(e.rightBottomLink),
        a = d.A.getLineD(e.leftBottomLink),
        l = this.style(),
        c = this.styleNoFill();
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
        className: "transparent no-print",
        d: s,
        style: this.transparentStyle()
      }), o().createElement("path", {
        className: "transparent no-print",
        d: a,
        style: this.transparentStyle()
      }), o().createElement("path", {
        className: "real",
        d: t,
        style: l
      }), o().createElement("path", {
        className: "real",
        d: r,
        style: c
      }), o().createElement("path", {
        className: "real",
        d: n,
        style: c
      }), o().createElement("path", {
        className: "real",
        d: i,
        style: c
      }), o().createElement("path", {
        className: "real",
        d: s,
        style: c
      }), o().createElement("path", {
        className: "real",
        d: a,
        style: c
      }));
    }
  }
  function f(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.percentage,
      o = void 0 === i ? .4 : i,
      s = l.A.rectWidth(e.data),
      a = l.A.rectHeight(e.data),
      c = Math.min(s / 2, a / 2),
      d = Math.min(c, o * c),
      p = r.y,
      u = r.y + d,
      g = n.y - d,
      m = n.y,
      f = r.x,
      y = r.x + d,
      v = n.x - d,
      b = n.x;
    return {
      outerBox: h.A.pointsTransformed(e.data, [{
        x: f,
        y: p
      }, {
        x: b,
        y: p
      }, {
        x: b,
        y: m
      }, {
        x: f,
        y: m
      }, {
        x: f,
        y: p
      }]),
      innerBox: h.A.pointsTransformed(e.data, [{
        x: y,
        y: u
      }, {
        x: v,
        y: u
      }, {
        x: v,
        y: g
      }, {
        x: y,
        y: g
      }, {
        x: y,
        y: u
      }]),
      leftTopLink: h.A.pointsTransformed(e.data, [{
        x: f,
        y: p
      }, {
        x: y,
        y: u
      }]),
      rightTopLink: h.A.pointsTransformed(e.data, [{
        x: b,
        y: p
      }, {
        x: v,
        y: u
      }]),
      rightBottomLink: h.A.pointsTransformed(e.data, [{
        x: b,
        y: m
      }, {
        x: v,
        y: g
      }]),
      leftBottomLink: h.A.pointsTransformed(e.data, [{
        x: f,
        y: m
      }, {
        x: y,
        y: g
      }])
    };
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
            transform: "translate(1.5px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M4,4.2 L16,4.2 L16,15.77 L4,15.77 Z"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1.5px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M6.69,6.89 L13.31,6.89 L13.31,13.08 L6.69,13.08 Z"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1.5px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M4,4.2 L6.69,6.89"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1.5px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M16,4.2 L13.31,6.89"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1.5px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M16,15.77 L13.31,13.08"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1.5px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M4,15.77 L6.69,13.08"
        }))
      };
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.percentage,
        a = void 0 === s ? .4 : s,
        c = l.A.rectHeight(e.data),
        d = l.A.rectWidth(e.data),
        p = Math.min(d / 2, c / 2),
        u = Math.min(p, a * p),
        g = h.A.pointTransformed(e.data, {
          x: o.x + u,
          y: o.y
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
        var o = h.A.reversePointFixedY(e.shape.data, t.y, e.point),
          s,
          c = (a().clamp(o.x, t.x, t.x + i) - t.x) / i;
        return this.changeShapeData(e.shape, "percentage", c);
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
      return "doc-bevel";
    }
    getSettingsComponent() {
      return y;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      var t = f(e),
        r = l.A.pointsToLines(t.outerBox),
        n = l.A.pointsToLines(t.innerBox),
        i = l.A.pointsToLines(t.leftTopLink),
        o = l.A.pointsToLines(t.rightTopLink),
        s = l.A.pointsToLines(t.rightBottomLink),
        a = l.A.pointsToLines(t.leftBottomLink);
      return {
        data: r.concat(n).concat(i).concat(o).concat(s).concat(a)
      };
    }
    getSnapablePoints(e) {
      var t = f(e);
      return t.outerBox.concat(t.innerBox).concat(l.A.getCenterPoint(e.data));
    }
    getBoundingRect(e) {
      var t = f(e);
      return l.A.getBoundingRectFromPoints(t.outerBox);
    }
    getPaperPath(e) {
      var t = f(e);
      return p.A.fromPoints(t.outerBox);
    }
  }
  var b = new v();
};
