/* module 85688 — 539 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    VerticalBarLeft: () => o,
    VerticalBarLeftSc: () => s,
    default: () => a
  });
  var n = r(74185),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "vert";
    }
    bracketText() {
      return "|";
    }
    delimiter() {
      return "open-vert";
    }
  }
  class s extends i.A {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\left|";
    }
    getSymbol() {
      return "|";
    }
  }
  const a = new s();
};
