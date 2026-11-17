/* module 47967 — 391 chars */
module.exports = function (e, t, r) {
  var n = r(4228),
    i = r(22956),
    o = r(83048),
    s = Object.defineProperty;
  t.f = r(1763) ? Object.defineProperty : function e(t, r, a) {
    if (n(t), r = o(r, !0), n(a), i) try {
      return s(t, r, a);
    } catch (e) {}
    if ("get" in a || "set" in a) throw TypeError("Accessors not supported!");
    return "value" in a && (t[r] = a.value), t;
  };
};
