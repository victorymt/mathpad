/* module 88839 — 1536 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(74742),
    i = r(88535),
    o = r(61331),
    s = r(2677),
    a = r(20210),
    l = r(48248),
    c = r(1356),
    d = r(66123),
    h = r(30254)("iterator"),
    p = !([].keys && "next" in [].keys()),
    u = "@@iterator",
    g = "keys",
    m = "values",
    f = function () {
      return this;
    };
  e.exports = function (e, t, r, y, v, b, x) {
    l(r, t, y);
    var C = function (e) {
        if (!p && e in E) return E[e];
        switch (e) {
          case g:
            return function t() {
              return new r(this, e);
            };
          case m:
            return function t() {
              return new r(this, e);
            };
        }
        return function t() {
          return new r(this, e);
        };
      },
      S = t + " Iterator",
      A = v == m,
      w = !1,
      E = e.prototype,
      k = E[h] || E[u] || v && E[v],
      O = k || C(v),
      D = v ? A ? C("entries") : O : void 0,
      P = "Array" == t && E.entries || k,
      M,
      I,
      T;
    if (P && (T = d(P.call(new e()))) !== Object.prototype && T.next && (c(T, S, !0), n || "function" == typeof T[h] || s(T, h, f)), A && k && k.name !== m && (w = !0, O = function e() {
      return k.call(this);
    }), n && !x || !p && !w && E[h] || s(E, h, O), a[t] = O, a[S] = f, v) if (M = {
      values: A ? O : C(m),
      keys: b ? O : C(g),
      entries: D
    }, x) for (I in M) I in E || o(E, I, M[I]);else i(i.P + i.F * (p || w), t, M);
    return M;
  };
};
