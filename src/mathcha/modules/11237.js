/* module 11237 — 5303 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    UL: () => f,
    mt: () => b
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(2543),
    a = r.n(s),
    l = r(19539),
    c = r(29315),
    d = r(88925),
    h = r(33535),
    p = r(84369);
  function u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function g(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class m extends c.dV {
    render() {
      var e = f(this.shape()),
        t = d.A.getLineD(e.outerBox),
        r = d.A.getLineD(e.line1),
        n = d.A.getLineD(e.line2),
        i = this.style(),
        s = this.styleNoFill();
      return o().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), this.getTransparentOnlyNoFill(t), this.getTransparentOnlyNoFill(r), this.getTransparentOnlyNoFill(n), o().createElement("path", {
        className: "real",
        d: t,
        style: i
      }), o().createElement("path", {
        className: "real",
        d: r,
        style: s
      }), o().createElement("path", {
        className: "real",
        d: n,
        style: s
      }));
    }
  }
  function f(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.percentage,
      o = void 0 === i ? .3 : i,
      s = l.A.rectWidth(e.data),
      a = l.A.rectHeight(e.data),
      c = Math.min(s, a),
      d = Math.min(c - 1, o * c),
      p = r.y,
      u = r.y + d,
      g = n.y - d,
      m = n.y,
      f = r.x,
      y = r.x + d,
      v = n.x - d,
      b = n.x;
    return {
      outerBox: h.A.pointsTransformed(e.data, [{
        x: f,
        y: u
      }, {
        x: y,
        y: p
      }, {
        x: b,
        y: p
      }, {
        x: b,
        y: g
      }, {
        x: v,
        y: m
      }, {
        x: f,
        y: m
      }, {
        x: f,
        y: u
      }]),
      line1: h.A.pointsTransformed(e.data, [{
        x: b,
        y: p
      }, {
        x: v,
        y: u
      }, {
        x: f,
        y: u
      }]),
      line2: h.A.pointsTransformed(e.data, [{
        x: v,
        y: u
      }, {
        x: v,
        y: m
      }])
    };
  }
  class y extends c.US {}
  class v extends c.Au {
    getComponent() {
      return m;
    }
    getIcon() {
      return {
        caption: "",
        component: o().createElement("svg", {
          style: {
            width: 23,
            height: 20,
            position: "relative"
          },
          key: this.getType()
        }, o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(1px,0px)",
            transformOrigin: "50% 50%"
          },
          d: " M4.1,7.4 L7.5,3.99 L16,3.99 L16,12.39 L12.6,15.8 L4.1,15.8 L4.1,7.4 M16,3.99 L12.6,7.4 L4.1,7.4 M12.6,7.4 L12.6,15.8"
        }))
      };
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.percentage,
        a = void 0 === s ? .3 : s,
        c = l.A.rectHeight(e.data),
        d = l.A.rectWidth(e.data),
        p = Math.min(d, c),
        u = Math.min(p - 1, a * p),
        g = h.A.pointTransformed(e.data, {
          x: o.x,
          y: o.y + u
        });
      return n.concat([{
        key: "md1",
        type: "square",
        p: g
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data.p1,
        r = l.A.rectHeight(e.shape.data),
        n = l.A.rectWidth(e.shape.data),
        i = Math.min(n, r);
      if ("md1" == e.key) {
        var o = h.A.reversePoint(e.shape.data, e.point),
          s,
          c = (a().clamp(o.y, t.y, t.y + i) - t.y) / i;
        return this.changeShapeData(e.shape, "percentage", c);
      }
      return e.shape;
    }
    createShape(e) {
      return super.createShape(g(g({}, e), {}, {
        shapeWidth: e.shapeWidth || 60,
        shapeHeight: e.shapeHeight || 70
      }));
    }
    getType() {
      return "doc-cube";
    }
    getSettingsComponent() {
      return y;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      var t = f(e),
        r = l.A.pointsToLines(t.outerBox),
        n = l.A.pointsToLines(t.line1),
        i = l.A.pointsToLines(t.line2);
      return {
        data: r.concat(n).concat(i)
      };
    }
    getSnapablePoints(e) {
      var t = f(e);
      return t.outerBox.concat(t.line1).concat(t.line2);
    }
    getPaperPath(e) {
      var t = f(e);
      return p.A.fromPoints(t.outerBox);
    }
  }
  var b = new v();
};
