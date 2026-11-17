/* module 25078 — 241 chars */
module.exports = function (e) {
  "use strict";

  var t,
    r = {
      injectEmptyComponentFactory: function (e) {
        t = e;
      }
    },
    n = {
      create: function (e) {
        return t(e);
      }
    };
  n.injection = r, e.exports = n;
};
