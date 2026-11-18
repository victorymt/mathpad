/* module 44833 — 12638 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => H
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(40961),
    a = r.n(s),
    l = r(32485),
    c = r.n(l),
    d = r(45148),
    h = r(6720),
    p = r(36223),
    u = r(33476),
    g = r(35835),
    m = r(18105),
    f = r(37566),
    y = r(91335),
    v = r(40383);
  function b(e) {
    p.A.setCustomInfo(e, g.A.getBuilder().withFocusAcquired().withHandledCursorSelected().build());
  }
  var x = e => {
      f.hS(f.YG(f.aY(e), "td.selected"), "background", "#d2f3d2");
    },
    C = e => {
      f.hS(f.YG(f.aY(e), "td.selected"), "background", "");
    };
  class S extends o().Component {
    render() {
      var e = this.props,
        t = this.props.getDzContainer();
      return o().createElement(u.A, {
        appliedDzContainer: t,
        reversedScaleDZOrigin: "right bottom",
        smaller: !0,
        closeOnClickOutside: !0,
        onBulbMouseEnter: x,
        onBulbMouseLeave: C,
        childPositionByBulbOriginalPos: !0,
        left: e.left
      }, o().createElement("setting", {
        style: v.a.applyReverseZoomStyle({
          transform: "translate(0, -100%)",
          color: "var(--ui-text-muted, #757575)"
        }, t, "left bottom"),
        className: "mt-common-dialog  no-print",
        onMouseDown: b,
        onDoubleClick: p.A.onDoubleClickStopPropagation
      }, o().createElement("main-setting", {
        style: {
          fontSize: 12,
          alignItems: "baseline"
        }
      }, o().createElement(m.Ay, null, o().createElement(m.JU, null, "Row"), o().createElement(m.pd, {
        value: e.row,
        isFirstOne: !0,
        onChange: e.onRowChange
      }), o().createElement(m.JU, null, "Col"), o().createElement(m.pd, {
        value: e.column,
        onChange: e.onColumnChange
      })), o().createElement("span", {
        style: {
          paddingLeft: 10,
          paddingRight: 4
        }
      }, "Tag Numbering"), o().createElement(y.A, {
        data: A,
        isReadOnly: !0,
        onChange: e.onTagDirectionChange,
        width: 100,
        value: e.tagDirection
      }))));
    }
  }
  var A = [{
      key: "vertical",
      value: "Vertically"
    }, {
      key: "horizontal",
      value: "Horizontally"
    }],
    w = r(6855),
    E = r(2543),
    k = r.n(E),
    O = r(70224),
    D = r(38937),
    P = r(39791),
    M = r(47858);
  function I(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function T(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? I(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : I(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function L(e) {
    var t = [];
    t.push("1fr");
    for (var r = 0; r < e; r++) t.push("auto"), r % 2 == 1 && t.push("1fr");
    return e % 2 == 1 && t.push("1fr"), t.join(" ");
  }
  function R(e, t, r, n) {
    var i = "".concat(t, "_").concat(r),
      s = e.data.column,
      a = r % 2 == 0,
      l = !a || r === s - 1,
      d = "vertical" === e.data.tagDirection && l,
      h = e.data.elements[i],
      p = e.EditAreaClss,
      u = e.getMtFuncs(),
      g = c()("align-cell", {
        selected: e.shouldShowBorder(),
        "first-in-pair": a,
        "second-in-pair": !a
      });
    return o().createElement("div", {
      key: h.id,
      className: g,
      "data-tag-group-id": d ? e.data.id : void 0,
      "data-cIndex": d ? r : void 0,
      "data-rIndex": d ? t : void 0
    }, o().createElement(p, T(T({}, e.buildMetaDataFromName(i)), {}, {
      delayEnabled: e.shouldDelayEnabled(u),
      inlineMath: !0,
      insideSingleLine: 1 === h.lines.length,
      style: n,
      className: c()("editor-cell", {
        "tag-direction-vertical": d
      }),
      isFirstMathModeLevel: !0,
      allowEditorTag: l,
      displayMode: !0,
      showBorderOnSelected: !1
    })));
  }
  function B(e, t, r) {
    var n = e.data.column,
      i = [];
    i.push(o().createElement("div", {
      key: "spacer_".concat(t, "_start"),
      className: "align-spacer"
    }));
    for (var s = 0; s < n; s++) i.push(R(e, t, s, r)), s % 2 == 1 && i.push(o().createElement("div", {
      key: "spacer_".concat(t, "_").concat(s),
      className: "align-spacer"
    }));
    return n % 2 == 1 && i.push(o().createElement("div", {
      key: "spacer_".concat(t, "_end"),
      className: "align-spacer"
    })), o().createElement("div", {
      key: e.getKeyForRow(t),
      className: "align-row"
    }, i);
  }
  function F(e, t) {
    for (var r = e.data.row, n = [], i = 0; i < r; i++) n.push(B(e, i, t));
    var s = {
      gridTemplateColumns: L(e.data.column)
    };
    return o().createElement("div", {
      className: "align-grid",
      style: s
    }, n);
  }
  function j(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function _(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? j(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class N extends w.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "rootRef", void 0), (0, n.A)(this, "showSelectedEvenNotDescendant", !0), (0, n.A)(this, "handleTagDirectionChange", e => {
        this.props.onDataChanged(_(_({}, this.props.data), {}, {
          tagDirection: e
        }));
      }), (0, n.A)(this, "handleRootRef", e => {
        this.rootRef = e;
      });
    }
    useCustomBaseLine() {
      return !1;
    }
    useOldBehavior() {
      var e, t;
      return !(null === (e = this.getMtFuncs().getPageSettings()) || void 0 === e || null === (t = e.compatibility) || void 0 === t || !t.useOldAlignBehavior);
    }
    getClassName() {
      var e = this.useOldBehavior();
      return c()("matrix-symbol", "role-mathmode-area", "role-tabular", {
        "align-symbol": e,
        "align-symbol-v2": !e,
        selected: !(!this.props.selected || !this.props.selected.selected)
      });
    }
    isInlineMode() {
      return !1;
    }
    afterReactRender(e, t) {
      super.afterReactRender(e, t), this.rootRef = a().findDOMNode(this);
    }
    getDisplayMode() {
      return !0;
    }
    getCompositeBlockStyle() {
      var e;
      return _(_({}, super.getCompositeBlockStyle()), {}, {
        fontSize: this.context.mathFontSizeBase
      });
    }
    shouldShowBorder() {
      return this.isSelected();
    }
    renderRowContent(e) {
      for (var t = [], r = this.props.data.column, n = 1, i = {}, s = _({
          position: "relative"
        }, M.A.basicMathStyle(this.getSubMathFont(), this.context.baseMathModeFontFamily)), a = this.getMtFuncs(), l = a.shouldUseOpmEditArea() ? D.s : P.A, d = 0; d < r; d++) {
        var h = e + "_" + d,
          p = c()({
            selected: this.shouldShowBorder()
          }),
          u = d % 2 == 0,
          g = !u || d == r - 1,
          m = "vertical" == this.props.data.tagDirection && g;
        u ? (n++, t.push(o().createElement("td", {
          className: "non-select",
          key: d + "_middle",
          style: i
        })), p = c()(p, "align-right", "first-in-pair")) : p = c()(p, "second-in-pair");
        var f = this.props.data.elements[h];
        t.push(o().createElement("td", {
          "data-tag-group-id": m ? this.props.data.id : void 0,
          "data-cIndex": m ? d : void 0,
          "data-rIndex": m ? e : void 0,
          key: this.props.data.elements[h].id,
          className: p
        }, o().createElement(l, _(_({}, this.buildMetaDataFromName(h)), {}, {
          delayEnabled: this.shouldDelayEnabled(a),
          inlineMath: !0,
          insideSingleLine: 1 == f.lines.length,
          style: s,
          className: c()("editor-cell", {
            "tag-direction-vertical": m
          }),
          isFirstMathModeLevel: !0,
          allowEditorTag: g,
          displayMode: !0,
          showBorderOnSelected: !1
        }))));
      }
      return t.push(o().createElement("td", {
        className: "non-select",
        key: "last",
        style: i
      })), i.width = Math.round(100 / n) + "%", t;
    }
    recalculateBulbPosition() {
      this.forceUpdate();
    }
    getBulbAnchorLeft() {
      return this.refMap["0_0"] ? this.getElementRect(this.refMap["0_0"].editor).left - this.getElementRect(this.rootRef).left - 20 : 0;
    }
    componentDidMount() {
      super.componentDidMount(), this.isChildSelected() && this.recalculateBulbPosition();
    }
    componentDidUpdate(e, t) {
      super.componentDidUpdate(e, t), e.data.tagDirection != this.props.data.tagDirection && this.getMtFuncs().notifyLineTagRender({
        type: "change"
      });
    }
    renderSetting() {
      var e = this.props.data;
      if (this.isChildSelected() && !this.isTabularDescendantSelected() && !this.state.showBorderDesign) {
        if (this.getMtFuncs().isNotEditable()) return;
        var t = this.getBulbAnchorLeft();
        return o().createElement(S, {
          getDzContainer: this.getDzContainer,
          left: t,
          onRowChange: this.onRowChange,
          onColumnChange: this.onColumnChange,
          onTagDirectionChange: this.handleTagDirectionChange,
          text: e.text,
          row: this.state.row,
          column: this.state.column,
          tagDirection: e.tagDirection || "horizontal"
        });
      }
    }
    renderOpenBracket() {
      return null;
    }
    renderCloseBracket() {
      return null;
    }
    afterReactRenderWhenDataChanged() {
      this.useOldBehavior() && super.afterReactRenderWhenDataChanged();
    }
    renderComponent() {
      if (this.useOldBehavior()) return super.renderComponent();
      var e,
        t = this.getMtFuncs().shouldUseOpmEditArea() ? D.s : P.A,
        r = _({
          position: "relative"
        }, M.A.basicMathStyle(this.getSubMathFont(), this.context.baseMathModeFontFamily)),
        n = {
          data: this.props.data,
          shouldShowBorder: () => this.shouldShowBorder(),
          getSubMathFont: () => this.getSubMathFont(),
          baseMathModeFontFamily: this.context.baseMathModeFontFamily,
          getMtFuncs: () => this.getMtFuncs(),
          buildMetaDataFromName: e => this.buildMetaDataFromName(e),
          shouldDelayEnabled: e => this.shouldDelayEnabled(e),
          getKeyForRow: e => this.getKeyForRow(e),
          EditAreaClss: t
        };
      return o().createElement("matrix", {
        ref: this.handleRootRef,
        className: "align-v2"
      }, F(n, r), this.renderSetting());
    }
  }
  class z extends h.eV {
    getViewComponent() {
      return N;
    }
    getModel() {
      var e = this.getModelFromStructure({
        "0_0": "editor",
        "0_1": "editor"
      }, "\\align");
      return e.elements["0_1"] = O.A.createOneTextEditor("="), e.row = 1, e.column = 2, e;
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: ["\\align"],
        height: 30,
        insertInTextModeOnly: !0,
        renderSymbol: () => o().createElement(d.A, null)
      });
    }
    getLatexName() {
      return "\\align";
    }
    toLatex(e, t, r) {
      return super.innerToLatex(e, t, r, "align*");
    }
    toMathml(e, t) {
      var r = (0, h.G4)(e, t);
      return r.columnalign = k().times(e.column, e => e % 2 == 0 ? "right" : "left").join(" "), r.columnspacing = k().times(e.column, e => e % 2 == 0 ? "0em" : "2em").join(" "), 1 == r.rows[0].cells.length && (r.columnalign = "center"), r.width = "100%", {
        type: "math",
        display: "block",
        elements: [r]
      };
    }
  }
  const H = new z();
};
