/* module 17899 — 265 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(57319);
  function i(e) {
    n.enqueueEvents(e), n.processEventQueue(!1);
  }
  var o = {
    handleTopLevel: function (e, t, r, o) {
      var s;
      i(n.extractEvents(e, t, r, o));
    }
  };
  e.exports = o;
};
