/* module 89184 — 2474 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    b: () => p,
    mt: () => g
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(19539),
    a = r(29315),
    l = r(33535),
    c = r(88925);
  class d extends a.dV {
    render() {
      var e = p(this.shape()),
        t = c.A.pathsD(e);
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
  class h extends a.US {}
  function p(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i,
      o = {
        p1: r,
        cp: {
          x: s.A.getCenterPoint(r, n).x,
          y: r.y + 2 * (n.y - r.y)
        },
        p2: {
          x: n.x,
          y: r.y
        }
      },
      a = s.A.quadraticToCubic(o);
    return l.A.genericLinesTransformed(e.data, [a]);
  }
  class u extends a.Au {
    constructor() {
      super(...arguments), (0, n.A)(this, "getPaperPath", void 0);
    }
    getComponent() {
      return d;
    }
    getType() {
      return "parabola";
    }
    getSettingsComponent() {
      return h;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: p(e)
      };
    }
    getSnapablePoints(e) {
      var t;
      return this.getControlPoints(e, void 0, {
        zoomRatio: 1
      }).filter(e => "left-top" == e.key || "top-right" == e.key || "bottom" == e.key).map(e => e.p);
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
        }, "2")),
        component: o().createElement("svg", {
          style: {
            width: 23,
            height: 20,
            position: "relative"
          },
          key: "parabola"
        }, o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0px,1px)"
          },
          d: "M3.664580556367241,4 Q9.83229027818362,28 16,4"
        }))
      };
    }
    getBoundingRect(e) {
      return e.data.rotation ? s.A.genericLinesBbox(p(e)) : e.data;
    }
  }
  var g = new u();
};
