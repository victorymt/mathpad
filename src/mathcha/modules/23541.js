/* module 23541 — 2406 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    U: () => h,
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
        t = a.A.getLineD(e);
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
      i = t.percentage,
      s = void 0 === i ? 3 / 8 : i,
      a,
      c,
      d = o.A.rectWidth(e.data) / 2,
      h = o.A.rectHeight(e.data) / 2,
      p = Math.min(d, s * d),
      u = r.y,
      g = r.y + h,
      m = n.y,
      f = r.x,
      y = r.x + p,
      v = n.x - p,
      b = n.x;
    return l.A.pointsTransformed(e.data, [{
      x: f,
      y: g
    }, {
      x: y,
      y: u
    }, {
      x: v,
      y: u
    }, {
      x: b,
      y: g
    }, {
      x: v,
      y: m
    }, {
      x: y,
      y: m
    }, {
      x: f,
      y: g
    }]);
  }
  class p extends s.US {}
  class u extends s.Au {
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
            transform: "translate(1px,0px)"
          },
          d: "M3.7,10.3 L6.14,4.8 L14.26,4.8 L16.7,10.3 L14.26,15.8 L6.14,15.8 Z"
        }))
      };
    }
    getComponent() {
      return d;
    }
    getType() {
      return "flow-preparation";
    }
    getSettingsComponent() {
      return p;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: o.A.pointsToLines(h(e))
      };
    }
    getSnapablePoints(e) {
      return h(e).concat(o.A.getCenterPoint(e.data));
    }
    getBoundingRect(e) {
      var t = h(e);
      return o.A.getBoundingRectFromPoints(t);
    }
    getPaperPath(e) {
      return c.A.fromPoints(h(e));
    }
  }
  var g = new u();
};
