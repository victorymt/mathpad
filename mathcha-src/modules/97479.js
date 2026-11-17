/* module 97479 — 792 chars */
module.exports = function (e, t, r) {
  "use strict";

  t.__esModule = !0;
  var n,
    i = l(r(66327)),
    o,
    s = l(r(75522)),
    a = "function" == typeof s.default && "symbol" == typeof i.default ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : typeof e;
    };
  function l(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  t.default = "function" == typeof s.default && "symbol" === a(i.default) ? function (e) {
    return void 0 === e ? "undefined" : a(e);
  } : function (e) {
    return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : void 0 === e ? "undefined" : a(e);
  };
};
