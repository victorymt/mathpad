/* module 7817 — 702 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(45228),
    i = r(9248),
    o = r(83153),
    s = r(83982),
    a = r(58309),
    l = [];
  var c = {
    enqueue: function () {}
  };
  function d(e) {
    this.reinitializeTransaction(), this.renderToStaticMarkup = e, this.useCreateElement = !1, this.updateQueue = new a(this);
  }
  var h = {
    getTransactionWrappers: function () {
      return l;
    },
    getReactMountReady: function () {
      return c;
    },
    getUpdateQueue: function () {
      return this.updateQueue;
    },
    destructor: function () {},
    checkpoint: function () {},
    rollback: function () {}
  };
  n(d.prototype, o, h), i.addPoolingTo(d), e.exports = d;
};
