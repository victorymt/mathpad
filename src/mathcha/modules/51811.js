/* module 51811 — 334 chars */
module.exports = function (e) {
  var t = 800,
    r = 16,
    n = Date.now;
  function i(e) {
    var i = 0,
      o = 0;
    return function () {
      var s = n(),
        a = r - (s - o);
      if (o = s, a > 0) {
        if (++i >= t) return arguments[0];
      } else i = 0;
      return e.apply(void 0, arguments);
    };
  }
  e.exports = i;
};
