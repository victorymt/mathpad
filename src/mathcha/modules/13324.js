/* module 13324 — 568 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    RCeil: () => o,
    RCeilSc: () => s,
    default: () => a
  });
  var n = r(69995),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "ceil";
    }
    bracketText() {
      return "⌉";
    }
    delimiter() {
      return "close-ceil";
    }
  }
  class s extends i.A {
    constructor() {
      super();
    }
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\right\\rceil";
    }
    getSymbol() {
      return "⌉";
    }
  }
  const a = new s();
};
