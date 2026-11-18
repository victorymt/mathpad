/* module 320 — 3149 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    U: () => g,
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
        t = l.A.getLineD(e);
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
      i,
      o,
      a = s.A.rectWidth(e.data) / 2,
      l = s.A.rectHeight(e.data) / 2,
      d = r.y,
      h = r.y + l,
      p = n.y,
      u = r.x,
      g = r.x + a,
      m = n.x;
    return c.A.pointsTransformed(e.data, [{
      x: g,
      y: d
    }, {
      x: m,
      y: h
    }, {
      x: g,
      y: p
    }, {
      x: u,
      y: h
    }, {
      x: g,
      y: d
    }]);
  }
  class m extends a.US {}
  class f extends a.Au {
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
          d: " M10.1,4.6 L16.3,10 L10.1,15.4 L3.9,10 Z"
        }))
      };
    }
    createShape(e) {
      return super.createShape(p(p({}, e), {}, {
        shapeWidth: e.shapeWidth || 70,
        shapeHeight: e.shapeHeight || 70
      }));
    }
    getComponent() {
      return u;
    }
    getType() {
      return "doc-diamond";
    }
    getSettingsComponent() {
      return m;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: s.A.pointsToLines(g(e))
      };
    }
    getSnapablePoints(e) {
      return g(e).concat(s.A.getCenterPoint(e.data));
    }
    getBoundingRect(e) {
      var t = g(e);
      return s.A.getBoundingRectFromPoints(t);
    }
    getPaperPath(e) {
      return d.A.fromPoints(g(e));
    }
  }
  var y = new f();
};
