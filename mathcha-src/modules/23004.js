/* module 23004 — 4576 chars */
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
      s = t.snipPercentage,
      l = void 0 === s ? .4 : s,
      c,
      h,
      p = a.A.rectWidth(e.data) / 2,
      u = a.A.rectHeight(e.data) / 2,
      g = Math.min(p, u),
      m = Math.min(g, o * g),
      f = Math.min(g, l * g),
      y = r.y,
      v = r.y + f,
      b = n.y,
      x = r.x,
      C = n.x - f,
      S = n.x,
      A = a.A.getLeftTopArc({
        x: x + m,
        y: y + m
      }, m, m);
    return d.A.genericLinesTransformed(e.data, [A, {
      p1: {
        x: x + m,
        y
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
        x: S,
        y: v
      }
    }, {
      p1: {
        x: S,
        y: v
      },
      p2: {
        x: S,
        y: b
      }
    }, {
      p1: {
        x: S,
        y: b
      },
      p2: {
        x,
        y: b
      }
    }, {
      p1: {
        x,
        y: b
      },
      p2: {
        x,
        y: y + m
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
            transform: "translate(1px,0.5px)",
            transformOrigin: "50% 50%"
          },
          d: " M3.22,10.01 C3.22,7.32 5.4,5.13 8.1,5.13 L13.85,5.13 L16.9,8.18 L16.9,14.88 L3.22,14.88 L3.22,10.01"
        }))
      };
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.p2,
        l = i.cornerRadiusPercentage,
        c = void 0 === l ? .4 : l,
        h = i.snipPercentage,
        p = void 0 === h ? .4 : h,
        u = a.A.rectHeight(e.data),
        g,
        m = a.A.rectWidth(e.data) / 2,
        f = u / 2,
        y = Math.min(m, f),
        v = Math.min(y, c * y),
        b = Math.min(y, p * y),
        x = d.A.pointTransformed(e.data, {
          x: o.x + v,
          y: o.y
        }),
        C = d.A.pointTransformed(e.data, {
          x: s.x - b,
          y: o.y
        });
      return n.concat([{
        key: "md1",
        type: "square",
        p: x
      }, {
        key: "md2",
        type: "square",
        p: C
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key && "md2" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data,
        r = t.p1,
        n = t.p2,
        i = a.A.rectHeight(e.shape.data),
        o,
        l = a.A.rectWidth(e.shape.data) / 2,
        c = i / 2,
        h = Math.min(l, c);
      if ("md1" == e.key) {
        var p = d.A.reversePointFixedY(e.shape.data, r.y, e.point),
          u,
          g = (s().clamp(p.x, r.x, r.x + h) - r.x) / h;
        return this.changeShapeData(e.shape, "cornerRadiusPercentage", g);
      }
      if ("md2" == e.key) {
        var m = d.A.reversePointFixedY(e.shape.data, r.y, e.point),
          f = s().clamp(m.x, n.x - h, n.x),
          y = (n.x - f) / h;
        return this.changeShapeData(e.shape, "snipPercentage", y);
      }
      return e.shape;
    }
    getType() {
      return "doc-snip-round-single-corner-rect";
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
