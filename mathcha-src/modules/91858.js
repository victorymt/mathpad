/* module 91858 — 410 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(90646),
    o = !1,
    s = {
      replaceNodeWithMarkup: null,
      processChildrenUpdates: null,
      injection: {
        injectEnvironment: function (e) {
          o && n("104"), s.replaceNodeWithMarkup = e.replaceNodeWithMarkup, s.processChildrenUpdates = e.processChildrenUpdates, o = !0;
        }
      }
    };
  e.exports = s;
};
