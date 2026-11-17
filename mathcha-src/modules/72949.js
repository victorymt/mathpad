/* module 72949 — 190 chars */
module.exports = function (e, t, r) {
  var n = r(12651);
  function i(e, t) {
    var r = n(this, e),
      i = r.size;
    return r.set(e, t), this.size += r.size == i ? 0 : 1, this;
  }
  e.exports = i;
};
