/* module 49632 — 9798 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    PowerIndex: () => k,
    PowerIndexSc: () => O,
    default: () => D
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(2543),
    a = r.n(s),
    l = r(39791),
    c = r(25742),
    d = r(48440),
    h = r(49812),
    p = r(97372),
    u = r(30803),
    g = r(68657),
    m = r(67882),
    f = r(70224),
    y = r(65507),
    v = r(32485),
    b = r.n(v),
    x = r(3897),
    C = r(19340),
    S = r(71311),
    A = r(69446);
  function w(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function E(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? w(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class k extends c.A {
    constructor(e) {
      super(e), (0, n.A)(this, "managedState", void 0), this.containerClassName = "power-index-symbol-container", this.elementLighMethodsCache = {}, this.managedState = this.isBothPowerIndex() ? y.FF : y.Ac;
    }
    isBothPowerIndex() {
      return !(!this.props.data.elements.powerValue || !this.props.data.elements.indexValue);
    }
    setManagedState(e) {
      if (this.managedState.marginBottomEm != e.marginBottomEm || this.managedState.marginTopEm != e.marginTopEm || this.managedState.marginLeftEm != e.marginLeftEm) return this.managedState = e, new Promise(e => {
        this.forceUpdate(e);
      });
    }
    getClassName() {
      return b()(super.getClassName(), {
        "has-power": !!this.props.data.elements.powerValue,
        "left-overlaped": this.isLeftOverlaped()
      });
    }
    getTextEndWithPrimeMarginEm(e) {
      if (p.A.isTextBlock(e)) {
        var t = e.text;
        if (t) return (0, S.Zy)((0, C.zN)(this.getMtFuncs().getbaseMathModeFontFamily()), t);
      }
    }
    isLeftOverlaped() {
      if (!this.props.data.elements.powerValue && !y.Ay.isBottomEmpty(this.props.data.elements) && this.props.previousBlockInfo) {
        var e = this.props.previousBlockInfo.block,
          t;
        return !!e && !!this.getTextEndWithPrimeMarginEm(e);
      }
    }
    getCompositeBlockStyle() {
      var e = super.getCompositeBlockStyle();
      if (!this.props.data.elements.powerValue && !y.Ay.isBottomEmpty(this.props.data.elements) && this.props.previousBlockInfo) {
        var t = this.props.previousBlockInfo.block;
        if (!t) return this.wrapBlockStyleWithManagedState(e);
        var r = this.getTextEndWithPrimeMarginEm(t);
        if (r) return E(E({}, e), {}, {
          marginLeft: "-".concat(r, "em"),
          minWidth: "".concat(r + .1, "em")
        });
      }
      return this.wrapBlockStyleWithManagedState(e);
    }
    wrapBlockStyleWithManagedState(e) {
      return this.managedState.marginLeftEm ? E(E({}, e), {}, {
        marginLeft: "".concat(this.managedState.marginLeftEm, "em")
      }) : e;
    }
    hasBothPowerIndex() {
      return this.props.data.elements.powerValue && this.props.data.elements.indexValue;
    }
    getPowerStripInfo() {
      if (this.hasBothPowerIndex()) return this.getMergedStripInfoWithProps(A.m5);
    }
    getIndexStripInfo() {
      if (this.hasBothPowerIndex()) return this.getMergedStripInfoWithProps({
        stripUp: !0,
        stripUpEm: x.A.upperSmallMarginTopEm + .12
      });
    }
    renderTop() {
      var e = this.props.data.elements.powerValue;
      if (e) {
        var t = "power-value";
        if (h.A.isEmptyOrOneTextEditor(e)) {
          var r,
            n = null === (r = e.lines[0].blocks[0]) || void 0 === r ? void 0 : r.text;
          return "'" == n || "′" == n || "″" == n || "‴" == n || "⁗" == n ? o().createElement(g.A, E(E({
            key: "1_prime"
          }, this.buildLightMetaDataDirectChildOrEmpty("powerValue")), {}, {
            mgBottomEm: (this.managedState.marginBottomEm || 0) - .05,
            fontSizeRatio: this.props.fontSizeRatio,
            className: t,
            style: {
              fontSize: "1em",
              marginLeft: "-0.05em"
            },
            stripInfo: this.getPowerStripInfo()
          })) : o().createElement(g.A, E(E({
            key: "1"
          }, this.buildLightMetaDataDirectChildOrEmpty("powerValue")), {}, {
            mgBottomEm: this.managedState.marginBottomEm,
            fontSizeRatio: .7 * this.props.fontSizeRatio,
            className: t,
            stripInfo: this.getPowerStripInfo()
          }));
        }
        var i = h.A.isSingleLineEditor(e) ? m.A : l.A;
        return o().createElement(i, E(E({
          key: "1"
        }, this.buildMetaDataDirectChildOrEmpty("powerValue")), {}, {
          mgBottomEm: this.managedState.marginBottomEm,
          className: t,
          fontSizeRatio: .7 * this.props.fontSizeRatio,
          noSpacingRule: !0,
          noAreaContainer: !0,
          stripInfo: this.getPowerStripInfo()
        }));
      }
    }
    renderBottom() {
      var e = this.props.data.elements.indexValue;
      if (e) {
        if (h.A.isEmptyOrOneTextEditor(e)) return o().createElement(g.A, E(E({
          key: "3"
        }, this.buildLightMetaDataDirectChildOrEmpty("indexValue")), {}, {
          mgTopEm: this.managedState.marginTopEm,
          fontSizeRatio: .7 * this.props.fontSizeRatio,
          className: "index-value",
          stripInfo: this.getIndexStripInfo()
        }));
        var t = h.A.isSingleLineEditor(e) ? m.A : l.A;
        return o().createElement(t, E(E({
          key: "3"
        }, this.buildMetaDataDirectChildOrEmpty("indexValue")), {}, {
          mgTopEm: this.managedState.marginTopEm,
          className: "index-value",
          fontSizeRatio: .7 * this.props.fontSizeRatio,
          noSpacingRule: !0,
          noAreaContainer: !0,
          stripInfo: this.getIndexStripInfo()
        }));
      }
    }
    renderComponent() {
      return [this.renderTop(), o().createElement("middle-base", {
        key: "2"
      }, o().createElement("inline", null)), this.renderBottom()];
    }
  }
  class O extends d.A {
    isDynamicPowerIndexPosition() {
      return !0;
    }
    getViewComponent() {
      return k;
    }
    getModelMeta() {
      return {
        text: "\\power-index",
        elements: {
          powerValue: {
            onRemove: "only"
          },
          indexValue: {
            onRemove: "only"
          }
        }
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: ["\\power-index"],
        searchText: "power index superscript subscript",
        description: "power index, superscript subscript",
        height: 25,
        renderSymbol: () => o().createElement("div", {
          className: "icon-power-index-symbol"
        }, o().createElement("div", {
          className: "align-end"
        }, "x"), o().createElement("div", {
          className: "square-up common-square-icon common-square-icon-expand"
        }), o().createElement("div", {
          className: "square-down common-square-icon common-square-icon-expand"
        }))
      });
    }
    parsePowerIndexToElements(e, t, r) {
      if (null == e) return null;
      var n = null;
      n = a().isString(t) ? f.A.createOneTextEditor(t) : t.text ? {
        id: u.w.nextId(),
        lines: [{
          id: u.w.nextId(),
          blocks: [t]
        }]
      } : {
        id: u.w.nextId(),
        lines: t
      }, "^" == e ? r.powerValue = n : r.indexValue = n;
    }
    toModel(e, t, r) {
      var n = {},
        i = (r = r || [])[0],
        o = r[2];
      this.parsePowerIndexToElements(e, t, n), this.parsePowerIndexToElements(i, o, n);
      var s = "\\power-index";
      return null == i && (s = "^" == e ? "\\power" : "\\index"), {
        id: u.w.nextId(),
        type: "composite",
        elements: n,
        text: s
      };
    }
    isLastLatexArrPrime(e) {
      return !(!e.latexArray || 0 == e.latexArray.length) && "'" == a().last(a().last(e.latexArray));
    }
    toMathml(e, t) {
      return {
        type: "msubsup",
        base: null,
        subscript: t.generateEditor(e.elements.indexValue),
        superscript: t.generateEditor(e.elements.powerValue)
      };
    }
    toLatex(e, t, r, n) {
      var i = e.elements.powerValue,
        o = e.elements.indexValue,
        s = "",
        l = "",
        c = "";
      if (i && (l = r.toLatexFromEditor(i, t)), o && (c = r.toLatexFromEditor(o, t)), this.isLastLatexArrPrime(n) && !a().isEmpty(l)) {
        var d = n.latexArray,
          h,
          p = d.pop().slice(0, -1);
        return d.push(p), s += "^{\\prime ".concat(l, "}"), a().isEmpty(c) || (s += "_{".concat(c, "}")), d.push(s), {
          arrStr: d
        };
      }
      return a().isEmpty(c) || (s += "_{".concat(c, "}")), a().isEmpty(l) || (s += "^{".concat(l, "}")), this.wrapIfConsecutivePowerIndex(n, e, s);
    }
    wrapIfConsecutivePowerIndex(e, t, r) {
      if (e.blockIndex + 1 >= e.wrapBlocks.length) return r;
      var n = e.wrapBlocks[e.blockIndex + 1];
      return n && p.A.isPowerIndex(n.block) ? p.A.hasBothPowerAndIndex(t) || p.A.isPower(n.block) && p.A.isPower(n.block) ? this.wrapPrevArr(e, r) : "".concat(r, "{}") : r;
    }
    wrapPrevArr(e, t) {
      return "{".concat(t, "}");
    }
  }
  const D = new O();
};
