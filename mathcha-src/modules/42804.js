/* module 42804 — 2681 chars */
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
      u = n.x,
      g = o.A.ellipseToCubicBeziers({
        x: h,
        y: c
      }, {
        x: h + 2 * a,
        y: d
      }),
      m = o.A.ellipseToCubicBeziers({
        x: u - a,
        y: c
      }, {
        x: u + a,
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
    }, o.A.reverseBezierDirection(m[0]), o.A.reverseBezierDirection(m[3]), {
      p1: {
        x: u,
        y: d
      },
      p2: {
        x: p,
        y: d
      }
    }, g[3], g[0]]);
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
            transform: "translate(1px,1px)",
            transformOrigin: "50% 50%"
          },
          d: " M6.01,4.8 L16.35,4.8 C15.26,4.8 14.38,7.04 14.38,9.8 C14.38,12.56 15.26,14.8 16.35,14.8 L6.01,14.8 C4.93,14.8 4.04,12.56 4.04,9.8 C4.04,7.04 4.93,4.8 6.01,4.8 Z"
        }))
      };
    }
    getType() {
      return "flow-stored-data";
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
