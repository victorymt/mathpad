/* module 247 — 1535 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => a
  });
  var n = r(32422),
    i = r(2543),
    o = r.n(i);
  class s {
    extractInformation(e) {
      var t = {
        vLineIndexesPartialInMergedRows: [],
        hLineIndexesPartialInMergedColumns: [],
        hLineHiddenPositions: [],
        vLineHiddenPositions: []
      };
      return n.A.cellLoop(e, r => {
        var n = r.rIndex,
          i = r.cIndex,
          o = r.colSpan,
          s = r.rowSpan;
        s > 1 && (e.vLines && e.vLines[i] && e.vLines[i].borders && t.vLineIndexesPartialInMergedRows.push(i), e.vLines && e.vLines[i + o] && e.vLines[i + o].borders && t.vLineIndexesPartialInMergedRows.push(i + o)), o > 1 && (e.hLines && e.hLines[n] && e.hLines[n].borders && t.hLineIndexesPartialInMergedColumns.push(n), e.hLines && e.hLines[n + s] && e.hLines[n + s].borders && t.hLineIndexesPartialInMergedColumns.push(n + s)), (s > 1 || o > 1) && this.extractHiddenLines(r, t);
      }), t.vLineIndexesPartialInMergedRows = o().uniq(t.vLineIndexesPartialInMergedRows), t.hLineIndexesPartialInMergedColumns = o().uniq(t.hLineIndexesPartialInMergedColumns), t;
    }
    extractHiddenLines(e, t) {
      for (var r = e.rIndex; r < e.rIndex + e.rowSpan; r++) for (var n = e.cIndex; n < e.cIndex + e.colSpan; n++) n > e.cIndex && t.vLineHiddenPositions.push({
        lineIndex: n,
        sectionIndex: r
      }), r > e.rIndex && t.hLineHiddenPositions.push({
        lineIndex: r,
        sectionIndex: n
      });
    }
  }
  const a = new s();
};
