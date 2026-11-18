/* module 59310 — 1560 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Q: () => s
  });
  var n = r(2543),
    i = r.n(n);
  class o {
    toMap(e, t) {
      var r = new Map();
      return e.forEach(e => {
        r.set(e[t], e);
      }), r;
    }
    exclude(e, t) {
      return i().filter(e, e => e != t);
    }
    splitAt(e, t) {
      return {
        first: i().slice(e, 0, t),
        tail: i().slice(e, t)
      };
    }
    setLength(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
      if ((e = e || []).length == t) return e;
      if (e.length > t) return e.slice(0, t);
      var n = e.length;
      return e.length = t, e.fill(r, n), e;
    }
    newArray(e) {
      var t;
      return !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1] ? Array.from({
        length: e
      }) : new Array(e);
    }
    new2DMatrix(e, t) {
      return this.newArray(e, !0).map(() => this.newArray(t, !0));
    }
    cloneSetLength(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
      return this.setLength(i().clone(e), t, r);
    }
    map2(e, t, r) {
      for (var n = e.length, i = [new Array(e.length), new Array(e.length)], o = 0; o < n; o++) i[0][o] = e[o][t], i[1][o] = e[o][r];
      return i;
    }
    hasItem(e) {
      return e && e.length > 0;
    }
    idxFound(e) {
      return e >= 0;
    }
    safeConcat(e, t, r) {
      var n;
      if (n = e && t ? e.concat(t) : e || t, !(r && n && n.length <= 0)) return n;
    }
  }
  var s = new o();
};
