/* module 78423 — 393 chars */
module.exports = function (e, t, r) {
  var n = r(80812),
    i = r(32484),
    o = r(10752),
    s = Object.defineProperty;
  t.f = r(58219) ? Object.defineProperty : function e(t, r, a) {
    if (n(t), r = o(r, !0), n(a), i) try {
      return s(t, r, a);
    } catch (e) {}
    if ("get" in a || "set" in a) throw TypeError("Accessors not supported!");
    return "value" in a && (t[r] = a.value), t;
  };
};
