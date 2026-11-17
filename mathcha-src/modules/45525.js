/* module 45525 — 1792 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(83997);
  function i(e) {
    var t = e.type,
      r = e.nodeName;
    return r && "input" === r.toLowerCase() && ("checkbox" === t || "radio" === t);
  }
  function o(e) {
    return e._wrapperState.valueTracker;
  }
  function s(e, t) {
    e._wrapperState.valueTracker = t;
  }
  function a(e) {
    e._wrapperState.valueTracker = null;
  }
  function l(e) {
    var t;
    return e && (t = i(e) ? "" + e.checked : e.value), t;
  }
  var c = {
    _getTrackerFromNode: function (e) {
      return o(n.getInstanceFromNode(e));
    },
    track: function (e) {
      if (!o(e)) {
        var t = n.getNodeFromInstance(e),
          r = i(t) ? "checked" : "value",
          l = Object.getOwnPropertyDescriptor(t.constructor.prototype, r),
          c = "" + t[r];
        t.hasOwnProperty(r) || "function" != typeof l.get || "function" != typeof l.set || (Object.defineProperty(t, r, {
          enumerable: l.enumerable,
          configurable: !0,
          get: function () {
            return l.get.call(this);
          },
          set: function (e) {
            c = "" + e, l.set.call(this, e);
          }
        }), s(e, {
          getValue: function () {
            return c;
          },
          setValue: function (e) {
            c = "" + e;
          },
          stopTracking: function () {
            a(e), delete t[r];
          }
        }));
      }
    },
    updateValueIfChanged: function (e) {
      if (!e) return !1;
      var t = o(e);
      if (!t) return c.track(e), !0;
      var r = t.getValue(),
        i = l(n.getNodeFromInstance(e));
      return i !== r && (t.setValue(i), !0);
    },
    stopTracking: function (e) {
      var t = o(e);
      t && t.stopTracking();
    }
  };
  e.exports = c;
};
