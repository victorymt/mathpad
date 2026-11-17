/* module 72667 — 362 chars */
module.exports = function (e) {
  "use strict";

  var t = {
    remove: function (e) {
      e._reactInternalInstance = void 0;
    },
    get: function (e) {
      return e._reactInternalInstance;
    },
    has: function (e) {
      return void 0 !== e._reactInternalInstance;
    },
    set: function (e, t) {
      e._reactInternalInstance = t;
    }
  };
  e.exports = t;
};
