/* module 58578 — 9072 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => o
  });
  var n = r(19340);
  class i {
    getFontNameWithoutQuote(e) {
      return e && e.startsWith('"') ? e.substr(1, e.length - 2) : e;
    }
    getFontNameOrLocalName(e) {
      return this.isLocalFont(e) ? e.name : e;
    }
    isLocalFont(e) {
      return "object" == typeof e && !!e;
    }
    asanaMathFontFamiltyFromKey(e) {
      switch (e) {
        case "raw":
          return "Asana";
        case "\\boldsymbol":
        case "\\mathnormal":
          return "Asana-Math, Asana";
        case "\\mathbf":
        case "\\mathrm":
          return "Asana-Mathrm, Asana-Math, Asana";
        case "\\mathit":
          return "Asana-Mathit, Asana-Math, Asana";
        case "\\mathbb":
          return "Asana-Mathbb, Asana-Math, Asana";
        case "\\mathcal":
          return "Asana-Mathcal, Asana-Math, Asana";
        case "\\mathfrak":
          return "Asana-Mathfrak, Asana-Math, Asana";
        case "\\mathsf":
          return "Asana-Mathsf, Asana-Math, Asana";
        case "\\mathtt":
          return "Asana-Mathtt, Asana-Math, Asana";
        case "\\mathscr":
          return "Asana-Mathscr, Asana-Math, Asana";
        case "\\text":
          return "arial, verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif";
      }
      return "Asana-Math, Asana";
    }
    latinModernMathFontFamiltyFromKey(e) {
      switch (e) {
        case "raw":
          return "LatinModern, Asana";
        case "\\boldsymbol":
        case "\\mathnormal":
          return "LatinModern-Math, LatinModern, Asana-Math, Asana";
        case "\\mathbf":
        case "\\mathrm":
          return "LatinModern-Mathrm, LatinModern-Math, LatinModern, Asana";
        case "\\mathit":
          return "LatinModern-Mathit, LatinModern-Math, LatinModern, Asana";
        case "\\mathbb":
          return "LatinModern-Mathbb, LatinModern-Math, LatinModern, Asana";
        case "\\mathcal":
          return "LatinModern-Mathcal, LatinModern-Math, LatinModern, Asana";
        case "\\mathfrak":
          return "LatinModern-Mathfrak, LatinModern-Math, LatinModern, Asana";
        case "\\mathsf":
          return "LatinModern-Mathsf, LatinModern-Math, LatinModern, Asana";
        case "\\mathtt":
          return "LatinModern-Mathtt, LatinModern-Math, LatinModern, Asana";
        case "\\mathscr":
          return "LatinModern-Mathscr, LatinModern-Math, LatinModern, Asana";
        case "\\text":
          return "arial, verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif";
      }
      return "LatinModern-Math, LatinModern, Asana-Math, Asana";
    }
    thickerLmMathFontFamiltyFromKey(e) {
      switch (e) {
        case "raw":
          return "ThickerLm, Asana";
        case "\\boldsymbol":
        case "\\mathnormal":
          return "ThickerLm-Math, ThickerLm, Asana-Math, Asana";
        case "\\mathbf":
        case "\\mathrm":
          return "ThickerLm-Mathrm, ThickerLm-Math, ThickerLm, Asana";
        case "\\mathit":
          return "ThickerLm-Mathit, ThickerLm-Math, ThickerLm, Asana";
        case "\\mathbb":
          return "ThickerLm-Mathbb, ThickerLm-Math, ThickerLm, Asana";
        case "\\mathcal":
          return "ThickerLm-Mathcal, ThickerLm-Math, ThickerLm, Asana";
        case "\\mathfrak":
          return "ThickerLm-Mathfrak, ThickerLm-Math, ThickerLm, Asana";
        case "\\mathsf":
          return "ThickerLm-Mathsf, ThickerLm-Math, ThickerLm, Asana";
        case "\\mathtt":
          return "ThickerLm-Mathtt, ThickerLm-Math, ThickerLm, Asana";
        case "\\mathscr":
          return "ThickerLm-Mathscr, ThickerLm-Math, ThickerLm, Asana";
        case "\\text":
          return "arial, verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif";
      }
      return "LatinModern-Math, LatinModern, Asana-Math, Asana";
    }
    sansMathFontFamiltyFromKey(e) {
      switch (e) {
        case "raw":
          return "Sans, Asana, Arial";
        case "\\boldsymbol":
          return "Sans-Bold, Sans-Math, Sans, Asana, Arial";
        case "\\mathbf":
          return "Sans-Mathbf, Sans-Math, Sans, Asana, Arial";
        case "\\mathit":
          return "Sans-Mathit, Sans-Math, Sans, Asana, Arial";
        case "\\mathbb":
          return "Sans-Mathbb, Sans-Math, Sans, Asana, Arial";
        case "\\mathcal":
          return "Sans-Mathcal, Sans-Math, Sans, Asana, Arial";
        case "\\mathfrak":
          return "Sans-Mathfrak, Sans-Math, Sans, Asana, Arial";
        case "\\mathsf":
          return "Sans-Mathsf, Sans-Math, Sans, Asana, Arial";
        case "\\mathtt":
          return "Sans-Mathtt, Sans-Math, Sans, Asana, Arial";
        case "\\mathscr":
          return "Sans-Mathscr, Sans-Math, Sans, Asana, Arial";
        case "\\mathnormal":
          return "Sans-Math, Sans, Asana-Math, Asana, Arial";
        case "\\mathrm":
          return "Sans-Mathrm, Sans-Math, Sans, Asana, Arial";
        case "\\text":
          return "arial, verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif";
      }
      return "Sans-Math, Sans, Asana-Math, Asana, Arial";
    }
    defaultMathUsageFamily() {
      return this.mathFontFamilyFromKey("default", "Asana", "characters");
    }
    getOverBracketFontFamily(e) {
      var t = (0, n.zN)(e);
      return t.constructionFont ? t.constructionFont : "Asana" == e ? "Asana-Math, Asana" : "LatinModern" == e ? "LatinModern-Math, LatinModern" : "ThickerLm" == e ? "ThickerLm-Math, ThickerLm" : "Sans" == e ? "Sans-Math, Sans" : "Asana-Math, Asana";
    }
    mathFontFamilyFromKey(e, t, r, i) {
      var o = (0, n.zN)(t).styles;
      if (o) {
        if ("\\text" == e) return this.mathFontFamilyFromKey(e, o.textFamily, r, i);
        var s = o.fallbackStyles && o.fallbackStyles[e];
        if (s) return this.mathFontFamilyFromKey(e, s, r);
        if ("raw" == e) return o.raw;
        var a = o.postfix && o.postfix[e];
        return (a ? "".concat(t, "-").concat(a, ", ") : "") + o.normal;
      }
      return t && "Asana" != t ? "LatinModern" == t ? this.replaceWithBaseTextModeFont(this.latinModernMathFontFamiltyFromKey(e), i) : "ThickerLm" == t ? this.replaceWithBaseTextModeFont(this.thickerLmMathFontFamiltyFromKey(e), i) : "Sans" == t ? this.replaceWithBaseTextModeFont(this.sansMathFontFamiltyFromKey(e), i) : this.replaceWithBaseTextModeFont(this.asanaMathFontFamiltyFromKey(e), i) : this.replaceWithBaseTextModeFont(this.asanaMathFontFamiltyFromKey(e), i);
    }
    mathFontFamilySupportSubFont(e) {
      return !!(0, n.zN)(e).styles || !e || "Asana" == e || "LatinModern" == e || "ThickerLm" == e || "Sans" == e;
    }
    replaceWithBaseTextModeFont(e, t) {
      return t && ("arial, verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif" == e || "arial, verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif" == e || "arial, verdana, geneva, lucida, 'lucida grande', arial, helvetica, sans-serif" == e) ? this.textFontFamilyFromKey(t) : e;
    }
    getFontFamilyFromLocalFontName(e) {
      return "".concat(e, ", Arial, Helvetica, sans-serif");
    }
    textFontFamilyFromKey(e) {
      if (this.isLocalFont(e)) return this.getFontFamilyFromLocalFontName(e.name);
      switch (e) {
        case "default":
        case "ptm":
          return "'Times New Roman', Times, serif";
        case "pcr":
          return "Courier New, Courier, monospace";
        case "helvet":
          return "Arial, Helvetica, sans-serif";
        case "cmun-serif":
          return "Computer Modern Serif, serif";
        case "cmun-sans":
          return "Computer Modern Sans, serif";
        case "cmun-typewriter":
          return "Computer Modern Typewriter, serif";
        case "thickercm-serif":
          return "Thicker Computer Modern Serif, serif";
      }
      return "'Times New Roman', Times, serif";
    }
    textFontDisplayFromKey(e) {
      if (this.isLocalFont(e)) return e.name;
      switch (e) {
        case "default":
          return "(font default)";
        case "pcr":
          return "Courier New";
        case "helvet":
          return "Arial";
        case "ptm":
          return "Times New Roman";
        case "cmun-serif":
          return "Computer Modern Serif";
        case "cmun-sans":
          return "Computer Modern Sans";
        case "cmun-typewriter":
          return "Computer Modern Typewriter";
        case "thickercm-serif":
          return "Thicker Computer Modern Serif";
      }
      return "Times New Roman";
    }
    mathFontDisplayFromKey(e) {
      var t = (0, n.zN)(e).displayName;
      if (t) return t;
      switch (e) {
        case "Asana":
          return "Asana";
        case "LatinModern":
          return "Latin Modern (similar to Latex)";
        case "ThickerLm":
          return "Thicker Latin Modern (similar to Latex)";
        case "Sans":
          return "Sans Serif (similar to Arial)";
      }
      return "Asana";
    }
  }
  const o = new i();
};
