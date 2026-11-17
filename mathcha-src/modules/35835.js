/* module 35835 — 1026 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => i
  });
  var n = r(64467);
  class i {
    constructor() {
      (0, n.A)(this, "handledCursorSelected", void 0), (0, n.A)(this, "focusAcquired", void 0), (0, n.A)(this, "requestCursorSelect", void 0);
    }
    withHandledCursorSelected() {
      return this.handledCursorSelected = !0, this;
    }
    withFocusAcquired() {
      return this.focusAcquired = !0, this;
    }
    withRequestCursorSelect() {
      return this.requestCursorSelect = !0, this;
    }
    build() {
      return {
        handledCursorSelected: this.handledCursorSelected,
        focusAcquired: this.focusAcquired,
        requestCursorSelect: this.requestCursorSelect
      };
    }
    static getBuilder(e) {
      var t = new i();
      return e && (t.focusAcquired = e.focusAcquired, t.handledCursorSelected = e.handledCursorSelected, t.requestCursorSelect = e.requestCursorSelect), t;
    }
    static getDefault() {
      return i.empty;
    }
  }
  (0, n.A)(i, "empty", {});
};
