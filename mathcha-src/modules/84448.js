/* module 84448 — 418 chars */
module.exports = function (e, t, r) {
  var n = r(65133),
    i = r(70181),
    o = r(72917);
  e.exports = function (e) {
    return function (t, r, s) {
      var a = n(t),
        l = i(a.length),
        c = o(s, l),
        d;
      if (e && r != r) {
        for (; l > c;) if ((d = a[c++]) != d) return !0;
      } else for (; l > c; c++) if ((e || c in a) && a[c] === r) return e || c || 0;
      return !e && -1;
    };
  };
};
