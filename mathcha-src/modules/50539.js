/* module 50539 — 423 chars */
module.exports = function (e, t, r) {
  "use strict";

  t.__esModule = !0;
  var n,
    i = o(r(97479));
  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  t.default = function (e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" !== (void 0 === t ? "undefined" : (0, i.default)(t)) && "function" != typeof t ? e : t;
  };
};
