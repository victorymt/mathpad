/* module 88984 — 282 chars */
module.exports = function (e, t, r) {
  var n = r(55527),
    i = r(3650),
    o,
    s = Object.prototype.hasOwnProperty;
  function a(e) {
    if (!n(e)) return i(e);
    var t = [];
    for (var r in Object(e)) s.call(e, r) && "constructor" != r && t.push(r);
    return t;
  }
  e.exports = a;
};
