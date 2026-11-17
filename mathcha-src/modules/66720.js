/* module 66720 — 1348 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => d
  });
  var n = r(64467),
    i = r(25742),
    o = r(48440),
    s = r(40927),
    a = r.n(s);
  class l extends i.A {
    renderComponent() {
      return a().createElement("div", {
        style: {
          verticalAlign: "baseline"
        }
      }, a().createElement("div", {
        style: {
          display: "inline-block",
          height: 0,
          borderBottom: "1px solid",
          width: "100%"
        }
      }));
    }
    getCompositeBlockStyle() {
      return {
        display: "block"
      };
    }
  }
  class c extends o.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return l;
    }
    getLatextName() {
      return "\\horizontal-line";
    }
    getSymbol() {
      return "Horizontal Line";
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        elements: {}
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        insertInTextModeOnly: !0,
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol()
      });
    }
    toModel(e, t, r) {
      var n;
      return this.getModel();
    }
    toLatex(e, t, r) {
      return "";
    }
  }
  const d = new c();
};
