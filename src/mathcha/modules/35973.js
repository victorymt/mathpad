/* module 35973 — 482 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    E: () => s
  });
  var n = r(37566),
    i = r(60693);
  class o {
    calculateTransform(e, t) {
      var r = n.f$(e, "line"),
        o = i.T.getBCRect(r[0], t).right,
        s = n.aY(r);
      n.nB(s, "edit-theorem-content") && (o = i.T.getBCRect(n.aY(s)[0], t).right);
      var a = i.T.getBCRect(e, t);
      n.hS(n.jS(e, ".qed-real"), "transform", "translateX(".concat(o - a.right, "px)"));
    }
  }
  var s = new o();
};
