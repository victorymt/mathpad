/* module 34056 — 388 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(65606),
    i = r(75804),
    o = r(60547),
    s = r(14594),
    a;
  function l(e, t, r, n) {
    if (e && "object" == typeof e) {
      var i = e,
        o;
      0, void 0 === i[r] && null != t && (i[r] = t);
    }
  }
  function c(e, t) {
    if (null == e) return e;
    var r = {};
    return o(e, l, r), r;
  }
  e.exports = c;
};
