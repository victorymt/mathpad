/* module 85086 — 575 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => s
  });
  var n = r(90864);
  class i extends n.U {
    getSymbol() {
      return "∐";
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
      return "coprod";
    }
    getLatextName() {
      return "\\coprod";
    }
    getSymbol() {
      return "∐";
    }
  }
  const s = new o();
};
