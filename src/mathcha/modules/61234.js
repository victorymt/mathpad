/* module 61234 — 954 chars */
module.exports = function (e, t, r) {
  "use strict";

  function n(e) {
    if (e.length < 2) return null;
    var t = Math.floor(e.length / 2);
    t < 1 && (t = 1), t >= e.length && (t = e.length - 1);
    var r = e[t - 1],
      n = e[t];
    return {
      position: n,
      angle: Math.atan2(n.y - r.y, n.x - r.x)
    };
  }
  function i(e, t, r) {
    var i;
    if ("none" === r) return null;
    var o = null !== (i = e[0]) && void 0 !== i ? i : t[0];
    if (!o) return null;
    if ("end" === r) {
      if (e.length >= 2) {
        var s = e[1];
        return {
          position: o,
          angle: Math.atan2(s.y - o.y, s.x - o.x)
        };
      }
      if (t.length >= 2) {
        var a = t[1];
        return {
          position: o,
          angle: Math.atan2(o.y - a.y, o.x - a.x)
        };
      }
      return {
        position: o,
        angle: 0
      };
    }
    var l = n(e);
    return l || n(t);
  }
  r.d(t, {
    Z: () => i
  });
};
