/* module 90646 — 545 chars */
module.exports = function (e) {
  "use strict";

  var t = function e(t) {};
  function r(e, t, r, n, i, o, s, a) {
    if (!e) {
      var l;
      if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
        var c = [r, n, i, o, s, a],
          d = 0;
        (l = new Error(t.replace(/%s/g, function () {
          return c[d++];
        }))).name = "Invariant Violation";
      }
      throw l.framesToPop = 1, l;
    }
  }
  e.exports = r;
};
