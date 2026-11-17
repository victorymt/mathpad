/* module 8748 — 171 chars */
module.exports = function (e) {
  "use strict";

  var t = /-(.)/g;
  function r(e) {
    return e.replace(t, function (e, t) {
      return t.toUpperCase();
    });
  }
  e.exports = r;
};
