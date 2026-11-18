/* module 21986 — 1381 chars */
module.exports = function (e, t, r) {
  var n = r(51873),
    i = r(37828),
    o = r(75288),
    s = r(25911),
    a = r(20317),
    l = r(84247),
    c = 1,
    d = 2,
    h = "[object Boolean]",
    p = "[object Date]",
    u = "[object Error]",
    g = "[object Map]",
    m = "[object Number]",
    f = "[object RegExp]",
    y = "[object Set]",
    v = "[object String]",
    b = "[object Symbol]",
    x = "[object ArrayBuffer]",
    C = "[object DataView]",
    S = n ? n.prototype : void 0,
    A = S ? S.valueOf : void 0;
  function w(e, t, r, n, c, d, S) {
    switch (r) {
      case C:
        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
        e = e.buffer, t = t.buffer;
      case x:
        return !(e.byteLength != t.byteLength || !d(new i(e), new i(t)));
      case h:
      case p:
      case m:
        return o(+e, +t);
      case u:
        return e.name == t.name && e.message == t.message;
      case f:
      case v:
        return e == t + "";
      case g:
        var w = a;
      case y:
        var E = 1 & n;
        if (w || (w = l), e.size != t.size && !E) return !1;
        var k = S.get(e);
        if (k) return k == t;
        n |= 2, S.set(e, t);
        var O = s(w(e), w(t), n, c, d, S);
        return S.delete(e), O;
      case b:
        if (A) return A.call(e) == A.call(t);
    }
    return !1;
  }
  e.exports = w;
};
