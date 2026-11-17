/* module 53020 — 2466 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => s
  });
  var n = r(2543),
    i = r.n(n);
  class o {
    normalizeSegment(e) {
      return this.isSegmentPoint(e) || this.getHandleIn(e) || this.getHandleOut(e) ? e : this.getSegmentPoint(e);
    }
    isPointOnSegmentEnd(e, t, r) {
      var n = this.getSegmentPoint(i().last(e));
      return n[0] == t || n[1] == r;
    }
    isPointOnSegmentStart(e, t, r) {
      var n = this.getSegmentPoint(e[0]);
      return n[0] == t || n[1] == r;
    }
    segmentsAddDelta(e, t, r, n) {
      return e.map(e => this.isSegmentPoint(e) ? [e[0] + t, e[1] + r] : [[e[0][0] + t, e[0][1] + r], e[1] && !n ? [e[1][0] + t, e[1][1] + r] : e[1], e[2] && !n ? [e[2][0] + t, e[2][1] + r] : e[2]]);
    }
    segmentAddDelta(e, t, r, n) {
      return this.isSegmentPoint(e) ? [e[0] + t, e[1] + r] : [[e[0][0] + t, e[0][1] + r], e[1] && !n ? [e[1][0] + t, e[1][1] + r] : e[1], e[2] && !n ? [e[2][0] + t, e[2][1] + r] : e[2]];
    }
    removeHandleIn(e) {
      return this.isSegmentPoint(e) ? e : this.getHandleIn(e) ? this.normalizeSegment([e[0], void 0, e[2]]) : e;
      var t;
    }
    removeHandleOut(e) {
      return this.isSegmentPoint(e) ? e : this.getHandleOut(e) ? this.normalizeSegment([e[0], e[1], void 0]) : e;
      var t;
    }
    setHandleOut(e, t) {
      return this.isSegmentPoint(e) ? this.normalizeSegment([[e[0], e[1]], void 0, t ? [t[0], t[1]] : void 0]) : this.normalizeSegment([[e[0][0], e[0][1]], e[1], t ? [t[0], t[1]] : void 0]);
    }
    setHandleIn(e, t) {
      return this.isSegmentPoint(e) ? this.normalizeSegment([[e[0], e[1]], t ? [t[0], t[1]] : void 0, void 0]) : this.normalizeSegment([[e[0][0], e[0][1]], t ? [t[0], t[1]] : void 0, e[2]]);
    }
    isPaperItemEmpty(e) {
      return e.isEmpty(!0);
    }
    isSegmentPoint(e) {
      return !(e[0] instanceof Array);
    }
    getSegmentPoint(e) {
      return this.isSegmentPoint(e) ? e : e[0];
    }
    getHandleIn(e) {
      if (!this.isSegmentPoint(e)) return e[1];
    }
    getHandleOut(e) {
      if (!this.isSegmentPoint(e)) return e[2];
    }
    segPointEquals(e, t) {
      return e[0] == t[0] && e[1] == t[1];
    }
    segMainPointEquals(e, t) {
      return this.segPointEquals(this.getSegmentPoint(e), this.getSegmentPoint(t));
    }
    segPointSubstract(e, t) {
      return [e[0] - t[0], e[1] - t[1]];
    }
    segPointAdd(e, t) {
      return [e[0] + t[0], e[1] + t[1]];
    }
  }
  const s = new o();
};
