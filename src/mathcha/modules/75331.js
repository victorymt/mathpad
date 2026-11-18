/* module 75331 — 507 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    j: () => i
  });
  class n {
    getXStart(e, t, r) {
      return {
        x: e.x,
        y: t + e.y + r.y
      };
    }
    getXMinMax(e, t, r) {
      return {
        min: -e.x / t,
        max: (r - e.x) / t
      };
    }
    getYMinMax(e, t, r) {
      return {
        min: +e.y / t,
        max: (r + e.y) / t
      };
    }
    getYTickStart(e, t) {
      return {
        x: e.x + t.x,
        y: e.y
      };
    }
  }
  var i = new n();
};
