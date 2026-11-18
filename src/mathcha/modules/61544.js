/* module 61544 — 2625 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => d
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(48440),
    a = r(81999),
    l = r(87170),
    c = r(70224);
  class d extends s.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "category", "Relation"), (0, n.A)(this, "isArrowLike", !0);
    }
    getViewComponent() {
      return a.A;
    }
    getLatextName() {
      return "\\unknow";
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        keyInsertOnSelection: "top",
        elements: {
          top: {
            defaultHide: !0,
            onRemove: "only"
          },
          bottom: {
            defaultHide: !0,
            onRemove: "only"
          }
        }
      };
    }
    toModel(e, t, r) {
      var n = c.A.createComposite(this.getLatextName());
      return t && t.length > 0 && (n.elements.bottom = c.A.createEditorWith(t)), r && r.length > 0 && (n.elements.top = c.A.createEditorWith(r)), n;
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName(), this.getSymbol()],
        symbol: this.getSymbol(),
        height: 35,
        hasExpanded: !0,
        renderSymbol() {
          var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return o().createElement(l.A, {
            symbol: this.symbol,
            isExpanded: e
          });
        },
        description: this.getDescription(),
        filterTag: this.getFilterTag()
      });
    }
    getDescription() {}
    getFilterTag() {}
    getLatexNameToConvert() {
      return this.getLatextName();
    }
    toLatex(e, t, r) {
      if (this.isNotExistOrEmptyEditor(e.elements.top) && this.isNotExistOrEmptyEditor(e.elements.bottom)) return this.getLatexNameToConvert() + " ";
      var n = "",
        i = "\\x" + this.getLatexNameToConvert().substr(1);
      this.isNotExistOrEmptyEditor(e.elements.bottom) || (n = "[".concat(r.toLatexFromEditor(e.elements.bottom, t), "]"));
      var o = "{}";
      return this.isNotExistOrEmptyEditor(e.elements.top) || (o = "{".concat(r.toLatexFromEditor(e.elements.top, t), "}")), "".concat(i).concat(n).concat(o);
    }
    toMathml(e, t) {
      return e.elements.top || e.elements.bottom ? {
        type: "munderover",
        base: {
          type: "mo",
          value: this.getSymbol()
        },
        overscript: t.generateEditor(e.elements.top),
        underscript: t.generateEditor(e.elements.bottom)
      } : {
        type: "mo",
        value: this.getSymbol()
      };
    }
  }
};
