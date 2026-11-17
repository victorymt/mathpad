/* module 11742 — 1958 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(64467),
    i = r(30803),
    o = r(77137),
    s = r(70224);
  class a {
    constructor() {
      (0, n.A)(this, "isDocumentCorrupted", !1);
    }
    makeSureLine(e, t) {
      var r = e[t];
      return null == r && (o.A.warn("Corruption recovery: line is null"), r = {
        id: i.w.nextId(),
        blocks: []
      }, e[t] = r), r;
    }
    makeSureBlock(e, t) {
      var r = e[t];
      return null == r ? (o.A.warn("Corruption recovery: block is null"), r = {
        id: i.w.nextId(),
        text: " "
      }, e[t] = r) : r.text || (o.A.warn("Corruption recovery: block text is null or empty"), r.text = " ", r.type && (r.type = void 0)), r;
    }
    deleteWrongFormatDiagramEditor(e, t) {
      var r = e.elements[t];
      if (r) {
        if ("caption" != t) return r.id && r.lines ? i.w.isDiagramEditorId(t) && i.w.isDiagramEditorId(r.id) && r.shape ? void 0 : (o.A.warn("Corruption remove: editor model is not in correct format in diagram"), void delete e.elements[t]) : (o.A.warn("Corruption remove: editor model is missing id or lines"), void delete e.elements[t]);
      } else delete e.elements[t];
    }
    makeSureEditorModel(e, t) {
      var r = t[e];
      return null == r && (o.A.warn("Corruption recovery: editor model is null"), r = s.A.createEmptyEditor(), t[e] = r), r;
    }
    makeSureBlocks(e) {
      e && (e.blocks || (o.A.warn("Corruption recovery: blocks is null"), e.blocks = []));
    }
    makeSureLines(e) {
      e && (e.lines && e.lines[0] || (o.A.warn("Corruption recovery: lines is null or first line is null"), e.lines = [s.A.createEmptyLine()]));
    }
    requestDocumentCorruption() {
      this.isDocumentCorrupted = !0;
    }
    isCurrentDocumentInCorruption() {
      return this.isDocumentCorrupted;
    }
    clearDocumentCorruptionState() {
      this.isDocumentCorrupted = !1;
    }
  }
  const l = new a();
};
