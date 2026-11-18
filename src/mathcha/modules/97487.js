/* module 97487 — 606 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(18367),
    i;
  function o(e, t) {
    if (!n.canUseDOM || t && !("addEventListener" in document)) return !1;
    var r = "on" + e,
      o = r in document;
    if (!o) {
      var s = document.createElement("div");
      s.setAttribute(r, "return;"), o = "function" == typeof s[r];
    }
    return !o && i && "wheel" === e && (o = document.implementation.hasFeature("Events.wheel", "3.0")), o;
  }
  n.canUseDOM && (i = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "")), e.exports = o;
};
