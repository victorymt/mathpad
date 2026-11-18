/* module 87296 — 209 chars */
module.exports = function (e, t, r) {
  var n = r(55481),
    i = (o = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "")) ? "Symbol(src)_1." + o : "",
    o;
  function s(e) {
    return !!i && i in e;
  }
  e.exports = s;
};
