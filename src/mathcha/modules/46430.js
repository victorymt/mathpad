/* module 46430 — 525 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    LCeil: () => o,
    LCeilSc: () => s,
    default: () => a
  });
  var n = r(74185),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "ceil";
    }
    bracketText() {
      return "⌈";
    }
    delimiter() {
      return "open-ceil";
    }
  }
  class s extends i.A {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\left\\lceil";
    }
    getSymbol() {
      return "⌈";
    }
  }
  const a = new s();
};
