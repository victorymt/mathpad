/* module 76605 — 2657 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(72237),
    o = r(90646),
    s = r(14594),
    a,
    l,
    c,
    d;
  function h(e) {
    return "topMouseUp" === e || "topTouchEnd" === e || "topTouchCancel" === e;
  }
  function p(e) {
    return "topMouseMove" === e || "topTouchMove" === e;
  }
  function u(e) {
    return "topMouseDown" === e || "topTouchStart" === e;
  }
  function g(e, t, r, n) {
    var o = e.type || "unknown-event";
    e.currentTarget = x.getNodeFromInstance(n), t ? i.invokeGuardedCallbackWithCatch(o, r, e) : i.invokeGuardedCallback(o, r, e), e.currentTarget = null;
  }
  function m(e, t) {
    var r = e._dispatchListeners,
      n = e._dispatchInstances;
    if (Array.isArray(r)) for (var i = 0; i < r.length && !e.isPropagationStopped(); i++) g(e, t, r[i], n[i]);else r && g(e, t, r, n);
    e._dispatchListeners = null, e._dispatchInstances = null;
  }
  function f(e) {
    var t = e._dispatchListeners,
      r = e._dispatchInstances;
    if (Array.isArray(t)) {
      for (var n = 0; n < t.length && !e.isPropagationStopped(); n++) if (t[n](e, r[n])) return r[n];
    } else if (t && t(e, r)) return r;
    return null;
  }
  function y(e) {
    var t = f(e);
    return e._dispatchInstances = null, e._dispatchListeners = null, t;
  }
  function v(e) {
    var t = e._dispatchListeners,
      r = e._dispatchInstances;
    Array.isArray(t) && n("103"), e.currentTarget = t ? x.getNodeFromInstance(r) : null;
    var i = t ? t(e) : null;
    return e.currentTarget = null, e._dispatchListeners = null, e._dispatchInstances = null, i;
  }
  function b(e) {
    return !!e._dispatchListeners;
  }
  var x = {
    isEndish: h,
    isMoveish: p,
    isStartish: u,
    executeDirectDispatch: v,
    executeDispatchesInOrder: m,
    executeDispatchesInOrderStopAtTrue: y,
    hasDispatches: b,
    getInstanceFromNode: function (e) {
      return a.getInstanceFromNode(e);
    },
    getNodeFromInstance: function (e) {
      return a.getNodeFromInstance(e);
    },
    isAncestor: function (e, t) {
      return l.isAncestor(e, t);
    },
    getLowestCommonAncestor: function (e, t) {
      return l.getLowestCommonAncestor(e, t);
    },
    getParentInstance: function (e) {
      return l.getParentInstance(e);
    },
    traverseTwoPhase: function (e, t, r) {
      return l.traverseTwoPhase(e, t, r);
    },
    traverseEnterLeave: function (e, t, r, n, i) {
      return l.traverseEnterLeave(e, t, r, n, i);
    },
    injection: {
      injectComponentTree: function (e) {
        a = e;
      },
      injectTreeTraversal: function (e) {
        l = e;
      }
    }
  };
  e.exports = x;
};
