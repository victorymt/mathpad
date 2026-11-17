/* module 57319 — 2670 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(19021),
    o = r(76605),
    s = r(72237),
    a = r(80909),
    l = r(13901),
    c = r(90646),
    d = {},
    h = null,
    p = function (e, t) {
      e && (o.executeDispatchesInOrder(e, t), e.isPersistent() || e.constructor.release(e));
    },
    u = function (e) {
      return p(e, !0);
    },
    g = function (e) {
      return p(e, !1);
    },
    m = function (e) {
      return "." + e._rootNodeID;
    };
  function f(e) {
    return "button" === e || "input" === e || "select" === e || "textarea" === e;
  }
  function y(e, t, r) {
    switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
        return !(!r.disabled || !f(t));
      default:
        return !1;
    }
  }
  var v = {
    injection: {
      injectEventPluginOrder: i.injectEventPluginOrder,
      injectEventPluginsByName: i.injectEventPluginsByName
    },
    putListener: function (e, t, r) {
      "function" != typeof r && n("94", t, typeof r);
      var o = m(e),
        s;
      (d[t] || (d[t] = {}))[o] = r;
      var a = i.registrationNameModules[t];
      a && a.didPutListener && a.didPutListener(e, t, r);
    },
    getListener: function (e, t) {
      var r = d[t];
      if (y(t, e._currentElement.type, e._currentElement.props)) return null;
      var n = m(e);
      return r && r[n];
    },
    deleteListener: function (e, t) {
      var r = i.registrationNameModules[t];
      r && r.willDeleteListener && r.willDeleteListener(e, t);
      var n = d[t],
        o;
      n && delete n[m(e)];
    },
    deleteAllListeners: function (e) {
      var t = m(e);
      for (var r in d) if (d.hasOwnProperty(r) && d[r][t]) {
        var n = i.registrationNameModules[r];
        n && n.willDeleteListener && n.willDeleteListener(e, r), delete d[r][t];
      }
    },
    extractEvents: function (e, t, r, n) {
      for (var o, s = i.plugins, l = 0; l < s.length; l++) {
        var c = s[l];
        if (c) {
          var d = c.extractEvents(e, t, r, n);
          d && (o = a(o, d));
        }
      }
      return o;
    },
    enqueueEvents: function (e) {
      e && (h = a(h, e));
    },
    processEventQueue: function (e) {
      var t = h;
      h = null, l(t, e ? u : g), h && n("95"), s.rethrowCaughtError();
    },
    __purge: function () {
      d = {};
    },
    __getListenerBank: function () {
      return d;
    }
  };
  e.exports = v;
};
