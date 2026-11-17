/* module 86420 — 740 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(45228),
    i = r(18806),
    o = r(83153),
    s = r(59395),
    a = {
      initialize: s,
      close: function () {
        p.isBatchingUpdates = !1;
      }
    },
    l,
    c = [{
      initialize: s,
      close: i.flushBatchedUpdates.bind(i)
    }, a];
  function d() {
    this.reinitializeTransaction();
  }
  n(d.prototype, o, {
    getTransactionWrappers: function () {
      return c;
    }
  });
  var h = new d(),
    p = {
      isBatchingUpdates: !1,
      batchedUpdates: function (e, t, r, n, i, o) {
        var s = p.isBatchingUpdates;
        return p.isBatchingUpdates = !0, s ? e(t, r, n, i, o) : h.perform(e, null, t, r, n, i, o);
      }
    };
  e.exports = p;
};
