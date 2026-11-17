/* module 75990 — 610 chars */
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
        searchText: "angle pair <>",
        names: ["\\angle-pair"],
        type: "template",
        commandBlocks: ["\\left\\angle", "\\right\\angle"],
        selected: {
          charIndex: 1
        },
        renderSymbol: () => i().createElement(o.A, {
          start: "⟨",
          end: "⟩"
        }),
        description: "automatically adjust height by its content"
      };
    }
  }
  const a = new s();
};
