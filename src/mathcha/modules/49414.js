/* module 49414 — 638 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => i
  });
  var n = r(64467);
  class i {
    constructor() {
      (0, n.A)(this, "focusAcquired", void 0), (0, n.A)(this, "preventScroll", void 0);
    }
    build() {
      return {
        focusAcquired: this.focusAcquired,
        preventScroll: this.preventScroll
      };
    }
    withFocusAcquired() {
      return this.focusAcquired = !0, this;
    }
    withPreventScroll() {
      return this.preventScroll = !0, this;
    }
    static getBuilder() {
      return new i();
    }
    static getDefault() {
      return i.empty;
    }
  }
  (0, n.A)(i, "empty", {});
};
