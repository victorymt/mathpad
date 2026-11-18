/* module 43172 — 464 chars */
module.exports = function (e, t, r) {
  var n = r(49383),
    i = r(87608);
  e.exports = function (e) {
    return function (t, r) {
      var o = String(i(t)),
        s = n(r),
        a = o.length,
        l,
        c;
      return s < 0 || s >= a ? e ? "" : void 0 : (l = o.charCodeAt(s)) < 55296 || l > 56319 || s + 1 === a || (c = o.charCodeAt(s + 1)) < 56320 || c > 57343 ? e ? o.charAt(s) : l : e ? o.slice(s, s + 2) : c - 56320 + (l - 55296 << 10) + 65536;
    };
  };
};
