/* module 83905 — 559 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    CloseDownarrow: () => o,
    CloseDownarrowSc: () => s,
    default: () => a
  });
  var n = r(69995),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "downarrow";
    }
    bracketText() {
      return "↓";
    }
    delimiter() {
      return "close-downarrow";
    }
  }
  class s extends i.A {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\right\\downarrow";
    }
    getSymbol() {
      return "↓";
    }
  }
  const a = new s();
};
