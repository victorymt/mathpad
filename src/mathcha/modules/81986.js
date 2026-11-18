/* module 81986 — 475 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(31371),
    o = r(18367),
    s = r(36519),
    a = r(59395),
    l = r(90646),
    c = {
      dangerouslyReplaceNodeWithMarkup: function (e, t) {
        if (o.canUseDOM || n("56"), t || n("57"), "HTML" === e.nodeName && n("58"), "string" == typeof t) {
          var r = s(t, a)[0];
          e.parentNode.replaceChild(r, e);
        } else i.replaceChildWithTree(e, t);
      }
    };
  e.exports = c;
};
