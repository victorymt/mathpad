/* module 20317 — 169 chars */
module.exports = function (e) {
  function t(e) {
    var t = -1,
      r = Array(e.size);
    return e.forEach(function (e, n) {
      r[++t] = [n, e];
    }), r;
  }
  e.exports = t;
};
