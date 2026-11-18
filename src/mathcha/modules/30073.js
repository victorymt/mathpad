/* module 30073 — 8556 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    J: () => w,
    mt: () => D
  });
  var n = r(3453),
    i = r(64467),
    o = r(40927),
    s = r.n(o),
    a = r(61848),
    l = r(19539),
    c = r(88925),
    d = r(30803),
    h = r(43774),
    p = r(26855),
    u = r(7789),
    g = r(57507),
    m = r(33535),
    f = r(10192);
  function y(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function v(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? y(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var b = 7,
    x = 10,
    C = 7,
    S = 7;
  function A(e) {
    var t = e.data,
      r = t.p1,
      n = t.p2,
      i = t.nibPercentage;
    i = i ?? .5;
    var o = l.A.distance2Points(r, n),
      s = {
        x: r.x + o,
        y: r.y
      },
      a,
      c = 1;
    if (o < 34) {
      c = o / 34;
      var d = 0;
    } else var d = (o - 14 - 20) * i;
    return {
      angle: l.A.angleFrom3Points360(s, n, r),
      md: {
        x: r.x + 7 * c + x * c + d * c,
        y: r.y
      },
      newP2: s,
      scale: c,
      nibHeight: 7 * c,
      nibWidth: x * c,
      brimWidth: 7 * c,
      brimHeight: 7 * c
    };
  }
  function w(e) {
    var t = e.data.p1,
      r = A(e),
      n = r.md,
      i = r.angle,
      o = r.newP2,
      s = r.nibHeight,
      a = r.nibWidth,
      c = r.brimHeight,
      d = r.brimWidth,
      h,
      p,
      u,
      g,
      m,
      f;
    return [l.A.quadraticBezierRotate({
      p1: t,
      cp: {
        x: t.x,
        y: t.y + c
      },
      p2: {
        x: t.x + d,
        y: t.y + c
      }
    }, t, i), l.A.lineRotate({
      p1: {
        x: t.x + d,
        y: t.y + c
      },
      p2: {
        x: n.x - a,
        y: t.y + c
      }
    }, t, i), l.A.quadraticBezierRotate({
      p1: {
        x: n.x - a,
        y: t.y + c
      },
      cp: {
        x: n.x,
        y: t.y + c
      },
      p2: {
        x: n.x,
        y: t.y + c + s
      }
    }, t, i), l.A.quadraticBezierRotate({
      p1: {
        x: n.x,
        y: t.y + c + s
      },
      cp: {
        x: n.x,
        y: t.y + c
      },
      p2: {
        x: n.x + a,
        y: t.y + c
      }
    }, t, i), l.A.lineRotate({
      p1: {
        x: n.x + d,
        y: t.y + c
      },
      p2: {
        x: o.x - d,
        y: t.y + c
      }
    }, t, i), l.A.quadraticBezierRotate({
      p1: {
        x: o.x - d,
        y: t.y + c
      },
      cp: {
        x: o.x,
        y: t.y + c
      },
      p2: o
    }, t, i)];
  }
  class E extends p.T2 {
    render() {
      var e = w(this.shape()),
        t = c.A.pathsD(e);
      return s().createElement("g", {
        className: this.props.className,
        onMouseDown: this.props.onMouseDown,
        onTouchStart: this.props.onMouseDown
      }, this.props.styleInfo.defs, s().createElement("path", {
        className: "transparent no-print",
        d: t,
        style: this.transparentStyle()
      }), s().createElement("path", {
        className: "real",
        d: t,
        style: this.props.styleInfo.style
      }));
    }
  }
  class k extends p.ih {}
  class O extends p.OL {
    constructor() {
      super(...arguments), (0, i.A)(this, "getPaperPath", void 0);
    }
    getComponent() {
      return E;
    }
    getType() {
      return "brace";
    }
    getSettingsComponent() {
      return k;
    }
    minMaxVertical(e) {
      var t = e.data,
        r = t.p1,
        n = t.p2;
      return {
        min: Math.min(r.y, n.y),
        max: Math.max(r.y, n.y)
      };
    }
    minMaxHorizontal(e) {
      var t = e.data,
        r = t.p1,
        n = t.p2;
      return {
        min: Math.min(r.x, n.x),
        max: Math.max(r.x, n.x)
      };
    }
    getControlPoints(e) {
      var t = e.data,
        r = t.p1,
        n = t.p2,
        i = A(e),
        o = i.md,
        s = i.angle,
        a = i.brimHeight,
        c = i.nibHeight;
      return [{
        key: "p1",
        p: r
      }, {
        key: "p2",
        p: n
      }, {
        key: "md",
        type: "square",
        p: l.A.pointRotate({
          x: o.x,
          y: r.y + a + c
        }, r, s)
      }];
    }
    moveControlPoint(e) {
      var t = e.key,
        r = e.shape,
        n = e.isShift,
        i = e.point,
        o = r.data,
        s = o.p1,
        c = o.p2,
        d = i;
      switch (t) {
        case "p1":
          return n && (d = l.A.snapLinePoint45(r.data.p2, d)), a.A.set(r, "data.p1", d);
        case "p2":
          return n && (d = l.A.snapLinePoint45(r.data.p1, d)), a.A.set(r, "data.p2", d);
        case "md":
          var h = A(r),
            p = h.angle,
            u = h.newP2,
            g = h.nibWidth,
            m = h.brimWidth,
            f = l.A.distance2Points(s, c);
          d = l.A.pointRotate(d, s, -p);
          var y = s.x + m + g,
            v = u.x - m - g,
            b = Math.max(y, Math.min(v, d.x)),
            x,
            C = f - 2 * m - 2 * g,
            S = 0 == C ? 0 : (b - y) / C;
          return a.A.set(r, "data.nibPercentage", S);
      }
    }
    move(e, t) {
      var r = a.A.update(e.data, {
        p1: l.A.addPoint(e.data.p1, t),
        p2: l.A.addPoint(e.data.p2, t)
      });
      return a.A.setProp(e, "data", r);
    }
    getBreakdownInfoWhenInvalidCache(e) {
      var t = w(e);
      return {
        data: [l.A.quadraticToCubic(t[0]), t[1], l.A.quadraticToCubic(t[2]), l.A.quadraticToCubic(t[3]), t[4], l.A.quadraticToCubic(t[5])]
      };
    }
    getIcon() {
      return {
        caption: "brace",
        component: s().createElement("svg", {
          style: {
            width: 23,
            height: 20,
            position: "relative"
          },
          key: "brace"
        }, s().createElement("path", {
          style: {
            stroke: "gray",
            fill: "none",
            transform: "scale(0.5, 0.5) translate(1px,12px)",
            strokeWidth: 2
          },
          d: " M6,6 Q6,13 13,13 L12.86,13 Q22.86,13 22.86,20 Q22.86,13 32.86,13 M29.86,13 L32,13 Q39,13 39,6"
        }))
      };
    }
    createShape(e) {
      return e = v(v({}, e), {}, {
        shapeWidth: 100,
        shapeHeight: 10
      }), f.A.createBy(e, e => {
        var t = e.bottom,
          r = h.A.getRandomPosYAround(e.top + 100, e.top + 180, t);
        return {
          id: d.w.nextDiagramCompositeShapeId(),
          type: this.getType(),
          settings: {
            blockIntersection: !0
          },
          data: {
            p1: {
              x: e.left + 100,
              y: r.y1
            },
            p2: {
              x: e.left + 200,
              y: r.y1
            }
          }
        };
      });
    }
    getBoundingRect(e) {
      return l.A.genericLinesBbox(w(e));
    }
    scale(e, t, r, i) {
      var o = u.A.scalePoint(e.data.p1, t, r, !1),
        s = u.A.scalePoint(e.data.p2, t, r, !1);
      if (i) {
        var a = l.A.getCenterPoint(r),
          c = m.A.pointsFlipped(a, !0, [o, s]),
          d = (0, n.A)(c, 2);
        s = d[0], o = d[1];
      }
      var h = v(v({}, e.data), {}, {
        p1: o,
        p2: s
      });
      return v(v({}, e), {}, {
        data: h
      });
    }
    rotate(e) {
      return e;
    }
    rotateAround(e, t, r) {
      return v(v({}, e), {}, {
        data: v(v({}, e.data), {}, {
          p1: l.A.pointRotate(e.data.p1, r, t),
          p2: l.A.pointRotate(e.data.p2, r, t)
        })
      });
    }
    skewXAtCenter(e, t, r) {
      return v(v({}, e), {}, {
        data: v(v({}, e.data), {}, {
          p1: g.A.pointSkewed(r, t, e.data.p1),
          p2: g.A.pointSkewed(r, t, e.data.p2)
        })
      });
    }
    getCentralPoint(e) {
      return l.A.getCenterPoint(e.data);
    }
    flipHorizontally(e) {
      return e;
    }
    flipVertically(e) {
      return e;
    }
    flipToLineThroughPoint(e) {
      return e;
    }
    flipToPoint(e) {
      return e;
    }
  }
  var D = new O();
};
