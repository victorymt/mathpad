/* module 17825 — 18444 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    AnchorTagRef: () => T,
    AnchorTagRefSc: () => L,
    default: () => R
  });
  var n = r(3453),
    i = r(64467),
    o = r(37566),
    s = r(40927),
    a = r.n(s),
    l = r(25742),
    c = r(48440),
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
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class b extends a().Component {
    constructor() {
      super(...arguments), (0, i.A)(this, "FakeModalDialog", u.A.getModalDialog()), (0, i.A)(this, "state", {
        data: this.props.block.refSettings || {
          refBlockId: "none"
        },
        bs: this.props.block.style,
        items: [],
        allAnchorTagBlocks: [],
        displaySearch: ""
      }), (0, i.A)(this, "handleBlockStyleChange", e => {
        this.setState({
          bs: e
        });
      }), (0, i.A)(this, "renderSearchDropdownItem", (e, t) => {
        var r;
        return a().createElement("div", null, a().createElement("span", {
          style: {
            color: "var(--ui-text, black)"
          }
        }, e.name ? t : "(empty)"), a().createElement("span", {
          style: {
            color: "var(--ui-text-muted, gray)",
            paddingLeft: 5
          }
        }, "(", (null === (r = e.block.refSettings) || void 0 === r ? void 0 : r.name) || "empty", ") (", e.idxShow, ")"));
      }), (0, i.A)(this, "handleOk", () => {
        if (this.state.data.refBlockId) if (this.state.applyToAllAnchorSameName) {
          var e,
            t,
            r = this.state.allAnchorTagBlocks.find(e => e.block.id == this.state.data.refBlockId);
          if (!r) return;
          this.props.onOk(v(v({}, this.props.block), {}, {
            refSettings: this.state.data,
            style: this.state.bs
          }), (null === (e = r.block.refSettings) || void 0 === e ? void 0 : e.name) || "");
        } else this.props.onOk(v(v({}, this.props.block), {}, {
          refSettings: this.state.data,
          style: this.state.bs
        }), void 0);
      });
    }
    renderContent() {
      var e = this.state.displaySearch,
        t,
        r = (this.state.data || {}).useAnchorDisplay,
        n = {
          marginBottom: 8
        },
        i = {
          display: "inline-block",
          width: 80,
          color: "var(--ui-text-muted, gray)"
        },
        o = {
          width: 180,
          fontSize: "inherit"
        },
        s = {
          padding: 0
        };
      return a().createElement("div", {
        style: {
          margin: 5,
          fontSize: 13
        }
      }, a().createElement("div", {
        style: n
      }, a().createElement("span", {
        style: i
      }, a().createElement("span", null, "Ref to: ")), this.renderNameInput(e, o), this.renderInputMessage()), a().createElement("div", {
        style: n
      }, a().createElement("span", {
        style: i
      }, a().createElement("span", null, "Display: "), a().createElement(h.B, {
        popupStyle: {
          zIndex: 1
        },
        style: {
          display: "inline"
        },
        iconStyle: s,
        msg: a().createElement("span", null, "Text to display, ", a().createElement("b", null, "${count}"), " will be replaced by actual number. For example: ", a().createElement("br", null), "Ref ", "${count}", " ")
      })), a().createElement("input", {
        disabled: this.state.data.useAnchorDisplay,
        value: this.getSelectedDisplayVl(),
        style: o,
        onChange: e => {
          this.setState({
            data: v(v({}, this.state.data), {}, {
              display: e.currentTarget.value
            })
          });
        }
      }), a().createElement(d.A, {
        style: {
          display: "inline-block",
          marginLeft: 10,
          color: "var(--ui-text, black)"
        },
        bigger: !0,
        name: "Use Anchor Display",
        checked: r,
        onValueChanged: e => {
          this.setState({
            data: v(v({}, this.state.data), {}, {
              useAnchorDisplay: e
            })
          });
        }
      })), this.renderDisplayFont(n, i), a().createElement("div", {
        style: v(v({}, n), {}, {
          marginTop: 30
        })
      }, a().createElement(d.A, {
        style: {
          display: "inline-block"
        },
        bigger: !0,
        name: "Apply Display Settings/Styles to all references link to same anchor's name",
        checked: this.state.applyToAllAnchorSameName,
        onValueChanged: e => {
          this.setState({
            applyToAllAnchorSameName: e
          });
        }
      })));
    }
    renderInputMessage() {
      var e = this.state.data.refBlockId,
        t = this.state,
        r = t.allAnchorTagBlocks,
        n = t.items;
      if (!e) return a().createElement("span", {
        style: {
          display: "inline-block",
          width: 150,
          paddingLeft: 10,
          color: "var(--ui-danger, #ce0303)",
          fontSize: 12
        }
      }, e ? "" : "Please select an anchor");
      var i = r.find(e => e.block.id == this.state.data.refBlockId),
        o;
      if (i) {
        var s,
          l = (null === (s = i.block.refSettings) || void 0 === s ? void 0 : s.name) || "empty",
          c = n.find(t => t.key == e);
        o = "".concat(l, " (").concat((null == c ? void 0 : c.idxShow) || "1", ")");
      } else o = "Selected Anchor Not Found";
      return a().createElement("span", {
        style: {
          display: "inline-block",
          width: 150,
          paddingLeft: 10,
          fontSize: 12
        }
      }, o);
    }
    renderDisplayFont(e, t) {
      if (!this.props.isTextMode) {
        var r = this.state.data.useTextModeFont;
        return a().createElement("div", {
          style: e
        }, a().createElement("span", {
          style: t
        }, a().createElement("span", null, "Font: ")), a().createElement(d.A, {
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
        }), a().createElement("div", {
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
        return a().createElement(g.G, {
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
    getSelectedDisplayVl() {
      var e = this.state,
        t = e.data,
        r = e.allAnchorTagBlocks;
      if (t.useAnchorDisplay) {
        if (!t.refBlockId) return "";
        var n = r.find(e => e.block.id == t.refBlockId);
        return n ? n.resolvedDisplay : "";
      }
      return t.display || "";
    }
    renderNameInput(e, t) {
      return a().createElement(f.G, {
        input: e || "",
        inputStyle: t,
        dropdownContainerStyle: {
          maxHeight: 150
        },
        onChange: (e, t) => {
          this.setState({
            data: v(v({}, this.state.data), {}, {
              refBlockId: t
            }),
            displaySearch: e
          });
        },
        requestAllItems: () => {
          var e,
            t = this.fetchAllRefAnchors(),
            r = (0, n.A)(t, 2),
            i = r[0],
            o = r[1];
          return this.setState({
            allAnchorTagBlocks: i,
            items: o,
            displaySearch: (null === (e = i.find(e => e.block.id == this.state.data.refBlockId)) || void 0 === e ? void 0 : e.resolvedDisplay) || ""
          }), Promise.resolve(o);
        },
        onRenderItem: this.renderSearchDropdownItem
      });
    }
    fetchAllRefAnchors() {
      var e = this.props.onFetchAllBlocks(),
        t = new Map(),
        r = e.map(e => {
          var r,
            n,
            i = (t.get((null === (r = e.block.refSettings) || void 0 === r ? void 0 : r.name) || "") || 0) + 1,
            o;
          return t.set((null === (n = e.block.refSettings) || void 0 === n ? void 0 : n.name) || "", i), {
            key: e.block.id,
            name: e.resolvedDisplay,
            block: e.block,
            idxShow: "".concat(i)
          };
        });
      return [e, r];
    }
    render() {
      return a().createElement(this.FakeModalDialog, {
        show: !0
      }, a().createElement(p.A, {
        size: "medium",
        scroll: "body",
        headerHidden: !1,
        title: "Anchor Tag Reference",
        style: v({
          minWidth: 200,
          minHeight: 10,
          width: "auto"
        }, u.A.getCenterStyle()),
        disableEscapeToClose: !0,
        isProgressing: !1,
        isOkDisabled: !this.state.data.refBlockId,
        onOk: this.handleOk,
        onCancel: this.props.onClose,
        okLabel: "OK",
        show: !0
      }, this.renderContent()));
    }
  }
  var x = r(72341),
    C = r(40961),
    S = r.n(C),
    A = r(9616),
    w = r(55451),
    E = r(24373),
    k = r(47858),
    O = r(32485),
    D = r.n(O),
    P = r(73856);
  function M(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function I(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? M(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : M(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class T extends l.A {
    constructor(e) {
      super(e), (0, i.A)(this, "state", {
        display: "?"
      }), (0, i.A)(this, "handleFetchAllBlocks", () => x.t.fetchResolvedAnchorTags(this.getMtFuncs().getMathTypeHtmlElement())), (0, i.A)(this, "handleSettingsOk", (e, t) => {
        this.setState({
          showSettingsDialog: void 0
        });
        var r = this.getMtFuncs();
        if (null == t) this.props.onDataChanged(e);else {
          var n = x.t.setDisplayForAnchorTagRefs(r.getMathTypeHtmlElement(), r.getCurrentRootModel(), e, t);
          r.setCurrentRootModel(n);
        }
      }), this.containerClassName = "anchor-tag-ref";
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
        var e = S().findDOMNode(this);
        this.getMtFuncs().getBatchUpdater().push(() => A.q.notifyWidthChangeToAncestor(e), this);
      }));
    }
    componentDidUpdate(e, t) {
      super.componentDidUpdate && super.componentDidUpdate(e, t), e.data.refSettings != this.props.data.refSettings && this.getMtFuncs().registerSymbol({
        type: "anchor-tag-ref-change",
        blockId: this.props.data.id
      });
    }
    componentDidMount() {
      if (super.componentDidMount && super.componentDidMount(), T.showDialogOnMount && (this.setState({
        showSettingsDialog: !0
      }), T.showDialogOnMount = void 0), this.props.isLineParentTextMode) this.getMtFuncs().registerSymbol({
        type: "anchor-tag-ref",
        blockId: this.props.data.id
      });else {
        var e = S().findDOMNode(this),
          t = P.w.findClosetEditArea(e),
          r = (0, n.A)(t, 2),
          i = r[0],
          o = r[1];
        i && o ? w.A.nextMicro(() => {
          this.willComponentUnmount || this.getMtFuncs().registerSymbol({
            type: "anchor-tag-ref",
            lazyInfo: {
              editorId: o.reactInstance.getModel().id,
              lineId: i.reactInstance.getLineData().id
            },
            blockId: this.props.data.id
          });
        }) : this.getMtFuncs().registerSymbol({
          type: "anchor-tag-ref",
          blockId: this.props.data.id
        });
      }
    }
    componentWillUnmount() {
      super.componentWillUnmount && super.componentWillUnmount(), this.getMtFuncs().unregisterSymbol("anchor-tag-ref", this.props.data.id);
    }
    renderSettings() {
      if (this.isSelected()) {
        var e = {
          width: 18,
          height: 18
        };
        return a().createElement("div", {
          style: {
            position: "absolute",
            left: -15,
            top: -21,
            display: "flex",
            flexDirection: "row"
          }
        }, a().createElement("span", {
          className: "setting-select",
          style: e,
          onMouseDown: e => {
            this.setState({
              showSettingsDialog: !0
            }), e.stopPropagation();
          }
        }, a().createElement("i", {
          className: "fa fa-cog",
          style: {
            fontSize: 15
          }
        })), a().createElement("span", {
          className: "setting-select",
          style: I(I({}, e), {}, {
            marginLeft: 5
          }),
          onMouseDown: e => {
            var t;
            e.stopPropagation();
            var r = null === (t = this.props.data.refSettings) || void 0 === t ? void 0 : t.refBlockId;
            if (r) {
              var n = o.Zy(document, '[data-id="'.concat(r, '"]'));
              if (n) {
                var i = this.getEditorInfo().scrollSelector;
                E.A.scrollToElement(i, n, {
                  duration: 500
                });
              }
            }
          }
        }, a().createElement("i", {
          className: "fa fa-arrow-right",
          style: {
            fontSize: 13
          }
        })));
      }
    }
    renderSettingsDialog() {
      if (this.state.showSettingsDialog) return a().createElement(b, {
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
      return null !== (t = r) && void 0 !== t && t.fontName || (r = I(I({}, r), {}, {
        fontName: n.getBaseTextModeFont()
      })), I(I({}, k.A.getHtmlFromBlockStyle(r, !0, this.props.textDecoration, this.context.baseMathModeFontFamily, this.getMtFuncs().getBaseTextModeFont())), {}, {
        fontSize: m.l.getAbsoluteFontSize(r.fontSize, n.getBaseTextModeFontSize())
      });
    }
    renderComponent() {
      var e,
        t,
        r = this.state.display || (null === (e = this.props.data.refSettings) || void 0 === e ? void 0 : e.display) || "";
      return a().createElement("div", {
        "data-anchor-tag-ref-id": null === (t = this.props.data.refSettings) || void 0 === t ? void 0 : t.refBlockId,
        className: D()("anchor-tag-border", "no-border-on-print", {
          empty: !r
        })
      }, a().createElement("span", null, r), this.renderSettings(), this.renderSettingsDialog());
    }
  }
  (0, i.A)(T, "showDialogOnMount", void 0);
  class L extends c.A {
    getViewComponent() {
      return T;
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
        useAnchorDisplay: !0,
        refBlockId: void 0
      }, t;
    }
    toModel() {
      var e;
      return this.getModel();
    }
    getLatextName() {
      return "\\anchor-tag-ref";
    }
    getSymbol() {
      return "anchor-tag-ref";
    }
    toLatex() {
      return "\\anchor-tag-ref";
    }
    toMathml(e, t) {
      return {
        type: "mtext",
        value: "anchor-tag-ref"
      };
    }
  }
  const R = new L();
};
