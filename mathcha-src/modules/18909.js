/* module 18909 — 391 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => s
  });
  var n = r(8009);
  class i extends n.a {
    renderComponent() {
      return this.renderText("mod");
    }
  }
  class o extends n.C {
    getViewComponent() {
      return i;
    }
    getLatextName() {
      return "\\bmod";
    }
    getSymbol() {
      return "bmod";
    }
  }
  const s = new o();
};
