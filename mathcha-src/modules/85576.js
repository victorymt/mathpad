/* module 85576 — 2466 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    c: () => l
  });
  var n = r(64467),
    i = r(516);
  function o(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? o(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class a {
    findFixedContextElement(e) {
      for (var t = e; t && "none" == window.getComputedStyle(t).transform;) t = t.parentElement;
      return t;
    }
    suggestExpandPositionLeftTop(e, t) {
      var r = this.calculateExpandPositionLeftTop(e);
      return t ? this.repositionInViewPortWith(r, t) : r;
    }
    calculateExpandPositionLeftTop(e) {
      var t = i.A.getElementRect(e.mainElement);
      switch (e.type) {
        case "absolute":
          var r = i.A.getElementRect(e.absoluteTo);
          return {
            top: t.bottom - r.top,
            left: t.left - r.left,
            mainRect: t
          };
        case "fixed":
          var n = this.findFixedContextElement(e.elementToSearchContext);
          if (n) {
            var o = i.A.getElementRect(n);
            return {
              top: t.bottom - o.top,
              left: t.left - o.left,
              mainRect: t
            };
          }
          return {
            top: t.bottom,
            left: t.left,
            mainRect: t
          };
      }
    }
    repositionInViewPortWith(e, t) {
      var r = window.innerHeight,
        n = window.innerWidth,
        i = e.top - e.mainRect.bottom,
        o = e.left - e.mainRect.left,
        a = 8,
        l = Math.max(8, Math.min(e.mainRect.left, n - t.width - 8)) + o,
        c = e.mainRect.bottom;
      return c + t.height > r - 8 && (c = e.mainRect.top >= t.height + 8 ? e.mainRect.top - t.height - 1 : Math.max(8, r - t.height - 8)), s(s({}, e), {}, {
        left: l,
        top: c + i
      });
    }
  }
  var l = new a();
};
