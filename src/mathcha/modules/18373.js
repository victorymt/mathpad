/* module 18373 — 643 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => s
  });
  var n = r(51164);
  class i extends n.s {
    getSymbol() {
      return "∮";
    }
    getFromClass() {
      return "from-oint";
    }
    getToClass() {
      return "to-oint";
    }
  }
  class o extends n.O {
    getViewComponent() {
      return i;
    }
    getSymbolInfo() {
      var e = super.getSymbolInfo();
      return e.description = " Contour Integral", e.searchText += e.description, e.filterTag = "integral o", e;
    }
    getLatextName() {
      return "\\oint";
    }
    getSymbol() {
      return "∮";
    }
  }
  const s = new o();
};
