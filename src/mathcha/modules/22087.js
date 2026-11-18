/* module 22087 — 695 chars */
module.exports = function (e, t, r) {
  var n = r(80812),
    i = r(90082),
    o = r(77956),
    s = r(4566)("IE_PROTO"),
    a = function () {},
    l = "prototype",
    c = function () {
      var e = r(3802)("iframe"),
        t = o.length,
        n = "<",
        i = ">",
        s;
      for (e.style.display = "none", r(76260).appendChild(e), e.src = "javascript:", (s = e.contentWindow.document).open(), s.write("<script>document.F=Object<\/script>"), s.close(), c = s.F; t--;) delete c[l][o[t]];
      return c();
    };
  e.exports = Object.create || function e(t, r) {
    var o;
    return null !== t ? (a[l] = n(t), o = new a(), a[l] = null, o[s] = t) : o = c(), void 0 === r ? o : i(o, r);
  };
};
