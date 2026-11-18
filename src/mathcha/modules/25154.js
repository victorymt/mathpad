/* module 25154 — 8236 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => x
  });
  var n = r(64467),
    i = r(2543),
    o = r.n(i),
    s = r(49812);
  function a(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function l(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? a(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class c {
    handleExtractTabular(e, t) {
      var r = this.normalizeAligns(e, t);
      return r = this.normalizeVLines(r, t), r = this.normalizeHLines(r, t);
    }
    normalizeAligns(e, t) {
      var r = e;
      return e.aligns && (r = l(l({}, r), {}, {
        aligns: {}
      }), o().keys(e.aligns).forEach(n => {
        var i = Number.parseInt(n, 10);
        i >= t.minCol && i <= t.maxCol && (r.aligns[i - t.minCol] = e.aligns[i]);
      })), r;
    }
    normalizeVLines(e, t) {
      var r = e;
      return e.vLines && (r = l(l({}, r), {}, {
        vLines: []
      }), e.vLines.forEach(e => {
        e >= t.minCol && e <= t.maxCol + 1 && r.vLines.push(e - t.minCol);
      })), r;
    }
    normalizeHLines(e, t) {
      var r = e;
      return e.hLines && (r = l(l({}, r), {}, {
        hLines: []
      }), e.hLines.forEach(e => {
        e >= t.minRow && e <= t.maxRow + 1 && r.hLines.push(e - t.minRow);
      })), r;
    }
    normalizeTabular(e) {
      return e;
    }
    handleRemoveColumn(e, t) {
      var r = s.A.cloneCompositeBlockWithNewElements(e);
      return this.removeVLinesAt(r, t), r;
    }
    handleRemoveRow(e, t) {
      var r = s.A.cloneCompositeBlockWithNewElements(e);
      return this.removeHLinesAt(r, t), r;
    }
    handleInsertNewRowBelow(e, t) {
      var r = s.A.cloneCompositeBlockWithNewElements(e);
      return this.adjustHLinesOneRowDown(r, t), r;
    }
    handleInsertNewRowAbove(e, t) {
      var r = s.A.cloneCompositeBlockWithNewElements(e);
      return this.adjustHLinesOneRowDown(r, t), r;
    }
    shouldHandle(e) {
      return "\\array" == e.text;
    }
    handleInsertColumnOnLeft(e, t) {
      var r = s.A.cloneCompositeBlockWithNewElements(e);
      return this.adjustVLinesOneColumnRight(r, t), r;
    }
    handleInsertColumnOnRight(e, t) {
      var r = s.A.cloneCompositeBlockWithNewElements(e);
      return this.adjustVLinesOneColumnRight(r, t), r;
    }
    removeHLinesAt(e, t) {
      if (e.hLines) {
        for (var r = [], n = 0; n < e.hLines.length; n++) {
          var i = e.hLines[n];
          i < t && r.push(i), i > t && r.push(i - 1);
        }
        r = o().sortBy(r, e => e), e.hLines = r;
      }
    }
    removeVLinesAt(e, t) {
      if (e.vLines) {
        for (var r = [], n = 0; n < e.vLines.length; n++) {
          var i = e.vLines[n];
          i < t && r.push(i), i > t && r.push(i - 1);
        }
        r = o().sortBy(r, e => e), e.vLines = r;
      }
    }
    adjustHLinesOneRowDown(e, t) {
      if (e.hLines) {
        for (var r = o().clone(e.hLines), n = 0; n < e.hLines.length; n++) {
          var i = e.hLines[n];
          i == t && r.push(t), i >= t && (r[n] = i + 1);
        }
        r = o().sortBy(r, e => e), e.hLines = r;
      }
    }
    adjustVLinesOneColumnRight(e, t) {
      if (e.vLines) {
        for (var r = o().clone(e.vLines), n = 0; n < e.vLines.length; n++) {
          var i = e.vLines[n];
          i == t && r.push(t), i >= t && (r[n] = i + 1);
        }
        r = o().sortBy(r, e => e), e.vLines = r;
      }
    }
  }
  const d = new c();
  var h = r(61848),
    p = r(25321),
    u = r(69850);
  function g(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function m(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? g(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class f {
    constructor() {
      (0, n.A)(this, "mergeableBehavior", new u.t());
    }
    handleExtractTabular(e, t) {
      return e;
    }
    normalizeTabular(e) {
      return p.A.normalizeCells(e);
    }
    handleRemoveColumn(e, t) {
      var r = this.mergeableBehavior.handleRemoveColumn(e, t);
      return r.columnWidths ? m(m({}, r), {}, {
        columnWidths: h.A.remove(r.columnWidths, t)
      }) : r;
    }
    handleRemoveRow(e, t) {
      var r = this.mergeableBehavior.handleRemoveRow(e, t);
      return r.rowHeights ? m(m({}, r), {}, {
        rowHeights: h.A.remove(r.rowHeights, t)
      }) : r;
    }
    handleInsertNewRowBelow(e, t) {
      var r = this.mergeableBehavior.handleInsertNewRowBelow(e, t);
      return this.insertToRowHeights(r, t);
    }
    handleInsertNewRowAbove(e, t) {
      var r = this.mergeableBehavior.handleInsertNewRowAbove(e, t);
      return this.insertToRowHeights(r, t);
    }
    shouldHandle(e) {
      return "\\table" == e.text;
    }
    handleInsertColumnOnLeft(e, t) {
      var r = this.mergeableBehavior.handleInsertColumnOnLeft(e, t);
      return this.recalculateColumnWidthsAfterInsert(r, t);
    }
    handleInsertColumnOnRight(e, t) {
      var r = this.mergeableBehavior.handleInsertColumnOnRight(e, t);
      return this.recalculateColumnWidthsAfterInsert(r, t);
    }
    recalculateColumnWidthsAfterInsert(e, t) {
      if (!e.columnWidths) return e;
      var r = m(m({}, e), {}, {
          columnWidths: h.A.insert(e.columnWidths, t, 50)
        }),
        n = this.findColumnToReduceWidth(r, t);
      return n >= 0 && (r.columnWidths[n] -= 50), r;
    }
    findColumnToReduceWidth(e, t) {
      if (!e.columnWidths) throw new Error("not supported");
      for (var r = t + 1; r < e.columnWidths.length; r++) {
        var n = e.columnWidths[r];
        if (n && n >= 100) return r;
      }
      for (var i = t - 1; i >= 0; i--) {
        var o = e.columnWidths[i];
        if (o && o >= 100) return i;
      }
      return null;
    }
    insertToRowHeights(e, t) {
      return e.rowHeights ? m(m({}, e), {}, {
        rowHeights: h.A.insert(e.rowHeights, t, null)
      }) : e;
    }
  }
  const y = new f();
  var v = r(72297);
  class b {
    constructor() {
      (0, n.A)(this, "behaviors", [d, y, v.A]);
    }
    findBehaviors(e) {
      return this.behaviors.filter(t => t.shouldHandle(e));
    }
    handleInsertColumnOnLeft(e, t) {
      return this.findBehaviors(e).reduce((e, r) => r.handleInsertColumnOnLeft(e, t), e);
    }
    handleInsertColumnOnRight(e, t) {
      return this.findBehaviors(e).reduce((e, r) => r.handleInsertColumnOnRight(e, t), e);
    }
    handleInsertNewRowBelow(e, t) {
      return this.findBehaviors(e).reduce((e, r) => r.handleInsertNewRowBelow(e, t), e);
    }
    handleInsertNewRowAbove(e, t) {
      return this.findBehaviors(e).reduce((e, r) => r.handleInsertNewRowAbove(e, t), e);
    }
    handleRemoveColumn(e, t) {
      return this.findBehaviors(e).reduce((e, r) => r.handleRemoveColumn(e, t), e);
    }
    handleRemoveRow(e, t) {
      return this.findBehaviors(e).reduce((e, r) => r.handleRemoveRow(e, t), e);
    }
    normalizeTabular(e) {
      return this.findBehaviors(e).reduce((e, t) => t.normalizeTabular(e), e);
    }
    handleExtractTabular(e, t) {
      return this.findBehaviors(e).reduce((e, r) => r.handleExtractTabular(e, t), e);
    }
  }
  const x = new b();
};
