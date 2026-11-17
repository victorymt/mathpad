/* module 13608 — 3133 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    UL: () => h,
    mt: () => g
  });
  var n = r(40927),
    i = r.n(n),
    o = r(19539),
    s = r(29315),
    a = r(88925),
    l = r(33535),
    c = r(84369);
  class d extends s.dV {
    render() {
      var e = h(this.shape()),
        t = a.A.pathsD(e);
      return i().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), this.getTransparentOnlyNoFill(t), i().createElement("path", {
        className: "real",
        d: t,
        style: this.style()
      }));
    }
  }
  function h(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = .2,
      s = o.A.rectWidth(e.data),
      a,
      c = i * o.A.rectHeight(e.data),
      d = r.y,
      h = n.y,
      p = r.x,
      u = n.x,
      g = o.A.ellipseToCubicBeziers({
        x: p,
        y: d
      }, {
        x: p + s / 2,
        y: d + c
      }),
      m = o.A.ellipseToCubicBeziers({
        x: p + s / 2,
        y: d
      }, {
        x: u,
        y: d + c
      }),
      f = o.A.ellipseToCubicBeziers({
        x: p + s / 2,
        y: h - c
      }, {
        x: u,
        y: h
      }),
      y = o.A.ellipseToCubicBeziers({
        x: p,
        y: h - c
      }, {
        x: p + s / 2,
        y: h
      });
    return l.A.genericLinesTransformed(e.data, [o.A.reverseBezierDirection(g[3]), o.A.reverseBezierDirection(g[2]), m[0], m[1], {
      p1: m[1].p2,
      p2: {
        x: u,
        y: h - c / 2
      }
    }, o.A.reverseBezierDirection(f[1]), o.A.reverseBezierDirection(f[0]), y[2], y[3], {
      p1: {
        x: p,
        y: h - c / 2
      },
      p2: {
        x: p,
        y: d + c / 2
      }
    }]);
  }
  class p extends s.US {}
  class u extends s.Au {
    getComponent() {
      return d;
    }
    getIcon() {
      return {
        caption: "",
        component: i().createElement("svg", {
          style: {
            width: 23,
            height: 20,
            position: "relative"
          },
          key: this.getType()
        }, i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M4,6.06 C4,6.65 5.32,7.12 6.95,7.12 C8.58,7.12 9.9,6.65 9.9,6.06 C9.9,5.47 11.22,5 12.85,5 C14.48,5 15.8,5.47 15.8,6.06 L15.8,14.54 C15.8,13.95 14.48,13.48 12.85,13.48 C11.22,13.48 9.9,13.95 9.9,14.54 C9.9,15.13 8.58,15.6 6.95,15.6 C5.32,15.6 4,15.13 4,14.54 Z"
        }))
      };
    }
    getType() {
      return "flow-punched-tape";
    }
    getSettingsComponent() {
      return p;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: h(e)
      };
    }
    getSnapablePoints(e) {
      return h(e).map(e => e.p2).concat(o.A.getCenterPoint(e.data));
    }
    getBoundingRect(e) {
      var t = h(e);
      return o.A.genericLinesBbox(t);
    }
    getPaperPath(e) {
      return c.A.fromGenericLines(h(e));
    }
  }
  var g = new u();
};
