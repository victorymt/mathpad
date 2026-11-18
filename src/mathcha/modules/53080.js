/* module 53080 — 230 chars */
module.exports = function (e) {
  "use strict";

  function t(e) {
    var t = e.target || e.srcElement || window;
    return t.correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t;
  }
  e.exports = t;
};
