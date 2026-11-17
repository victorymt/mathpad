/* module 3340 — 1059 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(7973),
    i = r(83982),
    o = r(14594);
  function s() {
    n.attachRefs(this, this._currentElement);
  }
  var a = {
    mountComponent: function (e, t, r, n, i, o) {
      var a = e.mountComponent(t, r, n, i, o);
      return e._currentElement && null != e._currentElement.ref && t.getReactMountReady().enqueue(s, e), a;
    },
    getHostNode: function (e) {
      return e.getHostNode();
    },
    unmountComponent: function (e, t) {
      n.detachRefs(e, e._currentElement), e.unmountComponent(t);
    },
    receiveComponent: function (e, t, r, i) {
      var o = e._currentElement;
      if (t !== o || i !== e._context) {
        0;
        var a = n.shouldUpdateRefs(o, t);
        a && n.detachRefs(e, o), e.receiveComponent(t, r, i), a && e._currentElement && null != e._currentElement.ref && r.getReactMountReady().enqueue(s, e);
      }
    },
    performUpdateIfNecessary: function (e, t, r) {
      e._updateBatchNumber === r && e.performUpdateIfNecessary(t);
    }
  };
  e.exports = a;
};
