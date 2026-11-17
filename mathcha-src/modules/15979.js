/* module 15979 — 4936 chars */
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
        t = l.A.getLineD(e.outerBox),
        r = l.A.getLineD(e.line1),
        n = l.A.getLineD(e.line2),
        i = this.style(),
        s = this.styleNoFill();
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
        style: i
      }), o().createElement("path", {
        className: "real",
        d: r,
        style: s
      }), o().createElement("path", {
        className: "real",
        d: n,
        style: s
      }));
    }
  }
  function g(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = .125,
      o,
      a,
      l = s.A.rectWidth(e.data) * i,
      d = s.A.rectHeight(e.data) * i,
      h = r.y,
      p = r.y + d,
      u = n.y,
      g = r.x,
      m = r.x + l,
      f = n.x;
    return {
      outerBox: c.A.pointsTransformed(e.data, [{
        x: g,
        y: h
      }, {
        x: f,
        y: h
      }, {
        x: f,
        y: u
      }, {
        x: g,
        y: u
      }, {
        x: g,
        y: h
      }]),
      line1: c.A.pointsTransformed(e.data, [{
        x: m,
        y: h
      }, {
        x: m,
        y: u
      }]),
      line2: c.A.pointsTransformed(e.data, [{
        x: g,
        y: p
      }, {
        x: f,
        y: p
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
            transform: "translate(1.5px,0.5px)",
            transformOrigin: "50% 50%"
          },
          d: " M4,4.6 L15.6,4.6 L15.6,15.2 L4,15.2 Z"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1.5px,0.5px)",
            transformOrigin: "50% 50%"
          },
          d: " M5.45,4.6 L5.45,15.2"
        }), o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1.5px,0.5px)",
            transformOrigin: "50% 50%"
          },
          d: " M4,5.93 L15.6,5.93"
        }))
      };
    }
    createShape(e) {
      return super.createShape(p(p({}, e), {}, {
        shapeWidth: e.shapeWidth || 60,
        shapeHeight: e.shapeHeight || 70
      }));
    }
    getType() {
      return "flow-internal-storage";
    }
    getSettingsComponent() {
      return m;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      var t = g(e),
        r = s.A.pointsToLines(t.outerBox),
        n = s.A.pointsToLines(t.line1),
        i = s.A.pointsToLines(t.line2);
      return {
        data: r.concat(n).concat(i)
      };
    }
    getSnapablePoints(e) {
      var t = g(e);
      return t.outerBox.concat(t.line1).concat(t.line2).concat(s.A.getCenterPoint(e.data));
    }
    getBoundingRect(e) {
      var t = g(e);
      return s.A.getBoundingRectFromPoints(t.outerBox);
    }
    getPaperPath(e) {
      var t = g(e);
      return d.A.fromPoints(t.outerBox);
    }
  }
  var y = new f();
};
