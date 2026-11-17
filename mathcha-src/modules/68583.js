/* module 68583 — 521 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(92127),
    i = r(56094),
    o = r(67526),
    s = r(19190),
    a = r(85957);
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
