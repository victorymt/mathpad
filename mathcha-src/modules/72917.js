/* module 72917 — 166 chars */
module.exports = function (e, t, r) {
  var n = r(49383),
    i = Math.max,
    o = Math.min;
  e.exports = function (e, t) {
    return (e = n(e)) < 0 ? i(e + t, 0) : o(e, t);
  };
};
