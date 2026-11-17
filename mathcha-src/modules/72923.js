/* module 72923 — 602 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    CloseDDownarrow: () => o,
    CloseDDownarrowSc: () => s,
    default: () => a
  });
  var n = r(69995),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "Downarrow";
    }
    bracketText() {
      return "⇓";
    }
    delimiter() {
      return "close-Downarrow";
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
      return "\\right\\Downarrow";
    }
    getSymbol() {
      return "⇓";
    }
  }
  const a = new s();
};
