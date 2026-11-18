/* module 32183 — 444 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(14594);
  function i(e, t) {
    var r;
  }
  var o = {
    isMounted: function (e) {
      return !1;
    },
    enqueueCallback: function (e, t) {},
    enqueueForceUpdate: function (e) {
      i(e, "forceUpdate");
    },
    enqueueReplaceState: function (e, t) {
      i(e, "replaceState");
    },
    enqueueSetState: function (e, t) {
      i(e, "setState");
    }
  };
  e.exports = o;
};
