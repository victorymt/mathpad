/* module 27904 — 230 chars */
module.exports = function (e, t, r) {
  var n = r(80812);
  e.exports = function (e, t, r, i) {
    try {
      return i ? t(n(r)[0], r[1]) : t(r);
    } catch (t) {
      var o = e.return;
      throw void 0 !== o && n(o.call(e)), t;
    }
  };
};
