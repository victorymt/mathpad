/* module 44350 — 5725 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => y,
    mt: () => x
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(19539),
    a = r(88925),
    l = r(29315),
    c = r(33535),
    d = r(84369),
    h = r(38070),
    p = r(91414),
    u = r(20260),
    g = r(2543),
    m = r.n(g);
  class f extends l.dV {
    render() {
      var e = y(this.shape()),
        t = a.A.getLineD(e);
      return o().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.getStyleDefs(), this.getTransparentOnlyNoFill(t), o().createElement("path", {
        className: "real",
        d: t,
        style: this.style()
      }));
    }
  }
  function y(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.spikes,
      o = t.innerPercentage;
    i = i || 5, o = void 0 === o ? .5 : o;
    for (var a = (n.x - r.x) / 2, l = (n.y - r.y) / 2, d = s.A.getCenterPoint(r, n), h = Math.PI / i, p = [], u = Math.PI / 2, g = 0; g < 2 * i; g++) if (1 & g) {
      var m = d.x + Math.cos(g * h - u) * a * o,
        f = d.y + Math.sin(g * h - u) * l * o;
      p.push({
        x: m,
        y: f
      });
    } else {
      var y = d.x + Math.cos(g * h - u) * a,
        v = d.y + Math.sin(g * h - u) * l;
      p.push({
        x: y,
        y: v
      });
    }
    return p.push(p[0]), c.A.pointsTransformed(e.data, p);
  }
  class v extends l.US {
    shouldComponentUpdate(e) {
      var t = e.entity,
        r = this.props.entity,
        n,
        i;
      return (t.data.spikes || 5) != (r.data.spikes || 5);
    }
    render() {
      var e,
        t = this.props.entity.data.spikes || 5,
        r = {
          stroke: "green",
          strokeWidth: 1,
          fill: "green"
        };
      return o().createElement("regular-polygon-settings", null, o().createElement("main", null, o().createElement(p.A, {
        unit: "",
        min: 3,
        max: 50,
        step: 1,
        value: t,
        icon: o().createElement("svg", {
          style: {
            width: 21,
            height: 14,
            strokeWidth: 1,
            stroke: "lightgray",
            fill: "none",
            overflow: "visible",
            transform: "translate(-3px,-2px)"
          }
        }, o().createElement("path", {
          style: {
            transform: "translate(0,0)"
          },
          d: "  M12.25,5 L14.38,9.17 L19.15,9.84 L15.7,13.08 L16.51,17.66 L12.25,15.5 L7.99,17.66 L8.8,13.08 L5.35,9.84 L10.12,9.17 Z"
        }), o().createElement("circle", {
          cx: "12.25",
          cy: "5",
          r: "1",
          style: r
        }), o().createElement("circle", {
          cx: "19.15",
          cy: "9.84",
          r: "1",
          style: r
        }), o().createElement("circle", {
          cx: "16.51",
          cy: "17.66",
          r: "1",
          style: r
        }), o().createElement("circle", {
          cx: "7.99",
          cy: "17.66",
          r: "1",
          style: r
        }), o().createElement("circle", {
          cx: "5.35",
          cy: "9.84",
          r: "1",
          style: r
        })),
        onValueChanging: e => this.props.onEntityPropertyChanging(this.props.entity, "data", "spikes", e),
        onValueChanged: (e, t) => this.props.onEntityPropertyChanged(this.props.entity, "data", "spikes", e, t)
      }), u.A.separator()));
    }
  }
  class b extends l.Au {
    constructor() {
      super(...arguments), (0, n.A)(this, "getSupplementaryLines", e => {
        var t = [];
        return t = (t = s.A.pointsToLines(s.A.getPointsRect(e.data))).concat(s.A.ellipseToCubicBeziers(e.data.p1, e.data.p2)), c.A.genericLinesTransformed(e.data, t);
      });
    }
    getComponent() {
      return f;
    }
    getType() {
      return "star";
    }
    getSettingsComponent() {
      return v;
    }
    getIcon() {
      var e = h.A.getIconSvgStyle();
      return {
        component: o().createElement("svg", {
          key: this.getType(),
          style: e
        }, o().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(-1px,-1px)"
          },
          d: "  M12.25,5 L14.38,9.17 L19.15,9.84 L15.7,13.08 L16.51,17.66 L12.25,15.5 L7.99,17.66 L8.8,13.08 L5.35,9.84 L10.12,9.17 Z"
        }))
      };
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        a = i.p2,
        l = i.innerPercentage;
      l = void 0 === l ? .5 : l;
      var d = (a.x - o.x) / 2,
        h = (a.y - o.y) / 2,
        p = s.A.getCenterPoint(o, a),
        u = {
          x: o.x + d,
          y: o.y
        },
        g = s.A.pointAtDistance(p, u, l * h);
      return n.concat([{
        key: "md1",
        p: c.A.pointTransformed(e.data, g),
        type: "square"
      }]);
    }
    moveControlPoint(e) {
      if ("md1" != e.key) return super.moveControlPoint(e);
      var t = e.shape,
        r = t.data,
        n = r.p1,
        i = r.p2,
        o = s.A.getCenterPoint(t.data),
        a = (i.y - n.y) / 2,
        l = c.A.reversePoint(e.shape.data, e.point),
        d = m().clamp((o.y - l.y) / a, 0, 1);
      return this.changeShapeData(e.shape, "innerPercentage", d);
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: s.A.pointsToLines(y(e))
      };
    }
    getSnapablePoints(e) {
      var t = e.data,
        r = t.p1,
        n = t.p2,
        i = s.A.getCenterPoint(r, n);
      return y(e).concat([i]);
    }
    getPaperPath(e) {
      return d.A.fromPoints(y(e), !0);
    }
  }
  var x = new b();
};
