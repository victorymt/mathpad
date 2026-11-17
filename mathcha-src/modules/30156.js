/* module 30156 — 3608 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.d(t, {
    A: () => l
  });
  var n = r(64467),
    i = r(84258);
  function o(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? o(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class a {
    constructor() {
      (0, n.A)(this, "tooltips", void 0), this.tooltips = {
        copy: "⌘+C",
        cut: "⌘+X",
        paste: "⌘+V",
        undo: "⌘+Z",
        redo: "⌘+⇧+Z",
        bold: "Bold (⌘+B)",
        italic: "Italic (⌘ + I)",
        underline: "Underline (⌘+U)",
        "strike-through": "StrikeThrough",
        "font-size": "Font Sizes",
        "font-name": "Font Names",
        mathnormal: "Font \\mathnormal",
        mathrm: "Font \\mathrm",
        mathbf: "Font \\mathbf (⌘+B)",
        mathit: "Font \\mathit",
        mathbb: "Font \\mathbb (⌘+Shift+B)",
        "math-boldsymbol": "Font \\boldsymbol",
        mathcal: "Font \\mathcal (⌘+Shift+C)",
        mathscr: "Font \\mathscr",
        mathfrak: "Font \\mathfrak",
        mathsf: "Font \\mathsf",
        mathtt: "Font \\mathtt",
        layout: "Layout",
        export: "Export To Latex",
        section: "Section (⌘+Option+1)",
        "ordered-list": "Ordered List (⌘+Shift+7)",
        "unordered-list": "UnOrdered List (⌘+Shift+8)",
        "decrease-indent": "Outdent",
        "increase-indent": "Indent",
        displayStyle: "\\displaystyle mode",
        textStyle: "\\textstyle mode",
        "math-font": "Math Font",
        "open-autocomplete": "Open Suggestion Box (Shortcut: \\ )",
        "insert-diagram": "Add Diagram/Graph",
        "align-left": "Align Left (⌘+Shift+L)",
        "align-middle": "Align Middle (⌘+Shift+E)",
        "align-right": "Align Right (⌘+Shift+R)",
        "align-justify": "Align Justify (⌘+Shift+J)",
        "mx-align-left": "Align Left (Ctrl+Shift+L)",
        "mx-align-middle": "Align Middle (Ctrl+Shift+E)",
        "mx-align-right": "Align Right (Ctrl+Shift+R)",
        "hyper-link": "Hyper Link (Cmd+K)"
      }, i.A.isMac() || (this.tooltips = s(s({}, this.tooltips), {}, {
        copy: "Ctrl+C",
        cut: "Ctrl+X",
        paste: "Ctrl+V",
        undo: "Ctrl+Z",
        redo: "Ctrl+Y",
        bold: "Bold (Ctrl + B)",
        italic: "Italic (Ctrl + I)",
        underline: "Underline (Ctrl + U)",
        mathbf: "Font \\mathbf (Ctrl+B)",
        mathbb: "Font \\mathbb (Ctrl+Shift+B)",
        mathcal: "Font \\mathcal (Ctrl+Shift+C)",
        section: "Section (Ctrl+Alt+1)",
        "ordered-list": "Ordered List (Ctrl+Shift+7)",
        "unordered-list": "UnOrdered List (Ctrl+Shift+8)",
        "align-left": "Align Left (Ctrl+Shift+L)",
        "align-middle": "Align Middle (Ctrl+Shift+E)",
        "align-right": "Align Right (Ctrl+Shift+R)",
        "align-justify": "Align Justify (Ctrl+Shift+J)",
        "hyper-link": "Hyper Link (Ctrl+K)"
      }));
    }
    getToolTipByKey(e) {
      return this.tooltips[e] || "";
    }
  }
  const l = new a();
};
