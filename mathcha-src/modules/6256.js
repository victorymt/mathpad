/* module 6256 — 3666 chars */
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
      i = .17,
      o = s.A.rectWidth(e.data),
      a = s.A.rectHeight(e.data),
      l = i * o,
      d = r.y,
      h = n.y,
      p = r.x,
      u = n.x - l,
      g = n.x,
      m = s.A.ellipseToCubicBeziers({
        x: g - 2 * l,
        y: d
      }, {
        x: g,
        y: h
      });
    return c.A.genericLinesTransformed(e.data, [{
      p1: {
        x: p + l,
        y: d
      },
      p2: {
        x: u,
        y: d
      }
    }, m[1], m[2], {
      p1: {
        x: u,
        y: h
      },
      p2: {
        x: p + l,
        y: h
      }
    }, {
      p1: {
        x: p + l,
        y: h
      },
      p2: {
        x: p,
        y: d + a / 2
      }
    }, {
      p1: {
        x: p,
        y: d + a / 2
      },
      p2: {
        x: p + l,
        y: d
      }
    }]);
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
          d: " M6.18,5.25 L13.54,5.25 C14.9,5.25 16,7.49 16,10.25 C16,13.01 14.9,15.25 13.54,15.25 L6.18,15.25 L3.72,10.25 Z"
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
      return "flow-display";
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
      return g(e).map(e => e.p2).concat(s.A.getCenterPoint(e.data));
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
