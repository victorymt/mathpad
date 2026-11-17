/* module 34649 — 569 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    c: () => o
  });
  var n = r(516);
  class i {
    extactHeightAndBottomStyle(e, t) {
      var r = t,
        i = (0, n.U)(e);
      if (r) return [i, 0, -i];
      var o = Math.round(e / 6);
      return [i, o, i - Math.round(o / 2)];
    }
    extactHeightAndBottomStyleDouble(e, t) {
      var r = t,
        i = (0, n.U)(e),
        o = Math.round(e / 5);
      if (r) return [i + o, 0, -i];
      var s = Math.round(e / 6);
      return [i + o, s, i - Math.round((s + o) / 3.6)];
    }
  }
  var o = new i();
};
