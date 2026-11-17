/* module 83210 — 1345 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(45228),
    i = r(28999),
    o = r(9248),
    s = r(61374),
    a = r(38508),
    l = r(83982),
    c = r(83153),
    d = r(68499),
    h,
    p,
    u,
    g = [{
      initialize: a.getSelectionInformation,
      close: a.restoreSelection
    }, {
      initialize: function () {
        var e = s.isEnabled();
        return s.setEnabled(!1), e;
      },
      close: function (e) {
        s.setEnabled(e);
      }
    }, {
      initialize: function () {
        this.reactMountReady.reset();
      },
      close: function () {
        this.reactMountReady.notifyAll();
      }
    }];
  function m(e) {
    this.reinitializeTransaction(), this.renderToStaticMarkup = !1, this.reactMountReady = i.getPooled(null), this.useCreateElement = e;
  }
  var f = {
    getTransactionWrappers: function () {
      return g;
    },
    getReactMountReady: function () {
      return this.reactMountReady;
    },
    getUpdateQueue: function () {
      return d;
    },
    checkpoint: function () {
      return this.reactMountReady.checkpoint();
    },
    rollback: function (e) {
      this.reactMountReady.rollback(e);
    },
    destructor: function () {
      i.release(this.reactMountReady), this.reactMountReady = null;
    }
  };
  n(m.prototype, c, f), o.addPoolingTo(m), e.exports = m;
};
