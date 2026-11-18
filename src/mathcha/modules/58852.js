/* module 58852 — 487 chars */
module.exports = function (e, t, r) {
  var n = r(25219);
  e.exports = function (e, t, r) {
    if (n(e), void 0 === t) return e;
    switch (r) {
      case 1:
        return function (r) {
          return e.call(t, r);
        };
      case 2:
        return function (r, n) {
          return e.call(t, r, n);
        };
      case 3:
        return function (r, n, i) {
          return e.call(t, r, n, i);
        };
    }
    return function () {
      return e.apply(t, arguments);
    };
  };
};
