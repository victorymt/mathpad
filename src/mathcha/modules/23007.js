/* module 23007 — 161 chars */
module.exports = function (e) {
  function t(e, t) {
    var r = -1,
      n = e.length;
    for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
    return t;
  }
  e.exports = t;
};
