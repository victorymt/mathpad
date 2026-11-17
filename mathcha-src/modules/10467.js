/* module 10467 — 611 chars */
module.exports = function (e, t, r) {
  "use strict";

  function n(e, t, r, n, i, o, s) {
    try {
      var a = e[o](s),
        l = a.value;
    } catch (e) {
      return void r(e);
    }
    a.done ? t(l) : Promise.resolve(l).then(n, i);
  }
  function i(e) {
    return function () {
      var t = this,
        r = arguments;
      return new Promise(function (i, o) {
        var s = e.apply(t, r);
        function a(e) {
          n(s, i, o, a, l, "next", e);
        }
        function l(e) {
          n(s, i, o, a, l, "throw", e);
        }
        a(void 0);
      });
    };
  }
  r.d(t, {
    A: () => i
  });
};
