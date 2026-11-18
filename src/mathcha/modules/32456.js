/* module 32456 — 448 chars */
module.exports = function (e) {
  "use strict";

  var t = 65521;
  function r(e) {
    for (var r = 1, n = 0, i = 0, o = e.length, s = -4 & o; i < s;) {
      for (var a = Math.min(i + 4096, s); i < a; i += 4) n += (r += e.charCodeAt(i)) + (r += e.charCodeAt(i + 1)) + (r += e.charCodeAt(i + 2)) + (r += e.charCodeAt(i + 3));
      r %= t, n %= t;
    }
    for (; i < o; i++) n += r += e.charCodeAt(i);
    return (r %= t) | (n %= t) << 16;
  }
  e.exports = r;
};
