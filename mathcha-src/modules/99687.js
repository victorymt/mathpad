/* module 99687 — 382 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(7762),
    i,
    o = {
      touches: null,
      targetTouches: null,
      changedTouches: null,
      altKey: null,
      metaKey: null,
      ctrlKey: null,
      shiftKey: null,
      getModifierState: r(56807)
    };
  function s(e, t, r, i) {
    return n.call(this, e, t, r, i);
  }
  n.augmentClass(s, o), e.exports = s;
};
