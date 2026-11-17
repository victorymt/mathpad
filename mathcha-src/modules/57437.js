/* module 57437 — 2038 chars */
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
      i = r.y,
      o = n.y,
      s = r.x,
      a = n.x;
    return l.A.pointsTransformed(e.data, [{
      x: s,
      y: i
    }, {
      x: a,
      y: o
    }, {
      x: s,
      y: o
    }, {
      x: s,
      y: i
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
          d: " M5,4.51 L16.71,15.15 L5,15.15 Z"
        }))
      };
    }
    getComponent() {
      return d;
    }
    getType() {
      return "doc-right-triangle";
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
