/* module 78421 — 8248 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    U: () => f,
    mt: () => C
  });
  var n = r(40927),
    i = r.n(n),
    o = r(2543),
    s = r.n(o),
    a = r(19539),
    l = r(29315),
    c = r(88925),
    d = r(84369),
    h = r(7789),
    p = r(33535),
    u = r(91414),
    g = r(20260);
  class m extends l.dV {
    render() {
      var e = f(this.shape()),
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
  function f(e) {
    var t = e.data,
      r = t.centerDeltaRatio,
      n = void 0 === r ? 0 : r,
      i = t.startTheta360,
      o = void 0 === i ? 0 : i,
      s = t.endTheta360,
      l = void 0 === s ? 0 : s,
      c = t.ringCount,
      d = void 0 === c ? 2 : c,
      u = a.A.getCenterPoint(e.data),
      g = a.A.rectWidth(e.data),
      m = a.A.rectHeight(e.data),
      f = Math.min(g, m),
      y = n * (f / 2),
      b,
      x = v(u, y, Math.max((f / 2 - y) / d, .01), o, 360 * d - l, 30),
      C = {
        p1: {
          x: u.x - f / 2,
          y: u.y - f / 2
        },
        p2: {
          x: u.x + f / 2,
          y: u.y + f / 2
        }
      };
    return x = x.map(t => h.A.scalePropertyInData(t, ["cp", "cp2", "p1", "p2"], C, e.data, !1)), p.A.genericLinesTransformed(e.data, x);
  }
  function y(e, t, r, n) {
    if (e === r) throw new Error("parallel slopes");
    var i = (n - t) / (e - r);
    return {
      x: i,
      y: e * i + t
    };
  }
  function v(e, t, r, n, i, o) {
    var s = [],
      l = t,
      c = r / Math.PI / 2,
      d,
      h = d = n * Math.PI / 180;
    i = i * Math.PI / 180, o = o * Math.PI / 180;
    for (var p, u = l + c * d, g = {
        x: e.x + u * Math.cos(d),
        y: e.y + u * Math.sin(d)
      }, m, f = (c * Math.sin(h) + (l + c * d) * Math.cos(h)) / (c * Math.cos(h) - (l + c * d) * Math.sin(h)), v = g; d < i;) {
      h = d, p = u, u = l + c * (d += o), v = g, g = {
        x: e.x + u * Math.cos(d),
        y: e.y + u * Math.sin(d)
      };
      var b = l + c * d;
      m = f, f = (c * Math.sin(d) + b * Math.cos(d)) / (c * Math.cos(d) - b * Math.sin(d));
      var x,
        C,
        S = y(m, -(m * p * Math.cos(h) - p * Math.sin(h)), f, -(f * u * Math.cos(d) - u * Math.sin(d)));
      S = {
        x: S.x + e.x,
        y: S.y + e.y
      }, s.push(a.A.quadraticToCubic({
        p1: v,
        cp: S,
        p2: g
      }));
    }
    if (d > i && s.length) {
      var A = a.A.splitBezier(s[s.length - 1], 1 - (d - i) / o);
      s[s.length - 1] = A[0] || s[s.length - 1];
    }
    return s;
  }
  class b extends l.US {
    shouldComponentUpdate(e) {
      var t = e.entity,
        r = this.props.entity,
        n,
        i;
      return (t.data.ringCount || 2) != (r.data.ringCount || 2);
    }
    render() {
      var e,
        t = this.props.entity.data.ringCount || 2;
      return i().createElement("regular-polygon-settings", null, i().createElement("main", null, i().createElement(u.A, {
        unit: "",
        min: 1,
        max: 50,
        step: 1,
        value: t,
        icon: i().createElement("svg", {
          style: {
            width: 21,
            height: 14,
            strokeWidth: 1,
            stroke: "gray",
            fill: "none",
            overflow: "visible"
          }
        }, i().createElement("path", {
          d: " M8,11 C8.15,11 8.27,11.07 8.36,11.21 C8.45,11.36 8.47,11.53 8.42,11.72 C8.35,11.94 8.21,12.11 8,12.25 C7.76,12.4 7.48,12.47 7.17,12.44 C6.82,12.42 6.49,12.28 6.2,12.04 C5.87,11.78 5.64,11.43 5.5,11 C5.35,10.53 5.34,10.04 5.47,9.54 C5.62,9 5.9,8.52 6.33,8.11 C6.8,7.68 7.35,7.39 8,7.25 C8.69,7.1 9.39,7.15 10.08,7.39 C10.82,7.65 11.45,8.09 11.97,8.71 C12.52,9.37 12.86,10.13 13,11 C13.15,11.92 13.04,12.82 12.69,13.71 C12.32,14.64 11.73,15.42 10.92,16.05 C10.07,16.71 9.09,17.11 8,17.25 C6.86,17.4 5.75,17.24 4.67,16.77 C3.54,16.29 2.61,15.55 1.87,14.54 C1.09,13.5 0.64,12.32 0.5,11 C0.36,9.64 0.57,8.32 1.14,7.04 C1.74,5.72 2.63,4.64 3.83,3.78 C5.07,2.9 6.46,2.39 8,2.25 C9.59,2.11 11.12,2.38 12.58,3.06 C14.1,3.77 15.33,4.82 16.3,6.21 C17.29,7.64 17.86,9.24 18,11 C18,11 18,11 18,11"
        })),
        onValueChanging: e => this.props.onEntityPropertyChanging(this.props.entity, "data", "ringCount", e),
        onValueChanged: (e, t) => this.props.onEntityPropertyChanged(this.props.entity, "data", "ringCount", e, t)
      }), g.A.separator()));
    }
  }
  class x extends l.Au {
    getIcon() {
      return {
        caption: "",
        component: i().createElement("svg", {
          style: {
            width: 17,
            height: 17,
            overflow: "visible"
          },
          key: this.getType()
        }, i().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "translate(2px,2px)"
          },
          d: " M6.5,9.5 C6.63,9.5 6.73,9.56 6.81,9.68 C6.89,9.8 6.9,9.95 6.85,10.11 C6.8,10.3 6.68,10.45 6.5,10.56 C6.3,10.69 6.06,10.75 5.79,10.73 C5.49,10.7 5.22,10.59 4.97,10.39 C4.69,10.16 4.49,9.86 4.38,9.5 C4.25,9.1 4.24,8.69 4.35,8.26 C4.48,7.8 4.72,7.39 5.08,7.05 C5.48,6.67 5.95,6.43 6.5,6.31 C7.09,6.19 7.68,6.23 8.27,6.43 C8.9,6.65 9.43,7.02 9.87,7.55 C10.34,8.11 10.63,8.76 10.75,9.5 C10.87,10.28 10.79,11.05 10.49,11.8 C10.17,12.59 9.67,13.26 8.98,13.79 C8.26,14.35 7.43,14.69 6.5,14.81 C5.53,14.94 4.59,14.8 3.67,14.41 C2.71,14 1.92,13.37 1.29,12.51 C0.63,11.62 0.24,10.62 0.13,9.5 C0,8.34 0.18,7.22 0.67,6.14 C1.18,5.01 1.94,4.09 2.96,3.37 C4.01,2.62 5.19,2.18 6.5,2.06 C7.85,1.94 9.15,2.17 10.4,2.75 C11.68,3.35 12.73,4.24 13.55,5.43 C14.4,6.64 14.88,8 15,9.5 C15,9.5 15,9.5 15,9.5"
        }))
      };
    }
    getComponent() {
      return m;
    }
    getType() {
      return "spiral";
    }
    getSettingsComponent() {
      return b;
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: f(e)
      };
    }
    getSnapablePoints(e) {
      return [a.A.getCenterPoint(e.data)];
    }
    getControlPoints(e, t, r) {
      var n = super.getControlPoints(e, t, r),
        i = e.data,
        o = i.p1,
        s = i.centerDeltaRatio,
        l = void 0 === s ? 0 : s,
        c = i.startTheta360,
        d = void 0 === c ? 0 : c,
        h = i.endTheta360,
        u = void 0 === h ? 0 : h,
        g = a.A.rectWidth(e.data),
        m = a.A.getCenterPoint(e.data),
        f = p.A.pointTransformed(e.data, {
          x: m.x + g / 2 * l,
          y: m.y
        }),
        y = p.A.pointTransformed(e.data, {
          x: o.x + d / 360 * g,
          y: o.y - 10 / r.zoomRatio
        }),
        v = p.A.pointTransformed(e.data, {
          x: o.x + u / 360 * g,
          y: o.y - 20 / r.zoomRatio
        });
      return n.concat([{
        key: "md1",
        type: "square",
        p: f
      }, {
        key: "md2",
        type: "square",
        p: y
      }, {
        key: "md3",
        type: "square",
        p: v
      }]);
    }
    moveControlPoint(e) {
      var t = e.shape.data,
        r = t.p1,
        n = t.p2,
        i = a.A.rectWidth(e.shape.data),
        o = a.A.getCenterPoint(e.shape.data);
      if ("md1" == e.key) {
        var l = p.A.reversePoint(e.shape.data, e.point),
          c = s().clamp(l.x, o.x, o.x + i / 2),
          d = Math.min((c - o.x) / (i / 2), .95);
        return this.changeShapeData(e.shape, "centerDeltaRatio", d);
      }
      if ("md2" == e.key) {
        var h = p.A.reversePoint(e.shape.data, e.point),
          u,
          g = (s().clamp(h.x, r.x, n.x) - r.x) / i * 360;
        return this.changeShapeData(e.shape, "startTheta360", g);
      }
      if ("md3" == e.key) {
        var m = p.A.reversePoint(e.shape.data, e.point),
          f,
          y = (s().clamp(m.x, r.x, n.x) - r.x) / i * 360;
        return this.changeShapeData(e.shape, "endTheta360", y);
      }
      return super.moveControlPoint(e);
    }
    getPaperPath(e) {
      return d.A.fromGenericLines(f(e));
    }
  }
  var C = new x();
};
