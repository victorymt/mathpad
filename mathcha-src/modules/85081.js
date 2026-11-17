/* module 85081 — 336 chars */
module.exports = function (e, t, r) {
  var n = r(75509),
    i = r(65133),
    o = r(84448)(!1),
    s = r(4566)("IE_PROTO");
  e.exports = function (e, t) {
    var r = i(e),
      a = 0,
      l = [],
      c;
    for (c in r) c != s && n(r, c) && l.push(c);
    for (; t.length > a;) n(r, c = t[a++]) && (~o(l, c) || l.push(c));
    return l;
  };
};
