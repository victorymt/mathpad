/* module 55007 — 295 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(37566),
    i = r(83846);
  class o extends i.A {
    getEditContentTopBottom() {
      var e = n.jS(this.getRootDom(), "editarea,editarea-block,editarea-line")[0];
      return this.getElementRect(e);
    }
  }
};
