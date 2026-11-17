/* module 19032 — 2024 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => i
  });
  class n {
    isKeyInTabularFormat(e) {
      return /^[0-9]+_[0-9]+$/.test(e);
    }
    getTabularCellIndexFromKey(e) {
      var t = e.split("_");
      return {
        row: Number.parseInt(t[0], 10),
        column: Number.parseInt(t[1], 10)
      };
    }
    blockStillTextModeFromRoot(e) {
      return "composite" == e.type && e.elements && ("\\table" == e.text || "\\theorem" == e.text || "\\latex-table" == e.text || "\\text-mode-group" == e.text || "\\exercise" == e.text || "\\underline-section" == e.text || "\\text-mode-group-inline" == e.text || "\\image-container" == e.text || "\\inline-image" == e.text || "\\super-script" == e.text || "\\sub-script" == e.text || "\\inline-boxed" == e.text || "\\boxed-container" == e.text);
    }
    isCodeSectionBlock(e) {
      return "composite" == e.type && "\\code-section" == e.text;
    }
    blockStillTextModeFromRootIncludeDiagram(e) {
      return this.blockStillTextModeFromRoot(e) || "composite" == e.type && e.elements && "\\diagram" == e.text;
    }
    keysOfBlockStillTextModeFromRoot(e) {
      return e.elements ? "composite" != e.type ? [] : this.blockStillTextModeFromRoot(e) ? this.getExistKeyWithValue(e.elements) : "\\diagram" == e.text && e.elements.caption ? ["caption"] : [] : [];
    }
    getElementKeys(e) {
      if (e.row && e.column) {
        var t = e,
          r;
        return Object.keys(e.elements).filter(r => {
          if (!e.elements[r]) return !1;
          if (!this.isKeyInTabularFormat(r)) return !0;
          var n = this.getTabularCellIndexFromKey(r),
            i = n.row,
            o = n.column;
          return i < t.row && o < t.column;
        });
      }
      return Object.keys(e.elements || {}).filter(t => e.elements[t]);
    }
    getExistKeyWithValue(e) {
      var t = [];
      for (var r in e) if (e.hasOwnProperty(r)) {
        if (!e[r]) continue;
        t.push(r);
      }
      return t;
    }
  }
  const i = new n();
};
