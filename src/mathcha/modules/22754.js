/* module 22754 — 753 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(59395),
    i = {
      listen: function e(t, r, n) {
        return t.addEventListener ? (t.addEventListener(r, n, !1), {
          remove: function e() {
            t.removeEventListener(r, n, !1);
          }
        }) : t.attachEvent ? (t.attachEvent("on" + r, n), {
          remove: function e() {
            t.detachEvent("on" + r, n);
          }
        }) : void 0;
      },
      capture: function e(t, r, i) {
        return t.addEventListener ? (t.addEventListener(r, i, !0), {
          remove: function e() {
            t.removeEventListener(r, i, !0);
          }
        }) : {
          remove: n
        };
      },
      registerDefault: function e() {}
    };
  e.exports = i;
};
