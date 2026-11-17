/* module 34932 — 169 chars */
module.exports = function (e) {
  function t(e, t) {
    for (var r = -1, n = null == e ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
    return i;
  }
  e.exports = t;
};
