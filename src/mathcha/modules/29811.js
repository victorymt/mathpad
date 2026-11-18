/* module 29811 — 547 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => a
  });
  var n = r(61544),
    i = r(81999);
  class o extends i.A {
    getArrow() {
      return "→";
    }
  }
  class s extends n.A {
    getViewComponent() {
      return o;
    }
    getSymbolInfo() {
      var e = super.getSymbolInfo();
      return e.shortcut = {
        char: "->"
      }, e.names = e.names.concat(["\\to"]), e;
    }
    getLatextName() {
      return "\\rightarrow";
    }
    getSymbol() {
      return "→";
    }
  }
  const a = new s();
};
