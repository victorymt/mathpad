/* module 12753 — 2582 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => a
  });
  var n = r(10467),
    i = r(92207),
    o = r.n(i);
  class s {
    voidAllOf() {
      for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      return this.asyncVoidAll({
        ps: t,
        index: 0
      });
    }
    voidAllOfArr(e) {
      return this.asyncVoidAll({
        ps: e,
        index: 0
      });
    }
    executeAfter(e, t) {
      return e ? e.then(t) : t();
    }
    asyncVoidAll(e) {
      for (; e.index < e.ps.length; e.index++) {
        var t = e.ps[e.index];
        if (t) return e.index++, t.then(() => this.asyncVoidAll(e));
      }
    }
    calledCheckFunc(e) {
      e.called = !0, e.callFunc && e.callFunc();
    }
    toPromiseOnRequire(e) {
      var t = {
          called: !1,
          callFunc: void 0
        },
        r;
      if (e(this.calledCheckFunc.bind(this, t)), !t.called) return new Promise(e => {
        t.callFunc = e;
      });
    }
    buildHandleRefPromise() {
      var e, t;
      return {
        pm: new Promise(t => {
          e = e => {
            e && t(e);
          };
        }),
        hdl: e
      };
    }
    retryOnTrueOrThrow(e, t, r, i) {
      return (0, n.A)(o().mark(function n() {
        return o().wrap(function n(o) {
          for (;;) switch (o.prev = o.next) {
            case 0:
              return o.abrupt("return", new Promise(function (n, o) {
                var s = 0;
                !function a() {
                  var l;
                  if (!e(s)) return s < t ? (console.log("retry, times: ", s), s++, void setTimeout(() => {
                    a();
                  }, r)) : void o(i);
                  n();
                }();
              }));
            case 1:
            case "end":
              return o.stop();
          }
        }, n);
      }))();
    }
    retryUntilUndefined(e, t) {
      return (0, n.A)(o().mark(function r() {
        return o().wrap(function r(n) {
          for (;;) switch (n.prev = n.next) {
            case 0:
              return n.abrupt("return", new Promise(function (r) {
                var n = 0;
                !function i() {
                  e().then(e => {
                    if (e) return n < t ? (console.log("retry, times: ", n), n++, void i()) : void r(e);
                    r(void 0);
                  });
                }();
              }));
            case 1:
            case "end":
              return n.stop();
          }
        }, r);
      }))();
    }
  }
  const a = new s();
};
