/* module 68468 — 8879 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => A
  });
  var n = r(40927),
    i = r.n(n),
    o = r(48440),
    s = r(64467),
    a = r(37566),
    l = r(39791),
    c = r(67882),
    d = r(83846),
    h = r(61848),
    p = r(49812),
    u = r(70224),
    g = r(60693),
    m = r(40383),
    f = r(19340),
    y = r(71311),
    v = r(7258);
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
        (0, s.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class C extends d.A {
    constructor() {
      super(...arguments), (0, s.A)(this, "sqrtEdit", void 0), (0, s.A)(this, "sqrtTop", void 0), (0, s.A)(this, "svgPolygon", void 0), (0, s.A)(this, "radicalDrawing", void 0), (0, s.A)(this, "contentOffsetEm", void 0), (0, s.A)(this, "radicalHeightEm", 1.2), (0, s.A)(this, "drawingFontFamily", void 0), (0, s.A)(this, "containerClassName", "sqrt-symbol"), (0, s.A)(this, "calculateSqrtSymbol", () => {
        var e = this.getMathFontSizePixel(),
          t = (0, f.zN)(this.context.baseMathModeFontFamily),
          r = g.T.getBCHeight(this.sqrtEdit, this.getDzContainer()) / e,
          n = (0, y.V9)(t, r),
          i = a.jS(this.sqrtEdit, "editarea, editarea-line")[0];
        i && void 0 !== n && (this.contentOffsetEm = n, a.hS(i, "margin-left", "".concat(n, "em"))), (0, v._S)(t).update(t, {
          fontSize: e,
          height: this.getElementHeight(this.sqrtEdit),
          width: this.getElementWidth(this.sqrtEdit),
          polygon: this.svgPolygon,
          drawing: this.radicalDrawing
        }), this.calculateRightTranslate(e);
      });
    }
    notifyChildrenWidthChange() {
      this.calculateSqrtSymbol();
    }
    getVerticalInfo(e) {
      var t = this.getElementRect(this.sqrtEdit),
        r,
        n,
        i;
      return {
        heightTop: e - t.top + .1 * this.getMathFontSizePixel(),
        heightBottom: t.bottom - e
      };
    }
    getEditContentTopBottom() {
      return this.getElementRect(a.jS(this.getRootDom(), "sqrt-edit")[0]);
    }
    getPowerIndexInfo() {
      var e = this.getElementRect(this.sqrtEdit);
      return {
        rect: {
          top: e.top,
          height: e.bottom - e.top
        },
        shouldConsiderAsChar: !1
      };
    }
    calculateSqrtPaddingTop() {
      return this.getRoundEmStr(.25);
    }
    calculateEditMarginTop() {
      return this.getRoundEmStr(.1);
    }
    isSqrtTopEmpty() {
      return this.isEditorEmpty(this.props.data.elements.sub1);
    }
    renderSetting() {
      if (!this.isSelectModeOnly()) {
        var e = m.a.applyReverseZoomStyleConsiderMobileScale(void 0, this.getDzContainer(), "center", {
          zoomIgnoreRange: [1, 1.25],
          zoomInDelta: -.25
        });
        return !this.props.data.elements.sub1 && this.isDirectSelectedNoSelectionMode() ? i().createElement("add", {
          className: "no-print",
          key: "setting",
          style: e,
          onMouseDown: e => {
            this.onSettingClick(e);
          }
        }, i().createElement("i", {
          className: "fa fa-plus",
          "aria-hidden": "true"
        })) : void 0;
      }
    }
    getCompositeBlockStyle() {
      var e;
      return x(x({}, super.getCompositeBlockStyle()), {}, {
        paddingTop: this.calculateSqrtPaddingTop()
      });
    }
    afterReactRenderWhenDataChanged(e, t) {
      super.afterReactRenderWhenDataChanged(e, t), this.context.fixedContextHandler.getBatchUpdater().push(this.calculateSqrtSymbol, this);
    }
    afterReactRender(e, t) {
      super.afterReactRender(e, t), this.drawingFontFamily != this.context.baseMathModeFontFamily && (this.drawingFontFamily = this.context.baseMathModeFontFamily, this.context.fixedContextHandler.getBatchUpdater().push(this.calculateSqrtSymbol, this));
    }
    calculateRightTranslate(e) {
      if (this.props.data.elements.sub1) {
        var t = g.T.getBCHeight(this.sqrtEdit, this.getDzContainer());
        this.radicalHeightEm = t / e, a.hS(this.sqrtTop, (0, y.lM)((0, f.zN)(this.context.baseMathModeFontFamily), t, e));
      }
    }
    onSettingClick(e) {
      e.stopPropagation(), e.preventDefault();
      var t = h.A.set(this.props.data.elements, "sub1", u.A.createEmptyEditor());
      this.props.onDataChanged(h.A.set(this.props.data, "elements", t)), this.selectElement("sub1");
    }
    getSympol() {
      return "√";
    }
    getTopStyle() {
      var e = (0, f.zN)(this.context.baseMathModeFontFamily);
      return (0, y.Ul)(e, this.radicalHeightEm);
    }
    renderTop() {
      if (this.props.data.elements.sub1) return i().createElement("sqrt-top", {
        key: "top",
        style: this.getTopStyle(),
        ref: this.getCachedRefMethod("sqrtTop", e => this.sqrtTop = e)
      }, i().createElement(l.A, x(x({}, this.buildMetaDataDirectChildOrEmpty("sub1")), {}, {
        fontSizeRatio: .7 * this.props.fontSizeRatio,
        noAreaContainer: !0,
        noSpacingRule: !0,
        stripInfo: this.getMergedStripInfoWithProps({
          stripDown: !0,
          stripUp: !0
        })
      })));
    }
    renderComponent() {
      var e = (0, f.zN)(this.context.baseMathModeFontFamily),
        t = (0, y.V9)(e, e.radical.initialHeightEm),
        r = p.A.isSingleLineEditor(this.props.data.elements.value) ? c.A : l.A;
      return [this.renderTop(), i().createElement("sqrt-edit", {
        key: "edit",
        ref: this.getCachedRefMethod("sqrtEdit", e => this.sqrtEdit = e)
      }, i().createElement(r, x(x({
        className: "edit-area",
        style: {
          marginTop: this.calculateEditMarginTop(),
          marginLeft: void 0 !== t ? (this.contentOffsetEm || t) + "em" : void 0
        }
      }, this.buildMetaDataDirectChildOrEmpty("value")), {}, {
        optimizeForOneLine: !0
      })), i().createElement("sqrt-symbol-line", null, (0, v._S)(e).render(e, {
        fontSize: this.getMathFontSizePixel(),
        notifyData: this.props.data,
        fixedContextHandler: this.context.fixedContextHandler,
        drawingRef: e => this.radicalDrawing = e,
        polygonRef: this.getCachedRefMethod("svgPolygon", e => this.svgPolygon = e)
      }))), this.renderSetting()];
    }
  }
  class S extends o.A {
    getViewComponent() {
      return C;
    }
    getModelMeta() {
      return {
        text: "\\sqrt",
        keyInsertOnSelection: "value",
        keyInsertCursor: "sub1",
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
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: ["\\sqrt"],
        height: 25,
        hasExpanded: !0,
        description: "square root",
        renderSymbol(e) {
          var t = "square common-square-icon ";
          return t += e ? "square-expand" : "", i().createElement("div", {
            className: "icon-sqrt"
          }, i().createElement("div", {
            className: t
          }), i().createElement("div", {
            className: "align-end",
            style: {
              fontFamily: "Asana",
              color: "var(--ui-text, black)"
            }
          }, "√"), i().createElement("div", {
            className: "line"
          }), i().createElement("div", {
            className: "big-square common-big-square-icon"
          }));
        }
      });
    }
    toLatex(e, t, r) {
      var n = e.elements.sub1,
        i = e.elements.value;
      t.generateMethod;
      var o = this.isNotExistOrEmptyEditor(n) ? "" : "[".concat(r.toLatexFromEditor(n, t), "]");
      return "\\sqrt".concat(o, "{").concat(r.toLatexFromEditor(i, t), "}");
    }
    toLatex2() {}
    toMathml(e, t) {
      return e.elements.sub1 ? {
        type: "mroot",
        base: t.generateEditor(e.elements.value),
        index: t.generateEditor(e.elements.sub1)
      } : {
        type: "msqrt",
        base: t.generateEditor(e.elements.value)
      };
    }
    toModel(e, t, r) {
      var n = this.getModel();
      return t && t.length > 0 ? n.elements.sub1.lines = t : delete n.elements.sub1, n.elements.value = u.A.createEditorWith(r), n;
    }
  }
  const A = new S();
};
