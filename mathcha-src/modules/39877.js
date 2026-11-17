/* module 39877 — 3674 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    a: () => c
  });
  var n = r(64467),
    i = r(36223),
    o = r(84258),
    s = r(37566),
    a = r(40961),
    l = r.n(a);
  class c {
    constructor() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (0, n.A)(this, "options", void 0), (0, n.A)(this, "onMoved", void 0), (0, n.A)(this, "onMoving", void 0), (0, n.A)(this, "onMovingStarted", void 0), (0, n.A)(this, "baseElement", void 0), (0, n.A)(this, "container", void 0), (0, n.A)(this, "movingInfo", void 0), (0, n.A)(this, "alwaysRegisterTouch", !0), (0, n.A)(this, "handleContainerMouseMove", e => {
        if (this.options.noPreventDefault || e.preventDefault(), this.options.stopPropagation && e.stopPropagation(), e.handledMove = !0, this.movingInfo) {
          var t = this.getPointFromEvent(e);
          !this.movingInfo.didMove && this.onMovingStarted && l().unstable_batchedUpdates(() => {
            this.onMovingStarted(e, t, this.movingInfo);
          }), this.movingInfo.didMove = !0, this.movingInfo.lastPoint = t;
          var r = this.subtractPoint(t, this.movingInfo.lastPoint),
            n = this.subtractPoint(t, this.movingInfo.downPoint);
          this.onMoving && l().unstable_batchedUpdates(() => {
            this.onMoving(n, t, this.movingInfo, e, r);
          });
        }
      }), (0, n.A)(this, "handleContainerMouseUp", e => {
        if (this.options.noPreventDefault || e.preventDefault(), this.options.stopPropagation && e.stopPropagation(), this.movingInfo) {
          this.removeMovingListeners();
          var t = this.movingInfo.lastPoint;
          this.onMoved && l().unstable_batchedUpdates(() => {
            this.onMoved(this.movingInfo, t, e);
          }), this.handleMouseUp(), this.movingInfo = null;
        }
      }), this.options = e;
    }
    setBaseElement(e) {
      this.baseElement = e;
    }
    setContainer(e) {
      this.container = e;
    }
    mouseDown(e, t) {
      if (this.container || (this.container = document.body), this.baseElement || (this.baseElement = document.body), o.A.isMobileOrTablet()) {
        var r = e.nativeEvent || e;
        r.handledTouchStart = !0, r.stopPropagation();
      }
      var n = this.getPointFromEvent(e);
      return this.movingInfo = {
        downPoint: n,
        customData: t,
        didMove: !1,
        lastPoint: n
      }, (o.A.isMobileOrTablet() || this.alwaysRegisterTouch) && (this.addEventListener("touchmove", this.handleContainerMouseMove), this.addEventListener("touchend", this.handleContainerMouseUp), this.addEventListener("touchcancel", this.handleContainerMouseUp)), this.addEventListener("mousemove", this.handleContainerMouseMove), this.addEventListener("mouseup", this.handleContainerMouseUp), this.options.noPreventDefault || e.preventDefault(), this.options.stopPropagation && e.stopPropagation(), this.handleMouseDown(), n;
    }
    addEventListener(e, t) {
      var r = i.A.getFalsePassiveObject();
      s.Yt(this.container)[0].addEventListener(e, t, r);
    }
    removeEventListener(e, t) {
      s.Yt(this.container)[0].removeEventListener(e, t);
    }
    removeMovingListeners() {
      this.container && (this.removeEventListener("touchmove", this.handleContainerMouseMove), this.removeEventListener("touchend", this.handleContainerMouseUp), this.removeEventListener("touchcancel", this.handleContainerMouseUp), this.removeEventListener("mousemove", this.handleContainerMouseMove), this.removeEventListener("mouseup", this.handleContainerMouseUp));
    }
    cancel() {
      this.removeMovingListeners(), this.movingInfo = null, this.handleMouseUp();
    }
  }
};
