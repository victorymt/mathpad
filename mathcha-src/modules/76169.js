/* module 76169 — 185 chars */
module.exports = function (e, t, r) {
  var n = r(49653);
  function i(e, t) {
    var r = t ? n(e.buffer) : e.buffer;
    return new e.constructor(r, e.byteOffset, e.byteLength);
  }
  e.exports = i;
};
