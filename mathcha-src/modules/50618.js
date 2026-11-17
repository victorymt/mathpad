/* module 50618 — 617 chars */
module.exports = function (e) {
  function t(e) {
    var t;
    if ("SELECT" === e.nodeName) e.focus(), t = e.value;else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
      var r = e.hasAttribute("readonly");
      r || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), r || e.removeAttribute("readonly"), t = e.value;
    } else {
      e.hasAttribute("contenteditable") && e.focus();
      var n = window.getSelection(),
        i = document.createRange();
      i.selectNodeContents(e), n.removeAllRanges(), n.addRange(i), t = n.toString();
    }
    return t;
  }
  e.exports = t;
};
