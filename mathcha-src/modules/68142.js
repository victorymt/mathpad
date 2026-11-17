/* module 68142 — 2159 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => d
  });
  var n = r(40927),
    i = r.n(n),
    o = r(6720),
    s = r(6855),
    a = r(70224);
  class l extends s.A {
    constructor(e) {
      super(e), this.containerClassName = "binom ";
    }
    renderSetting() {
      return null;
    }
    shouldShowSmaller() {
      return this.isInlineMode();
    }
  }
  class c extends o.eV {
    getViewComponent() {
      return l;
    }
    getModel() {
      var e = this.getModelFromStructure({
        "0_0": "editor",
        "1_0": "editor"
      }, "\\binom");
      return e.row = 2, e.column = 1, e.bracket = "(", e.layoutType = this.getLayoutType(), e;
    }
    getLayoutType() {
      return "binom";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: ["\\binom"],
        height: 30,
        renderSymbol() {
          var e = "square common-square-icon common-square-icon-expand";
          return i().createElement("div", {
            style: {
              display: "flex",
              fontSize: "18px",
              lineHeight: "14px"
            }
          }, i().createElement("div", null, "("), i().createElement("div", null, i().createElement("div", {
            className: e,
            style: {
              marginTop: 1
            }
          }), i().createElement("div", {
            className: e
          })), i().createElement("div", null, ")"));
        }
      });
    }
    toModel(e, t, r, n) {
      var i = this.getModel();
      return i.elements["0_0"] = a.A.createEditorWith(r), i.elements["1_0"] = a.A.createEditorWith(n), i;
    }
    toLatex(e, t, r) {
      var n = e.elements["0_0"],
        i = e.elements["1_0"];
      return "\\binom{".concat(r.toLatexFromEditor(n, t), "}{").concat(r.toLatexFromEditor(i, t), "}");
    }
    toMathml(e, t) {
      var r;
      return {
        type: "mrow",
        elements: [{
          type: "mo",
          value: "(",
          fence: !0
        }, (0, o.G4)(e, t), {
          type: "mo",
          value: ")",
          fence: !0
        }]
      };
    }
  }
  const d = new c();
};
