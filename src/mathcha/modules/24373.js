/* module 24373 — 1215 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(37566),
    i = r(516),
    o = r(36223);
  class s {
    getScrollSelector(e) {
      return e || "html, body";
    }
    registerEventToFixScroll(e) {
      n.KT(e, "wheel", a, o.A.getFalsePassiveObject());
    }
    unregisterEventToFixScroll(e) {
      n.Bo(e, "wheel", a);
    }
    scrollToElement(e, t, r) {
      var o,
        s = n.Yt(e)[0],
        a = n.Yt(t)[0],
        l = i.A.findRectElementToElement(a, s);
      n.i0(s, {
        scrollTop: (null === (o = n.Yt(s)[0]) || void 0 === o ? void 0 : o.scrollTop) + l.top - (void 0 === r.offsetToTop ? 200 : r.offsetToTop)
      }, void 0 === r.duration ? 500 : r.duration, r.callback);
    }
  }
  function a(e) {
    var t = n.Yt(this),
      r = this.scrollTop,
      i = this.scrollHeight,
      o = n.Wk(t),
      s = -e.deltaY * (1 === e.deltaMode ? 16 : 2 === e.deltaMode ? o : 1),
      a = s > 0,
      l = function t() {
        return e.stopPropagation(), e.preventDefault(), !1;
      };
    return !a && -s > i - o - r ? (n.m7(t, {
      scrollTop: i
    }), l()) : a && s > r ? (n.m7(t, {
      scrollTop: 0
    }), l()) : void 0;
  }
  const l = new s();
};
