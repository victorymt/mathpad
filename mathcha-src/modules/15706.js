/* module 15706 — 421 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    q: () => s
  });
  var n = r(64467);
  class i {
    constructor() {
      (0, n.A)(this, "composedRef", void 0), (0, n.A)(this, "ref", e => {
        this.composedRef = e;
      });
    }
    invalidateDrawing() {
      this.composedRef && this.composedRef.invalidateDrawing();
    }
  }
  class o {
    create() {
      return new i();
    }
  }
  var s = new o();
};
