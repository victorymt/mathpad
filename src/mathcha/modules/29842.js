/* module 29842 — 1523 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    SmallMatrixSc: () => d,
    default: () => h
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(6720),
    a = r(39774),
    l = r(6855);
  class c extends l.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "disableLayoutType", !0);
    }
    shouldShowSmaller() {
      return !0;
    }
    renderOpenBracket() {
      return null;
    }
    renderCloseBracket() {
      return null;
    }
  }
  class d extends s.eV {
    getViewComponent() {
      return c;
    }
    getModel() {
      var e = this.getModelFromStructure({
        "0_0": "editor",
        "0_1": "editor",
        "1_0": "editor",
        "1_1": "editor"
      }, "\\smallmatrix");
      return e.row = 2, e.column = 2, e.bracket = "", e;
    }
    getLatexName() {
      return "\\smallmatrix";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: ["\\smallmatrix"],
        height: 30,
        renderSymbol: () => o().createElement(a.A, {
          bracketType: " ",
          smaller: !0
        })
      });
    }
    bracketFromName() {
      return null;
    }
    toLatex(e, t, r) {
      return this.innerToLatex(e, t, r, "smallmatrix");
    }
    toMathml(e, t) {
      var r = (0, s.G4)(e, t);
      return r.displaystyle = !1, r.columnspacing = "0.333em", r.rowspacing = "0.2em", {
        type: "mstyle",
        scriptlevel: "1",
        element: r
      };
    }
  }
  const h = new d();
};
