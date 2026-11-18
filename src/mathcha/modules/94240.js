/* module 94240 — 3810 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => h
  });
  var n = r(64467),
    i = r(65349),
    o = r(2543),
    s = r.n(o),
    a = r(53020);
  function l(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? l(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class d {
    segmentTransform(e, t) {
      switch (t[0]) {
        case "Path":
          return this.simplePathPointTransform(e, t);
        case "CompoundPath":
          return this.compoundPathPointTransform(e, t);
      }
    }
    simplePathPointTransform(e, t) {
      return [t[0], c(c({}, t[1]), {}, {
        segments: this.segmentsPointTransform(e, t[1].segments)
      })];
    }
    compoundPathPointTransform(e, t) {
      return [t[0], c(c({}, t[1]), {}, {
        children: t[1].children.map(t => this.segmentTransform(e, t))
      })];
    }
    segmentsPointTransform(e, t) {
      return t.map(t => e(t));
    }
    pathDFromPaperPath(e, t) {
      switch (e[0]) {
        case "Path":
          return this.pathDFromSimplePath(e, t);
        case "CompoundPath":
          return this.pathDFromCompoundPath(e, t);
      }
    }
    pathDFromPaperPathSplit(e, t) {
      switch (e[0]) {
        case "Path":
          return [this.pathDFromSimplePathSplit(e, t)];
        case "CompoundPath":
          return this.pathDFromCompoundPathSplit(e, t);
      }
    }
    pathDFromSimplePath(e, t) {
      return this.pathsDFromSegments(e[1].segments, e[1].closed, t);
    }
    pathDFromSimplePathSplit(e, t) {
      return {
        pathD: this.pathsDFromSegments(e[1].segments, e[1].closed, t),
        closed: e[1].closed
      };
    }
    pathDFromCompoundPath(e, t) {
      return e[1].children.map(e => this.pathDFromPaperPath(e, t)).join(" ");
    }
    pathDFromCompoundPathSplit(e, t) {
      return s().flatMap(e[1].children, e => this.pathDFromPaperPathSplit(e, t));
    }
    pathsDFromSegments(e, t, r) {
      if (e.length <= 1) return "";
      for (var n = a.A.getSegmentPoint(e[0]), o = i.A.actionWithSegPoint("M", n, !0), l = 0; l < e.length - 1; l++) {
        var c = e[l],
          d = e[l + 1];
        o += this.connectSegment(c, d, r);
      }
      if (t) {
        var h = a.A.getSegmentPoint(e[0]),
          p = a.A.getSegmentPoint(s().last(e));
        a.A.segPointEquals(h, p) || (o += this.connectSegment(s().last(e), e[0], r)), o += " Z";
      }
      return o;
    }
    connectSegment(e, t, r) {
      if (a.A.isSegmentPoint(e) || a.A.isSegmentPoint(t)) return i.A.actionWithSegPoint("L", a.A.getSegmentPoint(t), !0);
      var n = this.toAbsolutePointIfRelative(a.A.getHandleOut(e), e, r),
        o = this.toAbsolutePointIfRelative(a.A.getHandleIn(t), t, r);
      return n && o ? i.A.actionWithSegPoint("C", n, !0) + i.A.actionWithSegPoint("", o, !0) + i.A.actionWithSegPoint("", a.A.getSegmentPoint(t), !0) : i.A.actionWithSegPoint("L", a.A.getSegmentPoint(t), !0);
    }
    toAbsolutePointIfRelative(e, t, r) {
      return r && e ? this.isZeroSegmentPoint(e) ? void 0 : a.A.segPointAdd(e, a.A.getSegmentPoint(t)) : e;
    }
    isZeroSegmentPoint(e) {
      return !e || 0 == e[0] && 0 == e[1];
    }
  }
  const h = new d();
};
