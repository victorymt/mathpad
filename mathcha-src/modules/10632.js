/* module 10632 — 4442 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    x: () => d
  });
  var n = r(3453),
    i = r(516),
    o = r(90113),
    s = r(60693),
    a = r(2543),
    l = r.n(a);
  class c {
    rangeRectsFrom2Idx(e, t, r, n, o) {
      if (i.A.isNonChar(e)) {
        if (0 != r || 1 != n) throw new Error("Unexpect index");
        return this.getCompositeBlockRects(e, o);
      }
      return s.T.getBCRects(this.rangeFrom(e, t.rawIndexAt(r), e, t.rawIndexAt(n)), o);
    }
    getCompositeBlockRects(e, t) {
      var r;
      return null !== (r = e.reactInstance) && void 0 !== r && r.getWraplineRects ? e.reactInstance.getWraplineRects() : [s.T.getBCRect(e, t)];
    }
    singleRangeRectFrom(e, t, r, n) {
      var o;
      if (i.A.isNonChar(e)) return s.T.getBCRect(e, n);
      if (r + 1 > t.length) throw new Error("Something wrong with passed index");
      var a = s.T.getBCRects(this.rangeFrom(e, t.rawIndexAt(r), e, t.rawIndexAt(r + 1)), n);
      return null !== (o = a.find(e => Math.round(e.right - e.left) > 0)) && void 0 !== o ? o : a[0];
    }
    getAroundCompositeBlock(e) {
      for (var t = e.previousElementSibling; t && !i.A.isChar(t);) t = t.previousElementSibling;
      for (var r = e.nextElementSibling; r && !i.A.isChar(r);) r = r.nextElementSibling;
      return [t, r];
    }
    detectNonCharDirection(e, t) {
      var r = this.getAroundCompositeBlock(e),
        i = (0, n.A)(r, 2),
        s = i[0],
        a = i[1];
      if (!s || !a) return t;
      var l = Array.from(this.rangeFrom(s, 0, s, s.textContent.length).getClientRects()),
        c = Array.from(this.rangeFrom(a, 0, a, a.textContent.length).getClientRects()),
        d = Array.from(this.collapsedRange(s, s.textContent.length).getClientRects()),
        h = Array.from(this.collapsedRange(a, 0).getClientRects());
      return l.some(e => d.some(t => "right" == o.H.horizontalVLineSideCompare(t, e))) && c.some(e => h.some(t => "left" == o.H.horizontalVLineSideCompare(t, e))) ? "ltr" : l.some(e => d.some(t => "left" == o.H.horizontalVLineSideCompare(t, e))) && c.some(e => h.some(t => "right" == o.H.horizontalVLineSideCompare(t, e))) ? "rtl" : t;
    }
    retrieveSingleRangePosInfo(e, t, r, n, a) {
      if (i.A.isNonChar(e)) {
        if (0 != r) throw new Error("retrieveSingleRangePosInfo: out of range");
        var c = this.getCompositeBlockRects(e, a),
          d = c[0],
          h = l().last(c),
          p = this.detectNonCharDirection(e, n);
        return "ltr" == p ? {
          rects: c,
          block: e,
          startIndexVLine: o.H.vlineFromRect(d, "left"),
          endIndexVLine: o.H.vlineFromRect(h, "right"),
          flow: o.H.positionOposite(o.H.lineDirToSide(p))
        } : {
          rects: c,
          block: e,
          startIndexVLine: o.H.vlineFromRect(h, "right"),
          endIndexVLine: o.H.vlineFromRect(d, "left"),
          flow: o.H.positionOposite(o.H.lineDirToSide(p))
        };
      }
      var u = this.singleRangeRectFrom(e, t, r, a),
        g = s.T.getBCRects(this.collapsedRange(e, t.rawIndexAt(r)), a),
        m = s.T.getBCRects(this.collapsedRange(e, t.rawIndexAt(r + 1)), a);
      if (this.collapsedRectsAmbiguous(m, u)) {
        var f = o.H.lineDirToSide(n),
          y = o.H.anyHorizontalVLineSideCompare(g, u, f);
        return {
          rects: [u],
          block: e,
          startIndexVLine: o.H.vlineFromRect(u, y),
          endIndexVLine: o.H.vlineFromRect(u, o.H.positionOposite(y)),
          flow: o.H.positionOposite(y)
        };
      }
      var v = o.H.positionOposite(o.H.lineDirToSide(n)),
        b = o.H.anyHorizontalVLineSideCompare(m, u, v);
      return {
        rects: [u],
        block: e,
        startIndexVLine: o.H.vlineFromRect(u, o.H.positionOposite(b)),
        endIndexVLine: o.H.vlineFromRect(u, b),
        flow: b
      };
    }
    collapsedRectsAmbiguous(e, t) {
      return !!(e.length > 1 && e.every(e => this.isLeftOrRightPos(e, t))) || !!e.every(e => !this.isLeftOrRightPos(e, t));
    }
    isLeftOrRightPos(e, t) {
      var r = o.H.horizontalVLineSideCompare(e, t);
      return "left" == r || "right" == r;
    }
    rangeFrom(e, t, r, n) {
      var i = document.createRange();
      return i.setStart(e.firstChild, t), i.setEnd(r.firstChild, n), i;
    }
    collapsedRange(e, t) {
      var r = document.createRange();
      return r.setStart(e.firstChild, t), r.collapse(), r;
    }
  }
  var d = new c();
};
