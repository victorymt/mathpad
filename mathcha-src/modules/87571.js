/* module 87571 — 15689 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    q: () => k
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i);
  function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function a(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class l extends o().Component {
    render() {
      var e = this.props.allowSwichCaption,
        t = {
          width: 18,
          height: 18
        };
      return o().createElement("div", {
        style: {
          position: "absolute",
          left: e ? -74 : -50,
          top: 0,
          display: "flex",
          flexDirection: "row"
        }
      }, o().createElement("span", {
        className: "setting-select",
        style: t,
        onMouseDown: e => {
          e.stopPropagation(), e.preventDefault(), this.props.onDeleteCaption();
        }
      }, o().createElement("i", {
        className: "fa fa-times",
        style: {
          fontSize: 15
        }
      })), o().createElement("span", {
        className: "setting-select",
        style: a(a({}, t), {}, {
          marginLeft: 5
        }),
        onMouseDown: e => {
          e.stopPropagation(), e.preventDefault(), this.props.onEditCaptionPrefix();
        }
      }, o().createElement("i", {
        className: "fa fa-edit",
        style: {
          fontSize: 15
        }
      })), this.renderSwitchPosition(t));
    }
    renderSwitchPosition(e) {
      if (this.props.allowSwichCaption) {
        var t = this.props.capPos || "below",
          r = "above" == t ? "fa fa-angle-double-down" : "fa fa-angle-double-up";
        return o().createElement("span", {
          className: "setting-select",
          style: a(a({}, e), {}, {
            marginLeft: 5
          }),
          onMouseDown: e => {
            e.stopPropagation(), e.preventDefault(), "above" == t ? this.props.onCaptionPosChange("below") : this.props.onCaptionPosChange("above");
          }
        }, o().createElement("i", {
          className: r,
          style: {
            fontSize: 15
          }
        }));
      }
    }
  }
  var c = r(8583),
    d = r(21774),
    h = r(2543),
    p = r.n(h),
    u = r(98930),
    g = r(47286),
    m = r(58907),
    f = r(91335),
    y = r(92855),
    v = r(47858);
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
  class C extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "cacheResetNumeringItems", void 0), (0, n.A)(this, "state", {
        info: this.props.info || {}
      }), (0, n.A)(this, "FakeModalDialog", m.A.getModalDialog()), (0, n.A)(this, "handleOk", () => {
        this.props.onOk(this.state.info);
      });
    }
    renderContent() {
      var e = {
          display: "inline-block",
          width: 140
        },
        t = {
          display: "flex",
          alignItems: "baseline",
          marginBottom: 5
        },
        r = this.state.info,
        n = this.props.psTextStyle || c.c.defaultPsStyle,
        i = v.A.mergeStyle(r.textStyle || {}, n);
      return o().createElement("div", {
        style: {
          fontSize: 13,
          padding: 5
        }
      }, o().createElement("div", {
        style: t
      }, o().createElement("span", {
        style: e
      }, "Style: "), o().createElement(y.G, {
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
        blockStyle: i,
        onBlockStyleChange: e => {
          this.setState({
            info: x(x({}, r), {}, {
              textStyle: e
            })
          });
        },
        showClearButton: !0,
        clearButtonText: "Reset",
        onClear: () => {
          this.setState({
            info: x(x({}, r), {}, {
              textStyle: void 0
            })
          });
        }
      })), o().createElement("div", {
        style: t
      }, o().createElement("span", {
        style: e
      }, "Display: "), this.renderDisplayContent()), o().createElement("div", {
        style: t
      }, o().createElement("span", {
        style: e
      }, "Custom: "), this.renderTemplate()), o().createElement("div", {
        style: t
      }, o().createElement("span", {
        style: e
      }, "Reset Numbering: "), this.renderResetNumberingContent()), o().createElement("div", {
        style: t
      }, o().createElement("span", {
        style: e
      }, "Doc Captions: "), o().createElement("button", {
        onClick: this.props.onRequestPsCaptions,
        className: "btn-normal btn-large",
        style: {
          width: 250
        }
      }, "Configure Captions for Document")));
    }
    getResetingSelectBoxItems() {
      if (!this.cacheResetNumeringItems) {
        var e = [{
            key: "none",
            value: "None"
          }],
          t = p().times(100, e => ({
            key: e + 1,
            value: "".concat(e + 1)
          }));
        this.cacheResetNumeringItems = e.concat(t);
      }
      return this.cacheResetNumeringItems;
    }
    renderResetNumberingContent() {
      var e = this.state.info;
      return o().createElement(f.A, {
        itemsStyle: {
          maxHeight: 250,
          overflowY: "auto"
        },
        width: 250,
        style: {
          fontSize: 13,
          color: "var(--ui-text, black)"
        },
        data: this.getResetingSelectBoxItems(),
        value: e.resetAtNumber ? e.resetAtNumber : "none",
        onChange: t => {
          "none" == t ? this.setState({
            info: x(x({}, e), {}, {
              resetAtNumber: void 0
            })
          }) : this.setState({
            info: x(x({}, e), {}, {
              resetAtNumber: t
            })
          });
        }
      });
    }
    renderDisplayContent() {
      var e = [{
          key: "auto",
          value: "Auto"
        }, {
          key: "custom-increase",
          value: "Custom (Increase Numbering)"
        }, {
          key: "custom-ignore",
          value: "Custom (Skip Increase Numbering)"
        }],
        t = this.state.info,
        r = d.A.isObj(t.display) ? t.display.type : "auto";
      return o().createElement("div", null, o().createElement(f.A, {
        width: 250,
        style: {
          fontSize: 13,
          color: "var(--ui-text, black)"
        },
        data: e,
        value: r,
        onChange: e => {
          if ("auto" == e) this.setState({
            info: x(x({}, t), {}, {
              display: void 0
            })
          });else {
            var r = this.state.info;
            if (d.A.isObj(r.display)) return void this.setState({
              info: x(x({}, r), {}, {
                display: {
                  type: e,
                  template: r.display.template
                }
              })
            });
            this.setState({
              info: x(x({}, r), {}, {
                display: {
                  type: e,
                  template: ""
                }
              })
            });
          }
        }
      }));
    }
    renderTemplate() {
      var e = this.state.info,
        t = {
          fontSize: 13,
          width: 220
        };
      return d.A.isObj(e.display) ? o().createElement("div", null, o().createElement("input", {
        style: t,
        value: e.display.template,
        onChange: t => {
          d.A.isObj(e.display) && this.setState({
            info: x(x({}, e), {}, {
              display: x(x({}, e.display), {}, {
                template: t.target.value
              })
            })
          });
        }
      }), o().createElement(u.B, {
        popupStyle: {
          zIndex: 1
        },
        style: {
          display: "inline"
        },
        msg: o().createElement("span", null, "Text to display, ", o().createElement("b", null, "${count}"), " will be replaced by actual number. For example: ", o().createElement("br", null), "Figure ", "${count}", " ")
      })) : o().createElement("input", {
        style: t,
        value: "",
        disabled: !0
      });
    }
    render() {
      return o().createElement(this.FakeModalDialog, {
        show: !0
      }, o().createElement(g.A, {
        size: "medium",
        scroll: "body",
        headerHidden: !1,
        title: "Caption Prefix Custom",
        style: x({
          minWidth: 200,
          minHeight: 150,
          width: "auto",
          backgroundColor: "var(--ui-surface-muted, rgb(247, 247, 247))"
        }, m.A.getCenterStyle()),
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: this.handleOk,
        onCancel: this.props.onClose,
        okLabel: "OK",
        show: !0
      }, this.renderContent()));
    }
  }
  var S = r(40961),
    A = r.n(S);
  function w(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function E(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? w(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class k extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        psTextStyle: this.props.psTextStyle || c.c.defaultPsStyle
      });
    }
    getInfo() {
      return [this.props.captionInfo, this.props.blockId, this.props.cType];
    }
    setResolve(e, t) {
      d.A.areEqualShallow(this.state.resolved, e) && this.state.psTextStyle == t || this.setState({
        resolved: e,
        psTextStyle: t
      });
    }
    componentDidMount() {
      var e;
      this.props.notifyCaptionNumbering("notify", this.props.cType), A().findDOMNode(this).reactInstance = this;
    }
    componentWillUnmount() {
      this.props.notifyCaptionNumbering("notify", this.props.cType);
    }
    componentDidUpdate(e) {
      e.captionInfo != this.props.captionInfo && this.props.notifyCaptionNumbering("notify", this.props.cType);
    }
    render() {
      var e = this.props.classNameKey,
        t = this.props.capPos || "below";
      return o().createElement("div", {
        key: "caption",
        "data-caption-block-id": this.props.blockId,
        className: "role-".concat(e, "-caption-container role-caption-container"),
        style: E({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "below" == t ? 10 : void 0,
          marginBottom: "above" == t ? 10 : void 0
        }, this.props.mainStyle)
      }, o().createElement("span", {
        className: "no-print-outline",
        style: {
          outline: this.props.selected ? "1px solid lightgray" : "none",
          position: "relative",
          textAlign: this.props.textAlignFirstLine
        }
      }, this.renderCaptionPrefix(), this.props.children, this.renderCaptionActions(), this.renderEditPrefixDialog()));
    }
    renderCaptionPrefix() {
      var e = this.state,
        t = e.resolved,
        r = e.psTextStyle,
        n = this.props,
        i = n.classNameKey,
        s = n.captionPrefix,
        a = n.captionInfo;
      r = r || c.c.defaultPsStyle;
      var l = v.A.mergeStyle((null == a ? void 0 : a.textStyle) || {}, r),
        d = v.A.getHtmlFromBlockStyle(l, !0, void 0, "Asana", "ptm"),
        h = {
          paddingRight: "0.3em",
          fontWeight: d.fontWeight,
          fontStyle: d.fontStyle,
          textDecoration: d.textDecoration,
          color: d.color
        };
      return t && "missing" != t.type || (t = {
        type: "auto",
        prefix: s,
        count: "1"
      }), "auto" == t.type ? o().createElement("span", {
        className: "role-".concat(i, "-caption-prefix"),
        style: h,
        onMouseDown: this.props.onCaptionPrefixMouseDown
      }, o().createElement("span", {
        className: "role-".concat(i, "-caption-name")
      }, t.prefix), o().createElement("span", {
        className: "role-".concat(i, "-caption-number")
      }, " ", t.count), o().createElement("span", null, ":")) : o().createElement("span", {
        className: "role-".concat(i, "-caption-prefix"),
        style: h,
        onMouseDown: this.props.onCaptionPrefixMouseDown
      }, o().createElement("span", null, t.prefixResolved), o().createElement("span", null, t.prefixResolved ? ":" : ""));
    }
    renderEditPrefixDialog() {
      if (this.state.showEditPrefix) return o().createElement(C, {
        requestPickerSettings: this.props.requestPickerSettings,
        psTextStyle: this.state.psTextStyle,
        info: this.props.captionInfo || {},
        onClose: () => {
          this.setState({
            showEditPrefix: !1
          });
        },
        onOk: e => {
          this.props.onCaptionInfoChange(e), this.setState({
            showEditPrefix: !1
          });
        },
        onRequestPsCaptions: () => {
          this.setState({
            showEditPrefix: !1
          }), this.props.onEditCaptionPrefix();
        }
      });
    }
    renderCaptionActions() {
      return this.props.selected && "caption" == this.props.selected.key ? o().createElement(l, {
        allowSwichCaption: this.props.allowSwichCaption,
        capPos: this.props.capPos || "below",
        onCaptionPosChange: this.props.onCaptionPosChange,
        onDeleteCaption: this.props.onDeleteCaption,
        onEditCaptionPrefix: () => {
          this.setState({
            showEditPrefix: !0
          });
        }
      }) : null;
    }
  }
};
