/* module 81776 — 3457 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    e: () => d
  });
  var n = r(64467),
    i = r(2543),
    o = r.n(i),
    s = r(90437);
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
    normalizeCells(e) {
      var t = this.cloneCompositeBlockWithNewElements(e);
      return this.normalizeColSpanAndRowSpan(t), this.normalizeHiddenCells(t), t;
    }
    cloneCompositeBlockWithNewElements(e) {
      return l(l({}, e), {}, {
        elements: l({}, e.elements)
      });
    }
    normalizeColSpanAndRowSpan(e) {
      for (var t = 0; t < e.row; t++) for (var r = 0; r < e.column; r++) {
        var n = s.Z.getKeyFromRowCol(t, r),
          i = e.elements[n],
          o = i.rowSpan || 1,
          a = i.colSpan || 1;
        if (a > 1) {
          var c = Math.min(a, this.countPossibleColumnSpans(e, t, r));
          a != c && (e.elements[n] = l(l({}, e.elements[n]), {}, {
            colSpan: c <= 1 ? void 0 : c
          }));
        }
        if (o > 1) {
          var d = Math.min(o, this.countPossibleRowSpans(e, t, r));
          o != d && (e.elements[n] = l(l({}, e.elements[n]), {}, {
            rowSpan: d <= 1 ? void 0 : d
          }));
        }
      }
    }
    countPossibleColumnSpans(e, t, r) {
      for (var n = 1, i = r + 1; i < e.column; i++) {
        var o = s.Z.getKeyFromRowCol(t, i),
          a = e.elements[o];
        if (a && (a.colSpan || a.rowSpan)) break;
        n++;
      }
      return n;
    }
    countPossibleRowSpans(e, t, r) {
      for (var n = 1, i = t + 1; i < e.row; i++) {
        var o = s.Z.getKeyFromRowCol(i, r),
          a = e.elements[o];
        if (a && (a.colSpan || a.rowSpan)) break;
        n++;
      }
      return n;
    }
    normalizeHiddenCells(e) {
      for (var t = this.buildCellMatrix(e), r = 0; r < e.row; r++) for (var n = 0; n < e.column; n++) {
        var i = s.Z.getKeyFromRowCol(r, n),
          a = e.elements[i],
          c = !!a.hidden;
        !!t[r][n].hidden != c && (c ? (e.elements[i] = o().clone(a), delete e.elements[i].hidden) : e.elements[i] = l(l({}, a), {}, {
          hidden: !0
        }));
      }
    }
    buildCellMatrix(e) {
      for (var t = new Array(e.row), r = 0; r < e.row; r++) t[r] = o().times(e.column, () => ({
        hidden: !1
      }));
      for (var n = 0; n < e.row; n++) for (var i = 0; i < e.column; i++) {
        var a = s.Z.getKeyFromRowCol(n, i),
          l = e.elements[a];
        (l.colSpan || l.rowSpan) && this.fillHiddenSection(t, n, i, l.colSpan || 1, l.rowSpan || 1);
      }
      return t;
    }
    fillHiddenSection(e, t, r, n, i) {
      for (var o = t; o < t + i; o++) for (var s = r; s < r + n; s++) o == t && s == r || (e[o][s].hidden = !0);
    }
  }
  var d = new c();
};
