/* module 55762 — 296 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(67526),
    i = r(47967),
    o = r(1763),
    s = r(67574)("species");
  e.exports = function (e) {
    var t = n[e];
    o && t && !t[s] && i.f(t, s, {
      configurable: !0,
      get: function () {
        return this;
      }
    });
  };
};
