/* module 71539 — 2966 chars */
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
      i = .35,
      s,
      a,
      c = o.A.rectWidth(e.data) / 2,
      d = o.A.rectHeight(e.data) / 2,
      h = Math.min(c, d),
      p = Math.min(h, i * h),
      u = r.y,
      g = n.y,
      m = r.x,
      f = n.x,
      y = o.A.getLeftTopArc({
        x: m + p,
        y: u + p
      }, p, p),
      v = o.A.getRightTopArc({
        x: f - p,
        y: u + p
      }, p, p),
      b = o.A.getRightBottomArc({
        x: f - p,
        y: g - p
      }, p, p),
      x = o.A.getLeftBottomArc({
        x: m + p,
        y: g - p
      }, p, p);
    return l.A.genericLinesTransformed(e.data, [y, {
      p1: {
        x: m + p,
        y: u
      },
      p2: {
        x: f - p,
        y: u
      }
    }, v, {
      p1: {
        x: f,
        y: u + p
      },
      p2: {
        x: f,
        y: g - p
      }
    }, b, {
      p1: {
        x: f - p,
        y: g
      },
      p2: {
        x: m + p,
        y: g
      }
    }, x, {
      p1: {
        x: m,
        y: g - p
      },
      p2: {
        x: m,
        y: u + p
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
          d: " M3.44,8.23 C3.44,6.57 4.79,5.23 6.45,5.23 L14,5.23 C15.66,5.23 17,6.57 17,8.23 L17,12.67 C17,14.33 15.66,15.67 14,15.67 L6.45,15.67 C4.79,15.67 3.44,14.33 3.44,12.67 L3.44,8.23"
        }))
      };
    }
    getType() {
      return "flow-alternative-process";
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
    getPaperPath(e) {
      return c.A.fromGenericLines(h(e));
    }
  }
  var g = new u();
};
