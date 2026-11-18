/* module 18808 — 2208 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    l: () => o
  });
  var n = r(64467);
  class i {
    constructor() {
      (0, n.A)(this, "handleRequestFontSizeRatioOne", () => 1);
    }
    isRelativeObj(e) {
      return "object" == typeof e && !e.fType;
    }
    isAbsoluteObj(e) {
      return "object" == typeof e && "absolute" == e.fType;
    }
    isRelativeStr(e) {
      return "string" == typeof e;
    }
    getFontRatioFromStr(e) {
      if (!e) return 1;
      switch (e) {
        case "\\tiny":
          return .5;
        case "\\scriptsize":
          return .7;
        case "\\footnotesize":
          return .8;
        case "\\small":
          return .9;
        case "\\normalsize":
          return 1;
        case "\\large":
          return 1.2;
        case "\\Large":
          return 1.44;
        case "\\LARGE":
          return 17.28 / 10;
        case "\\huge":
          return 2.074;
        case "\\Huge":
          return 2.488;
      }
      return 1;
    }
    getReactFontSizeStyle(e) {
      if (e) return o.isRelativeObj(e) ? "".concat(e.value, "em") : o.isAbsoluteObj(e) ? e.value : "".concat(this.r2(this.getFontRatioFromStr(e)), "em");
    }
    getAbsoluteFontSize(e, t) {
      return e ? o.isRelativeObj(e) ? this.r2(e.value * t) : o.isAbsoluteObj(e) ? e.value : this.r2(this.getFontRatioFromStr(e) * t) : t;
    }
    getFontSizeRatio(e, t) {
      return e ? o.isRelativeObj(e) ? e.value : o.isAbsoluteObj(e) ? this.r2(e.value / t) : this.r2(this.getFontRatioFromStr(e)) : 1;
    }
    getFontSizeLatex(e, t, r) {
      if (e) {
        if (o.isRelativeObj(e)) {
          if (r) {
            var n = this.r2(e.value * t * .75);
            return "\\fontsize{".concat(n, "}{").concat(this.r2(1.2 * n), "}\\selectfont");
          }
          return "\\fontsize{".concat(this.r2(e.value), "em}{").concat(this.r2(1.2 * e.value), "em}\\selectfont");
        }
        if (o.isAbsoluteObj(e)) {
          var i = .75 * e.value;
          return "\\fontsize{".concat(i, "}{").concat(this.r2(1.2 * i), "}\\selectfont");
        }
        return "".concat(e);
      }
    }
    r2(e) {
      return Math.round(100 * e) / 100;
    }
  }
  var o = new i();
};
