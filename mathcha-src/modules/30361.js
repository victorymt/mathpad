/* module 30361 — 245 chars */
module.exports = function (e) {
  var t = 9007199254740991,
    r = /^(?:0|[1-9]\d*)$/;
  function n(e, n) {
    var i = typeof e;
    return !!(n = n ?? t) && ("number" == i || "symbol" != i && r.test(e)) && e > -1 && e % 1 == 0 && e < n;
  }
  e.exports = n;
};
