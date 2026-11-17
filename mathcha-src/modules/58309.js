/* module 58309 — 990 chars */
module.exports = function (e, t, r) {
  "use strict";

  function n(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  var i = r(68499),
    o = r(14594);
  function s(e, t) {
    var r;
  }
  var a = function () {
    function e(t) {
      n(this, e), this.transaction = t;
    }
    return e.prototype.isMounted = function e(t) {
      return !1;
    }, e.prototype.enqueueCallback = function e(t, r, n) {
      this.transaction.isInTransaction() && i.enqueueCallback(t, r, n);
    }, e.prototype.enqueueForceUpdate = function e(t) {
      this.transaction.isInTransaction() ? i.enqueueForceUpdate(t) : s(t, "forceUpdate");
    }, e.prototype.enqueueReplaceState = function e(t, r) {
      this.transaction.isInTransaction() ? i.enqueueReplaceState(t, r) : s(t, "replaceState");
    }, e.prototype.enqueueSetState = function e(t, r) {
      this.transaction.isInTransaction() ? i.enqueueSetState(t, r) : s(t, "setState");
    }, e;
  }();
  e.exports = a;
};
