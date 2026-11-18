/* module 67194 — 4273 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => g,
    Ay: () => u,
    Un: () => m,
    mt: () => y
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(19539),
    a = r(88925),
    l = r(20260),
    c = r(91414),
    d = r(29315),
    h = r(33535),
    p = r(84369);
  class u extends d.dV {
    render() {
      var e = g(this.shape()),
        t = a.A.pathsD(e);
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
      i = t.sides;
    i = i || 6;
    for (var o = (n.x - r.x) / 2, a = (n.y - r.y) / 2, l = s.A.getCenterPoint(r, n), c = [], d = 0; d < i; d += 1) c.push({
      p1: {
        x: l.x + o * Math.cos(2 * d * Math.PI / i),
        y: l.y + a * Math.sin(2 * d * Math.PI / i)
      },
      p2: {
        x: l.x + o * Math.cos(2 * (d + 1) * Math.PI / i),
        y: l.y + a * Math.sin(2 * (d + 1) * Math.PI / i)
      }
    });
    return h.A.genericLinesTransformed(e.data, c);
  }
  class m extends d.US {
    shouldComponentUpdate(e) {
      var t = e.entity,
        r = this.props.entity;
      return t.data.sides != r.data.sides;
    }
    render() {
      var e = this.props.entity.data.sides || 6,
        t = {
          stroke: "green",
          strokeWidth: 1,
          fill: "green"
        };
      return o().createElement("regular-polygon-settings", null, o().createElement("main", null, o().createElement(c.A, {
        unit: "",
        min: 3,
        max: 50,
        step: 1,
        value: e,
        icon: o().createElement("svg", {
          style: {
            width: "21px",
            height: "14px",
            strokeWidth: "1px",
            stroke: "lightgray",
            fill: "none",
            overflow: "visible",
            transform: "translate(0px,-1px)"
          }
        }, o().createElement("path", {
          style: {
            transform: "translate(0,0)"
          },
          d: " M18,10.7 L14.8,16.24 L8.4,16.24 L5.2,10.7 L8.4,5.16 L14.8,5.16 L18,10.7 L14.8,16.24"
        }), o().createElement("circle", {
          cx: "18",
          cy: "10.7",
          r: "1",
          style: t
        }), o().createElement("circle", {
          cx: "14.8",
          cy: "16.24",
          r: "1",
          style: t
        }), o().createElement("circle", {
          cx: "8.4",
          cy: "16.24",
          r: "1",
          style: t
        }), o().createElement("circle", {
          cx: "5.2",
          cy: "10.7",
          r: "1",
          style: t
        }), o().createElement("circle", {
          cx: "8.4",
          cy: "5.16",
          r: "1",
          style: t
        }), o().createElement("circle", {
          cx: "14.8",
          cy: "5.16",
          r: "1",
          style: t
        })),
        onValueChanging: e => this.props.onEntityPropertyChanging(this.props.entity, "data", "sides", e),
        onValueChanged: (e, t) => this.props.onEntityPropertyChanged(this.props.entity, "data", "sides", e, t)
      }), l.A.separator()));
    }
  }
  class f extends d.Au {
    constructor() {
      super(...arguments), (0, n.A)(this, "getSupplementaryLines", e => {
        var t = [];
        return t = (t = s.A.pointsToLines(s.A.getPointsRect(e.data))).concat(s.A.ellipseToCubicBeziers(e.data.p1, e.data.p2)), h.A.genericLinesTransformed(e.data, t);
      });
    }
    getComponent() {
      return u;
    }
    getType() {
      return "regular-polygon-almost";
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
      var t = e.data,
        r = t.p1,
        n = t.p2,
        i = s.A.getCenterPoint(r, n),
        o;
      return g(e).map(e => e.p2).concat(i).concat(i);
    }
    getBoundingRect(e) {
      return s.A.genericLinesBbox(g(e));
    }
    getPaperPath(e) {
      return p.A.fromGenericLines(g(e));
    }
  }
  var y = new f();
};
