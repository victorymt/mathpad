/* module 94793 — 189 chars */
module.exports = function (e) {
  "use strict";

  function t(e) {
    var t = {};
    return function (r) {
      return t.hasOwnProperty(r) || (t[r] = e.call(this, r)), t[r];
    };
  }
  e.exports = t;
};
