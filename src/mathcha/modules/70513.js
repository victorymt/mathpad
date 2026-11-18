/* module 70513 — 543 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    VerticalBarRight: () => o,
    VerticalBarRightSc: () => s,
    default: () => a
  });
  var n = r(69995),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "vert";
    }
    bracketText() {
      return "|";
    }
    delimiter() {
      return "close-vert";
    }
  }
  class s extends i.A {
    getSymbol() {
      return "|";
    }
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\right|";
    }
  }
  const a = new s();
};
