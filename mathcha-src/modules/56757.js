/* module 56757 — 394 chars */
module.exports = function (e, t, r) {
  var n = r(91033),
    i = Math.max;
  function o(e, t, r) {
    return t = i(void 0 === t ? e.length - 1 : t, 0), function () {
      for (var o = arguments, s = -1, a = i(o.length - t, 0), l = Array(a); ++s < a;) l[s] = o[t + s];
      s = -1;
      for (var c = Array(t + 1); ++s < t;) c[s] = o[s];
      return c[t] = r(l), n(e, this, c);
    };
  }
  e.exports = o;
};
