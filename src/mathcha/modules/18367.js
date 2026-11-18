/* module 18367 — 385 chars */
module.exports = function (e) {
  "use strict";

  var t = !("undefined" == typeof window || !window.document || !window.document.createElement),
    r = {
      canUseDOM: t,
      canUseWorkers: "undefined" != typeof Worker,
      canUseEventListeners: t && !(!window.addEventListener && !window.attachEvent),
      canUseViewport: t && !!window.screen,
      isInWorker: !t
    };
  e.exports = r;
};
