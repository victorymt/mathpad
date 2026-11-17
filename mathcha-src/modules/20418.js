/* module 20418 — 1059 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    X: () => a
  });
  var n = r(64467),
    i = r(36223),
    o = r(39877),
    s = r(60693);
  class a extends o.a {
    constructor() {
      var e,
        t = arguments.length > 1 ? arguments[1] : void 0;
      super(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}), (0, n.A)(this, "requestDocZoomContainer", void 0), (0, n.A)(this, "cachedBaseRect", void 0), this.requestDocZoomContainer = t;
    }
    handleMouseDown() {
      this.options.cacheBaseRect && (this.cachedBaseRect = s.T.getBCRect(this.baseElement, this.requestDocZoomContainer()));
    }
    handleMouseUp() {
      this.cachedBaseRect && (this.cachedBaseRect = void 0);
    }
    getPointFromEvent(e) {
      var t = this.cachedBaseRect || s.T.getBCRect(this.baseElement, this.requestDocZoomContainer());
      return s.T.getPosFromAbsToRect(i.A.getLeftTopFromEvent(e), t);
    }
    subtractPoint(e, t) {
      return {
        left: e.left - t.left,
        top: e.top - t.top,
        zc: e.zc
      };
    }
  }
};
