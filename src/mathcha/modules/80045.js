/* module 80045 — 434 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => i
  });
  var n = r(98587);
  function i(e, t) {
    if (null == e) return {};
    var r = (0, n.A)(e, t),
      i,
      o;
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (o = 0; o < s.length; o++) i = s[o], t.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
    }
    return r;
  }
};
