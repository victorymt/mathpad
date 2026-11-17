/* module 51638 — 546 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    DVerticalBarLeft: () => o,
    DVerticalBarLeftSc: () => s,
    default: () => a
  });
  var n = r(74185),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "Vert";
    }
    bracketText() {
      return "‖";
    }
    delimiter() {
      return "open-Vert";
    }
  }
  class s extends i.A {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\left\\Vert";
    }
    getSymbol() {
      return "‖";
    }
  }
  const a = new s();
};
