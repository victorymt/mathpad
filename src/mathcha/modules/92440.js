/* module 92440 — 2038 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => h
  });
  var n = r(64467),
    i = r(25742),
    o = r(48440),
    s = r(40927),
    a = r.n(s),
    l = r(11713);
  class c extends i.A {
    renderSettings() {
      if (this.isSelected()) return a().createElement(l.m, {
        dzContainer: this.getDzContainer(),
        data: this.props.data,
        onDataChanged: this.props.onDataChanged
      });
    }
    getDisplayText() {
      switch (this.props.data.displayType || "1") {
        case "1":
          return "10";
        case "i":
          return "x";
        case "I":
          return "X";
      }
    }
    renderComponent() {
      return a().createElement("span", {
        className: "page-print-item"
      }, a().createElement("div", {
        className: "role-page-info-bg",
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          border: "1px solid lightgray"
        }
      }), a().createElement("span", {
        "data-display-type": this.props.data.displayType || "1",
        className: "role-page-count-value"
      }, this.getDisplayText()), a().createElement("span", {
        className: "page-print-item-hover"
      }, "Page Count"), this.renderSettings());
    }
  }
  class d extends o.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return c;
    }
    getLatextName() {
      return "\\page-count";
    }
    getSymbol() {
      return "Page Count";
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
  const h = new d();
};
