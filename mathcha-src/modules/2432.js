/* module 2432 — 832 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    T: () => o
  });
  var n = r(64467);
  class i {
    constructor() {
      (0, n.A)(this, "registration", null), (0, n.A)(this, "listeners", new Set());
    }
    register(e) {
      return (!this.registration || this.registration.id === e.id) && (this.registration = e, this.notifyListeners(), !0);
    }
    unregister(e) {
      this.registration && this.registration.id === e && (this.registration = null, this.notifyListeners());
    }
    isActive() {
      return null !== this.registration;
    }
    getRegistration() {
      return this.registration;
    }
    addListener(e) {
      this.listeners.add(e);
    }
    removeListener(e) {
      this.listeners.delete(e);
    }
    notifyListeners() {
      this.listeners.forEach(e => e());
    }
  }
  var o = new i();
};
