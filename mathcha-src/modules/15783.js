/* module 15783 — 3238 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(64467),
    i = r(96860);
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
    detectVerticalGuides(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
        n = i.A.getSnapablePoints(t);
      return 0 == n.length ? null : this.detectVerticalWithPoints(e, n, r);
    }
    detectHorizontalGuides(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5,
        n = i.A.getSnapablePoints(t);
      return 0 == n.length ? null : this.detectHorizontalWithPoints(e, n, r);
    }
    detectGuides(e, t, r) {
      var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5,
        o = i.A.getSnapablePoints(r);
      return 0 == o.length ? null : this.detectWithPoints(e, t, o, n);
    }
    detectWithPoints(e, t, r) {
      var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5;
      e = e || [], t = t || [];
      var i = this.detectVerticalWithPoints(e, r, n),
        o = this.detectHorizontalWithPoints(t, r, n);
      return i && o ? {
        type: "both",
        hGuide: o.guide,
        vGuide: i.guide,
        hInputPoint: o.inputPoint,
        vInputPoint: i.inputPoint,
        hSnapPoint: s(s({}, o.snapPoint), {}, {
          x: o.snapPoint.x + i.xDelta
        }),
        vSnapPoint: s(s({}, i.snapPoint), {}, {
          y: i.snapPoint.y + o.yDelta
        }),
        delta: {
          x: i.xDelta,
          y: o.yDelta
        }
      } : o || i;
    }
    detectHorizontalWithPoints(e, t, r) {
      var n = null;
      return e.forEach(e => {
        t.forEach(t => {
          var i = Math.abs(t.y - e.y);
          i > r || (null == n || Math.abs(n.yDelta) > i) && (n = {
            type: "horizontal",
            guide: e,
            inputPoint: t,
            yDelta: e.y - t.y,
            snapPoint: {
              x: t.x,
              y: e.y
            }
          });
        });
      }), n;
    }
    detectVerticalWithPoints(e, t, r) {
      var n = null;
      return e.forEach(e => {
        t.forEach(t => {
          var i = Math.abs(t.x - e.x);
          i > r || (null == n || Math.abs(n.xDelta) > i) && (n = {
            type: "vertical",
            guide: e,
            inputPoint: t,
            xDelta: e.x - t.x,
            snapPoint: {
              x: e.x,
              y: t.y
            }
          });
        });
      }), n;
    }
  }
  const l = new a();
};
