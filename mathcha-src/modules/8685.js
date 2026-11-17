/* module 8685 — 6007 chars */
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
    toLatex(e, t, r) {
      var n = this.fromColumnsOptions(e.columnsOptions),
        i = e.rows.map(e => {
          var n = this.fromHLines(e.leadings),
            i = this.fromHLines(e.trailings),
            s = e.cells.map(e => {
              switch (e.type) {
                case "empty":
                  return " ";
                case "normal":
                  return this.handleCellData(e.data, t, r);
                case "multirow":
                  return this.fromMultiRow(e, t, r);
                case "multicolumn":
                  return this.fromMultiColumn(e, t, r);
                case "multicolumnrow":
                  return this.fromMultiColumnRow(e, t, r);
                case "hidden":
                  return null;
              }
            }).filter(e => null !== e).join(" & ");
          return o().isEmpty(n) || o().isEmpty(i) ? o().isEmpty(n) ? o().isEmpty(i) ? "".concat(s, " \\\\\n") : "".concat(s, " \\\\\n ").concat(i) : "".concat(n, " \n ").concat(s, " \\\\\n") : "".concat(n, " \n ").concat(s, " \\\\\n ").concat(i);
        }).join(""),
        s = "tabularx" == e.environmentName ? "{\\textwidth}" : "";
      return "".concat(this.convertDefinitions(e.definitions), "\n\\begin{").concat(e.environmentName, "}").concat(s, "{").concat(n, "}\n").concat(i, "\n\\end{").concat(e.environmentName, "}");
    }
    convertDefinitions(e) {
      return e.map(e => {
        switch (e.type) {
          case "fixed-column-definition":
            switch (e.align) {
              case "center":
                return "\\newcolumntype{C}[1]{>{\\centering\\arraybackslash}p{#1}}";
              case "right":
                return "\\newcolumntype{R}[1]{>{\\raggedright\\arraybackslash}p{#1}}";
            }
            break;
          case "grow-column-definition":
            switch (e.align) {
              case "center":
                return "\\newcolumntype{K}{>{\\centering\\arraybackslash}X}";
              case "right":
                return "\\newcolumntype{T}{>{\\raggedright\\arraybackslash}X}";
            }
        }
      }).join("\n");
    }
    handleCellData(e, t, r) {
      switch (e.type) {
        case "model":
          return t.toLatexFromEditor(e.model, r);
        case "makecell":
          return "\\makecell[".concat(this.alignToLatex(e.align), "]{").concat(t.toLatexFromEditor(e.model, a(a({}, r), {}, {
            newLineUsingBackSlash: !0
          })), "}");
      }
    }
    fromMultiRow(e, t, r) {
      return "\\multirow{".concat(e.rowSpan, "}{*}{").concat(this.handleCellData(e.data, t, r), "}");
    }
    fromMultiColumn(e, t, r) {
      var n = this.from3ValuesColumnsOptions(e.columnsOptions),
        i = e.data ? this.handleCellData(e.data, t, r) : "";
      return "\\multicolumn{".concat(e.colSpan, "}{").concat(n, "}{").concat(i, "}");
    }
    fromMultiColumnRow(e, t, r) {
      var n = this.from3ValuesColumnsOptions(e.columnsOptions);
      return "\\multicolumn{".concat(e.colSpan, "}{").concat(n, "}{").concat(this.fromMultiRow(e.cell, t, r), "}");
    }
    fromHLines(e) {
      return e.map(e => {
        switch (e.type) {
          case "full-line":
            return o().repeat("\\hline", e.numberOfLines);
          case "column-line":
            return "\\cline{".concat(e.from + 1, "-").concat(e.to + 1, "}");
          case "booktab-full-line":
            return o().repeat(this.booktabRuleToToLatex(e.ruleType), e.numberOfLines);
          case "booktab-column-line":
            return "\\cmidrule{".concat(e.from + 1, "-").concat(e.to + 1, "}");
        }
      }).join(" ");
    }
    booktabRuleToToLatex(e) {
      switch (e) {
        case "top":
          return "\\toprule";
        case "middle":
          return "\\midrule";
        default:
          return "\\bottomrule";
      }
    }
    fromColumnsOptions(e) {
      return e.map(e => {
        switch (e.type) {
          case "line":
            return o().repeat("|", e.numberOfLines);
          case "align":
            return this.alignToLatex(e.align);
          case "fixed":
            return this.fixedToLatex(e);
          case "grow":
            return this.growToLatex(e);
          case "paragraph":
            return "p{".concat(e.width, "}");
        }
      }).join("");
    }
    alignToLatex(e) {
      switch (e) {
        case "left":
          return "l";
        case "center":
          return "c";
        default:
          return "r";
      }
    }
    fixedToLatex(e) {
      switch (e.align) {
        case "left":
          return "p{".concat(e.width, "}");
        case "center":
          return "C{".concat(e.width, "}");
        default:
          return "R{".concat(e.width, "}");
      }
    }
    growToLatex(e) {
      switch (e.align) {
        case "left":
          return "X";
        case "center":
          return "K";
        default:
          return "T";
      }
    }
    from3ValuesColumnsOptions(e) {
      var t = e.left,
        r = e.align,
        n = e.right;
      return this.fromColumnsOptions([t, r, n].filter(e => e));
    }
  }
  const c = new l();
};
