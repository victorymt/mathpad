/* module 70080 — 264 chars */
module.exports = function (e, t, r) {
  var n = r(26025),
    i,
    o = Array.prototype.splice;
  function s(e) {
    var t = this.__data__,
      r = n(t, e),
      i;
    return !(r < 0) && (r == t.length - 1 ? t.pop() : o.call(t, r, 1), --this.size, !0);
  }
  e.exports = s;
};
