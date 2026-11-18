/* module 73922 — 550 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => l
  });
  var n = r(40927),
    i = r.n(n),
    o = r(98381);
  class s extends o.Y {
    getSymbol() {
      return i().createElement("span", null, "lim sup");
    }
    getFromClass() {
      return "from-limsup";
    }
    getToClass() {
      return "to-limsup";
    }
  }
  class a extends o.K {
    getViewComponent() {
      return s;
    }
    getLatextName() {
      return "\\limsup";
    }
    getSymbol() {
      return "limsup";
    }
  }
  const l = new a();
};
