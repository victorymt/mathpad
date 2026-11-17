/* module 30479 — 1002 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(18367);
  function i(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r["ms" + e] = "MS" + t, r["O" + e] = "o" + t.toLowerCase(), r;
  }
  var o = {
      animationend: i("Animation", "AnimationEnd"),
      animationiteration: i("Animation", "AnimationIteration"),
      animationstart: i("Animation", "AnimationStart"),
      transitionend: i("Transition", "TransitionEnd")
    },
    s = {},
    a = {};
  function l(e) {
    if (s[e]) return s[e];
    if (!o[e]) return e;
    var t = o[e];
    for (var r in t) if (t.hasOwnProperty(r) && r in a) return s[e] = t[r];
    return "";
  }
  n.canUseDOM && (a = document.createElement("div").style, "AnimationEvent" in window || (delete o.animationend.animation, delete o.animationiteration.animation, delete o.animationstart.animation), "TransitionEvent" in window || delete o.transitionend.transition), e.exports = l;
};
