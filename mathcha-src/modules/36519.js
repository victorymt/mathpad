/* module 36519 — 707 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(18367),
    i = r(71864),
    o = r(13138),
    s = r(90646),
    a = n.canUseDOM ? document.createElement("div") : null,
    l = /^\s*<(\w+)/;
  function c(e) {
    var t = e.match(l);
    return t && t[1].toLowerCase();
  }
  function d(e, t) {
    var r = a;
    a || s(!1);
    var n = c(e),
      l = n && o(n);
    if (l) {
      r.innerHTML = l[1] + e + l[2];
      for (var d = l[0]; d--;) r = r.lastChild;
    } else r.innerHTML = e;
    var h = r.getElementsByTagName("script");
    h.length && (t || s(!1), i(h).forEach(t));
    for (var p = Array.from(r.childNodes); r.lastChild;) r.removeChild(r.lastChild);
    return p;
  }
  e.exports = d;
};
