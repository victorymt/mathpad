/* module 54949 — 360 chars */
module.exports = function (e, t, r) {
  "use strict";

  var n = r(16611),
    i = r(63475),
    o = r(90646),
    s = {
      HOST: 0,
      COMPOSITE: 1,
      EMPTY: 2,
      getType: function (e) {
        return null === e || !1 === e ? s.EMPTY : i.isValidElement(e) ? "function" == typeof e.type ? s.COMPOSITE : s.HOST : void n("26", e);
      }
    };
  e.exports = s;
};
