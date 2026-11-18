/* module 27271 — 16023 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => L
  });
  var n = r(64467),
    i = r(2543),
    o = r.n(i),
    s = r(49812),
    a = r(45658),
    l = r(32422),
    c = r(26895),
    d = r(25154),
    h = r(90437),
    p = r(70224);
  class u {
    insertColumnOnLeft(e, t) {
      for (var r = h.Z.getTabularCellIndexFromKey(t), n = s.A.cloneCompositeBlockWithNewElements(e), i = r.column; i < e.column; i++) for (var o = 0; o < e.row; o++) {
        var l = h.Z.getKeyFromRowCol(o, i),
          c = h.Z.getKeyFromRowCol(o, i + 1);
        n.elements[c] = e.elements[l];
      }
      for (var u = 0; u < e.row; u++) {
        var g = h.Z.getKeyFromRowCol(u, r.column);
        n.elements[g] = p.A.createEmptyEditor();
        var m = h.Z.getKeyFromRowCol(u, r.column + 1);
        n.elements[g].style = n.elements[m].style;
      }
      return n.column++, n = d.A.handleInsertColumnOnLeft(n, r.column), n = a.A.normalizeCells(n);
    }
    insertColumnOnRight(e, t) {
      for (var r = h.Z.getTabularCellIndexFromKey(t), n = s.A.cloneCompositeBlockWithNewElements(e), i = e.elements[t], o = r.column + l.A.getColSpan(i), c = o; c < e.column; c++) for (var u = 0; u < e.row; u++) {
        var g = h.Z.getKeyFromRowCol(u, c),
          m = h.Z.getKeyFromRowCol(u, c + 1);
        n.elements[m] = e.elements[g];
      }
      for (var f = 0; f < e.row; f++) {
        var y = h.Z.getKeyFromRowCol(f, o);
        n.elements[y] = p.A.createEmptyEditor();
        var v = h.Z.getKeyFromRowCol(f, r.column);
        n.elements[y].style = e.elements[v].style;
      }
      return n.column++, n = d.A.handleInsertColumnOnRight(n, o), n = a.A.normalizeCells(n);
    }
  }
  const g = new u();
  var m = r(61848);
  class f {
    mergeCells(e, t) {
      for (var r = s.A.cloneCompositeBlockWithNewElements(e), n = h.Z.getMinMaxTabularKeyIndex(t), i = o().clone(e.elements[h.Z.getKeyFromRowCol(n.minRow, n.minCol)]), a = n.maxCol, l = n.maxRow, c = n.minRow; c <= n.maxRow; c++) for (var u = n.minCol; u <= n.maxCol; u++) {
        var g = h.Z.getKeyFromRowCol(c, u);
        if (c != n.minRow || u != n.minCol) {
          var m = r.elements[g];
          (m.lines.length > 1 || !s.A.isEmptyLine(m.lines[0])) && (i.lines = i.lines.concat(m.lines)), r.elements[g] = p.A.createEmptyEditor(e.elements[g].id), r.elements[g].hidden = !0;
          var f = e.elements[g];
          f.colSpan && u + f.colSpan - 1 > a && (a = u + f.colSpan - 1), f.rowSpan && c + f.rowSpan - 1 > l && (l = c + f.rowSpan - 1);
        } else r.elements[g] = i;
      }
      return a > n.minCol && (i.colSpan = a - n.minCol + 1), l > n.minRow && (i.rowSpan = l - n.minRow + 1), d.A.normalizeTabular(r);
    }
    unmergeCells(e, t) {
      for (var r = s.A.cloneCompositeBlockWithNewElements(e), n = o().clone(r.elements[t]), i = h.Z.getTabularCellIndexFromKey(t), a = i.row; a < i.row + (n.rowSpan || 1); a++) for (var l = i.column; l < i.column + (n.colSpan || 1); l++) {
        var c = h.Z.getKeyFromRowCol(a, l);
        c != t && (r.elements[c] = m.A.setProp(r.elements[c], "hidden", void 0));
      }
      return n.colSpan = void 0, n.rowSpan = void 0, r.elements[t] = n, r;
    }
    isMergable(e, t) {
      for (var r = h.Z.getMinMaxTabularKeyIndex(e), n = {}, i = r.minRow; i <= r.maxRow; i++) for (var s = r.minCol; s <= r.maxCol; s++) {
        var a = h.Z.getKeyFromRowCol(i, s),
          l = t.elements[a];
        if (!l.hidden) if (l.colSpan || l.rowSpan) for (var c = l.colSpan || 1, d = l.rowSpan || 1, p = i; p < i + d; p++) for (var u = s; u < s + c; u++) {
          var g;
          n[h.Z.getKeyFromRowCol(p, u)] = !0;
        } else n[a] = !0;
      }
      for (var m = (r = h.Z.getMinMaxTabularKeyIndex(o().keys(n))).minRow; m <= r.maxRow; m++) for (var f = r.minCol; f <= r.maxCol; f++) {
        var y;
        if (!n[h.Z.getKeyFromRowCol(m, f)]) return !1;
      }
      return !0;
    }
  }
  const y = new f();
  function v(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function b(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? v(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class x {
    removeRows(e, t) {
      var r = e,
        n = o().chain(t).flatMap(t => {
          var r = e.elements[t];
          if (this.hasRowSpan(r)) {
            var n = h.Z.getTabularCellIndexFromKey(t);
            return o().map(o().range(n.row, n.row + r.rowSpan), e => h.Z.getKeyFromRowCol(e, n.column));
          }
          return [t];
        }).map(e => h.Z.getTabularCellIndexFromKey(e).row).uniq().orderBy(e => e, "desc").value();
      return o().forEach(n, e => r = this.removeRow(r, h.Z.getKeyFromRowCol(e, 0))), r;
    }
    removeRow(e, t) {
      var r = h.Z.getTabularCellIndexFromKey(t).row,
        n = 1,
        i = b(b({}, e), {}, {
          row: e.row - 1,
          elements: {}
        });
      return l.A.cellLoop(e, e => {
        var t = e.key,
          n = e.rIndex,
          s = e.cIndex,
          a = e.rowSpan,
          l = e.editor;
        if (n == r && a > 1 && (i.elements[t] = {
          hidden: void 0,
          colSpan: l.colSpan,
          rowSpan: a <= 2 ? void 0 : a - 1,
          lines: l.lines,
          style: l.style
        }), !o().inRange(n, r, r + 1)) {
          var c = h.Z.getKeyFromRowCol(n < r ? n : n - 1, s);
          i.elements[c] = b(b({}, l), i.elements[c]);
        }
      }), i = d.A.handleRemoveRow(i, r), i = a.A.normalizeCells(i);
    }
    hasRowSpan(e) {
      return !!e.rowSpan;
    }
  }
  const C = new x();
  function S(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function A(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? S(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class w {
    removeColumns(e, t) {
      var r = e,
        n = o().chain(t).flatMap(t => {
          var r = e.elements[t];
          if (this.hasColSpan(r)) {
            var n = h.Z.getTabularCellIndexFromKey(t);
            return o().map(o().range(n.column, n.column + r.colSpan), e => h.Z.getKeyFromRowCol(n.row, e));
          }
          return [t];
        }).map(e => h.Z.getTabularCellIndexFromKey(e).column).uniq().orderBy(e => e, "desc").value();
      return o().forEach(n, e => r = this.removeColumn(r, h.Z.getKeyFromRowCol(0, e))), r;
    }
    removeColumn(e, t) {
      var r = h.Z.getTabularCellIndexFromKey(t).column,
        n = 1,
        i = A(A({}, e), {}, {
          column: e.column - 1,
          elements: {}
        });
      return l.A.cellLoop(e, e => {
        var t = e.key,
          n = e.rIndex,
          s = e.cIndex,
          a = e.colSpan,
          l = e.editor;
        if (s == r && a > 1 && (i.elements[t] = {
          hidden: void 0,
          colSpan: a <= 2 ? void 0 : a - 1,
          rowSpan: l.rowSpan,
          lines: l.lines,
          style: l.style
        }), !o().inRange(s, r, r + 1)) {
          var c = h.Z.getKeyFromRowCol(n, s < r ? s : s - 1);
          i.elements[c] = A(A({}, l), i.elements[c]);
        }
      }), i = d.A.handleRemoveColumn(i, r), i = a.A.normalizeCells(i);
    }
    hasColSpan(e) {
      return !!e.colSpan;
    }
  }
  const E = new w();
  var k = r(68821);
  function O(e, t) {
    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (!r) {
      if (Array.isArray(e) || (r = D(e)) || t && e && "number" == typeof e.length) {
        r && (e = r);
        var n = 0,
          i = function e() {};
        return {
          s: i,
          n: function t() {
            return n >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[n++]
            };
          },
          e: function e(t) {
            throw t;
          },
          f: i
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var o = !0,
      s = !1,
      a;
    return {
      s: function t() {
        r = r.call(e);
      },
      n: function e() {
        var t = r.next();
        return o = t.done, t;
      },
      e: function e(t) {
        s = !0, a = t;
      },
      f: function e() {
        try {
          o || null == r.return || r.return();
        } finally {
          if (s) throw a;
        }
      }
    };
  }
  function D(e, t) {
    if (e) {
      if ("string" == typeof e) return P(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? P(e, t) : void 0;
    }
  }
  function P(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function M(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function I(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? M(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : M(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class T {
    getRowSpan(e) {
      return l.A.getRowSpan(e);
    }
    getColSpan(e) {
      return l.A.getColSpan(e);
    }
    makeSureNoWidthForHiddenColumn(e) {
      return a.A.makeSureNoWidthForHiddenColumn(e);
    }
    removeRows(e, t) {
      return C.removeRows(e, t);
    }
    isMergable(e, t) {
      return y.isMergable(e, t);
    }
    mergeCells(e, t) {
      return y.mergeCells(e, t);
    }
    unmergeCells(e, t) {
      return y.unmergeCells(e, t);
    }
    getRangedKeys(e, t) {
      return k.A.getRangedKeys(e, t);
    }
    findSafeCursorBackward(e, t, r) {
      return k.A.findSafeCursorBackward(e, t, r);
    }
    checkAndFindValidKeyPosition(e, t) {
      return k.A.checkAndFindValidKeyPosition(e, t);
    }
    getRightAvailableCellKey(e, t) {
      return k.A.getRightAvailableCellKey(e, t);
    }
    getLeftAvailableCellKey(e, t) {
      return k.A.getLeftAvailableCellKey(e, t);
    }
    getAboveAvailableCellKey(e, t) {
      return k.A.getAboveAvailableCellKey(e, t);
    }
    getBelowAvailableCellKey(e, t) {
      return k.A.getBelowAvailableCellKey(e, t);
    }
    getTabularKeysSelected(e) {
      return e.isTabularCellsSelected() ? e.getTabularCellKeysSelected() : [s.A.findLeafParentSelected(e.getJointSelected()).key];
    }
    modifyEditors(e, t, r) {
      for (var n = s.A.cloneCompositeBlockWithNewElements(e), i = 0; i < t.length; i++) {
        var o = t[i],
          a = e.elements[o];
        n.elements[o] = r(a, o);
      }
      return n;
    }
    normalizeCells(e) {
      return a.A.normalizeCells(e);
    }
    recalculateColumnWidth(e, t) {
      if (!e.columnWidths) return e;
      var r = o().clone(e),
        n = (r = a.A.makeSureNoWidthForHiddenColumn(r)).columnWidths.slice(0, r.column).filter(e => e),
        i = o().sumBy(n, e => e + 1),
        s = Math.max(0, r.column - n.length),
        l = 10;
      if (t - i > s * l) return r;
      var c = n.length,
        d = s * l - (t - i),
        h = Math.ceil(d / c),
        p = 0,
        u = d;
      return r.columnWidths = o().map(r.columnWidths, e => {
        return e ? p == c - 1 ? e - u : (p++, u -= h, e - h) : e;
        var t;
      }), r;
    }
    replaceAtKey(e, t, r) {
      for (var n = h.Z.getTabularCellIndexFromKey(t), i = s.A.cloneCompositeBlockWithNewElements(e), o = 0; o < r.row; o++) for (var a = 0; a < r.column; a++) {
        var l = h.Z.getKeyFromRowCol(o + n.row, a + n.column),
          c = h.Z.getKeyFromRowCol(o, a);
        i.elements[l] = r.elements[c];
      }
      return i.row = Math.max(i.row, n.row + r.row), i.column = Math.max(i.column, n.column + r.column), this.normalizeCells(i);
    }
    insertNewRowBelow(e, t) {
      return c.A.insertNewRowBelow(e, t);
    }
    insertNewRowAbove(e, t) {
      return c.A.insertNewRowAbove(e, t);
    }
    insertColumnOnLeft(e, t) {
      return g.insertColumnOnLeft(e, t);
    }
    insertColumnOnRight(e, t) {
      return g.insertColumnOnRight(e, t);
    }
    removeColumns(e, t) {
      return E.removeColumns(e, t);
    }
    adjustModelByRowCollumn(e, t, r) {
      for (var n = I(I({}, e), {}, {
          row: t,
          column: r,
          elements: o().clone(e.elements)
        }), i = 0; i < t; i++) for (var s = 0; s < r; s++) {
        var a = h.Z.getKeyFromRowCol(i, s);
        n.elements[a] || (n.elements[a] = p.A.createEmptyEditor());
      }
      var l = this.removeOutboundEmptyRowsColumns(n.elements, n.row, n.column);
      return l != n.elements ? I(I({}, n), {}, {
        elements: l
      }) : n;
    }
    removeOutboundEmptyRowsColumns(e, t, r) {
      return e = this.removeOutboundEmptyRows(e, t), this.removeOutboundEmptyColumns(e, r);
    }
    removeOutboundEmptyRows(e, t) {
      for (var r, n, i, a = h.Z.inferRowCol(e).row - 1; a >= t; a--) {
        var l = h.Z.getAllKeysFromRow({
          elements: e
        }, a);
        if (!l.some(t => !s.A.isEditorEmptyCheckTag(e[t]))) {
          r = r || o().clone(e);
          var c = O(l),
            d;
          try {
            for (c.s(); !(d = c.n()).done;) {
              var p;
              delete r[d.value];
            }
          } catch (e) {
            c.e(e);
          } finally {
            c.f();
          }
        }
      }
      return r || e;
    }
    removeOutboundEmptyColumns(e, t) {
      for (var r, n, i, a = h.Z.inferRowCol(e).column - 1; a >= t; a--) {
        var l = h.Z.getAllKeysFromColumn({
          elements: e
        }, a);
        if (!l.some(t => !s.A.isEditorEmptyCheckTag(e[t]))) {
          r = r || o().clone(e);
          var c = O(l),
            d;
          try {
            for (c.s(); !(d = c.n()).done;) {
              var p;
              delete r[d.value];
            }
          } catch (e) {
            c.e(e);
          } finally {
            c.f();
          }
        }
      }
      return r || e;
    }
    countNumberOfVLinesMoreThan1InMergeCells(e, t, r) {
      if (!e.vLines) return 0;
      for (var n = 0, i = t + 1; i < t + r; i++) {
        var o = e.vLines[i];
        o && o.nOfLines > 1 && (n += o.nOfLines - 1);
      }
      return n;
    }
    isPartialVLine(e, t) {
      return e.vLines && e.vLines[t] && !!e.vLines[t].borders;
    }
  }
  const L = new T();
};
