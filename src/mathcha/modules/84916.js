/* module 84916 — 928 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(18367),
    i = r(78693),
    o = /^[ \r\n\t\f]/,
    s = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,
    a,
    l,
    c = r(96936)(function (e, t) {
      if (e.namespaceURI !== i.svg || "innerHTML" in e) e.innerHTML = t;else {
        (l = l || document.createElement("div")).innerHTML = "<svg>" + t + "</svg>";
        for (var r = l.firstChild; r.firstChild;) e.appendChild(r.firstChild);
      }
    });
  if (n.canUseDOM) {
    var d = document.createElement("div");
    d.innerHTML = " ", "" === d.innerHTML && (c = function (e, t) {
      if (e.parentNode && e.parentNode.replaceChild(e, e), o.test(t) || "<" === t[0] && s.test(t)) {
        e.innerHTML = String.fromCharCode(65279) + t;
        var r = e.firstChild;
        1 === r.data.length ? e.removeChild(r) : r.deleteData(0, 1);
      } else e.innerHTML = t;
    }), d = null;
  }
  e.exports = c;
};
