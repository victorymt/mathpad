/* module 90112 — 1435 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    d: () => c
  });
  var n = r(90437),
    i = r(2543),
    o = r.n(i),
    s = r(68821),
    a = r(32422);
  class l {
    getRightAvailableCellKeys(e, t) {
      var r = n.Z.getTabularCellIndexFromKey(e),
        i = r.column + a.A.getColSpan(t.elements[e]);
      return o().uniq(o().times(t.elements[e].rowSpan || 1).map(e => i >= t.column ? null : s.A.checkAndFindValidKeyPosition(n.Z.getKeyFromRowCol(r.row + e, i), t)).filter(e => e));
    }
    getLeftAvailableCellKeys(e, t) {
      var r = n.Z.getTabularCellIndexFromKey(e),
        i = r.column - 1;
      return o().uniq(o().times(t.elements[e].rowSpan || 1).map(e => i < 0 ? null : s.A.checkAndFindValidKeyPosition(n.Z.getKeyFromRowCol(r.row + e, i), t)).filter(e => e));
    }
    getAboveAvailableCellKeys(e, t) {
      var r = n.Z.getTabularCellIndexFromKey(e),
        i = r.row - 1;
      return o().uniq(o().times(t.elements[e].colSpan || 1).map(e => i < 0 ? null : s.A.checkAndFindValidKeyPosition(n.Z.getKeyFromRowCol(i, r.column + e), t)).filter(e => e));
    }
    getBelowAvailableCellKeys(e, t) {
      var r = n.Z.getTabularCellIndexFromKey(e),
        i = r.row + a.A.getRowSpan(t.elements[e]);
      return o().uniq(o().times(t.elements[e].colSpan || 1).map(e => i >= t.row ? null : s.A.checkAndFindValidKeyPosition(n.Z.getKeyFromRowCol(i, r.column + e), t)).filter(e => e));
    }
  }
  var c = new l();
};
