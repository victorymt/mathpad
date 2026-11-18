/* module 21791 — 342 chars */
module.exports = function (e, t, r) {
  var n = r(16547),
    i = r(43360);
  function o(e, t, r, o) {
    var s = !r;
    r || (r = {});
    for (var a = -1, l = t.length; ++a < l;) {
      var c = t[a],
        d = o ? o(r[c], e[c], c, r, e) : void 0;
      void 0 === d && (d = e[c]), s ? i(r, c, d) : n(r, c, d);
    }
    return r;
  }
  e.exports = o;
};
