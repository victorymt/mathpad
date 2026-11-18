/* module 96308 — 355 chars */
module.exports = function (e, t, r) {
  var n = r(46438),
    i = r(66670),
    o = "__core-js_shared__",
    s = i[o] || (i[o] = {});
  (e.exports = function (e, t) {
    return s[e] || (s[e] = void 0 !== t ? t : {});
  })("versions", []).push({
    version: n.version,
    mode: r(74742) ? "pure" : "global",
    copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
  });
};
