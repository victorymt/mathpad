/* module 57428 — 9303 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    TagRef: () => C,
    default: () => A
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(37566),
    a = r(48440),
    l = r(25742),
    c = r(24373),
    d = r(47858),
    h = r(23466),
    p = r(47286),
    u = r(58907),
    g = r(92855),
    m = r(93347);
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
  class v extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        blockStyle: this.props.blockStyle.merged || {}
      }), (0, n.A)(this, "FakeModalDialog", u.A.getModalDialog());
    }
    renderContent() {
      var e = {
          marginBottom: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline"
        },
        t = {
          display: "inline-block",
          width: 50,
          color: "var(--ui-text-muted, gray)"
        };
      return o().createElement("div", {
        style: {
          margin: 5,
          fontSize: 13,
          flex: 1,
          minHeight: 70
        }
      }, o().createElement("div", {
        style: e
      }, o().createElement("span", {
        style: t
      }, "Style:"), o().createElement(g.G, {
        requestPickerSettings: this.props.requestPickerSettings,
        isFontNameHidden: !0,
        isFontSizeHidden: !0,
        requestFontSizeRatio: () => 1,
        fontBaseSize: 17,
        expandZIndex: 0,
        isFontBgColorHidden: !0,
        hBarStyle: {
          marginBottom: 0
        },
        dfColor: "green",
        containerStyle: {
          width: 200,
          display: "inline-flex",
          background: "var(--ui-surface-muted, #f7f7f7)",
          border: "1px solid var(--ui-border, lightgray)",
          padding: "3px 10px 5px 10px",
          flex: 1,
          zIndex: 1
        },
        blockStyle: this.state.blockStyle,
        onBlockStyleChange: e => {
          this.setState({
            blockStyle: e
          });
        },
        onClear: () => {
          this.setState({
            blockStyle: {}
          });
        }
      })), o().createElement("div", {
        style: y(y({}, e), {}, {
          marginTop: 20,
          marginBottom: 0
        })
      }, o().createElement(h.A, {
        textStyle: {
          fontSize: 13
        },
        name: "Apply as Default Style for all Tag References",
        checked: this.state.applyAsDefault,
        onValueChanged: e => this.setState({
          applyAsDefault: e
        })
      })));
    }
    render() {
      return o().createElement(this.FakeModalDialog, {
        show: !0
      }, o().createElement(p.A, {
        size: "medium",
        scroll: "body",
        style: y({
          minWidth: 200,
          minHeight: 10,
          width: "auto"
        }, u.A.getCenterStyle()),
        headerHidden: !1,
        title: "Math Tag Reference",
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: () => {
          this.props.onOk(m.Z.extractBaseChanged(this.state.blockStyle, this.props.blockStyle), this.state.applyAsDefault);
        },
        onCancel: this.props.onClose,
        okLabel: "OK",
        show: !0
      }, this.renderContent()));
    }
  }
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
  class C extends l.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {});
    }
    setResolved(e) {
      this.state.resolvedDisplay != e && this.setState({
        resolvedDisplay: e
      });
    }
    setUnresolved() {
      this.setState({
        resolvedDisplay: !1
      });
    }
    forceRefresh() {
      this.forceUpdate();
    }
    componentDidMount() {
      this.getMtFuncs().notifyLineTagRender({
        type: "change"
      });
    }
    getTextDisplayed() {
      return !1 === this.state.resolvedDisplay ? "(?)" : null != this.state.resolvedDisplay ? this.state.resolvedDisplay : "(?)";
    }
    renderSettingsIcons() {
      if (this.isSelected()) {
        var e = {
          width: 16,
          height: 16
        };
        return o().createElement("div", {
          key: "settings",
          style: {
            position: "absolute",
            left: 0,
            top: -18,
            display: "flex",
            flexDirection: "row"
          }
        }, o().createElement("span", {
          className: "setting-select",
          style: x(x({}, e), {}, {
            marginRight: 5
          }),
          onMouseDown: e => {
            this.setState({
              showSettingsDialog: !0
            }), e.stopPropagation();
          }
        }, o().createElement("i", {
          className: "fa fa-cog",
          style: {
            fontSize: 15
          }
        })), o().createElement("span", {
          className: "setting-select",
          style: e,
          onMouseDown: e => {
            e.stopPropagation();
            var t = s.Yt("ref-tag[data-tag-id='".concat(this.props.data.refTagId, "']"));
            if (0 != t.length) {
              var r = this.getEditorInfo().scrollSelector;
              c.A.scrollToElement(r, t, {
                duration: 500
              });
            }
          }
        }, o().createElement("i", {
          className: "fa fa-arrow-right",
          style: {
            fontSize: 12
          }
        })));
      }
    }
    renderSettings() {
      if (this.state.showSettingsDialog) {
        var e = this.getMtFuncs();
        return o().createElement(v, {
          requestPickerSettings: e.requestColorPickerSettings,
          key: "st-dg",
          blockStyle: {
            merged: this.getResolveStyle(),
            base: this.props.data.style
          },
          onClose: () => {
            this.setState({
              showSettingsDialog: !1
            });
          },
          onOk: (e, t) => {
            var r;
            t && this.getMtFuncs().requestPageSettingsSet({
              type: "ps-change-tag-ref-style",
              style: e
            });
            this.props.onDataChanged(x(x({}, this.props.data), {}, {
              style: e
            })), this.setState({
              showSettingsDialog: !1
            });
          }
        });
      }
    }
    getResolveStyle() {
      var e,
        t = null === (e = this.getMtFuncs().getPageSettings().mathTagRefs) || void 0 === e ? void 0 : e.blockStyle;
      return d.A.mergeStyle(this.props.data.style, t);
    }
    renderComponent() {
      var e = d.A.getHtmlFromBlockStyle(this.getResolveStyle(), !0, this.props.textDecoration, this.context.baseMathModeFontFamily, void 0);
      return [o().createElement("tag-ref-name", {
        key: "tag-ref-name",
        style: e,
        class: "tag-ref-name",
        "ref-tag-id": this.props.data.refTagId
      }, this.getTextDisplayed()), this.renderSettingsIcons(), this.renderSettings()];
    }
  }
  class S extends a.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    toModel() {
      throw new Error("Method not implemented.");
    }
    getModel(e) {
      e = e || {
        names: []
      };
      var t = super.getModel(e);
      return t.refTagId = e.tagId, t;
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        elements: {}
      };
    }
    getViewComponent() {
      return C;
    }
    getLatextName() {
      return "\\tag-ref";
    }
    getSymbol() {
      return "ref";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        renderSymbol: () => o().createElement("tag-ref-name", {
          class: "tag-ref-name"
        }, "(1)")
      });
    }
    toLatex(e) {
      var t = e.refTagId,
        r;
      return t ? s.yR("ref-tag[data-tag-id='".concat(t, "']")) : "(?)";
    }
  }
  const A = new S();
};
