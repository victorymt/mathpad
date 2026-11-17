/* module 16547 — 242 chars */
module.exports = function (e, t, r) {
  var n = r(43360),
    i = r(75288),
    o,
    s = Object.prototype.hasOwnProperty;
  function a(e, t, r) {
    var o = e[t];
    s.call(e, t) && i(o, r) && (void 0 !== r || t in e) || n(e, t, r);
  }
  e.exports = a;
};
