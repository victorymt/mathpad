/* module 8868 — 520 chars */
module.exports = function (e) {
  "use strict";

  function t(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function r(e) {
    for (; e;) {
      if (e.nextSibling) return e.nextSibling;
      e = e.parentNode;
    }
  }
  function n(e, n) {
    for (var i = t(e), o = 0, s = 0; i;) {
      if (3 === i.nodeType) {
        if (s = o + i.textContent.length, o <= n && s >= n) return {
          node: i,
          offset: n - o
        };
        o = s;
      }
      i = t(r(i));
    }
  }
  e.exports = n;
};
