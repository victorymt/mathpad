/* module 41721 — 967 chars */
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
      return "=";
    }
    moreSpaceSupSub() {
      return "space-1";
    }
    renderComposedArrow() {
      return i().createElement(o.A, {
        fixedContextHandler: this.context.fixedContextHandler,
        baseMathModeFontFamily: this.context.baseMathModeFontFamily,
        repeatChar: "␬"
      });
    }
  }
  class c extends s.A {
    getViewComponent() {
      return l;
    }
    getLatextName() {
      return "\\xlongequal";
    }
    getSymbol() {
      return "=";
    }
    getLatexNameToConvert() {
      return "\\longequal";
    }
    toLatex(e, t, r) {
      return this.isNotExistOrEmptyEditor(e.elements.top) && this.isNotExistOrEmptyEditor(e.elements.bottom) ? " = " : super.toLatex(e, t, r);
    }
  }
  const d = new c();
};
