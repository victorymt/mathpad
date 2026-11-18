/* module 52970 — 13481 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => c
  });
  var n = r(64467),
    i = r(2543),
    o = r.n(i);
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
    toLatexStructure(e) {
      var t = [],
        r,
        n = {
          columnsOptions: this.constructColumnsOptions(e, t),
          rows: [],
          definitions: t,
          environmentName: "full-width" == e.tableWidth ? "tabularx" : "tabular"
        },
        i = a(a({}, e), {}, {
          columnAligns: this.findColumnOption(n.columnsOptions)
        });
      return this.constructCells(i, n), n;
    }
    getNumberOfFullLine(e) {
      return e && e.nOfLines || 0;
    }
    isLineSectionExist(e, t) {
      return !!e && (e.nOfLines > 0 || e.borders && !!e.borders[t]);
    }
    isPartialSectionEnabled(e, t) {
      return !!e && e.borders && !!e.borders[t];
    }
    constructColumnsOptions(e, t) {
      for (var r = this, n = [], i = e.vLines || [], o = function o(s) {
          var a = r.getNumberOfFullLine(i[s]);
          a > 0 && n.push({
            type: "line",
            numberOfLines: a
          });
          var l = r.getMostAlignment(e, s);
          if ("number" == typeof e.columnWidths[s] ? "left" == l ? n.push({
            type: "fixed",
            align: "left",
            cIndex: s,
            width: "".concat(e.columnWidths[s], "cm")
          }) : (t.some(e => "fixed-column-definition" == e.type && e.align == l) || t.push({
            type: "fixed-column-definition",
            align: l
          }), n.push({
            type: "fixed",
            align: l,
            cIndex: s,
            width: "".concat(e.columnWidths[s], "cm")
          })) : "full-width" == e.tableWidth ? ("left" != l && (t.some(e => "grow-column-definition" == e.type && e.align == l) || t.push({
            type: "grow-column-definition",
            align: l
          })), n.push({
            type: "grow",
            align: l,
            cIndex: s
          })) : n.push({
            type: "align",
            align: l,
            cIndex: s
          }), s >= e.column - 1) {
            var c = r.getNumberOfFullLine(i[e.column]);
            c > 0 && n.push({
              type: "line",
              numberOfLines: c
            });
          }
        }, s = 0; s < e.column; s++) o(s);
      return n;
    }
    getMostAlignment(e, t) {
      for (var r = {
          left: 0,
          center: 0,
          right: 0
        }, n = 0; n < e.row; n++) r[e.cells[n][t].align]++;
      return r.left >= r.right && r.left > r.center ? "left" : r.right >= r.center ? "right" : "center";
    }
    constructHLines(e, t, r, n, i) {
      if (!t) return [];
      var s = this.getNumberOfFullLine(t),
        a = e.some(e => e.lineIndex == r);
      if (s > 0 && !a) {
        if (t.booktabRule) {
          var l = "middle";
          return 0 == r && (l = "top"), i && (l = "bottom"), [{
            type: "booktab-full-line",
            numberOfLines: s,
            ruleType: l
          }];
        }
        return [{
          type: "full-line",
          numberOfLines: s
        }];
      }
      for (var c = o().times(n).map(n => this.isLineSectionExist(t, n) && !e.some(e => e.lineIndex == r && e.sectionIndex == n)), d = [], h = null, p = 0; p < c.length; p++) {
        var u;
        c[p] ? h ? h.to = p : (h = t.booktabRule ? {
          type: "booktab-column-line",
          from: p,
          to: p
        } : {
          type: "column-line",
          from: p,
          to: p
        }, d.push(h)) : h = null;
      }
      return d;
    }
    findColumnOption(e) {
      return e.filter(e => "align" == e.type || "paragraph" == e.type || "fixed" == e.type || "grow" == e.type).map(e => {
        switch (e.type) {
          case "align":
          case "fixed":
          case "grow":
            return e.align;
          default:
            return "left";
        }
      });
    }
    constructCells(e, t) {
      for (var r = this.extractInformation(e), n = new Array(e.row), i = e.hLines || [], o = 0; o < e.row; o++) {
        n[o] = {
          cells: new Array(e.column),
          leadings: [],
          trailings: []
        };
        var s = n[o];
        s.leadings = this.constructHLines(r, i[o], o, e.column, !1);
        for (var a = 0; a < e.column; a++) this.constructCellInfo(s, e, o, a);
        o >= e.row - 1 && (s.trailings = this.constructHLines(r, i[e.row], e.row, e.column, !0));
      }
      t.rows = n, this.makeHiddenForColumnSpans(n), this.adjustMergedRowsWithPartialVLines(n, e.vLines || [], e), this.adjustVLinesMergedRowsBelow(n, e.vLines || [], e), this.reduceJoinVLines(n, e.vLines || []), this.adjustCellAlign(e, t);
    }
    adjustCellAlign(e, t) {
      for (var r = t.rows, n = 0; n < r.length; n++) for (var i = r[n], o = 0; o < i.cells.length; o++) {
        var s = i.cells[o],
          a = e.cells[n][o],
          l = e.columnAligns[o];
        "normal" == s.type && "model" == s.data.type && "none" != l && a.align != l && (i.cells[o] = {
          type: "multicolumn",
          colSpan: 1,
          columnsOptions: this.getThreeValuesColumnOptions(e, n, o),
          data: s.data
        }), "multirow" == s.type && "none" != l && a.align != l && (i.cells[o] = {
          type: "multicolumnrow",
          colSpan: 1,
          columnsOptions: this.getThreeValuesColumnOptions(e, n, o),
          cell: s
        });
      }
    }
    adjustMergedRowsWithPartialVLines(e, t, r) {
      for (var n = 0; n < e.length; n++) for (var i = e[n], o = 0; o < i.cells.length; o++) {
        var s = i.cells[o];
        if ("multirow" == s.type) {
          var a = t[o + 1] && !!t[o + 1].borders;
          0 == o && (a = a || t[o] && !!t[o].borders), a && (i.cells[o] = {
            type: "multicolumnrow",
            colSpan: 1,
            cell: {
              type: "multirow",
              data: s.data,
              rowSpan: s.rowSpan
            },
            columnsOptions: this.getThreeValuesColumnOptions(r, n, o)
          });
        }
      }
    }
    adjustVLinesMergedRowsBelow(e, t, r) {
      for (var n = 0; n < e.length; n++) for (var i = e[n], o = 0; o < i.cells.length; o++) {
        var s = i.cells[o];
        "multicolumnrow" == s.type && this.setCellRightFromTo(e, n + 1, n + s.cell.rowSpan - 1, o, o + s.colSpan - 1, t, r.cells[n][o].align);
      }
    }
    shouldConvertToMultiColumn(e, t) {
      return this.isLineSectionExist(e, t) !== (1 == this.getNumberOfFullLine(e));
    }
    setCellRightFromTo(e, t, r, n, i, o, s) {
      for (var a = t; a <= r; a++) for (var l = e[a], c = n; c <= i; c++) if (c != i || 0 != c) {
        if (c != i) {
          if (0 != c) l.cells[c] = {
            type: "multicolumn",
            colSpan: 1,
            columnsOptions: {
              align: {
                type: "align",
                align: s,
                cIndex: 0
              }
            }
          };else {
            var d = o[c],
              h;
            this.shouldConvertToMultiColumn(d, a) && (l.cells[c] = {
              type: "multicolumn",
              colSpan: 1,
              columnsOptions: {
                left: this.isLineSectionExist(d, a) ? {
                  type: "line",
                  numberOfLines: Math.max(1, this.getNumberOfFullLine(d))
                } : void 0,
                align: {
                  type: "align",
                  align: s,
                  cIndex: 0
                }
              }
            });
          }
        } else {
          var p = o[c + 1],
            u;
          this.shouldConvertToMultiColumn(p, a) && (l.cells[c] = {
            type: "multicolumn",
            colSpan: 1,
            columnsOptions: {
              align: {
                type: "align",
                align: s,
                cIndex: 0
              },
              right: this.isLineSectionExist(p, a) ? {
                type: "line",
                numberOfLines: Math.max(1, this.getNumberOfFullLine(p))
              } : void 0
            }
          });
        }
      } else {
        var g = o[c],
          m = o[c + 1],
          f = this.shouldConvertToMultiColumn(g, a);
        (f = f || this.shouldConvertToMultiColumn(m, a)) && (l.cells[c] = {
          type: "multicolumn",
          colSpan: 1,
          columnsOptions: {
            left: this.isLineSectionExist(g, a) ? {
              type: "line",
              numberOfLines: Math.max(1, this.getNumberOfFullLine(g))
            } : void 0,
            align: {
              type: "align",
              align: s,
              cIndex: 0
            },
            right: this.isLineSectionExist(m, a) ? {
              type: "line",
              numberOfLines: Math.max(1, this.getNumberOfFullLine(m))
            } : void 0
          }
        });
      }
    }
    reduceJoinVLines(e, t) {
      for (var r = 0; r < e.length; r++) for (var n = e[r], i = 0; i < n.cells.length - 1; i++) {
        var o = n.cells[i];
        if (o && ("multicolumn" == o.type || "multicolumnrow" == o.type)) {
          i > 0 && this.getNumberOfFullLine(t[i]) > 0 && (o.columnsOptions.left = void 0);
          var s = n.cells[i + o.colSpan];
          s && ("multicolumn" != s.type && "multicolumnrow" != s.type || (s.columnsOptions.left = void 0));
        }
      }
    }
    makeHiddenForColumnSpans(e) {
      for (var t = 0; t < e.length; t++) for (var r = e[t], n = 0; n < r.cells.length; n++) {
        var i = r.cells[n];
        if ("multicolumn" == i.type || "multicolumnrow" == i.type) for (var o = n + 1; o < n + i.colSpan; o++) r.cells[o] = {
          type: "hidden"
        };
      }
    }
    constructCellData(e, t) {
      return e.lines.length > 1 ? {
        type: "makecell",
        model: e,
        align: t
      } : {
        type: "model",
        model: e
      };
    }
    constructCellInfo(e, t, r, n) {
      var i = t.cells[r][n],
        o = i.rowSpan,
        s = i.colSpan,
        a = i.hidden,
        l = i.data,
        c = i.align,
        d = t.vLines || [];
      if (o > 1 && s > 1) {
        var h = {
          type: "multicolumnrow",
          colSpan: s,
          cell: {
            type: "multirow",
            rowSpan: o,
            data: this.constructCellData(l, c)
          },
          columnsOptions: this.getThreeValuesColumnOptions(t, r, n)
        };
        e.cells[n] = h;
      } else if (s > 1) {
        var p = {
          type: "multicolumn",
          colSpan: s,
          data: this.constructCellData(l, c),
          columnsOptions: this.getThreeValuesColumnOptions(t, r, n)
        };
        e.cells[n] = p;
      } else if (o > 1) {
        var u = {
          type: "multirow",
          rowSpan: o,
          data: this.constructCellData(l, c)
        };
        e.cells[n] = u;
      } else if (a) {
        var g = {
          type: "empty"
        };
        e.cells[n] = g;
      } else {
        var m = d[n],
          f = d[n + 1];
        if (this.isPartialSectionEnabled(m, r) || this.isPartialSectionEnabled(f, r)) {
          var y = {
            type: "multicolumn",
            colSpan: 1,
            data: this.constructCellData(l, c),
            columnsOptions: this.getThreeValuesColumnOptions(t, r, n)
          };
          e.cells[n] = y;
        } else {
          var v = {
            type: "normal",
            data: this.constructCellData(l, c)
          };
          e.cells[n] = v;
        }
      }
    }
    getThreeValuesColumnOptions(e, t, r) {
      var n = e.cells[t][r],
        i = n.colSpan,
        o = n.align,
        s = e.vLines || [],
        a = s[r],
        l = s[r + i],
        c = {
          align: {
            type: "align",
            align: o,
            cIndex: 0
          }
        };
      return 0 == r && this.isLineSectionExist(a, t) && (c.left = {
        type: "line",
        numberOfLines: Math.max(1, this.getNumberOfFullLine(a))
      }), this.isLineSectionExist(l, t) && (c.right = {
        type: "line",
        numberOfLines: Math.max(1, this.getNumberOfFullLine(l))
      }), c;
    }
    extractInformation(e) {
      for (var t = [], r = 0; r < e.row; r++) for (var n = 0; n < e.column; n++) {
        var i = e.cells[r][n],
          o = i.colSpan,
          s = i.rowSpan;
        (s > 1 || o > 1) && this.extractHiddenLines({
          rIndex: r,
          cIndex: n,
          colSpan: o,
          rowSpan: s
        }, t);
      }
      return t;
    }
    extractHiddenLines(e, t) {
      for (var r = e.rIndex; r < e.rIndex + e.rowSpan; r++) for (var n = e.cIndex; n < e.cIndex + e.colSpan; n++) r > e.rIndex && t.push({
        lineIndex: r,
        sectionIndex: n
      });
    }
  }
  const c = new l();
};
