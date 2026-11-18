/* module 39561 — 616 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => a
  });
  var n = r(40927),
    i = r.n(n),
    o = r(25982);
  class s {
    getSymbolInfo() {
      return {
        searchText: "Uparrow pair ",
        names: ["\\Uparrow-pair"],
        type: "template",
        commandBlocks: ["\\left\\Uparrow", "\\right\\Uparrow"],
        selected: {
          charIndex: 1
        },
        renderSymbol: () => i().createElement(o.A, {
          start: "⇑",
          end: "⇑"
        }),
        description: "automatically adjust height by its content"
      };
    }
  }
  const a = new s();
};
