/* module 76546 — 3030 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => u
  });
  var n = r(64467),
    i = r(19539),
    o = r(33535),
    s = r(516),
    a = r(7789),
    l = r(57507),
    c = r(83084);
  function d(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function h(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? d(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class p {
    skewXAtCenter(e, t, r) {
      var n = o.A.rectTo4Points(e),
        i = l.A.pointsFromSkew(r, t, n),
        s = o.A.threePointsToRectangleInfo(i[0], i[1], i[2]);
      return h(h({}, e), s);
    }
    rotateAround(e, t, r) {
      var n = o.A.rectTo4Points(e),
        s = i.A.pointsRotate(n, r, t),
        a = o.A.threePointsToRectangleInfo(s[0], s[1], s[2]);
      return h(h({}, e), a);
    }
    scaleFromTo(e, t, r, n) {
      var i = o.A.rectTo4Points(e),
        s = a.A.scalePoints(i, t, r, n),
        l = o.A.threePointsToRectangleInfo(s[0], s[1], s[2]);
      return h(h({}, e), l);
    }
    flipHorizontally(e) {
      var t = i.A.getCenterPoint(e),
        r,
        n = o.A.rectTo4Points(e).map(e => i.A.flipHorizontallyPoint(e, t.x));
      return h(h({}, e), o.A.threePointsToRectangleInfo(n[0], n[1], n[2]));
    }
    flipVertically(e) {
      var t = i.A.getCenterPoint(e),
        r,
        n = o.A.rectTo4Points(e).map(e => i.A.flipVerticallyPoint(e, t.y));
      return h(h({}, e), o.A.threePointsToRectangleInfo(n[0], n[1], n[2]));
    }
    flipToLineThroughPoint(e, t) {
      var r = i.A.getCenterPoint(e),
        n = i.A.pointRotate(r, t, -90),
        s,
        a = o.A.rectTo4Points(e).map(e => i.A.reflectPointOverLine(e, t, n));
      return h(h({}, e), o.A.threePointsToRectangleInfo(a[0], a[1], a[2]));
    }
    flipToPoint(e, t) {
      var r,
        n = o.A.rectTo4Points(e).map(e => i.A.reflectPoint(e, t));
      return h(h({}, e), o.A.threePointsToRectangleInfo(n[0], n[1], n[2]));
    }
    buildTransformedRectForEditor(e, t) {
      var r = s.A.getElementClientSize(e),
        n = t.shape.data,
        i = n.flipX,
        o = n.rotation,
        a = n.skewX,
        l = c.x.calculateCenterPoint(t, e),
        d;
      return {
        p1: {
          x: l.x - r.width / 2,
          y: l.y - r.height / 2
        },
        p2: {
          x: l.x + r.width / 2,
          y: l.y + r.height / 2
        },
        rotation: o,
        skewX: a,
        flipX: i
      };
    }
  }
  const u = new p();
};
