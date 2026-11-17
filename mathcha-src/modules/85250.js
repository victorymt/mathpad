/* module 85250 — 430 chars */
module.exports = function (e, t, r) {
  var n = r(37217),
    i = r(87805),
    o = r(86649),
    s = r(42824),
    a = r(23805),
    l = r(37241),
    c = r(14974);
  function d(e, t, r, h, p) {
    e !== t && o(t, function (o, l) {
      if (p || (p = new n()), a(o)) s(e, t, l, r, d, h, p);else {
        var u = h ? h(c(e, l), o, l + "", e, t, p) : void 0;
        void 0 === u && (u = o), i(e, l, u);
      }
    }, l);
  }
  e.exports = d;
};
