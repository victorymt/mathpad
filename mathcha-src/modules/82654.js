/* module 82654 — 9101 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    mt: () => w,
    z: () => C
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(2543),
    a = r.n(s),
    l = r(20260),
    c = r(42480),
    d = r(91414),
    h = r(24829),
    p = r(29315),
    u = r(38070),
    g = r(19539),
    m = r(33535),
    f = r(88925),
    y = r(391);
  function v(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function b(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? v(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class x extends p.dV {
    render() {
      var e = C(this.shape()),
        t = f.A.pathsD(e.vLines),
        r = f.A.pathsD(e.hLines),
        n = f.A.getLineD(e.borders),
        i = f.A.getLineD(e.rect);
      return o().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.props.styleInfo.defs, o().createElement("path", {
        className: "transparent no-print",
        style: this.transparentStyle(),
        d: t
      }), o().createElement("path", {
        className: "transparent no-print",
        style: this.transparentStyle(),
        d: r
      }), o().createElement("path", {
        className: "transparent no-print",
        style: this.transparentStyle(),
        d: n
      }), o().createElement("path", {
        className: "real",
        style: this.styleNoStroke(),
        d: i
      }), o().createElement("path", {
        className: "real",
        style: this.styleNoFill(),
        d: t
      }), o().createElement("path", {
        className: "real",
        style: this.styleNoFill(),
        d: r
      }), o().createElement("path", {
        className: "real",
        style: this.styleNoFill(),
        d: n
      }));
    }
  }
  function C(e) {
    var t = y.A.getSettings(e, "cellSize"),
      r = y.A.getSettings(e, "topLeftDistance"),
      n = y.A.getSettings(e, "cellBorderOnly"),
      i = e.data,
      o = i.p1,
      s = i.p2,
      a = s.x - o.x,
      l = s.y - o.y,
      c = [],
      d = [],
      h = [],
      p = [],
      u = o.y,
      g = s.y,
      f = o.x,
      v = s.x,
      b = 0;
    if (n) {
      var x = Math.floor((l - r) / t),
        C = Math.floor((a - r) / t);
      b = t, u = r + o.y, g = o.y + r + x * t, p = [{
        x: f = r + o.x,
        y: u
      }, {
        x: v = o.x + r + C * t,
        y: u
      }, {
        x: v,
        y: g
      }, {
        x: f,
        y: g
      }, {
        x: f,
        y: u
      }];
    }
    for (var S = r + b; S < a - b; S += t) c.push({
      p1: {
        x: o.x + S,
        y: u
      },
      p2: {
        x: o.x + S,
        y: g
      }
    });
    for (var A = r + b; A < l - b; A += t) d.push({
      p1: {
        x: f,
        y: o.y + A
      },
      p2: {
        x: v,
        y: o.y + A
      }
    });
    for (var w = r; w < a; w += t) for (var E = r; E < l; E += t) h.push({
      x: o.x + w,
      y: o.y + E
    });
    return {
      vLines: m.A.genericLinesTransformed(e.data, c),
      hLines: m.A.genericLinesTransformed(e.data, d),
      borders: m.A.pointsTransformed(e.data, p),
      intersectPoints: m.A.pointsTransformed(e.data, h),
      rect: m.A.pointsTransformed(e.data, [{
        x: f,
        y: u
      }, {
        x: v,
        y: u
      }, {
        x: v,
        y: g
      }, {
        x: f,
        y: g
      }, {
        x: f,
        y: u
      }])
    };
  }
  class S extends p.US {
    render() {
      var e = this.props.entity,
        t = "cellSize",
        r = y.A.getSettings(e, t),
        n = "topLeftDistance",
        i = y.A.getSettings(e, n),
        s = "cellBorderOnly",
        a = y.A.getSettings(e, s);
      return o().createElement("grid-settings", {
        style: {
          display: "flex"
        }
      }, o().createElement(d.A, {
        title: "Size",
        unit: "px",
        min: 5,
        max: 200,
        step: 1,
        value: r,
        icon: o().createElement("svg", {
          style: {
            width: "21px",
            height: "14px",
            strokeWidth: "1px",
            stroke: "lightgray",
            fill: "none",
            overflow: "visible"
          }
        }, o().createElement("path", {
          style: {
            transform: "translate(-4px,5px)",
            stroke: "gray"
          },
          d: "M2,7 L20,7 M6,4 L6,10  M16,4 L16,10"
        }), o().createElement(c.A, {
          p1: {
            x: 0,
            y: 6
          },
          p2: {
            x: 14,
            y: 6
          },
          style: {
            stroke: "green",
            strokeOpacity: .8,
            fill: "none",
            fillOpacity: .6
          }
        })),
        onValueChanging: r => this.props.onEntityPropertyChanging(e, "settings", t, r),
        onValueChanged: (r, n) => this.props.onEntityPropertyChanged(e, "settings", t, r, n)
      }), l.A.separator(), o().createElement(d.A, {
        title: "Corner Shift",
        unit: "px",
        min: 0,
        max: 200,
        step: 1,
        value: i,
        icon: o().createElement("svg", {
          style: {
            width: "21px",
            height: "14px",
            strokeWidth: "1px",
            stroke: "lightgray",
            fill: "none",
            overflow: "visible",
            transform: "translate(5px,1px)"
          }
        }, o().createElement("path", {
          style: {
            transform: "translate(-4px,5px)",
            stroke: "gray"
          },
          d: "M5,10 L5,3 L13,3"
        }), o().createElement(c.A, {
          p1: {
            x: 0,
            y: 6
          },
          p2: {
            x: 14,
            y: 6
          },
          style: {
            stroke: "green",
            strokeOpacity: .8,
            fill: "none",
            fillOpacity: .6,
            transform: "scale(0.8) translate(-4px,-2px)"
          }
        }), o().createElement(c.A, {
          p1: {
            x: 0,
            y: 6
          },
          p2: {
            x: 14,
            y: 6
          },
          style: {
            stroke: "green",
            strokeOpacity: .8,
            fill: "none",
            fillOpacity: .6,
            transform: "scale(0.8) rotate(90deg) translate(4px, 0px)"
          }
        })),
        onValueChanging: t => this.props.onEntityPropertyChanging(e, "settings", n, t),
        onValueChanged: (t, r) => this.props.onEntityPropertyChanged(e, "settings", n, t, r)
      }), l.A.separator(), o().createElement("item", {
        title: "Rect Border Only",
        onMouseDown: () => {
          this.props.onEntityPropertyChanged(e, "settings", s, !a);
        },
        className: a ? "selected" : "",
        style: {
          width: 22
        }
      }, h.A.grid), l.A.separator());
    }
  }
  class A extends p.Au {
    constructor() {
      super(...arguments), (0, n.A)(this, "getPaperPath", void 0);
    }
    getComponent() {
      return x;
    }
    getType() {
      return "grid";
    }
    getSettingsComponent() {
      return S;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      var t = C(e);
      return {
        data: t.vLines.concat(t.hLines).concat(g.A.pointsToLines(t.borders, !1))
      };
    }
    getSettingDefaultValue(e) {
      var t = super.getSettingDefaultValue(e);
      return t || ("cellSize" == e ? 20 : "topLeftDistance" == e ? 0 : "cellBorderOnly" != e && void 0);
    }
    getIcon() {
      var e = u.A.getIconSvgStyle();
      return e = a().assign(e, {
        height: 20,
        strokeWidth: 1
      }), {
        caption: "grid",
        component: o().createElement("span", {
          key: "grid"
        }, o().createElement("svg", {
          style: e
        }, o().createElement("path", {
          d: "M2,4 L20,4 M2,11 L20,11 M2,18 L20,18   M4,2 L4,20 M11,2 L11,20 M18,2 L18,20"
        })))
      };
    }
    getSnapablePoints(e) {
      var t;
      return C(e).intersectPoints;
    }
    scale(e, t, r, n) {
      var i = super.scale(e, t, r, n),
        o = y.A.getSettings(e, "cellSize"),
        s = y.A.getSettings(e, "topLeftDistance"),
        a = g.A.rectWidth(i.data) / g.A.rectWidth(e.data),
        l = g.A.rectHeight(i.data) / g.A.rectHeight(e.data),
        c = Math.max(a, l),
        d;
      return b(b({}, i), {}, {
        settings: b(b({}, i.settings), {}, {
          cellSize: o * c,
          topLeftDistance: s * c
        })
      });
    }
  }
  var w = new A();
};
