/* module 83793 — 545 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    OpenUparrow: () => o,
    OpenUparrowSc: () => s,
    default: () => a
  });
  var n = r(74185),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "uparrow";
    }
    bracketText() {
      return "↑";
    }
    delimiter() {
      return "open-uparrow";
    }
  }
  class s extends i.A {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\left\\uparrow";
    }
    getSymbol() {
      return "↑";
    }
  }
  const a = new s();
};
