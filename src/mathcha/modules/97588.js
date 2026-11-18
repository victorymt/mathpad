/* module 97588 — 531 chars */
module.exports = function (e, t, r) {
  "use strict";

  t.__esModule = !0;
  var n,
    i = o(r(89829));
  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  t.default = function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, i.default)(e, n.key, n);
      }
    }
    return function (t, r, n) {
      return r && e(t.prototype, r), n && e(t, n), t;
    };
  }();
};
