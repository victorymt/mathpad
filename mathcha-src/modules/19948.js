/* module 19948 — 1895 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(45228),
    i = r(22754),
    o = r(18367),
    s = r(9248),
    a = r(83997),
    l = r(18806),
    c = r(53080),
    d = r(37458);
  function h(e) {
    for (; e._hostParent;) e = e._hostParent;
    var t,
      r = a.getNodeFromInstance(e).parentNode;
    return a.getClosestInstanceFromNode(r);
  }
  function p(e, t) {
    this.topLevelType = e, this.nativeEvent = t, this.ancestors = [];
  }
  function u(e) {
    var t = c(e.nativeEvent),
      r = a.getClosestInstanceFromNode(t),
      n = r;
    do {
      e.ancestors.push(n), n = n && h(n);
    } while (n);
    for (var i = 0; i < e.ancestors.length; i++) r = e.ancestors[i], m._handleTopLevel(e.topLevelType, r, e.nativeEvent, c(e.nativeEvent));
  }
  function g(e) {
    var t;
    e(d(window));
  }
  n(p.prototype, {
    destructor: function () {
      this.topLevelType = null, this.nativeEvent = null, this.ancestors.length = 0;
    }
  }), s.addPoolingTo(p, s.twoArgumentPooler);
  var m = {
    _enabled: !0,
    _handleTopLevel: null,
    WINDOW_HANDLE: o.canUseDOM ? window : null,
    setHandleTopLevel: function (e) {
      m._handleTopLevel = e;
    },
    setEnabled: function (e) {
      m._enabled = !!e;
    },
    isEnabled: function () {
      return m._enabled;
    },
    trapBubbledEvent: function (e, t, r) {
      return r ? i.listen(r, t, m.dispatchEvent.bind(null, e)) : null;
    },
    trapCapturedEvent: function (e, t, r) {
      return r ? i.capture(r, t, m.dispatchEvent.bind(null, e)) : null;
    },
    monitorScrollValue: function (e) {
      var t = g.bind(null, e);
      i.listen(window, "scroll", t);
    },
    dispatchEvent: function (e, t) {
      if (m._enabled) {
        var r = p.getPooled(e, t);
        try {
          l.batchedUpdates(u, r);
        } finally {
          p.release(r);
        }
      }
    }
  };
  e.exports = m;
};
