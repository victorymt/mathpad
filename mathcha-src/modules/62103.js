/* module 62103 — 3239 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    U: () => u,
    mt: () => f
  });
  var n = r(40927),
    i = r.n(n),
    o = r(19539),
    s = r(29315),
    a = r(88925),
    l = r(2543),
    c = r.n(l),
    d = r(33535),
    h = r(84369);
  class p extends s.dV {
    render() {
      var e = u(this.shape()),
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
  function u(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.arrowPercentage,
      s = void 0 === i ? .4 : i,
      a = o.A.rectWidth(e.data),
      l = o.A.rectHeight(e.data),
      c = r.y,
      h = r.y + l / 2,
      p = n.y,
      u = r.x,
      g = r.x + a * s,
      m = n.x - a * s,
      f = n.x;
    return d.A.pointsTransformed(e.data, [{
      x: u,
      y: c
    }, {
      x: m,
      y: c
    }, {
      x: f,
      y: h
    }, {
      x: m,
      y: p
    }, {
      x: u,
      y: p
    }, {
      x: g,
      y: h
    }, {
      x: u,
      y: c
    }]);
  }
  class g extends s.US {}
  class m extends s.Au {
    getIcon() {
      return {
        caption: "",
        component: i().createElement("svg", {
          style: {
            width: 23,
            height: 20,
            position: "relative"
          },
          key: "chevron-arrow"
        }, i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(0.5px,0px)"
          },
          d: " M3.33,5.67 L13,5.67 L19,10.23 L13,14.78 L3.33,14.78 L9.33,10.23 Z"
        }))
      };
    }
    getComponent() {
      return p;
    }
    getType() {
      return "chevron-arrow";
    }
    getSettingsComponent() {
      return g;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: o.A.pointsToLines(u(e))
      };
    }
    getSnapablePoints(e) {
      return u(e);
    }
    getBoundingRect(e) {
      var t = u(e);
      return o.A.getBoundingRectFromPoints(t);
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        s = i.p1,
        a = i.p2,
        l = i.arrowPercentage,
        c = void 0 === l ? .4 : l,
        h = o.A.rectWidth(e.data),
        p = d.A.pointTransformed(e.data, {
          x: a.x - h * c,
          y: s.y
        });
      return n.concat([{
        key: "md1",
        type: "square",
        p
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key && "md2" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data,
        r = t.p1,
        n = t.p2;
      if ("md1" == e.key) {
        var i = d.A.reversePointFixedY(e.shape.data, r.y, e.point),
          o = c().clamp(i.x, r.x, n.x),
          s = (n.x - o) / (n.x - r.x);
        return this.changeShapeData(e.shape, "arrowPercentage", s);
      }
      return e.shape;
    }
    getPaperPath(e) {
      return h.A.fromPoints(u(e));
    }
  }
  var f = new m();
};
