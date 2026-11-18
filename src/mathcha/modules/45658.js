/* module 45658 — 619 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => c
  });
  var n = r(49812),
    i = r(32422),
    o = r(25154),
    s = r(25321),
    a = r(70224);
  class l {
    normalizeCells(e) {
      var t = n.A.cloneCompositeBlockWithNewElements(e);
      return this.fillMissingElement(t), t = o.A.normalizeTabular(t);
    }
    makeSureNoWidthForHiddenColumn(e) {
      return s.A.makeSureNoWidthForHiddenColumn(e);
    }
    fillMissingElement(e) {
      i.A.cellLoop(e, t => {
        var r = t.key;
        e.elements[r] || (e.elements[r] = a.A.createEmptyEditor());
      });
    }
  }
  const c = new l();
};
