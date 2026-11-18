/* module 68655 — 258 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    x: () => i
  });
  class n {
    isKeyToIgnoreOnSave(e) {
      return !!(e && e.length > 3 && "_" == e[0] && "_" == e[1] && "_" == e[2] && "$" != e[3]) && "___version" != e;
    }
  }
  var i = new n();
};
