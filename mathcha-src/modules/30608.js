/* module 30608 — 4215 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    b: () => g,
    mt: () => f
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(91414),
    a = r(88925),
    l = r(20260),
    c = r(29315),
    d = r(19539),
    h = r(33535);
  class p extends c.dV {
    render() {
      var e = g(this.shape()),
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
  class u extends c.US {
    shouldComponentUpdate(e) {
      var t = e.entity,
        r = this.props.entity;
      return t.data.curveDegree != r.data.curveDegree;
    }
    render() {
      var e = this.props.entity.data.curveDegree;
      e = e ?? 1;
      var t = Math.floor(e / 1.5 * 100);
      return o().createElement("polynomial-settings", null, o().createElement("main", null, o().createElement(s.A, {
        unit: "%",
        min: 0,
        max: 100,
        step: 1,
        value: t,
        title: "extrema",
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
            transform: "translate(4px,0)"
          },
          d: "M1,15 C5,-12 10,27 15,1 "
        }), o().createElement("path", {
          d: "M5,15 L5,4 M3,6 L5,4 L7,6",
          style: {
            stroke: "green",
            strokeOpacity: .8,
            transform: "translate(4px,-2px)"
          }
        })),
        onValueChanging: e => this.props.onEntityPropertyChanging(this.props.entity, "data", "curveDegree", e / 100 * 1.5),
        onValueChanged: (e, t) => this.props.onEntityPropertyChanged(this.props.entity, "data", "curveDegree", e / 100 * 1.5, t)
      }), l.A.separator()));
    }
  }
  function g(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.curveDegree,
      o = void 0 === i ? 1 : i,
      s = n.x - r.x,
      a = n.y - r.y,
      l = {
        p1: {
          x: r.x,
          y: n.y
        },
        cp: {
          x: r.x + s / 3,
          y: n.y - a * o * 2
        },
        cp2: {
          x: r.x + 2 * s / 3,
          y: r.y + a * o * 2
        },
        p2: {
          x: n.x,
          y: r.y
        }
      };
    return h.A.genericLinesTransformed(e.data, [l]);
  }
  class m extends c.Au {
    constructor() {
      super(...arguments), (0, n.A)(this, "getPaperPath", void 0);
    }
    getComponent() {
      return p;
    }
    getType() {
      return "polynomial";
    }
    getSettingsComponent() {
      return u;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: g(e)
      };
    }
    getIcon() {
      return {
        caption: o().createElement("div", {
          style: {
            marginTop: -3
          }
        }, "y=x", o().createElement("span", {
          style: {
            fontSize: "0.8em",
            verticalAlign: 2
          }
        }, "3")),
        component: o().createElement("svg", {
          style: {
            width: 23,
            height: 20,
            position: "relative"
          },
          key: "polynomial"
        }, o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,0px)"
          },
          d: "M4,18 C8.333333333333332,-10.979999999999997 12.666666666666666,32.98 17,4"
        }))
      };
    }
    getSnapablePoints(e) {
      var t;
      return this.getControlPoints(e, void 0, {
        zoomRatio: 1
      }).filter(e => "bottom-left" == e.key || "top-right" == e.key).map(e => e.p);
    }
    getBoundingRect(e) {
      return e.data.rotation ? d.A.genericLinesBbox(g(e)) : e.data;
    }
  }
  var f = new m();
};
