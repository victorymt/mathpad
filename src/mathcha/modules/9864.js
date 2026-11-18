/* module 9864 — 304 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(4644),
    i = {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    };
  function o(e, t, r, i) {
    return n.call(this, e, t, r, i);
  }
  n.augmentClass(o, i), e.exports = o;
};
