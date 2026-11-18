/* module 52561 — 598 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    OpenDDownarrow: () => o,
    OpenDDownarrowSc: () => s,
    default: () => a
  });
  var n = r(74185),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "Downarrow";
    }
    bracketText() {
      return "⇓";
    }
    delimiter() {
      return "open-Downarrow";
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
      return "\\left\\Downarrow";
    }
    getSymbol() {
      return "⇓";
    }
  }
  const a = new s();
};
