/* module 45274 — 350 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(66670),
    i = r(46438),
    o = r(78423),
    s = r(58219),
    a = r(30254)("species");
  e.exports = function (e) {
    var t = "function" == typeof i[e] ? i[e] : n[e];
    s && t && !t[a] && o.f(t, a, {
      configurable: !0,
      get: function () {
        return this;
      }
    });
  };
};
