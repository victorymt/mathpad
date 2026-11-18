/* module 76437 — 567 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    OpenDUpDownarrow: () => o,
    OpenDUpDownarrowSc: () => s,
    default: () => a
  });
  var n = r(74185),
    i = r(52431);
  class o extends n.A {
    bkType() {
      return "Updownarrow";
    }
    bracketText() {
      return "⇕";
    }
    delimiter() {
      return "open-Updownarrow";
    }
  }
  class s extends i.A {
    getViewComponent() {
      return o;
    }
    getLatextName() {
      return "\\left\\Updownarrow";
    }
    getSymbol() {
      return "⇕";
    }
  }
  const a = new s();
};
