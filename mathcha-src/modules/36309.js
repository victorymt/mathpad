/* module 36309 — 418 chars */
module.exports = function (e, t, r) {
  var n = r(65133),
    i = r(1743).f,
    o = {}.toString,
    s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    a = function (e) {
      try {
        return i(e);
      } catch (e) {
        return s.slice();
      }
    };
  e.exports.f = function e(t) {
    return s && "[object Window]" == o.call(t) ? a(t) : i(n(t));
  };
};
