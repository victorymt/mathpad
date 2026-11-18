/* module 29315 — 11082 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Au: () => w,
    US: () => A,
    dV: () => S
  });
  var n = r(3453),
    i = r(64467),
    o = r(2543),
    s = r.n(o),
    a = r(61848),
    l = r(19539),
    c = r(26855),
    d = r(62970),
    h = r(79230),
    p = r(96860),
    u = r(57507),
    g = r(33535),
    m = r(20243),
    f = r(15783),
    y = r(10192),
    v = r(33272),
    b = r(76546);
  function x(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function C(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? x(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class S extends c.T2 {
    getWidth() {
      var e = this.props.shape.data,
        t = e.p1,
        r = e.p2;
      return Math.abs(r.x - t.x);
    }
    getHeight() {
      var e = this.props.shape.data,
        t = e.p1,
        r = e.p2;
      return Math.abs(r.y - t.y);
    }
    shape() {
      return this.props.shape;
    }
    getCp() {
      var e = this.props.shape.data,
        t = e.p1,
        r = e.p2;
      return {
        x: (t.x + r.x) / 2,
        y: (t.y + r.y) / 2
      };
    }
    styleWithRotation() {
      var e,
        t = this.props.styleInfo.style,
        r = this.props.shape.data.rotation;
      if (r) {
        var n = this.getCp();
        t = a.A.update(t, {
          transform: new m.Z().orgin(n.x, n.y).rotate(r).toCssStyle()
        });
      }
      return t;
    }
    transparentStyleWithRotation() {
      var e = this.props.shape.data.rotation;
      if (e) {
        var t = this.getCp();
        return C({
          transform: new m.Z().orgin(t.x, t.y).rotate(e).toCssStyle()
        }, this.transparentStyle());
      }
      return {};
    }
  }
  class A extends c.ih {}
  class w extends c.OL {
    constructor() {
      super(...arguments), (0, i.A)(this, "baseSupportedStyles", ["thickness", "strokeColor", "fillColor", "intersection", "strokeType", "rotation", "skewX", "boxShadow"]), (0, i.A)(this, "getSupplementaryLines", e => l.A.pointsToLines(g.A.rectTo4Points(e.data), !0)), (0, i.A)(this, "getBaseRotationPoints", (e, t) => h.A.getRotationPoint(e.data, 0, t)), (0, i.A)(this, "getRotationPoints", (e, t) => h.A.getRotationPoint(e.data, e.data.rotation, t));
    }
    handleResize(e, t, r) {
      if (!g.A.anyMatrixTransformed(e.data)) return C(C({}, e), {}, {
        data: C(C({}, e.data), {}, {
          p1: e.data.p1,
          p2: {
            x: e.data.p1.x + t,
            y: e.data.p1.y + r
          }
        })
      });
      var n = g.A.rectTo4Points(e.data),
        i = C(C({}, e.data), {}, {
          p1: e.data.p1,
          p2: {
            x: e.data.p1.x + t,
            y: e.data.p1.y + r
          }
        }),
        o = g.A.rectTo4Points(i),
        s = l.A.substractPoint(n[0], o[0]);
      return o = o.map(e => l.A.addPoint(e, s)), C(C({}, e), {}, {
        data: C(C({}, e.data), g.A.threePointsToRectangleInfo(o[0], o[1], o[2]))
      });
    }
    styleSupports(e) {
      return this.baseSupportedStyles;
    }
    getPositionDetails(e) {
      var t = e.data,
        r = t.p1,
        n = t.p2,
        i = g.A.rectTo4Points(e.data);
      return {
        type: "position-size",
        x: i[0].x,
        y: i[0].y,
        w: Math.abs(n.x - r.x),
        h: Math.abs(n.y - r.y)
      };
    }
    minMaxVertical(e) {
      var t = e.data,
        r = t.p1,
        n = t.p2,
        i = t.rotation;
      if (!r || !n) throw new Error("could not figure out");
      if (!i) return {
        min: Math.min(r.y, n.y),
        max: Math.max(r.y, n.y)
      };
      var o = this.getCp(r, n);
      return r = l.A.pointRotate(r, o, i), n = l.A.pointRotate(n, o, i), {
        min: Math.min(r.y, n.y),
        max: Math.max(r.y, n.y)
      };
    }
    minMaxHorizontal(e) {
      var t = e.data,
        r = t.p1,
        n = t.p2,
        i = t.rotation;
      if (!r || !n) throw new Error("could not figure out");
      if (!i) return {
        min: Math.min(r.x, n.x),
        max: Math.max(r.x, n.x)
      };
      var o = this.getCp(r, n);
      return r = l.A.pointRotate(r, o, i), n = l.A.pointRotate(n, o, i), {
        min: Math.min(r.x, n.x),
        max: Math.max(r.x, n.x)
      };
    }
    getBreakdownInfoWhenInvalidCache(e) {
      return {
        data: this.getBreakdownInfoData(e)
      };
    }
    getBreakdownInfoData(e) {
      return l.A.pointsToLines(g.A.rectTo4Points(e.data), !0);
    }
    getControlPoints(e, t, r) {
      return this.resolveControlPoints(e.data, r);
    }
    moveControlPoint(e) {
      var t = e.isShift,
        r = e.isAlt,
        n = e.otherShapes,
        i = e.isControl,
        o = e.key,
        s = e.point,
        a = e.shape,
        c = e.snapToGridSize,
        d = a.data,
        h = d.p1,
        m = d.p2,
        y = d.rotation,
        v = e.diagramModel.horizontalGuides || [],
        b = e.diagramModel.verticalGuides || [],
        x = (v.length > 0 || b.length > 0) && !e.isControl,
        S,
        A = s,
        w = n.length > 0 && !i,
        E = c && !e.isControl;
      if (w) {
        var k = p.A.detectPoint(A, e.otherShapes, [], 5 / e.dzc.zoomRatio);
        k && (e.outputSnapPoint = k.snapPoint, E = !1, x = !1, A = k.snapPoint);
      }
      if (x) {
        var O = f.A.detectWithPoints(b, v, [A]);
        if (O) switch (E = !1, O.type) {
          case "horizontal":
          case "vertical":
            A = O.snapPoint, e.outputSnapPoint = O.snapPoint;
            break;
          case "both":
            A = {
              x: O.vSnapPoint.x,
              y: O.hSnapPoint.y
            }, e.outputSnapPoint = A;
        }
      }
      if (E && (A = l.A.snapToGridSize(A, c), !y || "bottom" != o && "top" != o && "left" != o && "right" != o || (e.outputSnapPoint = A)), "skew-x" == o) {
        var D = this.getCp(h, m),
          P = l.A.pointRotate(A, D, -y),
          M = u.A.skewXAngleFromDisplacement(e.shape.data, {
            x: h.x,
            y: m.y
          }, P);
        return this.changeShapeData(e.shape, "skewX", M);
      }
      var I = g.A.moveControlPoint(o, a.data, A, {
        keepRatio: t,
        symmetricResize: r
      });
      return S = C(C({}, a), {}, {
        data: C(C({}, a.data), I)
      });
    }
    getCp(e, t) {
      return {
        x: (e.x + t.x) / 2,
        y: (e.y + t.y) / 2
      };
    }
    rotate(e, t) {
      var r = l.A.addRotation360(e.data.rotation || 0, t);
      return this.changeShapeData(e, "rotation", l.A.round2(r));
    }
    rotateAround(e, t, r) {
      return C(C({}, e), {}, {
        data: b.A.rotateAround(e.data, t, r)
      });
    }
    skewXAtCenter(e, t, r) {
      return C(C({}, e), {}, {
        data: b.A.skewXAtCenter(e.data, t, r)
      });
    }
    move(e, t, r) {
      if (r && r.snapGridOptions && r.snapGridOptions.gridSize >= 2) {
        var n = e.data,
          i = n.p1,
          o = n.p2,
          s = n.rotation,
          a = l.A.getCenterPoint(i, o),
          c = [i, o, {
            x: i.x,
            y: o.y
          }, {
            x: o.x,
            y: i.y
          }, a];
        s && (c = l.A.rotatePointsByShapeRect(e, c)), t = d.A.getMinDeltaForPoints(c, r.snapGridOptions);
      }
      return C(C({}, e), {}, {
        data: C(C({}, e.data), {}, {
          p1: l.A.addPoint(e.data.p1, t),
          p2: l.A.addPoint(e.data.p2, t)
        })
      });
    }
    createShape(e) {
      return y.A.createRectWrapShape(e, this.getType());
    }
    getRectangleBreakdownInfoData(e) {
      return l.A.pointsToLines(g.A.rectTo4Points(e.data), !0);
    }
    getBoundingRect(e) {
      return l.A.getBoundingRectFromPoints(g.A.rectTo4Points(e.data));
    }
    scale(e, t, r, n) {
      return C(C({}, e), {}, {
        data: b.A.scaleFromTo(e.data, t, r, n)
      });
    }
    changeShapeData(e, t, r) {
      return C(C({}, e), {}, {
        data: C(C({}, e.data), {}, {
          [t]: r
        })
      });
    }
    getCentralPoint(e) {
      return l.A.getCenterPoint(e.data);
    }
    flipHorizontally(e) {
      var t = b.A.flipHorizontally(e.data);
      return C(C({}, e), {}, {
        data: t
      });
    }
    flipVertically(e) {
      var t = b.A.flipVertically(e.data);
      return C(C({}, e), {}, {
        data: t
      });
    }
    flipToLineThroughPoint(e, t) {
      var r = b.A.flipToLineThroughPoint(e.data, t);
      return C(C({}, e), {}, {
        data: r
      });
    }
    flipToPoint(e, t) {
      var r = b.A.flipToPoint(e.data, t);
      return C(C({}, e), {}, {
        data: r
      });
    }
    resolveControlPoints(e, t) {
      var r = e.rotation,
        i = l.A.getCenterPoint(e.p1, e.p2),
        o = g.A.rectTo4Points(e),
        a = (0, n.A)(o, 4),
        c = a[0],
        d = a[1],
        h = a[2],
        p = a[3],
        u = l.A.getMiddlePointLine(c, p),
        m = l.A.getMiddlePointLine(c, d),
        f = l.A.getMiddlePointLine(d, h),
        y = l.A.getMiddlePointLine(h, p),
        b = e.flipX ? h : p;
      b = {
        x: (b = l.A.pointRotate(b, i, -r)).x,
        y: b.y + v.A.skewControlDistance() / t.zoomRatio
      };
      var x = [{
          key: "left-top",
          p: c,
          cursor: "nwse-resize",
          rotation: r
        }, {
          key: "top",
          p: m,
          cursor: "ns-resize",
          rotation: r
        }, {
          key: "top-right",
          p: d,
          cursor: "nesw-resize",
          rotation: r
        }, {
          key: "right",
          p: f,
          cursor: "ew-resize",
          rotation: r
        }, {
          key: "right-bottom",
          p: h,
          cursor: "nwse-resize",
          rotation: r
        }, {
          key: "bottom",
          p: y,
          cursor: "ns-resize",
          rotation: r
        }, {
          key: "bottom-left",
          p,
          cursor: "nesw-resize",
          rotation: r
        }, {
          key: "left",
          p: u,
          cursor: "ew-resize",
          rotation: r
        }, {
          key: "skew-x",
          p: b = l.A.pointRotate(b, i, r),
          cursor: "crosshair",
          rotation: r,
          type: "skew"
        }],
        C = l.A.rectWidth(e),
        S = l.A.rectHeight(e);
      return C <= 20 / t.zoomRatio && (x = s().filter(x, e => "top" != e.key && "bottom" != e.key)), S <= 20 / t.zoomRatio && (x = s().filter(x, e => "right" != e.key && "left" != e.key)), S <= 25 / t.zoomRatio && C <= 25 / t.zoomRatio && x.forEach(e => e.smaller = !0), x;
    }
  }
};
