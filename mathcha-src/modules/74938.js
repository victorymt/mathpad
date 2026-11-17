/* module 74938 — 6245 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    Case: () => b,
    CaseSc: () => x,
    default: () => C
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(6720),
    a = r(6855),
    l = r(49812),
    c = r(67882),
    d = r(39791),
    h = r(32485),
    p = r.n(h),
    u = r(91335),
    g = r(36223),
    m = r(90437),
    f = r(70224);
  function y(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function v(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? y(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class b extends a.A {
    constructor(e) {
      super(e), (0, n.A)(this, "handleComparisonChanged", (e, t) => {
        var r = m.Z.getKeyFromRowCol(e, 0),
          n = v(v({}, this.props.data.elements), {}, {
            [r]: v(v({}, this.props.data.elements[r]), {}, {
              comparison: t
            })
          }),
          i = v(v({}, this.props.data), {}, {
            elements: n
          });
        this.props.onDataChanged(i);
      });
    }
    getComparison(e) {
      var t = m.Z.getKeyFromRowCol(e, 0),
        r;
      return this.props.data.elements[t].comparison || ">";
    }
    getClassName() {
      return p()("matrix-symbol", "plot-case-symbol", "case-symbol", "role-tabular");
    }
    renderOpenBracket() {
      return this.renderBracket("open-brace");
    }
    renderCloseBracket() {
      return null;
    }
    renderRowContent(e) {
      for (var t = [{
          key: "<",
          value: "<"
        }, {
          key: ">",
          value: ">"
        }, {
          key: "=",
          value: "="
        }, {
          key: "≤",
          value: "≤"
        }, {
          key: "≥",
          value: "≥"
        }, {
          key: "≠",
          value: "≠"
        }], r = [], n = this.props.data, i = n.column, s = {}, a = n.row == e + 1, h = 0; h < i; h++) {
        var m = e + "_" + h,
          f = this.isChildSelected() ? "selected" : "";
        1 == h ? r.push(o().createElement("td", {
          className: "non-select",
          key: h + "_if",
          style: {
            fontFamily: "arial, verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif",
            paddingLeft: 2,
            paddingRight: 2
          }
        }, "if")) : 0 != h && r.push(o().createElement("td", {
          className: "non-select",
          key: h + "_middle",
          style: s
        })), 2 == h && r.push(o().createElement("td", {
          className: "non-select",
          key: h + "_compare",
          style: s,
          onMouseDown: g.A.onMouseDownStopPropagation
        }, o().createElement(u.A, {
          standoutOnHover: !0,
          usePositionFixedOnExpand: !0,
          selectBoxStyle: {
            height: 15,
            fontFamily: "Asana-Math, Asana",
            cursor: "pointer"
          },
          inputStyle: {
            fontFamily: "Asana-Math, Asana",
            fontSize: 17,
            lineHeight: "0.9em",
            color: "black"
          },
          itemsStyle: {
            fontSize: 17,
            fontFamily: "Asana-Math, Asana"
          },
          width: 30,
          data: t,
          value: this.getComparison(e),
          onChange: t => this.handleComparisonChanged(e, t)
        })));
        var y = l.A.isSingleLineEditor(n.elements[m]) ? c.A : d.A,
          b = o().createElement(y, v(v({}, this.buildMetaDataFromName(m)), {}, {
            className: "editor-cell",
            optimizeForOneLine: !0,
            displayMode: !0,
            showBorderOnSelected: !1
          }));
        r.push(o().createElement("td", {
          key: n.elements[m].id,
          className: f
        }, b, o().createElement("div", {
          className: p()("sbd no-print sbd-lc", {
            "sbd-lr": a
          })
        })));
      }
      return r;
    }
    renderSetting() {
      return null;
    }
  }
  class x extends s.eV {
    getViewComponent() {
      return b;
    }
    getModel(e) {
      var t = this.getModelFromStructure({
        "0_0": "editor",
        "0_1": "editor",
        "0_2": "editor",
        "1_0": "editor",
        "1_1": "editor",
        "1_2": "editor"
      }, "\\plot-cases");
      return t.row = 2, t.column = 3, t.elements["0_0"] = f.A.createOneTextEditor("5"), t.elements["0_1"] = f.A.createOneTextEditor("x"), t.elements["0_2"] = f.A.createOneTextEditor("1"), t.elements["1_0"] = f.A.createOneTextEditor("-5"), t.elements["1_1"] = f.A.createOneTextEditor("x"), t.elements["1_2"] = f.A.createOneTextEditor("1"), t.elements["0_0"].comparison = "≥", t.elements["1_0"].comparison = "<", t;
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: ["\\plot-cases"],
        renderSymbol() {
          var e = "square common-square-icon common-square-icon-expand";
          return o().createElement("div", {
            className: "case-icon"
          }, o().createElement("div", null, "{"), o().createElement("div", {
            className: "display-flex"
          }, o().createElement("div", null, o().createElement("div", {
            className: e
          }), o().createElement("div", {
            className: e
          })), o().createElement("div", null, o().createElement("div", {
            className: e
          }), o().createElement("div", {
            className: e
          }))));
        }
      });
    }
    getLatexName() {
      return "\\plot-cases";
    }
    toModel(e, t) {
      var r;
      return super.toModel(e, t);
    }
    toLatex(e, t, r) {
      return "";
    }
    toMathml(e, t) {
      return (0, s.G4)(e, t);
    }
  }
  const C = new x();
};
