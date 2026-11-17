/* module 76203 — 893 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.mergeClasses = void 0;
  var n,
    i = l(r(33215)),
    o,
    s = l(r(88055)),
    a = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    };
  function l(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  var c = t.mergeClasses = function e(t) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      n = t.default && (0, s.default)(t.default) || {};
    return r.map(function (e) {
      var r = t[e];
      return r && (0, i.default)(r, function (e, t) {
        n[t] || (n[t] = {}), n[t] = a({}, n[t], r[t]);
      }), e;
    }), n;
  };
  t.default = c;
};
