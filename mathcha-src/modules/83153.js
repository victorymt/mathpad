/* module 83153 — 1933 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(90646),
    o = {},
    s = {
      reinitializeTransaction: function () {
        this.transactionWrappers = this.getTransactionWrappers(), this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [], this._isInTransaction = !1;
      },
      _isInTransaction: !1,
      getTransactionWrappers: null,
      isInTransaction: function () {
        return !!this._isInTransaction;
      },
      perform: function (e, t, r, i, o, s, a, l) {
        var c, d;
        this.isInTransaction() && n("27");
        try {
          this._isInTransaction = !0, c = !0, this.initializeAll(0), d = e.call(t, r, i, o, s, a, l), c = !1;
        } finally {
          try {
            if (c) try {
              this.closeAll(0);
            } catch (e) {} else this.closeAll(0);
          } finally {
            this._isInTransaction = !1;
          }
        }
        return d;
      },
      initializeAll: function (e) {
        for (var t = this.transactionWrappers, r = e; r < t.length; r++) {
          var n = t[r];
          try {
            this.wrapperInitData[r] = o, this.wrapperInitData[r] = n.initialize ? n.initialize.call(this) : null;
          } finally {
            if (this.wrapperInitData[r] === o) try {
              this.initializeAll(r + 1);
            } catch (e) {}
          }
        }
      },
      closeAll: function (e) {
        this.isInTransaction() || n("28");
        for (var t = this.transactionWrappers, r = e; r < t.length; r++) {
          var i = t[r],
            s = this.wrapperInitData[r],
            a;
          try {
            a = !0, s !== o && i.close && i.close.call(this, s), a = !1;
          } finally {
            if (a) try {
              this.closeAll(r + 1);
            } catch (e) {}
          }
        }
        this.wrapperInitData.length = 0;
      }
    };
  e.exports = s;
};
