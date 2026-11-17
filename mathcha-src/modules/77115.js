/* module 77115 — 503 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(28019),
    i = {
      deltaX: function (e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: null,
      deltaMode: null
    };
  function o(e, t, r, i) {
    return n.call(this, e, t, r, i);
  }
  n.augmentClass(o, i), e.exports = o;
};
