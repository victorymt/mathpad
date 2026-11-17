/* module 63606 — 318 chars */
module.exports = function (e, t, r) {
  var n = r(43305),
    i = r(77981),
    o = r(67574)("species");
  e.exports = function (e) {
    var t;
    return i(e) && ("function" != typeof (t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), n(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t;
  };
};
