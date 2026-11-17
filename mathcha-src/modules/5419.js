/* module 5419 — 631 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => s
  });
  var n = r(51164);
  class i extends n.s {
    getSymbol() {
      return "∫";
    }
    getFromClass() {
      return "from-int ";
    }
    getToClass() {
      return "to-int";
    }
  }
  class o extends n.O {
    getSymbolInfo() {
      var e = super.getSymbolInfo();
      return e.description = " Integral", e.searchText += e.description, e.filterTag = "integral", e;
    }
    getViewComponent() {
      return i;
    }
    getLatextName() {
      return "\\int";
    }
    getSymbol() {
      return "∫";
    }
  }
  const s = new o();
};
