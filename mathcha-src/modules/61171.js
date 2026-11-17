/* module 61171 — 517 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(95709);
  t.__esModule = !0, t.default = s;
  var i = n(r(91833)),
    o;
  function s(e) {
    if ((!o && 0 !== o || e) && i.default) {
      var t = document.createElement("div");
      t.style.position = "absolute", t.style.top = "-9999px", t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t), o = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
    }
    return o;
  }
  e.exports = t.default;
};
