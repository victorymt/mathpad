/* module 79770 — 210 chars */
module.exports = function (e) {
  function t(e, t) {
    for (var r = -1, n = null == e ? 0 : e.length, i = 0, o = []; ++r < n;) {
      var s = e[r];
      t(s, r, e) && (o[i++] = s);
    }
    return o;
  }
  e.exports = t;
};
