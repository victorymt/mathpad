/* module 88092 — 4443 chars */
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
      b = r.y + f,
      x = n.y - m,
      C = n.y - f,
      S = n.y,
      A = r.x,
      w = r.x + m,
      E = r.x + f,
      k = n.x - m,
      O = n.x - f,
      D = n.x;
    return d.A.pointsTransformed(e.data, [{
      x: w,
      y
    }, {
      x: O,
      y
    }, {
      x: D,
      y: b
    }, {
      x: D,
      y: x
    }, {
      x: k,
      y: S
    }, {
      x: E,
      y: S
    }, {
      x: A,
      y: C
    }, {
      x: A,
      y: v
    }, {
      x: w,
      y
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
          d: " M8.57,5.01 L16.71,5.01 L16.71,5.01 L16.71,10.01 L11.71,15.01 L3.57,15.01 L3.57,15.01 L3.57,10.01 Z"
        }))
      };
    }
    getComponent() {
      return p;
    }
    getType() {
      return "doc-snip-diagonal-corner-rect";
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
        i,
        o,
        l = a.A.rectWidth(e.shape.data) / 2,
        c = a.A.rectHeight(e.shape.data) / 2,
        h = Math.min(l, c);
      if ("md1" == e.key) {
        var p = d.A.reversePointFixedY(e.shape.data, r.y, e.point),
          u,
          g = (s().clamp(p.x, r.x, r.x + h) - r.x) / h;
        return this.changeShapeData(e.shape, "snipPercentage", g);
      }
      if ("md2" == e.key) {
        var m = d.A.reversePointFixedY(e.shape.data, r.y, e.point),
          f = s().clamp(m.x, n.x - h, n.x),
          y = (n.x - f) / h;
        return this.changeShapeData(e.shape, "snipPercentage2", y);
      }
    }
    getPaperPath(e) {
      return h.A.fromPoints(u(e));
    }
  }
  var f = new m();
};
