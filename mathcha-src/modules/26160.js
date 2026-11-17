/* module 26160 — 3960 chars */
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
  function g(e, t) {
    var r = e.data,
      n = r.p1,
      i = r.p2,
      o = .35,
      a = s.A.rectWidth(e.data),
      l = a / 2,
      d = Math.min(l, o * a),
      h = n.y,
      p = i.y,
      u = n.x + d / 2,
      g = i.x - d / 2,
      m = i.x,
      f = s.A.ellipseToCubicBeziers({
        x: m - d,
        y: h
      }, {
        x: m,
        y: p
      }),
      y = s.A.ellipseToCubicBeziers({
        x: n.x,
        y: h
      }, {
        x: n.x + d,
        y: p
      });
    return t ? c.A.genericLinesTransformed(e.data, [{
      p1: {
        x: g,
        y: p
      },
      p2: {
        x: u,
        y: p
      }
    }, y[3], y[0], {
      p1: {
        x: u,
        y: h
      },
      p2: {
        x: g,
        y: h
      }
    }, f[1], f[2]]) : c.A.genericLinesTransformed(e.data, [{
      p1: {
        x: g,
        y: p
      },
      p2: {
        x: u,
        y: p
      }
    }, y[3], y[0], {
      p1: {
        x: u,
        y: h
      },
      p2: {
        x: g,
        y: h
      }
    }, f[2], f[3], f[0], f[1]]);
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
            transform: "translate(0px,1.5px) rotate(90deg)",
            transformOrigin: "50% 50%"
          },
          d: " M4.6,5.98 C4.6,4.66 7.06,3.6 10.1,3.6 C13.14,3.6 15.6,4.66 15.6,5.98 C15.6,7.29 13.14,8.36 10.1,8.36 C7.06,8.36 4.6,7.29 4.6,5.98 L4.6,13.81 C4.6,15.13 7.06,16.2 10.1,16.2 C13.14,16.2 15.6,15.13 15.6,13.81 L15.6,5.98"
        }))
      };
    }
    createShape(e) {
      return super.createShape(p(p({}, e), {}, {
        shapeWidth: e.shapeWidth || 70,
        shapeHeight: e.shapeHeight || 60
      }));
    }
    getType() {
      return "flow-direct-access-storage";
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
      return d.A.fromGenericLines(g(e, !0));
    }
  }
  var y = new f();
};
