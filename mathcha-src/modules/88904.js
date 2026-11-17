/* module 88904 — 3768 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    UL: () => u,
    mt: () => f
  });
  var n = r(40927),
    i = r.n(n),
    o = r(2543),
    s = r.n(o),
    a = r(19539),
    l = r(29315),
    c = r(88925),
    d = r(33535),
    h = r(84369);
  class p extends l.dV {
    render() {
      var e = u(this.shape()),
        t = c.A.pathsD(e);
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
  function u(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.cornerRadiusPercentage,
      o = void 0 === i ? .4 : i,
      s,
      l,
      c = a.A.rectWidth(e.data) / 2,
      h = a.A.rectHeight(e.data) / 2,
      p = Math.min(c, h),
      u = Math.min(p, o * p),
      g = r.y,
      m = n.y,
      f = r.x,
      y = n.x,
      v = a.A.getLeftTopArc({
        x: f + u,
        y: g + u
      }, u, u);
    return d.A.genericLinesTransformed(e.data, [v, {
      p1: {
        x: f + u,
        y: g
      },
      p2: {
        x: y,
        y: g
      }
    }, {
      p1: {
        x: y,
        y: g
      },
      p2: {
        x: y,
        y: m
      }
    }, {
      p1: {
        x: y,
        y: m
      },
      p2: {
        x: f,
        y: m
      }
    }, {
      p1: {
        x: f,
        y: m
      },
      p2: {
        x: f,
        y: g + u
      }
    }]);
  }
  class g extends l.US {}
  class m extends l.Au {
    getComponent() {
      return p;
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
          d: " M3.8,9.93 C3.8,7.73 5.58,5.95 7.78,5.95 L16.9,5.95 L16.9,15.48 L3.8,15.48 L3.8,9.93"
        }))
      };
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.cornerRadiusPercentage,
        l = void 0 === s ? .4 : s,
        c = a.A.rectHeight(e.data),
        h,
        p = a.A.rectWidth(e.data) / 2,
        u = c / 2,
        g = Math.min(p, u),
        m = Math.min(g, l * g),
        f = d.A.pointTransformed(e.data, {
          x: o.x + m,
          y: o.y
        });
      return n.concat([{
        key: "md1",
        type: "square",
        p: f
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data.p1,
        r = a.A.rectHeight(e.shape.data),
        n,
        i = a.A.rectWidth(e.shape.data) / 2,
        o = r / 2,
        l = Math.min(i, o);
      if ("md1" == e.key) {
        var c = d.A.reversePointFixedY(e.shape.data, t.y, e.point),
          h,
          p = (s().clamp(c.x, t.x, t.x + l) - t.x) / l;
        return this.changeShapeData(e.shape, "cornerRadiusPercentage", p);
      }
      return e.shape;
    }
    getType() {
      return "doc-rounded-single-corner-rect";
    }
    getSettingsComponent() {
      return g;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: u(e)
      };
    }
    getSnapablePoints(e) {
      return u(e).map(e => e.p2).concat(a.A.getCenterPoint(e.data));
    }
    getPaperPath(e) {
      return h.A.fromGenericLines(u(e));
    }
  }
  var f = new m();
};
