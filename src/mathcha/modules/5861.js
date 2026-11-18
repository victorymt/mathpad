/* module 5861 — 868 chars */
module.exports = function (e, t, r) {
  var n = r(55580),
    i = r(68223),
    o = r(32804),
    s = r(76545),
    a = r(28303),
    l = r(72552),
    c = r(47473),
    d = "[object Map]",
    h = "[object Object]",
    p = "[object Promise]",
    u = "[object Set]",
    g = "[object WeakMap]",
    m = "[object DataView]",
    f = c(n),
    y = c(i),
    v = c(o),
    b = c(s),
    x = c(a),
    C = l;
  (n && C(new n(new ArrayBuffer(1))) != m || i && C(new i()) != d || o && C(o.resolve()) != p || s && C(new s()) != u || a && C(new a()) != g) && (C = function (e) {
    var t = l(e),
      r = t == h ? e.constructor : void 0,
      n = r ? c(r) : "";
    if (n) switch (n) {
      case f:
        return m;
      case y:
        return d;
      case v:
        return p;
      case b:
        return u;
      case x:
        return g;
    }
    return t;
  }), e.exports = C;
};
