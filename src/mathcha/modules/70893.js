/* module 70893 — 551 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    CloseDUparrow: () => o,
    CloseDUparrowSc: () => s,
    default: () => a
  });
  var n = r(69995),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "Uparrow";
    }
    bracketText() {
      return "⇑";
    }
    delimiter() {
      return "close-Uparrow";
    }
  }
  class s extends i.A {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\right\\Uparrow";
    }
    getSymbol() {
      return "⇑";
    }
  }
  const a = new s();
};
