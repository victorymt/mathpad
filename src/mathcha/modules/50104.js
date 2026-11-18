/* module 50104 — 502 chars */
module.exports = function (e, t, r) {
  var n = r(53661),
    i = "Expected a function";
  function o(e, t) {
    if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(i);
    var r = function () {
      var n = arguments,
        i = t ? t.apply(this, n) : n[0],
        o = r.cache;
      if (o.has(i)) return o.get(i);
      var s = e.apply(this, n);
      return r.cache = o.set(i, s) || o, s;
    };
    return r.cache = new (o.Cache || n)(), r;
  }
  o.Cache = n, e.exports = o;
};
