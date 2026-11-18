/* module 8444 — 1435 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => l
  });
  var n = r(40927),
    i = r.n(n),
    o = r(48440),
    s = r(49632);
  class a extends o.A {
    isDynamicPowerIndexPosition() {
      return !0;
    }
    toModel() {
      throw new Error("Method not implemented.");
    }
    getViewComponent() {
      return s.PowerIndex;
    }
    getModelMeta() {
      return {
        text: "\\index",
        elements: {
          indexValue: {
            onRemove: "only"
          }
        }
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: ["\\index"],
        height: 25,
        shortcut: {
          char: "_"
        },
        searchText: "index subscript",
        description: "index, subscript",
        renderSymbol: () => i().createElement("div", {
          style: {
            fontFamily: "Asana"
          },
          className: "icon-index-symbol"
        }, i().createElement("div", {
          className: "align-end"
        }, "x"), i().createElement("div", {
          className: "square common-square-icon common-square-icon-expand"
        }))
      });
    }
    toLatex(e, t, r, n) {
      return s.default.toLatex(e, t, r, n);
    }
    toMathml(e, t) {
      return {
        type: "msub",
        base: null,
        subscript: t.generateEditor(e.elements.indexValue)
      };
    }
  }
  const l = new a();
};
