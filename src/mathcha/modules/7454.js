/* module 7454 — 3130 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(57319),
    i = r(25483),
    o = r(18367),
    s = r(83997),
    a = r(18806),
    l = r(4644),
    c = r(45525),
    d = r(53080),
    h = r(97487),
    p = r(2814),
    u = {
      change: {
        phasedRegistrationNames: {
          bubbled: "onChange",
          captured: "onChangeCapture"
        },
        dependencies: ["topBlur", "topChange", "topClick", "topFocus", "topInput", "topKeyDown", "topKeyUp", "topSelectionChange"]
      }
    };
  function g(e, t, r) {
    var n = l.getPooled(u.change, e, t, r);
    return n.type = "change", i.accumulateTwoPhaseDispatches(n), n;
  }
  var m = null,
    f = null;
  function y(e) {
    var t = e.nodeName && e.nodeName.toLowerCase();
    return "select" === t || "input" === t && "file" === e.type;
  }
  var v = !1;
  function b(e) {
    var t = g(f, e, d(e));
    a.batchedUpdates(x, t);
  }
  function x(e) {
    n.enqueueEvents(e), n.processEventQueue(!1);
  }
  function C(e, t) {
    f = t, (m = e).attachEvent("onchange", b);
  }
  function S() {
    m && (m.detachEvent("onchange", b), m = null, f = null);
  }
  function A(e, t) {
    var r = c.updateValueIfChanged(e),
      n = !0 === t.simulated && F._allowSimulatedPassThrough;
    if (r || n) return e;
  }
  function w(e, t) {
    if ("topChange" === e) return t;
  }
  function E(e, t, r) {
    "topFocus" === e ? (S(), C(t, r)) : "topBlur" === e && S();
  }
  o.canUseDOM && (v = h("change") && (!document.documentMode || document.documentMode > 8));
  var k = !1;
  function O(e, t) {
    f = t, (m = e).attachEvent("onpropertychange", P);
  }
  function D() {
    m && (m.detachEvent("onpropertychange", P), m = null, f = null);
  }
  function P(e) {
    "value" === e.propertyName && A(f, e) && b(e);
  }
  function M(e, t, r) {
    "topFocus" === e ? (D(), O(t, r)) : "topBlur" === e && D();
  }
  function I(e, t, r) {
    if ("topSelectionChange" === e || "topKeyUp" === e || "topKeyDown" === e) return A(f, r);
  }
  function T(e) {
    var t = e.nodeName;
    return t && "input" === t.toLowerCase() && ("checkbox" === e.type || "radio" === e.type);
  }
  function L(e, t, r) {
    if ("topClick" === e) return A(t, r);
  }
  function R(e, t, r) {
    if ("topInput" === e || "topChange" === e) return A(t, r);
  }
  function B(e, t) {
    if (null != e) {
      var r = e._wrapperState || t._wrapperState;
      if (r && r.controlled && "number" === t.type) {
        var n = "" + t.value;
        t.getAttribute("value") !== n && t.setAttribute("value", n);
      }
    }
  }
  o.canUseDOM && (k = h("input") && (!document.documentMode || document.documentMode > 9));
  var F = {
    eventTypes: u,
    _allowSimulatedPassThrough: !0,
    _isInputEventSupported: k,
    extractEvents: function (e, t, r, n) {
      var i = t ? s.getNodeFromInstance(t) : window,
        o,
        a;
      if (y(i) ? v ? o = w : a = E : p(i) ? k ? o = R : (o = I, a = M) : T(i) && (o = L), o) {
        var l = o(e, t, r),
          c;
        if (l) return g(l, r, n);
      }
      a && a(e, i, t), "topBlur" === e && B(t, i);
    }
  };
  e.exports = F;
};
