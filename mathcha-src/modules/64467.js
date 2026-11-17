/* module 64467 — 252 chars */
module.exports = function (e, t, r) {
  "use strict";

  function n(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e;
  }
  r.d(t, {
    A: () => n
  });
};
