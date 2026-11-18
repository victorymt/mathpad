/* module 73201 — 166 chars */
module.exports = function (e) {
  var t = /\w*$/;
  function r(e) {
    var r = new e.constructor(e.source, t.exec(e));
    return r.lastIndex = e.lastIndex, r;
  }
  e.exports = r;
};
