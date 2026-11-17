/* module 60353 — 547 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    OpenDUparrow: () => o,
    OpenDUparrowSc: () => s,
    default: () => a
  });
  var n = r(74185),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "Uparrow";
    }
    bracketText() {
      return "⇑";
    }
    delimiter() {
      return "open-Uparrow";
    }
  }
  class s extends i.A {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\left\\Uparrow";
    }
    getSymbol() {
      return "⇑";
    }
  }
  const a = new s();
};
