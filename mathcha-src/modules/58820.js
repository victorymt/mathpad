/* module 58820 — 8971 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    SectionRef: () => A,
    SectionRefSc: () => w,
    default: () => E
  });
  var n = r(64467),
    i = r(37566),
    o = r(40927),
    s = r.n(o),
    a = r(25742),
    l = r(48440),
    c = r(98930),
    d = r(58907),
    h = r(16876);
  function p(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function u(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class g extends s().Component {
    constructor() {
      var e;
      super(...arguments), (0, n.A)(this, "state", {
        displayValue: (null === (e = this.props.block.refSettings) || void 0 === e ? void 0 : e.display) || "Section ${prefix}"
      }), (0, n.A)(this, "FakeModalDialog", d.A.getModalDialog()), (0, n.A)(this, "handleOk", () => {
        var e,
          t = u(u({}, this.props.block), {}, {
            refSettings: u(u({}, null === (e = this.props.block) || void 0 === e ? void 0 : e.refSettings), {}, {
              display: this.state.displayValue
            })
          });
        this.props.onOk(t, !1);
      });
    }
    renderContent() {
      var e = {
          marginBottom: 8
        },
        t = {
          display: "inline-block",
          width: 80,
          color: "var(--ui-text-muted, gray)"
        },
        r = {
          width: 180,
          fontSize: "inherit"
        },
        n = {
          padding: 0
        };
      return s().createElement("div", null, s().createElement("div", {
        style: e
      }, s().createElement("span", {
        style: t
      }, s().createElement("span", null, "Display: "), s().createElement(c.B, {
        popupStyle: {
          zIndex: 1
        },
        style: {
          display: "inline"
        },
        iconStyle: n,
        msg: s().createElement("span", null, "Text to display, ", s().createElement("b", null, "${prefix}"), " will be replaced by Section Number/Prefix, ", s().createElement("b", null, "${text}"), " will be replaced by section text. For example: ", s().createElement("br", null), "Section ", "${prefix}", " ", "${text}", " ")
      })), s().createElement("input", {
        value: this.state.displayValue,
        style: r,
        onChange: e => {
          this.setState({
            displayValue: e.target.value
          });
        }
      })));
    }
    render() {
      return s().createElement(this.FakeModalDialog, {
        show: !0
      }, s().createElement(h.A, {
        size: "medium",
        scroll: "body",
        headerHidden: !1,
        title: "Section Reference",
        style: u({
          minWidth: 200,
          minHeight: 10,
          width: "auto"
        }, d.A.getCenterStyle()),
        disableEscapeToClose: !0,
        isProgressing: !1,
        onOk: this.handleOk,
        onCancel: this.props.onClose,
        okLabel: "OK",
        show: !0
      }, this.renderContent()));
    }
  }
  var m = r(24373),
    f = r(32485),
    y = r.n(f),
    v = r(60693),
    b = r(40961),
    x = r.n(b);
  function C(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function S(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? C(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class A extends a.A {
    constructor(e) {
      super(e), (0, n.A)(this, "state", {
        display: "?"
      }), (0, n.A)(this, "handleSettingsOk", (e, t) => {
        this.props.onDataChanged(e), this.setState({
          showSettingsDialog: void 0
        });
      }), this.containerClassName = "section-ref";
    }
    getWraplineRects() {
      return v.T.getBCRects(x().findDOMNode(this), this.getMtFuncs().getDocZoomContainer());
    }
    componentDidMount() {
      super.componentDidMount(), this.getMtFuncs().handleSectionRefAction({
        type: "register",
        instance: this
      });
    }
    componentWillUnmount() {
      super.componentWillUnmount(), this.getMtFuncs().handleSectionRefAction({
        type: "deregister",
        instance: this
      });
    }
    componentDidUpdate(e, t) {
      super.componentDidUpdate && super.componentDidUpdate(e, t), e.data.refSettings != this.props.data.refSettings && this.getMtFuncs().handleSectionRefAction({
        type: "change",
        instance: this
      });
    }
    setDisplayRendered(e) {
      var t;
      this.state.display && this.state.display == e || (this.state.display || (null === (t = this.props.data.refSettings) || void 0 === t ? void 0 : t.display) != e) && this.setState({
        display: e
      });
    }
    renderComponent() {
      var e;
      return [s().createElement("span", {
        key: "display",
        "data-section-line-id": null === (e = this.props.data.refSettings) || void 0 === e ? void 0 : e.sectionLineId,
        className: y()("section-ref-border", "no-border-on-print")
      }, this.state.display), this.renderSettings(), this.renderSettingsDialog()];
    }
    renderSettingsDialog() {
      if (this.state.showSettingsDialog) return s().createElement(g, {
        key: "SectionRefSettingsDialog",
        block: this.props.data,
        onClose: () => {
          this.setState({
            showSettingsDialog: void 0
          });
        },
        onOk: this.handleSettingsOk,
        fixedContextHandler: this.context.fixedContextHandler
      });
    }
    renderSettings() {
      if (this.isSelected()) {
        var e = {
          width: 18,
          height: 18
        };
        return s().createElement("div", {
          key: "st",
          style: {
            position: "absolute",
            left: -15,
            top: -21,
            display: "flex",
            flexDirection: "row"
          }
        }, s().createElement("span", {
          className: "setting-select",
          style: e,
          onMouseDown: e => {
            this.setState({
              showSettingsDialog: !0
            }), e.stopPropagation();
          }
        }, s().createElement("i", {
          className: "fa fa-cog",
          style: {
            fontSize: 15
          }
        })), s().createElement("span", {
          className: "setting-select",
          style: S(S({}, e), {}, {
            marginLeft: 5
          }),
          onMouseDown: e => {
            var t;
            e.stopPropagation();
            var r = null === (t = this.props.data.refSettings) || void 0 === t ? void 0 : t.sectionLineId;
            if (r) {
              var n = i.Zy(document, 'line.section[data-line-id="'.concat(r, '"]'));
              if (n) {
                var o = this.getEditorInfo().scrollSelector;
                m.A.scrollToElement(o, n, {
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
    }
  }
  (0, n.A)(A, "showDialogOnMount", void 0);
  class w extends l.A {
    getViewComponent() {
      return A;
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        elements: {}
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        insertInTextModeOnly: !0
      });
    }
    getModel(e) {
      var t = super.getModel(e);
      return t.refSettings = {}, t.refSettings.sectionLineId = null == e ? void 0 : e.tagId, t;
    }
    toModel() {
      var e;
      return this.getModel();
    }
    getLatextName() {
      return "\\section-ref";
    }
    getSymbol() {
      return "section-ref";
    }
    toLatex() {
      return "\\section-ref";
    }
    toMathml(e) {
      return {
        type: "mtext",
        value: "section-ref"
      };
    }
  }
  const E = new w();
};
