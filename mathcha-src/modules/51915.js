/* module 51915 — 27713 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => q
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(37566),
    a = r(32485),
    l = r.n(a),
    c = r(36223),
    d = r(61848),
    h = r(35835),
    p = r(33476);
  const u = e => {
    var t = e.iconClass,
      r = e.selected,
      n = e.onSelect,
      i = l()(t, "settings__item", {
        selected: r
      }),
      s = {
        fontSize: 16,
        padding: 3,
        margin: "3px 1px 1px 1px",
        display: "inline-block",
        height: 16
      };
    return o().createElement("i", {
      className: i,
      style: s,
      onClick: n
    });
  };
  r.dn(u);
  const g = e => {
    var t = e.label,
      r = e.width,
      n = e.major,
      i,
      s = {
        fontSize: 12,
        padding: n ? 3 : "3px 0",
        margin: n ? "3px 1px 1px 1px" : "3px 0 1px 0",
        fontWeight: n ? "bold" : void 0,
        display: "inline-block",
        height: 16,
        border: "1px solid transparent",
        textAlign: "left",
        width: r,
        verticalAlign: "top" == e.vAlign ? "top" : "baseline"
      };
    return o().createElement("span", {
      style: s
    }, t);
  };
  r.dn(g);
  var m = r(54281);
  const f = e => {
    var t = e.value,
      r = e.min,
      n = e.max,
      i = e.decimals,
      s = e.disableSlider,
      a = e.onValueChanged,
      l = void 0 === a ? () => {} : a,
      c,
      d = {
        fontSize: 12,
        padding: 3,
        margin: "3px 1px 1px 1px",
        display: "inline-block",
        height: 16,
        width: e.width
      },
      h = e => {
        l(e);
      },
      p = e => {
        l(e);
      };
    return o().createElement(m.A, {
      disableSlider: s,
      style: d,
      value: t,
      min: r,
      max: n,
      decimals: i,
      onValueChanging: p,
      onValueChanged: h
    });
  };
  r.dn(f);
  var y = r(22662),
    v = r(91335),
    b = r(98231),
    x = r(180),
    C = r(39314),
    S = r(91414),
    A = r(24829);
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
        src: this.props.src
      }), (0, n.A)(this, "bulb", void 0), (0, n.A)(this, "getBulbRef", e => {
        this.bulb = e;
      }), (0, n.A)(this, "handleAccessibilityChange", e => {
        this.props.onAccessibilityChange(e), this.setState({
          showAccessibility: !1
        });
      }), (0, n.A)(this, "baseDetailStyle", {
        display: "flex",
        flexDirection: "column",
        top: -70,
        left: 0,
        padding: 0,
        fontSize: 11,
        color: "var(--ui-text-muted, gray)",
        textAlign: "center",
        lineHeight: "18px",
        position: "relative"
      });
    }
    setPosition(e, t) {
      this.bulb && this.bulb.setPosition(e, t);
    }
    isExpandedDetail() {
      return this.bulb && this.bulb.isExpandedDetail();
    }
    collapseDetailView() {
      this.bulb.closeChildren();
    }
    render() {
      var e = {
          position: "static",
          left: 0,
          top: 0
        },
        t = null;
      this.props.inline || (t = o().createElement("div", {
        style: {
          textAlign: "left",
          padding: "0 4px",
          height: 30
        }
      }, o().createElement(g, {
        vAlign: "top",
        major: !0,
        label: "Align:",
        width: 40
      }), o().createElement(u, {
        key: "1",
        selected: "left" === this.props.align,
        iconClass: "fa fa-align-left",
        onSelect: () => {
          this.props.onAlignChanged("left");
        }
      }), o().createElement(u, {
        key: "2",
        selected: "center" === this.props.align,
        iconClass: "fa fa-align-center",
        onSelect: () => {
          this.props.onAlignChanged("center");
        }
      }), o().createElement(u, {
        key: "3",
        selected: "right" === this.props.align,
        iconClass: "fa fa-align-right",
        onSelect: () => {
          this.props.onAlignChanged("right");
        }
      })));
      var r = E(E({}, this.baseDetailStyle), {}, {
        top: this.props.inline ? -97 : -127
      });
      return o().createElement(p.A, {
        manuallyUpdate: !0,
        onExpandDetail: this.props.onExpandDetail,
        childPositionByBulbOriginalPos: !0,
        ref: this.getBulbRef,
        style: e
      }, o().createElement("detail", {
        className: "mt-common-dialog",
        onMouseDown: e => e.stopPropagation(),
        style: r,
        onDoubleClick: c.A.onDoubleClickStopPropagation
      }, o().createElement("div", {
        style: {
          textAlign: "left",
          padding: "0 4px",
          height: 30,
          width: 140
        }
      }, o().createElement(g, {
        major: !0,
        label: "Width:",
        width: 40
      }), o().createElement(f, {
        width: 25,
        min: 1,
        max: 1e4,
        decimals: 0,
        disableSlider: !0,
        value: this.props.size.width,
        onValueChanged: this.props.onWidthChanged,
        onMouseDown: e => {
          c.A.setCustomInfo(e, h.A.getBuilder().withFocusAcquired().withHandledCursorSelected().build());
        }
      }), o().createElement(g, {
        label: "px",
        width: 20
      })), o().createElement("div", {
        style: {
          textAlign: "left",
          padding: "0 4px",
          height: 30
        }
      }, o().createElement(g, {
        major: !0,
        label: "Height:",
        width: 40
      }), o().createElement(f, {
        width: 25,
        min: 1,
        max: 1e4,
        decimals: 0,
        disableSlider: !0,
        value: this.props.size.height,
        onValueChanged: this.props.onHeightChanged,
        onMouseDown: e => {
          c.A.setCustomInfo(e, h.A.getBuilder().withFocusAcquired().withHandledCursorSelected().build());
        }
      }), o().createElement(g, {
        label: "px",
        width: 20
      })), this.renderLock(), t, this.renderBorderSettings(), o().createElement("div", {
        style: {
          borderTop: "1px solid var(--ui-border, lightgray)",
          display: "flex",
          flexDirection: "row"
        }
      }, o().createElement("button", {
        style: {
          margin: 5,
          flex: 1
        },
        onClick: () => this.setState({
          showAccessibility: !0
        }),
        className: "btn-normal"
      }, "Accessibility"), o().createElement("button", {
        style: {
          margin: 5,
          flex: 1
        },
        onClick: this.props.onSwitchInlineContainer,
        className: "btn-normal"
      }, this.props.inline ? "To Container" : "To Inline")), this.renderAccessibility()));
    }
    renderBorderSettings() {
      var e = [{
          key: "none",
          value: "None"
        }, {
          key: "solid",
          value: "Solid"
        }, {
          key: "dotted",
          value: "Dotted"
        }, {
          key: "dashed",
          value: "Dashed"
        }],
        t = this.props.border,
        r = void 0 === t ? {
          color: C.A.blackArr,
          thickness: 1,
          type: "none"
        } : t;
      return o().createElement("div", {
        style: {
          textAlign: "left",
          padding: "0 4px",
          height: 30
        }
      }, o().createElement(g, {
        major: !0,
        label: "Border:",
        width: 40
      }), o().createElement(v.A, {
        width: 60,
        style: {
          display: "inline-block",
          marginLeft: 2
        },
        data: e,
        value: r.type,
        onChange: e => {
          "none" != e ? this.props.onBorderChange(E(E({}, r), {}, {
            type: e
          })) : this.props.onBorderChange(void 0);
        }
      }), o().createElement(b.A, {
        requestPickerSettings: this.props.fixedContextHandler.getMtFuncs().requestColorPickerSettings,
        disableNoColor: !0,
        stopPropagation: !0,
        style: {
          display: "inline-block",
          verticalAlign: "bottom",
          marginLeft: 5
        },
        value: r.color,
        onItemSelect: e => {
          this.props.onBorderChange(E(E({}, r), {}, {
            color: e
          }));
        }
      }), o().createElement(x.A, {
        style: {
          display: "inline-block",
          verticalAlign: "-5px",
          marginLeft: 5
        },
        value: r.thickness || 1,
        onItemSelect: e => {
          this.props.onBorderChange(E(E({}, r), {}, {
            thickness: e
          }));
        }
      }), o().createElement(S.A, {
        title: "Corner Radius",
        containerStyle: {
          display: "inline-flex"
        },
        unit: "",
        min: 0,
        max: 1e3,
        step: 1,
        value: this.props.cornerRadius,
        icon: A.A.cornerRadius({
          stroke: "var(--ui-text-muted, gray)",
          fill: "none",
          strokeWidth: 1,
          width: 21,
          height: 14,
          overflow: "visible"
        }),
        onValueChanged: e => this.props.onCornerRadiusChange(e)
      }));
    }
    toggleScaleOption() {
      var e = this.props.scaleOption;
      e && "width" != e && "height" != e ? this.props.onScaleOptionChanged("width") : this.props.onScaleOptionChanged("both");
    }
    renderAccessibility() {
      if (this.state.showAccessibility) return o().createElement(y.A, {
        info: this.props.accessibility,
        onOk: this.handleAccessibilityChange,
        onClose: () => this.setState({
          showAccessibility: !1
        })
      });
    }
    renderLock() {
      var e = this.props.scaleOption;
      return e && "width" != e && "height" != e ? o().createElement("div", {
        style: {
          position: "absolute",
          right: 105,
          top: 0,
          height: 60
        }
      }, o().createElement("svg", {
        onMouseDown: () => this.toggleScaleOption(),
        className: "settings__item",
        style: {
          width: 13,
          height: 13,
          position: "absolute",
          top: 22,
          right: -4,
          padding: 3
        },
        viewBox: "0 0 576 512"
      }, o().createElement("path", {
        d: "M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0z"
      }))) : o().createElement("div", {
        style: {
          position: "absolute",
          right: 105,
          top: 0,
          height: 60
        }
      }, o().createElement("div", {
        style: {
          width: 5,
          height: 20,
          position: "absolute",
          top: 15,
          right: 20,
          borderTop: "1px solid var(--ui-border, gray)",
          borderRight: "1px solid var(--ui-border, gray)"
        }
      }), o().createElement("div", {
        style: {
          width: 5,
          height: 20,
          position: "absolute",
          bottom: 12,
          right: 20,
          borderBottom: "1px solid var(--ui-border, gray)",
          borderRight: "1px solid var(--ui-border, gray)"
        }
      }), o().createElement("svg", {
        onMouseDown: () => this.toggleScaleOption(),
        className: "settings__item selected",
        style: {
          width: 13,
          height: 13,
          position: "absolute",
          top: 22,
          right: -4,
          padding: 3
        },
        viewBox: "0 0 448 512"
      }, o().createElement("path", {
        d: "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
      })));
    }
  }
  var O = r(41214),
    D = r(27812),
    P = r(39600),
    M = r(91636),
    I = r(3531),
    T = r(31595);
  class L extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {
        progress: 0
      }), (0, n.A)(this, "uploadOperation", new M.uG());
    }
    componentDidMount() {
      this.props.file && T.A.uploadImage(this.props.file, e => {
        this.uploadOperation.cancelled || this.setState({
          progress: e
        });
      }, this.uploadOperation).then(e => {
        var t = e.name,
          r = e.folderName;
        this.uploadOperation.check(), this.props.onUploadDone(D.A.getComponentUrl(t, r));
      }).catch(() => {
        this.uploadOperation.cancelled || this.props.onUploadFailed();
      });
    }
    componentWillUnmount() {
      this.uploadOperation.cancel();
    }
    render() {
      return o().createElement(I.Z, {
        shape: "circle",
        progress: this.state.progress,
        text: Math.round(100 * this.state.progress) + "%",
        strokeWidth: 10,
        style: {
          position: "absolute",
          width: 50,
          height: 50,
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          maxWidth: "100%",
          maxHeight: "100%",
          fontSize: 12
        }
      });
    }
  }
  var R = r(84258),
    B = r(73894),
    F = r(49099),
    j = r(31052),
    _ = r(60693),
    N = r(40383),
    z = r(19539);
  function H(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function W(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? H(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : H(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var V = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    U = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 512 512'><path style='fill:lightgray;' d='M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z'/></svg>";
  class q extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "componentMounted", !1), (0, n.A)(this, "imageContent", void 0), (0, n.A)(this, "imageRef", void 0), (0, n.A)(this, "imageContainer", void 0), (0, n.A)(this, "imageSettingsRef", void 0), (0, n.A)(this, "changeButtonRef", void 0), (0, n.A)(this, "fullscreenIconRef", void 0), (0, n.A)(this, "handleWithChanged", e => {
        var t = this.props.data;
        if ("both" == this.props.data.scaleOption) return this.props.onDataChanged(W(W({}, t), {}, {
          imageSize: W(W({}, t.imageSize), {}, {
            width: e
          })
        }), !1);
        var r = this.getImageNaturalSize(),
          n = e * r.height / r.width;
        this.props.onDataChanged(W(W({}, t), {}, {
          imageSize: {
            width: e,
            height: n
          }
        }), !1);
      }), (0, n.A)(this, "handleHeightChanged", e => {
        var t = this.props.data;
        if ("both" == this.props.data.scaleOption) return this.props.onDataChanged(W(W({}, t), {}, {
          imageSize: W(W({}, t.imageSize), {}, {
            height: e
          })
        }), !1);
        var r = this.getImageNaturalSize(),
          n = e * r.width / r.height;
        this.props.onDataChanged(W(W({}, t), {}, {
          imageSize: {
            width: n,
            height: e
          }
        }), !1);
      }), (0, n.A)(this, "setNewImgSizeData", (e, t) => {
        var r = this.getImageNaturalSize(),
          n = t.width,
          i = t.height;
        switch (e) {
          case "height":
            n = z.A.round2(i * r.width / r.height);
            break;
          case "width":
            i = z.A.round2(n * r.height / r.width);
        }
        var o = this.props.data,
          s = o.scaleOption,
          a = o.imageSize;
        if (s != e || z.A.round2(a.width) != z.A.round2(n) || z.A.round2(a.height) != z.A.round2(i)) {
          var l = d.A.set(this.props.data, "scaleOption", e);
          this.props.onDataChanged(W(W({}, l), {}, {
            imageSize: {
              width: n,
              height: i
            }
          }), !0);
        }
      }), (0, n.A)(this, "handleResized", e => {
        this.setNewImgSizeData(this.props.data.scaleOption, e);
      }), (0, n.A)(this, "setAlignments", e => {
        this.props.onDataChanged(d.A.set(this.props.data, "align", e), !1);
      }), (0, n.A)(this, "handleSetImageUrl", e => {
        this.props.onDataChanged(d.A.set(this.props.data, "url", e), !1);
      }), (0, n.A)(this, "getImageSettings", e => {
        this.imageSettingsRef = e;
      }), (0, n.A)(this, "getChangeButtonSettings", e => {
        this.changeButtonRef = e;
      }), (0, n.A)(this, "onImageExpandDetail", () => {
        this.jqueryShowChangeImageButton(!1);
      }), (0, n.A)(this, "onRequestImageLibrary", () => {
        this.props.fixedContextHandler.getMtFuncs().requestImageSelection(this.props.data.url, this.handleSetImageUrl);
      }), (0, n.A)(this, "handleAccessibilityChange", e => {
        this.props.onDataChanged(W(W({}, this.props.data), {}, {
          accessibility: e
        }), !1);
      }), (0, n.A)(this, "handleBorderChange", e => {
        this.props.onDataChanged(W(W({}, this.props.data), {}, {
          border: e
        }), !1);
      }), (0, n.A)(this, "handleCornerRadiusChange", e => {
        this.props.onDataChanged(W(W({}, this.props.data), {}, {
          cornerRadius: e
        }), !1);
      }), (0, n.A)(this, "handleFullscreenIconRef", e => {
        this.fullscreenIconRef = e;
      }), (0, n.A)(this, "handleImageLoaded", () => {
        this.setState({
          isLoading: !1
        }), this.componentMounted && this.setNewImgSizeData(this.props.data.scaleOption, this.getImageSizeFromProp());
      }), (0, n.A)(this, "handleImageError", e => {
        console.log(e.nativeEvent), this.setState({
          isLoading: !1
        });
      }), (0, n.A)(this, "handleMouseDown", e => {
        var t;
        c.A.getCustomEventInfo(e) || c.A.setCustomInfo(e, h.A.getBuilder().withHandledCursorSelected().build()), this.imageSettingsRef && this.imageSettingsRef.isExpandedDetail() && (this.imageSettingsRef.collapseDetailView(), this.jqueryShowChangeImageButton(!0));
      }), (0, n.A)(this, "getImageRef", e => {
        this.imageRef = e;
      }), (0, n.A)(this, "handleUploadDone", e => {
        P.A.lastImagesInfo = null, this.handleSetImageUrl(e), this.setState({
          uploadFile: null
        });
      }), (0, n.A)(this, "handleUploadFailed", () => {
        this.setState({
          uploadFile: null
        }), this.props.fixedContextHandler.getMtFuncs().showMessage("Upload Image Failed!", "error");
      }), this.state = {
        isLoading: !0
      };
    }
    getImageSizeDefault() {
      return {
        width: parseInt(this.props.width, 10),
        height: parseInt(this.props.height, 10)
      };
    }
    componentWillReceiveProps(e) {
      this.isUrlChanged(e.data.url, this.props.data.url) && this.setState({
        isLoading: !0
      });
    }
    componentDidMount() {
      if (this.componentMounted = !0, this.calculateSettingsPosition(), q.requestFileUpload) {
        if (R.A.isUploadHandleByService()) {
          var e = q.requestFileUpload.path;
          B.A.getService().requestFileUploadFromService(e, q.requestFileUpload).then(e => {
            this.handleSetImageUrl(e);
          });
        } else this.setState({
          uploadFile: q.requestFileUpload
        });
        q.requestFileUpload = null;
      }
    }
    componentDidUpdate() {
      this.calculateSettingsPosition();
    }
    calculateSettingsPosition() {
      if (this.props.isSelected && this.imageSettingsRef) {
        var e = _.T.getBCRectToElement(this.imageContent, this.imageContainer, this.props.getDzContainer());
        this.imageSettingsRef.setPosition(e.left - 25, e.top - 29), this.changeButtonRef && (s.hS(this.changeButtonRef, "left", e.left - 25 + 25 + 30), s.hS(this.changeButtonRef, "top", e.top - 29)), this.fullscreenIconRef && (s.hS(this.fullscreenIconRef, "left", e.left - 25 + 25 + 2), s.hS(this.fullscreenIconRef, "top", e.top - 29));
      }
    }
    renderGhostViewer() {
      if (this.props.isSelected) return o().createElement(F._, {
        objectSize: this.getImageSizeFromProp(),
        scaleOption: this.props.data.scaleOption,
        selectOnly: this.props.selectOnly,
        onResized: this.handleResized,
        getDzContainer: this.props.fixedContextHandler.getMtFuncs().getDocZoomContainer
      });
    }
    isUrlChanged(e, t) {
      var r, n;
      return D.A.getComponentUrlToRawUrl(e) != D.A.getComponentUrlToRawUrl(t);
    }
    renderLoadingOverlay() {
      if (this.state.isLoading) return o().createElement(O.A, {
        onSelected: this.props.onSelected
      });
    }
    jqueryShowChangeImageButton(e) {
      s.hS(this.changeButtonRef, "display", e ? "block" : "none"), s.hS(this.fullscreenIconRef, "display", e ? "block" : "none");
    }
    renderBulb(e) {
      var t;
      if (this.props.selectOnly) return null;
      if (!this.props.isSelected) return null;
      var r = this.props.data,
        n = r.url,
        i = r.align,
        s = r.scaleOption,
        a = r.accessibility;
      return o().createElement("div", {
        style: N.a.applyReverseZoomStyle({
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          left: "50%",
          top: -28,
          transform: "translateX(-50%)",
          zIndex: 9999
        }, e, "center top")
      }, o().createElement(k, {
        fixedContextHandler: this.props.fixedContextHandler,
        dzContainer: e,
        key: "1",
        cornerRadius: null !== (t = this.props.data.cornerRadius) && void 0 !== t ? t : 0,
        onCornerRadiusChange: this.handleCornerRadiusChange,
        border: this.props.data.border,
        onBorderChange: this.handleBorderChange,
        size: this.getImageSizeFromProp(),
        onSwitchInlineContainer: this.props.onSwitchInlineContainer,
        onExpandDetail: this.onImageExpandDetail,
        ref: this.getImageSettings,
        accessibility: a,
        onAccessibilityChange: this.handleAccessibilityChange,
        inline: this.props.inline,
        src: n,
        align: i,
        scaleOption: s,
        onWidthChanged: this.handleWithChanged,
        onHeightChanged: this.handleHeightChanged,
        onImageUrlChanged: this.handleSetImageUrl,
        onAlignChanged: this.setAlignments,
        onScaleOptionChanged: e => this.setNewImgSizeData(e, this.getImageSizeFromProp())
      }), o().createElement("div", {
        key: "fs",
        ref: this.handleFullscreenIconRef,
        style: {
          border: "1px solid var(--ui-border, lightgray)",
          background: "var(--ui-surface-muted, #f9f9f9)",
          marginLeft: 5
        },
        onClick: () => {
          this.setState({
            fullscreen: !0
          });
        }
      }, A.A.fullScreen({
        width: 22,
        height: 22,
        cursor: "pointer",
        fill: "var(--ui-text-muted, gray)",
        stroke: "none",
        display: "block"
      })), R.A.allowToChangeImage() && o().createElement("button", {
        key: "2",
        className: "btn-normal btn-large no-print",
        style: {
          marginLeft: 5,
          background: "var(--ui-surface-muted, #f7f7f7)",
          width: 100
        },
        onClick: this.onRequestImageLibrary,
        ref: this.getChangeButtonSettings
      }, " Change Image "));
    }
    getImageSizeFromProp() {
      return this.props.data.imageSize ? this.props.data.imageSize : this.getImageSizeDefault();
    }
    getImageUrl() {
      return this.state.uploadFile ? V : this.props.data.url ? D.A.getComponentUrlToRawUrl(this.props.data.url) : U;
    }
    getImageNaturalSize() {
      return this.imageRef && this.imageRef.naturalHeight && this.imageRef.naturalWidth ? {
        width: this.imageRef.naturalWidth,
        height: this.imageRef.naturalHeight
      } : this.getImageSizeFromProp();
    }
    renderInlineUpload() {
      if (this.state.uploadFile) return o().createElement(L, {
        file: this.state.uploadFile,
        onUploadDone: this.handleUploadDone,
        onUploadFailed: this.handleUploadFailed
      });
    }
    buildBorderStyle() {
      var e = this.props.data.border;
      if (e && "none" != e.type) return "".concat(e.thickness, "px ").concat(e.type, " ").concat(C.A.getHtmlColor(e.color, "black"));
    }
    renderFullImageView() {
      if (this.state.fullscreen) return o().createElement(j.G, {
        fullUrl: this.getImageUrl(),
        imageName: "",
        onClose: () => {
          this.setState({
            fullscreen: void 0
          });
        }
      });
    }
    render() {
      var e,
        t = this.getImageUrl(),
        r = l()({
          inline: this.props.inline
        }),
        n = W(W({}, this.getImageSizeFromProp()), {}, {
          position: "relative"
        }),
        i = this.props.data.accessibility || {},
        s = this.props.getDzContainer();
      return o().createElement("image-viewer", {
        class: r,
        onMouseDown: this.handleMouseDown
      }, o().createElement("image-container", {
        class: this.props.data.align,
        ref: e => this.imageContainer = e
      }, o().createElement("div", {
        className: "image-content",
        ref: e => {
          this.imageContent = e;
        },
        style: n
      }, o().createElement("img", {
        title: i.title,
        alt: i.description,
        ref: this.getImageRef,
        src: t,
        style: {
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          border: this.buildBorderStyle(),
          borderRadius: null !== (e = this.props.data.cornerRadius) && void 0 !== e ? e : 0
        },
        onLoad: this.handleImageLoaded,
        onError: this.handleImageError,
        onMouseDown: e => {
          this.props.onSelected(e);
        }
      }), this.renderGhostViewer(), this.renderLoadingOverlay()), this.renderBulb(s), this.renderInlineUpload(), this.renderFullImageView()));
    }
  }
  (0, n.A)(q, "requestFileUpload", null);
};
