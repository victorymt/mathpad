/* module 45844 — 350 chars */
module.exports = function (e, t) {
  "use strict";

  var r;
  function n(e) {
    return function (t) {
      var r = t.dispatch,
        n = t.getState;
      return function (t) {
        return function (i) {
          return "function" == typeof i ? i(r, n, e) : t(i);
        };
      };
    };
  }
  r = !0;
  var i = n();
  i.withExtraArgument = n, t.A = i;
};
