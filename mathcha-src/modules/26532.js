/* module 26532 — 1363 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    a: () => s
  });
  var n = r(19032),
    i = r(86081);
  class o {
    visitTextModeFromRootEditor(e, t) {
      var r;
      null === (r = t.visitRootEditor) || void 0 === r || r.call(t, e), e.lines.forEach(e => {
        var r;
        null === (r = t.visitRootLine) || void 0 === r || r.call(t, e), this.visitTextModeLine(e, t);
      });
    }
    visitTextModeFromEditor(e, t) {
      var r;
      null === (r = t.visitEditor) || void 0 === r || r.call(t, e), e.lines.forEach(e => {
        var r;
        null === (r = t.visitLine) || void 0 === r || r.call(t, e), this.visitTextModeLine(e, t);
      });
    }
    visitTextModeLine(e, t) {
      e.blocks.forEach(e => {
        var r;
        null === (r = t.visitBlock) || void 0 === r || r.call(t, e), this.visitBlock(e, t);
      });
    }
    getTextModeElements(e) {
      var t = e.elements || {};
      return i.A.isDiagramBlock(e) ? n.A.getElementKeys(e).filter(e => t[e].isTextMode || "caption" == e) : n.A.getElementKeys(e);
    }
    visitBlock(e, t) {
      if (n.A.blockStillTextModeFromRootIncludeDiagram(e)) {
        var r;
        if (!e.elements) return;
        this.getTextModeElements(e).forEach(r => {
          var n = e.elements[r];
          this.visitTextModeFromEditor(n, t);
        });
      }
    }
  }
  var s = new o();
};
