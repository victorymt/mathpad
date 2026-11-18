/* module 53661 — 403 chars */
module.exports = function (e, t, r) {
  var n = r(63040),
    i = r(17670),
    o = r(90289),
    s = r(4509),
    a = r(72949);
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
