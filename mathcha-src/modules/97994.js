/* module 97994 — 363 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => i
  });
  class n {
    round2(e) {
      return Math.round(100 * e) / 100;
    }
    floor2(e) {
      return Math.floor(100 * e) / 100;
    }
    round4(e) {
      return Math.round(1e4 * e) / 1e4;
    }
    rangeOverlap(e, t, r, n) {
      return !(t < r || n < e);
    }
  }
  const i = new n();
};
