/* module 56807 — 352 chars */
module.exports = function (e) {
  "use strict";

  var t = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function r(e) {
    var r,
      n = this.nativeEvent;
    if (n.getModifierState) return n.getModifierState(e);
    var i = t[e];
    return !!i && !!n[i];
  }
  function n(e) {
    return r;
  }
  e.exports = n;
};
