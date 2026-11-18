/* module 86081 — 5981 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => a
  });
  var n = r(90437),
    i = r(2543),
    o = r.n(i);
  class s {
    isAnchorTag(e) {
      return "\\anchor-tag" == e.text && "composite" == e.type;
    }
    isTocBlock(e) {
      return "\\table-of-content" == e.text && "composite" == e.type;
    }
    isFootnote(e) {
      return "\\footnote" == e.text && "composite" == e.type;
    }
    isAnchorTagRef(e) {
      return "\\anchor-tag-ref" == e.text && "composite" == e.type;
    }
    isBibCite(e) {
      return "\\cite" == e.text && "composite" == e.type;
    }
    isBibBibliography(e) {
      return "\\bibliography" == e.text && "composite" == e.type;
    }
    isTabularCompositeBlock(e) {
      return "\\binom" != e.text && n.Z.isKeyInTabularFormat(o().keys(e.elements)[0]);
    }
    isTabularNotBinomAndTableAndLatexTable(e) {
      return "\\binom" != e.text && "\\table" != e.text && "\\latex-table" != e.text && n.Z.isKeyInTabularFormat(o().keys(e.elements)[0]);
    }
    isTabularPreferCellAsSingleLine(e) {
      return this.isComposite(e) && ("\\align" == e.text || "\\gather" == e.text || "\\matrix" == e.text || "\\cases" == e.text || "\\drcases" == e.text || "\\sqcases" == e.text || "\\aligned" == e.text || "\\gathered" == e.text || "\\array" == e.text);
    }
    isSingeLineBlock(e) {
      return this.isComposite(e) && ("\\table" == e.text || "\\bibliography" == e.text || "\\align" == e.text || "\\gather" == e.text || "\\diagram" == e.text && !e.isInline || "\\image-container" == e.text || "\\theorem" == e.text || "\\table-of-content" == e.text || "\\multiline" == e.text || "\\horizontal-line" == e.text || "\\page-break" == e.text || "\\text-mode-group" == e.text || "\\exercise" == e.text || "\\z-schema" == e.text || "\\z-syntax" == e.text || "\\underline-section" == e.text || "\\boxed-container" == e.text || "\\code-section" == e.text || "\\video-container" == e.text || "\\mci-tag-ref" == e.text || "\\math-container" == e.text && e.displayMode);
    }
    isLatexTable(e) {
      return this.isComposite(e) && "\\latex-table" == e.text;
    }
    isTextModeGroup(e) {
      return this.isComposite(e) && "\\text-mode-group" == e.text;
    }
    isExercise(e) {
      return this.isComposite(e) && "\\exercise" === e.text;
    }
    isTocItem(e) {
      return this.isComposite(e) && "\\table-of-content-item" == e.text;
    }
    isTextModeGroupInline(e) {
      return this.isComposite(e) && "\\text-mode-group-inline" == e.text;
    }
    isLongDivision(e) {
      return this.isComposite(e) && "\\longdivision" == e.text;
    }
    isPlotCases(e) {
      return this.isComposite(e) && "\\plot-cases" == e.text;
    }
    isTextSymbol(e) {
      return this.isComposite(e) && "\\text" == e.text;
    }
    isTheorem(e) {
      return e && this.isComposite(e) && "\\theorem" == e.text;
    }
    isUnderline(e) {
      return e && this.isComposite(e) && "\\underline" == e.text;
    }
    isUnderlineSection(e) {
      return e && this.isComposite(e) && "\\underline-section" == e.text;
    }
    isRawLatex(e) {
      return e && this.isComposite(e) && "\\raw-latex" == e.text;
    }
    isComposite(e) {
      return "composite" == e.type;
    }
    isTextBlockModel(e) {
      return !e.type;
    }
    isBinom(e) {
      return this.isComposite(e) && ("\\binom" == e.text || "\\tbinom" == e.text || "\\dbinom" == e.text);
    }
    isCheckbox(e) {
      return this.isComposite(e) && "\\checkbox" == e.text;
    }
    isCodeSection(e) {
      return this.isComposite(e) && "\\code-section" == e.text;
    }
    isInlineBoxed(e) {
      return this.isComposite(e) && "\\inline-boxed" == e.text;
    }
    isBoxedContainer(e) {
      return this.isComposite(e) && "\\boxed-container" == e.text;
    }
    isTextSuperScript(e) {
      return this.isComposite(e) && "\\super-script" == e.text;
    }
    isTextSubScript(e) {
      return this.isComposite(e) && "\\sub-script" == e.text;
    }
    isTable(e) {
      return this.isComposite(e) && "\\table" == e.text;
    }
    isInTableCaption(e, t) {
      return this.isTable(e) && "caption" == t;
    }
    isInTableNotCaption(e, t) {
      return this.isTable(e) && "caption" != t;
    }
    isDiagramBlock(e) {
      return e && "composite" == e.type && "\\diagram" == e.text;
    }
    isImageContainerBlock(e) {
      return e && "composite" == e.type && "\\image-container" == e.text;
    }
    isInlineImageBlock(e) {
      return e && "composite" == e.type && "\\inline-image" == e.text;
    }
    isLineBreak(e) {
      return e && "composite" == e.type && "\\line-break" == e.text;
    }
    isSingleBlock(e) {
      return e.type && "composite" == e.type && ("\\math-container" == e.text && e.displayMode || "\\align" == e.text || "gather" == e.text);
    }
    isInlineMath(e) {
      return "composite" == e.type && "\\math-container" == e.text && !e.displayMode;
    }
    isMathContainer(e) {
      return "composite" == e.type && "\\math-container" == e.text;
    }
    styleInheritToChildren(e) {
      return "composite" == e.type && (this.isTheorem(e) || this.isExercise(e) || this.isRootCompositeBlockAsTextBlockProperty(e));
    }
    isRootCompositeBlockAsTextBlockProperty(e) {
      return "composite" == e.type && ("\\mathcha" == e.text || "\\checkbox" == e.text || "\\page-number" == e.text || "\\page-count" == e.text || "\\page-section-level-1" == e.text || "\\page-section-level-2" == e.text || "\\page-section-level-3" == e.text || "\\super-script" == e.text || "\\sub-script" == e.text || "\\footnote" == e.text || "\\image-caption-ref" == e.text || "\\table-caption-ref" == e.text || "\\diagram-caption-ref" == e.text || "\\anchor-tag" == e.text || "\\anchor-tag-ref" == e.text || "\\cite" == e.text || "\\section-ref" == e.text || "\\tag-ref" == e.text || "\\cursor-placement" == e.text);
    }
    isCursorPlacement(e) {
      return e && "composite" == e.type && "\\cursor-placement" == e.text;
    }
  }
  const a = new s();
};
