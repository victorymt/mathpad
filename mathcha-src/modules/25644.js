/* module 25644 — 2575 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => p
  });
  var n = r(516),
    i = r(85355),
    o = r(2543),
    s = r.n(o),
    a = r(94841),
    l = r(13764),
    c = r(37566),
    d = r(60693);
  class h {
    emptyCursorContext() {
      return {};
    }
    fullPosToDomPos(e) {
      var t;
      return {
        type: "cursor-position",
        charIndex: e.charIndex,
        lineIndex: e.lineIndex,
        line: e.line,
        editor: e.editor,
        direction: e.direction,
        requestGeoPos: void 0
      };
    }
    isSelectedDeepEqual(e, t) {
      return e == t || !!e == !!t && e.lineIndex == t.lineIndex && e.charIndex == t.charIndex && e.key == t.key && !!e.selected == !!t.selected && this.isSelectedDeepEqual(e.selected, t.selected);
    }
    getLastCursorPositionFormEditAreaBlock(e) {
      return a.X.build(e, e, 0, n.A.isInnerTextEmpty(e) ? 0 : 1, void 0);
    }
    getFirstCursorPositionFormEditAreaBlock(e) {
      return a.X.build(e, e, 0, 0, void 0);
    }
    getNumberOfChars(e) {
      return s().sumBy(e, e => e.numOfChar);
    }
    findPreviousCharIndex(e) {
      return e.charIndex > 0 ? e.charIndex - 1 : null;
    }
    buildCursorPositionFromEvent(e, t, r) {
      return this.buildCursorPosition(e, t.target, d.T.getFromAbsPos(t.clientX, t.clientY, r));
    }
    findNearestLine(e, t) {
      var r = n.A.findEditLines(e),
        o = d.T.getWrappedRects(r, t.zc);
      return i.A.findNearestVerticalStackOfRect(o, t).element;
    }
    buildCursorPositionForEditAreaBlock(e, t) {
      return this.buildCursorPosition(e, e, t);
    }
    buildCursorPosition(e, t, r) {
      if (n.A.isEditAreaBlock(t)) return l.A.buildForEditAreaBlock(e, r);
      if (n.A.isEditAreaLine(e)) return l.A.buildForEditAreaLine(e, r);
      if (n.A.isEditArea(t)) {
        var i = this.findNearestLine(t, r);
        return l.A.build(i, e, r);
      }
      if (n.A.isEditLine(t)) return l.A.build(t, e, r);
      if (n.A.isBlocksInRootLine(t)) return l.A.build(t.parentElement, e, r);
      if (n.A.isPrefix(t)) return l.A.build(t.parentElement, e, r);
      var o = t;
      if (n.A.isBlock(o) || (o = n.A.closetAnyBlock(t)), c.nB(o, "role-prevent-selection")) return null;
      var s = n.A.closetEditLine(o);
      return l.A.build(s, e, r);
    }
    getMovingIntention(e) {
      return "left" == e.direction || "right" == e.direction ? "right" == e.direction ? "right" : "left" : e.positionOnRange && ("left" == e.positionOnRange || "next-line" == e.positionOnRange) ? "left" : "right";
    }
  }
  const p = new h();
};
