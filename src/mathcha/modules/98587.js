/* module 98587 — 281 chars */
module.exports = function (e, t, r) {
  "use strict";

  function n(e, t) {
    if (null == e) return {};
    var r = {},
      n = Object.keys(e),
      i,
      o;
    for (o = 0; o < n.length; o++) i = n[o], t.indexOf(i) >= 0 || (r[i] = e[i]);
    return r;
  }
  r.d(t, {
    A: () => n
  });
};
