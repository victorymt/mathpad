/* module 52040 — 873 chars */
module.exports = function (e, t, r) {
  "use strict";

  t.__esModule = !0;
  var n,
    i = a(r(3053)),
    o,
    s = a(r(4123));
  function a(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  t.default = function () {
    function e(e, t) {
      var r = [],
        n = !0,
        i = !1,
        o = void 0;
      try {
        for (var a = (0, s.default)(e), l; !(n = (l = a.next()).done) && (r.push(l.value), !t || r.length !== t); n = !0);
      } catch (e) {
        i = !0, o = e;
      } finally {
        try {
          !n && a.return && a.return();
        } finally {
          if (i) throw o;
        }
      }
      return r;
    }
    return function (t, r) {
      if (Array.isArray(t)) return t;
      if ((0, i.default)(Object(t))) return e(t, r);
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }();
};
