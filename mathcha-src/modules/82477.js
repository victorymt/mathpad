/* module 82477 — 4079 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => d
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(58907),
    a = r(47286);
  function l(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? l(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class d extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "progressing", !1), (0, n.A)(this, "mounted", !1), (0, n.A)(this, "state", {
        errorMessage: "",
        isProgressing: !1
      }), (0, n.A)(this, "onProgressing", e => {
        this.progressing = e, this.setState({
          isProgressing: e
        });
      }), (0, n.A)(this, "onOk", () => {
        this.progressing || (this.onProgressing(!0), this.props.onOk(this.onSuccessCallback, this.onErrorCallback));
      }), (0, n.A)(this, "close", e => {
        this.mounted && (this.progressing = !1, this.setState({
          isProgressing: !1
        }), this.props.onClose(e));
      }), (0, n.A)(this, "onSuccessCallback", () => {
        this.close(!0);
      }), (0, n.A)(this, "onErrorCallback", e => {
        this.mounted && (this.progressing = !1, this.setState({
          isProgressing: !1,
          errorMessage: e
        }));
      }), (0, n.A)(this, "onCancel", () => {
        this.close(!1);
      });
    }
    triggerOk() {
      this.onOk();
    }
    componentDidMount() {
      this.mounted = !0;
    }
    componentWillUnmount() {
      this.mounted = !1;
    }
    componentWillReceiveProps(e) {
      e.show && !this.props.show && (this.progressing = !1, this.setState({
        errorMessage: "",
        isProgressing: !1
      }));
    }
    getLabel() {
      if (this.props.label) {
        var e = {
          display: "block",
          textAlign: "left",
          fontSize: 13,
          padding: 10
        };
        return o().createElement("label", {
          style: e
        }, this.props.label);
      }
    }
    getErrorMessage() {
      return this.state.errorMessage;
    }
    render() {
      var e = this.props.buttonType,
        t = {
          width: "100%",
          display: "flex",
          flexDirection: "column"
        };
      return o().createElement("div", null, o().createElement(a.A, {
        title: this.props.title || "Confirm action",
        size: "medium",
        initialFocus: "cancel",
        style: c(c({}, s.A.getCenterStyle()), this.props.style),
        okLabel: this.props.okLabel || "Confirm",
        okVariant: this.props.okVariant,
        cancelLabel: this.props.cancelLabel || ("Close" == e ? "Close" : "Cancel"),
        showOk: !("Close" == e),
        message: this.getErrorMessage(),
        isProgressing: this.state.isProgressing,
        onOk: this.onOk,
        onCancel: this.onCancel,
        show: this.props.show,
        className: "confirm-dialog"
      }, o().createElement("confirm-dialog", {
        style: t
      }, this.renderIcon(), this.getLabel(), this.props.placeHolder)));
    }
    renderIcon() {
      return this.props.icon ? this.props.icon : this.props.noIcon ? void 0 : o().createElement("i", {
        className: "fa fa-warning",
        "aria-hidden": "true",
        style: {
          fontSize: "2em",
          padding: 10,
          alignSelf: "center",
          textAlign: "center",
          color: "danger" === this.props.okVariant ? "var(--ui-danger, #ce0303)" : "var(--ui-warning, #956300)"
        }
      });
    }
  }
};
