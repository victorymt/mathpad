/* module 66721 — 308 chars */
module.exports = function (e, t, r) {
  var n = r(81042),
    i = "__lodash_hash_undefined__",
    o,
    s = Object.prototype.hasOwnProperty;
  function a(e) {
    var t = this.__data__;
    if (n) {
      var r = t[e];
      return r === i ? void 0 : r;
    }
    return s.call(t, e) ? t[e] : void 0;
  }
  e.exports = a;
};
