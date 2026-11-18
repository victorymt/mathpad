/* module 1882 — 319 chars */
module.exports = function (e, t, r) {
  var n = r(72552),
    i = r(23805),
    o = "[object AsyncFunction]",
    s = "[object Function]",
    a = "[object GeneratorFunction]",
    l = "[object Proxy]";
  function c(e) {
    if (!i(e)) return !1;
    var t = n(e);
    return t == s || t == a || t == o || t == l;
  }
  e.exports = c;
};
