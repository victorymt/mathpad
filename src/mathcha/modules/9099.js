/* module 9099 — 3867 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => d
  });
  var n = r(64467),
    i = r(77137),
    o = r(39204),
    s = window.g_version;
  const a = e => {
    var t = s ? ".".concat(s) : "",
      r = "/running".concat(t, ".").concat(e, ".js");
    if (o.h.useCdn()) {
      var n = new Blob(['importScripts("'.concat(o.h.resolveStaticAssetPath(r), '")')]);
      return new Worker(URL.createObjectURL(n));
    }
    return new Worker(r);
  };
  r.dn(a);
  var l = r(65606),
    c = 1e9;
  class d {
    constructor(e, t, r, i) {
      (0, n.A)(this, "workerPath", void 0), (0, n.A)(this, "onUnresolvedIdMsg", void 0), (0, n.A)(this, "onAllMsg", void 0), (0, n.A)(this, "onWorkerError", void 0), (0, n.A)(this, "idMap", {}), (0, n.A)(this, "secondMap", {}), (0, n.A)(this, "worker", void 0), (0, n.A)(this, "lastId", void 0), (0, n.A)(this, "workerError", void 0), this.workerPath = e, this.onUnresolvedIdMsg = t, this.onAllMsg = r, this.onWorkerError = i, this.initForceLoad();
    }
    initForceLoad() {
      try {
        if (l && {
          NODE_ENV: "production",
          NO_CDN: !1
        }.IN_NODE_ENV) return void console.log("In Node Environment");
      } catch (e) {}
      setTimeout(() => {
        this.initWorker();
      }, 2e3);
    }
    initWorker() {
      l && {
        NODE_ENV: "production",
        NO_CDN: !1
      }.IN_NODE_ENV ? console.log("In Node Environment") : this.worker || (this.worker = a(this.workerPath), this.worker.onmessage = e => {
        var t = e.data,
          r = t.id;
        t.errorMsg ? this.reject(r, !1) : this.resolve(r, t.data);
      }, this.worker.onerror = e => {
        var t;
        i.A.error(e), this.workerError = e, this.reject(this.lastId, !1), null === (t = this.onWorkerError) || void 0 === t || t.call(this);
      });
    }
    resolve(e, t) {
      var r = this.idMap[e],
        n,
        i;
      "all" != e ? r ? (clearTimeout(r.timeout), r.resolve({
        data: t,
        status: "result"
      }), this.idMap[e] = void 0, this.handleSecondRequest(e)) : null === (n = this.onUnresolvedIdMsg) || void 0 === n || n.call(this, t) : null === (i = this.onAllMsg) || void 0 === i || i.call(this, t);
    }
    reject(e, t) {
      var r = this.idMap[e];
      r && (r.reject(), t && (this.worker.terminate(), this.initWorker()), this.handleSecondRequest(e));
    }
    handleSecondRequest(e) {
      var t = this.secondMap[e];
      if (t) {
        this.idMap[e] = this.secondMap[e], this.secondMap[e] = void 0;
        var r = setTimeout(() => {
          this.reject(e, !0);
        }, c);
        this.idMap[e].timeout = r, this.worker.postMessage({
          id: e,
          data: t.requestParam
        });
      }
    }
    terminate() {
      this.worker.terminate();
    }
    requestAndIgnore(e) {
      this.initWorker(), this.worker.postMessage({
        id: "rdi-".concat(Math.random()),
        data: e
      });
    }
    request(e, t) {
      if (this.workerError) return Promise.reject("Worker unable to load");
      this.lastId = t, this.initWorker();
      var r = this.idMap[t],
        n;
      return r ? this.secondMap[t] ? (this.secondMap[t].requestParam = e, Promise.resolve({
        data: null,
        status: "running"
      })) : new Promise((r, n) => {
        this.secondMap[t] = {
          id: t,
          resolve: r,
          reject: n,
          timeout: null,
          requestParam: e
        };
      }) : new Promise((n, i) => {
        var o = setTimeout(() => {
          this.reject(t, !0);
        }, c);
        r = {
          id: t,
          resolve: n,
          reject: i,
          timeout: o,
          requestParam: e
        }, this.idMap[t] = r, this.worker.postMessage({
          id: t,
          data: e
        });
      });
    }
    clearAllCall() {
      this.idMap = {}, this.secondMap = {};
    }
  }
};
