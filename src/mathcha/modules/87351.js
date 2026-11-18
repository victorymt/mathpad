/* module 87351 — 9151 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => I
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(40961),
    a = r.n(s),
    l = r(32485),
    c = r.n(l);
  class d extends o().Component {
    render() {
      var e = {
          display: "flex",
          flexDirection: "column",
          margin: "auto 1px",
          padding: "1px 2px",
          border: "1px solid gray"
        },
        t = {
          border: "1px solid gray",
          width: 8,
          height: 0,
          margin: 1
        };
      return o().createElement("div", {
        style: {
          display: "flex",
          flexDirection: "row"
        }
      }, o().createElement("div", {
        style: e
      }, o().createElement("div", {
        style: t
      }), o().createElement("div", {
        style: t
      }), o().createElement("div", {
        style: t
      })), o().createElement("div", {
        style: e
      }, o().createElement("div", {
        style: t
      }), o().createElement("div", {
        style: t
      }), o().createElement("div", {
        style: t
      })));
    }
  }
  var h = r(6855),
    p = r(36223),
    u = r(33476),
    g = r(35835),
    m = r(37566),
    f = r(18105),
    y = r(91335),
    v = r(40383);
  function b(e) {
    p.A.setCustomInfo(e, g.A.getBuilder().withFocusAcquired().withHandledCursorSelected().build());
  }
  var x = e => {
      m.hS(m.YG(m.aY(e), "td.selected"), "background", "#d2f3d2");
    },
    C = e => {
      m.hS(m.YG(m.aY(e), "td.selected"), "background", "");
    };
  class S extends o().Component {
    render() {
      var e = this.props,
        t = [{
          key: "vertical",
          value: "Vertically"
        }, {
          key: "horizontal",
          value: "Horizontally"
        }],
        r = this.props.getDzContainer();
      return o().createElement(u.A, {
        appliedDzContainer: r,
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
        }, r, "left bottom"),
        className: "mt-common-dialog  no-print",
        onMouseDown: b,
        onDoubleClick: p.A.onDoubleClickStopPropagation
      }, o().createElement("main-setting", {
        style: {
          fontSize: 12,
          alignItems: "baseline"
        }
      }, o().createElement(f.Ay, null, o().createElement(f.JU, null, "Row"), o().createElement(f.pd, {
        value: e.row,
        isFirstOne: !0,
        onChange: e.onRowChange
      }), o().createElement(f.JU, null, "Col"), o().createElement(f.pd, {
        value: e.column,
        onChange: e.onColumnChange
      })), o().createElement("span", {
        style: {
          paddingLeft: 10,
          paddingRight: 4
        }
      }, "Tag Numbering"), o().createElement(y.A, {
        data: t,
        isReadOnly: !0,
        onChange: e.onTagDirectionChange,
        width: 100,
        value: e.tagDirection
      }))));
    }
  }
  var A = r(6720),
    w = r(38937),
    E = r(39791),
    k = r(47858);
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
  class P extends h.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "rootRef", void 0), (0, n.A)(this, "showSelectedEvenNotDescendant", !0), (0, n.A)(this, "handleTagDirectionChange", e => {
        this.props.onDataChanged(D(D({}, this.props.data), {}, {
          tagDirection: e
        }));
      });
    }
    useCustomBaseLine() {
      return !1;
    }
    getClassName() {
      return c()("matrix-symbol", "gather-symbol", "role-mathmode-area", "role-tabular", {
        selected: !(!this.props.selected || !this.props.selected.selected)
      });
    }
    getCompositeBlockStyle() {
      var e;
      return D(D({}, super.getCompositeBlockStyle()), {}, {
        fontSize: this.context.mathFontSizeBase
      });
    }
    renderRowContent(e) {
      for (var t = [], r = this.props.data.column, n = 1, i = {}, s = D({
          position: "relative"
        }, k.A.basicMathStyle(this.getSubMathFont(), this.context.baseMathModeFontFamily)), a = this.getMtFuncs(), l = a.shouldUseOpmEditArea() ? w.s : E.A, d = "vertical" == this.props.data.tagDirection, h = 0; h < r; h++) {
        var p = e + "_" + h,
          u = c()({
            selected: this.shouldShowBorder()
          }),
          g = this.props.data.elements[p];
        n++, t.push(o().createElement("td", {
          className: "non-select",
          key: h + "_middle",
          style: i
        })), t.push(o().createElement("td", {
          "data-tag-group-id": d ? this.props.data.id : void 0,
          "data-cIndex": d ? h : void 0,
          "data-rIndex": d ? e : void 0,
          key: this.props.data.elements[p].id,
          className: u
        }, o().createElement(l, D(D({}, this.buildMetaDataFromName(p)), {}, {
          delayEnabled: this.shouldDelayEnabled(a),
          inlineMath: !0,
          insideSingleLine: 1 == g.lines.length,
          style: s,
          className: c()("editor-cell", {
            "tag-direction-vertical": d
          }),
          isFirstMathModeLevel: !0,
          allowEditorTag: !0,
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
    getDisplayMode() {
      return !0;
    }
    isInlineMode() {
      return !1;
    }
    afterReactRender(e, t) {
      super.afterReactRender(e, t), this.rootRef = a().findDOMNode(this);
    }
    componentDidMount() {
      super.componentDidMount(), this.isChildSelected() && this.recalculateBulbPosition();
    }
    recalculateBulbPosition() {
      this.forceUpdate();
    }
    shouldShowBorder() {
      return this.isSelected();
    }
    componentDidUpdate(e, t) {
      super.componentDidUpdate(e, t), e.data.tagDirection != this.props.data.tagDirection && this.getMtFuncs().notifyLineTagRender({
        type: "change"
      });
    }
    renderSetting() {
      var e = this.props.data;
      if (this.isChildSelected() && !this.isTabularDescendantSelected() && !this.state.showBorderDesign) {
        if (this.isSelectModeOnly()) return;
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
    getBulbAnchorLeft() {
      return this.refMap["0_0"] ? this.getElementRect(this.refMap["0_0"].editor).left - this.getElementRect(this.rootRef).left - 20 : 0;
    }
    renderOpenBracket() {
      return null;
    }
    renderCloseBracket() {
      return null;
    }
  }
  class M extends A.eV {
    getViewComponent() {
      return P;
    }
    getModel() {
      var e = this.getModelFromStructure({
        "0_0": "editor",
        "0_1": "editor",
        "1_0": "editor",
        "1_1": "editor"
      }, "\\gather");
      return e.row = 2, e.column = 2, e;
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: ["\\gather"],
        height: 30,
        insertInTextModeOnly: !0,
        renderSymbol: () => o().createElement(d, null)
      });
    }
    getLatexName() {
      return "\\gather";
    }
    toModel(e, t) {
      var r;
      return super.toModel(e, t);
    }
    getColumnJoinText() {
      return " & & ";
    }
    toLatex(e, t, r) {
      if (1 == e.column) {
        var n = t.inTable ? "gathered" : "gather*";
        return this.innerToLatex(e, t, r, n);
      }
      var i = t.inTable ? "aligned" : "align*";
      return this.innerToLatex(e, t, r, i);
    }
    toMathml(e, t) {
      var r = (0, A.G4)(e, t);
      return r.width = "100%", {
        type: "math",
        display: "block",
        elements: [r]
      };
    }
  }
  const I = new M();
};
