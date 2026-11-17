/* module 41052 — 889 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    C: () => o
  });
  var n = r(16831);
  class i {
    validate(e) {
      var t = [],
        r = n.m.getMaringOrDefaultInPixel(e.margin, "none");
      if (e.margin) {
        var i = "Margin must be between 0 and 1000px";
        (r.left < 0 || r.left > 1e3 || r.top < 0 || r.top > 1e3 || r.right < 0 || r.right > 1e3 || r.bottom < 0 || r.bottom > 1e3) && t.push(i);
      }
      var o = n.m.widthFromKey(e.presetSize, e.width, e.sizeUnit, "px"),
        s = n.m.heightFromKey(e.presetSize, e.height, e.sizeUnit, "px"),
        a = o - r.left - r.right,
        l = s - r.top - r.bottom;
      return (a < 50 || a > 1e4) && t.push("Content Width (Exclude Margins) must be between 50px and 10000px"), (l < 50 || l > 1e5) && t.push("Content Height (Exclude Margins) must be between 50px and 100000px"), t;
    }
  }
  var o = new i();
};
