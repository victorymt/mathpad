/* module 86468 — 467 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => s
  });
  var n = r(98381);
  class i extends n.Y {
    getSymbol() {
      return "sup";
    }
    getFromClass() {
      return "from-sup";
    }
    getToClass() {
      return "to-sup";
    }
  }
  class o extends n.K {
    getViewComponent() {
      return i;
    }
    getLatextName() {
      return "\\sup";
    }
    getSymbol() {
      return "sup";
    }
  }
  const s = new o();
};
