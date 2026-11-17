/* module 96301 — 833 chars */
module.exports = function (e, t, r) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n,
    i = o(r(10508));
  function o(e) {
    return e && e.__esModule ? e : {
      default: e
    };
  }
  function s() {
    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
      t = {};
    return function (r) {
      var n = r.callback,
        o = r.indices,
        s = (0, i.default)(o),
        a = !e || s.every(function (e) {
          var t = o[e];
          return Array.isArray(t) ? t.length > 0 : t >= 0;
        }),
        l = s.length !== (0, i.default)(t).length || s.some(function (e) {
          var r = t[e],
            n = o[e];
          return Array.isArray(n) ? r.join(",") !== n.join(",") : r !== n;
        });
      t = o, a && l && n(o);
    };
  }
  t.default = s;
};
