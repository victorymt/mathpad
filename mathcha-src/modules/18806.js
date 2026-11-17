/* module 18806 — 3376 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(45228),
    o = r(28999),
    s = r(9248),
    a = r(83507),
    l = r(3340),
    c = r(83153),
    d = r(90646),
    h = [],
    p = 0,
    u = o.getPooled(),
    g = !1,
    m = null;
  function f() {
    D.ReactReconcileTransaction && m || n("123");
  }
  var y,
    v,
    b = [{
      initialize: function () {
        this.dirtyComponentsLength = h.length;
      },
      close: function () {
        this.dirtyComponentsLength !== h.length ? (h.splice(0, this.dirtyComponentsLength), w()) : h.length = 0;
      }
    }, {
      initialize: function () {
        this.callbackQueue.reset();
      },
      close: function () {
        this.callbackQueue.notifyAll();
      }
    }];
  function x() {
    this.reinitializeTransaction(), this.dirtyComponentsLength = null, this.callbackQueue = o.getPooled(), this.reconcileTransaction = D.ReactReconcileTransaction.getPooled(!0);
  }
  function C(e, t, r, n, i, o) {
    return f(), m.batchedUpdates(e, t, r, n, i, o);
  }
  function S(e, t) {
    return e._mountOrder - t._mountOrder;
  }
  function A(e) {
    var t = e.dirtyComponentsLength;
    t !== h.length && n("124", t, h.length), h.sort(S), p++;
    for (var r = 0; r < t; r++) {
      var i = h[r],
        o = i._pendingCallbacks,
        s;
      if (i._pendingCallbacks = null, a.logTopLevelRenders) {
        var c = i;
        i._currentElement.type.isReactTopLevelWrapper && (c = i._renderedComponent), s = "React update: " + c.getName(), console.time(s);
      }
      if (l.performUpdateIfNecessary(i, e.reconcileTransaction, p), s && console.timeEnd(s), o) for (var d = 0; d < o.length; d++) e.callbackQueue.enqueue(o[d], i.getPublicInstance());
    }
  }
  i(x.prototype, c, {
    getTransactionWrappers: function () {
      return b;
    },
    destructor: function () {
      this.dirtyComponentsLength = null, o.release(this.callbackQueue), this.callbackQueue = null, D.ReactReconcileTransaction.release(this.reconcileTransaction), this.reconcileTransaction = null;
    },
    perform: function (e, t, r) {
      return c.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, e, t, r);
    }
  }), s.addPoolingTo(x);
  var w = function () {
    for (; h.length || g;) {
      if (h.length) {
        var e = x.getPooled();
        e.perform(A, null, e), x.release(e);
      }
      if (g) {
        g = !1;
        var t = u;
        u = o.getPooled(), t.notifyAll(), o.release(t);
      }
    }
  };
  function E(e) {
    f(), m.isBatchingUpdates ? (h.push(e), null == e._updateBatchNumber && (e._updateBatchNumber = p + 1)) : m.batchedUpdates(E, e);
  }
  function k(e, t) {
    d(m.isBatchingUpdates, "ReactUpdates.asap: Can't enqueue an asap callback in a context whereupdates are not being batched."), u.enqueue(e, t), g = !0;
  }
  var O,
    D = {
      ReactReconcileTransaction: null,
      batchedUpdates: C,
      enqueueUpdate: E,
      flushBatchedUpdates: w,
      injection: {
        injectReconcileTransaction: function (e) {
          e || n("126"), D.ReactReconcileTransaction = e;
        },
        injectBatchingStrategy: function (e) {
          e || n("127"), "function" != typeof e.batchedUpdates && n("128"), "boolean" != typeof e.isBatchingUpdates && n("129"), m = e;
        }
      },
      asap: k
    };
  e.exports = D;
};
