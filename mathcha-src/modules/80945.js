/* module 80945 — 387 chars */
module.exports = function (e, t, r) {
  var n = r(80079),
    i = r(68223),
    o = r(53661),
    s = 200;
  function a(e, t) {
    var r = this.__data__;
    if (r instanceof n) {
      var s = r.__data__;
      if (!i || s.length < 199) return s.push([e, t]), this.size = ++r.size, this;
      r = this.__data__ = new o(s);
    }
    return r.set(e, t), this.size = r.size, this;
  }
  e.exports = a;
};
