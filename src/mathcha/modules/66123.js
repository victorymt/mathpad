/* module 66123 — 337 chars */
module.exports = function (e, t, r) {
  var n = r(75509),
    i = r(66310),
    o = r(4566)("IE_PROTO"),
    s = Object.prototype;
  e.exports = Object.getPrototypeOf || function (e) {
    return e = i(e), n(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null;
  };
};
