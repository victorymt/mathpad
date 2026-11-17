/* module 72903 — 317 chars */
module.exports = function (e, t, r) {
  var n = r(23805),
    i = r(55527),
    o = r(90181),
    s,
    a = Object.prototype.hasOwnProperty;
  function l(e) {
    if (!n(e)) return o(e);
    var t = i(e),
      r = [];
    for (var s in e) ("constructor" != s || !t && a.call(e, s)) && r.push(s);
    return r;
  }
  e.exports = l;
};
