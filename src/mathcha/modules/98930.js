/* module 98930 — 1444 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    B: () => c
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(25665);
  function a(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function l(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? a(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class c extends o().Component {
    render() {
      return o().createElement(s.m, {
        content: this.props.msg,
        label: "More information",
        className: this.props.className,
        style: this.props.style,
        popupStyle: this.props.popupStyle
      }, o().createElement("span", {
        style: l({
          padding: 5,
          verticalAlign: "-1px"
        }, this.props.iconStyle)
      }, o().createElement("i", {
        className: "fa fa-info-circle",
        "aria-hidden": "true"
      })));
    }
  }
};
