/* module 75804 — 532 chars */
module.exports = function (e) {
  "use strict";

  function t(e) {
    var t,
      r = {
        "=": "=0",
        ":": "=2"
      },
      n;
    return "$" + ("" + e).replace(/[=:]/g, function (e) {
      return r[e];
    });
  }
  function r(e) {
    var t = /(=0|=2)/g,
      r = {
        "=0": "=",
        "=2": ":"
      },
      n;
    return ("" + ("." === e[0] && "$" === e[1] ? e.substring(2) : e.substring(1))).replace(t, function (e) {
      return r[e];
    });
  }
  var n = {
    escape: t,
    unescape: r
  };
  e.exports = n;
};
