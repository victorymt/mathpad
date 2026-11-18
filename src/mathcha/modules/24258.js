/* module 24258 — 348 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(63387);
  function i(e) {
    var t, r;
    this.promise = new e(function (e, n) {
      if (void 0 !== t || void 0 !== r) throw TypeError("Bad Promise constructor");
      t = e, r = n;
    }), this.resolve = n(t), this.reject = n(r);
  }
  e.exports.f = function (e) {
    return new i(e);
  };
};
