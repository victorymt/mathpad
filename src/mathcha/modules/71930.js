/* module 71930 — 15201 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    AnchorTag: () => I,
    AnchorTagSc: () => T,
    default: () => L
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(25742),
    a = r(3453),
    l = r(2543),
    c = r.n(l),
    d = r(23466),
    h = r(98930),
    p = r(47286),
    u = r(58907),
    g = r(92855),
    m = r(18808),
    f = r(27806);
  function y(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function v(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? y(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class b extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "FakeModalDialog", u.A.getModalDialog()), (0, n.A)(this, "state", {
        data: this.props.block.refSettings || {},
        bs: this.props.block.style,
        items: "none"
      }), (0, n.A)(this, "handleBlockStyleChange", e => {
        this.setState({
          bs: e
        });
      }), (0, n.A)(this, "renderSearchDropdownItem", (e, t) => o().createElement("div", null, o().createElement("span", {
        style: {
          color: "var(--ui-text, black)"
        }
      }, e.name ? t : "(empty)"), o().createElement("span", {
        style: {
          color: "var(--ui-text-muted, gray)",
          paddingLeft: 5
        }
      }, "(", e.count, ")")));
    }
    renderContent() {
      var e = this.state.data || {},
        t = e.display,
        r = e.name,
        n = {
          marginBottom: 8
        },
        i = {
          display: "inline-block",
          width: 80,
          color: "var(--ui-text-muted, gray)"
        },
        s = {
          width: 150,
          fontSize: "inherit"
        },
        a = {
          padding: 0
        };
      return o().createElement("div", {
        style: {
          margin: 5,
          fontSize: 13
        }
      }, o().createElement("div", {
        style: n
      }, o().createElement("span", {
        style: i
      }, o().createElement("span", null, "Name: "), o().createElement(h.B, {
        popupStyle: {
          zIndex: 1
        },
        style: {
          display: "inline"
        },
        iconStyle: a,
        msg: "The same names can be reused, and counting will be increased"
      })), this.renderNameInput(r, s), this.renderCountingAppear()), o().createElement("div", {
        style: n
      }, o().createElement("span", {
        style: i
      }, o().createElement("span", null, "Display: "), o().createElement(h.B, {
        popupStyle: {
          zIndex: 1
        },
        style: {
          display: "inline"
        },
        iconStyle: a,
        msg: o().createElement("span", null, "Text to display, ", o().createElement("b", null, "${count}"), " will be replaced by actual number. For example: ", o().createElement("br", null), "Ref ", "${count}", " ")
      })), o().createElement("input", {
        value: t || "",
        style: s,
        onChange: e => {
          this.setState({
            data: v(v({}, this.state.data), {}, {
              display: e.currentTarget.value
            })
          });
        }
      })), this.renderDisplayFont(n, i), o().createElement("div", {
        style: v(v({}, n), {}, {
          marginTop: 30
        })
      }, o().createElement(d.A, {
        style: {
          display: "inline-block"
        },
        bigger: !0,
        name: "Apply Display Settings/Styles to all anchors with same name",
        checked: this.state.applyToAllAnchorSameName,
        onValueChanged: e => {
          this.setState({
            applyToAllAnchorSameName: e
          });
        }
      })));
    }
    renderDisplayFont(e, t) {
      if (!this.props.isTextMode) {
        var r = this.state.data.useTextModeFont;
        return o().createElement("div", {
          style: e
        }, o().createElement("span", {
          style: t
        }, o().createElement("span", null, "Font: ")), o().createElement(d.A, {
          style: {
            display: "inline-block",
            color: "var(--ui-text, black)"
          },
          bigger: !0,
          name: "Use Text Mode font",
          checked: r,
          onValueChanged: e => {
            this.setState({
              data: v(v({}, this.state.data), {}, {
                useTextModeFont: e
              }),
              bs: e ? this.state.bs : void 0
            });
          }
        }), o().createElement("div", {
          style: {
            height: 40,
            marginTop: 10
          }
        }, this.renderTextStyleSettings()));
      }
    }
    renderTextStyleSettings() {
      if (this.state.data.useTextModeFont && !this.props.isTextMode) {
        var e = this.props.fixedContextHandler.getMtFuncs(),
          t = e.getPageSettings();
        return o().createElement(g.G, {
          requestPickerSettings: e.requestColorPickerSettings,
          requestFontSizeRatio: m.l.handleRequestFontSizeRatioOne,
          fontBaseSize: t.fontSize,
          expandZIndex: 999,
          isFontBgColorHidden: !0,
          hBarStyle: {
            marginBottom: 0
          },
          containerStyle: {
            display: "flex",
            background: "var(--ui-surface-muted, #f7f7f7)",
            border: "1px solid var(--ui-border, lightgray)",
            padding: "3px 10px 5px 10px",
            flex: 1
          },
          blockStyle: this.state.bs,
          onBlockStyleChange: this.handleBlockStyleChange
        });
      }
    }
    renderCountingAppear() {
      var e = this.state,
        t = e.data,
        r = e.items,
        n = {
          display: "inline-block",
          width: 90,
          paddingLeft: 5
        };
      if ("none" != r) {
        var i = r.find(e => e.name == t.name) || {
          count: 0
        };
        return o().createElement("span", {
          style: n
        }, "(", i.count, " occurence", i.count > 1 ? "s" : "", ")");
      }
      return o().createElement("span", {
        style: n
      });
    }
    fetchAllRefAnchors() {
      var e = this.props.onFetchAllBlocks(),
        t = c().groupBy(e.filter(e => e.id != this.props.block.id), e => {
          var t;
          return (null === (t = e.refSettings) || void 0 === t ? void 0 : t.name) || "";
        }),
        r;
      return [e, c().toPairs(t).map(e => {
        var t,
          r = (0, a.A)(e, 2),
          n = r[0],
          i = r[1],
          o;
        return {
          key: n || "",
          name: n || "",
          count: i.length,
          display: null === (t = i[0].refSettings) || void 0 === t ? void 0 : t.display
        };
      })];
    }
    renderNameInput(e, t) {
      return o().createElement(f.G, {
        input: e || "",
        inputStyle: t,
        onChange: (e, t) => {
          var r,
            n = this.state,
            i = n.items,
            o = n.data,
            s = null != t && "none" != i ? null === (r = i.find(e => e.key == t)) || void 0 === r ? void 0 : r.display : o.display;
          this.setState({
            data: v(v({}, o), {}, {
              name: e,
              display: s
            })
          });
        },
        requestAllItems: () => {
          var e = this.fetchAllRefAnchors(),
            t = (0, a.A)(e, 2),
            r = t[0],
            n = t[1];
          return this.setState({
            allRefAnchorBlocks: r,
            items: n
          }), Promise.resolve(n);
        },
        onRenderItem: this.renderSearchDropdownItem
      });
    }
    render() {
      return o().createElement(this.FakeModalDialog, {
        show: !0
      }, o().createElement(p.A, {
        size: "medium",
        scroll: "body",
        style: v({
          minWidth: 200,
          minHeight: 10,
          width: "auto"
        }, u.A.getCenterStyle()),
        headerHidden: !1,
        title: "Anchor Tag",
        disableEscapeToClose: !0,
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: () => {
          this.props.onOk(v(v({}, this.props.block), {}, {
            refSettings: this.state.data,
            style: this.state.bs
          }), this.state.applyToAllAnchorSameName);
        },
        onCancel: this.props.onClose,
        okLabel: "OK",
        show: !0
      }, this.renderContent()));
    }
  }
  var x = r(40961),
    C = r.n(x),
    S = r(72341),
    A = r(9616),
    w = r(48440),
    E = r(47858),
    k = r(32485),
    O = r.n(k),
    D = r(71738);
  function P(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function M(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? P(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class I extends s.A {
    constructor(e) {
      super(e), (0, n.A)(this, "state", {}), (0, n.A)(this, "handleFetchAllBlocks", () => S.t.fetchBlocks(this.getMtFuncs().getMathTypeHtmlElement())), (0, n.A)(this, "handleSettingsOk", (e, t) => {
        this.setState({
          showSettingsDialog: void 0
        });
        var r = this.getMtFuncs();
        if (t) {
          var n = S.t.setDisplayForAnchorTags(r.getMathTypeHtmlElement(), r.getCurrentRootModel(), e);
          r.setCurrentRootModel(n);
        } else this.props.onDataChanged(e);
      }), this.containerClassName = "anchor-tag";
    }
    getResolvedDisplay() {
      var e;
      return this.state.display || (null === (e = this.props.data.refSettings) || void 0 === e ? void 0 : e.display) || "";
    }
    gatherSelected(e) {
      this.props.onSelectedChanged({}, {
        gatheredSelectedArr: e
      });
    }
    setDisplayRendered(e) {
      var t;
      this.state.display && this.state.display == e || (this.state.display || (null === (t = this.props.data.refSettings) || void 0 === t ? void 0 : t.display) != e) && (this.props.isLineParentTextMode ? this.setState({
        display: e
      }) : this.setState({
        display: e
      }, () => {
        var e = C().findDOMNode(this);
        this.getMtFuncs().getBatchUpdater().push(() => A.q.notifyWidthChangeToAncestor(e), this);
      }));
    }
    componentDidUpdate(e, t) {
      super.componentDidUpdate && super.componentDidUpdate(e, t), e.data.refSettings != this.props.data.refSettings && this.getMtFuncs().registerSymbol({
        type: "anchor-tag-change",
        blockId: this.props.data.id
      });
    }
    componentDidMount() {
      if (super.componentDidMount && super.componentDidMount(), I.showDialogOnMount && (this.setState({
        showSettingsDialog: !0
      }), I.showDialogOnMount = void 0), this.props.isLineParentTextMode) this.getMtFuncs().registerSymbol({
        type: "anchor-tag",
        blockId: this.props.data.id
      });else {
        var e = D.Z.findLineEditorIds(this);
        e ? e.then(e => {
          e && this.getMtFuncs().registerSymbol({
            type: "anchor-tag",
            lazyInfo: e,
            blockId: this.props.data.id
          });
        }) : this.getMtFuncs().registerSymbol({
          type: "anchor-tag",
          blockId: this.props.data.id
        });
      }
    }
    componentWillUnmount() {
      super.componentWillUnmount && super.componentWillUnmount(), this.getMtFuncs().unregisterSymbol("anchor-tag", this.props.data.id);
    }
    renderSettings() {
      if (this.isSelected()) return o().createElement("bulb", {
        key: "bulb",
        className: "smaller",
        style: {
          left: -20,
          top: -23
        },
        onMouseDown: e => {
          this.setState({
            showSettingsDialog: !0
          }), e.stopPropagation();
        }
      }, o().createElement("i", {
        className: "fa fa-cog"
      }));
    }
    renderSettingsDialog() {
      if (this.state.showSettingsDialog) return o().createElement(b, {
        isTextMode: this.props.isLineParentTextMode,
        block: this.props.data,
        onFetchAllBlocks: this.handleFetchAllBlocks,
        onClose: () => {
          this.setState({
            showSettingsDialog: void 0
          });
        },
        onOk: this.handleSettingsOk,
        fixedContextHandler: this.context.fixedContextHandler
      });
    }
    getCompositeBlockStyle() {
      var e, t;
      if (null === (e = this.props.data.refSettings) || void 0 === e || !e.useTextModeFont || this.props.isLineParentTextMode) return super.getCompositeBlockStyle();
      var r = this.props.data.style,
        n = this.getMtFuncs();
      return null !== (t = r) && void 0 !== t && t.fontName || (r = M(M({}, r), {}, {
        fontName: n.getBaseTextModeFont()
      })), M(M({}, E.A.getHtmlFromBlockStyle(r, !0, this.props.textDecoration, this.context.baseMathModeFontFamily, this.getMtFuncs().getBaseTextModeFont())), {}, {
        fontSize: m.l.getAbsoluteFontSize(r.fontSize, n.getBaseTextModeFontSize())
      });
    }
    renderComponent() {
      var e,
        t = this.state.display || (null === (e = this.props.data.refSettings) || void 0 === e ? void 0 : e.display) || "";
      return o().createElement("div", {
        "data-id": this.props.data.id,
        className: O()("anchor-tag-border", "no-border-on-print", {
          empty: !t
        })
      }, o().createElement("span", null, t), this.renderSettings(), this.renderSettingsDialog());
    }
  }
  (0, n.A)(I, "showDialogOnMount", void 0);
  class T extends w.A {
    getViewComponent() {
      return I;
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
        symbol: this.getSymbol()
      });
    }
    getModel(e) {
      var t = super.getModel(e);
      return t.refSettings = {
        display: "${count}",
        name: ""
      }, t;
    }
    toModel() {
      var e;
      return this.getModel();
    }
    getLatextName() {
      return "\\anchor-tag";
    }
    getSymbol() {
      return "anchor-tag";
    }
    toLatex() {
      return "\\anchor-tag";
    }
    toMathml(e, t) {
      return {
        type: "mtext",
        value: "anchor-tag"
      };
    }
  }
  const L = new T();
};
