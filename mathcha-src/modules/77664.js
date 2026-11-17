/* module 77664 — 3283 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => u,
    e: () => h
  });
  var n = r(64467),
    i = r(19340),
    o = r(61824),
    s = r(50510),
    a = [{
      id: "1",
      name: "Figure",
      numeringType: "default"
    }],
    l = [{
      id: "1",
      name: "Table",
      numeringType: "default"
    }],
    c = [{
      id: "1",
      name: "Drawing",
      numeringType: "default"
    }],
    d = {},
    h = {
      width: void 0,
      height: 1122,
      presetSize: void 0,
      sizeUnit: "px",
      margin: {
        left: 20,
        top: 15,
        right: 20,
        bottom: 20
      }
    };
  class p {
    constructor() {
      (0, n.A)(this, "default", {
        worksheetLabels: void 0,
        fontName: "helvet",
        fontSize: 15,
        mathFontSize: 17,
        spellCheck: d,
        imageCaptions: a,
        tableCaptions: l,
        diagramCaptions: c,
        mathFontName: "Asana",
        subMathFontName: "\\mathnormal",
        codeSectionFontSize: 15,
        isDarkMode: !1,
        bracketSettings: {},
        compatibility: {},
        pageSection: {},
        textLineHeight: 1.4,
        mathLineHeight: 1.2,
        disableDelayRendering: !1,
        disableDelayInDiagram: !1,
        pageSize: h,
        printedPageSize: void 0,
        paragraph: s.m.defaultParagraph,
        cites: {
          recentCslStyles: []
        },
        mathTagRefs: {
          blockStyle: {
            color: "green"
          }
        },
        mathTags: {}
      });
    }
    getOrDefault(e) {
      if (!e) return this.default;
      var t = this.default,
        r = e.mathFontName || t.mathFontName,
        n = (0, i.zN)(r),
        s = n.id !== r || !o.$O && n.developmentOnly ? t.mathFontName : r;
      return {
        worksheetLabels: e.worksheetLabels,
        fontName: e.fontName || t.fontName,
        fontSize: e.fontSize || t.fontSize,
        mathFontSize: e.mathFontSize || t.mathFontSize,
        spellCheck: e.spellCheck || t.spellCheck,
        imageCaptions: e.imageCaptions || t.imageCaptions,
        tableCaptions: e.tableCaptions || t.tableCaptions,
        diagramCaptions: e.diagramCaptions || t.diagramCaptions,
        mathFontName: s,
        subMathFontName: e.subMathFontName || t.subMathFontName,
        codeSectionFontSize: e.codeSectionFontSize || t.codeSectionFontSize,
        isDarkMode: e.isDarkMode || t.isDarkMode,
        bracketSettings: e.bracketSettings || t.bracketSettings,
        compatibility: e.compatibility || t.compatibility,
        pageSection: e.pageSection || t.pageSection,
        textLineHeight: e.textLineHeight || t.textLineHeight,
        mathLineHeight: e.mathLineHeight || t.mathLineHeight,
        disableDelayRendering: e.disableDelayRendering || t.disableDelayRendering,
        disableDelayInDiagram: e.disableDelayInDiagram || t.disableDelayInDiagram,
        pageSize: e.pageSize || t.pageSize,
        printedPageSize: e.printedPageSize,
        paragraph: e.paragraph || t.paragraph,
        cites: e.cites || t.cites,
        mathTagRefs: e.mathTagRefs || t.mathTagRefs,
        mathTags: e.mathTags || t.mathTags
      };
    }
    hasAnyParagraphSpacingSet(e) {
      return s.m.hasAnyParagraphSpacingSet(e);
    }
  }
  const u = new p();
};
