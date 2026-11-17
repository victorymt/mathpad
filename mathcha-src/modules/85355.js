/* module 85355 — 4173 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => a
  });
  var n = r(2543),
    i = r.n(n),
    o = r(61848);
  class s {
    setLeftGeoPos(e, t) {
      return o.A.set(e, "left", t);
    }
    setTopGeoPos(e, t) {
      return o.A.set(e, "top", t);
    }
    findNearestVerticalStackOfRect(e, t) {
      for (var r = e[0], n = 999999, i = 0; i < e.length; i++) {
        var o = e[i].rect;
        if (t.top >= o.top && t.top <= o.bottom) return e[i];
        var s = t.top > o.bottom ? t.top - o.bottom : o.top - t.top;
        s < n && (r = e[i], n = s);
      }
      return r;
    }
    findNearestLeftRects(e, t, r) {
      var n = e;
      return (n = "loose-as-outside-in" == r ? i().filter(e, e => Math.floor(e.rect.right) <= t.left) : i().filter(e, e => Math.ceil(e.rect.right) < t.left)).length <= 0 ? null : i().minBy(n, e => this.minDistanceToEdges(e, t));
    }
    findNearestRightRects(e, t, r) {
      var n = e;
      return (n = "loose-as-outside-in" == r ? i().filter(e, e => Math.ceil(e.rect.left) >= t.left) : i().filter(e, e => Math.floor(e.rect.left) > t.left)).length <= 0 ? null : i().minBy(n, e => this.minDistanceToEdges(e, t));
    }
    findNearestTopRects(e, t) {
      var r = i().filter(e, e => this.isRectPartiallyAboveOf(e, t));
      return r.length <= 0 ? null : i().minBy(r, e => this.minDistanceToEdges(e, t));
    }
    findNearestBottomRects(e, t) {
      var r = i().filter(e, e => this.isRectPartiallyBelowOf(e, t));
      return r.length <= 0 ? null : i().minBy(r, e => this.minDistanceToEdges(e, t));
    }
    findNearestRectsInXAxis(e, t) {
      return i().minBy(e, e => this.distanceInXAxisToEdges(e, t));
    }
    minDistanceToEdges(e, t) {
      var r = this.minCloseTo(t.left, e.rect.left, e.rect.right),
        n = this.minCloseTo(t.top, e.rect.top, e.rect.bottom);
      return this.isRectClampPosInYAxis(e, t) ? Math.abs(r - t.left) : this.isRectClampPosInXAxis(e, t) ? Math.abs(n - t.top) : this.distance2Pos({
        left: r,
        top: n
      }, t);
    }
    distanceInXAxisToEdges(e, t) {
      if (this.isRectClampPosInXAxis(e, t)) return 0;
      var r = this.minCloseTo(t.left, e.rect.left, e.rect.right);
      return Math.abs(t.left - r);
    }
    distanceInXAxisToEdgesRect(e, t) {
      var r = this.minCloseTo(t.left, e.left, e.right);
      return Math.abs(t.left - r);
    }
    distance2Pos(e, t) {
      return Math.sqrt((e.left - t.left) * (e.left - t.left) + (e.top - t.top) * (e.top - t.top));
    }
    minMargin(e, t, r) {
      var n = Math.abs(t - e),
        i = Math.abs(r - e);
      return Math.min(n, i);
    }
    minCloseTo(e, t, r) {
      var n, i;
      return Math.abs(t - e) < Math.abs(r - e) ? t : r;
    }
    isRectClampPosInYAxis(e, t) {
      return e.rect.bottom >= t.top && e.rect.top <= t.top;
    }
    isClientRectClampPosInYAxis(e, t, r) {
      return r || (r = 0), e.bottom >= t.top - r && e.top <= t.top + r;
    }
    isRectClampPosInXAxis(e, t, r) {
      return r || (r = 0), e.rect.right + r >= t.left && e.rect.left - r <= t.left;
    }
    isClientRectClampPosInXAxis(e, t, r) {
      return r || (r = 0), e.right + r >= t.left && e.left - r <= t.left;
    }
    isRectPartiallyAboveOf(e, t) {
      return e.rect.bottom < t.top;
    }
    isRectTopAboveOf(e, t) {
      return e.rect.top < t.top;
    }
    isRectMiddleAboveOf(e, t) {
      var r = e.rect.bottom - e.rect.top;
      return e.rect.top + r / 2 < t.top;
    }
    isRectPartiallyBelowOf(e, t) {
      return e.rect.top >= t.top;
    }
    isRectBottomBelowOf(e, t) {
      return e.rect.bottom > t.top;
    }
    isRectMiddleBelowOf(e, t) {
      var r = e.rect.bottom - e.rect.top;
      return e.rect.bottom - r / 2 > t.top;
    }
    isRectOnTheLeftOfRect(e, t) {
      return e.rect.right < t.rect.left;
    }
    isRectBelowOf(e, t) {
      return e.rect.top >= t.top;
    }
    isRectAboveOf(e, t) {
      return e.rect.bottom <= t.top;
    }
    isOnMidLeft(e, t) {
      var r = e.rect.left + (e.rect.right - e.rect.left) / 2;
      return t.left < r;
    }
    toPosition(e, t) {
      return {
        left: e,
        top: t
      };
    }
  }
  const a = new s();
};
