/* module 27218 — 733 chars */
module.exports = function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = {},
    n = t.render = function e(t, r, n, i) {
      if ("undefined" == typeof document && !i) return null;
      var o = i ? new i() : document.createElement("canvas");
      o.width = 2 * n, o.height = 2 * n;
      var s = o.getContext("2d");
      return s ? (s.fillStyle = t, s.fillRect(0, 0, o.width, o.height), s.fillStyle = r, s.fillRect(0, 0, n, n), s.translate(n, n), s.fillRect(0, 0, n, n), o.toDataURL()) : null;
    },
    i = t.get = function e(t, i, o, s) {
      var a = t + "-" + i + "-" + o + (s ? "-server" : "");
      if (r[a]) return r[a];
      var l = n(t, i, o, s);
      return r[a] = l, l;
    };
};
