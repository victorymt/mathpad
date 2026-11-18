/* module 72367 — 251 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(5936),
    i = r(83997),
    o = {
      dangerouslyProcessChildrenUpdates: function (e, t) {
        var r = i.getNodeFromInstance(e);
        n.processUpdates(r, t);
      }
    };
  e.exports = o;
};
