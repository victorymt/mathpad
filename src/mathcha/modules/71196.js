/* module 71196 — 684 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => a
  });
  var n = r(64467),
    i = r(90864);
  class o extends i.U {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "summation-like-symbol limit-type");
    }
    getSymbol() {
      return "∑";
    }
    getEditorFromToMarginLeft() {
      return "lef-1-margin";
    }
    getToClass() {
      return "to-summation";
    }
  }
  class s extends i.B {
    getViewComponent() {
      return o;
    }
    getFilterTag() {
      return "summation";
    }
    getLatextName() {
      return "\\sum";
    }
    getSymbol() {
      return "∑";
    }
  }
  const a = new s();
};
