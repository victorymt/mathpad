/* module 77797 — 215 chars */
module.exports = function (e, t, r) {
  var n = r(44394),
    i = 1 / 0;
  function o(e) {
    if ("string" == typeof e || n(e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
  }
  e.exports = o;
};
