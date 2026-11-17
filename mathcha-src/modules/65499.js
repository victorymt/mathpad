/* module 65499 — 555 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    OpenDownarrow: () => o,
    OpenDownarrowSc: () => s,
    default: () => a
  });
  var n = r(74185),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "downarrow";
    }
    bracketText() {
      return "↓";
    }
    delimiter() {
      return "open-downarrow";
    }
  }
  class s extends i.A {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\left\\downarrow";
    }
    getSymbol() {
      return "↓";
    }
  }
  const a = new s();
};
