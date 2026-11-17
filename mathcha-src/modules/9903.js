/* module 9903 — 3959 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    LatexTableSc: () => x,
    default: () => C
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(6720),
    a = r(48440),
    l = r(25352),
    c = r(2543),
    d = r.n(c),
    h = r(52970),
    p = r(32422),
    u = r(59310);
  class g {
    toLatexStructure(e) {
      var t = this.toInputTabular(e);
      return h.A.toLatexStructure(t);
    }
    toInputTabular(e) {
      var t = e.columnWidths || [],
        r = {
          cells: u.Q.newArray(e.row),
          column: e.column,
          row: e.row,
          hLines: e.hLines || [],
          vLines: e.vLines || [],
          columnWidths: d().times(e.column, e => {
            var r = t[e];
            return "number" == typeof r ? r : "auto";
          }),
          tableWidth: e.tableWidth
        };
      return d().times(r.row).forEach(t => r.cells[t] = new Array(e.column)), p.A.cellLoop(e, e => {
        var t = e.rIndex,
          n = e.cIndex,
          i = e.rowSpan,
          o = e.colSpan,
          s = e.hidden,
          a = e.editor,
          l = a.style && a.style.align ? a.style.align : "center";
        "justify" == l && (l = "left"), r.cells[t][n] = {
          rowSpan: i,
          colSpan: o,
          hidden: s,
          data: a,
          align: l
        };
      }), r;
    }
  }
  const m = new g();
  var f = r(8685),
    y = r(90437);
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
  class x extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return l.A;
    }
    getModel(e) {
      for (var t = {}, r = 0; r < 3; r++) for (var n = 0; n < 3; n++) {
        var i;
        t[y.Z.getKeyFromRowCol(r, n)] = "editor";
      }
      var o = this.getModelFromStructure(t, "\\latex-table");
      return o.row = 3, o.column = 3, o.hLines = [{
        nOfLines: 1
      }, {
        nOfLines: 1
      }, {
        nOfLines: 1
      }, {
        nOfLines: 1
      }], o.vLines = [{
        nOfLines: 1
      }, {
        nOfLines: 1
      }, {
        nOfLines: 1
      }, {
        nOfLines: 1
      }], o;
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: ["\\latex-table"],
        height: 30,
        insertInTextModeOnly: !0,
        renderSymbol: () => o().createElement("svg", {
          style: {
            width: 19,
            height: 15,
            transform: "translate(2px,1px)",
            stroke: "var(--ui-text-muted, gray)"
          }
        }, o().createElement("path", {
          style: {
            transform: "translate(2px,2px)"
          },
          d: "M-0.5,0 L12.5,0 M-0.5,6 L12.5,6 M-0.5,12 L12.5,12 M0,0 L0,12 M6,0 L6,12 M12,0 L12,12",
          fill: "none"
        }))
      });
    }
    getLatexName() {
      return "\\latex-table";
    }
    toModel(e, t) {
      var r;
      return (0, s.tC)(this.getLatexName(), t);
    }
    isInMathExpression() {
      return !1;
    }
    toLatex(e, t, r) {
      t = b(b({}, t), {}, {
        inMathExpression: !1,
        inTable: !0
      });
      var n = m.toLatexStructure(e);
      return f.A.toLatex(n, r, t);
    }
  }
  const C = new x();
};
