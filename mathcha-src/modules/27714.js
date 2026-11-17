/* module 27714 — 682 chars */
module.exports = function (e, t, r) {
  "use strict";

  t.__esModule = !0;
  var n,
    i = c(r(65971)),
    o,
    s = c(r(11156)),
    a,
    l = c(r(97479));
  function c(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  t.default = function (e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, l.default)(t)));
    e.prototype = (0, s.default)(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (i.default ? (0, i.default)(e, t) : e.__proto__ = t);
  };
};
