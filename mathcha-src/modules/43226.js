/* module 43226 — 1568 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => d
  });
  var n = r(40927),
    i = r.n(n),
    o = r(84881),
    s = r(61544),
    a = r(81999);
  class l extends a.A {
    getArrow() {
      return "⇆";
    }
    moreSpaceSupSub() {
      return "up-space-1-lower-space-2";
    }
    renderComposedArrow() {
      return i().createElement(o.A, {
        fixedContextHandler: this.context.fixedContextHandler,
        baseMathModeFontFamily: this.context.baseMathModeFontFamily,
        startChar: "␩",
        repeatChar: "␫",
        endChar: "␪",
        topEm: this.getLowerKindTopEm()
      });
    }
  }
  class c extends s.A {
    getViewComponent() {
      return l;
    }
    getLatextName() {
      return "\\xleftrightarrows";
    }
    getSymbol() {
      return "⇆";
    }
    getLatexNameToConvert() {
      return "\\leftrightarrows";
    }
    toLatex(e, t, r) {
      return t.headers.set("\\leftrightarrows", "\\ProvideDocumentCommand{\\xleftrightarrows}{ O{}m }{%\n            \\mathrel{%\n            \\vcenter{\\hbox{%\n            \\begin{tikzpicture}\n              \\node[minimum width=0.2cm,minimum height=1ex,anchor=south,align=center] (a){\\vphantom{hg}${\\scriptstyle #2}$\\\\ \\vphantom{hg}${\\scriptstyle #1}$};\n              \\draw[<-] ([yshift=0.35ex]a.west) -- ([yshift=0.35ex]a.east);\n              \\draw[->] ([yshift=-0.35ex]a.west) -- ([yshift=-0.35ex]a.east);\n            \\end{tikzpicture}\n            }}%\n            }%\n            }"), super.toLatex(e, t, r);
    }
  }
  const d = new c();
};
