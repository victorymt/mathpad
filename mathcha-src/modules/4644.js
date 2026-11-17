/* module 4644 — 2808 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(45228),
    i = r(9248),
    o = r(59395),
    s = r(14594),
    a = !1,
    l = null,
    c = ["dispatchConfig", "_targetInst", "nativeEvent", "isDefaultPrevented", "isPropagationStopped", "_dispatchListeners", "_dispatchInstances"],
    d = {
      type: null,
      target: null,
      currentTarget: o.thatReturnsNull,
      eventPhase: null,
      bubbles: null,
      cancelable: null,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: null,
      isTrusted: null
    };
  function h(e, t, r, n) {
    this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = r;
    var i = this.constructor.Interface;
    for (var s in i) if (i.hasOwnProperty(s)) {
      0;
      var a = i[s];
      a ? this[s] = a(r) : "target" === s ? this.target = n : this[s] = r[s];
    }
    var l = null != r.defaultPrevented ? r.defaultPrevented : !1 === r.returnValue;
    return this.isDefaultPrevented = l ? o.thatReturnsTrue : o.thatReturnsFalse, this.isPropagationStopped = o.thatReturnsFalse, this;
  }
  function p(e, t) {
    var r = "function" == typeof t;
    return {
      configurable: !0,
      set: n,
      get: i
    };
    function n(e) {
      var t;
      return o(r ? "setting the method" : "setting the property", "This is effectively a no-op"), e;
    }
    function i() {
      var e, n;
      return o(r ? "accessing the method" : "accessing the property", r ? "This is a no-op function" : "This is set to null"), t;
    }
    function o(e, t) {
      var r = !1;
    }
  }
  n(h.prototype, {
    preventDefault: function () {
      this.defaultPrevented = !0;
      var e = this.nativeEvent;
      e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = o.thatReturnsTrue);
    },
    stopPropagation: function () {
      var e = this.nativeEvent;
      e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = o.thatReturnsTrue);
    },
    persist: function () {
      this.isPersistent = o.thatReturnsTrue;
    },
    isPersistent: o.thatReturnsFalse,
    destructor: function () {
      var e = this.constructor.Interface;
      for (var t in e) this[t] = null;
      for (var r = 0; r < c.length; r++) this[c[r]] = null;
    }
  }), h.Interface = d, h.augmentClass = function (e, t) {
    var r = this,
      o = function () {};
    o.prototype = r.prototype;
    var s = new o();
    n(s, e.prototype), e.prototype = s, e.prototype.constructor = e, e.Interface = n({}, r.Interface, t), e.augmentClass = r.augmentClass, i.addPoolingTo(e, i.fourArgumentPooler);
  }, i.addPoolingTo(h, i.fourArgumentPooler), e.exports = h;
};
