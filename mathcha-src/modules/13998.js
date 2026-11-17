/* module 13998 — 140 chars */
module.exports = function (e) {
  "use strict";

  var t = /([A-Z])/g;
  function r(e) {
    return e.replace(t, "-$1").toLowerCase();
  }
  e.exports = r;
};
