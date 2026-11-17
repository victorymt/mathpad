/* module 53778 — 698 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => s
  });
  var n = r(91783),
    i = r(97372);
  class o {
    initMetricInfo() {
      return {
        haveLowerChar: !1,
        haveUpperChar: !1,
        haveComposite: !1,
        haveIndex: !1,
        havePower: !1,
        hasTextBlock: !1
      };
    }
    fillMetricsForTextBlock(e, t) {
      return t = t || this.initMetricInfo(), n.A.isAnyUpperBigUni(e) && (t.haveUpperChar = !0), n.A.isAnyLowerBigUni(e) && (t.haveLowerChar = !0), t.hasTextBlock = !0, t;
    }
    fillMetricsForNonTextBlock(e, t, r) {
      return (r = r || this.initMetricInfo()).haveComposite = !i.A.isOpenClose(e), r;
    }
  }
  const s = new o();
};
