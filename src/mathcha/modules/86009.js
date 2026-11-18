/* module 86009 — 372 chars */
module.exports = function (e, t, r) {
  e = r.nmd(e);
  var n = r(34840),
    i = t && !t.nodeType && t,
    o = i && e && !e.nodeType && e,
    s,
    a = o && o.exports === i && n.process,
    l = function () {
      try {
        var e = o && o.require && o.require("util").types;
        return e || a && a.binding && a.binding("util");
      } catch (e) {}
    }();
  e.exports = l;
};
