/* module 55451 — 3159 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => d
  });
  var n = r(64467),
    i = r(40961),
    o = r.n(i);
  class s {
    constructor(e, t) {
      (0, n.A)(this, "runInBatch", void 0), (0, n.A)(this, "delay", void 0), (0, n.A)(this, "timeoutId", void 0), this.runInBatch = e, this.delay = t;
    }
    later(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.delay;
      this.timeoutId && clearTimeout(this.timeoutId), this.runInBatch ? this.timeoutId = setTimeout(() => {
        this.timeoutId = null, o().unstable_batchedUpdates(e);
      }, t) : this.timeoutId = setTimeout(() => {
        this.timeoutId = null, e();
      }, t);
    }
    cancel() {
      this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = null);
    }
    delayExists() {
      return !!this.timeoutId;
    }
  }
  class a {
    constructor(e, t) {
      (0, n.A)(this, "runInBatch", void 0), (0, n.A)(this, "delay", void 0), (0, n.A)(this, "timeoutId", void 0), this.runInBatch = e, this.delay = t;
    }
    later(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.delay;
      this.timeoutId || (this.runInBatch ? this.timeoutId = setTimeout(() => {
        o().unstable_batchedUpdates(e), this.timeoutId = null;
      }, t) : this.timeoutId = setTimeout(() => {
        e(), this.timeoutId = null;
      }, t));
    }
    cancel() {
      this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = null);
    }
    delayExists() {
      return !!this.timeoutId;
    }
  }
  class l {
    constructor(e) {
      (0, n.A)(this, "runInBatch", void 0), (0, n.A)(this, "generation", 0), (0, n.A)(this, "pending", !1), this.runInBatch = e;
    }
    later(e) {
      var t = ++this.generation;
      this.pending = !0, Promise.resolve().then(() => {
        t === this.generation && (this.pending = !1, this.runInBatch ? o().unstable_batchedUpdates(e) : e());
      });
    }
    cancel() {
      this.generation++, this.pending = !1;
    }
    delayExists() {
      return this.pending;
    }
  }
  class c {
    constructor() {
      (0, n.A)(this, "runImmediately", !1);
    }
    setRunImmediately() {
      this.runImmediately = !0;
    }
    nextMicro(e) {
      return Promise.resolve().then(e);
    }
    nextMicroPromise() {
      return Promise.resolve();
    }
    next(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      this.runImmediately ? e() : setTimeout(e, t);
    }
    waitABit(e) {
      this.runImmediately ? e() : setTimeout(e, 10);
    }
    waitALitteWhile(e) {
      this.runImmediately ? e() : setTimeout(e, 100);
    }
    createLaterRunObject(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      if ("latest" == e) return new s(r, "a-little-while" == t ? 100 : t);
      if ("first-request" == e) return new a(r, "a-little-while" == t ? 100 : t);
      throw new Error("Not supported");
    }
    createPromiseLaterRubObject() {
      var e;
      return new l(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]);
    }
  }
  const d = new c();
};
