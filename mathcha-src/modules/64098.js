/* module 64098 — 225 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(18367),
    i = null;
  function o() {
    return !i && n.canUseDOM && (i = "textContent" in document.documentElement ? "textContent" : "innerText"), i;
  }
  e.exports = o;
};
