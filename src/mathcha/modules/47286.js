/* module 47286 — 7086 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => f
  });
  var n = r(80045),
    i = r(64467),
    o = r(40927),
    s = r.n(o),
    a = r(32485),
    l = r.n(a),
    c = r(94668),
    d = r(45862),
    h = r(85020),
    p = r(96971),
    u = ["style", "headerStyle", "contentStyle", "footerStyle"];
  function g(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function m(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? g(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class f extends s().Component {
    constructor(e) {
      super(e), (0, i.A)(this, "raiseCancelOrClose", e => {
        this.shouldDisableButtons() || this.props.isCancelDisabled || this.props.closeDisabled || e && this.props.disableEscapeToClose || (this.props.onCancel && this.props.onCancel(), this.props.onClose && this.props.onClose !== this.props.onCancel && this.props.onClose(e));
      }), (0, i.A)(this, "renderFooterContent", () => {
        if (this.props.renderFooterContent) return this.props.renderFooterContent();
        var e = m(m({}, v), this.props.footerStyle),
          t;
        return (this.props.centerButtons || this.isYesNoOrCancel()) && (e.flexDirection = "column"), this.isYesNoOrCancel() && (e.justifyContent = "center", e.flexDirection = "column", t = {
          textAlign: "center",
          paddingBottom: 10
        }), s().createElement("div", {
          style: e
        }, s().createElement(p.d, {
          message: this.props.message && this.getMsgString(this.props.message),
          tone: this.props.isMessageOk ? "success" : this.props.isMessageWarning ? "warning" : "error",
          busy: !!this.props.isProgressing || this.props.isDocumentLoading,
          progress: "object" == typeof this.props.isProgressing ? this.props.isProgressing.progress : void 0,
          style: m(m({}, t), this.props.messageStyle),
          progressStyle: this.props.thinLoaderStyle
        }), s().createElement(h.i, {
          align: !1 === this.props.centerButtons ? "end" : "center"
        }, this.getCancelButton(), this.getNoButton(), this.getApplyButton(), this.getOkOrYesButton()));
      });
    }
    isOkDisabled() {
      return this.props.isOkDisabled;
    }
    getMsgString(e) {
      return "string" == typeof e ? e : JSON.stringify(e);
    }
    shouldDisableButtons() {
      return !this.props.preventDisableButtonOnProgressing && (!!this.props.isProgressing || !!this.props.busy);
    }
    getCancelButton() {
      if (!1 !== this.props.showCancel && "YesNo" != this.props.dialogType) {
        var e = this.props.cancelLabel ? this.props.cancelLabel : "Cancel";
        return s().createElement(d.$, {
          dialogAction: !0,
          disabled: this.shouldDisableButtons() || this.props.isCancelDisabled,
          style: this.props.cancelStyle,
          className: "cancel",
          onClick: () => this.raiseCancelOrClose(!1)
        }, " ", e, " ");
      }
    }
    isYesNoOrCancel() {
      return "YesNo" == this.props.dialogType || "YesNoCancel" == this.props.dialogType;
    }
    getOkOrYesButton() {
      if (!1 === this.props.showOk) return null;
      var e = this.props.okLabel || (this.isYesNoOrCancel() ? "Yes" : "OK");
      return s().createElement(d.$, {
        dialogAction: !0,
        variant: this.props.okVariant || ("Close" === e || "Done" === e ? "normal" : "primary"),
        disabled: this.shouldDisableButtons() || this.isOkDisabled(),
        style: this.props.okStyle,
        className: "ok",
        onClick: () => {
          var e, t;
          this.shouldDisableButtons() || this.isOkDisabled() || null === (e = (t = this.props).onOk) || void 0 === e || e.call(t);
        }
      }, " ", e, " ");
    }
    getApplyButton() {
      if (!this.props.onApply || !1 === this.props.showApply) return null;
      var e = this.props.applyLabel || "Apply";
      return s().createElement(d.$, {
        dialogAction: !0,
        disabled: this.shouldDisableButtons() || this.isOkDisabled(),
        style: this.props.applyStyle,
        className: "apply",
        onClick: () => {
          var e, t;
          this.shouldDisableButtons() || this.isOkDisabled() || null === (e = (t = this.props).onApply) || void 0 === e || e.call(t);
        }
      }, " ", e, " ");
    }
    getNoButton() {
      if (!1 !== this.props.showNo && this.isYesNoOrCancel()) {
        var e = this.props.noLabel ? this.props.noLabel : "No";
        return s().createElement(d.$, {
          dialogAction: !0,
          disabled: this.shouldDisableButtons(),
          className: "no",
          onClick: () => {
            var e, t;
            this.shouldDisableButtons() || null === (e = (t = this.props).onNo) || void 0 === e || e.call(t);
          }
        }, " ", e, " ");
      }
    }
    getModalClassName() {
      return l()("swift", this.props.className);
    }
    render() {
      if (!this.props.show) return s().createElement("div", {
        style: {
          display: "none"
        }
      });
      var e = this.props,
        t = e.style,
        r = e.headerStyle,
        i = e.contentStyle,
        o = e.footerStyle,
        a = (0, n.A)(e, u),
        l = m(m({}, y), t);
      return this.props.grayBackground && (l.backgroundColor = "var(--ui-surface-muted, #f7f7f7)"), s().createElement(c.A, m(m({}, a), {}, {
        size: this.props.size || "medium",
        busy: this.props.busy || !!this.props.isProgressing,
        footerProgressing: this.props.footerProgressing || !!this.props.isProgressing || this.props.isDocumentLoading,
        allowCloseWhileBusy: this.props.preventDisableButtonOnProgressing || this.props.allowCloseWhileBusy,
        onClose: this.raiseCancelOrClose,
        closeDisabled: this.props.closeDisabled || this.props.isCancelDisabled || this.shouldDisableButtons(),
        preventCloseEscape: this.props.preventCloseEscape || this.props.disableEscapeToClose,
        style: l,
        contentStyle: m({
          fontSize: 12
        }, i),
        headerStyle: r,
        footerStyle: m({
          display: "block"
        }, o),
        headerHidden: !!this.props.headerHidden,
        className: this.getModalClassName(),
        renderFooterContent: this.renderFooterContent
      }));
    }
  }
  var y = {
      minHeight: 0,
      height: "auto",
      backgroundColor: "var(--ui-surface, white)",
      border: "none"
    },
    v = {
      display: "flex",
      position: "relative",
      justifyContent: "flex-end",
      flexDirection: "column"
    };
};
