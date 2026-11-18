/* module 60203 — 6318 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    PreScript: () => v,
    PreScriptSc: () => b,
    default: () => x
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(48440),
    a = r(25742),
    l = r(39791),
    c = r(65507),
    d = r(78183),
    h = r(49812),
    p = r(68657),
    u = r(67882),
    g = r(3897),
    m = r(69446);
  function f(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function y(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? f(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class v extends a.A {
    constructor(e) {
      super(e), (0, n.A)(this, "managedState", void 0), this.containerClassName = "pre-script-symbol-container", this.elementLighMethodsCache = {}, this.managedState = this.isBothPowerIndex() ? c.FF : c.Ac;
    }
    getCompositeBlockStyle() {
      return y(y({}, super.getCompositeBlockStyle()), {}, {
        marginRight: "0.07em",
        marginLeft: "0.07em"
      });
    }
    isBothPowerIndex() {
      return !(!this.props.data.elements.powerValue || !this.props.data.elements.indexValue);
    }
    setManagedState(e) {
      if (this.managedState.marginBottomEm != e.marginBottomEm || this.managedState.marginTopEm != e.marginTopEm || this.managedState.marginLeftEm != e.marginLeftEm) return this.managedState = e, new Promise(e => {
        this.forceUpdate(e);
      });
    }
    getPowerStripInfo() {
      if (this.isBothPowerIndex()) return this.getMergedStripInfoWithProps(m.m5);
    }
    getIndexStripInfo() {
      if (this.isBothPowerIndex()) return this.getMergedStripInfoWithProps({
        stripUp: !0,
        stripUpEm: g.A.upperSmallMarginTopEm + .12
      });
    }
    renderTop() {
      var e = this.props.data.elements.powerValue;
      if (e) {
        var t = "power-value";
        if (h.A.isEmptyOrOneTextEditor(e)) return o().createElement(p.A, y(y({
          key: "1"
        }, this.buildLightMetaDataDirectChildOrEmpty("powerValue")), {}, {
          mgBottomEm: this.managedState.marginBottomEm,
          fontSizeRatio: .7 * this.props.fontSizeRatio,
          className: t,
          stripInfo: this.getPowerStripInfo()
        }));
        var r = h.A.isSingleLineEditor(e) ? u.A : l.A;
        return o().createElement(r, y(y({
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
        if (h.A.isEmptyOrOneTextEditor(e)) return o().createElement(p.A, y(y({
          key: "3"
        }, this.buildLightMetaDataDirectChildOrEmpty("indexValue")), {}, {
          mgTopEm: this.managedState.marginTopEm,
          fontSizeRatio: .7 * this.props.fontSizeRatio,
          className: "index-value",
          stripInfo: this.getIndexStripInfo()
        }));
        var t = h.A.isSingleLineEditor(e) ? u.A : l.A;
        return o().createElement(t, y(y({
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
  class b extends s.A {
    isDynamicPowerIndexPosition() {
      return !0;
    }
    getViewComponent() {
      return v;
    }
    getLatexName() {
      return "\\prescript";
    }
    getModelMeta() {
      return {
        text: this.getLatexName(),
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
        names: [this.getLatexName()],
        searchText: "prescript pre-script",
        description: "prescript ",
        height: 25,
        renderSymbol: () => o().createElement("div", {
          className: "icon-power-index-symbol"
        }, o().createElement("div", {
          className: "square-up common-square-icon common-square-icon-expand"
        }), o().createElement("div", {
          className: "square-down common-square-icon common-square-icon-expand"
        }), o().createElement("div", {
          className: "align-end"
        }, "x"))
      });
    }
    toModel() {
      return this.getModel();
    }
    toMathml(e, t) {
      return {
        type: "msubsup",
        base: {
          type: "empty"
        },
        subscript: t.generateEditor(e.elements.indexValue),
        superscript: t.generateEditor(e.elements.powerValue)
      };
    }
    toLatex(e, t, r) {
      var n = e.elements.powerValue,
        i = e.elements.indexValue,
        o = "",
        s = "";
      n && (o = r.toLatexFromEditor(n, t)), i && (s = r.toLatexFromEditor(i, t));
      var a = {
        type: "inline-environment",
        name: "prescript",
        element: {
          type: "raw-element",
          rawText: o
        },
        element2: {
          type: "raw-element",
          rawText: s
        },
        element3: {
          type: "raw-element",
          rawText: ""
        }
      };
      return d.A.fromElement(a);
    }
  }
  const x = new b();
};
