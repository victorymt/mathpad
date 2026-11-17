/* module 31952 — 442 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(38479),
    o = r(83997),
    s = r(72667),
    a = r(95705),
    l = r(90646),
    c = r(14594);
  function d(e) {
    var t;
    if (null == e) return null;
    if (1 === e.nodeType) return e;
    var r = s.get(e);
    if (r) return (r = a(r)) ? o.getNodeFromInstance(r) : null;
    "function" == typeof e.render ? n("44") : n("45", Object.keys(e));
  }
  e.exports = d;
};
