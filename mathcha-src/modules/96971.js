/* module 96971 — 2217 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    d: () => l
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
      var e = this.props,
        t = e.message,
        r = e.tone,
        n = void 0 === r ? "info" : r,
        i = e.busy,
        s = e.progress;
      if (!t && !i) return null;
      var l = "error" === n ? "var(--ui-danger, #ce0303)" : "warning" === n ? "var(--ui-warning, #956300)" : "success" === n ? "var(--ui-success, #257338)" : "var(--ui-text-muted, gray)";
      return o().createElement("div", {
        className: "tw:mb-3 tw:w-full tw:text-xs",
        style: a({
          color: l
        }, this.props.style)
      }, i && o().createElement("div", {
        role: "progressbar",
        "aria-label": "Progress",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": void 0 === s ? void 0 : Math.round(100 * s),
        className: void 0 === s ? "thin-loader show" : "ui-dialog-progress",
        style: a({
          position: "relative",
          height: 3,
          marginBottom: t ? 8 : 0
        }, this.props.progressStyle)
      }, void 0 !== s && o().createElement("div", {
        className: "ui-dialog-progress-value",
        style: {
          width: 100 * Math.max(0, Math.min(1, s)) + "%"
        }
      })), t && o().createElement("div", {
        role: "error" === n ? "alert" : "status"
      }, t));
    }
  }
};
