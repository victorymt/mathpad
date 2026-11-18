/* module 25321 — 775 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => c
  });
  var n = r(2543),
    i = r.n(n),
    o = r(61848),
    s = r(90437),
    a = r(81776);
  class l {
    normalizeCells(e) {
      var t = a.e.normalizeCells(e);
      return t = this.makeSureNoWidthForHiddenColumn(t);
    }
    makeSureNoWidthForHiddenColumn(e) {
      if (!e.columnWidths) return e;
      for (var t = i().clone(e), r = 0; r < e.column; r++) e.columnWidths[r] && this.isColumHidden(e, r) && (t.columnWidths = o.A.setIndex(t.columnWidths, r, void 0));
      return t;
    }
    isColumHidden(e, t) {
      for (var r = 0; r < e.row; r++) {
        var n = s.Z.getKeyFromRowCol(r, t);
        if (!e.elements[n].hidden) return !1;
      }
      return !0;
    }
  }
  const c = new l();
};
