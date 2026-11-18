/* module 85849 — 1160 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l,
    k: () => d
  });
  var n = r(64467),
    i = r(19539),
    o = r(36223),
    s = r(516),
    a = r(39877);
  class l extends a.a {
    constructor() {
      var e;
      super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), (0, n.A)(this, "cachedBaseRect", void 0);
    }
    handleMouseDown() {
      this.options.cacheBaseRect && (this.cachedBaseRect = s.A.getElementRect(this.baseElement));
    }
    handleMouseUp() {
      this.cachedBaseRect && (this.cachedBaseRect = void 0);
    }
    getPointFromEvent(e) {
      var t = this.cachedBaseRect || s.A.getElementRect(this.baseElement),
        r = o.A.getLeftTopFromEvent(e);
      return {
        x: r.left - t.left,
        y: r.top - t.top
      };
    }
    subtractPoint(e, t) {
      return i.A.substractPoint(e, t);
    }
  }
  class c {
    addEventListenerNonPassive(e, t, r) {
      if (e) {
        var n = o.A.getFalsePassiveObject();
        e.addEventListener(t, r, n);
      }
    }
    removeEventListenerNonPassive(e, t, r) {
      e && e.removeEventListener(t, r);
    }
  }
  var d = new c();
};
