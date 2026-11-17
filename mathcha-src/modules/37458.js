/* module 37458 — 310 chars */
module.exports = function (e) {
  "use strict";

  function t(e) {
    return e.Window && e instanceof e.Window ? {
      x: e.pageXOffset || e.document.documentElement.scrollLeft,
      y: e.pageYOffset || e.document.documentElement.scrollTop
    } : {
      x: e.scrollLeft,
      y: e.scrollTop
    };
  }
  e.exports = t;
};
