/* module 72297 — 5098 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => g
  });
  var n = r(64467),
    i = r(61848),
    o = r(61196),
    s = r(2543),
    a = r.n(s),
    l = r(69850),
    c = r(247),
    d = r(81776);
  function h(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function p(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? h(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class u {
    constructor() {
      (0, n.A)(this, "mergeableBehavior", new l.t());
    }
    handleExtractTabular(e, t) {
      var r = e;
      return r.vLines && (r = p(p({}, r), {}, {
        vLines: r.vLines.slice(t.minCol, t.maxCol + 2)
      })), r.hLines && (r = p(p({}, r), {}, {
        hLines: r.hLines.slice(t.minRow, t.maxRow + 2)
      })), r;
    }
    shouldHandle(e) {
      return "\\latex-table" == e.text;
    }
    handleInsertColumnOnLeft(e, t) {
      var r = this.mergeableBehavior.handleInsertColumnOnLeft(e, t);
      return this.handleInsertColumn(r, t);
    }
    handleInsertColumnOnRight(e, t) {
      var r = this.mergeableBehavior.handleInsertColumnOnRight(e, t);
      return this.handleInsertColumn(r, t);
    }
    handleInsertNewRowBelow(e, t) {
      var r = this.mergeableBehavior.handleInsertNewRowBelow(e, t);
      return this.handleInsertRow(r, t);
    }
    handleInsertNewRowAbove(e, t) {
      var r = this.mergeableBehavior.handleInsertNewRowAbove(e, t);
      return this.handleInsertRow(r, t);
    }
    handleRemoveColumn(e, t) {
      var r = this.mergeableBehavior.handleRemoveColumn(e, t);
      return r.vLines && (r.vLines = i.A.remove(r.vLines, t)), r.columnWidths && (r.columnWidths = i.A.remove(r.columnWidths, t)), r.hLines && (r = p(p({}, r), {}, {
        hLines: r.hLines.map((r, n) => {
          if (r && r.borders) {
            var s = i.A.remove(r.borders, t);
            return o.A.normalizeLineInfo(s, r, e.column, 0 == n || n >= e.row);
          }
          return r;
        })
      })), r;
    }
    handleRemoveRow(e, t) {
      var r = this.mergeableBehavior.handleRemoveRow(e, t);
      return r.hLines && (r.hLines = i.A.remove(r.hLines, t)), r.vLines && (r = p(p({}, r), {}, {
        vLines: r.vLines.map(r => {
          if (r && r.borders) {
            var n = i.A.remove(r.borders, t);
            return o.A.normalizeLineInfo(n, r, e.row, !1);
          }
          return r;
        })
      })), r;
    }
    normalizeTabular(e) {
      var t = d.e.normalizeCells(e);
      return this.adjustHLineInMergeCells(t);
    }
    adjustHLineInMergeCells(e) {
      if (!e.hLines) return e;
      for (var t = e, r = 1; r < e.row; r++) {
        var n = e.hLines[r];
        n && n.nOfLines > 0 && this.isHLineInMergeRow(t, r) && (t = p(p({}, t), {}, {
          hLines: i.A.setIndex(t.hLines, r, p(p({}, n), {}, {
            nOfLines: 1
          }))
        }));
      }
      return t;
    }
    isHLineInMergeRow(e, t) {
      var r;
      return c.A.extractInformation(e).hLineHiddenPositions.some(e => e.lineIndex == t);
    }
    handleInsertColumn(e, t) {
      var r = e;
      if (r.vLines) {
        var n = (r = p(p({}, r), {}, {
          vLines: i.A.insert(r.vLines, t, null)
        })).vLines[t - 1];
        n && (n.nOfLines > 0 && (r.vLines[t] = p(p({}, n), {}, {
          nOfLines: 1
        })), n.borders && (r.vLines[t] = a().clone(n)));
      }
      return r.columnWidths && (r = p(p({}, r), {}, {
        columnWidths: i.A.insert(r.columnWidths, t, null)
      })), r.hLines && (r = p(p({}, r), {}, {
        hLines: r.hLines.map((r, n) => {
          if (!r) return r;
          if (r.borders) {
            var s = i.A.insert(r.borders, t, !1);
            return s[t - 1] && s[t + 1] && (s[t] = !0), o.A.normalizeLineInfo(s, r, e.column, 0 == n || n >= e.row);
          }
          return r;
        })
      })), r;
    }
    handleInsertRow(e, t) {
      var r = e;
      if (r.hLines) {
        var n = (r = p(p({}, r), {}, {
          hLines: i.A.insert(r.hLines, t, null)
        })).hLines[t - 1];
        n && (n.nOfLines > 0 && (r.hLines[t] = {
          nOfLines: 1
        }), n.borders && (r.hLines[t] = a().clone(n)));
      }
      return r.vLines && (r = p(p({}, r), {}, {
        vLines: r.vLines.map(r => {
          if (!r) return r;
          if (r.borders) {
            var n = i.A.insert(r.borders, t, !1);
            return n[t - 1] && n[t + 1] && (n[t] = !0), o.A.normalizeLineInfo(n, r, e.row, !1);
          }
          return r;
        })
      })), r;
    }
  }
  const g = new u();
};
