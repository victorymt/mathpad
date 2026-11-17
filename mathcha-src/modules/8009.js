/* module 8009 — 2077 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    C: () => g,
    a: () => u
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(25742),
    a = r(3897),
    l = r(48440),
    c = r(53778),
    d = r(30803),
    h = r(58578),
    p = r(70224);
  class u extends s.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "constant-text"), (0, n.A)(this, "requestUpperHandled", !0);
    }
    renderText(e) {
      var t = c.A.fillMetricsForTextBlock(e, null),
        r = {
          fontFamily: h.A.mathFontFamilyFromKey("raw", this.context.baseMathModeFontFamily, "characters"),
          fontStyle: "normal"
        };
      return !t.haveUpperChar && this.props.stripInfo && this.props.stripInfo.stripUp && (r.marginTop = this.getRoundEmStr(a.A.upperSmallMarginTopEm)), !t.haveLowerChar && this.props.stripInfo && this.props.stripInfo.stripDown && (r.marginBottom = this.getRoundEmStr(a.A.lowerSmallMarginBottomEm)), o().createElement("constant-text", {
        style: r,
        class: this.props.customDataStr
      }, e);
    }
    renderComponent() {
      var e = this.props.data.text.substr(1);
      return this.renderText(e);
    }
  }
  class g extends l.A {
    constructor() {
      super(), this.isConstantText = !0, this.isOperatorName = !0, this.category = "OpOrFn";
    }
    getViewComponent() {
      return u;
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
        text: "",
        type: "composite",
        elements: {},
        id: d.w.nextId()
      };
      var n = this.getModel();
      return n.elements.value = p.A.createEditorWith(r), n;
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
};
