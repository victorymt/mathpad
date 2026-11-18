/* module 25742 — 15829 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => P
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(40961),
    a = r.n(s),
    l = r(2543),
    c = r.n(l),
    d = r(37566),
    h = r(61848),
    p = r(97372),
    u = r(516),
    g = r(49812),
    m = r(32485),
    f = r.n(m),
    y = r(47858),
    v = r(91783),
    b = r(30803),
    x = r(11742),
    C = r(5556),
    S = r.n(C),
    A = r(90437),
    w = r(69446),
    E = r(18808),
    k = r(60693);
  function O(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function D(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? O(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class P extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "refMap", {}), (0, n.A)(this, "elementMethodsCache", {}), (0, n.A)(this, "elementLighMethodsCache", {}), (0, n.A)(this, "cacheRefMethod", {}), (0, n.A)(this, "baselineClass", void 0), (0, n.A)(this, "showSelectedAnyLevel", void 0), (0, n.A)(this, "compositeBlock", void 0), (0, n.A)(this, "baseline", void 0), (0, n.A)(this, "containerClassName", void 0), (0, n.A)(this, "showSelectedEvenNotDescendant", void 0), (0, n.A)(this, "role", void 0), (0, n.A)(this, "preventTextDecorationStyleSet", void 0), (0, n.A)(this, "ignoreLtrDirection", void 0), (0, n.A)(this, "getBaseLine", void 0), (0, n.A)(this, "getEditorInfo", () => this.context.fixedContextHandler.getMtFuncs().getEditorInfo()), (0, n.A)(this, "updateBaseLine", () => {
        if (this.getBaseLine) {
          var e = u.A.getComputedFontSize(this.compositeBlock);
          d.hS(this.baseline, "margin-top", this.getBaseLine() / e + "em");
        }
      }), (0, n.A)(this, "getCompositeInstance", e => {
        e && (e.reactInstance = this, this.compositeBlock = e);
      }), (0, n.A)(this, "getDzContainer", () => this.context.fixedContextHandler.getMtFuncs().getDocZoomContainer()), this.refMap = {}, this.elementMethodsCache = {}, this.cacheRefMethod = {};
    }
    getLineThickness() {
      return Math.max(1, Math.round(this.getMathFontSizePixel() / 17));
    }
    getMtFuncs() {
      return this.context.fixedContextHandler.getMtFuncs();
    }
    getLatexName() {
      return this.props.data.text;
    }
    getModel() {
      return this.props.data;
    }
    shouldComponentUpdate(e, t) {
      return e.data != this.props.data || e.selected != this.props.selected || e.customDataStr != this.props.customDataStr || e.extendedSelected != this.props.extendedSelected || e.fontSizeRatio != this.props.fontSizeRatio || e.isLastBlock != this.props.isLastBlock || e.allowTag != this.props.allowTag || e.dgTextInfo != this.props.dgTextInfo || this.state != t;
    }
    fromString(e) {
      return c().map(e.split(""), e => ({
        id: b.w.nextId(),
        char: e
      }));
    }
    getEditors() {
      return c().map(c().keys(this.refMap), e => this.refMap[e]);
    }
    hasEditor() {
      return c().keys(this.refMap).length > 0;
    }
    hasElementsData() {
      return c().keys(this.props.data.elements).length > 0;
    }
    getEditorDoms() {
      return c().map(c().keys(this.refMap), e => this.refMap[e].editor);
    }
    getEditorDomByKey(e) {
      return this.refMap[e] ? this.refMap[e].editor : null;
    }
    getRootDom() {
      return a().findDOMNode(this);
    }
    isSelected() {
      return null != this.props.selected;
    }
    isControlledSelected() {
      return this.props.selected && !!this.props.selected.controlled;
    }
    isReadonly() {
      return !!this.getMtFuncs().isReadOnly();
    }
    isChildSelected() {
      return null != this.props.selected && null != this.props.selected.key;
    }
    isDirectChildSelected() {
      var e = this.props.selected;
      return e && e.selected && !e.selected.selected;
    }
    isTabularDescendantSelected() {
      return !!this.isChildSelected() && this.isTabularSelectedRecursive(this.props.selected.selected);
    }
    isTabularSelectedRecursive(e) {
      if (!e || !e.key) return !1;
      var t = A.Z.isKeyInTabularFormat(e.key);
      return t || this.isTabularSelectedRecursive(e.selected);
    }
    isDirectSelected() {
      return this.isSelected() && (null == this.props.selected.selected || null == this.props.selected.selected.selected);
    }
    isDirectSelectedNoSelectionMode() {
      return this.isDirectSelected() && !this.isInSelectionMode();
    }
    isSelectModeOnly() {
      return this.getMtFuncs().isSelectOnly();
    }
    isDirectAndChildSelected() {
      return this.isDirectSelected() && this.isChildSelected();
    }
    isEditorEmpty(e) {
      return g.A.isEditorEmpty(e);
    }
    isOneLineEditor(e) {
      return 1 == e.lines.length;
    }
    isMultiline(e) {
      return !this.isOneLineEditor(e);
    }
    isLastLineAllTextBlocksSingleOrPower(e) {
      var t = c().last(e.lines);
      return c().every(t.blocks, e => p.A.isTextBlock(e) || p.A.isSingleBlock(e) || p.A.isPower(e));
    }
    isOneTextBlock(e) {
      if (1 != e.lines.length) return !1;
      var t = e.lines[0].blocks;
      return 1 == t.length && p.A.isTextBlock(t[0]);
    }
    isOneOr2Char(e) {
      return this.isOneTextBlock(e) && e.lines[0].blocks[0].text.length <= 2;
    }
    isEmptyOrOneChar(e) {
      return this.isEditorEmpty(e) || this.isOneChar(e);
    }
    isOneChar(e) {
      return this.isOneTextBlock(e) && 1 == e.lines[0].blocks[0].text.length;
    }
    isLineAllNormalText(e) {
      return c().every(e.blocks, e => p.A.isTextBlock(e));
    }
    isFirstTextBlock(e) {
      return e.blocks[0] && p.A.isTextBlock(e.blocks[0]);
    }
    getClassName() {
      return this.containerClassName || "";
    }
    isFirstMathModeLevel() {
      return this.props.isFirstMathModeLevel;
    }
    isInlineMode() {
      return !!p.A.isInlineMathContainer(this.props.data) || !(!this.props.data.style || "\\textstyle" != this.props.data.style.mathModeType) || (!this.props.data.style || "\\displaystyle" != this.props.data.style.mathModeType) && !this.props.displayMode && !this.props.data.displayMode;
    }
    isInSelectionMode() {
      return this.getEditorInfo().isSelectionMode;
    }
    isSingleTextBlockAndUperSmall(e) {
      return this.isEditorEmpty(e) || this.isOneTextBlock(e) && v.A.isUpperSmall(e.lines[0].blocks[0].text);
    }
    isSingleTextBlockLeftUpperSign(e) {
      return this.isOneTextBlock(e) && v.A.isUpperLeftSign(e.lines[0].blocks[0].text);
    }
    isSingleTextBlockRightUpperSign(e) {
      return this.isOneTextBlock(e) && v.A.isUpperRightSign(e.lines[0].blocks[0].text);
    }
    isSingleOneCharTextBlockNumber(e) {
      return this.isOneChar(e) && /[0-9]/.test(e.lines[0].blocks[0].text);
    }
    isSingleTextBlockAndOneChar(e) {
      return this.isOneTextBlock(e) && 1 == e.lines[0].blocks[0].text.length;
    }
    getRoundEm(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return u.A.getEmRound(e, this.getMathFontSizePixel(t));
    }
    getRoundEmStr(e, t) {
      return this.getRoundEm(e, t) + "em";
    }
    isSingleTextBlockFirstLine(e) {
      if (this.isEditorEmpty(e)) return !0;
      var t = e.lines[0];
      return 1 == t.blocks.length && p.A.isTextBlock(t.blocks[0]);
    }
    isFirstCharOfLastLineLowerSmall(e) {
      if (this.isEditorEmpty(e)) return !0;
      var t = c().last(e.lines);
      return !!p.A.isTextBlock(t.blocks[0]) && v.A.isLowerSmall(t.blocks[0].text[0]);
    }
    isSingleTextBlockAndLowerSmall(e) {
      return !!this.isEditorEmpty(e) || c().every(c().last(e.lines).blocks, e => p.A.isTextBlock(e) && v.A.isLowerSmall(e.text) || p.A.isPower(e));
    }
    componentDidUpdate(e, t) {
      this.afterReactRenderBase(e, t), !this.useCustomBaseLine() || e.data == this.props.data && e.fontSizeRatio == this.props.fontSizeRatio || this.context.fixedContextHandler.getBatchUpdater().push(this.updateBaseLine, this);
    }
    componentDidMount() {
      this.useCustomBaseLine() && this.context.fixedContextHandler.getBatchUpdater().push(this.updateBaseLine, this), this.afterReactRenderBase({}, {});
    }
    afterReactRenderBase(e, t) {
      this.afterReactRender(e, t), e.data == this.props.data && e.fontSizeRatio == this.props.fontSizeRatio && e.fracLevel == this.props.fracLevel && e.displayMode == this.props.displayMode || this.afterReactRenderWhenDataChanged(e, t);
    }
    getCachedRefMethod(e, t) {
      return this.cacheRefMethod[e] || (this.cacheRefMethod[e] = t.bind(this)), this.cacheRefMethod[e];
    }
    afterReactRender(e, t) {}
    afterReactRenderWhenDataChanged(e, t) {}
    componentWillUnmount() {
      this.willComponentUnmount = !0;
    }
    useCustomBaseLine() {
      return !1;
    }
    baseLineIndicatorStyle() {}
    renderBaseLine() {
      if (this.useCustomBaseLine()) return o().createElement("base-line-indicator", {
        style: this.baseLineIndicatorStyle(),
        class: this.baselineClass,
        ref: e => this.baseline = e
      }, "a");
    }
    getFracLevel() {
      return this.props.fracLevel || 0;
    }
    getMergedStripInfoWithProps(e) {
      return w.dm.mergeWithCache(e, this.props.stripInfo);
    }
    getCompositeBlockStyle() {
      var e = y.A.getHtmlFromStyle(this.props.data, this.props.textDecoration, this.context.baseMathModeFontFamily, void 0);
      return e.textDecoration && this.preventTextDecorationStyleSet && (e = D(D({}, e), {}, {
        textDecoration: void 0
      })), e;
    }
    getTextDecorationPassingToChildren() {
      return this.props.data.style && void 0 !== this.props.data.style.textDecoration ? this.props.data.style.textDecoration : this.props.textDecoration;
    }
    getMathFontSizePixel(e) {
      return e = e || 1, this.context.mathFontSizeBase * this.props.fontSizeRatio * e;
    }
    getTextFontSizePixel(e) {
      return e = e || 1, this.context.fontSizeBase * this.props.fontSizeRatio * e;
    }
    renderComponentBase() {
      return this.renderComponent();
    }
    getAriaLabel() {}
    render() {
      var e = this.isChildSelected(),
        t = this.showSelectedAnyLevel && e || this.isDirectSelected() && e || this.showSelectedEvenNotDescendant && this.isSelected(),
        r = f()(this.getClassName(), {
          selected: t,
          inline: this.isInlineMode()
        }, this.baselineClass);
      return o().createElement("compositeblock", {
        dir: this.ignoreLtrDirection ? void 0 : "ltr",
        id: this.props.id,
        style: this.getCompositeBlockStyle(),
        ref: this.getCompositeInstance,
        className: r,
        "aria-label": this.getAriaLabel(),
        role: this.role
      }, this.renderBaseLine(), this.renderComponentBase());
    }
    getComputedFontSizeRatio() {
      var e = this.props.data;
      return e.style && void 0 !== e.style.fontSize ? E.l.getFontSizeRatio(e.style.fontSize, this.context.fontSizeBase) * (this.props.fontSizeRatio || 1) : this.props.fontSizeRatio || 1;
    }
    selectElement(e) {
      var t = {
        key: e,
        selected: {
          lineIndex: 0,
          charIndex: 0
        }
      };
      this.props.onSelectedChanged(t);
    }
    buildMetaDataFromName(e) {
      null == this.elementMethodsCache[e] && (this.elementMethodsCache[e] = {
        onDataChanged: null,
        onSelectedChanged: null,
        ref: null
      }, this.elementMethodsCache[e].onDataChanged = function (e, t, r) {
        this.props.onDataChanged(h.A.set(this.props.data, "elements." + e, t), r);
      }.bind(this, e), this.elementMethodsCache[e].onSelectedChanged = function (e, t, r) {
        this.props.onSelectedChanged({
          key: e,
          selected: t
        }, r);
      }.bind(this, e), this.elementMethodsCache[e].ref = function (e, t) {
        t ? this.refMap[e] = t : delete this.refMap[e];
      }.bind(this, e));
      var t = x.A.makeSureEditorModel(e, this.props.data.elements),
        r;
      return {
        data: t,
        id: t.id,
        keyName: e,
        fontSizeRatio: this.getComputedFontSizeRatio(),
        stripInfo: this.props.stripInfo,
        onDataChanged: this.elementMethodsCache[e].onDataChanged,
        onSelectedChanged: this.elementMethodsCache[e].onSelectedChanged,
        ref: this.elementMethodsCache[e].ref,
        noSpacingRule: this.props.noSpacingRule,
        selected: this.props.selected && this.props.selected.key == e ? this.props.selected.selected : void 0,
        dgTextInfo: this.props.dgTextInfo
      };
    }
    shouldDelayEnabled(e) {
      if (!e.deplayRenderEnabled()) return !1;
      var t = this.props.dgTextInfo;
      return !t || !!e.deplayRenderInDiagramEnabled() && !t.textTransform;
    }
    buildMetaDataDirectChildOrEmpty(e) {
      return D(D({}, this.buildMetaDataFromName(e)), {}, {
        showBorderOnSelected: !1,
        showBorder: this.isDirectChildOrEmpty(e)
      });
    }
    isDirectEmptyOrDirectChild(e) {
      var t = this.props.selected,
        r = this.props.data;
      return !!t && (!!(r.elements && r.elements[e] && g.A.isEditorEmpty(r.elements[e])) || !!t.selected && t.key == e && !t.selected.selected);
    }
    isDirectChildOrEmpty(e) {
      var t = this.props.selected,
        r = this.props.data;
      return !(!t || !t.selected) && (!!(r.elements && r.elements[e] && g.A.isEditorEmpty(r.elements[e])) || t.key == e && !t.selected.selected);
    }
    buildLightMetaDataDirectChildOrEmpty(e) {
      return D(D({}, this.buildLightMetadata(e)), {}, {
        showBorderOnSelected: !1,
        showBorder: this.isDirectChildOrEmpty(e)
      });
    }
    buildLightMetadata(e) {
      var t;
      return null == this.elementLighMethodsCache[e] && (this.elementLighMethodsCache[e] = {
        onSelectedChanged: null,
        ref: null
      }, this.elementLighMethodsCache[e].onSelectedChanged = function (e, t, r) {
        this.props.onSelectedChanged({
          key: e,
          selected: t
        }, r);
      }.bind(this, e), this.elementLighMethodsCache[e].ref = function (e, t) {
        t ? this.refMap[e] = t : delete this.refMap[e];
      }.bind(this, e)), {
        onSelectedChanged: this.elementLighMethodsCache[e].onSelectedChanged,
        ref: this.elementLighMethodsCache[e].ref,
        keyName: e,
        selected: this.props.selected && this.props.selected.key == e ? this.props.selected.selected : void 0,
        model: this.props.data.elements[e],
        fontSizeRatio: this.getComputedFontSizeRatio()
      };
    }
    getElementRect(e) {
      return k.T.getBCRect(e, this.getDzContainer());
    }
    getElementHeight(e) {
      var t = this.getElementRect(e);
      return t.bottom - t.top;
    }
    getElementWidth(e) {
      var t = this.getElementRect(e);
      return t.right - t.left;
    }
    allowEdit() {
      return this.context.fixedContextHandler.getMtFuncs().allowEdit();
    }
    getSubMathFont() {
      return this.context.fixedContextHandler.getMtFuncs().getSubMathFont();
    }
    getMathFont() {
      return this.context.fixedContextHandler.getMtFuncs().getbaseMathModeFontFamily();
    }
  }
  (0, n.A)(P, "contextTypes", {
    mathFontSizeBase: S().any,
    fontSizeBase: S().any,
    getScale: S().any,
    baseMathModeFontFamily: S().any,
    fixedContextHandler: S().any
  });
};
