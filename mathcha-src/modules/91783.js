/* module 91783 — 3129 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => d
  });
  var n = r(64467),
    i = r(73524);
  class o {
    isMathematicRangeNotArabic(e) {
      return e >= 8704 && e <= 8959 || e >= 10176 && e <= 10223 || e >= 10624 && e <= 10751 || e >= 10752 && e <= 11007 || e >= 119808 && e <= 120831;
    }
    isLowerCaseAlphatbet(e) {
      return e >= 97 && e <= 122;
    }
  }
  var s = new o(),
    a = r(23759);
  class l {
    constructor() {
      (0, n.A)(this, "leftSignAlphabet", "bhk"), (0, n.A)(this, "rightSignAlphabet", "dfj"), (0, n.A)(this, "measureCanvas", void 0);
    }
    getMeasureCanvas() {
      return this.measureCanvas || (this.measureCanvas = window.document.createElement("canvas"), this.measureCanvas.style.width = "0px", this.measureCanvas.style.height = "0px"), this.measureCanvas;
    }
    createTextEllipsisScope(e, t) {
      return new c(this.getMeasureCanvas(), e, t);
    }
    isUpperLeftSign(e) {
      return 1 == e.length && this.leftSignAlphabet.indexOf(e) >= 0;
    }
    isUpperRightSign(e) {
      return 1 == e.length && this.rightSignAlphabet.indexOf(e) >= 0;
    }
    isUpperSmall(e) {
      return !this.isAnyUpperBig(e);
    }
    isCompositeUpperSmall(e) {
      return e.type ? "composite" == e.type && void 0 : this.isUpperSmall(e.text);
    }
    isLowerSmall(e) {
      return !this.isAnyLowerBig(e);
    }
    isAnyUpperBig(e) {
      return this.isAnyUpperBigUni(e);
    }
    isAnyLowerBig(e) {
      return this.isAnyLowerBigUni(e);
    }
    asUniStr(e) {
      return e.length > 20 ? e : "string" == typeof e ? i.Ay.getUnistringUncached(e) : e;
    }
    isAnyLowerBigUni(e) {
      e = this.asUniStr(e);
      for (var t = 0; t < e.length; t++) {
        var r = e.charCodeAt(t),
          n = a[r];
        if ("b" == n || "l" == n) return !0;
      }
      return !1;
    }
    isAnyUpperBigUni(e) {
      e = this.asUniStr(e);
      for (var t = 0; t < e.length; t++) {
        var r = e.charCodeAt(t),
          n = a[r];
        if ("b" == n || "u" == n) return !0;
        if (void 0 === n) {
          if (s.isLowerCaseAlphatbet(r) || s.isMathematicRangeNotArabic(r)) continue;
          return !0;
        }
      }
      return !1;
    }
    heightFromBaseLine(e) {
      return e - e / 6;
    }
    bottomToBaseLine(e) {
      return e / 6;
    }
  }
  class c {
    constructor(e, t, r) {
      (0, n.A)(this, "canvas", void 0), (0, n.A)(this, "width", void 0), (0, n.A)(this, "context", void 0), this.canvas = e, this.width = r, this.context = this.canvas.getContext("2d"), this.context.font = t;
    }
    getText(e) {
      for (var t = this.width, r = e.split(/\b|(?=\W)/), n = this.context.measureText("...").width, i = [], o = 0, s = 0, a = 0, l = !1, c = 0; c < r.length; c++) {
        var d = r[c],
          h = this.context.measureText(d);
        if (0 == a && ((o += h.width) > t ? a++ : i.push(d)), 1 == a) {
          if ((s += h.width) > t - n) {
            l = !0;
            break;
          }
          i.push(d);
        }
      }
      var e = i.join("");
      return l && (e += "..."), e;
    }
  }
  const d = new l();
};
