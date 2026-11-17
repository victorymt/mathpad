/* module 80079 — 404 chars */
module.exports = function (e, t, r) {
  var n = r(63702),
    i = r(70080),
    o = r(24739),
    s = r(48655),
    a = r(31175);
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
