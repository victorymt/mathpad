/* module 22012 — 605 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    t: () => s
  });
  var n = r(2543),
    i = r.n(n);
  class o {
    buildRemainderKey(e) {
      return "r_".concat(e);
    }
    getRemaindersSortedKeys1(e) {
      return i().sortBy(e.map(e => {
        if (this.isRemainderKey(e)) return {
          index: this.parseRemainderIndex(e),
          key: e
        };
      }).filter(e => e), e => e.index).map(e => e.key);
    }
    isRemainderKey(e) {
      return i().startsWith(e, "r_");
    }
    parseRemainderIndex(e) {
      return Number.parseInt(e.substr(2), 10);
    }
  }
  var s = new o();
};
