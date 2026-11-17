/* module 72552 — 287 chars */
module.exports = function (e, t, r) {
  var n = r(51873),
    i = r(659),
    o = r(59350),
    s = "[object Null]",
    a = "[object Undefined]",
    l = n ? n.toStringTag : void 0;
  function c(e) {
    return null == e ? void 0 === e ? a : s : l && l in Object(e) ? i(e) : o(e);
  }
  e.exports = c;
};
