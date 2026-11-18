/* module 71074 — 1367 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o,
    x: () => s
  });
  var n = r(334);
  class i {
    constructManageState(e, t, r, i, o, s) {
      if (s.heightTop == e && s.heightBottom == t && s.symmetric == i) return "unchanged";
      var a, l, c, d, h, p;
      if (i) {
        l = "-0.2em";
        var u = n.A.getSymmetricBracketHeightInfo(e, t, r);
        d = u.halfTop - r / 10, h = u.halfBottom + r / 10, a = 2 * Math.max(d, h);
      } else l = Math.round(e - 1.05 * r) / r + "em", c = "flex-start", a = e + t;
      return d || (d = e, h = t), {
        hiddenSpanMarginTop: l,
        hiddenSpanAlignSelf: c,
        calculatedHalfTop: d,
        calculatedHalfBottom: h,
        symmetric: i,
        fontSizeEm: n.A.fontSizeEmByHeight(a, r, o),
        fontSize: r,
        height: Math.ceil(a) / r + "em",
        heightTop: e,
        heightBottom: t
      };
    }
    clearCustomHeight(e) {
      return null == e.heightTop && null == e.heightBottom && null == e.symmetric ? "unchanged" : s;
    }
  }
  var o = new i(),
    s = {
      heightTop: void 0,
      heightBottom: void 0,
      symmetric: void 0,
      hiddenSpanAlignSelf: void 0,
      hiddenSpanMarginTop: void 0,
      fontSize: void 0,
      fontSizeEm: void 0,
      height: void 0,
      calculatedHalfTop: void 0,
      calculatedHalfBottom: void 0
    };
};
