/* module 77396 — 571 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => s
  });
  var n = r(90864);
  class i extends n.U {
    getSymbol() {
      return "∏";
    }
    getEditorFromToMarginLeft() {
      return "";
    }
    getToClass() {
      return "to-prod";
    }
    getFromClass() {
      return "from-prod";
    }
  }
  class o extends n.B {
    getViewComponent() {
      return i;
    }
    getFilterTag() {
      return "prod";
    }
    getLatextName() {
      return "\\prod";
    }
    getSymbol() {
      return "∏";
    }
  }
  const s = new o();
};
