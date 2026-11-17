/* module 59082 — 7318 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => S
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
    p = r(30803),
    u = r(70224),
    g = r(12753),
    m = r(69446),
    f = r(37566),
    y = r(40383);
  function v(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function b(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? v(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class x extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "under-brace-symbol"), (0, n.A)(this, "state", {
        braceWidth: null
      }), (0, n.A)(this, "bottomBrace", void 0), (0, n.A)(this, "calculateBottomBrace", () => {
        var e = this.getElementWidth(this.refMap.value.editor) + 2 * h.A.getComputedStyleAsNumber(this.refMap.value.editor, "margin-left");
        return g.A.toPromiseOnRequire(t => {
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
        this.bottomBrace && h.A.setHeightEm(this.bottomBrace, e);
      });
    }
    notifyChildrenWidthChange() {
      return this.calculateBottomBrace();
    }
    shouldComponentUpdate(e, t) {
      return e.data != this.props.data || e.selected != this.props.selected || e.fontSizeRatio != this.props.fontSizeRatio || this.state.braceWidth != t.braceWidth;
    }
    getVerticalInfo(e) {
      var t = this.refMap.value.editor,
        r = t,
        n;
      this.props.data.elements.value.lines.length <= 1 && (r = null !== (n = f.jS(t, "line")[0]) && void 0 !== n ? n : t);
      var i = this.getElementRect(r),
        o,
        s;
      return {
        heightTop: e - i.top,
        heightBottom: i.bottom - e
      };
    }
    afterReactRenderWhenDataChanged() {
      this.context.fixedContextHandler.getBatchUpdater().push(this.calculateBottomBrace, this);
    }
    renderSetting() {
      if (this.isDirectSelectedNoSelectionMode() && !this.props.data.elements.sub1) {
        var e = y.a.applyReverseZoomStyleConsiderMobileScale(void 0, this.getDzContainer(), "center top");
        return o().createElement("add", {
          className: "no-print",
          style: e,
          key: "setting"
        }, o().createElement("i", {
          className: "fa fa-plus",
          onMouseDown: this.onSettingClick,
          "aria-hidden": "true"
        }));
      }
    }
    renderUnderEdit() {
      if (this.props.data.elements.sub1) return o().createElement(s.A, b(b({
        key: "under",
        className: "underValue center"
      }, this.buildMetaDataDirectChildOrEmpty("sub1")), {}, {
        stripInfo: this.getMergedStripInfoWithProps(m.zZ),
        fontSizeRatio: .7 * this.props.fontSizeRatio,
        noAreaContainer: !0,
        noSpacingRule: !0
      }));
    }
    renderBrace() {
      return null == this.state.braceWidth ? o().createElement(d.A, {
        mathFontFamily: this.context.baseMathModeFontFamily,
        normalRenderClass: "zero-origin",
        isNormal: !0,
        isReverse: !0
      }) : o().createElement(d.A, {
        mathFontFamily: this.context.baseMathModeFontFamily,
        setParentHeight: this.setParentHeight,
        normalRenderClass: "zero-origin",
        isNormal: !1,
        isReverse: !0,
        width: this.state.braceWidth,
        fontSize: this.getMathFontSizePixel(),
        bracketWidth: this.getMathFontSizePixel()
      });
    }
    renderComponent() {
      return [o().createElement(s.A, b(b({
        key: "value",
        className: "value center"
      }, this.buildMetaDataDirectChildOrEmpty("value")), {}, {
        stripInfo: this.getMergedStripInfoWithProps(m.m5),
        optimizeForOneLine: !0
      })), o().createElement("bottom-brace", {
        key: "brace",
        ref: this.getCachedRefMethod("bottomBrace", e => this.bottomBrace = e)
      }, this.renderBrace()), this.renderUnderEdit(), this.renderSetting()];
    }
  }
  class C extends l.A {
    getViewComponent() {
      return x;
    }
    getLatextName() {
      return "\\underbrace";
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
      return "⏟";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        height: 28,
        hasExpanded: !0,
        renderSymbol(e) {
          var t = {};
          return e && (t.background = "white"), o().createElement("div", {
            style: {
              width: 12,
              margin: "auto",
              fontSize: 12,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }
          }, o().createElement("div", {
            className: "common-big-square-icon square"
          }), o().createElement("div", {
            style: {
              marginTop: -16,
              height: 24
            }
          }, this.symbol), o().createElement("div", {
            style: t,
            className: "common-square-icon square"
          }));
        }
      });
    }
    toModel(e, t, r) {
      var n = this.getModel();
      return n.elements.value = u.A.createEditorWith(t), r && r.elements.indexValue ? n.elements.sub1 = r.elements.indexValue : delete n.elements.sub1, n;
    }
    toLatex(e, t, r) {
      var n = "\\underbrace{".concat(r.toLatexFromEditor(e.elements.value, t), "}");
      return e.elements.sub1 && (n += "_{".concat(r.toLatexFromEditor(e.elements.sub1, t), "}")), n;
    }
    toMathml(e, t) {
      return e.elements.sub1 ? {
        type: "munder",
        base: {
          type: "munder",
          base: t.generateEditor(e.elements.value),
          underscript: {
            type: "mo",
            value: "⏟"
          }
        },
        underscript: t.generateEditor(e.elements.sub1)
      } : {
        type: "munder",
        base: t.generateEditor(e.elements.value),
        underscript: {
          type: "mo",
          value: "⏟"
        }
      };
    }
  }
  const S = new C();
};
