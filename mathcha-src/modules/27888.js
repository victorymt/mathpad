/* module 27888 — 11666 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    FootnoteSc: () => D,
    default: () => P
  });
  var n = r(64467),
    i = r(37566),
    o = r(40927),
    s = r.n(o),
    a = r(25742),
    l = r(48440),
    c = r(58907),
    d = r(47286),
    h = {
      height: 34,
      background: "var(--ui-surface-muted, #f7f7f7)"
    };
  class p extends s().Component {
    constructor(e) {
      super(e), this.state = {
        element: s().createElement("div", {
          style: h
        })
      };
    }
    shouldComponentUpdate(e, t) {
      return this.state != t || e.hide != this.props.hide;
    }
    updateElement(e) {
      this.setState({
        element: e
      });
    }
    render() {
      return s().createElement("div", {
        className: "role-toolbar-wrapper",
        style: {
          background: "var(--ui-surface-muted, rgb(247, 247, 247))",
          borderBottom: "1px solid var(--ui-border, rgb(221, 221, 221))"
        }
      }, this.state.element);
    }
  }
  var u = r(55451),
    g = r(70224),
    m = r(58578);
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
  var v = c.A.getModalDialog();
  class b extends s().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "rootModel", void 0), (0, n.A)(this, "mathTypeRef", void 0), (0, n.A)(this, "fakeToolbarRef", void 0), (0, n.A)(this, "handleMathTypeRef", e => {
        this.mathTypeRef = e;
      }), (0, n.A)(this, "handleRequestRenderToolbar", e => {
        u.A.next(() => {
          this.fakeToolbarRef && this.fakeToolbarRef.updateElement(e);
        });
      }), (0, n.A)(this, "handleFakeToolbarRef", e => {
        this.fakeToolbarRef = e;
      }), this.rootModel = {
        id: "fid",
        lines: this.props.lines || [g.A.createEmptyLine()],
        pageSettings: y(y({}, this.props.pageSettings), {}, {
          fontSize: .9 * this.props.pageSettings.fontSize,
          mathFontSize: .9 * this.props.pageSettings.mathFontSize,
          paragraph: void 0
        })
      };
    }
    render() {
      var e = this.props.MathTypeClss;
      return s().createElement(v, {
        show: !0
      }, s().createElement(d.A, {
        title: "Footnote",
        size: "medium",
        scroll: "body",
        style: y({
          height: "calc(100% - 100px)",
          maxHeight: 300,
          width: "calc(100% - 100px)",
          maxWidth: 800
        }, c.A.getCenterStyle()),
        message: "",
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: () => this.props.onOk(this.mathTypeRef.getModel().lines),
        onCancel: this.props.onCancel,
        okLabel: "OK",
        show: !0
      }, s().createElement("div", {
        style: {
          overflow: "auto",
          width: "100%",
          border: "1px solid var(--ui-border, rgb(221, 221, 221))"
        }
      }, s().createElement("div", {
        style: {
          minWidth: 790
        }
      }, s().createElement(p, {
        ref: this.handleFakeToolbarRef
      })), s().createElement("div", {
        className: "footnote-settings-mt-container",
        style: {
          padding: 10
        }
      }, s().createElement(e, {
        className: "blocks-inline  mt-doc-fn",
        model: this.rootModel,
        settings: this.props.mtSettings,
        requestLocalFonts: this.props.requestLocalFonts,
        requestRenderToolbar: this.handleRequestRenderToolbar,
        autoCompleteUsingPositionFixed: !0,
        ref: this.handleMathTypeRef,
        toolbarEnabled: !0,
        restrictedView: !0,
        toolbarExportOptionsHide: !0,
        firstLinePrefix: this.props.prefixText,
        firstLinePrefixStyle: {
          fontFamily: m.A.textFontFamilyFromKey(this.props.pageSettings.fontName),
          fontSize: .65 * this.props.pageSettings.fontSize,
          verticalAlign: "super",
          color: "var(--ui-text, black)"
        },
        style: {
          minWidth: 400,
          minHeight: 100,
          padding: 0
        },
        mathTemplatesDisable: !0
      })))));
    }
  }
  var x = r(40961),
    C = r.n(x),
    S = r(24373),
    A = r(71738),
    w;
  function E(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function k(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? E(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class O extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "footnote-symbol"), (0, n.A)(this, "state", {}), (0, n.A)(this, "handleFootnoteOk", e => {
        this.setState({
          showSettings: !1,
          ignoreFocusAfterFootnotChanged: !1,
          footnoteNumbering: void 0
        });
        var t = this.state.ignoreFocusAfterFootnotChanged;
        u.A.next(() => {
          var r = k(k({}, this.props.data), {}, {
            fnLines: e
          });
          this.props.onDataChanged(r, {
            focusAcquired: t,
            preventScroll: t
          });
        });
      }), (0, n.A)(this, "handleFootnoteCancel", () => {
        this.setState({
          showSettings: !1,
          ignoreFocusAfterFootnotChanged: !1,
          footnoteNumbering: void 0
        });
      }), (0, n.A)(this, "handleMoreOptionsClick", e => {
        e.stopPropagation(), e.preventDefault(), this.showFootnoteSettings(!1);
      });
    }
    componentDidMount() {
      if (super.componentDidMount(), this.notifyFootnote({
        type: "change",
        id: this.props.data.id,
        lines: this.props.data.fnLines
      }), w == this.props.data.id && (w = void 0, u.A.next(() => {
        this.showFootnoteSettings(!1);
      })), !this.props.isLineParentTextMode) {
        var e = A.Z.findLineEditorIds(this);
        e && e.then(e => {
          e && (this.getMtFuncs().getExcludeLazyStore().add(e.editorId, e.lineId, this.props.data.id), this.getMtFuncs().disableLazy(e.editorId, e.lineId));
        });
      }
    }
    componentWillUnmount() {
      super.componentWillUnmount(), this.notifyFootnote({
        type: "delete",
        id: this.props.data.id
      }), this.getMtFuncs().getExcludeLazyStore().remove(this.props.data.id, (e, t) => {
        this.getMtFuncs().resumeLazy(e, t);
      });
    }
    componentDidUpdate(e, t) {
      super.componentDidUpdate(e, t), this.props.data.fnLines != e.data.fnLines && this.notifyFootnote({
        type: "change",
        id: this.props.data.id,
        lines: this.props.data.fnLines
      });
    }
    showFootnoteSettings(e) {
      this.setState({
        showSettings: !0,
        footnoteNumbering: this.getFootnoteNumbering(),
        ignoreFocusAfterFootnotChanged: e
      });
    }
    notifyFootnote(e) {
      this.context.fixedContextHandler.getMtFuncs().notifyFootnote(e);
    }
    getFootnoteNumbering() {
      var e;
      return C().findDOMNode(this).firstElementChild.textContent;
    }
    renderSettings() {
      if (this.state.showSettings && this.state.footnoteNumbering) {
        var e = this.context.fixedContextHandler.getMtFuncs();
        return s().createElement(b, {
          requestLocalFonts: e.requestLocalFonts,
          prefixText: this.state.footnoteNumbering,
          lines: this.props.data.fnLines,
          MathTypeClss: e.getMathTypeClss(),
          pageSettings: e.getPageSettings(),
          mtSettings: e.getMtSettings(),
          key: "settings",
          onOk: this.handleFootnoteOk,
          onCancel: this.handleFootnoteCancel
        });
      }
      if (this.props.selected) return this.renderMoreOptionsIcon();
    }
    renderMoreOptionsIcon() {
      return s().createElement("div", {
        key: "more-options",
        style: {
          position: "absolute",
          left: "-1em",
          top: "-1.5em",
          display: "flex",
          flexDirection: "row"
        },
        onMouseDown: e => {
          e.stopPropagation();
        }
      }, s().createElement("span", {
        className: "setting-select",
        style: {
          padding: "2px 3px"
        },
        onMouseDown: e => {
          this.handleMoreOptionsClick(e), e.stopPropagation();
        }
      }, s().createElement("i", {
        className: "fa fa-cog",
        style: {
          fontSize: 15
        }
      })), s().createElement("span", {
        className: "setting-select",
        style: {
          padding: "2px 3px",
          marginLeft: 5
        },
        onMouseDown: e => {
          e.stopPropagation();
          var t = this.props.data.id;
          if (t) {
            var r = i.Zy(document, '.footnote-mt-container[data-footnote-id="'.concat(t, '"]'));
            if (r) {
              var n = this.getEditorInfo().scrollSelector;
              S.A.scrollToElement(n, r, {
                duration: 500
              });
            }
          }
        }
      }, s().createElement("i", {
        className: "fa fa-arrow-right",
        style: {
          fontSize: 13
        }
      })));
    }
    renderComponent() {
      return [s().createElement("span", {
        key: "footnote-text",
        "data-footnote-id": this.props.data.id,
        style: {
          verticalAlign: "super",
          fontSize: "0.65em"
        }
      }, "1"), this.renderSettings()];
    }
  }
  class D extends l.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return O;
    }
    getLatextName() {
      return "\\footnote";
    }
    getSymbol() {
      return "Footnote";
    }
    getModel(e) {
      var t = this.getModelFromStructure({}, this.getLatextName());
      return e && "footnote-insert-by-auto-complete" == e.customData && (w = t.id), t;
    }
    toModel() {
      var e;
      return this.getModel();
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName(), this.getSymbol()],
        symbol: this.getSymbol(),
        renderSymbol: () => s().createElement("span", null, s().createElement("span", {
          style: {
            color: "var(--ui-text-muted, gray)"
          }
        }, "A"), s().createElement("span", {
          style: {
            verticalAlign: "super",
            fontSize: "0.7em"
          }
        }, "1"))
      });
    }
    toLatex(e, t, r) {
      return "\\footnote{".concat(r.toLatexFromEditor({
        id: "rd",
        lines: e.fnLines
      }, t), "}");
    }
  }
  const P = new D();
};
