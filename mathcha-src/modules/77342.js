/* module 77342 — 234 chars */
module.exports = function (e, t, r) {
  var n = r(80812),
    i = r(55298);
  e.exports = r(46438).getIterator = function (e) {
    var t = i(e);
    if ("function" != typeof t) throw TypeError(e + " is not iterable!");
    return n(t.call(e));
  };
};
