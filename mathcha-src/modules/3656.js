/* module 3656 — 263 chars */
module.exports = function (e, t, r) {
  e = r.nmd(e);
  var n = r(9325),
    i = r(89935),
    o = t && !t.nodeType && t,
    s = o && e && !e.nodeType && e,
    a,
    l = s && s.exports === o ? n.Buffer : void 0,
    c,
    d = (l ? l.isBuffer : void 0) || i;
  e.exports = d;
};
