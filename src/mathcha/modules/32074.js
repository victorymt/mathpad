/* module 32074 — 593 chars */
module.exports = function (e, t, r) {
  var n = r(24401),
    i = r(80812),
    o = function (e, t) {
      if (i(e), !n(t) && null !== t) throw TypeError(t + ": can't set as prototype!");
    };
  e.exports = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, n) {
      try {
        (n = r(58852)(Function.call, r(81033).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array);
      } catch (e) {
        t = !0;
      }
      return function e(r, i) {
        return o(r, i), t ? r.__proto__ = i : n(r, i), r;
      };
    }({}, !1) : void 0),
    check: o
  };
};
