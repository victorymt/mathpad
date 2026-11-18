/* module 93290 — 378 chars */
module.exports = function (e, t, r) {
  e = r.nmd(e);
  var n = r(9325),
    i = t && !t.nodeType && t,
    o = i && e && !e.nodeType && e,
    s,
    a = o && o.exports === i ? n.Buffer : void 0,
    l = a ? a.allocUnsafe : void 0;
  function c(e, t) {
    if (t) return e.slice();
    var r = e.length,
      n = l ? l(r) : new e.constructor(r);
    return e.copy(n), n;
  }
  e.exports = c;
};
