/* module 61374 — 4722 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(45228),
    i = r(19021),
    o = r(17899),
    s = r(23986),
    a = r(30479),
    l = r(97487),
    c,
    d = {},
    h = !1,
    p = 0,
    u = {
      topAbort: "abort",
      topAnimationEnd: a("animationend") || "animationend",
      topAnimationIteration: a("animationiteration") || "animationiteration",
      topAnimationStart: a("animationstart") || "animationstart",
      topBlur: "blur",
      topCanPlay: "canplay",
      topCanPlayThrough: "canplaythrough",
      topChange: "change",
      topClick: "click",
      topCompositionEnd: "compositionend",
      topCompositionStart: "compositionstart",
      topCompositionUpdate: "compositionupdate",
      topContextMenu: "contextmenu",
      topCopy: "copy",
      topCut: "cut",
      topDoubleClick: "dblclick",
      topDrag: "drag",
      topDragEnd: "dragend",
      topDragEnter: "dragenter",
      topDragExit: "dragexit",
      topDragLeave: "dragleave",
      topDragOver: "dragover",
      topDragStart: "dragstart",
      topDrop: "drop",
      topDurationChange: "durationchange",
      topEmptied: "emptied",
      topEncrypted: "encrypted",
      topEnded: "ended",
      topError: "error",
      topFocus: "focus",
      topInput: "input",
      topKeyDown: "keydown",
      topKeyPress: "keypress",
      topKeyUp: "keyup",
      topLoadedData: "loadeddata",
      topLoadedMetadata: "loadedmetadata",
      topLoadStart: "loadstart",
      topMouseDown: "mousedown",
      topMouseMove: "mousemove",
      topMouseOut: "mouseout",
      topMouseOver: "mouseover",
      topMouseUp: "mouseup",
      topPaste: "paste",
      topPause: "pause",
      topPlay: "play",
      topPlaying: "playing",
      topProgress: "progress",
      topRateChange: "ratechange",
      topScroll: "scroll",
      topSeeked: "seeked",
      topSeeking: "seeking",
      topSelectionChange: "selectionchange",
      topStalled: "stalled",
      topSuspend: "suspend",
      topTextInput: "textInput",
      topTimeUpdate: "timeupdate",
      topTouchCancel: "touchcancel",
      topTouchEnd: "touchend",
      topTouchMove: "touchmove",
      topTouchStart: "touchstart",
      topTransitionEnd: a("transitionend") || "transitionend",
      topVolumeChange: "volumechange",
      topWaiting: "waiting",
      topWheel: "wheel"
    },
    g = "_reactListenersID" + String(Math.random()).slice(2);
  function m(e) {
    return Object.prototype.hasOwnProperty.call(e, g) || (e[g] = p++, d[e[g]] = {}), d[e[g]];
  }
  var f = n({}, o, {
    ReactEventListener: null,
    injection: {
      injectReactEventListener: function (e) {
        e.setHandleTopLevel(f.handleTopLevel), f.ReactEventListener = e;
      }
    },
    setEnabled: function (e) {
      f.ReactEventListener && f.ReactEventListener.setEnabled(e);
    },
    isEnabled: function () {
      return !(!f.ReactEventListener || !f.ReactEventListener.isEnabled());
    },
    listenTo: function (e, t) {
      for (var r = t, n = m(r), o = i.registrationNameDependencies[e], s = 0; s < o.length; s++) {
        var a = o[s];
        n.hasOwnProperty(a) && n[a] || ("topWheel" === a ? l("wheel") ? f.ReactEventListener.trapBubbledEvent("topWheel", "wheel", r) : l("mousewheel") ? f.ReactEventListener.trapBubbledEvent("topWheel", "mousewheel", r) : f.ReactEventListener.trapBubbledEvent("topWheel", "DOMMouseScroll", r) : "topScroll" === a ? l("scroll", !0) ? f.ReactEventListener.trapCapturedEvent("topScroll", "scroll", r) : f.ReactEventListener.trapBubbledEvent("topScroll", "scroll", f.ReactEventListener.WINDOW_HANDLE) : "topFocus" === a || "topBlur" === a ? (l("focus", !0) ? (f.ReactEventListener.trapCapturedEvent("topFocus", "focus", r), f.ReactEventListener.trapCapturedEvent("topBlur", "blur", r)) : l("focusin") && (f.ReactEventListener.trapBubbledEvent("topFocus", "focusin", r), f.ReactEventListener.trapBubbledEvent("topBlur", "focusout", r)), n.topBlur = !0, n.topFocus = !0) : u.hasOwnProperty(a) && f.ReactEventListener.trapBubbledEvent(a, u[a], r), n[a] = !0);
      }
    },
    trapBubbledEvent: function (e, t, r) {
      return f.ReactEventListener.trapBubbledEvent(e, t, r);
    },
    trapCapturedEvent: function (e, t, r) {
      return f.ReactEventListener.trapCapturedEvent(e, t, r);
    },
    supportsEventPageXY: function () {
      if (!document.createEvent) return !1;
      var e = document.createEvent("MouseEvent");
      return null != e && "pageX" in e;
    },
    ensureScrollValueMonitoring: function () {
      if (void 0 === c && (c = f.supportsEventPageXY()), !c && !h) {
        var e = s.refreshScrollValues;
        f.ReactEventListener.monitorScrollValue(e), h = !0;
      }
    }
  });
  e.exports = f;
};
