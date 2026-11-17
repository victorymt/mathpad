/* module 43085 — 18693 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    G: () => I
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(40961),
    a = r.n(s),
    l = r(32485),
    c = r.n(l),
    d = r(37566),
    h = r(61848),
    p = r(49812),
    u = r(53359),
    g = r(91335),
    m = r(2543),
    f = r.n(m),
    y = r(58907),
    v = r(47286),
    b = r(98930),
    x = r(92855),
    C = r(93347);
  function S(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function A(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? S(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class w extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "cacheResetNumeringItems", void 0), (0, n.A)(this, "FakeModalDialog", y.A.getModalDialog()), (0, n.A)(this, "typeItems", [{
        key: "none",
        value: "None"
      }, {
        key: "auto",
        value: "Auto"
      }, {
        key: "reset",
        value: "Reset"
      }, {
        key: "custom",
        value: "Custom (Skip Increase Numbering)"
      }, {
        key: "custom-in",
        value: "Custom (Increase Numbering)"
      }]), (0, n.A)(this, "state", {
        tagInfo: this.props.tagInfo,
        resolvedStyle: this.props.resolvedStyle || {}
      }), (0, n.A)(this, "handleTypeChange", e => {
        var t = A(A({}, this.state.tagInfo), {}, {
          type: e
        });
        "custom" == e && null == this.state.tagInfo.tagName && (t = A(A({}, t), {}, {
          tagName: ""
        })), "reset" != e || this.state.tagInfo.resetNumber || (t = A(A({}, t), {}, {
          resetNumber: 1
        })), "none" == e && (t = A(A({}, t), {}, {
          type: void 0
        })), this.setState({
          tagInfo: t
        });
      });
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
          width: 110,
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
      }, "Numbering Type:"), o().createElement(g.A, {
        data: this.typeItems,
        isReadOnly: !0,
        onChange: this.handleTypeChange,
        width: 250,
        value: this.state.tagInfo.type || "none",
        itemsStyle: {
          maxHeight: 200,
          overflowY: "scroll",
          zIndex: 9999999
        },
        usePositionFixedOnExpand: !0
      })), this.renderSecondaryInfo(e, t), o().createElement("div", {
        style: e
      }, o().createElement("span", {
        style: t
      }, "Style:"), o().createElement(x.G, {
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
        containerStyle: {
          width: 200,
          display: "inline-flex",
          background: "var(--ui-surface-muted, #f7f7f7)",
          border: "1px solid var(--ui-border, lightgray)",
          padding: "3px 10px 5px 10px",
          flex: 1,
          zIndex: 1
        },
        showClearButton: !0,
        clearButtonText: "Reset",
        blockStyle: this.state.resolvedStyle,
        onBlockStyleChange: e => {
          this.setState({
            resolvedStyle: e
          });
        },
        onClear: () => {
          this.setState({
            resolvedStyle: this.props.ancestorStyle
          });
        }
      })), o().createElement("div", {
        style: e
      }, o().createElement("span", {
        style: t
      }, "Doc Tags: "), o().createElement("button", {
        onClick: this.props.onRequestDocTags,
        className: "btn-normal btn-large",
        style: {
          width: 250
        }
      }, "Configure Tags for Document")));
    }
    renderSecondaryInfo(e, t) {
      var r = this.state.tagInfo;
      return "custom" == r.type || "custom-in" == r.type ? o().createElement("div", {
        style: e
      }, o().createElement("span", {
        style: t
      }, o().createElement("span", null, "Custom:"), o().createElement(b.B, {
        popupStyle: {
          zIndex: 2
        },
        style: {
          display: "inline"
        },
        msg: o().createElement("span", null, "Text to display, ", o().createElement("b", null, "${count}"), " will be replaced by actual number. For example: ", o().createElement("br", null), "Math ", "${count}", " ")
      })), o().createElement("input", {
        style: {
          width: 244
        },
        value: r.tagName || "",
        onChange: e => {
          this.setState({
            tagInfo: A(A({}, this.state.tagInfo), {}, {
              tagName: e.target.value.substr(0, 250)
            })
          });
        }
      })) : "reset" == r.type ? o().createElement("div", {
        style: e
      }, o().createElement("span", {
        style: t
      }, "Reset to:"), o().createElement(g.A, {
        itemsStyle: {
          maxHeight: 250,
          overflowY: "auto"
        },
        width: 220,
        style: {
          fontSize: 13,
          color: "var(--ui-text, black)"
        },
        data: this.getResetingSelectBoxItems(),
        value: r.resetNumber || 1,
        onChange: e => {
          this.setState({
            tagInfo: A(A({}, this.state.tagInfo), {}, {
              resetNumber: e
            })
          });
        }
      })) : void 0;
    }
    getResetingSelectBoxItems() {
      if (!this.cacheResetNumeringItems) {
        var e = f().times(100, e => ({
          key: e + 1,
          value: "".concat(e + 1)
        }));
        this.cacheResetNumeringItems = e;
      }
      return this.cacheResetNumeringItems;
    }
    render() {
      return o().createElement(this.FakeModalDialog, {
        show: !0
      }, o().createElement(v.A, {
        size: "medium",
        scroll: "body",
        style: A({
          minWidth: 200,
          minHeight: 10,
          width: "auto"
        }, y.A.getCenterStyle()),
        headerHidden: !1,
        title: "Math Tag",
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: () => {
          var e = C.Z.extractBaseChanged(this.state.resolvedStyle, {
            base: this.props.tagInfo.style || {},
            merged: this.props.resolvedStyle
          });
          this.props.onOk(A(A({}, this.state.tagInfo), {}, {
            style: e
          }));
        },
        onCancel: this.props.onClose,
        okLabel: "OK",
        show: !0
      }, this.renderContent()));
    }
  }
  var E = r(47858);
  function k(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function O(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? k(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : k(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class D extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "FakeModalDialog", y.A.getModalDialog()), (0, n.A)(this, "state", {
        mathTags: this.props.mathTags || {}
      });
    }
    renderContent() {
      var e = this.state.mathTags,
        t = {
          marginBottom: 8,
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline"
        },
        r = {
          display: "inline-block",
          width: 140,
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
        style: t
      }, o().createElement("span", {
        style: r
      }, "Default Numbering Type:"), o().createElement(g.A, {
        width: 250,
        style: {
          fontSize: 13,
          color: "var(--ui-text, black)"
        },
        data: this.getNumberingTypes(),
        value: e.autoNumberingType || "normal",
        onChange: t => {
          this.setState({
            mathTags: O(O({}, e), {}, {
              autoNumberingType: t
            })
          });
        }
      })), o().createElement("div", {
        style: t
      }, o().createElement("span", {
        style: r
      }, "Default Style:"), o().createElement(x.G, {
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
        containerStyle: {
          width: 200,
          display: "inline-flex",
          background: "var(--ui-surface-muted, #f7f7f7)",
          border: "1px solid var(--ui-border, lightgray)",
          padding: "3px 10px 5px 10px",
          flex: 1,
          zIndex: 1
        },
        showClearButton: !0,
        clearButtonText: "Clear",
        blockStyle: this.state.mathTags.blockStyle,
        onBlockStyleChange: e => {
          this.setState({
            mathTags: O(O({}, this.state.mathTags), {}, {
              blockStyle: e
            })
          });
        },
        onClear: () => {
          this.setState({
            mathTags: O(O({}, this.state.mathTags), {}, {
              blockStyle: void 0
            })
          });
        }
      })));
    }
    getNumberingTypes() {
      return [{
        key: "normal",
        value: "Normal"
      }, {
        key: "section1",
        value: "Section Level 1"
      }, {
        key: "section2",
        value: "Section Level 2"
      }, {
        key: "section3",
        value: "Section Level 3"
      }];
    }
    render() {
      return o().createElement(this.FakeModalDialog, {
        show: !0
      }, o().createElement(v.A, {
        size: "medium",
        scroll: "body",
        style: O({
          minWidth: 200,
          minHeight: 10,
          width: "auto"
        }, y.A.getCenterStyle()),
        headerHidden: !1,
        title: "Math Tags for Document",
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: () => {
          this.props.onOk(this.state.mathTags);
        },
        onCancel: this.props.onClose,
        okLabel: "OK",
        show: !0
      }, this.renderContent()));
    }
  }
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
  class I extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        showSetting: !1
      }), (0, n.A)(this, "handleTagInfoChanged", e => {
        this.setState({
          showSetting: !1
        }), "none" != (null == e ? void 0 : e.type) && null != e && e.type ? this.props.onTagInfoChanged(e, null) : this.props.onTagInfoChanged(void 0, null);
      }), (0, n.A)(this, "handleTagMouseDown", e => {
        if (e.stopPropagation(), e.preventDefault(), !this.isSelectModeOnly()) if (u.p.shouldShowTagInfoBy(this.props.tagInfo)) this.setState({
          showSetting: !0
        });else {
          var t = this.props.tagInfo || {};
          (t = h.A.setProp(t, "type", "auto")).tagId || (t = h.A.setProp(t, "tagId", p.A.nextTagId())), this.handleTagInfoChanged(t);
        }
      });
    }
    forceRefresh() {
      this.forceUpdate();
    }
    setResolved(e) {
      this.state.numberingResolved != e && this.setState({
        numberingResolved: e
      });
    }
    getTagInfo() {
      return this.props.tagInfo;
    }
    shouldComponentUpdate(e, t) {
      var r = this.props;
      return e.defaultText != r.defaultText || e.tagInfo != r.tagInfo || e.fontSize != r.fontSize || e.tagPosition != r.tagPosition || e.fontFamily != r.fontFamily || t != this.state;
    }
    componentDidMount() {
      var e;
      a().findDOMNode(this).reactInstance = this;
    }
    componentWillMount() {
      if (u.p.shouldShowTagInfoBy(this.props.tagInfo)) {
        var e,
          t = this.props.fixedContextHandler.getMtFuncs().notifyLineTagRender({
            type: "willmount",
            tagId: null === (e = this.props.tagInfo) || void 0 === e ? void 0 : e.tagId
          });
        t && this.setState({
          numberingResolved: t
        });
      }
    }
    componentWillUnmount() {
      var e;
      u.p.shouldShowTagInfoBy(this.props.tagInfo) && this.props.fixedContextHandler.getMtFuncs().notifyLineTagRender({
        type: "unmounted",
        tagId: null === (e = this.props.tagInfo) || void 0 === e ? void 0 : e.tagId,
        resolvedText: this.state.numberingResolved
      });
    }
    componentDidUpdate(e) {
      e.tagInfo != this.props.tagInfo && this.props.fixedContextHandler.getMtFuncs().notifyLineTagRender({
        type: "change"
      });
    }
    isSelectModeOnly() {
      var e = d.f$(a().findDOMNode(this), "math-type");
      return d.nB(e, "read-only") || d.nB(e, "select-only");
    }
    getResolvedTagText() {
      var e = this.props,
        t = e.tagInfo,
        r = e.defaultText;
      return null != this.state.numberingResolved ? "".concat(this.state.numberingResolved || "?") : "custom" == t.type || "custom-in" == t.type ? "(".concat(t.tagName || "?", ")") : "reset" == t.type ? "(".concat(t.resetNumber || 1, ")") : r || "";
    }
    getMtFuncs() {
      return this.props.fixedContextHandler.getMtFuncs();
    }
    getResolveStyle() {
      var e,
        t,
        r = null === (e = this.getMtFuncs().getPageSettings().mathTags) || void 0 === e ? void 0 : e.blockStyle;
      return E.A.mergeStyle(null === (t = this.props.tagInfo) || void 0 === t ? void 0 : t.style, r);
    }
    renderAvailableTag() {
      var e = this.props,
        t = e.tagInfo,
        r = e.tagPosition,
        n = e.fontFamily,
        i = e.fontSize,
        s = t && t.tagId,
        a = E.A.getHtmlFromBlockStyle(this.getResolveStyle(), !0, void 0, this.context.baseMathModeFontFamily, void 0);
      return o().createElement("ref-tag", {
        style: M(M(M({}, this.props.existStyle), a), {}, {
          fontFamily: n,
          fontSize: i,
          zIndex: this.state.showSetting ? 9999 : void 0,
          backgroundColor: this.state.showSetting ? "var(--ui-selection, #bfe4bd)" : void 0
        }),
        onMouseDown: this.handleTagMouseDown,
        "data-tag-position": r,
        class: c()("line-tag", {
          automatic: "auto" == t.type,
          reset: "reset" == t.type
        }),
        "data-tag-id": s
      }, o().createElement("label", null, this.getResolvedTagText()), this.renderSettings(), this.renderDocSettings());
    }
    renderSettings() {
      if (this.state.showSetting) {
        var e,
          t = this.getMtFuncs();
        return o().createElement(w, {
          requestPickerSettings: t.requestColorPickerSettings,
          resolvedStyle: this.getResolveStyle(),
          ancestorStyle: (null === (e = t.getPageSettings().mathTags) || void 0 === e ? void 0 : e.blockStyle) || {},
          getDzContainer: this.props.getDzContainer,
          onClose: () => this.setState({
            showSetting: !1
          }),
          tagInfo: this.props.tagInfo,
          onOk: this.handleTagInfoChanged,
          onRequestDocTags: () => {
            this.setState({
              showDocSettings: !0,
              showSetting: !1
            });
          }
        });
      }
    }
    renderDocSettings() {
      if (this.state.showDocSettings) {
        var e = this.props.fixedContextHandler.getMtFuncs();
        return o().createElement(D, {
          requestPickerSettings: e.requestColorPickerSettings,
          mathTags: e.getPageSettings().mathTags,
          onClose: () => this.setState({
            showDocSettings: !1
          }),
          onOk: t => {
            this.setState({
              showDocSettings: !1
            }), e.requestPageSettingsSet({
              type: "ps-change-math-tags",
              mathTags: t
            });
          }
        });
      }
    }
    renderNoneTag() {
      var e = this.props.fixedContextHandler.getMtFuncs(),
        t = e.isReadOnly() || e.isSelectOnly();
      return o().createElement("ref-tag", {
        style: M(M({}, this.props.emptyStyle), {}, {
          fontFamily: this.props.fontFamily,
          fontSize: this.props.fontSize,
          display: t ? "none" : void 0
        }),
        onMouseDown: this.handleTagMouseDown,
        class: "empty-line-tag"
      }, o().createElement("label", null, "(...)"), this.renderSettings(), this.renderDocSettings());
    }
    render() {
      var e = this.props.tagInfo;
      return u.p.shouldShowTagInfoBy(e) ? this.renderAvailableTag() : this.renderNoneTag();
    }
  }
};
