/* module 1647 — 550 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    DVerticalBarRight: () => o,
    DVerticalBarRightSc: () => s,
    default: () => a
  });
  var n = r(69995),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "Vert";
    }
    bracketText() {
      return "‖";
    }
    delimiter() {
      return "close-Vert";
    }
  }
  class s extends i.A {
    getSymbol() {
      return "‖";
    }
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\right\\Vert";
    }
  }
  const a = new s();
};
