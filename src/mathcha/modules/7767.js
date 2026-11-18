/* module 7767 — 1461 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    NC: () => a,
    US: () => l,
    VM: () => s
  });
  var n = r(64467);
  function i(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function o(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? i(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var s = {
      hookTopEm: .85,
      clearanceEm: .1,
      kernAfterEm: -.7,
      kernGrowthPerEm: 1 / 8,
      kernGrowthMaxEm: .25
    },
    a = o(o({}, s), {}, {
      hookTopEm: .7
    });
  function l(e, t) {
    var r = t.kernAfterEm + Math.min(t.kernGrowthMaxEm, (e - 1) * t.kernGrowthPerEm);
    return {
      paddingLeft: void 0 === t.kernBeforeEm ? void 0 : "".concat(t.kernBeforeEm, "em"),
      marginRight: "".concat(r, "em"),
      minWidth: "".concat(Math.max(0, -r), "em"),
      paddingBottom: "".concat(t.hookTopEm + t.clearanceEm, "em")
    };
  }
};
