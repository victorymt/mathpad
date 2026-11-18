/* module 12749 — 203 chars */
module.exports = function (e, t, r) {
  var n = r(81042),
    i,
    o = Object.prototype.hasOwnProperty;
  function s(e) {
    var t = this.__data__;
    return n ? void 0 !== t[e] : o.call(t, e);
  }
  e.exports = s;
};
