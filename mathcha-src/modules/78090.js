/* module 78090 — 476 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => s
  });
  var n = r(64467),
    i = r(72480);
  class o extends i.GroupSc {
    constructor() {
      super(...arguments), (0, n.A)(this, "isFlatten", !1);
    }
    getLatextName() {
      return "\\mathrel";
    }
    getSymbol() {
      return "mathrel";
    }
    toLatex(e, t, r) {
      return "\\mathrel{".concat(r.toLatexFromEditor(e.elements.value, t), "}");
    }
  }
  const s = new o();
};
