/* module 20149 — 4750 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => f,
    mt: () => x
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(2543),
    a = r.n(s),
    l = r(29315),
    c = r(19539),
    d = r(88925),
    h = r(20260),
    p = r(33535),
    u = r(38070),
    g = r(84369);
  class m extends l.dV {
    render() {
      var e,
        t = f(this.shape()),
        r = d.A.pathsD(t);
      return o().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), this.getTransparentOnlyNoFill(r), o().createElement("path", {
        className: "real",
        d: r,
        style: this.style()
      }));
    }
  }
  function f(e) {
    var t = y(e),
      r = t.leftTop,
      n = t.topRight,
      i = t.rightBottom,
      o = t.bottomLeft;
    return p.A.genericLinesTransformed(e.data, [{
      p1: r,
      p2: n
    }, {
      p1: n,
      p2: i
    }, {
      p1: i,
      p2: o
    }, {
      p1: o,
      p2: r
    }]);
  }
  function y(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.percentage,
      o = void 0 === i ? 30 : i,
      s = t.right,
      a = void 0 !== s && s,
      l = c.A.rectWidth(e.data),
      d,
      h,
      p,
      u;
    return a ? (d = {
      x: r.x,
      y: r.y
    }, h = {
      x: n.x - o / 100 * l,
      y: r.y
    }, p = {
      x: n.x,
      y: n.y
    }, u = {
      x: r.x + o / 100 * l,
      y: n.y
    }) : (d = {
      x: r.x + o / 100 * l,
      y: r.y
    }, h = {
      x: n.x,
      y: r.y
    }, p = {
      x: n.x - o / 100 * l,
      y: n.y
    }, u = {
      x: r.x,
      y: n.y
    }), {
      leftTop: d,
      topRight: h,
      rightBottom: p,
      bottomLeft: u
    };
  }
  class v extends l.US {
    constructor() {
      super(...arguments), (0, n.A)(this, "handleFlip", () => {
        this.props.onEntityPropertyChanged(this.props.entity, "data", "right", !this.props.entity.data.right, !1);
      });
    }
    shouldComponentUpdate(e) {
      var t = e.entity,
        r = this.props.entity;
      return t.data.percentage != r.data.percentage;
    }
    render() {
      return o().createElement("parallelogram-settings", null, o().createElement("main", null, o().createElement("button", {
        className: "btn-normal",
        style: {
          marginTop: 3,
          marginLeft: 5,
          marginRight: 5,
          width: 60
        },
        onClick: this.handleFlip
      }, "Flip"), h.A.separator()));
    }
  }
  class b extends l.Au {
    getComponent() {
      return m;
    }
    getIcon() {
      var e = u.A.getIconSvgStyle();
      return {
        component: o().createElement("svg", {
          key: this.getType(),
          style: e
        }, o().createElement("path", {
          d: " M7.41,5.5 L17.13,5.5 L12.96,14.5 L3.25,14.5 Z",
          style: {
            transform: "translate(1px,0px)",
            transformOrigin: "50% 50%"
          }
        }))
      };
    }
    getType() {
      return "parallelogram";
    }
    getSettingsComponent() {
      return v;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: f(e)
      };
    }
    getSnapablePoints(e) {
      var t = y(e),
        r = t.leftTop,
        n = t.topRight,
        i = t.rightBottom,
        o = t.bottomLeft;
      return p.A.pointsTransformed(e.data, [r, n, i, o]).concat(c.A.getCenterPoint(e.data));
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.p2,
        a = i.percentage,
        l = void 0 === a ? 30 : a,
        d = i.right,
        h = void 0 !== d && d,
        u = c.A.rectWidth(e.data),
        g = p.A.pointTransformed(e.data, {
          x: o.x + u * (l / 100),
          y: o.y
        });
      return h && (g = p.A.pointTransformed(e.data, {
        x: s.x - u * (l / 100),
        y: o.y
      })), n.concat([{
        key: "md1",
        type: "square",
        p: g
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key) return super.moveControlPoint(e);
      var t = e.shape.data,
        r = t.p1,
        n = t.p2,
        i = p.A.reversePointFixedY(e.shape.data, r.y, e.point),
        o = e.shape.data.right,
        s = void 0 !== o && o;
      if ("md1" == e.key) {
        var l = a().clamp(i.x, r.x, n.x),
          c = (l - r.x) / (n.x - r.x) * 100;
        return s && (c = (n.x - l) / (n.x - r.x) * 100), this.changeShapeData(e.shape, "percentage", c);
      }
    }
    getBoundingRect(e) {
      return c.A.genericLinesBbox(f(e));
    }
    getPaperPath(e) {
      return g.A.fromGenericLines(f(e));
    }
  }
  var x = new b();
};
