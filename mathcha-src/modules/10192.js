/* module 10192 — 2658 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => p
  });
  var n = r(64467),
    i = r(84258),
    o = r(43774),
    s = r(30803),
    a = r(2543),
    l = r.n(a);
  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? c(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class h {
    calculatePositionX(e, t, r) {
      var n = e.left + r;
      return n + t > e.right && (n = e.right - t), n < 0 && (n = 0), n;
    }
    extractBoundary(e) {
      var t = e.dzc.zoomRatio,
        r = e.diagramRect.width / t,
        n = e.diagramRect.height / t,
        o = {
          left: 0,
          top: 0,
          right: r,
          bottom: n,
          dzc: e.dzc
        };
      if (e.viewRect) {
        var s = e.diagramRect,
          a = e.viewRect,
          c = l().clamp((a.left - s.left) / t, 0, r - t),
          d = l().clamp((a.top - s.top) / t, 0, n - t),
          h,
          p;
        o = {
          left: c,
          top: d,
          right: l().clamp((a.right - s.left) / t, c + t, r),
          bottom: l().clamp((a.bottom - s.top) / t, d + t, n),
          dzc: e.dzc
        };
      }
      return i.A.isTestEnv() && (o.left = 0, o.top = 0, o.bottom = 200), o;
    }
    createBy(e, t) {
      return t(this.extractBoundary(e));
    }
    createRectWrapShape(e, t) {
      return e = d(d({}, e), {}, {
        shapeWidth: e.shapeWidth || 70,
        shapeHeight: e.shapeHeight || 40
      }), this.createBy(e, r => {
        var n = r.dzc.zoomRatio,
          i = r.bottom,
          a = o.A.getRandomPosYAround(r.top + 100 / n, r.top + 180 / n, i),
          l = this.calculatePositionX(r, e.shapeWidth, 100 / n);
        return {
          id: s.w.nextDiagramCompositeShapeId(),
          type: t,
          data: {
            p1: {
              x: l,
              y: a.y1
            },
            p2: {
              x: l + e.shapeWidth,
              y: a.y1 + e.shapeHeight
            }
          }
        };
      });
    }
  }
  const p = new h();
};
