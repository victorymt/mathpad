/* module 25483 — 1468 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(57319),
    i = r(76605),
    o = r(80909),
    s = r(13901),
    a = r(14594),
    l = n.getListener;
  function c(e, t, r) {
    var n = t.dispatchConfig.phasedRegistrationNames[r];
    return l(e, n);
  }
  function d(e, t, r) {
    var n = c(e, r, t);
    n && (r._dispatchListeners = o(r._dispatchListeners, n), r._dispatchInstances = o(r._dispatchInstances, e));
  }
  function h(e) {
    e && e.dispatchConfig.phasedRegistrationNames && i.traverseTwoPhase(e._targetInst, d, e);
  }
  function p(e) {
    if (e && e.dispatchConfig.phasedRegistrationNames) {
      var t = e._targetInst,
        r = t ? i.getParentInstance(t) : null;
      i.traverseTwoPhase(r, d, e);
    }
  }
  function u(e, t, r) {
    if (r && r.dispatchConfig.registrationName) {
      var n = r.dispatchConfig.registrationName,
        i = l(e, n);
      i && (r._dispatchListeners = o(r._dispatchListeners, i), r._dispatchInstances = o(r._dispatchInstances, e));
    }
  }
  function g(e) {
    e && e.dispatchConfig.registrationName && u(e._targetInst, null, e);
  }
  function m(e) {
    s(e, h);
  }
  function f(e) {
    s(e, p);
  }
  function y(e, t, r, n) {
    i.traverseEnterLeave(r, n, u, e, t);
  }
  function v(e) {
    s(e, g);
  }
  var b = {
    accumulateTwoPhaseDispatches: m,
    accumulateTwoPhaseDispatchesSkipTarget: f,
    accumulateDirectDispatches: v,
    accumulateEnterLeaveDispatches: y
  };
  e.exports = b;
};
