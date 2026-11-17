/* module 7289 — 769 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    FN: () => l,
    QQ: () => a,
    Ro: () => o
  });
  var n = r(2543),
    i = r.n(n),
    o = function e(t) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 ? arguments[2] : void 0;
      return void 0 !== n ? a(s(t, r), n) : s(t, r);
    },
    s = (e, t) => {
      if (i().isNumber(e)) return e;
      var r = Number.parseFloat(e);
      return Number.isNaN(r) ? t : r;
    },
    a = (e, t) => +e.toFixed(t),
    l = e => {
      if ("" === e || null == e) return !1;
      if (i().isNumber(e)) return !0;
      if ("string" == typeof e && e.endsWith(".")) return !1;
      var t = Number.parseFloat(e);
      return !Number.isNaN(t);
    };
};
