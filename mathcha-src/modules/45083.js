/* module 45083 — 506 chars */
module.exports = function (e, t, r) {
  var n = r(1882),
    i = r(87296),
    o = r(23805),
    s = r(47473),
    a = /[\\^$.*+?()[\]{}|]/g,
    l = /^\[object .+?Constructor\]$/,
    c = Function.prototype,
    d = Object.prototype,
    h = c.toString,
    p = d.hasOwnProperty,
    u = RegExp("^" + h.call(p).replace(a, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function g(e) {
    return !(!o(e) || i(e)) && (n(e) ? u : l).test(s(e));
    var t;
  }
  e.exports = g;
};
