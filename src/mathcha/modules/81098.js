/* module 81098 — 2164 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    Log10: () => p,
    Log10Sc: () => u,
    default: () => g
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(25742),
    a = r(3897),
    l = r(48440),
    c = r(53778),
    d = r(30803),
    h = r(70224);
  class p extends s.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "constant-text"), (0, n.A)(this, "requestUpperHandled", !0);
    }
    shouldComponentUpdate() {
      return !1;
    }
    renderText(e) {
      var t = c.A.fillMetricsForTextBlock(e, null),
        r = {};
      return !t.haveUpperChar && this.props.stripInfo && this.props.stripInfo.stripUp && (r.marginTop = this.getRoundEmStr(a.A.upperSmallMarginTopEm)), !t.haveLowerChar && this.props.stripInfo && this.props.stripInfo.stripDown && (r.marginBottom = this.getRoundEmStr(a.A.lowerSmallMarginBottomEm)), o().createElement("constant-text", {
        style: r
      }, e, o().createElement("ct-index", {
        style: {
          fontSize: "0.75em",
          verticalAlign: "-0.4em",
          paddingLeft: "0.1em"
        }
      }, "10"));
    }
    renderComponent() {
      return this.renderText("log");
    }
  }
  class u extends l.A {
    constructor() {
      super(), this.isConstantText = !0, this.isOperatorName = !0, this.category = "OpOrFn";
    }
    getViewComponent() {
      return p;
    }
    getLatextName() {
      return "\\log10";
    }
    getSymbol() {
      return "log10";
    }
    getModel() {
      return this.getModelFromStructure({}, this.getLatextName());
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol()
      });
    }
    toModel(e, t, r) {
      if (r && 0 == r.length) return {
        id: d.w.nextId(),
        text: ""
      };
      var n = this.getModel();
      return n.elements.value = h.A.createEditorWith(r), n;
    }
    toLatex() {
      return this.getLatextName();
    }
    toMathml(e, t) {
      return {
        type: "mi",
        value: this.getSymbol()
      };
    }
  }
  const g = new u();
};
