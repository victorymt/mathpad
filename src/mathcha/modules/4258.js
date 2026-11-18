/* module 4258 — 1179 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    O: () => l
  });
  var n = r(59310),
    i = r(516),
    o = r(84258),
    s = r(37566);
  class a {
    shouldAlwaysShownOn1Line(e) {
      if (0 == e.blocks.length) return !0;
      if (e.blocks.length > 2) return !1;
      if (1 == e.blocks.length) {
        var t = e.blocks[0];
        if (!t.type && t.text.length < 4) return !0;
      }
      return !1;
    }
    shouldAlwaysShown(e) {
      if (e.length > 1) return !1;
      var t = e[0];
      return this.shouldAlwaysShownOn1Line(t);
    }
    shouldDelayToShowProgress(e) {
      return e <= 2 || (e <= 6 ? e % 2 == 0 : e <= 12 ? e % 3 == 0 : e <= 20 ? e % 5 == 0 : e % 7 == 0);
    }
    delay() {
      return new Promise(e => setTimeout(e, o.A.getDelayToShowProgress()));
    }
    tryRunStoreCacheSizeOnHtmlLine(e) {
      var t = e;
      t.reactInstance && t.reactInstance.storeCacheSize && t.reactInstance.storeCacheSize();
    }
    getDelayLineModel(e) {
      var t = s.f$(e, "editarea")[0],
        r,
        o = i.A.findEditLines(t, !0).indexOf(e);
      if (n.Q.idxFound(o)) return t.reactInstance.getModel().lines[o];
    }
  }
  var l = new a();
};
