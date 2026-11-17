/* module 38859 — 290 chars */
module.exports = function (e, t, r) {
  var n = r(53661),
    i = r(31380),
    o = r(51459);
  function s(e) {
    var t = -1,
      r = null == e ? 0 : e.length;
    for (this.__data__ = new n(); ++t < r;) this.add(e[t]);
  }
  s.prototype.add = s.prototype.push = i, s.prototype.has = o, e.exports = s;
};
