/* module 60441 — 2336 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    T: () => s
  });
  var n = r(64467),
    i = r(2432);
  class o {
    constructor() {
      (0, n.A)(this, "handlers", new Map()), (0, n.A)(this, "displayStates", new Map()), (0, n.A)(this, "activeModelId", null);
    }
    register(e, t, r) {
      this.handlers.set(e, {
        clickHandler: t,
        modeChangeHandler: r
      });
    }
    registerDisplay(e, t, r) {
      this.displayStates.set(e, {
        viewToDisc: t,
        renderOverlay: r
      }), this.activeModelId === e && this.registerWithOverlayManager(e);
    }
    unregister(e) {
      this.activeModelId === e && (i.T.unregister(e), this.activeModelId = null), this.handlers.delete(e);
    }
    unregisterDisplay(e) {
      this.activeModelId === e && i.T.unregister(e), this.displayStates.delete(e);
    }
    registerWithOverlayManager(e) {
      var t = this.displayStates.get(e);
      if (t) {
        var r = {
          id: e,
          cursor: "crosshair",
          render: t.renderOverlay,
          onMouseDown: (r, n, i) => {
            var o = t.viewToDisc(r, n);
            if (o) {
              var s = Math.round(1e4 * o.x) / 1e4,
                a = Math.round(1e4 * o.y) / 1e4;
              this.fireClick(e, s, a);
            }
          }
        };
        i.T.register(r);
      }
    }
    activateMode(e) {
      if (this.activeModelId && this.activeModelId !== e) {
        var t = this.handlers.get(this.activeModelId);
        null != t && t.modeChangeHandler && t.modeChangeHandler(!1), i.T.unregister(this.activeModelId);
      }
      this.activeModelId = e, this.registerWithOverlayManager(e);
      var r = this.handlers.get(e);
      null != r && r.modeChangeHandler && r.modeChangeHandler(!0);
    }
    deactivateMode() {
      if (this.activeModelId) {
        var e = this.handlers.get(this.activeModelId);
        null != e && e.modeChangeHandler && e.modeChangeHandler(!1), i.T.unregister(this.activeModelId);
      }
      this.activeModelId = null;
    }
    isActive(e) {
      return this.activeModelId === e;
    }
    getActiveModelId() {
      return this.activeModelId;
    }
    fireClick(e, t, r) {
      if (this.activeModelId === e) {
        var n = this.handlers.get(e);
        n && n.clickHandler(e, t, r);
      }
    }
  }
  var s = new o();
};
