/* module 95978 — 533 chars */
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
        searchText: "empty brace pair",
        names: ["\\empty-brace-pair"],
        type: "template",
        commandBlocks: ["\\left.", "}"],
        selected: {
          charIndex: 1
        },
        renderSymbol: () => i().createElement(o.A, {
          start: "⌊",
          end: "⌋"
        })
      };
    }
  }
  const a = new s();
};
