/* module 55527 — 187 chars */
module.exports = function (e) {
  var t = Object.prototype;
  function r(e) {
    var r = e && e.constructor,
      n;
    return e === ("function" == typeof r && r.prototype || t);
  }
  e.exports = r;
};
