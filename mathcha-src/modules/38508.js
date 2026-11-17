/* module 38508 — 1859 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(64540),
    i = r(4909),
    o = r(89930),
    s = r(69758);
  function a(e) {
    return i(document.documentElement, e);
  }
  var l = {
    hasSelectionCapabilities: function (e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && ("input" === t && "text" === e.type || "textarea" === t || "true" === e.contentEditable);
    },
    getSelectionInformation: function () {
      var e = s();
      return {
        focusedElem: e,
        selectionRange: l.hasSelectionCapabilities(e) ? l.getSelection(e) : null
      };
    },
    restoreSelection: function (e) {
      var t = s(),
        r = e.focusedElem,
        n = e.selectionRange;
      t !== r && a(r) && (l.hasSelectionCapabilities(r) && l.setSelection(r, n), o(r));
    },
    getSelection: function (e) {
      var t;
      if ("selectionStart" in e) t = {
        start: e.selectionStart,
        end: e.selectionEnd
      };else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
        var r = document.selection.createRange();
        r.parentElement() === e && (t = {
          start: -r.moveStart("character", -e.value.length),
          end: -r.moveEnd("character", -e.value.length)
        });
      } else t = n.getOffsets(e);
      return t || {
        start: 0,
        end: 0
      };
    },
    setSelection: function (e, t) {
      var r = t.start,
        i = t.end;
      if (void 0 === i && (i = r), "selectionStart" in e) e.selectionStart = r, e.selectionEnd = Math.min(i, e.value.length);else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
        var o = e.createTextRange();
        o.collapse(!0), o.moveStart("character", r), o.moveEnd("character", i - r), o.select();
      } else n.setOffsets(e, t);
    }
  };
  e.exports = l;
};
