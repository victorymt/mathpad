/* module 6986 — 619 chars */
module.exports = function (e, t, r) {
  "use strict";

  function n(e, t) {
    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
    if (null != r) {
      var n = [],
        i = !0,
        o = !1,
        s,
        a;
      try {
        for (r = r.call(e); !(i = (s = r.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
      } catch (e) {
        o = !0, a = e;
      } finally {
        try {
          i || null == r.return || r.return();
        } finally {
          if (o) throw a;
        }
      }
      return n;
    }
  }
  r.d(t, {
    A: () => n
  });
};
