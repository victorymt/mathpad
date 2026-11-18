/* module 86391 — 4896 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    UL: () => g,
    mt: () => y
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(19539),
    a = r(29315),
    l = r(88925),
    c = r(33535),
    d = r(84369);
  function h(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? h(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class u extends a.dV {
    render() {
      var e = g(this.shape()),
        t = l.A.pathsD(e.circle),
        r = l.A.pathsD(e.line1),
        n = l.A.pathsD(e.line2);
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
        style: this.styleNoFill()
      }), o().createElement("path", {
        className: "real",
        d: n,
        style: this.styleNoFill()
      }));
    }
  }
  function g(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = s.A.ellipseToCubicBeziers(r, n),
      o = {
        p1: r,
        p2: n
      },
      a = {
        p1: {
          x: n.x,
          y: r.y
        },
        p2: {
          x: r.x,
          y: n.y
        }
      },
      l = s.A.intersectCubicBezierLineToLine(i[0], o),
      d = s.A.intersectCubicBezierLineToLine(i[2], o),
      h = s.A.intersectCubicBezierLineToLine(i[1], a),
      p = s.A.intersectCubicBezierLineToLine(i[3], a);
    return {
      circle: c.A.genericLinesTransformed(e.data, i),
      line1: c.A.genericLinesTransformed(e.data, [{
        p1: l[0] || r,
        p2: d[0] || n
      }]),
      line2: c.A.genericLinesTransformed(e.data, [{
        p1: h[0] || r,
        p2: p[0] || n
      }])
    };
  }
  class m extends a.US {}
  class f extends a.Au {
    getComponent() {
      return u;
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
          d: " M4.44,10.77 C4.44,7.59 6.93,5 10,5 C13.07,5 15.56,7.59 15.56,10.77 C15.56,13.96 13.07,16.55 10,16.55 C6.93,16.55 4.44,13.96 4.44,10.77 Z"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M6.07,6.69 L13.93,14.86"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M13.93,6.69 L6.07,14.86"
        }))
      };
    }
    createShape(e) {
      return super.createShape(p(p({}, e), {}, {
        shapeWidth: e.shapeWidth || 70,
        shapeHeight: e.shapeHeight || 70
      }));
    }
    getType() {
      return "flow-summing-junction";
    }
    getSettingsComponent() {
      return m;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      var t = g(e);
      return {
        data: t.circle.concat(t.line1).concat(t.line2)
      };
    }
    getSnapablePoints(e) {
      return g(e).circle.map(e => e.p2).concat(s.A.getCenterPoint(e.data));
    }
    getBoundingRect(e) {
      var t = g(e);
      return s.A.genericLinesBbox(t.circle);
    }
    getPaperPath(e) {
      var t = g(e);
      return d.A.fromGenericLines(t.circle);
    }
  }
  var y = new f();
};
