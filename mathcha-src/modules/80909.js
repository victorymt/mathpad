/* module 80909 — 292 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(90646);
  function o(e, t) {
    return null == t && n("30"), null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t];
  }
  e.exports = o;
};
