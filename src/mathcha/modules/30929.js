/* module 30929 — 3884 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => c
  });
  var n = r(98095),
    i = r(97372),
    o = r(73524),
    s = r(32485),
    a = r.n(s);
  class l {
    getAbstractCategory(e) {
      switch (e) {
        case "Normal":
        case "Alphabetic":
        case "Diacritic":
        case "Fence":
        case "Glyph":
        case "Large":
        case "Space":
        case "Special":
          return "Normal";
        default:
          return e;
      }
    }
    resolveVaryCategory(e, t) {
      var r = "Vary";
      if ("Vary" == r) {
        var n = e || null;
        switch (n) {
          case "Unary":
          case "Binary":
            r = n;
            break;
          case "Normal":
          case "Closing":
            r = "Binary";
        }
      }
      if ("Vary" == r && t.block) {
        var o = t.block;
        "composite" != o.type && o.type || (r = "Relation" == t.category || "OpOrFn" == t.category ? "Unary" : "Binary"), "single" == o.type && i.A.isCloseBlock(o) && (r = "Binary");
      }
      return "Vary" == r && (r = "Unary"), r;
    }
    isNumber(e) {
      if (!e) return !1;
      if (1 == e.length) {
        var t = e.codePointAt(0);
        return t >= 48 && t <= 57;
      }
      return !1;
    }
    resolveDotCategory(e, t) {
      return this.isNumber(e) || this.isNumber(t) ? "Normal" : "Punctuation";
    }
    isSpace(e) {
      return " " == e || " " == e;
    }
    getTextBlockInfo(e, t, r, i) {
      for (var o = [], s = null, a = null, l = null, c = 0; c < t.length; c++) {
        var d = t.clusterAt(c),
          h = void 0;
        "Vary" == (h = "." == d ? this.resolveDotCategory(t.clusterAt(c - 1), t.clusterAt(c + 1)) : this.getAbstractCategory(n.A.categoryByUnicodeChar(d))) && (h = this.resolveVaryCategory(l, r)), "|" == d && "z-spec" == i && (h = "Binary"), s && this.isRelatedCategory(s.category, h, a, d) ? (s.text += d, s.category = h, a = d, l = this.isSpace(d) ? l : h) : (s = {
          text: d,
          category: h,
          key: e.id + "" + c
        }, o.push(s), a = d, l = this.isSpace(d) ? l : h);
      }
      return o;
    }
    buildCloseLeftForOperatorName(e) {
      return e && e.block ? i.A.isIntegralLikeBlock(e.block) || i.A.isOpenClose(e.block) || e.isOperatorName || this.isTextBlockQualifyToCloseToOperatorName(e.block, "last") ? "close-left" : "" : "close-left";
    }
    buildCloseRightForOperatorName(e) {
      return e && e.block && (i.A.isOpenCloseOrPowerIndex(e.block) || this.isTextBlockQualifyToCloseToOperatorName(e.block, "first")) ? "close-right" : "";
    }
    buildClassForOperatorName(e, t) {
      return a()(this.buildCloseLeftForOperatorName(e), this.buildCloseRightForOperatorName(t));
    }
    buildClassForIntegral(e) {
      var t, r;
      if (e && e.block && i.A.isIntegralOrOIntegral(e.block) && !(null !== (t = e.block.elements) && void 0 !== t && t.from || null !== (r = e.block.elements) && void 0 !== r && r.to)) return "int-ml";
    }
    buildClassForOIntegral(e) {
      var t, r;
      if (e && e.block && i.A.isIntegralOrOIntegral(e.block) && !(null !== (t = e.block.elements) && void 0 !== t && t.from || null !== (r = e.block.elements) && void 0 !== r && r.to)) return "oint-ml";
    }
    isTextBlockQualifyToCloseToOperatorName(e, t) {
      if (!i.A.isTextBlock(e)) return !1;
      var r = o.Ay.getUnistring(e),
        s = "first" == t ? r.clusterAt(0) : r.clusterAt(r.length - 1),
        a = n.A.categoryByUnicodeChar(s);
      return "Binary" == a || "Closing" == a || "Opening" == a || "Relation" == a || "Space" == a || "Unary" == a || "Vary" == a;
    }
    isRelatedCategory(e, t, r, n) {
      return null != e && null != t && (":" == r && "Relation" == t || "Relation" == e && ":" == n || r == n || (":" != r || "Relation" == t) && ("Relation" == e || ":" != n) && e == t);
    }
  }
  const c = new l();
};
