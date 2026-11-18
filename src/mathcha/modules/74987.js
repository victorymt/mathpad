/* module 74987 — 1490 chars */
module.exports = function (e) {
  function t(e, t) {
    var r = t && t.cache ? t.cache : h,
      n = t && t.serializer ? t.serializer : c,
      i;
    return (t && t.strategy ? t.strategy : s)(e, {
      cache: r,
      serializer: n
    });
  }
  function r(e) {
    return null == e || "number" == typeof e || "boolean" == typeof e;
  }
  function n(e, t, n, i) {
    var o = r(i) ? i : n(i),
      s = t.get(o);
    return void 0 === s && (s = e.call(this, i), t.set(o, s)), s;
  }
  function i(e, t, r) {
    var n = Array.prototype.slice.call(arguments, 3),
      i = r(n),
      o = t.get(i);
    return void 0 === o && (o = e.apply(this, n), t.set(i, o)), o;
  }
  function o(e, t, r, n, i) {
    return r.bind(t, e, n, i);
  }
  function s(e, t) {
    var r;
    return o(e, this, 1 === e.length ? n : i, t.cache.create(), t.serializer);
  }
  function a(e, t) {
    var r;
    return o(e, this, i, t.cache.create(), t.serializer);
  }
  function l(e, t) {
    var r;
    return o(e, this, n, t.cache.create(), t.serializer);
  }
  function c() {
    return JSON.stringify(arguments);
  }
  function d() {
    this.cache = Object.create(null);
  }
  d.prototype.has = function (e) {
    return e in this.cache;
  }, d.prototype.get = function (e) {
    return this.cache[e];
  }, d.prototype.set = function (e, t) {
    this.cache[e] = t;
  };
  var h = {
    create: function e() {
      return new d();
    }
  };
  e.exports = t, e.exports.strategies = {
    variadic: a,
    monadic: l
  };
};
