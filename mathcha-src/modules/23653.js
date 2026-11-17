/* module 23653 — 1686 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => p
  });
  var n = r(64467),
    i = r(25742),
    o = r(48440),
    s = r(40927),
    a = r.n(s),
    l = r(32485),
    c = r.n(l);
  class d extends i.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {});
    }
    getClassName() {
      return c()(super.getClassName(), "print-remove-background", "line-break-symbol");
    }
    renderComponent() {
      return [a().createElement("span", {
        key: "s1",
        style: {
          width: 0,
          display: "inline-block"
        }
      }), a().createElement("br", {
        key: "s2"
      }), a().createElement("span", {
        key: "23",
        className: "new-line-char",
        style: {
          whiteSpace: "pre",
          display: "inline-block",
          width: 0
        }
      })];
    }
    getCompositeBlockStyle() {
      return {
        display: "inline"
      };
    }
  }
  class h extends o.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return d;
    }
    getLatextName() {
      return "\\line-break";
    }
    getSymbol() {
      return "Line Break";
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
  const p = new h();
};
