/* module 12488 — 1683 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    d: () => a
  });
  var n = "MathchaCasDialog",
    i = "CasDialogSnapshots",
    o = "default";
  class s {
    load() {
      return this.withStore("readonly", e => {
        var t = e.get(o);
        return this.requestToPromise(t).then(e => e && e.data);
      });
    }
    save(e) {
      return this.withStore("readwrite", t => {
        var r = t.put({
          id: o,
          data: e,
          updatedAt: e.updatedAt
        });
        return this.requestToPromise(r).then(() => {});
      });
    }
    withStore(e, t) {
      return this.openDb().then(r => {
        var n,
          o = r.transaction(i, e).objectStore(i);
        return t(o).then(e => (r.close(), e)).catch(e => {
          throw r.close(), e;
        });
      }).catch(e => {
        console.warn("CAS dialog IndexedDB unavailable", e);
      });
    }
    openDb() {
      return new Promise((e, t) => {
        var r = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        if (r) {
          var o = r.open(n, 1);
          o.onupgradeneeded = () => {
            o.result.objectStoreNames.contains(i) || o.result.createObjectStore(i, {
              keyPath: "id"
            });
          }, o.onsuccess = () => e(o.result), o.onerror = () => t(o.error || new Error("Could not open CAS dialog IndexedDB"));
        } else t(new Error("IndexedDB is not supported"));
      });
    }
    requestToPromise(e) {
      return new Promise((t, r) => {
        e.onsuccess = () => t(e.result), e.onerror = () => r(e.error || new Error("IndexedDB request failed"));
      });
    }
  }
  var a = new s();
};
