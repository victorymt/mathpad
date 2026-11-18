/* module 29691 — 10313 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => b
  });
  var n = r(64467),
    i = r(48440),
    o = r(25742),
    s = r(40927),
    a = r.n(s),
    l = r(36223),
    c = r(49099),
    d = r(33476);
  class h {
    constructor() {
      (0, n.A)(this, "showSettings", !1);
    }
  }
  const p = new h();
  var u = r(55451),
    g = r(40383);
  function m(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function f(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? m(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class y extends o.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "video-container-symbol"), (0, n.A)(this, "bulbRef", void 0), (0, n.A)(this, "state", {}), (0, n.A)(this, "handleSelectThisComponent", e => {
        this.props.onSelectedChanged({
          controlled: !0
        });
      }), (0, n.A)(this, "handleResize", e => {
        var t = f(f({}, this.props.data), {}, {
          size: e
        });
        this.props.onDataChanged(t);
      }), (0, n.A)(this, "handleOpenDetail", () => {
        this.setState({
          inEditMode: !0,
          youtubeLink: this.props.data.link || ""
        }), this.isControlledSelected() || this.selectMe();
      }), (0, n.A)(this, "handleCloseDetail", () => {
        this.setState({
          inEditMode: !1
        });
      }), (0, n.A)(this, "applyChange", () => {
        var e = f(f({}, this.props.data), {}, {
          link: this.state.youtubeLink
        });
        this.props.onDataChanged(e, {
          focusAcquired: !0,
          isOneLineChanged: !0
        });
      }), (0, n.A)(this, "handleLinkChange", e => {
        this.setState({
          youtubeLink: e.currentTarget.value
        });
      }), (0, n.A)(this, "handleCloseSettings", () => {
        this.bulbRef && this.bulbRef.closeChildren();
      }), (0, n.A)(this, "handleBulbRef", e => {
        this.bulbRef = e;
      }), (0, n.A)(this, "handleDeletelMouseDown", e => {
        e.stopPropagation(), e.preventDefault(), this.isControlledSelected() || this.selectMe(), u.A.waitABit(() => {
          this.getMtFuncs().requestDelete();
        });
      }), (0, n.A)(this, "handleMouseEnter", () => {
        this.setState({
          mouseOnContainer: !0
        });
      }), (0, n.A)(this, "handleMouseLeave", () => {
        this.setState({
          mouseOnContainer: !1
        });
      });
    }
    getCompositeBlockStyle() {
      return f(f({}, super.getCompositeBlockStyle()), {}, {
        display: "block"
      });
    }
    componentDidUpdate(e) {
      this.props.selected == e.selected || this.isControlledSelected() || this.state.inEditMode && (this.setState({
        inEditMode: !1
      }), this.bulbRef && this.bulbRef.closeChildren());
    }
    renderOverlay() {
      if (this.inDesignMode()) return a().createElement("div", {
        onMouseDown: this.handleSelectThisComponent,
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          cursor: "default"
        }
      });
    }
    componentDidMount() {
      super.componentDidMount(), p.showSettings && (p.showSettings = !1, this.setState({
        inEditMode: !0
      }), u.A.waitABit(() => {
        this.bulbRef && this.bulbRef.showChildren();
      }));
    }
    inDesignMode() {
      return this.state.inEditMode && this.isControlledSelected();
    }
    renderResizeBox() {
      if (this.inDesignMode()) return a().createElement(c._, {
        onOverlayMouseDown: this.handleSelectThisComponent,
        objectSize: this.props.data.size,
        scaleOption: "both",
        selectOnly: !1,
        onResized: this.handleResize,
        getDzContainer: this.getDzContainer
      });
    }
    selectMe() {
      this.props.onSelectedChanged({
        controlled: !0
      }, {
        focusAcquired: !0
      });
    }
    renderSettings() {
      if (this.shouldRenderBulb()) {
        var e = this.getDzContainer();
        return a().createElement("div", {
          style: g.a.applyReverseZoomStyle({
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 1
          }, e, "right bottom")
        }, a().createElement("div", {
          onMouseDown: this.handleDeletelMouseDown,
          style: {
            position: "absolute",
            left: -30,
            top: -25,
            background: "var(--ui-surface-muted, #f7f7f7)",
            border: "1px solid var(--ui-border, lightgray)",
            padding: "2px 5px",
            fontSize: 15,
            cursor: "pointer",
            color: "#ce0303",
            display: this.state.inEditMode ? "none" : void 0
          }
        }, a().createElement("i", {
          className: "fa fa-trash"
        })), a().createElement(d.A, {
          key: "settings",
          ref: this.handleBulbRef,
          onExpandDetail: this.handleOpenDetail,
          onCloseDetail: this.handleCloseDetail,
          style: {
            left: 0,
            top: -25
          }
        }, a().createElement("setting", {
          className: "mt-common-dialog no-print",
          style: {
            left: -2,
            top: -44,
            position: "absolute",
            fontSize: 12,
            paddingLeft: 10,
            paddingRight: 10,
            color: "var(--ui-text-muted, gray)"
          },
          onMouseDown: l.A.focusAndCursorSelectAcquired,
          onDoubleClick: l.A.onDoubleClickStopPropagation
        }, a().createElement("span", null, "Link: "), a().createElement("input", {
          value: this.state.youtubeLink,
          onKeyDown: e => {
            13 == e.keyCode && this.applyChange(), 27 == e.keyCode && this.handleCloseSettings();
          },
          placeholder: "Youtube link",
          style: {
            width: 200
          },
          onChange: this.handleLinkChange
        }), a().createElement("button", {
          style: {
            marginLeft: 5,
            width: 60,
            display: "inline-block"
          },
          onClick: this.applyChange,
          className: "btn-normal"
        }, "Apply"), a().createElement("button", {
          style: {
            marginLeft: 5,
            width: 60,
            display: "inline-block"
          },
          onClick: this.handleCloseSettings,
          className: "btn-normal"
        }, "Close"))));
      }
    }
    shouldRenderBulb() {
      return !!this.allowEdit() && (this.state.mouseOnContainer || this.state.inEditMode);
    }
    renderBulbOverlay() {
      if (this.shouldRenderBulb()) return a().createElement("div", {
        style: {
          position: "absolute",
          left: 0,
          top: -30,
          height: 30,
          background: "transparent",
          width: "100%"
        }
      });
    }
    youtube_parser(e) {
      var t = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/,
        r = e.match(t);
      return !(!r || 11 != r[7].length) && r[7];
    }
    getYoutubeId() {
      var e = this.props.data.link || "";
      return this.youtube_parser(e);
    }
    buildYoutubeEmbeddedUrl() {
      var e = this.getYoutubeId();
      return e ? "https://www.youtube.com/embed/".concat(e) : "";
    }
    renderFrame() {
      var e;
      return this.buildYoutubeEmbeddedUrl() ? a().createElement("iframe", {
        style: {
          pointerEvents: this.inDesignMode() ? "none" : void 0
        },
        sandbox: "allow-scripts allow-same-origin allow-presentation",
        frameBorder: "0",
        allowFullScreen: !0,
        width: this.props.data.size.width,
        height: this.props.data.size.height,
        src: this.buildYoutubeEmbeddedUrl()
      }) : a().createElement("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          color: "lightgray",
          background: "white",
          outline: "1px solid lightgray"
        }
      }, "Empty or Invalid Youtube Link");
    }
    renderComponent() {
      return a().createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      }, a().createElement("div", {
        style: {
          width: this.props.data.size.width,
          height: this.props.data.size.height,
          position: "relative"
        }
      }, this.renderFrame(), this.renderOverlay(), this.renderResizeBox(), this.renderSettings()), this.renderBulbOverlay());
    }
  }
  class v extends i.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    toModel() {
      throw new Error("Method not implemented.");
    }
    getViewComponent() {
      return y;
    }
    getLatextName() {
      return "\\video-container";
    }
    getModel() {
      var e = this.getModelFromStructure({}, this.getLatextName());
      return e.size = {
        width: 320,
        height: 180
      }, p.showSettings = !0, e;
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        keyInsertOnSelection: "value",
        elements: {}
      };
    }
    getSymbolInfo() {
      return [this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: "Youtube Video",
        description: "Youtube Video",
        height: 25,
        singleBlockLine: !0,
        selectControlled: !0,
        insertInTextModeOnly: !0
      })];
    }
    toLatex() {
      return "";
    }
  }
  const b = new v();
};
