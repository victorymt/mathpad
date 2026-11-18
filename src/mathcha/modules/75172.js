/* module 75172 — 998 chars */
module.exports = function (e, t, r) {
  var n = r(19191)("meta"),
    i = r(24401),
    o = r(75509),
    s = r(78423).f,
    a = 0,
    l = Object.isExtensible || function () {
      return !0;
    },
    c = !r(81984)(function () {
      return l(Object.preventExtensions({}));
    }),
    d = function (e) {
      s(e, n, {
        value: {
          i: "O" + ++a,
          w: {}
        }
      });
    },
    h = function (e, t) {
      if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
      if (!o(e, n)) {
        if (!l(e)) return "F";
        if (!t) return "E";
        d(e);
      }
      return e[n].i;
    },
    p = function (e, t) {
      if (!o(e, n)) {
        if (!l(e)) return !0;
        if (!t) return !1;
        d(e);
      }
      return e[n].w;
    },
    u = function (e) {
      return c && g.NEED && l(e) && !o(e, n) && d(e), e;
    },
    g = e.exports = {
      KEY: n,
      NEED: !1,
      fastKey: h,
      getWeak: p,
      onFreeze: u
    };
};
