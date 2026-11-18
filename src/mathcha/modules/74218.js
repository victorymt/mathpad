/* module 74218 — 188 chars */
module.exports = function (e) {
  function t(e) {
    var t = typeof e;
    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
  }
  e.exports = t;
};
