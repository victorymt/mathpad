/* module 60548 — 836 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => s
  });
  var n = r(51164);
  class i extends n.s {
    getSymbol() {
      return "∯";
    }
    getFromClass() {
      return "from-oiint";
    }
    getToClass() {
      return "to-oiint";
    }
  }
  class o extends n.O {
    getViewComponent() {
      return i;
    }
    getLatextName() {
      return "\\oiint";
    }
    getSymbol() {
      return "∯";
    }
    getSymbolInfo() {
      var e = super.getSymbolInfo();
      return e.description = " Double Contour Integral", e.searchText += e.description, e.filterTag = "integral  o", e;
    }
    toLatex(e, t, r, n) {
      return "mathjax" == t.mathType ? (t.convertedInfo.addUnSupportedLatex(this.getLatextName()), this.getLatextName()) : super.toLatex(e, t, r, n);
    }
  }
  const s = new o();
};
