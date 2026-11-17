/* module 39791 — 15325 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => I
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(2543),
    a = r.n(s),
    l = r(61848),
    c = r(516),
    d = r(21774),
    h = r(48397),
    p = r(43085),
    u = r(11742),
    g = r(5556),
    m = r.n(g),
    f = r(47858),
    y = r(21735);
  class v {
    getSafeIndentCounts(e, t) {
      return e || a().times(t, () => null);
    }
    handleLineInfo(e, t) {
      t = t || {
        indentCounters: null,
        sectionIndentCounters: null,
        lastIndentIndex: -1,
        lastSectionIndentIndex: -1,
        hasListItem: !1,
        isBulletListType: !1
      };
      var r = f.A.getLineStyle(e, "listType");
      if (t.hasListItem = null != r && "none" != r, t.isBulletListType = y.A.isBulletListType(r), t.isBulletListType) {
        var n = this.getAndModifyIndentIfIndentLevelIsSoDeep(e, t, t.lastIndentIndex),
          i,
          o,
          s;
        if (y.A.isOrderListType(r, n)) if (t.indentCounters = this.getSafeIndentCounts(t.indentCounters, f.A.getMaxNestedListLevel() + 1), this.clearNestedLevelListItems(t, n), null === (i = e.style) || void 0 === i || !i.listTypeSkip) if (t.indentCounters[n] = null == t.indentCounters[n] ? 0 : t.indentCounters[n] + 1, null != (null === (o = e.style) || void 0 === o ? void 0 : o.listItemResetIndex)) t.indentCounters[n] = null === (s = e.style) || void 0 === s ? void 0 : s.listItemResetIndex;
        return t.lastIndentIndex = n, t;
      }
      if ((null != t.indentCounters || t.lastIndentIndex >= 0) && (t.indentCounters = null, t.lastIndentIndex = -1), "section" == r) {
        var a = this.getAndModifyIndentIfIndentLevelIsSoDeep(e, t, t.lastSectionIndentIndex);
        return t.sectionIndentCounters = this.getSafeIndentCounts(t.sectionIndentCounters, f.A.getMaxNestedSectionLevel() + 1), this.clearNestedLevelSectionItems(t, a), t.sectionIndentCounters[a] = null == t.sectionIndentCounters[a] ? 0 : t.sectionIndentCounters[a] + 1, t.lastSectionIndentIndex = a, t;
      }
      return e.___tempIndentIndex && (e.___tempIndentIndex = void 0), t;
    }
    getAndModifyIndentIfIndentLevelIsSoDeep(e, t, r) {
      var n = f.A.getLineStyle(e, "indentIndex", 0);
      return n > r + 1 ? (n = r + 1, e.___tempIndentIndex = n) : e.___tempIndentIndex = void 0, n;
    }
    clearNestedLevelListItems(e, t) {
      for (var r = t + 1; r <= f.A.getMaxNestedListLevel(); r++) e.indentCounters[r] = null;
      return e;
    }
    clearNestedLevelSectionItems(e, t) {
      for (var r = t + 1; r <= f.A.getMaxNestedSectionLevel(); r++) e.sectionIndentCounters[r] = null;
      return e;
    }
  }
  const b = new v();
  var x = r(32485),
    C = r.n(x),
    S = r(25644),
    A = r(58578),
    w = r(53359),
    E = r(50510);
  class k {
    constructLineInfo(e, t) {
      return e.hasListItem ? e.isBulletListType ? {
        previousLine: t,
        indentIndex: e.lastIndentIndex,
        indentCounters: e.indentCounters ? a().clone(e.indentCounters) : null
      } : {
        previousLine: t,
        indentIndex: e.lastSectionIndentIndex,
        indentCounters: e.sectionIndentCounters ? a().clone(e.sectionIndentCounters) : null
      } : {
        previousLine: t
      };
    }
  }
  var O = new k();
  function D(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function P(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? D(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : D(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  String.prototype.replaceAt = function (e, t) {
    return this.substr(0, e) + t + this.substr(e + t.length);
  };
  class M extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "editor", void 0), (0, n.A)(this, "movingBlocksInfo", void 0), (0, n.A)(this, "_reactInternalInstance", void 0), (0, n.A)(this, "onTagInfoChanged", (e, t) => {
        this.props.onDataChanged(l.A.setProp(this.props.data, "tagInfo", e), t);
      }), (0, n.A)(this, "handleRef", e => {
        e && (e.reactInstance = this), this.editor = e;
      });
    }
    shouldComponentUpdate(e, t) {
      return e.data != this.props.data || e.className != this.props.className || !d.A.areEqualShallow(e.style, this.props.style) || e.selected != this.props.selected || e.extendedSelected != this.props.extendedSelected || e.pageSection != this.props.pageSection || e.showBorder != this.props.showBorder || e.showBorderOnSelected != this.props.showBorderOnSelected || e.fontSizeRatio != this.props.fontSizeRatio || e.allowTag != this.props.allowTag || e.allowEditorTag != this.props.allowEditorTag || e.firstLinePrefix != this.props.firstLinePrefix || e.mgTopEm != this.props.mgTopEm || e.mgBottomEm != this.props.mgBottomEm || e.borderIfEmpty != this.props.borderIfEmpty || e.dgTextInfo != this.props.dgTextInfo || this.state != t;
    }
    componentDidMount() {
      this.afterMountOrUpdated();
    }
    componentDidUpdate(e, t) {
      this.afterMountOrUpdated();
    }
    afterMountOrUpdated() {}
    getData() {
      return this.props.data;
    }
    getModel() {
      return this.props.data;
    }
    showCursor() {
      this.props.needShowCursor();
    }
    select(e, t) {
      var r = {
        cursorContext: {
          direction: e.direction,
          maxRelativeXAxisPosition: e.maxRelativeXAxisPosition,
          htmlEditor: e.editor,
          htmLine: e.line,
          requestGeoPos: e.requestGeoPos,
          prevPos: void 0
        },
        isExtendingSelection: !!t
      };
      this.props.onSelectedChanged({
        lineIndex: e.lineIndex,
        charIndex: e.charIndex
      }, r);
    }
    selectCursorFromPosition(e, t, r) {
      var n = S.A.buildCursorPosition(this.editor, e, t);
      return n ? n.editor != this.editor ? n.editor.reactInstance.selectCursorFromPosition(n.line, t, r) : void this.select(n, r) : null;
    }
    onChildDataChanged(e, t, r, n, i) {
      var o = l.A.set(this.props.data.lines[e].blocks, t, n);
      this.props.onDataChanged(l.A.set(this.props.data, "lines", l.A.set(this.props.data.lines, e + ".blocks", o)), i);
    }
    onDataChanged(e, t, r) {
      this.props.onDataChanged(l.A.set(this.props.data, "lines", l.A.setIndex(this.props.data.lines, e, t)), r);
    }
    onChildSelectedChanged(e, t, r, n, i) {
      n = P(P({}, n), {}, {
        lineIndex: e,
        charIndex: r
      }), this.props.onSelectedChanged(n, i);
    }
    componentWillUpdate(e, t) {
      e.ignoreFindingMovingBlocks || (!this.props.optimizeForOneLine || e.data.lines.length >= 2 && this.props.data.lines.length >= 2) && e.data.lines.length != this.props.data.lines.length && (console.log("trying finding moving blocks"), this.movingBlocksInfo = this.findMovedBlocks(this.props.data.lines, e.data.lines), this.movingBlocksInfo && console.log("moving blocks: TRUE"));
    }
    findReactBlockChildren(e) {
      var t = e.getHostNode(),
        r = c.A.getLineBlocksLayout(t);
      return "blocks-second" == r || "non-blocks" == r ? c.A.useBlocksContainer(t) ? e._renderedComponent._renderedChildren[".1"]._renderedChildren : e._renderedComponent._renderedChildren : "not-found";
    }
    findDomMovingBlocks(e) {
      var t = this.findDomByKey(e.changedLine.id),
        r = {},
        n = this.findReactBlockChildren(t);
      if ("not-found" != n) {
        var i = function t(i) {
          if (n.hasOwnProperty(i)) {
            var o = n[i];
            e.movingBlocks.some(e => i.endsWith("$" + e.id)) && (r[i] = o);
          }
        };
        for (var o in n) i(o);
        return e.movingDomBlocks = r, t._instance.keepRemovedBlocks = r, e;
      }
    }
    findDomByKey(e) {
      return this.props.noAreaContainer || this.props.isTextMode ? a().find(this._reactInternalInstance._renderedComponent._renderedChildren, (t, r) => r.endsWith("$" + e)) : a().find(this._reactInternalInstance._renderedComponent._renderedChildren[".1"]._renderedChildren, (t, r) => r.endsWith("$" + e));
    }
    findMovedBlocks(e, t) {
      var r = a().difference(e, t),
        n = a().difference(t, e),
        i = null;
      if (n.forEach(e => {
        r.forEach(t => {
          if (!i && e.id != t.id) {
            var r = a().intersectionBy(e.blocks, t.blocks, "id");
            r.length > 0 && (i = {
              lastNewLine: e,
              changedLine: t,
              movingBlocks: r
            });
          }
        });
      }), i) return this.findDomMovingBlocks(i);
    }
    getLineSelected(e) {
      if (this.props.selected) {
        var t = this.props.selected;
        return t.lineIndex == e ? t : void 0;
      }
    }
    getExtendedLineSelected(e) {
      if (this.props.extendedSelected) {
        var t = this.props.extendedSelected;
        return t.lineIndex == e ? t : void 0;
      }
    }
    getEditClss() {
      return h.A;
    }
    renderLines(e) {
      for (var t = null, r = [], n = e.length, i = null, o, s, a = this.context.fixedContextHandler.getMtFuncs().getPageSettings(), l = 0; l < n; l++) {
        var c = u.A.makeSureLine(e, l);
        t = b.handleLineInfo(c, t);
        var d = O.constructLineInfo(t, i),
          h = void 0;
        if (this.props.isTextMode || this.props.rootLevel) {
          s || (s = E.m.extractSpacing(c, a, this.props.rootLevel));
          var p = E.m.resolveCurrentLineMarginForSpacing(o, s, e[l + 1], a, this.props.rootLevel);
          h = p.resolvedSpacing, o = s, s = p.nextSpacing;
        }
        r.push(this.renderLine(c, l, n, d, h, !1)), i = c;
      }
      return r;
    }
    shouldStoreCacheSize() {
      return !1;
    }
    enableDebugCompareCacheSize() {
      return !1;
    }
    renderLine(e, t, r, n, i, s) {
      var a, l;
      this.movingBlocksInfo && (e.id == this.movingBlocksInfo.changedLine.id && (a = this.movingBlocksInfo.movingDomBlocks), e.id == this.movingBlocksInfo.lastNewLine.id && (l = this.movingBlocksInfo.movingDomBlocks));
      var c = this.getEditClss(),
        d = this.getLineSelected(t),
        h = this.getExtendedLineSelected(t),
        p = this.props;
      return o().createElement(c, {
        outOfView: s,
        spaceResolved: i,
        dgTextInfo: p.dgTextInfo,
        parentEditAreaId: p.data.id,
        storeCacheSize: this.shouldStoreCacheSize(),
        debugCompareCacheSize: this.enableDebugCompareCacheSize(),
        pageSection: p.pageSection,
        isTextMode: p.isTextMode,
        isFirstMathModeLevel: p.isFirstMathModeLevel,
        allowTag: p.allowTag,
        isFirstLine: p.rootLevel ? void 0 : 0 == t,
        isLastLine: p.rootLevel ? void 0 : t == r - 1,
        stripInfo: p.stripInfo,
        fontSizeRatio: this.getFontSizeRatio(),
        fracLevel: p.fracLevel,
        lineInfo: n,
        keepRemovedBlocks: a,
        movingBlocks: l,
        key: e.id,
        line: e,
        lineIndex: t,
        noSpacingRule: p.noSpacingRule,
        renderAsPlainText: p.renderAsPlainText,
        inTableOfContent: p.inTableOfContent,
        rootLevel: p.rootLevel,
        selected: d,
        extendedSelected: h,
        displayMode: p.displayMode,
        onChildDataChanged: this.onChildDataChanged.bind(this, t),
        onDataChanged: this.onDataChanged.bind(this, t),
        onChildSelectedChanged: this.onChildSelectedChanged.bind(this, t),
        renderContext: p.renderContext,
        style: p.lineStyle,
        textDecoration: p.textDecoration,
        textDirection: p.textDirection,
        firstLinePrefix: p.firstLinePrefix,
        firstLinePrefixStyle: p.firstLinePrefixStyle,
        defaultRegTagStr: this.fetchDefaultRefTag(e, t)
      });
    }
    fetchDefaultRefTag(e, t) {}
    getKeyName() {
      return this.props.keyName;
    }
    isEditorEmpty() {
      return 1 == this.props.data.lines.length && 0 == this.props.data.lines[0].blocks.length;
    }
    getFontSizeRatio() {
      return this.props.fontSizeRatio;
    }
    renderAreaBaseLine() {
      if (!this.props.isTextMode && !this.props.noAreaContainer && !this.isOneLineEditor()) return o().createElement("area-baseline", {
        "aria-hidden": !0
      }, "a");
    }
    isOneLineEditor() {
      return 1 == this.props.data.lines.length;
    }
    isOptmizeForOneLine() {
      return this.props.optimizeForOneLine && this.isOneLineEditor();
    }
    renderLinesContainer() {
      return this.props.isTextMode || this.props.noAreaContainer || this.isOptmizeForOneLine() ? this.renderLines(this.props.data.lines) : o().createElement("area-container", null, this.renderLines(this.props.data.lines));
    }
    renderTag() {
      if (this.props.allowEditorTag && (this.props.selected || w.p.shouldShowTagInfo(this.props.data))) {
        var e = this.context.fixedContextHandler.getMtFuncs(),
          t = e.getBaseTextModeFontSize() * (this.props.fontSizeRatio || 1),
          r = A.A.textFontFamilyFromKey(e.getBaseTextModeFont());
        return o().createElement(p.G, {
          getDzContainer: e.getDocZoomContainer,
          fontFamily: r,
          fontSize: t,
          onTagInfoChanged: this.onTagInfoChanged,
          tagInfo: this.props.data.tagInfo,
          tagPosition: "editarea",
          fixedContextHandler: this.context.fixedContextHandler
        });
      }
    }
    getEditAreaStyle() {
      if (!this.props.mgBottomEm && !this.props.mgTopEm) return this.props.style;
      var e = this.props.style;
      return this.props.mgBottomEm && (e = P(P({}, e), {}, {
        marginBottom: this.props.mgBottomEm + "em"
      })), this.props.mgTopEm && (e = P(P({}, e), {}, {
        marginTop: this.props.mgTopEm + "em"
      })), e;
    }
    renderPlaceHolder() {}
    getBaseClassname() {}
    render() {
      var e;
      if (this.error) return console.error(this.error), o().createElement("editarea", null, "This document has been corrupted, please report to team@mathcha.io for recovery, sorry for this issue");
      u.A.makeSureLines(this.props.data);
      var t = C()(this.props.className, this.getBaseClassname(), {
        selected: this.props.showBorder || this.props.borderIfEmpty && this.isEditorEmpty() || this.props.selected && (null === (e = this.props.showBorderOnSelected) || void 0 === e || e),
        "no-area-container": this.props.noAreaContainer || this.isOptmizeForOneLine(),
        "high-order": this.props.highZOrderIndexOfEmpty && this.isEditorEmpty(),
        "text-mode": this.props.isTextMode,
        "read-only": this.props.readOnly
      });
      return o().createElement("editarea", {
        ref: this.handleRef,
        className: t,
        style: this.getEditAreaStyle()
      }, this.renderAreaBaseLine(), this.renderLinesContainer(), this.renderTag(), this.renderPlaceHolder());
    }
  }
  (0, n.A)(M, "contextTypes", {
    fixedContextHandler: m().any
  });
  const I = M;
};
