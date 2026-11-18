/* module 16426 — 582 chars */
module.exports = function (e) {
  e.exports = function () {
    var e = document.getSelection();
    if (!e.rangeCount) return function () {};
    for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++) r.push(e.getRangeAt(n));
    switch (t.tagName.toUpperCase()) {
      case "INPUT":
      case "TEXTAREA":
        t.blur();
        break;
      default:
        t = null;
    }
    return e.removeAllRanges(), function () {
      "Caret" === e.type && e.removeAllRanges(), e.rangeCount || r.forEach(function (t) {
        e.addRange(t);
      }), t && t.focus();
    };
  };
};
