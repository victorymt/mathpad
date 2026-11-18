/* module 26895 — 1604 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => d
  });
  var n = r(49812),
    i = r(32422),
    o = r(45658),
    s = r(25154),
    a = r(90437),
    l = r(70224);
  class c {
    insertNewRowBelow(e, t) {
      for (var r = a.Z.getTabularCellIndexFromKey(t), c = n.A.cloneCompositeBlockWithNewElements(e), d = e.elements[t], h = r.row + i.A.getRowSpan(d), p = h; p < e.row; p++) for (var u = 0; u < e.column; u++) {
        var g = a.Z.getKeyFromRowCol(p, u),
          m = a.Z.getKeyFromRowCol(p + 1, u);
        c.elements[m] = e.elements[g];
      }
      for (var f = 0; f < e.column; f++) {
        var y = a.Z.getKeyFromRowCol(h, f),
          v = a.Z.getKeyFromRowCol(r.row, f),
          b = l.A.createEmptyEditor();
        b.style = e.elements[v].style, c.elements[y] = b;
      }
      return c.row++, c = s.A.handleInsertNewRowBelow(c, h), c = o.A.normalizeCells(c);
    }
    insertNewRowAbove(e, t) {
      for (var r = a.Z.getTabularCellIndexFromKey(t), i = n.A.cloneCompositeBlockWithNewElements(e), c = r.row; c < e.row; c++) for (var d = 0; d < e.column; d++) {
        var h = a.Z.getKeyFromRowCol(c, d),
          p = a.Z.getKeyFromRowCol(c + 1, d);
        i.elements[p] = e.elements[h];
      }
      for (var u = 0; u < e.column; u++) {
        var g = a.Z.getKeyFromRowCol(r.row, u),
          m = a.Z.getKeyFromRowCol(r.row + 1, u),
          f = l.A.createEmptyEditor();
        f.style = i.elements[m].style, i.elements[g] = f;
      }
      return i.row++, i = s.A.handleInsertNewRowAbove(i, r.row), i = o.A.normalizeCells(i);
    }
  }
  const d = new c();
};
