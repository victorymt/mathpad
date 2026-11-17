/* module 97656 — 5940 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    UL: () => f,
    mt: () => x
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(19539),
    a = r(29315),
    l = r(88925),
    c = r(2543),
    d = r.n(c),
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
  class m extends a.dV {
    render() {
      var e = f(this.shape()),
        t = l.A.pathsD(e.outerBox),
        r = l.A.pathsD(e.corner);
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
        className: "real",
        d: t,
        style: this.style()
      }), o().createElement("path", {
        className: "real",
        d: r,
        style: this.styleNoFill()
      }));
    }
  }
  function f(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.cornerPercentage,
      o = void 0 === i ? .6 : i,
      a = s.A.rectWidth(e.data),
      l = s.A.rectHeight(e.data),
      c = Math.min(a / 2, l / 2),
      d = Math.min(c, o * c),
      p = .2 * d,
      u = r.y,
      g = n.y - d,
      m = n.y - d + p,
      f = n.y,
      y = r.x,
      v = n.x - d,
      b = n.x - d + p,
      x = n.x;
    return {
      outerBox: h.A.genericLinesTransformed(e.data, [{
        p1: {
          x: v,
          y: f
        },
        p2: {
          x: y,
          y: f
        }
      }, {
        p1: {
          x: y,
          y: f
        },
        p2: {
          x: y,
          y: u
        }
      }, {
        p1: {
          x: y,
          y: u
        },
        p2: {
          x,
          y: u
        }
      }, {
        p1: {
          x,
          y: u
        },
        p2: {
          x,
          y: g
        }
      }, {
        p1: {
          x,
          y: g
        },
        p2: {
          x: v,
          y: f
        }
      }, {
        p1: {
          x: v,
          y: f
        },
        p2: {
          x: v,
          y: f
        }
      }]),
      corner: h.A.genericLinesTransformed(e.data, [{
        p1: {
          x,
          y: g
        },
        p2: {
          x: b,
          y: m
        }
      }, {
        p1: {
          x: b,
          y: m
        },
        p2: {
          x: v,
          y: f
        }
      }])
    };
  }
  function y(e) {
    return e.outerBox.concat(e.corner);
  }
  class v extends a.US {}
  class b extends a.Au {
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
          d: " M10.53,16.22 L5.44,16.22 L5.44,4.89 L15.63,4.89 L15.63,11.13 L10.53,16.22 Z"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1px,0px)"
          },
          d: " M15.63,11.13 L11.55,12.15 L10.53,16.22"
        }))
      };
    }
    createShape(e) {
      return super.createShape(g(g({}, e), {}, {
        shapeWidth: e.shapeWidth || 50,
        shapeHeight: e.shapeHeight || 70
      }));
    }
    getComponent() {
      return m;
    }
    getType() {
      return "doc-folded-corner";
    }
    getSettingsComponent() {
      return v;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: y(f(e))
      };
    }
    getSnapablePoints(e) {
      return y(f(e)).map(e => e.p2).concat(s.A.getCenterPoint(e.data));
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p2,
        a = i.cornerPercentage,
        l = void 0 === a ? .6 : a,
        c = s.A.rectWidth(e.data),
        d = s.A.rectHeight(e.data),
        p = Math.min(c / 2, d / 2),
        u = Math.min(p, l * p),
        g = h.A.pointTransformed(e.data, {
          x: o.x - u,
          y: o.y
        });
      return n.concat([{
        key: "md1",
        type: "square",
        p: g
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key && "md2" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data,
        r = t.p1,
        n = t.p2,
        i = s.A.rectWidth(e.shape.data),
        o = s.A.rectHeight(e.shape.data),
        a = Math.min(i / 2, o / 2);
      if ("md1" == e.key) {
        var l = h.A.reversePointFixedY(e.shape.data, n.y, e.point),
          c = d().clamp(l.x, r.x - a, n.x),
          p = (n.x - c) / a;
        return this.changeShapeData(e.shape, "cornerPercentage", p);
      }
    }
    getPaperPath(e) {
      var t = f(e);
      return p.A.fromGenericLines(t.outerBox);
    }
  }
  var x = new b();
};
