/* module 2778 — 3064 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n;
  r.d(t, {
    lX: () => u,
    p5: () => p,
    sE: () => m
  });
  var i = r(3453),
    o = r(64467),
    s = r(19539),
    a = r(29315),
    l = r(33535);
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
        (0, o.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class h extends null {}
  class p extends a.US {}
  class u extends a.Au {
    getControlPoints(e, t, r) {
      return g(e, r);
    }
    moveControlPoint(e) {
      return e.isShift = !0, super.moveControlPoint(e);
    }
    createShape(e) {
      return super.createShape(d(d({}, e), {}, {
        shapeWidth: e.shapeWidth || 50,
        shapeHeight: e.shapeHeight || 50
      }));
    }
    scale(e, t, r, n) {
      var i = super.scale(e, t, r, n),
        o,
        a;
      return s.A.rectWidth(i.data) != s.A.rectHeight(i.data) ? d(d({}, i), {}, {
        type: this.getTransformedShapeTypeWhenConstrainBroken()
      }) : i;
    }
  }
  function g(e, t) {
    var r = e.data.rotation,
      n = s.A.getCenterPoint(e.data.p1, e.data.p2),
      o = m(e),
      a = (0, i.A)(o, 4),
      c = a[0],
      d = a[1],
      h = a[2],
      p = a[3],
      u = l.A.rectTo4Points(e.data),
      g = (0, i.A)(u, 4),
      f = g[2],
      y = g[3],
      v = e.data.flipX ? f : y;
    v = {
      x: (v = s.A.pointRotate(v, n, -r)).x,
      y: v.y + 12 / t.zoomRatio
    };
    var b = [{
        key: "top",
        p: c,
        cursor: "ns-resize",
        rotation: r
      }, {
        key: "right",
        p: d,
        cursor: "ew-resize",
        rotation: r
      }, {
        key: "bottom",
        p: h,
        cursor: "ns-resize",
        rotation: r
      }, {
        key: "left",
        p,
        cursor: "ew-resize",
        rotation: r
      }, {
        key: "skew-x",
        p: v = s.A.pointRotate(v, n, r),
        cursor: "crosshair",
        rotation: r,
        type: "skew"
      }],
      x = s.A.rectWidth(e.data),
      C;
    return s.A.rectHeight(e.data) <= 25 / t.zoomRatio && x <= 25 / t.zoomRatio && b.forEach(e => e.smaller = !0), b;
  }
  function m(e) {
    var t = l.A.rectTo4Points(e.data),
      r = (0, i.A)(t, 4),
      n = r[0],
      o = r[1],
      a = r[2],
      c = r[3],
      d,
      h,
      p,
      u;
    return [s.A.getMiddlePointLine(n, o), s.A.getMiddlePointLine(o, a), s.A.getMiddlePointLine(a, c), s.A.getMiddlePointLine(n, c)];
  }
};
