/* module 99265 — 775 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.flattenNames = void 0;
  var n,
    i = h(r(85015)),
    o,
    s = h(r(33215)),
    a,
    l = h(r(11331)),
    c,
    d = h(r(55378));
  function h(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var p = t.flattenNames = function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      r = [];
    return (0, d.default)(t, function (t) {
      Array.isArray(t) ? e(t).map(function (e) {
        return r.push(e);
      }) : (0, l.default)(t) ? (0, s.default)(t, function (e, t) {
        !0 === e && r.push(t), r.push(t + "-" + e);
      }) : (0, i.default)(t) && r.push(t);
    }), r;
  };
  t.default = p;
};
