/* module 86335 — 641 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => s
  });
  var n = r(51164);
  class i extends n.s {
    getSymbol() {
      return "∬";
    }
    getFromClass() {
      return "from-iint";
    }
    getToClass() {
      return "to-iint";
    }
  }
  class o extends n.O {
    getViewComponent() {
      return i;
    }
    getSymbolInfo() {
      var e = super.getSymbolInfo();
      return e.description = " Double Integral", e.searchText += e.description, e.filterTag = "integral ", e;
    }
    getLatextName() {
      return "\\iint";
    }
    getSymbol() {
      return "∬";
    }
  }
  const s = new o();
};
