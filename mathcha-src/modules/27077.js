/* module 27077 — 1589 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    H: () => d
  });
  var n = r(69153),
    i = r(19539),
    o = r(38070),
    s = r(39314),
    a = r(18808);
  function l(e) {
    return i.A.round2(e);
  }
  class c extends n.g4 {
    appendStyleBeginForText(e, t, r) {
      return e.styles.forEach(e => {
        if ("isBold" == e.key) t.push("\\textbf{");else if ("isItalic" == e.key) t.push("\\textit{");else if ("textDecoration" == e.key) "underline" == e.value ? t.push("\\underline{") : "line-through" == e.value && t.push("\\st{");else if ("fontName" == e.key) {
          var n = e.value;
          "pcr" == n || "helvet" == n || "ptm" == n ? t.push("{\\fontfamily{".concat(e.value, "}\\selectfont ")) : t.push("{\\fontfamily{pcr}\\selectfont ");
        } else if ("fontSize" == e.key) t.push("{".concat(a.l.getFontSizeLatex(e.value, r.pageSettings.fontSize, !1), " "));else if ("color" == e.key) {
          var i = o.A.colorAsArray(e.value, s.A.blackArr);
          t.push("\\textcolor[rgb]{".concat(l(i[0] / 255), ",").concat(l(i[1] / 255), ",").concat(l(i[2] / 255), "}{"));
        } else "hyperLink" == e.key ? t.push("\\href{".concat(this.sanitizeLink(e.value), "}{")) : "bgColor" == e.key && t.push("{");
      }), t;
    }
    sanitizeLink(e) {
      return e.replace(/\\/g, "\\\\").replace(/\^/g, "\\^").replace(/\#/g, "\\#").replace(/\$/g, "\\$").replace(/\%/g, "\\%").replace(/\&/g, "\\&").replace(/\~/g, "\\~").replace(/\_/g, "\\_").replace(/\{/g, "\\{").replace(/\}/g, "\\}");
    }
    getTextType() {
      return "latex-latex";
    }
  }
  var d = new c();
};
