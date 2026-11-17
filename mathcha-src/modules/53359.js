/* module 53359 — 296 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    p: () => i
  });
  class n {
    shouldShowTagInfo(e) {
      return this.shouldShowTagInfoBy(null == e ? void 0 : e.tagInfo);
    }
    shouldShowTagInfoBy(e) {
      return !(!e || !e.type || "none" == e.type);
    }
  }
  var i = new n();
};
