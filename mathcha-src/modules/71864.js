/* module 71864 — 772 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(90646);
  function i(e) {
    var t = e.length;
    if ((Array.isArray(e) || "object" != typeof e && "function" != typeof e) && n(!1), "number" != typeof t && n(!1), 0 === t || t - 1 in e || n(!1), "function" == typeof e.callee && n(!1), e.hasOwnProperty) try {
      return Array.prototype.slice.call(e);
    } catch (e) {}
    for (var r = Array(t), i = 0; i < t; i++) r[i] = e[i];
    return r;
  }
  function o(e) {
    return !!e && ("object" == typeof e || "function" == typeof e) && "length" in e && !("setInterval" in e) && "number" != typeof e.nodeType && (Array.isArray(e) || "callee" in e || "item" in e);
  }
  function s(e) {
    return o(e) ? Array.isArray(e) ? e.slice() : i(e) : [e];
  }
  e.exports = s;
};
