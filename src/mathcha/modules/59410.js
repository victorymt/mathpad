/* module 59410 — 2204 chars */
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
      i,
      s,
      a = o.A.rectWidth(e.data) / 2,
      c = o.A.rectHeight(e.data) / 2,
      d = r.y,
      h = r.y + c,
      p = n.y,
      u = r.x,
      g = r.x + a,
      m = n.x;
    return l.A.pointsTransformed(e.data, [{
      x: g,
      y: d
    }, {
      x: m,
      y: h
    }, {
      x: g,
      y: p
    }, {
      x: u,
      y: h
    }, {
      x: g,
      y: d
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
          d: " M10.1,4.6 L16.3,10 L10.1,15.4 L3.9,10 Z"
        }))
      };
    }
    getComponent() {
      return d;
    }
    getType() {
      return "flow-decision";
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
