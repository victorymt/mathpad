/* module 3531 — 1841 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    Z: () => o
  });
  var n = r(40927),
    i = r.n(n);
  class o extends i().Component {
    render() {
      var e = this.props,
        t = e.shape,
        r = void 0 === t ? "line" : t,
        n = e.strokeWidth,
        o = void 0 === n ? 3 : n,
        s = e.text,
        a = e.style,
        l = isFinite(this.props.progress) ? Math.max(0, Math.min(1, this.props.progress)) : 0,
        c = "circle" === r,
        d = 50 - o / 2,
        h = c ? 2 * Math.PI * d : 100,
        p = c ? "M 50,".concat(50 - d, " a ").concat(d, ",").concat(d, " 0 1 1 0,").concat(2 * d, " a ").concat(d, ",").concat(d, " 0 1 1 0,-").concat(2 * d) : "M 0,".concat(o / 2, " L 100,").concat(o / 2);
      return i().createElement("div", {
        className: "tw:relative",
        style: a,
        role: "progressbar",
        "aria-label": s || "Progress",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(100 * l)
      }, i().createElement("svg", {
        className: "tw:block tw:w-full",
        viewBox: "0 0 100 ".concat(c ? 100 : o),
        preserveAspectRatio: c ? "xMidYMid meet" : "none",
        "aria-hidden": "true"
      }, i().createElement("path", {
        d: p,
        fill: "none",
        stroke: "lightgray",
        strokeWidth: o
      }), i().createElement("path", {
        d: p,
        fill: "none",
        stroke: "rgb(76, 175, 80)",
        strokeWidth: o,
        strokeDasharray: "".concat(h, " ").concat(h),
        strokeDashoffset: h * (1 - l)
      })), s && i().createElement("div", {
        className: c ? "tw:absolute tw:left-1/2 tw:top-1/2 tw:-translate-x-1/2 tw:-translate-y-1/2" : void 0,
        style: {
          color: c ? "rgb(76, 175, 80)" : "var(--ui-text-muted, gray)"
        }
      }, s));
    }
  }
};
