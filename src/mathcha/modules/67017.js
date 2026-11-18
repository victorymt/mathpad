/* module 67017 — 454 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(18367),
    i = r(36953),
    o = r(84916),
    s = function (e, t) {
      if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && 3 === r.nodeType) return void (r.nodeValue = t);
      }
      e.textContent = t;
    };
  n.canUseDOM && ("textContent" in document.documentElement || (s = function (e, t) {
    3 !== e.nodeType ? o(e, i(t)) : e.nodeValue = t;
  })), e.exports = s;
};
