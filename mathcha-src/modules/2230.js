/* module 2230 — 595 chars */
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
        searchText: "vert pair |",
        names: ["\\vert-pair"],
        type: "template",
        commandBlocks: ["\\left|", "\\right|"],
        selected: {
          charIndex: 1
        },
        renderSymbol: () => i().createElement(o.A, {
          start: "|",
          end: "|"
        }),
        description: "automatically adjust height by its content"
      };
    }
  }
  const a = new s();
};
