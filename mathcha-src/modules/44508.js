/* module 44508 — 359 chars */
module.exports = function (e, t, r) {
  "use strict";

  t.__esModule = !0;
  var n,
    i = o(r(89829));
  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  t.default = function (e, t, r) {
    return t in e ? (0, i.default)(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e;
  };
};
