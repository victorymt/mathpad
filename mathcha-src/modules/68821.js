/* module 68821 — 3367 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => c
  });
  var n = r(64467),
    i = r(32422),
    o = r(90437);
  function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function a(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class l {
    getRangedKeys(e, t) {
      for (var r = o.Z.getMinMaxTabularKeyIndex([e, t]), n = [], i = r.minRow; i <= r.maxRow; i++) for (var s = r.minCol; s <= r.maxCol; s++) n.push(o.Z.getKeyFromRowCol(i, s));
      return n;
    }
    findSafeCursorBackward(e, t, r) {
      for (var n = o.Z.getTabularCellIndexFromKey(r), s = Math.min(n.column, e.column - 1), l = Math.min(n.row, e.row - 1), c;;) {
        if (s < 0 && l <= 0) {
          c = null;
          break;
        }
        if (s < 0 && (s = e.column - 1, l--), c = o.Z.getKeyFromRowCol(l, s), !i.A.isHiddenEditor(e.elements[c])) break;
        s--;
      }
      return a(a({}, t), {}, {
        key: o.Z.getKeyFromRowCol(Math.max(l, 0), Math.max(s, 0)),
        selected: {
          lineIndex: 0,
          charIndex: 0
        }
      });
    }
    checkAndFindValidKeyPosition(e, t) {
      if (this.isMergeableTabularModel(t)) {
        if (!t.elements[e].hidden) return e;
        for (var r = o.Z.getTabularCellIndexFromKey(e), n = 0; n < t.row; n++) for (var s = 0; s < t.column; s++) {
          var a = o.Z.getKeyFromRowCol(n, s),
            l = t.elements[a];
          if (l.colSpan || l.rowSpan) {
            var c = i.A.getColSpan(l),
              d = i.A.getRowSpan(l);
            if (r.column >= s && s + c > r.column && r.row >= n && n + d > r.row) return a;
          }
        }
        return e;
      }
      return e;
    }
    getRightAvailableCellKey(e, t) {
      var r = o.Z.getTabularCellIndexFromKey(e),
        n = r.column + i.A.getColSpan(t.elements[e]);
      return n >= t.column ? null : this.checkAndFindValidKeyPosition(o.Z.getKeyFromRowCol(r.row, n), t);
    }
    getLeftAvailableCellKey(e, t) {
      var r = o.Z.getTabularCellIndexFromKey(e),
        n = r.column - 1;
      return n < 0 ? null : this.checkAndFindValidKeyPosition(o.Z.getKeyFromRowCol(r.row, n), t);
    }
    getAboveAvailableCellKey(e, t) {
      var r = o.Z.getTabularCellIndexFromKey(e),
        n = r.row - 1;
      return n < 0 ? null : this.checkAndFindValidKeyPosition(o.Z.getKeyFromRowCol(n, r.column), t);
    }
    getBelowAvailableCellKey(e, t) {
      var r = o.Z.getTabularCellIndexFromKey(e),
        n = r.row + i.A.getRowSpan(t.elements[e]);
      return n >= t.row ? null : this.checkAndFindValidKeyPosition(o.Z.getKeyFromRowCol(n, r.column), t);
    }
    isMergeableTabularModel(e) {
      return "\\table" == e.text || "\\latex-table" == e.text;
    }
  }
  const c = new l();
};
