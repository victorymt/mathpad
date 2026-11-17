/* module 53576 — 516 chars */
module.exports = function (e) {
  "use strict";

  function t(e) {
    for (var t = arguments.length - 1, r = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, n = 0; n < t; n++) r += "&args[]=" + encodeURIComponent(arguments[n + 1]);
    r += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    var i = new Error(r);
    throw i.name = "Invariant Violation", i.framesToPop = 1, i;
  }
  e.exports = t;
};
