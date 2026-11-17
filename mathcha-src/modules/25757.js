/* module 25757 — 549 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    CloseUparrow: () => o,
    CloseUparrowSc: () => s,
    default: () => a
  });
  var n = r(69995),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "uparrow";
    }
    bracketText() {
      return "↑";
    }
    delimiter() {
      return "close-uparrow";
    }
  }
  class s extends i.A {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\right\\uparrow";
    }
    getSymbol() {
      return "↑";
    }
  }
  const a = new s();
};
