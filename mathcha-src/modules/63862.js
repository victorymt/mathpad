/* module 63862 — 145 chars */
module.exports = function (e) {
  function t(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t;
  }
  e.exports = t;
};
