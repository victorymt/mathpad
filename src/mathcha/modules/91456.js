/* module 91456 — 1431 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    TocPageNumber: () => d,
    TocPageNumberSc: () => h,
    default: () => p
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(25742),
    a = r(48440),
    l = r(32485),
    c = r.n(l);
  class d extends s.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "toc-page-number-symbol");
    }
    getClassName() {
      return c()(super.getClassName(), {
        disabled: this.props.data.disabled
      });
    }
    renderComponent() {
      return this.props.data.disabled ? o().createElement("span", {
        style: {
          whiteSpace: "pre"
        }
      }, " ") : o().createElement("span", null, this.props.data.placeholderText || " ");
    }
  }
  class h extends a.A {
    getViewComponent() {
      return d;
    }
    getLatextName() {
      return "\\system-toc-page-number";
    }
    getSymbol() {
      return "";
    }
    getModel() {
      return this.getModelFromStructure({}, this.getLatextName());
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        insertInTextModeOnly: !0
      });
    }
    toModel(e, t, r) {}
    toLatex() {
      return this.getLatextName();
    }
    toMathml(e, t) {
      return {
        type: "empty"
      };
    }
  }
  const p = new h();
};
