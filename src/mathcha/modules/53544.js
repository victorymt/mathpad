/* module 53544 — 218 chars */
module.exports = function (e) {
  "use strict";

  function t(e) {
    var t,
      r = e.keyCode;
    return "charCode" in e ? 0 === (t = e.charCode) && 13 === r && (t = 13) : t = r, t >= 32 || 13 === t ? t : 0;
  }
  e.exports = t;
};
