/* module 29856 — 1610 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    B: () => a
  });
  var n = r(64467),
    i = r(2543),
    o = r.n(i),
    s = r(21774);
  class a {
    constructor() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      (0, n.A)(this, "intermidiateRequiredKeys", void 0), (0, n.A)(this, "accummulations", {}), (0, n.A)(this, "count", 0), (0, n.A)(this, "isFirst", !0), this.intermidiateRequiredKeys = e;
    }
    next(e) {
      var t = e || {},
        r = this.accummulations;
      if (this.count++, this.count > 50) return "stop";
      var n = r,
        i = t;
      return this.isFirst ? (o().keys(t).forEach(e => {
        n[e] = {
          styleValue: i[e],
          isDifferent: !1
        };
      }), this.isFirst = !1, "next") : (o().keys(r).forEach(e => {
        i[e] && this.styleValueEquals(i[e], n[e].styleValue) || (n[e].isDifferent = !0);
      }), o().keys(t).forEach(e => {
        n[e] ? this.styleValueEquals(n[e].styleValue, i[e]) || (n[e].isDifferent = !0) : n[e] = {
          styleValue: i[e],
          isDifferent: !0
        };
      }), "next");
    }
    styleValueEquals(e, t) {
      return e instanceof Array && t instanceof Array ? s.A.arrayEquals(e, t) : e == t;
    }
    end() {
      var e = this.accummulations,
        t = {};
      for (var r in e) if (e.hasOwnProperty(r)) {
        var n = e[r];
        if (!this.intermidiateRequiredKeys.includes(r)) {
          if (n.isDifferent) continue;
          t[r] = n.styleValue;
        }
        t[r] = n.isDifferent ? "" : n.styleValue;
      }
      return t;
    }
  }
};
