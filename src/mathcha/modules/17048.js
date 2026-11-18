/* module 17048 — 988 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(40927),
    i = r.n(n);
  const o = e => {
    var t = e.width,
      r = e.height,
      n = e.noOverlay,
      o = "translate(".concat(t / 2 - 24, "px,").concat(r / 2 - 26, "px) scale(0.5,0.5)");
    return i().createElement("g", null, n ? void 0 : i().createElement("rect", {
      fill: "rgba(0, 0, 0, 0.35)",
      stroke: "none",
      x: 0,
      y: 0,
      width: t,
      height: r
    }), i().createElement("g", {
      style: {
        transform: o
      }
    }, i().createElement("path", {
      fill: "#fff",
      stroke: "none",
      d: "M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
    }, i().createElement("animateTransform", {
      attributeName: "transform",
      attributeType: "XML",
      type: "rotate",
      dur: "1s",
      from: "0 50 50",
      to: "360 50 50",
      repeatCount: "indefinite"
    }))));
  };
  r.dn(o);
};
