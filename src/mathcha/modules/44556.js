/* module 44556 — 355 chars */
module.exports = function (e, t, r) {
  var n = r(56094),
    i = r(67526),
    o = "__core-js_shared__",
    s = i[o] || (i[o] = {});
  (e.exports = function (e, t) {
    return s[e] || (s[e] = void 0 !== t ? t : {});
  })("versions", []).push({
    version: n.version,
    mode: r(22750) ? "pure" : "global",
    copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
  });
};
