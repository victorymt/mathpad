/* module 82577 — 565 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    OpenUpDownarrow: () => o,
    OpenUpDownarrowSc: () => s,
    default: () => a
  });
  var n = r(74185),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "updownarrow";
    }
    bracketText() {
      return "↕";
    }
    delimiter() {
      return "open-updownarrow";
    }
  }
  class s extends i.A {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\left\\updownarrow";
    }
    getSymbol() {
      return "↕";
    }
  }
  const a = new s();
};
