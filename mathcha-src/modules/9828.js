/* module 9828 — 9283 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => p
  });
  var n = r(3453),
    i = r(64467),
    o = r(2543),
    s = r.n(o),
    a = r(247),
    l = r(19539);
  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? c(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class h {
    getSafeLineInfo(e, t) {
      var r = (e || [])[t] || {
        nOfLines: 0
      };
      return r.borders ? d(d({}, r), {}, {
        nOfLines: 0
      }) : r.nOfLines ? r : d(d({}, r), {}, {
        nOfLines: 0
      });
    }
    constructFullLines(e, t) {
      var r = [];
      return e.forEach(e => {
        var t = r.find(t => t.lineIndex == e.lineIndex);
        t || (t = {
          lineIndex: e.lineIndex,
          rect: e.rect,
          sectionIndex: void 0
        }, r.push(t)), t.rect = this.extendRect(e.rect, t.rect);
      }), t && r.forEach(e => {
        t.includes(e.lineIndex) && (e.booktabRule = !0);
      }), r;
    }
    extendRect(e, t) {
      return l.A.expandMaxRectBounding(e, t);
    }
    splitMultipleSections(e, t) {
      var r = [];
      return e.forEach(e => {
        if (e.startSectionIndex != e.endSectionIndex) {
          var n = e.endSectionIndex - e.startSectionIndex + 1;
          if ("row" == t) {
            var i = (e.rect.right - e.rect.left) / n;
            s().times(n, t => {
              r.push({
                lineIndex: e.lineIndex,
                sectionIndex: e.startSectionIndex + t,
                rect: {
                  top: e.rect.top,
                  bottom: e.rect.bottom,
                  left: e.rect.left + i * t,
                  right: e.rect.left + i * (t + 1)
                }
              });
            });
          } else {
            var o = (e.rect.bottom - e.rect.top) / n;
            s().times(n, t => {
              r.push({
                lineIndex: e.lineIndex,
                sectionIndex: e.startSectionIndex + t,
                rect: {
                  top: e.rect.top + o * t,
                  bottom: e.rect.top + o * (t + 1),
                  left: e.rect.left,
                  right: e.rect.right
                }
              });
            });
          }
        } else r.push({
          lineIndex: e.lineIndex,
          sectionIndex: e.startSectionIndex,
          rect: e.rect
        });
      }), r;
    }
    calculateHorizontalSections(e, t) {
      for (var r = this, i = a.A.extractInformation(t), o = this.findSizeSpans(t.column, e, "row"), s = [], l = function a(l) {
          for (var c = function t(a) {
              if (i.hLineHiddenPositions.some(e => e.lineIndex == l && e.sectionIndex == a)) return "continue";
              var c = r.findCellsInfoBoundToHLine(l, a, e),
                d = r.calculateTopBottom(c),
                h = (0, n.A)(d, 2),
                p = h[0],
                u = h[1],
                g = o.find(e => a >= e.fromIndex && a <= e.toIndex),
                m = g.fromPosition,
                f = g.toPosition,
                y = g.fromIndex,
                v = g.toIndex;
              s.every(e => e.lineIndex != l || e.startSectionIndex != y || e.endSectionIndex != v) && s.push({
                rect: {
                  top: p,
                  left: m,
                  bottom: u,
                  right: f
                },
                startSectionIndex: y,
                endSectionIndex: v,
                lineIndex: l
              });
            }, d = 0; d < t.column; d++) var h = c(d);
        }, c = 0; c <= t.row; c++) l(c);
      var h = this.splitMultipleSections(s, "row");
      h = h.map(e => d(d({}, e), {}, {
        rect: {
          left: e.rect.left,
          top: e.rect.top - 3,
          right: e.rect.right,
          bottom: e.rect.bottom + 3
        }
      }));
      var p,
        u = (t.hLines || []).map((e, t) => e && e.booktabRule ? t : void 0).filter(e => void 0 !== e);
      return {
        borders: h,
        fullLines: this.constructFullLines(h, u)
      };
    }
    calculateVerticalSections(e, t) {
      for (var r = this, i = this.findSizeSpans(t.row, e, "column"), o = a.A.extractInformation(t), s = [], l = function a(l) {
          for (var c = function t(a) {
              if (o.vLineHiddenPositions.some(e => e.lineIndex == l && e.sectionIndex == a)) return "continue";
              var c = r.findCellsInfoBoundToVLine(l, a, e),
                d = r.calculateLeftRight(c),
                h = (0, n.A)(d, 2),
                p = h[0],
                u = h[1],
                g = i.find(e => a >= e.fromIndex && a <= e.toIndex),
                m = g.fromPosition,
                f = g.toPosition,
                y = g.fromIndex,
                v = g.toIndex;
              s.every(e => e.lineIndex != l || e.startSectionIndex != y || e.endSectionIndex != v) && s.push({
                rect: {
                  top: m,
                  left: p,
                  bottom: f,
                  right: u
                },
                startSectionIndex: y,
                endSectionIndex: v,
                lineIndex: l
              });
            }, d = 0; d < t.row; d++) var h = c(d);
        }, c = 0; c <= t.column; c++) l(c);
      var h = this.splitMultipleSections(s, "column");
      return {
        borders: h = h.map(e => d(d({}, e), {}, {
          rect: {
            left: e.rect.left - 3,
            top: e.rect.top,
            right: e.rect.right + 3,
            bottom: e.rect.bottom
          }
        })),
        fullLines: this.constructFullLines(h)
      };
    }
    calculateTopBottom(e) {
      var t = 0,
        r = 0;
      if (e.length > 1) t = e.find(e => "before" == e.cellPosition).cellInfo.rect.bottom, r = e.find(e => "after" == e.cellPosition).cellInfo.rect.top;else {
        var n = e[0];
        t = r = "before" == n.cellPosition ? n.cellInfo.rect.bottom : n.cellInfo.rect.top;
      }
      return [t, r];
    }
    calculateLeftRight(e) {
      var t = 0,
        r = 0;
      if (e.length > 1) t = e.find(e => "before" == e.cellPosition).cellInfo.rect.right, r = e.find(e => "after" == e.cellPosition).cellInfo.rect.left;else {
        var n = e[0];
        t = r = "before" == n.cellPosition ? n.cellInfo.rect.right : n.cellInfo.rect.left;
      }
      return [t, r];
    }
    findSizeSpans(e, t, r) {
      var n = s().times(e).map(() => ({
        fromPosition: void 0,
        toPosition: void 0
      }));
      "row" == r ? t.forEach(e => {
        var t = e.cIndex,
          r = e.cIndex + e.colSpan - 1;
        n[t].fromPosition = e.rect.left, n[r].toPosition = e.rect.right;
      }) : t.forEach(e => {
        var t = e.rIndex,
          r = e.rIndex + e.rowSpan - 1;
        n[t].fromPosition = e.rect.top, n[r].toPosition = e.rect.bottom;
      });
      var i = [],
        o = {
          fromPosition: n[0].fromPosition,
          toPosition: n[0].toPosition,
          fromIndex: 0,
          toIndex: 0
        };
      i.push(o);
      for (var a = 1; a < n.length; a++) {
        var l = n[a];
        void 0 === l.fromPosition ? void 0 === l.toPosition || void 0 === i[i.length - 1].toPosition && (i[i.length - 1].toPosition = l.toPosition, i[i.length - 1].toIndex = a) : (void 0 === i[i.length - 1].toPosition && (i[i.length - 1].toPosition = l.fromPosition, i[i.length - 1].toIndex = a - 1), i.push({
          fromPosition: n[a].fromPosition,
          toPosition: n[a].toPosition,
          fromIndex: a,
          toIndex: a
        }));
      }
      return i;
    }
    findCellsInfoBoundToHLine(e, t, r) {
      for (var n = [], i = 0; i < r.length; i++) {
        var o = r[i];
        e >= o.rIndex && e < o.rIndex + o.rowSpan && t >= o.cIndex && t < o.cIndex + o.colSpan && n.push({
          cellInfo: o,
          indexFromSpan: t - o.cIndex,
          cellPosition: "after"
        }), o.rIndex + o.rowSpan == e && t >= o.cIndex && t < o.cIndex + o.colSpan && n.push({
          cellInfo: o,
          indexFromSpan: t - o.cIndex,
          cellPosition: "before"
        });
      }
      return n;
    }
    findCellsInfoBoundToVLine(e, t, r) {
      for (var n = [], i = 0; i < r.length; i++) {
        var o = r[i];
        e >= o.cIndex && e < o.cIndex + o.colSpan && t >= o.rIndex && t < o.rIndex + o.rowSpan && n.push({
          cellInfo: o,
          indexFromSpan: t - o.cIndex,
          cellPosition: "after"
        }), e == o.cIndex + o.colSpan && t >= o.rIndex && t < o.rIndex + o.rowSpan && n.push({
          cellInfo: o,
          indexFromSpan: t - o.cIndex,
          cellPosition: "before"
        });
      }
      return n;
    }
  }
  const p = new h();
};
