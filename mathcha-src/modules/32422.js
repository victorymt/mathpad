/* module 32422 — 1025 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => s
  });
  var n = r(90437),
    i = r(86081);
  class o {
    cellLoop(e, t) {
      for (var r = {
          break: !1,
          result: null
        }, n = 0; n < e.row; n++) for (var i = 0; i < e.column; i++) if (t(this.getCellInfo(e, n, i), r), r.break) return r.result;
      return r.result;
    }
    getCellInfo(e, t, r) {
      var i = n.Z.getKeyFromRowCol(t, r),
        o = e.elements[i];
      return {
        key: i,
        rIndex: t,
        cIndex: r,
        colSpan: this.getColSpan(e.elements[i]),
        rowSpan: this.getRowSpan(e.elements[i]),
        editor: o,
        hidden: o && !!o.hidden
      };
    }
    getRowSpan(e) {
      return e ? e.rowSpan || 1 : 0;
    }
    getColSpan(e) {
      return e ? e.colSpan || 1 : 0;
    }
    isArrayModel(e) {
      return "\\array" == e.text;
    }
    isTableModel(e) {
      return i.A.isTable(e);
    }
    isHiddenEditor(e) {
      return e && e.hidden;
    }
  }
  const s = new o();
};
