/* module 68499 — 1853 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(38479),
    o = r(72667),
    s = r(83982),
    a = r(18806),
    l = r(90646),
    c = r(14594);
  function d(e) {
    a.enqueueUpdate(e);
  }
  function h(e) {
    var t = typeof e;
    if ("object" !== t) return t;
    var r = e.constructor && e.constructor.name || t,
      n = Object.keys(e);
    return n.length > 0 && n.length < 20 ? r + " (keys: " + n.join(", ") + ")" : r;
  }
  function p(e, t) {
    var r = o.get(e),
      n;
    return r || null;
  }
  var u = {
    isMounted: function (e) {
      var t,
        r = o.get(e);
      return !!r && !!r._renderedComponent;
    },
    enqueueCallback: function (e, t, r) {
      u.validateCallback(t, r);
      var n = p(e);
      if (!n) return null;
      n._pendingCallbacks ? n._pendingCallbacks.push(t) : n._pendingCallbacks = [t], d(n);
    },
    enqueueCallbackInternal: function (e, t) {
      e._pendingCallbacks ? e._pendingCallbacks.push(t) : e._pendingCallbacks = [t], d(e);
    },
    enqueueForceUpdate: function (e) {
      var t = p(e, "forceUpdate");
      t && (t._pendingForceUpdate = !0, d(t));
    },
    enqueueReplaceState: function (e, t, r) {
      var n = p(e, "replaceState");
      n && (n._pendingStateQueue = [t], n._pendingReplaceState = !0, null != r && (u.validateCallback(r, "replaceState"), n._pendingCallbacks ? n._pendingCallbacks.push(r) : n._pendingCallbacks = [r]), d(n));
    },
    enqueueSetState: function (e, t) {
      var r = p(e, "setState"),
        n;
      r && ((r._pendingStateQueue || (r._pendingStateQueue = [])).push(t), d(r));
    },
    enqueueElementInternal: function (e, t, r) {
      e._pendingElement = t, e._context = r, d(e);
    },
    validateCallback: function (e, t) {
      e && "function" != typeof e && n("122", t, h(e));
    }
  };
  e.exports = u;
};
