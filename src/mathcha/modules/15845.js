/* module 15845 — 569 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    CloseUpDownarrow: () => o,
    CloseUpDownarrowSc: () => s,
    default: () => a
  });
  var n = r(69995),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "updownarrow";
    }
    bracketText() {
      return "↕";
    }
    delimiter() {
      return "close-updownarrow";
    }
  }
  class s extends i.A {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\right\\updownarrow";
    }
    getSymbol() {
      return "↕";
    }
  }
  const a = new s();
};
