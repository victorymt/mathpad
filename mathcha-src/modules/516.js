/* module 516 — 21018 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => u,
    U: () => p
  });
  var n = r(64467),
    i = r(2543),
    o = r.n(i),
    s = r(84258),
    a = r(37566),
    l = r(78316);
  function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function d(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? c(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class h {
    constructor() {
      (0, n.A)(this, "elementRectCache", void 0);
    }
    cacheGetElementRectWithin(e, t) {
      if (this.elementRectCache) return e();
      try {
        this.elementRectCache = (null == t ? void 0 : t.cache) || new Map();
        var r = {
            cache: this.elementRectCache
          },
          n = e(r);
        return n instanceof l.K && (n.domElementRectCache = r), n;
      } finally {
        this.elementRectCache = void 0;
      }
    }
    getElementRect(e, t) {
      if (this.elementRectCache && this.elementRectCache.has(e)) return this.elementRectCache.get(e);
      if (s.A.isNoBoundingClientRectSupportForRange() && e instanceof Range) {
        var r = e.getClientRects();
        return (!t || "second-rect" == t) && r.length > 1 && 0 != r[1].left ? r[1] : r[0];
      }
      if (this.elementRectCache) {
        var n = e.getBoundingClientRect();
        return this.elementRectCache.set(e, n), n;
      }
      return e.getBoundingClientRect();
    }
    getTextDirectionFromLine(e) {
      return this.isEditAreaBlock(e) || this.isEditAreaLine(e) ? "ltr" : this.hasBlocksContainer(e) ? this.getTextDirection(this.getBlocksContainerElement(e)) : this.getTextDirection(e);
    }
    findTabularReactInstance(e) {
      var t = e.line,
        r = a.f$(t, "compositeblock.role-tabular");
      if (!(r.length <= 0)) return r[0].reactInstance;
    }
    findTableReactInstance(e) {
      var t = this.findTabularReactInstance(e);
      if (t && t.openCellSettings) return t;
    }
    measureInnerOneLineTextWidth(e) {
      var t = this.rangeFromIndex(e, 0),
        r = this.rangeFromIndex(e, e.textContent.length),
        n = r ? this.getElementRect(r) : null;
      if (null == n) {
        var i = this.getElementRect(e);
        n = d(d({}, i), {}, {
          left: i.right,
          width: 0
        });
      }
      return n.left - this.getElementRect(t).left;
    }
    getCompositeLatexName(e) {
      return e.reactInstance.getModel().text;
    }
    isTabularComposite(e) {
      return a.nB(e, "role-tabular");
    }
    isTable(e) {
      return a.nB(e, "table-symbol");
    }
    isLatexTable(e) {
      return a.nB(e, "latex-table-symbol");
    }
    isPageBreak(e) {
      return a.nB(e, "role-page-break-block");
    }
    isTextModeGroup(e) {
      return a.nB(e, "role-text-mode-group");
    }
    isUnderlineSection(e) {
      return a.nB(e, "underline-section-symbol");
    }
    getTopBottomInludeMargin(e) {
      var t = this.getElementRect(e),
        r = this.getComputedStyleAsNumber(e, "marginTop"),
        n = this.getComputedStyleAsNumber(e, "marginBottom");
      return {
        top: t.top - r,
        bottom: t.bottom + n
      };
    }
    mergeTopBottom(e, t) {
      return {
        top: Math.min(e.top, t.top),
        bottom: Math.max(e.bottom, t.bottom)
      };
    }
    isWraplineCompositeBlocks() {}
    getReactInternalInstance(e) {
      return e.reactInstance;
    }
    isEditArea(e) {
      return "EDITAREA" == e.tagName;
    }
    isEditAreaBlock(e) {
      return "EDITAREA-BLOCK" == e.tagName;
    }
    isEditAreaLine(e) {
      return "EDITAREA-LINE" == e.tagName;
    }
    isSymbolContainerOrRoot(e) {
      return a.nB(e, "main-container") || "COMPOSITEBLOCK" == e.tagName;
    }
    isMathTypeElement(e) {
      return "MATH-TYPE" == e.tagName;
    }
    isEditLine(e) {
      return "LINE" == e.tagName;
    }
    childrenArr(e) {
      return Array.prototype.slice.call(e.children);
    }
    isBlocksInRootLine(e) {
      return "BLOCKS" == e.tagName && "LINE" == e.parentElement.tagName;
    }
    isPrefix(e) {
      return "PREFIX" == e.tagName;
    }
    isComposite(e) {
      return "COMPOSITEBLOCK" == e.tagName;
    }
    hasChildEditor(e) {
      return !!this.isComposite(e) && e.reactInstance.hasEditor();
    }
    hasChildEditorAndAllowMoveInside(e) {
      return this.hasChildEditor(e) && !this.shouldNotMoveNestedEditor(e);
    }
    shouldNotMoveNestedEditor(e) {
      return e.reactInstance.shouldNotMoveInNestedEditor && e.reactInstance.shouldNotMoveInNestedEditor();
    }
    shouldNotMoveOutsideEditor(e) {
      return e.reactInstance.shouldNotMoveOutsideEditor && e.reactInstance.shouldNotMoveOutsideEditor();
    }
    isMathContainer(e) {
      return a.nB(e, "math-container-symbol");
    }
    isMultiline(e) {
      return a.nB(e, "role-multiline-block");
    }
    isCodeSection(e) {
      return a.nB(e, "code-section-symbol");
    }
    isTheorem(e) {
      return a.nB(e, "theorem");
    }
    isDiagram(e) {
      return a.nB(e, "math-diagram");
    }
    isInlineDiagram(e) {
      return a.nB(e, "math-diagram") && a.nB(e, "inline");
    }
    isAlignBlock(e) {
      return this.isComposite(e) && (a.nB(e, "align-symbol") || a.nB(e, "align-symbol-v2"));
    }
    isGatherBlock(e) {
      return this.isComposite(e) && a.nB(e, "gather-symbol");
    }
    isZSchemaBlock(e) {
      return this.isComposite(e) && a.nB(e, "z-schema-symbol");
    }
    isTocBlock(e) {
      return this.isComposite(e) && a.nB(e, "table-of-content");
    }
    isBibliographyBlock(e) {
      return this.isComposite(e) && a.nB(e, "bib-bibliography");
    }
    isBibCiteBlock(e) {
      return this.isComposite(e) && a.nB(e, "bib-cite");
    }
    isSectionRef(e) {
      return this.isComposite(e) && a.nB(e, "section-ref");
    }
    isInlineMathContainer(e) {
      return a.nB(e, "math-container-symbol") && !a.nB(e, "display");
    }
    isDisplayMathContainer(e) {
      return a.nB(e, "math-container-symbol") && a.nB(e, "display");
    }
    isSectionLine(e) {
      return a.nB(e, "section");
    }
    isNonChar(e) {
      return !this.isChar(e);
    }
    isLineBreak(e) {
      return a.nB(e, "line-break-symbol");
    }
    isSubSuperScript(e) {
      return "COMPOSITEBLOCK" == e.tagName && (a.nB(e, "text-super-script-symbol") || a.nB(e, "text-sub-script-symbol"));
    }
    isSuperScript(e) {
      return "COMPOSITEBLOCK" == e.tagName && a.nB(e, "text-super-script-symbol");
    }
    isSubScript(e) {
      return "COMPOSITEBLOCK" == e.tagName && a.nB(e, "text-sub-script-symbol");
    }
    isLineOfSubSuperScript(e) {
      return e.parentElement && e.parentElement.parentElement && this.isSubSuperScript(e.parentElement.parentElement);
    }
    findOuterLineNotInline(e) {
      return this.isLineOfSubSuperScript(e) ? this.findOuterLineNotInline(a.f$(e.parentElement, "LINE")[0]) : e;
    }
    isChar(e) {
      return "BLOCK" == e.tagName || "EDITAREA-BLOCK" == e.tagName;
    }
    isConstantTextSymbol(e) {
      return a.nB(e, "constant-text");
    }
    isMiddleVert(e) {
      return a.nB(e, "middle-vert-symbol");
    }
    isIgnoreExpandBracketSymbol(e) {
      return a.nB(e, "ig-ex-br") && (this.isSingleLineAllCharBlocks(e.firstElementChild.nextElementSibling) || this.isSingleLineAllCharBlocks(e.firstElementChild));
    }
    isSingleLineAllCharBlocks(e) {
      return !!e && ("EDITAREA-BLOCK" == e.tagName || ("EDITAREA-LINE" == e.tagName ? o().every(e.children, e => "BLOCK" == e.tagName || "BASELINEBLOCK" == e.tagName) : "EDITAREA" == e.tagName && !(e.children.length > 1) && ("AREA-CONTAINER" == e.firstElementChild.tagName ? e.firstElementChild.children.length <= 1 && o().every(e.firstElementChild.firstElementChild.children, e => "BLOCK" == e.tagName || "BASELINEBLOCK" == e.tagName) : o().every(e.firstElementChild.children, e => "BLOCK" == e.tagName || "BASELINEBLOCK" == e.tagName))));
    }
    isEmptyBlock(e) {
      return "EMPTYBLOCK" == e.tagName;
    }
    isInnerTextEmpty(e) {
      return !e.textContent;
    }
    isBlock(e) {
      return "BLOCK" == e.tagName || "CLOSESYMBOLBLOCK" == e.tagName || "OPENSYMBOLBLOCK" == e.tagName || "COMPOSITEBLOCK" == e.tagName || "EMPTYBLOCK" == e.tagName || "SINGLEBLOCK" == e.tagName;
    }
    isCharOrOpenCloseBlock(e) {
      return "BLOCK" == e.tagName || "CLOSESYMBOLBLOCK" == e.tagName || "OPENSYMBOLBLOCK" == e.tagName;
    }
    blockHasAnyEditor(e) {
      return !a.nB(e, "no-editor");
    }
    isOpenCloseSymbol(e) {
      return "OPENSYMBOLBLOCK" == e.tagName || "CLOSESYMBOLBLOCK" == e.tagName;
    }
    isOpenSymbol(e) {
      return "OPENSYMBOLBLOCK" == e.tagName;
    }
    isCloseSymbol(e) {
      return "CLOSESYMBOLBLOCK" == e.tagName;
    }
    isLeftOverlapped(e) {
      return a.nB(e, "left-overlaped");
    }
    isPowerSymbol(e) {
      return this.isPowerIndexSymbol(e) && "MIDDLE-BASE" == e.lastElementChild.tagName;
    }
    isIndexSymbol(e) {
      return this.isPowerIndexSymbol(e) && "MIDDLE-BASE" == e.firstElementChild.tagName;
    }
    isSqrtSymbol(e) {
      return a.nB(e, "sqrt-symbol");
    }
    isFrac(e) {
      return a.nB(e, "fraction-symbol");
    }
    isAnchorTag(e) {
      return a.nB(e, "anchor-tag");
    }
    isAnchorTagRef(e) {
      return a.nB(e, "anchor-tag-ref");
    }
    isPowerIndexSymbol(e) {
      return a.nB(e, "power-index-symbol-container");
    }
    isPreScriptSymbol(e) {
      return a.nB(e, "pre-script-symbol-container");
    }
    closestSymbolContainerOrRoot(e) {
      var t = a.f$(a.aY(e), "COMPOSITEBLOCK, math-type");
      return t.length > 0 ? t[0] : null;
    }
    closestEditor(e) {
      return this.isEditAreaBlock(e) || this.isEditAreaLine(e) ? e : a.f$(a.aY(e), "EDITAREA".concat(", ", "EDITAREA-LINE"))[0];
    }
    closetEditLine(e) {
      return this.isEditAreaBlock(e) ? e : a.f$(a.aY(e), "LINE".concat(",", "EDITAREA-LINE"))[0];
    }
    closetAnyBlock(e) {
      return a.f$(a.aY(e), "BLOCK".concat(", ", "OPENSYMBOLBLOCK", ", ", "CLOSESYMBOLBLOCK", ", ", "COMPOSITEBLOCK"))[0];
    }
    findPrevLine(e) {
      var t = e.previousElementSibling;
      if (t) return this.isLazyLine(t) || this.isEditLine(t) ? t : void 0;
    }
    findNextLine(e) {
      var t = e.nextElementSibling;
      if (t) return this.isLazyLine(t) || this.isEditLine(t) ? t : void 0;
    }
    findEditLines(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (this.isEditAreaBlock(e)) return [e];
      if (this.isEditAreaLine(e)) return [e];
      var r = this.getAreaContainer(e);
      return r ? o().toArray(r.children).filter(e => "LINE" == e.tagName || t && "LAZY-LINE" == e.tagName) : o().toArray(e.children).filter(e => "LINE" == e.tagName || t && "LAZY-LINE" == e.tagName);
    }
    getFirstEditLine(e) {
      return this.isEditAreaBlock(e) || this.isEditAreaLine(e) ? e : (this.getAreaContainer(e) || e).firstElementChild;
      var t;
    }
    getLastEditLine(e) {
      if (this.isEditAreaBlock(e)) return e;
      if (this.isEditAreaLine(e)) return e;
      for (var t, r = (this.getAreaContainer(e) || e).lastElementChild; r && !this.isLazyLine(r) && !this.isEditLine(r);) r = r.previousElementSibling;
      return r;
    }
    getAreaContainer(e) {
      var t = e.lastElementChild;
      return "REF-TAG" == t.tagName && (t = t.previousElementSibling), "AREA-CONTAINER" == t.tagName ? t : null;
    }
    findLineByIndex(e, t) {
      if (this.isEditAreaBlock(e)) return e;
      if (this.isEditAreaLine(e)) {
        if (0 != t) throw new Error("index should be 0");
        return e;
      }
      var r = this.getAreaContainer(e);
      return r ? r.children[Math.min(t, r.children.length - 1)] : e.children[Math.min(t, e.children.length - 1)];
    }
    findEditLineIndex(e, t) {
      if ("EDITAREA-BLOCK" == e.tagName) return 0;
      if ("EDITAREA-LINE" == e.tagName) return 0;
      for (var r = this.getFirstEditLine(e), n = 0; null != r;) {
        if (r == t) return n;
        r = r.nextElementSibling, n++;
      }
      return -1;
    }
    findBaseLineBlock(e) {
      return this.hasBlocksContainer(e) ? this.findBaseLineBlock(this.getBlocksContainerElement(e)) : e.firstElementChild;
    }
    findBlocks(e) {
      return this.isEditAreaBlock(e) ? e.firstChild ? this.isEmptyBlock(e) ? [] : [e] : [] : this.isEmptyLine(e) ? [] : this.hasBlocksContainer(e) ? this.findBlocks(this.getBlocksContainerElement(e)) : Array.from(e.children).filter(e => "BASELINEBLOCK" != e.tagName && "PREFIX" != e.tagName && "REF-TAG" != e.tagName && "FIRST-LINE-PREFIX" != e.tagName);
    }
    findFirstMathLineBlock(e) {
      for (var t = e.firstElementChild; t && !this.isBlock(t);) t = t.nextElementSibling;
      return t;
    }
    findLastMathLineBlock(e) {
      for (var t = e.lastElementChild; t && !this.isBlock(t);) t = t.previousElementSibling;
      return t;
    }
    hasBlocksContainer(e) {
      return !!e.firstElementChild && ("PREFIX" == e.firstElementChild.tagName ? "BLOCKS" == (null === (t = e.firstElementChild.nextElementSibling) || void 0 === t ? void 0 : t.tagName) : "FIRST-LINE-PREFIX" == e.firstElementChild.tagName ? "BLOCKS" == (null === (r = e.firstElementChild.nextElementSibling) || void 0 === r || null === (n = r.nextElementSibling) || void 0 === n ? void 0 : n.tagName) : "BLOCKS" == e.firstElementChild.tagName);
      var t, r, n;
    }
    useBlocksContainer(e) {
      var t = this.getLineBlocksLayout(e);
      return "blocks-second" == t || "blocks-third" == t;
    }
    isTextEditLine(e) {
      return a.nB(e, "root") || a.nB(e, "text-mode");
    }
    rangeOfEnd(e) {
      var t = document.createRange();
      return t.setStart(e, e.childNodes.length), t.collapse(!0), t;
    }
    rangeFromIndex(e, t) {
      if (t > e.textContent.length) return null;
      var r = document.createRange();
      return r.setStart(e.firstChild, t), r.collapse(!0), r;
    }
    rangeFrom2Indexes(e, t, r) {
      var n = document.createRange();
      return n.setStart(e.firstChild, t), n.setEnd(e.firstChild, r), n;
    }
    rangeFrom2DifBlocksIndexes(e, t, r, n) {
      var i = document.createRange();
      return i.setStart(e.firstChild, t), i.setEnd(r.firstChild, n), i;
    }
    getElementClientSize(e) {
      return {
        width: e.offsetWidth,
        height: e.offsetHeight
      };
    }
    roundTo2Decimal(e) {
      return Math.round(100 * e) / 100;
    }
    findRectToRect(e, t) {
      return {
        left: e.left - t.left,
        top: e.top - t.top,
        width: e.width,
        height: e.height,
        right: e.left - t.left + e.width,
        bottom: e.top - t.top + e.height
      };
    }
    findRectElementToRect(e, t) {
      var r = this.getElementRect(e);
      return this.findRectToRect(r, t);
    }
    findRectElementToElement(e, t) {
      return t ? this.findRectElementToRect(e, this.getElementRect(t)) : this.getElementRect(e);
    }
    isLazyLine(e) {
      return "LAZY-LINE" == e.tagName;
    }
    isEmptyLine(e) {
      return !this.isLazyLine(e) && (this.isEditAreaBlock(e) ? !e.firstChild : this.hasBlocksContainer(e) ? this.isEmptyLine(this.getBlocksContainerElement(e)) : !e.firstElementChild || !e.firstElementChild.nextElementSibling || "EMPTYBLOCK" == e.firstElementChild.nextElementSibling.tagName);
    }
    getEmptyBlock(e) {
      return this.isEditAreaBlock(e) ? e : this.hasBlocksContainer(e) ? this.getEmptyBlock(this.getBlocksContainerElement(e)) : e.firstElementChild.nextElementSibling;
    }
    getFirstElementOrEmptyBlock(e) {
      return this.hasBlocksContainer(e) ? this.getFirstElementOrEmptyBlock(this.getBlocksContainerElement(e)) : "REF-TAG" == e.firstElementChild.nextElementSibling.tagName ? e.firstElementChild.nextElementSibling.nextElementSibling : e.firstElementChild.nextElementSibling;
    }
    findRefTag(e) {
      for (var t = e.firstElementChild; t;) {
        if ("REF-TAG" == t.tagName) return t;
        if ("DIV" == t.tagName && t.firstElementChild && "REF-TAG" == t.firstElementChild.tagName) return t.firstElementChild;
        t = t.nextElementSibling;
      }
    }
    getBaseLineIndicator(e) {
      return e.firstElementChild && "BASE-LINE-INDICATOR" == e.firstElementChild.tagName ? e.firstElementChild : null;
    }
    getLineBlocksLayout(e) {
      return "EDITAREA-BLOCK" == e.tagName ? "editarea-block" : "EDITAREA-LINE" == e.tagName ? "editarea-line" : "PREFIX" == e.firstElementChild.tagName ? "BLOCKS" == (null === (t = e.firstElementChild) || void 0 === t || null === (r = t.nextElementSibling) || void 0 === r ? void 0 : r.tagName) ? "blocks-second" : "non-blocks" : "FIRST-LINE-PREFIX" == e.firstElementChild.tagName && "BLOCKS" == (null === (n = e.firstElementChild) || void 0 === n || null === (i = n.nextElementSibling) || void 0 === i || null === (o = i.nextElementSibling) || void 0 === o ? void 0 : o.tagName) ? "blocks-third" : "non-blocks";
      var t, r, n, i, o;
    }
    getBlocksContainerElement(e) {
      var t;
      switch (this.getLineBlocksLayout(e)) {
        case "editarea-block":
        case "editarea-line":
        case "non-blocks":
          return e;
        case "blocks-second":
          return e.firstElementChild.nextElementSibling;
        case "blocks-third":
          return e.firstElementChild.nextElementSibling.nextElementSibling;
      }
    }
    hasNextLine(e) {
      return !this.isEditAreaBlock(e) && !this.isEditAreaLine(e) && null != e.nextElementSibling;
    }
    getNextLine(e) {
      return this.isEditAreaBlock(e) || this.isEditAreaLine(e) ? null : e.nextElementSibling;
    }
    hasPreviousLine(e) {
      return !this.isEditAreaBlock(e) && !this.isEditAreaLine(e) && null != e.previousElementSibling;
    }
    getPreviousLine(e) {
      return this.isEditAreaBlock(e) || this.isEditAreaLine(e) ? null : e.previousElementSibling;
    }
    getElementMiddleTopBottom(e) {
      var t = this.getElementRect(e);
      return t.top + t.height / 2;
    }
    getBaseLineBlock(e) {
      return this.hasBlocksContainer(e) ? this.getBaseLineBlock(this.getBlocksContainerElement(e)) : e.firstElementChild;
    }
    isBaseLineBlock(e) {
      return "BASELINEBLOCK" == e.tagName;
    }
    findEditors(e) {
      return e.reactInstance.getEditorDoms();
    }
    toRectWrapper(e, t) {
      return {
        element: e,
        rect: t
      };
    }
    getEmRound(e, t) {
      return Math.round(e * t) / t;
    }
    setCss(e, t, r) {
      var n,
        i = r ?? "";
      a._T(e, t) != (i = o().isNumber(i) ? i + "px" : i) && a.hS(e, t, i);
    }
    setHeightEm(e, t, r) {
      r = r || this.getComputedFontSize(e), this.setCss(e, "height", t / r + "em");
    }
    setHeight(e, t) {
      this.setCss(e, "height", t);
    }
    setWidth(e, t) {
      this.setCss(e, "width", t);
    }
    setMinWidth(e, t) {
      this.setCss(e, "min-width", t);
    }
    getCssHeight(e) {
      return Number.parseFloat(getComputedStyle(e).height);
    }
    getComputedStyleAsNumber(e, t) {
      return Number.parseFloat(getComputedStyle(e)[t]);
    }
    getTextDirection(e) {
      return window.getComputedStyle(e).direction;
    }
    isLineRtl(e) {
      return !this.isEditAreaBlock(e) && !this.isEditAreaLine(e) && "rtl" == this.getLineOrBlocksContainer(e).getAttribute("dir");
      var t;
    }
    getLineOrBlocksContainer(e) {
      return this.hasBlocksContainer(e) ? this.getBlocksContainerElement(e) : e;
    }
    getComputedStyle(e, t) {
      return getComputedStyle(e)[t];
    }
    getComputedFontSize(e) {
      return this.getComputedStyleAsNumber(e, "font-size");
    }
    getComputedCharHeight(e) {
      var t = this.getComputedFontSize(e);
      return Math.round(t + t / 5);
    }
    setMarginTopEm(e, t, r) {
      r = r || this.getComputedFontSize(e), this.setCss(e, "margin-top", t / r + "em");
    }
    setMarginTop(e, t) {
      this.setCss(e, "margin-top", t);
    }
    findOpenCloseSymbolInfo(e) {
      return "OPENSYMBOLBLOCK" == e.tagName ? {
        bracketPosition: "open",
        bracketType: e.getAttribute("type"),
        element: e
      } : "CLOSESYMBOLBLOCK" == e.tagName ? {
        bracketPosition: "close",
        bracketType: e.getAttribute("type"),
        element: e
      } : null;
    }
    isStillInDomeTree(e) {
      return null != e.offsetParent;
    }
    notInDomeTree(e) {
      return null == e.offsetParent;
    }
  }
  function p(e) {
    return Math.max(1, Math.round(e / 17));
  }
  const u = new h();
};
