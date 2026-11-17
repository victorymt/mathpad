/* module 48248 — 292 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(22087),
    i = r(86260),
    o = r(1356),
    s = {};
  r(2677)(s, r(30254)("iterator"), function () {
    return this;
  }), e.exports = function (e, t, r) {
    e.prototype = n(s, {
      next: i(1, r)
    }), o(e, t + " Iterator");
  };
};
