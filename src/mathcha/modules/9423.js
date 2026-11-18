/* module 9423 — 406 chars */
module.exports = function (e, t, r) {
  "use strict";

  function n(e) {
    var t,
      r = e.Symbol;
    return "function" == typeof r ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t;
  }
  var i, o;
  r.d(t, {
    A: () => s
  }), e = r.hmd(e);
  const s = n(i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : e);
};
