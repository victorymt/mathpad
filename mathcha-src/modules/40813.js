/* module 40813 — 10131 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    b: () => m,
    mt: () => A
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
  function m(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = v(e),
      o = b(e),
      a = x(e),
      l = s.A.getCenterPoint(e.data),
      c = [],
      d = {
        p1: {
          x: r.x - i,
          y: n.y
        },
        cp: {
          x: r.x - i - o,
          y: n.y
        },
        cp2: {
          x: r.x - i - o,
          y: r.y
        },
        p2: {
          x: r.x,
          y: r.y
        }
      },
      h = s.A.splitBezierByLine(d, {
        p1: {
          x: r.x - i - o - 100,
          y: l.y
        },
        p2: {
          x: r.x + i + o + 100,
          y: l.y
        }
      });
    0 == h.length && (h = [d, d]);
    var u = r.x - h[1].p1.x;
    d = s.A.transformCubicBezier(h[1], 1, 1, u, 0);
    var g = u * a;
    g == u ? (u = 0, d = null) : g > 0 && (u -= g, (h = s.A.splitBezierByLine(d, {
      p1: {
        x: r.x + g,
        y: r.y - 100
      },
      p2: {
        x: r.x + g,
        y: n.y + 100
      }
    })).length > 0 && (d = s.A.transformCubicBezier(h[1], 1, 1, -g, 0)));
    var m = {
      p1: {
        x: n.x,
        y: r.y - 1
      },
      p2: {
        x: n.x,
        y: n.y + 1
      }
    };
    d && (d = f(d, m), c.push(d));
    for (var y = r.x + u, C = !1; y < n.x; y += i, C = !C) {
      var S = void 0,
        A = f(S = C ? {
          p1: {
            x: y,
            y: n.y
          },
          cp: {
            x: y - o,
            y: n.y
          },
          cp2: {
            x: y - o,
            y: r.y
          },
          p2: {
            x: y + i,
            y: r.y
          }
        } : {
          p1: {
            x: y,
            y: r.y
          },
          cp: {
            x: y + i + o,
            y: r.y
          },
          cp2: {
            x: y + i + o,
            y: n.y
          },
          p2: {
            x: y + i,
            y: n.y
          }
        }, m),
        w = A != S;
      if (A && c.push(A), w) break;
    }
    return p.A.genericLinesTransformed(e.data, c);
  }
  function f(e, t) {
    var r;
    return s.A.intersectCubicBezierLineToLine(e, t).length > 0 ? s.A.splitBezierByLineGetFirstPart(e, t) : e;
  }
  class y extends h.dV {
    render() {
      var e = m(this.props.shape),
        t = a.A.pathsD(e);
      return o().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), o().createElement("path", {
        className: "transparent no-print",
        d: t,
        style: this.transparentStyle()
      }), o().createElement("path", {
        className: "real",
        d: t,
        style: this.style()
      }));
    }
  }
  function v(e) {
    return void 0 === e.data.distance ? 20 : e.data.distance;
  }
  function b(e) {
    return void 0 === e.data.smallDistance ? 6 : e.data.smallDistance;
  }
  function x(e) {
    return void 0 === e.data.trimPercentage ? 0 : e.data.trimPercentage;
  }
  class C extends h.US {
    shouldComponentUpdate(e) {
      var t = e.entity.data,
        r = this.props.entity.data;
      return t.distance != r.distance || t.smallDistance != r.smallDistance || t.trimPercentage != r.trimPercentage;
    }
    render() {
      var e = v(this.props.entity),
        t = b(this.props.entity),
        r = x(this.props.entity);
      return o().createElement("spring-settings", {
        style: {
          display: "flex"
        }
      }, o().createElement(l.A, {
        title: "Spring Option One",
        min: 2,
        max: 100,
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
            transform: "translate(-5px,0)"
          },
          d: " M4.04,2.9 C12.04,2.9 12.04,15.85 9.04,15.85 M9.04,15.85 C6.04,15.85 6.04,2.9 14.04,2.9 M14.04,2.9 C22.04,2.9 22.04,15.85 19.04,15.85 M19.04,15.85 C16.05,15.85 16.04,3.01 23.94,2.9"
        }), o().createElement(c.A, {
          p1: {
            x: 2,
            y: 10
          },
          p2: {
            x: 16,
            y: 10
          },
          style: {
            stroke: "green",
            strokeOpacity: .6,
            fill: "green",
            fillOpacity: .6
          }
        })),
        unit: "px",
        style: {
          width: 20
        },
        onValueChanging: e => this.props.onEntityPropertyChanging(this.props.entity, "data", "distance", e),
        onValueChanged: (e, t) => this.props.onEntityPropertyChanged(this.props.entity, "data", "distance", e, t)
      }), o().createElement(l.A, {
        title: "Spring Option Two",
        min: 2,
        max: 50,
        step: 1,
        value: t,
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
            transform: "translate(-5px,-1px)"
          },
          d: " M4.04,3.99 C4.69,3.92 5.37,3.88 6.09,3.88 M6.09,3.88 C20.09,3.88 20.09,17.91 13.09,17.91 M13.09,17.91 C6.09,17.91 6.09,3.88 20.09,3.88 M20.09,3.88 C20.78,3.88 21.44,3.92 22.07,3.98"
        }), o().createElement(c.A, {
          p1: {
            x: 0,
            y: 11
          },
          p2: {
            x: 16,
            y: 11
          },
          style: {
            stroke: "green",
            strokeOpacity: .6,
            fill: "green",
            fillOpacity: .6
          }
        })),
        unit: "px",
        style: {
          width: 20
        },
        onValueChanging: e => this.props.onEntityPropertyChanging(this.props.entity, "data", "smallDistance", e),
        onValueChanged: (e, t) => this.props.onEntityPropertyChanged(this.props.entity, "data", "smallDistance", e, t)
      }), o().createElement(l.A, {
        title: "Spring Option Three",
        style: {
          width: 20
        },
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
            transform: "translate(-5px,-2px)"
          },
          d: " M3.84,11.41 C4.71,7.66 6.96,3.91 11.46,3.91 M11.46,3.91 C20.46,3.91 20.46,18.91 18.46,18.91 M18.46,18.91 C16.75,18.91 16.51,7.97 22.08,4.78"
        }), o().createElement(c.A, {
          p1: {
            x: 0,
            y: 12
          },
          p2: {
            x: 11,
            y: 12
          },
          style: {
            stroke: "green",
            strokeOpacity: .6,
            fill: "green",
            fillOpacity: .6
          }
        })),
        unit: "%",
        min: 0,
        max: 100,
        step: 1,
        value: 100 * r,
        onValueChanging: e => this.props.onEntityPropertyChanging(this.props.entity, "data", "trimPercentage", e / 100),
        onValueChanged: (e, t) => this.props.onEntityPropertyChanged(this.props.entity, "data", "trimPercentage", e / 100, t)
      }), d.A.separator());
    }
  }
  class S extends h.Au {
    constructor() {
      super(...arguments), (0, n.A)(this, "getPaperPath", void 0);
    }
    getComponent() {
      return y;
    }
    getType() {
      return "spring";
    }
    createShape(e) {
      var t = super.createShape(e);
      return t.settings = {
        blockIntersection: !0
      }, t;
    }
    styleSupports() {
      return ["thickness", "strokeColor", "strokeType", "rotation", "skewX"];
    }
    getSettingsComponent() {
      return C;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      var t = m(e);
      return {
        boxLines: super.getBreakdownInfoData(e),
        data: t
      };
    }
    getIcon() {
      return {
        caption: "spring",
        component: o().createElement("svg", {
          style: {
            width: 23,
            height: 20,
            position: "relative"
          },
          key: "spring"
        }, o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,2px)"
          },
          d: " M2.87,9.35 C3.25,6.52 4.5,3.7 7,3.7 M7,3.7 C12,3.7 12,15 10,15 M10,15 C8,15 8,3.7 13,3.7 M13,3.7 C18,3.7 18,15 16,15 M16,15 C14,15 14,3.7 19,3.7 M19,3.7 C19,3.7 19,3.7 19,3.7"
        }))
      };
    }
    scale(e, t, r, n) {
      var i = super.scale(e, t, r, n),
        o = s.A.rectWidth(i.data) / s.A.rectWidth(e.data),
        a = v(e),
        l = b(e),
        c;
      return g(g({}, i), {}, {
        data: g(g({}, i.data), {}, {
          distance: a * o,
          smallDistance: l * o
        })
      });
    }
  }
  var A = new S();
};
