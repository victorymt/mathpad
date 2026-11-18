/* module 87671 — 2653 chars */
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
      i,
      s,
      a = .16 * o.A.rectWidth(e.data),
      c = r.y,
      d = n.y,
      h = r.x,
      p = r.x + a,
      u = n.x - a,
      g = n.x,
      m = o.A.ellipseToCubicBeziers({
        x: h,
        y: c
      }, {
        x: h + 2 * a,
        y: d
      }),
      f = o.A.ellipseToCubicBeziers({
        x: g - 2 * a,
        y: c
      }, {
        x: g,
        y: d
      });
    return l.A.genericLinesTransformed(e.data, [{
      p1: {
        x: p,
        y: c
      },
      p2: {
        x: u,
        y: c
      }
    }, f[1], f[2], {
      p1: {
        x: u,
        y: d
      },
      p2: {
        x: p,
        y: d
      }
    }, m[3], m[0]]);
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
          d: " M5.6,5.56 L14.74,5.56 C15.93,5.56 16.89,7.62 16.89,10.17 C16.89,12.71 15.93,14.78 14.74,14.78 L5.6,14.78 C4.41,14.78 3.44,12.71 3.44,10.17 C3.44,7.62 4.41,5.56 5.6,5.56 Z"
        }))
      };
    }
    getType() {
      return "flow-terminator";
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
