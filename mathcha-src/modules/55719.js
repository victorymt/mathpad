/* module 55719 — 559 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => s
  });
  var n = r(20323),
    i = r(54084);
  class o {
    getText(e) {
      if ("hot-key" == e.type) {
        var t = n.A.hotkeyInfoToText(e);
        return e.secondKeyCode ? "".concat(t, ",").concat((i.u[e.secondKeyCode] || "none").toUpperCase()) : t;
      }
      return e.sequence;
    }
    constructModifierHashForShorctut(e) {
      var t = 0;
      return e.control && (t |= 1), e.meta && (t |= 2), e.optionOrAlt && (t |= 4), e.shift && (t |= 8), t;
    }
  }
  const s = new o();
};
