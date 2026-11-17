/* module 829 — 4402 chars */
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
        t = c.A.getLineD(e);
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
      i = t.snipPercentage,
      o = void 0 === i ? .7 : i,
      s = t.snipPercentage2,
      l = void 0 === s ? 0 : s,
      c,
      h,
      p = a.A.rectWidth(e.data) / 2,
      u = a.A.rectHeight(e.data) / 2,
      g = Math.min(p, u),
      m = Math.min(g, o * g),
      f = Math.min(g, l * g),
      y = r.y,
      v = r.y + m,
      b = n.y - f,
      x = n.y,
      C = r.x,
      S = r.x + m,
      A = r.x + f,
      w = n.x - m,
      E = n.x - f,
      k = n.x;
    return d.A.pointsTransformed(e.data, [{
      x: C,
      y: v
    }, {
      x: S,
      y
    }, {
      x: w,
      y
    }, {
      x: k,
      y: v
    }, {
      x: k,
      y: b
    }, {
      x: E,
      y: x
    }, {
      x: A,
      y: x
    }, {
      x: C,
      y: b
    }, {
      x: C,
      y: v
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
          d: " M3.5,8.23 L6.43,5.31 L13.97,5.31 L16.9,8.23 L16.9,14.53 L16.9,14.53 L3.5,14.53 L3.5,14.53 Z"
        }))
      };
    }
    getComponent() {
      return p;
    }
    getType() {
      return "doc-snip-same-side-corner-rect";
    }
    getSettingsComponent() {
      return g;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: a.A.pointsToLines(u(e))
      };
    }
    getSnapablePoints(e) {
      var t = e.data.p1,
        r = a.A.rectHeight(e.data),
        n = {
          x: t.x,
          y: t.y + r / 2
        };
      return u(e).concat(a.A.rotatePointsByShapeRect(e, [n])).concat(a.A.getCenterPoint(e.data));
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.p2,
        l = i.snipPercentage,
        c = void 0 === l ? .7 : l,
        h = i.snipPercentage2,
        p = void 0 === h ? 0 : h,
        u,
        g,
        m = a.A.rectWidth(e.data) / 2,
        f = a.A.rectHeight(e.data) / 2,
        y = Math.min(m, f),
        v = Math.min(y, c * y),
        b = Math.min(y, p * y),
        x = d.A.pointTransformed(e.data, {
          x: s.x - v,
          y: o.y
        }),
        C = d.A.pointTransformed(e.data, {
          x: o.x + b,
          y: s.y
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
        i,
        o,
        l = a.A.rectWidth(e.shape.data) / 2,
        c = a.A.rectHeight(e.shape.data) / 2,
        h = Math.min(l, c);
      if ("md1" == e.key) {
        var p = d.A.reversePointFixedY(e.shape.data, r.y, e.point),
          u = s().clamp(p.x, n.x - h, n.x),
          g = (n.x - u) / h;
        return this.changeShapeData(e.shape, "snipPercentage", g);
      }
      if ("md2" == e.key) {
        var m = d.A.reversePointFixedY(e.shape.data, n.y, e.point),
          f,
          y = (s().clamp(m.x, r.x, r.x + h) - r.x) / h;
        return this.changeShapeData(e.shape, "snipPercentage2", y);
      }
    }
    getPaperPath(e) {
      return h.A.fromPoints(u(e));
    }
  }
  var f = new m();
};
