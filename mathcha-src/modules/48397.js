/* module 48397 — 46428 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => he
  });
  var n = r(3453),
    i = r(64467),
    o = r(40927),
    s = r.n(o),
    a = r(61848),
    l = r(516),
    c = r(98095),
    d = r(73524),
    h = r(47858),
    p = r(2543),
    u = r.n(p);
  class g extends s().Component {
    constructor() {
      super(...arguments), (0, i.A)(this, "_reactInternalInstance", void 0), (0, i.A)(this, "_renderedComponent", void 0), (0, i.A)(this, "line", void 0), (0, i.A)(this, "movingBlocks", void 0), (0, i.A)(this, "keepRemovedBlocks", void 0), (0, i.A)(this, "suppress", void 0), (0, i.A)(this, "prevProps", void 0);
    }
    shouldComponentUpdate(e, t) {
      return e.line != this.props.line || e.selected != this.props.selected || e.extendedSelected != this.props.extendedSelected || e.showLineBorder != this.props.showLineBorder || e.fontSizeRatio != this.props.fontSizeRatio || e.tagInfo != this.props.tagInfo;
    }
    ignoreRemoveBlocks(e) {
      var t = this._reactInternalInstance._renderedComponent;
      l.A.useBlocksContainer(t.getHostNode()) ? u().keys(e).forEach(e => {
        delete t._renderedChildren[".1"]._renderedChildren[e];
      }) : u().keys(e).forEach(e => {
        delete t._renderedChildren[e];
      });
    }
    componentWillMount() {
      this.props.movingBlocks && (this.movingBlocks = this.props.movingBlocks, this.suppress = !0);
    }
    componentDidMount() {
      this.movingBlocks ? (this.handleMovingBlocks(), this.suppress = !1, this.registerForceUpdate(!1)) : this.props.rootLevel ? this.renderDoneOnSizeChanged() : this.queuePostProcessLineIfNecessary(void 0, !1);
    }
    registerForceUpdate(e) {
      this.context.fixedContextHandler.getBatchUpdater().pushOnCallback(e => {
        this.forceUpdate(e);
      }, this);
    }
    componentWillUpdate(e) {
      this.prevProps = this.props, e.keepRemovedBlocks && (this.ignoreRemoveBlocks(e.keepRemovedBlocks), this.keepRemovedBlocks = null), e.movingBlocks != this.props.movingBlocks && e.movingBlocks && (this.movingBlocks = e.movingBlocks, this.handleMovingBlocks());
    }
    getLineElement() {
      return this.line;
    }
    componentDidUpdate(e, t) {
      this.movingBlocks ? (this.movingBlocks = null, this.queuePostProcessLineIfNecessary(e, !0)) : !this.props.rootLevel && this.getLineElement() ? this.queuePostProcessLineIfNecessary(e, !1) : this.renderDoneOnSizeChanged();
    }
    handleMovingBlocks() {
      var e = this._reactInternalInstance.getHostNode(),
        t = this._reactInternalInstance._renderedComponent,
        r,
        n;
      l.A.useBlocksContainer(e) ? (r = l.A.getBlocksContainerElement(e), n = t._renderedChildren[".1"]._renderedChildren) : (r = e, n = t._renderedChildren), u().forEach(this.movingBlocks, e => {
        this.isValidBlock(e) && (e._hostParent = this._renderedComponent, r.appendChild(e.getHostNode()));
      }), u().forEach(this.movingBlocks, (e, t) => {
        this.isValidBlock(this.movingBlocks[t]) && (n[t] = this.movingBlocks[t]);
      });
    }
    isValidBlock(e) {
      try {
        return e.getHostNode(), !0;
      } catch (e) {
        return console.warn(e), !1;
      }
    }
    componentWillUnmount() {
      this.willComponentUnmount = !0, this.keepRemovedBlocks && (this.ignoreRemoveBlocks(this.keepRemovedBlocks), this.keepRemovedBlocks = null);
    }
  }
  (0, i.A)(g, "contextTypes", {
    mathFontSizeBase: o.PropTypes.any,
    getScale: o.PropTypes.any,
    baseMathModeFontFamily: o.PropTypes.any,
    fixedContextHandler: o.PropTypes.any
  });
  var m = r(3897),
    f = r(53778),
    y = r(43085),
    v = r(11742),
    b = r(32485),
    x = r.n(b),
    C = r(49812),
    S = r(39314);
  class A {
    wrapStyleWithSection(e, t, r, n) {
      if (n = n || {}, "section" != r) return e;
      switch (t.indentIndex || 0) {
        case 1:
          var i = n.level2 || {},
            o = i.fontSizeEm || 1.1,
            s = i.paddingTopBottom,
            a = void 0 === s ? .5 : s,
            l = i.isBold,
            c = void 0 === l || l,
            d = i.color;
          return this.wrapWith({
            fontSize: "".concat(o, "em"),
            paddingTop: "".concat(a, "em"),
            paddingBottom: "".concat(a, "em"),
            fontWeight: c ? "bold" : void 0,
            color: d ? S.A.getHtmlColor(d) : void 0
          }, e);
        case 2:
          var h = n.level3 || {},
            p = h.fontSizeEm || 1,
            u = h.paddingTopBottom,
            g = void 0 === u ? .5 : u,
            m = h.isBold,
            f = void 0 === m || m,
            y = h.color;
          return this.wrapWith({
            fontSize: "".concat(p, "em"),
            paddingTop: "".concat(g, "em"),
            paddingBottom: "".concat(g, "em"),
            fontWeight: f ? "bold" : void 0,
            color: y ? S.A.getHtmlColor(y) : void 0
          }, e);
        default:
          var v = n.level1 || {},
            b = v.fontSizeEm || 1.2,
            x = v.paddingTopBottom,
            C = void 0 === x ? .5 : x,
            A = v.isBold,
            w = void 0 === A || A,
            E = v.color;
          return this.wrapWith({
            fontSize: "".concat(b, "em"),
            paddingTop: "".concat(C, "em"),
            paddingBottom: "".concat(C, "em"),
            fontWeight: w ? "bold" : void 0,
            color: E ? S.A.getHtmlColor(E) : void 0
          }, e);
      }
    }
    wrapWith(e, t) {
      if (!t) return e;
      for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
      return e;
    }
    getClass(e) {
      var t = h.A.getLineAlign(e.line.style, ""),
        r = h.A.getLineStyle(e.line, "listType"),
        i = C.A.isLineWithSingleTheorem(e.line),
        o = "order" == r || "unorder" == r || r instanceof Array,
        s = this.resolveIndentKeyValue(o, e, r),
        a = (0, n.A)(s, 2),
        l = a[0],
        c = a[1];
      return e.inTableOfContent ? x()({
        "text-mode": e.isTextMode,
        "has-rtl": e.isTextMode && "rtl" == e.textDir
      }) : x()({
        root: e.rootLevel,
        "text-mode": e.isTextMode,
        selected: !!e.selected,
        taggable: !!e.allowTag,
        ["align-".concat(t)]: !!t,
        [l]: c && e.isTextMode,
        "has-indent": c && e.isTextMode,
        "list-item": o && e.isTextMode,
        ["section sindent-".concat(e.lineInfo.indentIndex)]: "section" == r,
        theorem: i,
        "has-rtl": e.isTextMode && "rtl" == e.textDir
      });
    }
    resolveIndentKeyValue(e, t, r) {
      var n = h.A.getLineStyle(t.line, "indentIndex", 0);
      return e ? ["indent-".concat(t.lineInfo.indentIndex), !0] : n && !r ? ["indent-".concat(n - 1), !0] : ["fake-indent", !1];
    }
  }
  const w = new A();
  var E = r(21735);
  class k {
    getPrefix(e, t) {
      var r = e.lineInfo.indentIndex || 0;
      if ("section" == t) {
        var n = e.pageSection;
        return [E.A.getSection(r, e.lineInfo.indentCounters, n), !1];
      }
      var i = !!h.A.getLineStyle(e.line, "listTypeSkip", !1),
        o = (e.lineInfo.indentCounters || [])[r] || 0;
      return t instanceof Array ? [E.A.getBuletText(t, r, e.lineInfo.indentCounters), i] : "order" == t ? [E.A.getOrderNumber(r, o), i] : "unorder" == t ? [E.A.getUnorderBullet(r), i] : void 0;
    }
  }
  const O = new k();
  var D = r(30929),
    P = r(21774);
  class M extends s().Component {
    constructor() {
      super(...arguments), (0, i.A)(this, "preventEvent", e => {
        e.stopPropagation(), e.preventDefault();
      });
    }
    shouldComponentUpdate(e) {
      return e.data != this.props.data || e.pageSection != this.props.pageSection || e.direction != this.props.direction;
    }
    componentDidUpdate() {
      this.props.fixedContextHandler.getMtFuncs().notifySectionPrefixChange();
    }
    componentDidMount() {
      this.props.fixedContextHandler.getMtFuncs().notifySectionPrefixChange();
    }
    componentWillUnmount() {
      this.props.fixedContextHandler.getMtFuncs().notifySectionPrefixChange();
    }
    getPrefixStyle() {
      var e = this.props,
        t = e.lineInfo,
        r = e.pageSection,
        n = e.direction,
        i = "rtl" == n ? "paddingLeft" : "paddingRight",
        o = "rtl" == n ? "right" : "left";
      switch (t.indentIndex || 0) {
        case 1:
          var s,
            a = (r.level2 || {}).paddingLeft,
            l = void 0 === a ? .25 : a;
          return {
            textAlign: o,
            [i]: "".concat(l, "em")
          };
        case 2:
          var c,
            d = (r.level3 || {}).paddingLeft,
            h = void 0 === d ? 0 : d;
          return {
            textAlign: o,
            [i]: "".concat(h, "em")
          };
        default:
          var p,
            u = (r.level1 || {}).paddingLeft,
            g = void 0 === u ? .5 : u;
          return {
            textAlign: o,
            [i]: "".concat(g, "em")
          };
      }
    }
    render() {
      var e = this.getPrefixStyle();
      return s().createElement("prefix", {
        style: e,
        onDoubleClick: this.preventEvent,
        onMouseDown: this.preventEvent
      }, this.props.data);
    }
  }
  var I = r(86081),
    T = r(37566),
    L = r(91783),
    R = r(65507),
    B = r(60693),
    F = r(19340),
    j = r(71311);
  function _(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function N(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? _(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class z {
    update(e, t, r, i, o, s) {
      var a = 0,
        c = 0,
        d,
        h = null == t || l.A.isChar(t),
        p = t && l.A.isConstantTextSymbol(t),
        u = h || p;
      if (t) {
        if (l.A.isOpenCloseSymbol(t)) {
          var g = !i && this.getHalfTopBottomFromOpenClose(t);
          if (g) o && l.A.isCloseSymbol(t) && (d = !0), a = g.halfTop, c = g.halfBottom;else {
            if (this.isEditAreaBlockOrLine(e)) return this.handlePowerIndexForNormalCharAttached(e);
            u = !0;
            var m = this.calculateFromAttached(r, t, s);
            a = m.halfTop, c = m.halfBottom;
          }
        } else if (l.A.isComposite(t) && t.reactInstance.getPowerIndexInfo) {
          var f = B.T.getBCRect(r, s),
            y = t.reactInstance.getPowerIndexInfo(),
            v = y.rect;
          a = f.top - v.top, c = 1 * (v.height - a), u = u || y.shouldConsiderAsChar;
        } else {
          if (!l.A.isComposite(t) && !p && this.isEditAreaBlockOrLine(e)) return this.handlePowerIndexForNormalCharAttached(e);
          if (this.isPowerEmpty(t)) return this.handlePowerIndexForNormalCharAttached(e);
          var b = this.calculateFromAttached(r, t, s);
          a = b.halfTop, c = b.halfBottom;
        }
      } else {
        var x = l.A.getComputedCharHeight(e),
          C = this.getSelftHalf(x);
        a = C.halfTop, c = C.halfBottom;
      }
      var S = d ? -.1 : void 0,
        A = this.calculatePowerIndexFontSize(e),
        w = (0, n.A)(A, 2),
        E = w[0],
        k = w[1],
        O = l.A.getComputedFontSize(e),
        D = O / E,
        P = O / k;
      return u ? this.isBothPowerIndex(e) ? e.reactInstance.setManagedState({
        marginBottomEm: (a / O - 1.6) * D,
        marginTopEm: (c / O - .58) * P,
        marginLeftEm: S
      }) : e.reactInstance.setManagedState({
        marginBottomEm: (a / O - 1.75) * D,
        marginTopEm: (c / O - .63) * P,
        marginLeftEm: S
      }) : this.isBothPowerIndex(e) ? e.reactInstance.setManagedState({
        marginBottomEm: (a / O - 1.4) * D,
        marginTopEm: (c / O - .57) * P,
        marginLeftEm: S
      }) : e.reactInstance.setManagedState({
        marginBottomEm: (a / O - 1.51) * D,
        marginTopEm: (c / O - .53) * P,
        marginLeftEm: S
      });
    }
    isPowerEmpty(e) {
      if (e && (l.A.isPowerIndexSymbol(e) || l.A.isPreScriptSymbol(e))) {
        var t = T.jS(e, ".power-value")[0];
        return !t || !t.textContent;
      }
    }
    calculatePowerIndexFontSize(e) {
      var t = T.jS(e, ".power-value"),
        r = T.jS(e, ".index-value"),
        n = this.getPowerIndexFontSize(t, 15),
        i = this.getPowerIndexFontSize(r, 15);
      return t.length > 0 && r.length > 0 ? [n, i] : t.length > 0 ? [n, n] : [i, i];
    }
    isEditAreaBlockOrLine(e) {
      return "EDITAREA" != e.firstElementChild.tagName && "EDITAREA" != e.lastElementChild.tagName;
    }
    calculateFromAttached(e, t, r) {
      var n = B.T.getBCRect(e, r),
        i = B.T.getBCRect(t, r),
        o = 1 * (n.top - i.top),
        s;
      return {
        halfTop: o,
        halfBottom: 1 * (B.T.heightOf(i) - o)
      };
    }
    isBothPowerIndex(e) {
      return e.reactInstance.isBothPowerIndex();
    }
    handlePowerIndexForNormalCharAttached(e) {
      if (this.isBothPowerIndex(e)) {
        var t = (0, j.tc)((0, F.X$)(T._T(e, "font-family")));
        return void 0 !== t ? e.reactInstance.setManagedState(N(N({}, R.FF), {}, {
          marginTopEm: R.FF.marginTopEm + t
        })) : e.reactInstance.setManagedState(R.FF);
      }
      return e.reactInstance.setManagedState(R.Ac);
    }
    getPowerIndexFontSize(e, t) {
      return e.length > 0 ? l.A.getComputedFontSize(e[0]) : t;
    }
    getSelftHalf(e) {
      var t = L.A.heightFromBaseLine(e),
        r;
      return {
        halfTop: t,
        halfBottom: e - t
      };
    }
    getHalfTopBottomFromOpenClose(e) {
      var t = e.reactInstance.getVerticalInfo();
      return null == t ? null : {
        halfTop: t.heightTop,
        halfBottom: t.heightBottom
      };
    }
  }
  const H = new z();
  var W = r(12753);
  class V {
    processMiddles(e, t) {
      if (!(e.length <= 0)) for (var r = u().last(e); r && t.fromIndex < r.index && r.index < t.toIndex;) {
        e.pop();
        var n = r.block.reactInstance,
          i = "no-height" == t.type ? n.clearCustomHeight() : n.setHeightInfo(t.maxTop, t.maxBottom, t.fontSize, t.isSymmetric);
        if (i) return i.then(() => this.processMiddles(e, t));
        r = u().last(e);
      }
    }
  }
  var U = new V();
  class q {
    maxTopBottom(e, t, r, n, i) {
      for (var o = 0, s = 0, a = t; a < r; a++) {
        var c = e[a];
        if (l.A.isOpenCloseSymbol(c) || c.reactInstance && c.reactInstance.getVerticalInfo) {
          var d = c.reactInstance.getVerticalInfo(n);
          null != d && (o = Math.max(o, d.heightTop), s = Math.max(s, d.heightBottom));
        } else if (!this.blockIgnoreTopBottom(e, a)) {
          var h = B.T.getBCRect(c, i),
            p = n - h.top,
            u;
          if (l.A.isPowerIndexSymbol(c)) p -= l.A.getComputedFontSize(c) / 7;
          o = Math.max(o, p), s = Math.max(s, h.bottom - n);
        }
      }
      return {
        maxTop: o,
        maxBottom: s
      };
    }
    isPowerIndexToIgnore(e, t) {
      var r = e[t];
      if (l.A.isPowerIndexSymbol(r)) {
        var n = e[t - 1];
        if (n && (l.A.isOpenSymbol(n) || l.A.isMiddleVert(n))) return !0;
      }
      if (l.A.isPreScriptSymbol(r)) {
        var i = e[t + 1];
        if (i && (l.A.isCloseSymbol(i) || l.A.isMiddleVert(i))) return !0;
      }
    }
    blockIgnoreTopBottom(e, t) {
      var r = e[t];
      return this.isPowerIndexToIgnore(e, t) || l.A.isMiddleVert(r);
    }
    blockToIgnoreInAll(e, t) {
      var r = e[t];
      return this.isPowerIndexToIgnore(e, t) || l.A.isAnchorTag(r) || l.A.isAnchorTagRef(r) || l.A.isIndexSymbol(r) || l.A.isChar(r) || l.A.isOpenCloseSymbol(r) || l.A.isIgnoreExpandBracketSymbol(r) || l.A.isMiddleVert(r) || l.A.isConstantTextSymbol(r);
    }
    segmentToIgnore(e, t, r) {
      for (var n = t; n < r; n++) if (!this.blockToIgnoreInAll(e, n)) return !1;
      return !0;
    }
    updateOpenClose(e, t, r, n, i, o) {
      var s = this.segmentToIgnore(r, e.index + 1, t.index);
      if (!t.level && s) return W.A.voidAllOf(this.clearCustomHeight(e.info.element), this.clearCustomHeight(t.info.element), U.processMiddles(i.orderedMiddles, {
        type: "no-height",
        fromIndex: e.index,
        toIndex: t.index
      }));
      var a = B.T.getBCRect(n, o),
        c = this.maxTopBottom(r, e.index + 1, t.index, a.bottom, o),
        d = c.maxTop,
        h = c.maxBottom;
      if (0 == d && 0 == h) return W.A.voidAllOf(this.clearCustomHeight(e.info.element), this.clearCustomHeight(t.info.element), U.processMiddles(i.orderedMiddles, {
        fromIndex: e.index,
        toIndex: t.index,
        type: "no-height"
      }));
      var p = l.A.getComputedStyleAsNumber(n, "font-size");
      d += p / 10, h += p / 10;
      var u = "brace" == e.info.bracketType || "brace" == t.info.bracketType,
        g = e.info.element.reactInstance,
        m = t.info.element.reactInstance;
      return W.A.voidAllOf(g.setHeightInfo(d, h, p, u), m.setHeightInfo(d, h, p, u), U.processMiddles(i.orderedMiddles, {
        maxTop: d,
        maxBottom: h,
        fromIndex: e.index,
        toIndex: t.index,
        type: "with-brackets",
        fontSize: p,
        isSymmetric: u
      }));
    }
    clearCustomHeight(e) {
      if (e) return e.reactInstance.clearCustomHeight();
    }
  }
  const G = new q();
  class K {
    constructor() {
      (0, i.A)(this, "asyncProcessWithContext", e => {
        for (var t = e.baseElement, r = e.blocks, n = e.blocksLength, i = e.stack, o = e.bracketSettings, s = e.dzc; e.index < n; e.index++) {
          var a = e.index,
            c = r[a];
          if (l.A.isMiddleVert(c)) {
            var d = {
              index: a,
              block: c
            };
            e.middleStack.push(d), e.allMiddles.push(d);
          } else {
            if (l.A.isPowerIndexSymbol(c)) {
              var h = this.getPreviousBlock(r, a);
              if (h && l.A.isMiddleVert(h)) continue;
              if (!h || !l.A.isOpenCloseSymbol(h) || o.disabledBracketsExtending) {
                var p = H.update(c, h, t, o.disabledBracketsExtending, !0, s);
                if (p) return e.index++, p.then(() => this.asyncProcessWithContext(e));
              }
            }
            if (l.A.isPreScriptSymbol(c)) {
              var g = this.getNextBlock(r, a);
              if (g && l.A.isMiddleVert(g)) continue;
              if (!g || !l.A.isOpenCloseSymbol(g) || o.disabledBracketsExtending) {
                var m = H.update(c, g, t, o.disabledBracketsExtending, !1, s);
                if (m) return e.index++, m.then(() => this.asyncProcessWithContext(e));
              }
            }
            if (!o.disabledBracketsExtending) {
              var f = l.A.findOpenCloseSymbolInfo(c);
              if (f) if (e.flagAnyBracket = !0, "open" != f.bracketPosition) {
                if ("close" == f.bracketPosition) {
                  var y = i.length <= 0 ? void 0 : i.pop();
                  o.extendOnLevels && i.length > 0 && u().last(i).level++;
                  var v = this.processPair(r, y, {
                    info: f,
                    index: a,
                    level: y ? y.level : 0
                  }, t, e.middleStack, s);
                  if (v) return e.index++, v.then(() => this.asyncProcessWithContext(e));
                }
              } else i.push({
                index: a,
                info: f,
                level: 0
              });
            }
          }
        }
        return W.A.voidAllOf(this.cleanRemaningStack(e), this.clearAllMiddles(e));
      });
    }
    process(e, t, r) {
      var n = [],
        i = l.A.findBlocks(e),
        o = l.A.findBaseLineBlock(e),
        s = i.length,
        a = !1;
      return this.asyncProcessWithContext({
        stack: n,
        blocks: i,
        baseElement: o,
        blocksLength: s,
        flagAnyBracket: a,
        dzc: r,
        bracketSettings: t,
        index: 0,
        stackIndex: 0,
        middleStack: [],
        allMiddles: []
      });
    }
    clearAllMiddles(e) {
      var t = e.blocks,
        r = e.middleStack,
        n = e.allMiddles,
        i = e.baseElement,
        o = e.dzc,
        s = W.A.voidAllOfArr(r.map(e => {
          var t;
          return e.block.reactInstance.clearCustomHeight();
        }));
      return W.A.executeAfter(s, () => W.A.voidAllOfArr(n.map(e => this.processMiddleAround(t, e.index, i, o))));
    }
    cleanRemaningStack(e) {
      for (var t = this, r = e.stack, n = e.blocks, i = e.baseElement, o = e.dzc, s = function s() {
          var a = r[e.stackIndex],
            l = W.A.executeAfter(t.clearCustomHeight(a), () => t.processBracketAround(n, a, i, o));
          if (l) return e.stackIndex++, {
            v: l.then(() => t.cleanRemaningStack(e))
          };
        }; e.stackIndex < r.length; e.stackIndex++) {
        var a = s();
        if ("object" == typeof a) return a.v;
      }
    }
    processPair(e, t, r, n, i, o) {
      var s;
      return s = t && r ? G.updateOpenClose(t, r, e, n, {
        orderedMiddles: i
      }, o) : W.A.voidAllOf(this.clearCustomHeight(t), this.clearCustomHeight(r)), W.A.executeAfter(s, () => W.A.voidAllOf(this.processBracketAround(e, t, n, o), this.processBracketAround(e, r, n, o)));
    }
    clearCustomHeight(e) {
      if (e) return G.clearCustomHeight(e.info.element);
    }
    processBracketAround(e, t, r, n) {
      if (t) {
        var i = [],
          o = this.getNextBlock(e, t.index);
        o && l.A.isPowerIndexSymbol(o) && i.push(H.update(o, t.info.element, r, !1, !0, n));
        var s = this.getPreviousBlock(e, t.index);
        return s && l.A.isPreScriptSymbol(s) && i.push(H.update(s, t.info.element, r, !1, !1, n)), W.A.voidAllOfArr(i);
      }
    }
    processMiddleAround(e, t, r, n) {
      var i = [],
        o = e[t],
        s = this.getNextBlock(e, t);
      s && l.A.isPowerIndexSymbol(s) && i.push(H.update(s, o, r, !1, !0, n));
      var a = this.getPreviousBlock(e, t);
      return a && l.A.isPreScriptSymbol(a) && i.push(H.update(a, o, r, !1, !1, n)), W.A.voidAllOfArr(i);
    }
    getPreviousBlock(e, t) {
      if (!(t <= 0)) return e[t - 1];
    }
    getNextBlock(e, t) {
      if (!(t >= e.length - 1)) return e[t + 1];
    }
  }
  const Z = new K();
  var Y = r(58578),
    Q = r(84542),
    J = r(55451);
  function X(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function $(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? X(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : X(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class ee extends s().Component {
    constructor() {
      super(...arguments), (0, i.A)(this, "state", {}), (0, i.A)(this, "lostFocus", !1), (0, i.A)(this, "linkInfoDiv", void 0);
    }
    renderLinkInfo() {
      if (this.state.showLinkInfo) return s().createElement("div", {
        ref: e => {
          e && e != this.linkInfoDiv && (this.linkInfoDiv = e, J.A.next(() => {
            e.focus();
          }));
        },
        onFocus: () => this.lostFocus = !1,
        onBlur: () => {
          this.lostFocus = !0, J.A.next(() => {
            this.lostFocus && this.setState({
              showLinkInfo: !1
            });
          }, 50);
        },
        tabIndex: -1,
        style: {
          position: "absolute",
          top: "100%",
          left: -20,
          zIndex: 999,
          outline: "none"
        }
      }, s().createElement(Q.A, {
        link: this.props.hyperLink,
        noEdit: !0
      }));
    }
    render() {
      var e = this.props,
        t = e.hyperLink,
        r = e.style,
        n = e.textToRender;
      return s().createElement("block", {
        onClick: e => {
          e.stopPropagation(), this.setState({
            showLinkInfo: !0
          });
        },
        className: "role-hyper-link",
        "data-hyper-link-url": t,
        style: $($({}, r), {}, {
          position: "relative",
          cursor: "pointer"
        })
      }, s().createElement("span", null, n), this.renderLinkInfo());
    }
  }
  var te = r(5066),
    re = r(40961),
    ne = r.n(re),
    ie = r(4258),
    oe = r(19539),
    se = r(53359),
    ae = r(50510),
    le = r(97372);
  function ce(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function de(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ce(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ce(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class he extends g {
    constructor(e) {
      super(e), (0, i.A)(this, "lastHasAnyBracketOrPowerIndex", !1), (0, i.A)(this, "debug_compareCacheSize", () => {
        var e = this.getLineData(),
          t = this.getMt(),
          r = t.fetchCacheSize(this.props.parentEditAreaId, e.id);
        if (r && "d" != r) {
          var n = ne().findDOMNode(this),
            i = l.A.findBaseLineBlock(n),
            o = B.T.getBCRect(n, t.getDocZoomContainer()),
            s = B.T.getBCRect(i, t.getDocZoomContainer()),
            a = {
              w: oe.A.round4(B.T.widthOf(o)),
              h: oe.A.round4(B.T.heightOf(o)),
              bl: oe.A.round4((s.bottom - o.top) / B.T.heightOf(o))
            };
          a.w == r.w && a.h == r.h && a.bl == r.bl || console.warn(a, r);
        }
      }), (0, i.A)(this, "storeCacheSize", e => {
        if (!this.willComponentUnmount) {
          var t = this.getLineData(),
            r = this.context.fixedContextHandler.getMtFuncs(),
            n = r.fetchCacheSize(this.props.parentEditAreaId, t.id);
          if ("d" != n) if (e || !ie.O.shouldAlwaysShownOn1Line(t)) {
            var i = ne().findDOMNode(this),
              o = l.A.findBaseLineBlock(i),
              s = B.T.getBCRect(i, r.getDocZoomContainer()),
              a = this.fetchLineWithHeight(i),
              c = a.lw,
              d = a.lh,
              h = B.T.getBCRect(o, r.getDocZoomContainer()),
              p = {
                w: oe.A.round4(c),
                h: oe.A.round4(d),
                bl: oe.A.round4((h.bottom - s.top) / B.T.heightOf(s))
              };
            r.setLineCacheSize(this.props.parentEditAreaId, t.id, p);
          } else n && r.unsetLineCacheSize(this.props.parentEditAreaId, t.id);
        }
      }), (0, i.A)(this, "renderDoneOnSizeChanged", () => {
        if (this.props.debugCompareCacheSize && J.A.next(this.debug_compareCacheSize, 100), this.checkShouldStoreCacheSize(this.prevProps)) return this.storeCacheSize();
      }), (0, i.A)(this, "postLineProcess", () => {
        if (!this.getLineElement()) return this.renderDoneOnSizeChanged();
        var e = this.context.fixedContextHandler.getMtFuncs();
        return W.A.executeAfter(Z.process(this.getLineElement(), e.getBracketSettings(), e.getDocZoomContainer()), this.renderDoneOnSizeChanged);
      }), (0, i.A)(this, "handlePrefixMouseDown", e => {
        e.stopPropagation(), e.preventDefault();
        var t = this.getLineData(),
          r = h.A.getLineStyle(t, "listType");
        E.A.isBulletListType(r) && this.props.onChildSelectedChanged(0, 0, {
          controlled: !0,
          listTypeSelect: "all"
        }, {});
      }), (0, i.A)(this, "onTagInfoChanged", (e, t) => {
        var r = a.A.setProp(this.getLineData(), "tagInfo", e);
        this.props.onDataChanged(r, t);
      }), (0, i.A)(this, "getRef", e => {
        this.line = e, e && (e.reactInstance = this);
      }), this.props.allowTag && (this.state = {
        showTagSetting: !1
      });
    }
    componentDidMount() {
      super.componentDidMount && super.componentDidMount(), this.props.parentEditAreaId && this.props.storeCacheSize && this.getMt().delayRegisterLazyLineAdded(this.props.parentEditAreaId, this.getLineData().id);
    }
    componentWillUnmount() {
      super.componentWillUnmount && super.componentWillUnmount(), this.props.storeCacheSize && this.props.parentEditAreaId && this.getMt().delayRegisterLineRemoved(this.props.parentEditAreaId, this.getLineData().id);
    }
    renderFirstLinePrefix() {
      if (this.props.firstLinePrefix && 0 == this.props.lineIndex) return s().createElement("first-line-prefix", {
        style: this.props.firstLinePrefixStyle
      }, this.props.firstLinePrefix);
    }
    getLineSelected() {
      return this.props.selected;
    }
    getBlockSelected(e) {
      var t = this.getLineSelected();
      if (t) return t.charIndex == e ? t : void 0;
    }
    getExtendedBlockSelected(e) {
      var t = this.props.extendedSelected;
      if (t) return t.charIndex == e ? t : void 0;
    }
    shouldComponentUpdate(e, t) {
      var r = this.state != t || super.shouldComponentUpdate(e, t) || e.isFirstLine != this.props.isFirstLine || e.pageSection != this.props.pageSection || e.isLastLine != this.props.isLastLine || e.allowTag != this.props.allowTag || e.firstLinePrefix != this.props.firstLinePrefix || e.dgTextInfo != this.props.dgTextInfo || this.isSpacingChanged(this.props.spaceResolved, e.spaceResolved) || this.isLineInfoUpdate(e, this.props);
      return r && this.line && (this.line.__upV = (this.line.__upV || 0) + 1), r;
    }
    isSpacingChanged(e, t) {
      return e != t && (!!e != !!t || e.beforeSpacingSet != t.beforeSpacingSet || e.afterSpacingSet != t.afterSpacingSet);
    }
    fetchCacheSize() {
      var e;
      return this.getMt().fetchCacheSize(this.props.parentEditAreaId, this.getLineData().id);
    }
    getMt() {
      return this.context.fixedContextHandler.getMtFuncs();
    }
    fetchLineWithHeight(e) {
      var t = this.getMt().getDocZoomContainer(),
        r = B.T.getBCRect(e, t),
        n = B.T.widthOf(r),
        i = B.T.heightOf(r);
      try {
        var o = e.parentElement.parentElement;
        if (l.A.isInlineMathContainer(o.parentElement) && !this.isLineAlone(e)) return this.extractWHFromStartEndBlock(e, t, i, !1);
        if (l.A.isDisplayMathContainer(o)) return this.extractWHFromStartEndBlock(e, t, i, !0);
      } catch (e) {
        console.error(e);
      }
      return {
        lw: n,
        lh: i
      };
    }
    isLineAlone(e) {
      return !(e.previousElementSibling && "LINE" == e.previousElementSibling.tagName || e.nextElementSibling && "LINE" == e.nextElementSibling.tagName);
    }
    extractWHFromStartEndBlock(e, t, r, n) {
      var i = l.A.findFirstMathLineBlock(e),
        o = l.A.findLastMathLineBlock(e);
      if (i && o) {
        var s = B.T.getBCRect(i, t),
          a = B.T.getBCRect(o, t);
        if (s.left < a.left || i == o) {
          var c = n ? l.A.getComputedStyleAsNumber(i, "paddingLeft") - l.A.getComputedStyleAsNumber(i, "marginLeft") : 0,
            d = n ? l.A.getComputedStyleAsNumber(o, "paddingRight") + l.A.getComputedStyleAsNumber(o, "marginRight") : 0,
            h = s.left - c,
            p = a.right + d;
          return {
            lw: Math.abs(p - h),
            lh: r
          };
        }
        var u = n ? l.A.getComputedStyleAsNumber(i, "paddingRight") + l.A.getComputedStyleAsNumber(i, "marginRight") : 0,
          g = n ? l.A.getComputedStyleAsNumber(o, "paddingLeft") - l.A.getComputedStyleAsNumber(o, "marginLeft") : 0,
          m = s.right + u,
          f = a.left - g;
        return {
          lw: Math.abs(m - f),
          lh: r
        };
      }
    }
    isLineInfoUpdate(e, t) {
      var r = e.lineInfo,
        n = this.getLineInfo(t);
      return (null != r || null != n) && (!!r != !!n || r.indentIndex != n.indentIndex || !P.A.arrayEquals(r.indentCounters, n.indentCounters));
    }
    queuePostProcessLineIfNecessary(e, t) {
      t || !e || this.shouldCallPostProcess(e) ? this.lastHasAnyBracketOrPowerIndex ? this.context.fixedContextHandler.getBatchUpdater().push(this.postLineProcess, this) : this.context.fixedContextHandler.getBatchUpdater().push(this.renderDoneOnSizeChanged, this) : this.pushRenderDoneOnSizeChangedIfRequired(e);
    }
    shouldCallPostProcess(e) {
      return this.getLineData(e) != this.getLineData(this.props) || e.fontSizeRatio != this.props.fontSizeRatio || this.isLineInfoUpdate(this.props, e);
    }
    checkShouldStoreCacheSize(e) {
      var t;
      return this.props.storeCacheSize && (!e || e.line != this.getLineData() || e.dgTextInfo != this.props.dgTextInfo && (null === (t = this.props.dgTextInfo) || void 0 === t ? void 0 : t.textTransform));
    }
    pushRenderDoneOnSizeChangedIfRequired(e) {
      this.checkShouldStoreCacheSize(e) && this.context.fixedContextHandler.getBatchUpdater().push(this.renderDoneOnSizeChanged, this);
    }
    renderEmptyLineBlock(e, t) {
      return 0 == e.length ? s().createElement("emptyblock", {
        "aria-label": "empty line"
      }, "rtl" == t ? " " : " ") : null;
    }
    getLineInfo(e) {
      return e ? e.lineInfo || {} : this.props.lineInfo;
    }
    renderPrefix(e, t, r, i, o) {
      var a = O.getPrefix({
        line: e,
        lineInfo: t,
        pageSection: i
      }, r);
      if (!a) return s().createElement("prefix", null);
      var l = (0, n.A)(a, 2),
        c = l[0],
        d = l[1];
      if ("section" == r) return s().createElement(M, {
        direction: o,
        lineInfo: t,
        pageSection: i,
        fixedContextHandler: this.context.fixedContextHandler,
        data: c
      });
      if (!c) return s().createElement("prefix", null);
      var p = h.A.getHtmlFromStyleForBullet(e) || {};
      return p.flexShrink = 0, p.minWidth = "1em", p.textAlign = "rtl" == o ? "right" : "left", d && (p.visibility = "hidden"), s().createElement("prefix", {
        style: p,
        onDoubleClick: this.handleDoubleClick,
        onMouseDown: this.handlePrefixMouseDown
      }, c);
    }
    handleDoubleClick(e) {
      e.stopPropagation(), e.preventDefault();
    }
    getMathFontSizePixel() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
      return this.context.mathFontSizeBase * this.props.fontSizeRatio * e;
    }
    getRoundEm(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      return l.A.getEmRound(e, this.getMathFontSizePixel(t));
    }
    getRoundEmStr(e, t) {
      return this.getRoundEm(e, t) + "em";
    }
    renderTag() {
      if (this.props.allowTag) {
        var e = this.getLineData();
        if (this.getLineSelected() || se.p.shouldShowTagInfo(e)) {
          var t = this.context.fixedContextHandler.getMtFuncs(),
            r = t.getBaseTextModeFontSize() * (this.props.fontSizeRatio || 1),
            n = Y.A.textFontFamilyFromKey(t.getBaseTextModeFont());
          return s().createElement(y.G, {
            tagPosition: "line",
            getDzContainer: t.getDocZoomContainer,
            defaultText: this.props.defaultRegTagStr,
            fontFamily: n,
            fontSize: r,
            onTagInfoChanged: this.onTagInfoChanged,
            tagInfo: e.tagInfo,
            fixedContextHandler: this.context.fixedContextHandler
          });
        }
      }
    }
    getBaseLineClass(e) {
      var t = this.props,
        r = t.rootLevel,
        n = t.isTextMode;
      return w.getClass({
        rootLevel: r,
        isTextMode: n || r,
        allowTag: this.props.allowTag,
        selected: this.getLineSelected(),
        line: this.getLineData(),
        lineInfo: this.getLineInfo(),
        inTableOfContent: this.props.inTableOfContent,
        textDir: e
      });
    }
    getRenderBlocksInfo(e) {
      var t = this.props.isTextMode,
        r = {},
        n,
        i = this.getLineData().blocks,
        o = this.renderBlocks(i, !t && this.shouldCollectTextMetrics(), e);
      return this.props.stripInfo && o.metrics && !o.metrics.haveComposite && (this.props.stripInfo.stripUp && !o.metrics.haveUpperChar && (r.marginTop = this.getRoundEmStr(this.props.stripInfo.stripUpEm || m.A.upperSmallMarginTopEm)), this.props.stripInfo.stripDown && !o.metrics.haveLowerChar && (r.marginBottom = this.getRoundEmStr(m.A.lowerSmallMarginBottomEm))), {
        blockRenders: o.blockRenders,
        mutableStyle: r,
        shouldSingleBlockLine: o.shouldSingleBlockLine
      };
    }
    getProps() {
      return this.props;
    }
    getBaseStyle(e, t) {
      var r = this.getProps(),
        n = r.style,
        i,
        o;
      return r.isTextMode || r.rootLevel || r.renderAsPlainText ? te.X.mergeStyle(te.X.getCacheBaseStyle(e.style && e.style.lineHeightEm || t.textLineHeight, null === (i = r.spaceResolved) || void 0 === i ? void 0 : i.beforeSpacingSet, null === (o = r.spaceResolved) || void 0 === o ? void 0 : o.afterSpacingSet), n) : te.X.mergeStyle(te.X.getCacheBaseStyle(t.mathLineHeight, 0, 0), n);
    }
    renderForRoot() {
      var e = this.getLineData(),
        t = this.getLineInfo(),
        r = e.blocks,
        n = h.A.getLineStyle(e, "textDirection") || this.props.textDirection,
        i = this.getBaseLineClass(n),
        o = [],
        a = this.context.fixedContextHandler.getMtFuncs().getPageSettings();
      if (!this.suppress) {
        var l = this.renderBlocks(r, !1, n);
        o = l.blockRenders, i = x()(i, {
          "full-line-block-inside": l.shouldSingleBlockLine
        });
      }
      var c = h.A.getLineStyle(e, "listType");
      this.props.inTableOfContent && (c = void 0), e.customCn && (i = x()(i, e.customCn));
      var d = "section" == c ? this.props.pageSection || {} : void 0,
        p = "section" == c,
        u = ae.m.anySpacingResolvedSet(this.props.spaceResolved),
        g = w.wrapStyleWithSection(this.getBaseStyle(e, a), t, c, d);
      return e.customReactStyle && (g = de(de({}, g), e.customReactStyle)), s().createElement("line", {
        ref: this.getRef,
        key: e.id,
        style: g,
        className: i,
        "data-line-id": p ? e.id : void 0,
        "data-psc": u ? 1 : void 0
      }, this.renderFirstLinePrefix(), this.renderPrefix(e, t, c, d, n), s().createElement("blocks", {
        dir: n
      }, s().createElement("baselineblock", {
        className: "inline"
      }), this.renderEmptyLineBlock(r, n), o));
    }
    renderForTextMode() {
      var e = this.getLineData(),
        t = this.getLineInfo(),
        r = e.blocks,
        n = h.A.getLineStyle(e, "textDirection") || this.props.textDirection,
        i = this.getBaseLineClass(n),
        o = [],
        a = this.context.fixedContextHandler.getMtFuncs().getPageSettings();
      if (!this.suppress) {
        var l = this.renderBlocks(r, !1, n);
        o = l.blockRenders, i = x()(i, {
          "full-line-block-inside": l.shouldSingleBlockLine
        });
      }
      var c = h.A.getLineStyle(e, "listType"),
        d;
      c = "section" == c ? "none" : c;
      var p = ae.m.anySpacingResolvedSet(this.props.spaceResolved);
      e.customCn && (i = x()(i, e.customCn));
      var u = this.getBaseStyle(e, a);
      return e.customReactStyle && (u = de(de({}, u), e.customReactStyle)), s().createElement("line", {
        ref: this.getRef,
        key: e.id,
        style: u,
        className: i,
        "data-psc": p ? 1 : void 0
      }, this.renderPrefix(e, t, c, void 0, n), s().createElement("blocks", {
        dir: n
      }, s().createElement("baselineblock", {
        className: "inline"
      }), this.renderEmptyLineBlock(r, n), o));
    }
    renderForMathMode() {
      var e = this.getLineData(),
        t = e.blocks,
        r = this.getBaseLineClass("ltr"),
        n = [],
        i = h.A.getLineStyle(e, "textDirection") || this.props.textDirection,
        o = this.context.fixedContextHandler.getMtFuncs().getPageSettings(),
        a;
      if (!this.suppress) {
        var l = this.getRenderBlocksInfo(i);
        a = l.mutableStyle, n = l.blockRenders, r = x()(r, {
          "full-line-block-inside": l.shouldSingleBlockLine
        });
      }
      return e.customCn && (r = x()(r, e.customCn)), a = te.X.mergeStyle(a, this.getBaseStyle(e, o)), e.customReactStyle && (a = de(de({}, a), e.customReactStyle)), s().createElement("line", {
        dir: i,
        style: a,
        ref: this.getRef,
        key: e.id,
        className: r
      }, s().createElement("baselineblock", null), this.renderEmptyLineBlock(t, i), this.renderTag(), n);
    }
    render() {
      var e = this.props,
        t = e.rootLevel,
        r = e.isTextMode;
      return t ? this.renderForRoot() : r ? this.renderForTextMode() : this.renderForMathMode();
    }
    onDataChanged(e, t, r, n) {
      this.props.onChildDataChanged(e, t, r, n);
    }
    onSelectedChanged(e, t, r, n) {
      this.props.onChildSelectedChanged(e, t, r, n);
    }
    getLineData(e) {
      return e ? (v.A.makeSureBlocks(e.line), e.line) : (v.A.makeSureBlocks(this.props.line), this.props.line);
    }
    renderNormalTextBlock(e, t, r, n) {
      var i = this.context.fixedContextHandler.getMtFuncs(),
        o = this.context.baseMathModeFontFamily,
        a = i.getBaseTextModeFont();
      if (this.props.isTextMode || this.props.rootLevel || this.props.renderAsPlainText || this.props.noSpacingRule) {
        var l = e.text;
        return h.A.hasHyperLink(e) ? this.context.fixedContextHandler.getMtFuncs().isReadOnly() ? void r.push(s().createElement(ee, {
          hyperLink: e.style.hyperLink,
          style: h.A.getHtmlFromStyle(e, this.props.textDecoration, o, a),
          key: e.id,
          textToRender: l
        })) : void r.push(s().createElement("block", {
          className: "role-hyper-link",
          "data-hyper-link-url": e.style.hyperLink,
          style: h.A.getHtmlFromStyle(e, this.props.textDecoration, o, a),
          key: e.id
        }, l)) : void r.push(s().createElement("block", {
          style: h.A.getHtmlFromStyle(e, this.props.textDecoration, o, a),
          key: e.id
        }, l));
      }
      for (var c = D.A.getTextBlockInfo(e, t, n || {}, this.props.renderContext), d = 0; d < c.length; d++) {
        var p = c[d];
        r.push(s().createElement("block", {
          style: h.A.getHtmlFromStyle(e, this.props.textDecoration, o, a),
          className: x()(p.category),
          key: p.key
        }, p.text));
      }
    }
    shouldCollectTextMetrics() {
      return (this.props.isFirstLine || this.props.isLastLine) && this.props.stripInfo && (this.props.stripInfo.stripUp || this.props.stripInfo.stripDown);
    }
    renderBlocks(e, t, r) {
      var n = 0,
        i = [],
        o = {},
        a = {},
        l = null,
        h = !1;
      this.lastHasAnyBracketOrPowerIndex = !1;
      for (var p = 0, u = e.length; p < u; p++) {
        var g = v.A.makeSureBlock(e, p);
        if (a = {
          block: p < u - 1 ? e[p + 1] : null
        }, !h && I.A.isSingeLineBlock(g) && (h = !0), "composite" == g.type || "single" == g.type) {
          var m = "",
            y = c.A.getCustomSymbolComponent(g.text);
          y.isOperatorName ? m = D.A.buildClassForOperatorName(o, a) : le.A.isIntegral(g) ? m = D.A.buildClassForIntegral(o) : le.A.isOIntegral(g) && (m = D.A.buildClassForOIntegral(o)), t && (l = f.A.fillMetricsForNonTextBlock(g, y, l)), this.lastHasAnyBracketOrPowerIndex || (y.isBracket || y.isDynamicPowerIndexPosition && y.isDynamicPowerIndexPosition()) && (this.lastHasAnyBracketOrPowerIndex = !0);
          var b = y.getViewComponent(),
            x = this.props,
            C = this.getBlockSelected(n),
            S = this.getExtendedBlockSelected(n),
            A = s().createElement(b, {
              dgTextInfo: x.isTextMode ? x.dgTextInfo : void 0,
              singleBlockOnly: 1 == e.length,
              isRootLine: x.rootLevel,
              isFirstMathModeLevel: x.isFirstMathModeLevel,
              allowTag: x.allowTag,
              stripInfo: x.stripInfo,
              fracLevel: x.fracLevel,
              fontSizeRatio: x.fontSizeRatio,
              lineSelected: !!this.getLineSelected(),
              displayMode: x.displayMode,
              data: g,
              selected: C,
              extendedSelected: S,
              onDataChanged: this.onDataChanged.bind(this, p, n),
              onSelectedChanged: this.onSelectedChanged.bind(this, p, n),
              key: g.id,
              customDataStr: m,
              previousBlockInfo: o,
              renderContext: x.renderContext,
              isLastBlock: p >= e.length - 1,
              textDecoration: this.props.textDecoration,
              textDirection: r,
              isLineParentTextMode: this.props.isTextMode || this.props.rootLevel
            });
          n += 1, i.push(A), o = {
            category: y.category,
            block: g,
            isOperatorName: y.isOperatorName
          };
        } else {
          var w = d.Ay.getUnistring(g),
            E;
          t && (l = f.A.fillMetricsForTextBlock(w, l)), n = n + w.length, this.renderNormalTextBlock(g, w, i, o), o = {
            block: g
          };
        }
      }
      return {
        blockRenders: i,
        metrics: l,
        shouldSingleBlockLine: h
      };
    }
  }
};
