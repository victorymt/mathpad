/* module 22505 — 4151 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(25483),
    i = r(18367),
    o = r(57708),
    s = r(536),
    a = r(35258),
    l = [9, 13, 27, 32],
    c = 229,
    d = i.canUseDOM && "CompositionEvent" in window,
    h = null;
  i.canUseDOM && "documentMode" in document && (h = document.documentMode);
  var p = i.canUseDOM && "TextEvent" in window && !h && !g(),
    u = i.canUseDOM && (!d || h && h > 8 && h <= 11);
  function g() {
    var e = window.opera;
    return "object" == typeof e && "function" == typeof e.version && parseInt(e.version(), 10) <= 12;
  }
  var m = 32,
    f = String.fromCharCode(m),
    y = {
      beforeInput: {
        phasedRegistrationNames: {
          bubbled: "onBeforeInput",
          captured: "onBeforeInputCapture"
        },
        dependencies: ["topCompositionEnd", "topKeyPress", "topTextInput", "topPaste"]
      },
      compositionEnd: {
        phasedRegistrationNames: {
          bubbled: "onCompositionEnd",
          captured: "onCompositionEndCapture"
        },
        dependencies: ["topBlur", "topCompositionEnd", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
      },
      compositionStart: {
        phasedRegistrationNames: {
          bubbled: "onCompositionStart",
          captured: "onCompositionStartCapture"
        },
        dependencies: ["topBlur", "topCompositionStart", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
      },
      compositionUpdate: {
        phasedRegistrationNames: {
          bubbled: "onCompositionUpdate",
          captured: "onCompositionUpdateCapture"
        },
        dependencies: ["topBlur", "topCompositionUpdate", "topKeyDown", "topKeyPress", "topKeyUp", "topMouseDown"]
      }
    },
    v = !1;
  function b(e) {
    return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
  }
  function x(e) {
    switch (e) {
      case "topCompositionStart":
        return y.compositionStart;
      case "topCompositionEnd":
        return y.compositionEnd;
      case "topCompositionUpdate":
        return y.compositionUpdate;
    }
  }
  function C(e, t) {
    return "topKeyDown" === e && t.keyCode === c;
  }
  function S(e, t) {
    switch (e) {
      case "topKeyUp":
        return -1 !== l.indexOf(t.keyCode);
      case "topKeyDown":
        return t.keyCode !== c;
      case "topKeyPress":
      case "topMouseDown":
      case "topBlur":
        return !0;
      default:
        return !1;
    }
  }
  function A(e) {
    var t = e.detail;
    return "object" == typeof t && "data" in t ? t.data : null;
  }
  var w = null;
  function E(e, t, r, i) {
    var a, l;
    if (d ? a = x(e) : w ? S(e, r) && (a = y.compositionEnd) : C(e, r) && (a = y.compositionStart), !a) return null;
    u && (w || a !== y.compositionStart ? a === y.compositionEnd && w && (l = w.getData()) : w = o.getPooled(i));
    var c = s.getPooled(a, t, r, i);
    if (l) c.data = l;else {
      var h = A(r);
      null !== h && (c.data = h);
    }
    return n.accumulateTwoPhaseDispatches(c), c;
  }
  function k(e, t) {
    switch (e) {
      case "topCompositionEnd":
        return A(t);
      case "topKeyPress":
        var r;
        return t.which !== m ? null : (v = !0, f);
      case "topTextInput":
        var n = t.data;
        return n === f && v ? null : n;
      default:
        return null;
    }
  }
  function O(e, t) {
    if (w) {
      if ("topCompositionEnd" === e || !d && S(e, t)) {
        var r = w.getData();
        return o.release(w), w = null, r;
      }
      return null;
    }
    switch (e) {
      case "topPaste":
      default:
        return null;
      case "topKeyPress":
        return t.which && !b(t) ? String.fromCharCode(t.which) : null;
      case "topCompositionEnd":
        return u ? null : t.data;
    }
  }
  function D(e, t, r, i) {
    var o;
    if (!(o = p ? k(e, r) : O(e, r))) return null;
    var s = a.getPooled(y.beforeInput, t, r, i);
    return s.data = o, n.accumulateTwoPhaseDispatches(s), s;
  }
  var P = {
    eventTypes: y,
    extractEvents: function (e, t, r, n) {
      return [E(e, t, r, n), D(e, t, r, n)];
    }
  };
  e.exports = P;
};
