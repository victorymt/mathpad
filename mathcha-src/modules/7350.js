/* module 7350 — 393 chars */
module.exports = function (e, t, r) {
  var n = r(38221),
    i = r(23805),
    o = "Expected a function";
  function s(e, t, r) {
    var s = !0,
      a = !0;
    if ("function" != typeof e) throw new TypeError(o);
    return i(r) && (s = "leading" in r ? !!r.leading : s, a = "trailing" in r ? !!r.trailing : a), n(e, t, {
      leading: s,
      maxWait: t,
      trailing: a
    });
  }
  e.exports = s;
};
