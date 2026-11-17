/* module 73687 — 948 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => h
  });
  var n = r(19340),
    i = r(61544),
    o = r(81999),
    s = r(40927),
    a = r.n(s),
    l = r(84881);
  class c extends o.A {
    getArrow() {
      return "⇒";
    }
    moreSpaceSupSub() {
      return "space-1";
    }
    shiftSupSub() {
      if (!(0, n.zN)(this.getMathFont()).arrows.centerDoubleRight) return "sleft-1";
    }
    renderComposedArrow() {
      return a().createElement(l.A, {
        fixedContextHandler: this.context.fixedContextHandler,
        baseMathModeFontFamily: this.context.baseMathModeFontFamily,
        repeatChar: "␦",
        endChar: "␥"
      });
    }
  }
  class d extends i.A {
    getViewComponent() {
      return c;
    }
    getLatextName() {
      return "\\xRightarrow";
    }
    getLatexNameToConvert() {
      return "\\Rightarrow";
    }
    getSymbol() {
      return "⇒";
    }
  }
  const h = new d();
};
