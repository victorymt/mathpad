/* module 38329 — 307 chars */
module.exports = function (e, t, r) {
  var n = r(64894);
  function i(e, t) {
    return function (r, i) {
      if (null == r) return r;
      if (!n(r)) return e(r, i);
      for (var o = r.length, s = t ? o : -1, a = Object(r); (t ? s-- : ++s < o) && !1 !== i(a[s], s, a););
      return r;
    };
  }
  e.exports = i;
};
