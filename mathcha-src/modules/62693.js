/* module 62693 — 470 chars */
module.exports = function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = function e(t, r) {
    var n = {},
      i = function e(t) {
        var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        n[t] = r;
      };
    return 0 === t && i("first-child"), t === r - 1 && i("last-child"), (0 === t || t % 2 == 0) && i("even"), 1 === Math.abs(t % 2) && i("odd"), i("nth-child", t), n;
  };
  t.default = r;
};
