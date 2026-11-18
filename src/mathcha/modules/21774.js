/* module 21774 — 2224 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(64467);
  class i {
    constructor() {
      (0, n.A)(this, "emptyArr", []), (0, n.A)(this, "emptyObj", {});
    }
    isObj(e) {
      return !!e && "object" == typeof e;
    }
    noopFunc() {}
    undefinedIfEmptyObj(e) {
      return this.isEmptyObj(e) ? void 0 : e;
    }
    isEmptyObj(e) {
      for (var t in e) if (e.hasOwnProperty(t)) return !1;
      return JSON.stringify(e) === JSON.stringify({});
    }
    cloneObjectExclude(e) {
      for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
      return this._objectWithoutProperties(e, r);
    }
    _objectWithoutProperties(e, t) {
      var r = {};
      for (var n in e) t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r;
    }
    undefinedIfEmptyArr(e) {
      if (e) return e.length <= 0 ? void 0 : e;
    }
    objectMemberEquals(e, t) {
      if (e == t) return !0;
      if (!!e != !!t) return !1;
      for (var r in e) if (e[r] != t[r]) return !1;
      for (var n in t) if (t[n] != e[n]) return !1;
      return !0;
    }
    getEmptyArr() {
      return this.emptyArr.length > 0 && (this.emptyArr = []), this.emptyArr;
    }
    minMax(e, t, r) {
      r = r || t;
      var n = {
        min: Number.MAX_SAFE_INTEGER,
        max: Number.MIN_SAFE_INTEGER
      };
      return e.forEach(e => {
        n.min = Math.min(n.min, t(e)), n.max = Math.max(n.max, r(e));
      }), n;
    }
    areEqualShallow(e, t) {
      if (e == t) return !0;
      if (!!e != !!t) return !1;
      for (var r in e) if (!(r in t) || e[r] !== t[r]) return !1;
      for (var r in t) if (!(r in e) || e[r] !== t[r]) return !1;
      return !0;
    }
    areEqualShallowFromLeft(e, t) {
      for (var r in e) if (!(r in t) || e[r] !== t[r]) return !1;
      return !0;
    }
    objectReferenceCompare(e, t) {
      return e == t;
    }
    arrayEquals(e, t, r) {
      if (r = r || this.objectReferenceCompare, e == t) return !0;
      if (!!e != !!t) return !1;
      if (e.length != t.length) return !1;
      for (var n = 0; n < e.length; n++) if (!r(e[n], t[n])) return !1;
      return !0;
    }
  }
  const o = new i();
};
