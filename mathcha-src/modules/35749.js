/* module 35749 — 233 chars */
module.exports = function (e, t, r) {
  var n = r(81042),
    i = "__lodash_hash_undefined__";
  function o(e, t) {
    var r = this.__data__;
    return this.size += this.has(e) ? 0 : 1, r[e] = n && void 0 === t ? i : t, this;
  }
  e.exports = o;
};
