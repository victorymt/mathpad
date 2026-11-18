/* module 85020 — 1382 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    i: () => d
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(32485),
    a = r.n(s);
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
    render() {
      return o().createElement("div", {
        className: a()("ui-dialog-actions tw:flex tw:w-full tw:flex-wrap tw:items-center tw:gap-2.5", {
          "ui-dialog-actions-separated": !1 !== this.props.separator
        }, this.props.className),
        style: c({
          justifyContent: "end" === this.props.align ? "flex-end" : "center"
        }, this.props.style)
      }, this.props.children);
    }
  }
};
