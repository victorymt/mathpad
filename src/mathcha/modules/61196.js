/* module 61196 — 3247 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => d
  });
  var n = r(64467),
    i = r(2543),
    o = r.n(i),
    s = r(61848);
  function a(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function l(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? a(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class c {
    toggleLineSection(e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return (e = e || {}).borders ? this.toggleFromToSections(e, t, r) : e.nOfLines ? this.toggleOffLineSection(e, t, r) : this.toggleOnBorderSections(e, t, r);
    }
    isInsideRange(e, t) {
      return !!e && !!e[t];
    }
    toggleFromToSections(e, t, r) {
      var n = t.nOfSections,
        i = t.toggleIndex,
        o = e.borders,
        a = s.A.setIndex(o, i, !o[i]);
      return this.normalizeLineInfo(a, e, n, r);
    }
    normalizeLineInfo(e, t, r, n) {
      var i = void 0,
        s = this.removeFalseBorderAtEnd(e),
        a,
        c;
      0 == s.length && (i = 0, s = void 0), o().times(r).every((t, r) => e[r]) && (i = 1, s = void 0);
      var d = l(l({}, t), {}, {
        nOfLines: i,
        borders: s
      });
      return n && (d.booktabRule = t.booktabRule && void 0 === s), void 0 === d.booktabRule && delete d.booktabRule, d;
    }
    removeFalseBorderAtEnd(e) {
      if (!e) return e;
      var t = e.lastIndexOf(!0);
      return t < 0 ? [] : e.slice(0, t + 1);
    }
    getSafeBorders(e, t, r) {
      return e || o().times(t).map(() => r);
    }
    toggleOnBorderSections(e, t, r) {
      var n = t.nOfSections,
        i = t.toggleIndex,
        o = s.A.setIndex(this.getSafeBorders(e.borders, n, !1), i, !0);
      return this.normalizeLineInfo(o, e, n, r);
    }
    toggleOffLineSection(e, t, r) {
      var n = t.nOfSections,
        i = t.toggleIndex,
        o = s.A.setIndex(this.getSafeBorders(e.borders, n, !0), i, !1);
      return this.normalizeLineInfo(o, e, n, r);
    }
    toggleBooktab(e, t) {
      return e ? t && !e.booktabRule ? l(l({}, e), {}, {
        booktabRule: !e.booktabRule,
        borders: void 0,
        nOfLines: e.nOfLines || 1
      }) : l(l({}, e), {}, {
        booktabRule: !e.booktabRule
      }) : e;
    }
    increaseLine(e) {
      return (e = e || {}).borders ? l(l({}, e), {}, {
        nOfLines: 1,
        borders: void 0
      }) : l(l({}, e), {}, {
        nOfLines: Math.min((e.nOfLines || 0) + 1, 10),
        borders: void 0
      });
    }
    reduceLine(e) {
      return l(l({}, e = e || {}), {}, {
        nOfLines: Math.max((e.nOfLines || 0) - 1, 0),
        borders: void 0
      });
    }
  }
  const d = new c();
};
