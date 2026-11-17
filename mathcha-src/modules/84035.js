/* module 84035 — 4119 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    U: () => u,
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
      i = t.percentage,
      o = void 0 === i ? .3 : i,
      s,
      l,
      c = a.A.rectWidth(e.data) / 2,
      h = a.A.rectHeight(e.data) / 2,
      p = Math.min(c, h),
      u = Math.min(p, o * p),
      g = r.y,
      m = r.y + u,
      f = n.y - u,
      y = n.y,
      v = r.x,
      b = r.x + u,
      x = n.x - u,
      C = n.x;
    return d.A.genericLinesTransformed(e.data, [{
      p1: {
        x: v,
        y: g
      },
      p2: {
        x: C,
        y: g
      }
    }, {
      p1: {
        x: C,
        y: g
      },
      p2: {
        x: C,
        y
      }
    }, {
      p1: {
        x: C,
        y
      },
      p2: {
        x: v,
        y
      }
    }, {
      p1: {
        x: v,
        y
      },
      p2: {
        x: v,
        y: g
      }
    }, {
      p1: {
        x,
        y: m
      },
      p2: {
        x: b,
        y: m
      }
    }, {
      p1: {
        x: b,
        y: m
      },
      p2: {
        x: b,
        y: f
      }
    }, {
      p1: {
        x: b,
        y: f
      },
      p2: {
        x,
        y: f
      }
    }, {
      p1: {
        x,
        y: f
      },
      p2: {
        x,
        y: m
      }
    }]);
  }
  class g extends l.US {}
  class m extends l.Au {
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
            transform: "translate(1px,0.5px)"
          },
          d: " M3.9,4.07 L16.1,4.07 L16.1,15.75 L3.9,15.75 Z M13.59,6.58 L6.41,6.58 L6.41,13.24 L13.59,13.24 Z"
        }))
      };
    }
    getComponent() {
      return p;
    }
    getType() {
      return "doc-frame";
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
      return u(e).map(e => e.p1).concat(a.A.getCenterPoint(e.data));
    }
    getBoundingRect(e) {
      var t = u(e);
      return a.A.genericLinesBbox(t);
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.percentage,
        l = void 0 === s ? .3 : s,
        c,
        h,
        p = a.A.rectWidth(e.data) / 2,
        u = a.A.rectHeight(e.data) / 2,
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
        r,
        n,
        i = a.A.rectWidth(e.shape.data) / 2,
        o = a.A.rectHeight(e.shape.data) / 2,
        l = Math.min(i, o);
      if ("md1" == e.key) {
        var c = d.A.reversePointFixedY(e.shape.data, t.y, e.point),
          h,
          p = (s().clamp(c.x, t.x, t.x + i) - t.x) / l;
        return this.changeShapeData(e.shape, "percentage", p);
      }
    }
    getPaperPath(e) {
      return h.A.fromGenericLines(u(e));
    }
  }
  var f = new m();
};
