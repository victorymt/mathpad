/* module 76001 — 441 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    F: () => o
  });
  var n = r(64467);
  class i {
    constructor() {
      (0, n.A)(this, "rtlDirCheck", void 0);
    }
    initRtlExp() {
      this.rtlDirCheck || (this.rtlDirCheck = /[\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC]/);
    }
    isRTL(e) {
      return !(1 == e.length && e.codePointAt(0) < 255) && (this.initRtlExp(), this.rtlDirCheck.test(e));
    }
  }
  var o = new i();
};
