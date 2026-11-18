/* module 67597 — 851 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => d
  });
  var n = r(61544),
    i = r(81999),
    o = r(40927),
    s = r.n(o),
    a = r(84881);
  class l extends i.A {
    getArrow() {
      return "⇔";
    }
    moreSpaceSupSub() {
      return "space-1";
    }
    renderComposedArrow() {
      return s().createElement(a.A, {
        fixedContextHandler: this.context.fixedContextHandler,
        baseMathModeFontFamily: this.context.baseMathModeFontFamily,
        startChar: "␤",
        repeatChar: "␦",
        endChar: "␥"
      });
    }
  }
  class c extends n.A {
    getViewComponent() {
      return l;
    }
    getLatextName() {
      return "\\xLeftrightarrow";
    }
    getLatexNameToConvert() {
      return "\\Leftrightarrow";
    }
    getSymbol() {
      return "⇔";
    }
  }
  const d = new c();
};
