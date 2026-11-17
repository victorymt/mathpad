/* module 48939 — 7656 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => A
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(39791),
    a = r(83846),
    l = r(48440),
    c = r(61848),
    d = r(83120),
    h = r(516),
    p = r(30803);
  class u extends o().Component {
    render() {
      var e = {
        marginTop: 0,
        background: this.props.isExpanded ? "white" : ""
      };
      return o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: 23,
          margin: "auto",
          fontSize: 12
        }
      }, o().createElement("div", {
        className: "common-square-icon square",
        style: e
      }), o().createElement("div", {
        style: {
          marginBottom: -15
        }
      }, this.props.symbol), o().createElement("div", {
        className: "common-big-square-icon square",
        style: {
          marginTop: 8
        }
      }));
    }
  }
  var g = r(70224),
    m = r(12753),
    f = r(69446),
    y = r(37566),
    v = r(40383);
  function b(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function x(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? b(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class C extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "topBrace", void 0), (0, n.A)(this, "containerClassName", "over-brace-symbol"), (0, n.A)(this, "state", {
        braceWidth: null
      }), (0, n.A)(this, "calculateTopBrace", () => {
        var e = this.getElementWidth(this.refMap.value.editor) + 2 * h.A.getComputedStyleAsNumber(this.refMap.value.editor, "margin-left");
        return m.A.toPromiseOnRequire(t => {
          this.setState({
            braceWidth: e
          }, t);
        });
      }), (0, n.A)(this, "onSettingClick", e => {
        e.stopPropagation(), e.preventDefault();
        var t = c.A.set(this.props.data, "elements.sub1", {
          id: p.w.nextId(),
          lines: [{
            id: p.w.nextId(),
            blocks: []
          }]
        });
        this.props.onDataChanged(t), this.selectElement("sub1");
      }), (0, n.A)(this, "setParentHeight", e => {
        this.topBrace && h.A.setHeightEm(this.topBrace, e);
      });
    }
    notifyChildrenWidthChange() {
      return this.calculateTopBrace();
    }
    getVerticalInfo(e) {
      var t = this.refMap.value.editor,
        r = t,
        n;
      this.props.data.elements.value.lines.length <= 1 && (r = null !== (n = y.jS(t, "line")[0]) && void 0 !== n ? n : t);
      var i = this.getElementRect(r),
        o,
        s;
      return {
        heightTop: e - i.top,
        heightBottom: i.bottom - e
      };
    }
    shouldComponentUpdate(e, t) {
      return e.data != this.props.data || e.selected != this.props.selected || e.fontSizeRatio != this.props.fontSizeRatio || this.state.braceWidth != t.braceWidth;
    }
    afterReactRenderWhenDataChanged() {
      this.context.fixedContextHandler.getBatchUpdater().push(this.calculateTopBrace, this);
    }
    renderSetting() {
      if (this.isDirectSelectedNoSelectionMode() && !this.props.data.elements.sub1) {
        var e = v.a.applyReverseZoomStyleConsiderMobileScale(void 0, this.getDzContainer(), "center bottom");
        return o().createElement("add", {
          className: "no-print",
          style: e,
          key: "add"
        }, o().createElement("i", {
          className: "fa fa-plus",
          onMouseDown: this.onSettingClick,
          "aria-hidden": "true"
        }));
      }
    }
    renderBrace() {
      if (null == this.state.braceWidth) return o().createElement(d.A, {
        mathFontFamily: this.context.baseMathModeFontFamily,
        isNormal: !0,
        isReverse: !1
      });
      var e = h.A.getComputedStyleAsNumber(this.compositeBlock, "font-size");
      return o().createElement(d.A, {
        mathFontFamily: this.context.baseMathModeFontFamily,
        setParentHeight: this.setParentHeight,
        isNormal: !1,
        isReverse: !1,
        width: this.state.braceWidth,
        bracketWidth: e,
        fontSize: e
      });
    }
    renderOverEdit() {
      if (this.props.data.elements.sub1) return o().createElement(s.A, x(x({
        key: "over",
        className: "overValue center"
      }, this.buildMetaDataDirectChildOrEmpty("sub1")), {}, {
        fontSizeRatio: .7 * this.props.fontSizeRatio,
        noAreaContainer: !0,
        noSpacingRule: !0,
        stripInfo: this.getMergedStripInfoWithProps(f.m5)
      }));
    }
    renderComponent() {
      var e = {};
      return [this.renderOverEdit(), o().createElement("top-brace", {
        key: "topBrace",
        style: e,
        ref: this.getCachedRefMethod("topBrace", e => this.topBrace = e)
      }, this.renderBrace()), o().createElement("div", {
        key: "value",
        style: {
          clear: "both"
        }
      }, o().createElement(s.A, x(x({
        className: "center value",
        key: "value"
      }, this.buildMetaDataDirectChildOrEmpty("value")), {}, {
        stripInfo: this.getMergedStripInfoWithProps(f.zZ),
        optimizeForOneLine: !0
      }))), this.renderSetting()];
    }
  }
  class S extends l.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "isOverSymbol", !0);
    }
    getViewComponent() {
      return C;
    }
    getLatextName() {
      return "\\overbrace";
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        elements: {
          value: {
            onRemove: "all"
          },
          sub1: {
            defaultHide: !0,
            onRemove: "only"
          }
        }
      };
    }
    getSymbol() {
      return "⏞";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        height: 28,
        hasExpanded: !0,
        renderSymbol(e) {
          return o().createElement(u, {
            isExpanded: e,
            symbol: this.symbol
          });
        }
      });
    }
    toModel(e, t, r) {
      var n = this.getModel();
      return n.elements.value = g.A.createEditorWith(t), r && r.elements.powerValue ? n.elements.sub1 = r.elements.powerValue : delete n.elements.sub1, n;
    }
    toLatex(e, t, r) {
      var n = "\\overbrace{".concat(r.toLatexFromEditor(e.elements.value, t), "}");
      return e.elements.sub1 && (n += "^{".concat(r.toLatexFromEditor(e.elements.sub1, t), "}")), n;
    }
    toMathml(e, t) {
      return e.elements.sub1 ? {
        type: "mover",
        base: {
          type: "mover",
          base: t.generateEditor(e.elements.value),
          overscript: {
            type: "mo",
            value: "⏞"
          }
        },
        overscript: t.generateEditor(e.elements.sub1)
      } : {
        type: "mover",
        base: t.generateEditor(e.elements.value),
        overscript: {
          type: "mo",
          value: "⏞"
        }
      };
    }
  }
  const A = new S();
};
