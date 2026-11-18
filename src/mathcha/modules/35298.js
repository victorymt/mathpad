/* module 35298 — 3954 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => h
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(2543),
    a = r.n(s),
    l = r(16876),
    c = r(21774),
    d = r(55451);
  class h extends o().Component {
    constructor(e) {
      super(e), (0, n.A)(this, "textArea", void 0), (0, n.A)(this, "focusLater", d.A.createLaterRunObject("latest", "a-little-while")), (0, n.A)(this, "onProgressing", e => {
        this.setState({
          isProgressing: e
        });
      }), (0, n.A)(this, "onOk", () => {
        this.onProgressing(!0), this.props.onOk(this.state.nodeName, this.onSuccessCallback, this.onErrorCallback);
      }), (0, n.A)(this, "onSuccessCallback", () => {
        this.close();
      }), (0, n.A)(this, "onErrorCallback", e => {
        this.setError(e);
      }), (0, n.A)(this, "onCancel", () => {
        this.close();
      }), (0, n.A)(this, "onTextAreaKeyDown", e => {
        13 == e.keyCode && (this.onOk(), e.preventDefault(), e.stopPropagation());
      }), this.state = {
        nodeName: this.props.documentName || "",
        isProgressing: !1,
        errorMessage: ""
      };
    }
    shouldComponentUpdate(e, t) {
      return !c.A.areEqualShallow(this.state, t) || !c.A.areEqualShallow(this.props, e);
    }
    componentDidMount() {
      this.props.show && this.requestInputFocus();
    }
    componentWillUnmount() {
      this.focusLater.cancel();
    }
    requestInputFocus() {
      this.focusLater.later(() => {
        var e;
        this.props.show && (null === (e = this.textArea) || void 0 === e || e.focus());
      });
    }
    componentWillReceiveProps(e) {
      e.show || this.focusLater.cancel(), e.show && !this.props.show && this.state.errorMessage && this.setState({
        errorMessage: "",
        isProgressing: !1
      }), e.show && !this.props.show && (this.requestInputFocus(), null != e.documentName && this.setState({
        nodeName: e.documentName
      }));
    }
    close() {
      this.setState({
        isProgressing: !1
      }), this.props.onClose();
    }
    setError(e) {
      this.setState({
        errorMessage: e,
        isProgressing: !1
      });
    }
    getLabel() {
      return o().createElement("label", null, this.props.label);
    }
    isOkDisabled() {
      return null == this.state.nodeName || a().isEmpty(a().trim(this.state.nodeName)) || this.isNameTooLong(this.state.nodeName) || this.isNameDuplicated(this.state.nodeName);
    }
    isNameDuplicated(e) {
      return this.props.documentNames.indexOf(a().trim(e)) >= 0;
    }
    isNameTooLong(e) {
      return a().trim(e).length > 300;
    }
    getMessage() {
      return this.props.message ? this.props.message : this.isNameTooLong(this.state.nodeName) ? "Maximum character is 300" : this.isNameDuplicated(this.state.nodeName) ? "Name is duplicated" : this.state.errorMessage;
    }
    render() {
      return this.props.show ? o().createElement("div", null, o().createElement(l.A, {
        title: this.props.title || "Document name",
        okLabel: this.props.okLabel || "Save",
        size: "medium",
        scroll: "body",
        message: this.getMessage(),
        isProgressing: this.state.isProgressing,
        isOkDisabled: this.isOkDisabled(),
        onOk: this.onOk,
        onCancel: this.onCancel,
        show: this.props.show,
        btnLarge: !0,
        className: "document-name"
      }, o().createElement("document-name", null, !this.props.hideLabel && this.getLabel(), o().createElement("textarea", {
        rows: 1,
        style: {
          fontSize: 13
        },
        ref: e => this.textArea = e,
        "aria-label": this.props.label,
        value: this.state.nodeName,
        onKeyDown: this.onTextAreaKeyDown,
        onChange: e => this.setState({
          nodeName: e.target.value.replace(/(\r\n|\n|\r)/gm, "")
        })
      }), this.props.placeHolder))) : o().createElement("div", null);
    }
  }
};
