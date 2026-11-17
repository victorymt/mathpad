/* module 3322 — 914 chars */
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
      return "←";
    }
    renderComposedArrow() {
      return i().createElement(o.A, {
        fixedContextHandler: this.context.fixedContextHandler,
        baseMathModeFontFamily: this.context.baseMathModeFontFamily,
        startChar: "⏮",
        repeatChar: "⏭"
      });
    }
    shiftSupSub() {
      return "sright-1";
    }
  }
  class c extends s.A {
    getViewComponent() {
      return l;
    }
    getLatextName() {
      return "\\leftarrow";
    }
    getSymbolInfo() {
      var e = super.getSymbolInfo();
      return e.shortcut = {
        char: "<-"
      }, e.description = "similar to: \\gets ", e;
    }
    getSymbol() {
      return "←";
    }
  }
  const d = new c();
};
