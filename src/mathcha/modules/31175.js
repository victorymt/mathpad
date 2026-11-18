/* module 31175 — 200 chars */
module.exports = function (e, t, r) {
  var n = r(26025);
  function i(e, t) {
    var r = this.__data__,
      i = n(r, e);
    return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this;
  }
  e.exports = i;
};
