/* module 28019 — 920 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(7762),
    i = r(23986),
    o,
    s = {
      screenX: null,
      screenY: null,
      clientX: null,
      clientY: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      getModifierState: r(56807),
      button: function (e) {
        var t = e.button;
        return "which" in e ? t : 2 === t ? 2 : 4 === t ? 1 : 0;
      },
      buttons: null,
      relatedTarget: function (e) {
        return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement);
      },
      pageX: function (e) {
        return "pageX" in e ? e.pageX : e.clientX + i.currentScrollLeft;
      },
      pageY: function (e) {
        return "pageY" in e ? e.pageY : e.clientY + i.currentScrollTop;
      }
    };
  function a(e, t, r, i) {
    return n.call(this, e, t, r, i);
  }
  n.augmentClass(a, s), e.exports = a;
};
