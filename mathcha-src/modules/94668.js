/* module 94668 — 7823 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => y
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(36223),
    a = r(32485),
    l = r.n(a),
    c = r(32725),
    d = r(84258),
    h = r(55451),
    p = r(12880),
    u = r(81927),
    g = r(88806);
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
  class y extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "dialogElement", void 0), (0, n.A)(this, "focusScope", void 0), (0, n.A)(this, "mounted", !1), (0, n.A)(this, "previousFocus", document.activeElement), (0, n.A)(this, "handleEscape", e => {
        var t, r;
        27 === e.event.keyCode && (e.stopOther = !0, this.props.preventCloseEscape || this.isCloseDisabled() || null === (t = (r = this.props).onClose) || void 0 === t || t.call(r, !0));
      }), (0, n.A)(this, "blockContent", e => {
        if (this.props.contentDisabled) {
          var t = e.keyCode;
          9 !== t && 27 !== t && (e.preventDefault(), e.stopPropagation());
        }
      }), (0, n.A)(this, "handleOverlayMouseDown", e => {
        this.props.backDrop && !this.isCloseDisabled() && (this.props.onClose || this.nope)(!1), e.preventDefault(), e.stopPropagation();
      }), (0, n.A)(this, "onMouseDown", e => {
        e.stopPropagation(), this.props.onClick && this.props.onClick();
      }), (0, n.A)(this, "handleCancel", e => {
        e.stopPropagation(), e.preventDefault(), !this.isCloseDisabled() && this.props.onClose && this.props.onClose(!1);
      }), (0, n.A)(this, "handleHeaderMouseDown", e => {
        var t;
        null === (t = this.resizeMovingHdl) || void 0 === t || t.containerMoveMouseDown(e);
      }), (0, n.A)(this, "handleResizeMouseDown", (e, t) => {
        var r;
        null === (r = this.resizeMovingHdl) || void 0 === r || r.containerResizeMouseDown(e, t);
      }), this.state = {
        opacity: this.props.showlyShow ? 0 : 1
      }, this.props.resizeAndMoveable && (this.resizeMovingHdl = new p.T(this.toHdlPos(this.props)));
    }
    componentWillReceiveProps(e) {
      e.resizeAndMoveable ? this.resizeMovingHdl ? this.resizeMovingHdl.updateProps(this.toHdlPos(e)) : this.resizeMovingHdl = new p.T(this.toHdlPos(e)) : this.resizeMovingHdl && (this.resizeMovingHdl.dispose(), this.resizeMovingHdl = void 0);
    }
    toHdlPos(e) {
      return {
        dialogPos: e.resizeAndMoveable.pos,
        dialogSize: e.resizeAndMoveable.size,
        onPosSizeChange: e.onPosSizeChange
      };
    }
    componentDidMount() {
      this.mounted = !0, this.notifyShow(!0), c.A.stack(this.handleEscape), this.props.noOverlay || (this.focusScope = new g.Q(), this.focusScope.mount(this.dialogElement, this.previousFocus, this.props.initialFocus)), this.props.showlyShow && h.A.next(() => {
        this.mounted && this.setState({
          opacity: 1
        });
      });
    }
    componentDidUpdate(e) {
      var t;
      e.noOverlay !== this.props.noOverlay && (this.props.noOverlay ? (null === (t = this.focusScope) || void 0 === t || t.unmount(), this.focusScope = void 0) : (this.focusScope = new g.Q(), this.focusScope.mount(this.dialogElement, document.activeElement, this.props.initialFocus)));
    }
    componentWillUnmount() {
      var e, t;
      this.mounted = !1, this.notifyShow(!1), null === (e = this.resizeMovingHdl) || void 0 === e || e.dispose(), c.A.remove(this.handleEscape), null === (t = this.focusScope) || void 0 === t || t.unmount();
    }
    isCloseDisabled() {
      return this.props.closeDisabled || this.props.busy && !this.props.allowCloseWhileBusy;
    }
    renderFooterContent() {
      return this.props.renderFooterContent ? this.props.renderFooterContent() : null;
    }
    nope() {}
    notifyShow(e) {
      this.props.notifyShow && this.props.notifyShow(e);
    }
    getModalClassName() {
      return this.props.className;
    }
    renderHeader() {
      if (this.props.renderHeader) return this.props.renderHeader();
      if (!this.props.headerHidden) {
        var e = this.props.headerStyle;
        return this.props.resizeAndMoveable && (e = f({
          cursor: "move"
        }, this.props.headerStyle)), o().createElement("modal-header", {
          onMouseDown: this.handleHeaderMouseDown,
          style: e
        }, o().createElement("header-title", {
          style: {
            flex: 1
          }
        }, this.props.title), this.props.renderHeaderActions ? o().createElement("header-actions", {
          onMouseDown: e => e.stopPropagation()
        }, this.props.renderHeaderActions()) : null, this.props.hideCloseButton ? null : o().createElement("button", {
          type: "button",
          className: "ui-dialog-close",
          "aria-label": "Close dialog",
          disabled: this.isCloseDisabled(),
          onClick: this.handleCancel
        }, " ", o().createElement("i", {
          className: "fa fa-times",
          "aria-hidden": "true"
        }), " "));
      }
    }
    renderResizeArea() {
      if (this.resizeMovingHdl) return u.k.renderResizeArea(this.handleResizeMouseDown);
    }
    render() {
      var e,
        t = f({
          opacity: 0,
          cursor: d.A.isMobileOrTablet() ? "pointer" : void 0,
          display: this.props.noOverlay ? "none" : void 0
        }, this.props.overlayStyle),
        r = f({
          opacity: this.state.opacity,
          transition: "opacity 0.3s ease-in-out"
        }, this.props.rootStyle),
        n = null === (e = this.props.style) || void 0 === e ? void 0 : e.padding,
        i = f(f({}, "number" == typeof n ? {
          "--ui-dialog-content-padding": n + "px"
        } : {}), this.props.style);
      return this.props.noOverlay && (r.width = 0, r.height = 0), o().createElement("modal-dialog", {
        style: r,
        class: l()("no-print", this.getModalClassName(), "ui-dialog-size-" + (this.props.size || "large"), "ui-dialog-scroll-" + (this.props.scroll || "body")),
        onDoubleClick: s.A.onDoubleClickStopPropagation,
        onMouseDown: this.onMouseDown
      }, o().createElement("div", {
        className: "modal-dialog-transparent",
        style: t,
        onMouseDown: this.handleOverlayMouseDown
      }), o().createElement("modal-container", {
        class: "mt-common-dialog",
        style: i,
        ref: e => this.dialogElement = e,
        role: "dialog",
        "aria-modal": this.props.noOverlay ? void 0 : "true",
        "aria-busy": this.props.busy || void 0,
        "aria-label": this.props.ariaLabel || this.props.title || "Dialog",
        tabIndex: -1
      }, this.renderHeader(), o().createElement("modal-content", {
        style: this.props.contentStyle,
        onMouseDownCapture: this.blockContent,
        onClickCapture: this.blockContent,
        onKeyDownCapture: this.blockContent
      }, this.props.children), o().createElement("modal-footer", {
        style: this.props.footerStyle,
        class: l()({
          "ui-dialog-footer-unseparated": !1 === this.props.footerSeparator || this.props.footerProgressing
        })
      }, this.renderFooterContent()), this.renderResizeArea()));
    }
  }
};
