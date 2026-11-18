/* module 334 — 4658 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => i
  });
  class n {
    bracketWitdhFromHeight(e, t, r) {
      if (this.shouldUseSingleBracket(e, t)) return Math.round(t / 2.6);
      var n = this.fontSizeEmByHeight(e, t, r);
      return this.bracketWidthFromFontSize(t * n, e, r);
    }
    shouldUseSingleBracket(e, t) {
      return e <= 1.4 * t;
    }
    getSymmetricBracketHeightInfo(e, t, r) {
      var n, i;
      return {
        halfTop: e - r / 8,
        halfBottom: t + r / 8
      };
    }
    bracketWidthFromFontSize(e, t, r) {
      return "open-brace" == r || "close-brace" == r ? Math.round(.8 * e) : "top-brace" == r || "bottom-brace" == r ? Math.round(.6 * e) : "open-parenthesis" == r || "close-parenthesis" == r ? Math.round(.45 * e) : "open-bracket" == r || "close-bracket" == r ? Math.round(.43 * e) : "open-vert" == r || "close-vert" == r ? Math.round(.3 * e) : Math.round(.45 * e);
    }
    fontSizeEmByHeightForBrace(e, t) {
      var r, n;
      return .6 + Math.min(.5, (e - t) / 140);
    }
    fontSizeEmByHeightForParenthesis(e, t) {
      var r, n;
      return .8 + Math.min(.2, (e - t) / 250);
    }
    fontSizeEmByHeightForBracket() {
      return 1;
    }
    fontSizeEmByHeight(e, t, r) {
      return "open-brace" == r || "close-brace" == r || "top-brace" == r || "bottom-brace" == r ? this.fontSizeEmByHeightForBrace(e, t) : "open-parenthesis" == r || "close-parenthesis" == r ? this.fontSizeEmByHeightForParenthesis(e, t) : "open-bracket" == r || "close-bracket" == r ? this.fontSizeEmByHeightForBracket() : 1;
    }
    bracketNameToLatex(e) {
      switch (e) {
        case "open-brace":
          return "\\{";
        case "close-brace":
          return "\\}";
        case "open-bracket":
          return "[";
        case "close-bracket":
          return "]";
        case "open-parenthesis":
          return "(";
        case "close-parenthesis":
          return ")";
        case "open-vert":
        case "close-vert":
          return "|";
        case "open-Vert":
        case "close-Vert":
          return "\\Vert";
        case "open-angle":
          return "<";
        case "close-angle":
          return ">";
        case "open-uparrow":
        case "close-uparrow":
          return "\\uparrow";
        case "open-Uparrow":
        case "close-Uparrow":
          return "\\Uparrow";
        case "open-downarrow":
        case "close-downarrow":
          return "\\downarrow";
        case "open-Downarrow":
        case "close-Downarrow":
          return "\\Downarrow";
        case "open-updownarrow":
        case "close-updownarrow":
          return "\\updownarrow";
        case "open-Updownarrow":
        case "close-Updownarrow":
          return "\\Updownarrow";
        case "open-ceil":
          return "\\lceil";
        case "close-ceil":
          return "\\rceil";
        case "open-floor":
          return "\\lfloor";
        case "close-floor":
          return "\\rfloor";
        case "open-slash":
          return "\\/";
        case "close-slash":
          return "\\backslash";
        default:
          return "none";
      }
    }
    bracketNameUnicodeSymbol(e) {
      switch (e) {
        case "open-brace":
          return "{";
        case "close-brace":
          return "}";
        case "open-bracket":
          return "[";
        case "close-bracket":
          return "]";
        case "open-parenthesis":
          return "(";
        case "close-parenthesis":
          return ")";
        case "open-vert":
        case "close-vert":
          return "|";
        case "open-Vert":
        case "close-Vert":
          return "‖";
        case "open-angle":
          return "<";
        case "close-angle":
          return ">";
        case "open-uparrow":
        case "close-uparrow":
          return "↑";
        case "open-Uparrow":
        case "close-Uparrow":
          return "⇑";
        case "open-downarrow":
        case "close-downarrow":
          return "↓";
        case "open-Downarrow":
        case "close-Downarrow":
          return "⇓";
        case "open-updownarrow":
        case "close-updownarrow":
          return "↕";
        case "open-Updownarrow":
        case "close-Updownarrow":
          return "⇕";
        case "open-ceil":
          return "⌈";
        case "close-ceil":
          return "⌉";
        case "open-floor":
          return "⌊";
        case "close-floor":
          return "⌋";
        case "open-slash":
          return "/";
        case "close-slash":
          return "\\";
        default:
          return "none";
      }
    }
  }
  const i = new n();
};
