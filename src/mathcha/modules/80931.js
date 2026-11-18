/* module 80931 — 1173 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => a
  });
  var n = r(64467),
    i = r(48440),
    o = r(30803),
    s = r(70224);
  class a extends i.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "isFlatten", void 0);
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        keyInsertOnSelection: "value",
        elements: {
          value: {
            onRemove: "all"
          }
        }
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol()
      });
    }
    toModel(e, t, r) {
      if (this.isFlatten) {
        if (null == r || 0 == r.length) return {
          id: o.w.nextId(),
          text: ""
        };
        if (r && 1 == r.length) return r[0].blocks;
      }
      var n = this.getModel();
      return null == r || 0 == r.length ? n.elements.value = s.A.createEmptyEditor() : n.elements.value = s.A.createEditorWith(r), n;
    }
    toLatex(e, t, r) {
      return "".concat(this.getLatextName(), "{").concat(r.toLatexFromEditor(e.elements.value, t), "}");
    }
  }
};
