/* module 22662 — 2954 chars */
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
      super(...arguments), (0, n.A)(this, "state", {
        info: this.props.info || {}
      }), (0, n.A)(this, "FakeModalDialog", s.A.getModalDialog());
    }
    render() {
      return o().createElement(this.FakeModalDialog, {
        show: !0
      }, o().createElement(a.A, {
        title: "Accessibility",
        size: "medium",
        scroll: "body",
        style: {
          width: "auto"
        },
        message: "",
        isProgressing: !1,
        isOkDisabled: !1,
        onOk: () => this.props.onOk(this.state.info),
        onCancel: this.props.onClose,
        okLabel: "OK",
        show: !0
      }, o().createElement("div", {
        style: {
          flex: 1
        }
      }, o().createElement("form", {
        style: {
          fontSize: 13,
          padding: 5
        }
      }, o().createElement("p", {
        style: {
          display: this.props.hideTitle ? "none" : void 0
        }
      }, o().createElement("label", {
        style: {
          display: "inline-block",
          width: 80
        }
      }, "Title"), o().createElement("input", {
        style: {
          width: 300,
          fontSize: 13
        },
        value: this.state.info.title,
        onChange: e => this.setState({
          info: c(c({}, this.state.info), {}, {
            title: e.currentTarget.value
          })
        })
      })), o().createElement("p", null, o().createElement("label", {
        style: {
          display: "inline-block",
          width: 80,
          paddingTop: 3
        }
      }, "Description"), o().createElement("textarea", {
        style: {
          verticalAlign: "top",
          width: 300,
          resize: "vertical",
          height: 60,
          fontSize: 13
        },
        value: this.state.info.description,
        onChange: e => this.setState({
          info: c(c({}, this.state.info), {}, {
            description: e.currentTarget.value
          })
        })
      }))))));
    }
  }
};
