/* module 2639 — 521 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(88535),
    i = r(46438),
    o = r(66670),
    s = r(85614),
    a = r(61037);
  n(n.P + n.R, "Promise", {
    finally: function (e) {
      var t = s(this, i.Promise || o.Promise),
        r = "function" == typeof e;
      return this.then(r ? function (r) {
        return a(t, e()).then(function () {
          return r;
        });
      } : e, r ? function (r) {
        return a(t, e()).then(function () {
          throw r;
        });
      } : e);
    }
  });
};
