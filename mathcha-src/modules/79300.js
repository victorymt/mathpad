/* module 79300 — 1230 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    g: () => l
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(58907),
    a = r(47286);
  class l extends o().Component {
    constructor() {
      super(...arguments), (0, n.A)(this, "FakeModalDialog", s.A.getModalDialog());
    }
    render() {
      return o().createElement(this.FakeModalDialog, {
        show: !0
      }, o().createElement(a.A, {
        title: this.props.title || "Processing",
        size: "medium",
        message: this.props.errorMessage || this.props.warningMessage,
        isMessageWarning: !!this.props.warningMessage && !this.props.errorMessage,
        isProgressing: !this.props.errorMessage && !this.props.warningMessage,
        isOkDisabled: !1,
        onOk: this.props.onClose,
        onCancel: this.props.onClose,
        showOk: !1,
        cancelLabel: "Close",
        show: !0,
        preventDisableButtonOnProgressing: !0
      }, o().createElement("div", {
        className: "tw:w-full tw:text-xs tw:leading-5"
      }, o().createElement("div", {
        role: "status"
      }, this.props.errorMessage || this.props.warningMessage ? null : this.props.processingMessage), this.props.children)));
    }
  }
};
