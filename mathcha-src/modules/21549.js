/* module 21549 — 404 chars */
module.exports = function (e, t, r) {
  var n = r(22032),
    i = r(63862),
    o = r(66721),
    s = r(12749),
    a = r(35749);
  function l(e) {
    var t = -1,
      r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r;) {
      var n = e[t];
      this.set(n[0], n[1]);
    }
  }
  l.prototype.clear = n, l.prototype.delete = i, l.prototype.get = o, l.prototype.has = s, l.prototype.set = a, e.exports = l;
};
