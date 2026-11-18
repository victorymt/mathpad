/* module 59395 — 364 chars */
module.exports = function (e) {
  "use strict";

  function t(e) {
    return function () {
      return e;
    };
  }
  var r = function e() {};
  r.thatReturns = t, r.thatReturnsFalse = t(!1), r.thatReturnsTrue = t(!0), r.thatReturnsNull = t(null), r.thatReturnsThis = function () {
    return this;
  }, r.thatReturnsArgument = function (e) {
    return e;
  }, e.exports = r;
};
