/* module 3777 — 571 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    CloseDUpDownarrow: () => o,
    CloseDUpDownarrowSc: () => s,
    default: () => a
  });
  var n = r(69995),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "Updownarrow";
    }
    bracketText() {
      return "⇕";
    }
    delimiter() {
      return "close-Updownarrow";
    }
  }
  class s extends i.A {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\right\\Updownarrow";
    }
    getSymbol() {
      return "⇕";
    }
  }
  const a = new s();
};
