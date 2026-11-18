/* module 86029 — 9014 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    b: () => C,
    mt: () => E
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(19539),
    a = r(88925),
    l = r(91414),
    c = r(42480),
    d = r(20260),
    h = r(29315),
    p = r(33535);
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
  var m,
    f,
    y,
    v,
    b = [{
      p1: {
        x: 0,
        y: 0
      },
      cp: {
        x: .5122866232565925,
        y: .5122866232565925
      },
      cp2: {
        x: 1.0023136857678987,
        y: 1
      },
      p2: {
        x: Math.PI / 2,
        y: 1
      }
    }, {
      p1: {
        x: Math.PI / 2,
        y: 1
      },
      cp: {
        x: Math.PI / 2 + (Math.PI / 2 - 1.0023136857678987),
        y: 1
      },
      cp2: {
        x: Math.PI / 2 + (Math.PI / 2 - .5122866232565925),
        y: .5122866232565925
      },
      p2: {
        x: Math.PI,
        y: 0
      }
    }, {
      p1: {
        x: Math.PI + 0,
        y: 0
      },
      cp: {
        x: Math.PI + .5122866232565925,
        y: -.5122866232565925
      },
      cp2: {
        x: Math.PI + 1.0023136857678987,
        y: -1
      },
      p2: {
        x: Math.PI + Math.PI / 2,
        y: -1
      }
    }, {
      p1: {
        x: Math.PI + Math.PI / 2,
        y: -1
      },
      cp: {
        x: Math.PI + Math.PI / 2 + (Math.PI / 2 - 1.0023136857678987),
        y: -1
      },
      cp2: {
        x: Math.PI + Math.PI / 2 + (Math.PI / 2 - .5122866232565925),
        y: -.5122866232565925
      },
      p2: {
        x: Math.PI + Math.PI,
        y: 0
      }
    }];
  function x(e) {
    return void 0 === e.data.waveLength ? 50 : e.data.waveLength;
  }
  function C(e) {
    for (var t = e.data, r = t.p1, n = t.p2, i = t.trimPercentage, o = void 0 === i ? 0 : i, a = x(e), l = n.y - r.y, c = s.A.getCenterPoint(e.data), d = a * o, h = [], u = {
        p1: {
          x: r.x,
          y: r.y - 1
        },
        p2: {
          x: r.x,
          y: n.y + 1
        }
      }, g = {
        p1: {
          x: n.x,
          y: r.y - 1
        },
        p2: {
          x: n.x,
          y: n.y + 1
        }
      }, m = -d + r.x, f = 0; m < n.x; m += a / 4, f++) if (!(m + a / 4 <= r.x)) {
      var y = b[f % 4],
        v,
        C = a * Math.floor(f / 4) - d + r.x,
        S = s.A.transformCubicBezier(y, a / Math.PI / 2, l / 2, C, c.y);
      (m + a / 4 > n.x || m < r.x) && (S = s.A.splitBezierByVerticalLines(S, u, g)), h.push(S);
    }
    return p.A.genericLinesTransformed(e.data, h);
  }
  class S extends h.dV {
    render() {
      var e,
        t = C(this.props.shape),
        r = a.A.pathsD(t);
      return o().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.props.styleInfo.defs, o().createElement("path", {
        className: "transparent no-print",
        d: r,
        style: this.transparentStyle()
      }), o().createElement("path", {
        className: "real",
        style: this.props.styleInfo.style,
        d: r
      }));
    }
  }
  class A extends h.US {
    shouldComponentUpdate(e) {
      var t = e.entity.data,
        r = this.props.entity.data;
      return t.waveLength != r.waveLength || t.trimPercentage != r.trimPercentage;
    }
    render() {
      var e = x(this.props.entity),
        t = this.props.entity.data.trimPercentage || 0;
      return o().createElement("wave-settings", {
        style: {
          display: "flex"
        }
      }, o().createElement(l.A, {
        title: "Wave Length",
        unit: "px",
        min: 2,
        max: 200,
        step: 1,
        value: e,
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
            transform: "translate(-4px,0)"
          },
          d: " M3.65,10.28 C4.74,7.17 5.78,4.31 7,4.31 M7,4.31 C8.27,4.31 9.36,7.41 10.51,10.67 M10.51,10.67 C11.66,13.92 12.76,17.03 14.03,17.02 M14.03,17.02 C15.29,17.02 16.38,13.91 17.51,10.65 M17.51,10.65 C18.65,7.39 19.73,4.28 21,4.28 M21,4.28 C22.07,4.27 23.02,6.49 23.98,9.14"
        }), o().createElement(c.A, {
          p1: {
            x: -1,
            y: 11
          },
          p2: {
            x: 13,
            y: 11
          },
          style: {
            stroke: "green",
            strokeOpacity: .6,
            fill: "none",
            fillOpacity: .6
          }
        })),
        onValueChanging: e => this.props.onEntityPropertyChanging(this.props.entity, "data", "waveLength", e),
        onValueChanged: (e, t) => this.props.onEntityPropertyChanged(this.props.entity, "data", "waveLength", e, t)
      }), o().createElement(l.A, {
        title: "Wave Start Position",
        unit: "%",
        min: 0,
        max: 100,
        step: 1,
        value: 100 * t,
        icon: o().createElement("svg", {
          style: {
            width: "21px",
            height: "14px",
            strokeWidth: "1px",
            stroke: "lightgray",
            fill: "none",
            overflow: "visible"
          }
        }, o().createElement("defs", null, o().createElement("pattern", {
          id: "demo-pattern",
          width: "5",
          height: "5",
          patternUnits: "userSpaceOnUse"
        }, o().createElement("path", {
          d: "M0,5l5,-5M-1.25,1.25l2.5,-2.5M3.75,6.25l2.5,-2.5",
          stroke: "indianred",
          strokeWidth: "0.7",
          strokeLinecap: "square"
        }))), o().createElement("path", {
          style: {
            transform: "translate(-4px,0)"
          },
          d: " M3.65,10.28 C4.74,7.17 5.78,4.31 7,4.31 M7,4.31 C8.27,4.31 9.36,7.41 10.51,10.67 M10.51,10.67 C11.66,13.92 12.76,17.03 14.03,17.02 M14.03,17.02 C15.29,17.02 16.38,13.91 17.51,10.65 M17.51,10.65 C18.65,7.39 19.73,4.28 21,4.28 M21,4.28 C22.07,4.27 23.02,6.49 23.98,9.14"
        }), o().createElement("rect", {
          x: "0",
          y: "2",
          width: "10",
          height: "15",
          style: {
            stroke: "none",
            fill: "url(#demo-pattern)"
          }
        })),
        onValueChanging: e => this.props.onEntityPropertyChanging(this.props.entity, "data", "trimPercentage", e / 100),
        onValueChanged: (e, t) => this.props.onEntityPropertyChanged(this.props.entity, "data", "trimPercentage", e / 100, t)
      }), d.A.separator());
    }
  }
  class w extends h.Au {
    constructor() {
      super(...arguments), (0, n.A)(this, "getPaperPath", void 0);
    }
    getComponent() {
      return S;
    }
    getType() {
      return "wave";
    }
    getSettingsComponent() {
      return A;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      var t = C(e);
      return {
        boxLines: super.getBreakdownInfoData(e),
        data: t
      };
    }
    getIcon() {
      return {
        caption: "wave",
        component: o().createElement("svg", {
          style: {
            width: 25,
            height: 20,
            position: "relative"
          },
          key: "wave"
        }, o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,1px)"
          },
          d: " M2.59,10.62 C3.24,13.89 3.86,17 4.59,17 M4.59,17 C5.31,17 5.94,13.89 6.59,10.62 M6.59,10.62 C7.24,7.34 7.86,4.23 8.59,4.23 M8.59,4.23 C9.31,4.23 9.94,7.34 10.59,10.62 M10.59,10.62 C11.24,13.89 11.86,17 12.59,17 M12.59,17 C13.31,17 13.94,13.89 14.59,10.62 M14.59,10.62 C15.24,7.34 15.86,4.23 16.59,4.23 M16.59,4.23 C17.31,4.23 17.94,7.34 18.59,10.62 M18.59,10.62 C18.73,11.31 18.86,11.99 19,12.64"
        }))
      };
    }
    scale(e, t, r, n) {
      var i = super.scale(e, t, r, n),
        o = x(e),
        a = s.A.rectWidth(i.data) / s.A.rectWidth(e.data),
        l;
      return g(g({}, i), {}, {
        data: g(g({}, i.data), {}, {
          waveLength: o * a
        })
      });
    }
    styleSupports() {
      return ["thickness", "strokeColor", "strokeType", "rotation", "skewX"];
    }
  }
  var E = new w();
};
