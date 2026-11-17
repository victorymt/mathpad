/* module 33272 — 530 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(84258);
  class i {
    skewControlDistance() {
      return n.A.isMobileOrTablet() ? 26 : 12;
    }
    rotateControlDistance() {
      return n.A.isMobileOrTablet() ? 28 : 20;
    }
    hiddenSelectLineWidth() {
      return n.A.isMobileOrTablet() ? 10 : 6;
    }
    getRotationRadius() {
      return n.A.isMobileOrTablet() ? 7 : 5;
    }
    getRectControlSize() {
      return n.A.isMobileOrTablet() ? 16 : 8;
    }
  }
  const o = new i();
};
