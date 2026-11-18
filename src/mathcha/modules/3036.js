/* module 3036 — 441 chars */
module.exports = function (e) {
  var t = 9;
  if ("undefined" != typeof Element && !Element.prototype.matches) {
    var r = Element.prototype;
    r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector;
  }
  function n(e, t) {
    for (; e && 9 !== e.nodeType;) {
      if ("function" == typeof e.matches && e.matches(t)) return e;
      e = e.parentNode;
    }
  }
  e.exports = n;
};
