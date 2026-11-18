/* module 23986 — 223 chars */
module.exports = function (e) {
  "use strict";

  var t = {
    currentScrollLeft: 0,
    currentScrollTop: 0,
    refreshScrollValues: function (e) {
      t.currentScrollLeft = e.x, t.currentScrollTop = e.y;
    }
  };
  e.exports = t;
};
