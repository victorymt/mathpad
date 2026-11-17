/* module 45862 — 1955 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    $: () => p
  });
  var n = r(64467),
    i = r(80045),
    o = r(40927),
    s = r.n(o),
    a = r(32485),
    l = r.n(a),
    c = ["variant", "compact", "dialogAction", "loading", "className", "disabled", "type"];
  function d(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function h(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? d(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class p extends s().Component {
    render() {
      var e = this.props,
        t = e.variant,
        r = void 0 === t ? "normal" : t,
        n = e.compact,
        o = e.dialogAction,
        a = e.loading,
        d = e.className,
        p = e.disabled,
        u = e.type,
        g = void 0 === u ? "button" : u,
        m = (0, i.A)(e, c);
      return s().createElement("button", h(h({}, m), {}, {
        type: g,
        disabled: p || a,
        "aria-busy": a || void 0,
        className: l()("ui-button tw:inline-flex tw:items-center tw:justify-center tw:box-border tw:whitespace-nowrap tw:shrink-0 tw:select-none", "primary" === r ? "btn-primary" : "btn-normal", {
          "ui-button-danger": "danger" === r,
          "ui-button-header": "header" === r,
          "ui-button-toolbar": "toolbar" === r,
          "ui-button-compact": n,
          "ui-button-dialog": o
        }, d)
      }));
    }
  }
};
