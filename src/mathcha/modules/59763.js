/* module 59763 — 925 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => d
  });
  var n = r(40927),
    i = r.n(n),
    o = r(84881),
    s = r(61544),
    a = r(81999);
  class l extends a.A {
    getArrow() {
      return "↼";
    }
    shiftSupSub() {
      return "sright-1";
    }
    moreSpaceSupSub() {
      return "lower-space-1";
    }
    renderComposedArrow() {
      return i().createElement(o.A, {
        fixedContextHandler: this.context.fixedContextHandler,
        baseMathModeFontFamily: this.context.baseMathModeFontFamily,
        startChar: "␸",
        repeatChar: "␺",
        topEm: this.getLowerKindTopEm()
      });
    }
  }
  class c extends s.A {
    getViewComponent() {
      return l;
    }
    getLatextName() {
      return "\\xleftharpoonup";
    }
    getSymbol() {
      return "↼";
    }
    getLatexNameToConvert() {
      return "\\leftharpoonup";
    }
  }
  const d = new c();
};
