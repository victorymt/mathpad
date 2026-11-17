/* module 50255 — 9119 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    T: () => d
  });
  var n = r(516),
    i = r(90113),
    o = r(96579),
    s = r(2543),
    a = r.n(s),
    l = r(60693);
  class c {
    extractVLine(e, t, r) {
      switch (e.type) {
        case "out-of-range":
          return this.extractVLine(e.posibleTupleInfo, t, r);
        case "empty-line":
          var s = n.A.getEmptyBlock(e.line),
            c = l.T.getBCRects(s, r)[0];
          return {
            type: "single",
            vcursor: this.buildVCursor([c], s, "left", t, e.lineDir, "left"),
            altVCursor: void 0,
            flowDirection: "ltr" == e.lineDir ? "right" : "left",
            curInLine: "empty-line"
          };
        case "begin-line":
          var d = i.H.positionOposite(e.iRange.flow),
            h = this.buildVCursor(e.iRange.rects, e.iRange.block, d, t, e.lineDir, i.H.positionOposite(d)),
            p;
          if (!i.H.isSideMatchLineDir(d, e.lineDir)) {
            var u = o.l.findWLine(t, h.vline);
            p = "ltr" == e.lineDir ? i.H.vlineFromRect(u.rbs[0].rect, "left") : i.H.vlineFromRect(a().last(u.rbs).rect, "right");
          }
          return {
            type: "single",
            vcursor: h,
            altVCursor: void 0,
            flowDirection: i.H.positionOposite(d),
            curInLine: "begin",
            subVLine: p
          };
        case "end-line":
          var g = e.iRange.flow,
            m = this.buildVCursor(e.iRange.rects, e.iRange.block, g, t, e.lineDir, g),
            f;
          if (i.H.isSideMatchLineDir(g, e.lineDir)) {
            var y = o.l.findWLine(t, m.vline);
            f = "ltr" == e.lineDir ? i.H.vlineFromRect(a().last(y.rbs).rect, "right") : i.H.vlineFromRect(y.rbs[0].rect, "left");
          }
          return {
            type: "single",
            vcursor: m,
            altVCursor: void 0,
            flowDirection: g,
            curInLine: "end",
            subVLine: f
          };
        case "middle-left-overlaped-index":
          var v, b;
          return {
            type: "left-overlaped",
            vcursor: this.buildVCursor(e.firstIRange.rects, e.firstIRange.block, "right", t, e.lineDir, "left"),
            altVCursor: this.buildVCursor(e.secondIRange.rects, e.secondIRange.block, "left", t, e.lineDir, "left"),
            curInLine: "middle"
          };
      }
      return this.inferTupleDirection(e, t);
    }
    buildVCursorFromIRange(e, t, r, n, i) {
      return this.buildVCursor(e.rects, e.block, t, r, n, i);
    }
    buildVCursor(e, t, r, n, o, s) {
      var l = "left" == r ? a().first(e) : a().last(e),
        c = i.H.vlineFromRect(l, r),
        d;
      return {
        vline: c,
        attachedRect: l,
        attachedElement: t,
        edgeWrapVLine: this.findEdgeVLine(n, o, c),
        dir: s,
        vlineSide: r
      };
    }
    findEdgeVLine(e, t, r) {
      var n = o.l.isAtEdge(e, r);
      if (n) {
        var s = e.indexOf(n[0]);
        if ("ltr" == t) {
          if ("left" == n[1] && s > 0) return i.H.vlineFromRect(e[s - 1].rect, "right");
          var a;
          if ("right" == n[1] && s < e.length - 1) return i.H.vlineFromRect(e[s + 1].rect, "left");
        } else {
          if ("right" == n[1] && s > 0) return i.H.vlineFromRect(e[s - 1].rect, "left");
          if ("left" == n[1] && s < e.length - 1) return i.H.vlineFromRect(e[s + 1].rect, "right");
        }
      }
    }
    inferTupleDirection(e, t) {
      var r = e.firstIRange,
        n = e.lineDir,
        s = e.secondIRange,
        a = r.flow,
        l = s.flow,
        c,
        d;
      if (o.l.findWLineFromRect(t, r.rects[0]) != o.l.findWLineFromRect(t, s.rects[0])) return a == l ? {
        type: "line-wrap",
        vcursor: this.buildVCursorFromIRange(s, i.H.positionOposite(a), t, e.lineDir, a),
        altVCursor: this.buildVCursorFromIRange(r, a, t, e.lineDir, a),
        flowDirection: a,
        curInLine: "middle"
      } : "ltr" == n ? "left" == a ? {
        type: "change-direction",
        vcursor: this.buildVCursorFromIRange(r, "left", t, e.lineDir, "left"),
        subVCursor: this.buildVCursorFromIRange(s, "left", t, e.lineDir, "right"),
        changeDirection: "split",
        lineWrap: !0,
        curInLine: "middle"
      } : {
        type: "change-direction",
        vcursor: this.buildVCursorFromIRange(s, "right", t, e.lineDir, "left"),
        subVCursor: this.buildVCursorFromIRange(r, "right", t, e.lineDir, "right"),
        changeDirection: "join",
        lineWrap: !0,
        curInLine: "middle"
      } : "left" == a ? {
        type: "change-direction",
        vcursor: this.buildVCursorFromIRange(s, "left", t, e.lineDir, "right"),
        subVCursor: this.buildVCursorFromIRange(r, "left", t, e.lineDir, "left"),
        changeDirection: "join",
        lineWrap: !0,
        curInLine: "middle"
      } : {
        type: "change-direction",
        vcursor: this.buildVCursorFromIRange(r, "right", t, e.lineDir, "right"),
        subVCursor: this.buildVCursorFromIRange(s, "right", t, e.lineDir, "left"),
        changeDirection: "split",
        lineWrap: !0,
        curInLine: "middle"
      };
      var h = r.rects[0],
        p = s.rects[0];
      return a == l ? "left" == i.H.horizontalCompare(h, p) ? "left" == a ? Math.abs(h.right - p.left) < 1 ? {
        type: "single",
        vcursor: this.buildVCursorFromIRange(r, "right", t, e.lineDir, "left"),
        altVCursor: this.buildVCursorFromIRange(s, "left", t, e.lineDir, "left"),
        flowDirection: "left",
        curInLine: "middle"
      } : {
        type: "gap",
        vcursor: this.buildVCursorFromIRange(r, "right", t, e.lineDir, "left"),
        altVCursor: this.buildVCursorFromIRange(s, "left", t, e.lineDir, "left"),
        flowDirection: "left",
        curInLine: "middle"
      } : Math.abs(h.right - p.left) < 1 ? {
        type: "single",
        vcursor: this.buildVCursorFromIRange(s, "left", t, e.lineDir, "right"),
        altVCursor: this.buildVCursorFromIRange(r, "right", t, e.lineDir, "right"),
        flowDirection: "right",
        curInLine: "middle"
      } : Math.abs(h.right - p.left) > 2 && r.block == s.block ? {
        type: "same-dir-break",
        vcursor: this.buildVCursorFromIRange(r, "right", t, e.lineDir, "right"),
        subVCursor: this.buildVCursorFromIRange(s, "left", t, e.lineDir, "right"),
        flowDirection: "right",
        curInLine: "middle"
      } : {
        type: "gap",
        vcursor: this.buildVCursorFromIRange(s, "left", t, e.lineDir, "right"),
        altVCursor: this.buildVCursorFromIRange(r, "right", t, e.lineDir, "right"),
        flowDirection: "right",
        curInLine: "middle"
      } : "left" == a ? Math.abs(h.left - p.right) < 1 ? {
        type: "single",
        vcursor: this.buildVCursorFromIRange(s, "right", t, e.lineDir, "left"),
        altVCursor: this.buildVCursorFromIRange(r, "left", t, e.lineDir, "left"),
        flowDirection: "left",
        curInLine: "middle"
      } : {
        type: "gap",
        vcursor: this.buildVCursorFromIRange(s, "right", t, e.lineDir, "left"),
        altVCursor: this.buildVCursorFromIRange(r, "left", t, e.lineDir, "left"),
        flowDirection: "left",
        curInLine: "middle"
      } : Math.abs(h.left - p.right) < 1 ? {
        type: "single",
        vcursor: this.buildVCursorFromIRange(r, "left", t, e.lineDir, "right"),
        altVCursor: this.buildVCursorFromIRange(s, "right", t, e.lineDir, "right"),
        flowDirection: "right",
        curInLine: "middle"
      } : {
        type: "gap",
        vcursor: this.buildVCursorFromIRange(r, "left", t, e.lineDir, "right"),
        altVCursor: this.buildVCursorFromIRange(s, "right", t, e.lineDir, "right"),
        flowDirection: "right",
        curInLine: "middle"
      } : "left" == i.H.horizontalCompare(h, p) ? "left" == a ? {
        type: "change-direction",
        vcursor: this.buildVCursorFromIRange(r, "left", t, e.lineDir, "left"),
        subVCursor: this.buildVCursorFromIRange(s, "left", t, e.lineDir, "right"),
        changeDirection: "split",
        lineWrap: !1,
        curInLine: "middle"
      } : {
        type: "change-direction",
        vcursor: this.buildVCursorFromIRange(s, "right", t, e.lineDir, "left"),
        subVCursor: this.buildVCursorFromIRange(r, "right", t, e.lineDir, "right"),
        changeDirection: "join",
        lineWrap: !1,
        curInLine: "middle"
      } : "left" == a ? {
        type: "change-direction",
        vcursor: this.buildVCursorFromIRange(s, "left", t, e.lineDir, "right"),
        subVCursor: this.buildVCursorFromIRange(r, "left", t, e.lineDir, "left"),
        changeDirection: "join",
        lineWrap: !1,
        curInLine: "middle"
      } : {
        type: "change-direction",
        vcursor: this.buildVCursorFromIRange(r, "right", t, e.lineDir, "right"),
        subVCursor: this.buildVCursorFromIRange(s, "right", t, e.lineDir, "left"),
        changeDirection: "split",
        lineWrap: !1,
        curInLine: "middle"
      };
    }
  }
  var d = new c();
};
