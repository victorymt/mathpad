/* module 70157 — 166 chars */
module.exports = function (e, t, r) {
  var n = r(27087),
    i = Math.max,
    o = Math.min;
  e.exports = function (e, t) {
    return (e = n(e)) < 0 ? i(e + t, 0) : o(e, t);
  };
};
