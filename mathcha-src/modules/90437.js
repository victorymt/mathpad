/* module 90437 — 3390 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Z: () => i
  });
  class n {
    isInRow(e, t) {
      return this.isKeyInTabularFormat(e) && this.getTabularCellIndexFromKey(e).row == t;
    }
    isKeyInTabularFormat(e) {
      return /^[0-9]+_[0-9]+$/.test(e);
    }
    getTabularCellIndexFromKey(e) {
      var t = e.split("_");
      return {
        row: Number.parseInt(t[0], 10),
        column: Number.parseInt(t[1], 10)
      };
    }
    isKeyInRange(e, t, r) {
      if (i.isKeyInTabularFormat(e)) {
        var n = i.getTabularCellIndexFromKey(e),
          o;
        return n.row >= 0 && n.row < t && n.column >= 0 && n.column < r ? n : void 0;
      }
    }
    getKeyFromRowCol(e, t) {
      return "".concat(e, "_").concat(t);
    }
    inferRowCol(e) {
      var t = this.getAllValidTabularKeys({
          elements: e
        }),
        r = this.getMinMaxTabularKeyIndex(t);
      return {
        row: r.maxRow + 1,
        column: r.maxCol + 1
      };
    }
    getMinMaxTabularKeyIndex(e) {
      var t = {
        minRow: 999,
        minCol: 999,
        maxRow: 0,
        maxCol: 0
      };
      return e.forEach(e => {
        var r = this.getTabularCellIndexFromKey(e);
        t = {
          minRow: Math.min(r.row, t.minRow),
          minCol: Math.min(r.column, t.minCol),
          maxRow: Math.max(r.row, t.maxRow),
          maxCol: Math.max(r.column, t.maxCol)
        };
      }), t;
    }
    nextRowFormKey(e) {
      var t = this.getTabularCellIndexFromKey(e);
      return this.getKeyFromRowCol(t.row + 1, t.column);
    }
    nextColumnFormKey(e) {
      var t = this.getTabularCellIndexFromKey(e);
      return this.getKeyFromRowCol(t.row, t.column + 1);
    }
    getAllKeysFromRow(e, t) {
      return this.getAllValidTabularKeys(e).filter(e => this.getTabularCellIndexFromKey(e).row == t);
    }
    getAllKeysFromColumn(e, t) {
      return this.getAllValidTabularKeys(e).filter(e => this.getTabularCellIndexFromKey(e).column == t);
    }
    getAllValidTabularKeys(e) {
      return Object.keys(e.elements).filter(e => this.isKeyInTabularFormat(e));
    }
    getTabularMinKey(e, t) {
      var r = this.getTabularCellIndexFromKey(e),
        n = this.getTabularCellIndexFromKey(t),
        i = {
          row: Math.min(r.row, n.row),
          column: Math.min(r.column, n.column)
        };
      return "".concat(i.row, "_").concat(i.column);
    }
    previousRowFormKey(e) {
      var t = this.getTabularCellIndexFromKey(e);
      return this.getKeyFromRowCol(Math.max(0, t.row - 1), t.column);
    }
    previousColumnFormKey(e) {
      var t = this.getTabularCellIndexFromKey(e);
      return this.getKeyFromRowCol(t.row, Math.max(0, t.column - 1));
    }
    nextCell(e, t, r) {
      var n = this.getTabularCellIndexFromKey(e),
        i = {
          column: (n.column + 1) % r,
          row: n.column + 1 >= r ? n.row + 1 : n.row
        };
      return i.row >= t ? e : this.getKeyFromRowCol(Math.min(t, i.row), Math.min(r, i.column));
    }
    previousCell(e, t, r) {
      var n = this.getTabularCellIndexFromKey(e),
        i = {
          column: this.mod(n.column - 1, r),
          row: n.column - 1 < 0 ? n.row - 1 : n.row
        };
      return i.row < 0 ? e : this.getKeyFromRowCol(Math.min(t, i.row), Math.min(r, i.column));
    }
    mod(e, t) {
      return (e % t + t) % t;
    }
  }
  var i = new n();
};
