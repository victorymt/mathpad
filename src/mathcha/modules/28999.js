/* module 28999 — 1377 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611);
  function i(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  var o = r(9248),
    s = r(90646),
    a = function () {
      function e(t) {
        i(this, e), this._callbacks = null, this._contexts = null, this._arg = t;
      }
      return e.prototype.enqueue = function e(t, r) {
        this._callbacks = this._callbacks || [], this._callbacks.push(t), this._contexts = this._contexts || [], this._contexts.push(r);
      }, e.prototype.notifyAll = function e() {
        var t = this._callbacks,
          r = this._contexts,
          i = this._arg;
        if (t && r) {
          t.length !== r.length && n("24"), this._callbacks = null, this._contexts = null;
          for (var o = 0; o < t.length; o++) t[o].call(r[o], i);
          t.length = 0, r.length = 0;
        }
      }, e.prototype.checkpoint = function e() {
        return this._callbacks ? this._callbacks.length : 0;
      }, e.prototype.rollback = function e(t) {
        this._callbacks && this._contexts && (this._callbacks.length = t, this._contexts.length = t);
      }, e.prototype.reset = function e() {
        this._callbacks = null, this._contexts = null;
      }, e.prototype.destructor = function e() {
        this.reset();
      }, e;
    }();
  e.exports = o.addPoolingTo(a);
};
