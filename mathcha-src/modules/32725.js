/* module 32725 — 1188 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(64467);
  class i {
    constructor() {
      (0, n.A)(this, "funcArr", []), (0, n.A)(this, "isRegisted", !1), (0, n.A)(this, "keyInfo", {
        stopOther: !1,
        event: void 0
      }), (0, n.A)(this, "handleKeyDown", e => {
        if (!(this.funcArr.length <= 0)) {
          var t = this.keyInfo;
          t.stopOther = !1, t.event = e;
          for (var r = 0; r < this.funcArr.length; r++) {
            var n;
            if ((0, this.funcArr[r])(t), t.stopOther) {
              e.preventDefault(), e.stopPropagation();
              break;
            }
          }
        }
      });
    }
    stack(e) {
      this.funcArr.unshift(e), this.registerOrDeregisterEvent();
    }
    remove(e) {
      this.funcArr = this.funcArr.filter(t => t != e), this.registerOrDeregisterEvent();
    }
    registerOrDeregisterEvent() {
      document && (this.funcArr.length > 0 ? this.isRegisted || (this.isRegisted = !0, document.addEventListener("keydown", this.handleKeyDown)) : (document.removeEventListener("keydown", this.handleKeyDown), this.isRegisted = !1));
    }
  }
  const o = new i();
};
