/* module 20323 — 1237 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => s
  });
  var n = r(54084),
    i = r(84258);
  class o {
    detect(e) {
      var t = n.u[e.keyCode] || "none",
        r = "shift" == t || "alt" == t || "ctrl" == t || "Windows Key / Left ⌘ / Chromebook Search key" == t || "Windows Menu / Right ⌘" == t || "right window key" == t;
      return {
        shift: e.shiftKey,
        optionOrAlt: e.altKey,
        control: e.ctrlKey,
        meta: e.metaKey,
        keyCode: e.keyCode,
        modifierOnly: r
      };
    }
    hotkeyInfoToText(e) {
      var t = [],
        r = n.u[e.keyCode] || "none";
      return e.meta && (i.A.isMac() ? t.push("Cmd") : t.push("Win")), e.control && t.push("Ctrl"), e.optionOrAlt && t.push("Alt"), e.shift && t.push("Shift"), e.modifierOnly || t.push(r.toUpperCase()), t.join("+");
    }
    safeParseHotkey(e) {
      if (!e) return {
        keyCode: 220
      };
      try {
        return JSON.parse(e);
      } catch (e) {
        return {
          keyCode: 220
        };
      }
    }
    match(e, t) {
      return e.metaKey == t.meta && e.ctrlKey == t.control && e.shiftKey == t.shift && e.altKey == t.optionOrAlt && e.keyCode == t.keyCode;
    }
  }
  const s = new o();
};
