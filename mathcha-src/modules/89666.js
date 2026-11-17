/* module 89666 — 2345 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(25483),
    i = r(18367),
    o = r(83997),
    s = r(38508),
    a = r(4644),
    l = r(69758),
    c = r(2814),
    d = r(48940),
    h = i.canUseDOM && "documentMode" in document && document.documentMode <= 11,
    p = {
      select: {
        phasedRegistrationNames: {
          bubbled: "onSelect",
          captured: "onSelectCapture"
        },
        dependencies: ["topBlur", "topContextMenu", "topFocus", "topKeyDown", "topKeyUp", "topMouseDown", "topMouseUp", "topSelectionChange"]
      }
    },
    u = null,
    g = null,
    m = null,
    f = !1,
    y = !1;
  function v(e) {
    if ("selectionStart" in e && s.hasSelectionCapabilities(e)) return {
      start: e.selectionStart,
      end: e.selectionEnd
    };
    if (window.getSelection) {
      var t = window.getSelection();
      return {
        anchorNode: t.anchorNode,
        anchorOffset: t.anchorOffset,
        focusNode: t.focusNode,
        focusOffset: t.focusOffset
      };
    }
    if (document.selection) {
      var r = document.selection.createRange();
      return {
        parentElement: r.parentElement(),
        text: r.text,
        top: r.boundingTop,
        left: r.boundingLeft
      };
    }
  }
  function b(e, t) {
    if (f || null == u || u !== l()) return null;
    var r = v(u);
    if (!m || !d(m, r)) {
      m = r;
      var i = a.getPooled(p.select, g, e, t);
      return i.type = "select", i.target = u, n.accumulateTwoPhaseDispatches(i), i;
    }
    return null;
  }
  var x = {
    eventTypes: p,
    extractEvents: function (e, t, r, n) {
      if (!y) return null;
      var i = t ? o.getNodeFromInstance(t) : window;
      switch (e) {
        case "topFocus":
          (c(i) || "true" === i.contentEditable) && (u = i, g = t, m = null);
          break;
        case "topBlur":
          u = null, g = null, m = null;
          break;
        case "topMouseDown":
          f = !0;
          break;
        case "topContextMenu":
        case "topMouseUp":
          return f = !1, b(r, n);
        case "topSelectionChange":
          if (h) break;
        case "topKeyDown":
        case "topKeyUp":
          return b(r, n);
      }
      return null;
    },
    didPutListener: function (e, t, r) {
      "onSelect" === t && (y = !0);
    }
  };
  e.exports = x;
};
