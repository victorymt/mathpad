/* module 83084 — 3219 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    x: () => c
  });
  var n = r(64467),
    i = r(19539),
    o = r(57507);
  function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function a(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class l {
    shiftToKeepCenter(e, t, r, n) {
      var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      if (!r || "center" == r) return t;
      var s = n.offsetWidth * o,
        l = n.offsetHeight * o,
        c = this.calculateCenterPointWithWh(e.p, r, s, l, e),
        d = this.calculateCenterPointWithWh(t.p, r, s, l, t),
        h = i.A.substractPoint(c, d);
      return a(a({}, t), {}, {
        p: i.A.addPoint(t.p, h)
      });
    }
    calculateCenterPoint(e, t) {
      var r = e.shape.data.p,
        n = t.offsetWidth,
        i = t.offsetHeight;
      return this.calculateCenterPointWithWh(r, e.shape.anchor, n, i, e.shape.data);
    }
    getSamplePosition(e, t, r, n, i) {
      if (i = i || {
        x: t / 2,
        y: r / 2
      }, !e || "center" == e) return i;
      switch (e) {
        case "left-top":
          return this.transform({
            x: i.x - t / 2,
            y: i.y - r / 2
          }, i, n);
        case "top":
          return this.transform({
            x: i.x,
            y: i.y - r / 2
          }, i, n);
        case "top-right":
          return this.transform({
            x: i.x + t / 2,
            y: i.y - r / 2
          }, i, n);
        case "left":
          return this.transform({
            x: i.x - t / 2,
            y: i.y
          }, i, n);
        case "right":
          return this.transform({
            x: i.x + t / 2,
            y: i.y
          }, i, n);
        case "bottom-left":
          return this.transform({
            x: i.x - t / 2,
            y: i.y + r / 2
          }, i, n);
        case "bottom":
          return this.transform({
            x: i.x,
            y: i.y + r / 2
          }, i, n);
        case "right-bottom":
          return this.transform({
            x: i.x + t / 2,
            y: i.y + r / 2
          }, i, n);
      }
    }
    calculateCenterPointWithWh(e, t, r, n, o) {
      if (!t || "center" == t) return e;
      var s = {
          x: r / 2,
          y: n / 2
        },
        a = this.getSamplePosition(t, r, n, o),
        l = i.A.substractPoint(e, a);
      return i.A.addPoint(s, l);
    }
    transform(e, t, r) {
      var n = r.rotation,
        s = r.skewX;
      return i.A.pointRotate(o.A.pointSkewed(t, s, e), t, n);
    }
  }
  var c = new l();
};
