/* module 72902 — 532 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    RFloor: () => o,
    RFloorSc: () => s,
    default: () => a
  });
  var n = r(69995),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "floor";
    }
    bracketText() {
      return "⌋";
    }
    delimiter() {
      return "close-floor";
    }
  }
  class s extends i.A {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\right\\rfloor";
    }
    getSymbol() {
      return "⌋";
    }
  }
  const a = new s();
};
