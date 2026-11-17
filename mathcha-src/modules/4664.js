/* module 4664 — 316 chars */
module.exports = function (e, t, r) {
  var n = r(79770),
    i = r(63345),
    o,
    s = Object.prototype.propertyIsEnumerable,
    a = Object.getOwnPropertySymbols,
    l = a ? function (e) {
      return null == e ? [] : (e = Object(e), n(a(e), function (t) {
        return s.call(e, t);
      }));
    } : i;
  e.exports = l;
};
