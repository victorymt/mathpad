/* module 40383 — 2042 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    a: () => d
  });
  var n = r(64467),
    i = r(3453),
    o = r(60150),
    s = r(84258);
  function a(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function l(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? a(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class c {
    applyReverseZoomStyleConsiderMobileScale(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "left top",
        n = arguments.length > 3 ? arguments[3] : void 0;
      return 1 != t.zoomRatio || s.A.isMobileOrTablet() ? 1 == t.zoomRatio && s.A.isMobileOrTablet() ? {
        transform: o.A.getSettingScaleTransform()
      } : this.applyReverseZoomStyle(e, t, r, n) : e;
    }
    applyReverseZoomStyle(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "left top",
        n = arguments.length > 3 ? arguments[3] : void 0;
      if (1 == t.zoomRatio) return e;
      if (null != n && n.zoomIgnoreRange) {
        var o = (0, i.A)(n.zoomIgnoreRange, 2),
          s = o[0],
          a = o[1];
        if (s <= t.zoomRatio && t.zoomRatio <= a) return e;
      }
      var c = t.zoomRatio;
      return null != n && n.zoomInDelta && c > 1 && (c += n.zoomInDelta), l(l({}, e), {}, {
        transform: "".concat((null == e ? void 0 : e.transform) || "", " scale(").concat(1 / c, ")"),
        transformOrigin: r
      });
    }
  }
  var d = new c();
};
