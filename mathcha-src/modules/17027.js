/* module 17027 — 760 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(7762),
    i = r(53544),
    o,
    s,
    a = {
      key: r(38706),
      location: null,
      ctrlKey: null,
      shiftKey: null,
      altKey: null,
      metaKey: null,
      repeat: null,
      locale: null,
      getModifierState: r(56807),
      charCode: function (e) {
        return "keypress" === e.type ? i(e) : 0;
      },
      keyCode: function (e) {
        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
      },
      which: function (e) {
        return "keypress" === e.type ? i(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
      }
    };
  function l(e, t, r, i) {
    return n.call(this, e, t, r, i);
  }
  n.augmentClass(l, a), e.exports = l;
};
