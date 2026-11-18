/* module 50834 — 874 chars */
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
      return "⇀";
    }
    moreSpaceSupSub() {
      return "lower-space-1";
    }
    renderComposedArrow() {
      return i().createElement(o.A, {
        fixedContextHandler: this.context.fixedContextHandler,
        baseMathModeFontFamily: this.context.baseMathModeFontFamily,
        repeatChar: "␺",
        endChar: "␹",
        topEm: this.getLowerKindTopEm()
      });
    }
  }
  class c extends s.A {
    getViewComponent() {
      return l;
    }
    getLatextName() {
      return "\\xrightharpoonup";
    }
    getSymbol() {
      return "⇀";
    }
    getLatexNameToConvert() {
      return "\\rightharpoonup";
    }
  }
  const d = new c();
};
