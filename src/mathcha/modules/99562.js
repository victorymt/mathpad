/* module 99562 — 3638 chars */
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
        t = l.A.pathsD(e);
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
  function g(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = .15,
      o = s.A.rectHeight(e.data),
      a = s.A.rectWidth(e.data),
      l = i * o,
      d = n.y,
      h = r.x,
      p = n.x,
      u = s.A.ellipseToCubicBeziers(r, n),
      g = {
        p1: {
          x: h,
          y: d - l
        },
        p2: {
          x: p,
          y: d - l
        }
      },
      m = s.A.splitBezierByLine(u[2], g)[0] || u[2];
    return c.A.genericLinesTransformed(e.data, [u[0], u[1], m, {
      p1: m.p2,
      p2: {
        x: p,
        y: d - l
      }
    }, {
      p1: {
        x: p,
        y: d - l
      },
      p2: {
        x: p,
        y: d
      }
    }, {
      p1: {
        x: p,
        y: d
      },
      p2: {
        x: h + a / 2,
        y: d
      }
    }, u[3]]);
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
          d: " M4.4,10 C4.4,7.13 6.91,4.8 10,4.8 C13.09,4.8 15.6,7.13 15.6,10 C15.6,11.17 15.18,12.25 14.48,13.12 L15.6,13.12 L15.6,15.2 L10,15.2 C6.91,15.2 4.4,12.87 4.4,10 Z"
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
      return "flow-sequential-access-storage";
    }
    getSettingsComponent() {
      return m;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: g(e)
      };
    }
    getSnapablePoints(e) {
      return g(e).map(e => e.p2);
    }
    getBoundingRect(e) {
      var t = g(e);
      return s.A.genericLinesBbox(t);
    }
    getPaperPath(e) {
      return d.A.fromGenericLines(g(e));
    }
  }
  var y = new f();
};
