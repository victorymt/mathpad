/* module 69446 — 801 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    dm: () => a,
    m5: () => l,
    zZ: () => c
  });
  var n = r(74987),
    i = r.n(n),
    o = r(21774);
  class s {
    constructor() {
      this.buildWithCache = i()(this.buildWithCache);
    }
    mergeWithCache(e, t) {
      return e = e || o.A.emptyObj, t = t || o.A.emptyObj, this.buildWithCache(e.stripUp || t.stripUp, e.stripUpEm || t.stripUpEm, e.stripDown || t.stripDown);
    }
    buildWithCache(e, t, r) {
      return {
        stripUp: e,
        stripUpEm: t,
        stripDown: r
      };
    }
    stripUp() {
      return this.buildWithCache(!0);
    }
    stripDown() {
      return this.buildWithCache(void 0, void 0, !0);
    }
  }
  var a = new s(),
    l = {
      stripDown: !0
    },
    c = {
      stripUp: !0
    };
};
