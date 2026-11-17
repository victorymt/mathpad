/* module 84542 — 2048 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i);
  function s(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function a(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class l extends o().Component {
    render() {
      var e = a(a({}, c), {}, {
        display: !0 === this.props.noEdit ? "none" : void 0
      });
      return o().createElement("div", {
        style: h,
        "data-test-name": "hyper-link-info-dialog"
      }, o().createElement("a", {
        style: d,
        href: this.props.link,
        target: "_blank"
      }, this.props.link), o().createElement("button", {
        style: e,
        onClick: this.props.onRequestChange,
        className: "btn-normal"
      }, "Change"), o().createElement("button", {
        style: e,
        onClick: this.props.onClear,
        className: "btn-normal"
      }, "Remove"));
    }
  }
  var c = {
      marginLeft: 5
    },
    d = {
      minWidth: 100,
      maxWidth: 250,
      fontSize: 13,
      lineHeight: "1.5em",
      color: "#1155cc",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    h = {
      border: "1px solid var(--ui-border, lightgray)",
      padding: 6,
      background: "var(--ui-surface, white)",
      display: "flex",
      boxShadow: "1px 1px 1px 0px var(--ui-shadow, #e0dddd)"
    };
};
