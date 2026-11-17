/* module 17306 — 751 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = i;
  var n = r(78179);
  function i(e) {
    var t = e.cellMeasurerCache,
      r = e.columnCount,
      n = e.columnWidth,
      i = e.spacer,
      o = void 0 === i ? 0 : i,
      s = void 0;
    function a(e) {
      for (var r = 0, i = 1; i < s.length; i++) s[i] < s[r] && (r = i);
      var a = r * (n + o),
        l = s[r] || 0;
      return s[r] = l + t.getHeight(e) + o, {
        left: a,
        top: l
      };
    }
    function l() {
      s = [];
      for (var e = 0; e < r; e++) s[e] = 0;
    }
    function c(e) {
      r = e.columnCount, n = e.columnWidth, o = e.spacer, l();
    }
    return l(), a.reset = c, a;
  }
};
