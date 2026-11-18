/* module 96412 — 1125 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    Checkbox: () => a,
    CheckboxSc: () => l,
    default: () => c
  });
  var n = r(40927),
    i = r.n(n),
    o = r(25742),
    s = r(48440);
  class a extends o.A {
    renderComponent() {
      return i().createElement("span", {
        style: {
          color: "red"
        }
      }, "?");
    }
  }
  class l extends s.A {
    constructor() {
      super();
    }
    getViewComponent() {
      return a;
    }
    getLatextName() {
      return "\\not-found-symbol";
    }
    getSymbol() {
      return "not-found-symbol";
    }
    getModel() {
      return this.getModelFromStructure({}, this.getLatextName());
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        isHidden: !0
      });
    }
    toModel() {
      var e;
      return this.getModel();
    }
    toLatex() {
      return " ? ";
    }
    toMathml(e, t) {
      return {
        type: "mtext",
        value: "Symbol not found"
      };
    }
  }
  const c = new l();
};
