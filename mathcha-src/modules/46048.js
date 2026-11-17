/* module 46048 — 4425 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(22754),
    o = r(25483),
    s = r(83997),
    a = r(87420),
    l = r(9864),
    c = r(4644),
    d = r(18853),
    h = r(17027),
    p = r(28019),
    u = r(96242),
    g = r(99687),
    m = r(55081),
    f = r(7762),
    y = r(77115),
    v = r(59395),
    b = r(53544),
    x = r(90646),
    C = {},
    S = {};
  ["abort", "animationEnd", "animationIteration", "animationStart", "blur", "canPlay", "canPlayThrough", "click", "contextMenu", "copy", "cut", "doubleClick", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "focus", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "progress", "rateChange", "reset", "scroll", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchMove", "touchStart", "transitionEnd", "volumeChange", "waiting", "wheel"].forEach(function (e) {
    var t = e[0].toUpperCase() + e.slice(1),
      r = "on" + t,
      n = "top" + t,
      i = {
        phasedRegistrationNames: {
          bubbled: r,
          captured: r + "Capture"
        },
        dependencies: [n]
      };
    C[e] = i, S[n] = i;
  });
  var A = {};
  function w(e) {
    return "." + e._rootNodeID;
  }
  function E(e) {
    return "button" === e || "input" === e || "select" === e || "textarea" === e;
  }
  var k = {
    eventTypes: C,
    extractEvents: function (e, t, r, i) {
      var s = S[e],
        v;
      if (!s) return null;
      switch (e) {
        case "topAbort":
        case "topCanPlay":
        case "topCanPlayThrough":
        case "topDurationChange":
        case "topEmptied":
        case "topEncrypted":
        case "topEnded":
        case "topError":
        case "topInput":
        case "topInvalid":
        case "topLoad":
        case "topLoadedData":
        case "topLoadedMetadata":
        case "topLoadStart":
        case "topPause":
        case "topPlay":
        case "topPlaying":
        case "topProgress":
        case "topRateChange":
        case "topReset":
        case "topSeeked":
        case "topSeeking":
        case "topStalled":
        case "topSubmit":
        case "topSuspend":
        case "topTimeUpdate":
        case "topVolumeChange":
        case "topWaiting":
          v = c;
          break;
        case "topKeyPress":
          if (0 === b(r)) return null;
        case "topKeyDown":
        case "topKeyUp":
          v = h;
          break;
        case "topBlur":
        case "topFocus":
          v = d;
          break;
        case "topClick":
          if (2 === r.button) return null;
        case "topDoubleClick":
        case "topMouseDown":
        case "topMouseMove":
        case "topMouseUp":
        case "topMouseOut":
        case "topMouseOver":
        case "topContextMenu":
          v = p;
          break;
        case "topDrag":
        case "topDragEnd":
        case "topDragEnter":
        case "topDragExit":
        case "topDragLeave":
        case "topDragOver":
        case "topDragStart":
        case "topDrop":
          v = u;
          break;
        case "topTouchCancel":
        case "topTouchEnd":
        case "topTouchMove":
        case "topTouchStart":
          v = g;
          break;
        case "topAnimationEnd":
        case "topAnimationIteration":
        case "topAnimationStart":
          v = a;
          break;
        case "topTransitionEnd":
          v = m;
          break;
        case "topScroll":
          v = f;
          break;
        case "topWheel":
          v = y;
          break;
        case "topCopy":
        case "topCut":
        case "topPaste":
          v = l;
      }
      v || n("86", e);
      var x = v.getPooled(s, t, r, i);
      return o.accumulateTwoPhaseDispatches(x), x;
    },
    didPutListener: function (e, t, r) {
      if ("onClick" === t && !E(e._tag)) {
        var n = w(e),
          o = s.getNodeFromInstance(e);
        A[n] || (A[n] = i.listen(o, "click", v));
      }
    },
    willDeleteListener: function (e, t) {
      if ("onClick" === t && !E(e._tag)) {
        var r = w(e);
        A[r].remove(), delete A[r];
      }
    }
  };
  e.exports = k;
};
