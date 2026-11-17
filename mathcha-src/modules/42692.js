/* module 42692 — 530 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    LFloor: () => o,
    LFloorSc: () => s,
    default: () => a
  });
  var n = r(74185),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "floor";
    }
    bracketText() {
      return "⌊";
    }
    delimiter() {
      return "open-floor";
    }
  }
  class s extends i.A {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\left\\lfloor";
    }
    getSymbol() {
      return "⌊";
    }
  }
  const a = new s();
};
