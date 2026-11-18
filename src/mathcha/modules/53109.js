/* module 53109 — 1441 chars */
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
        text: "\\power",
        elements: {
          powerValue: {
            onRemove: "only"
          }
        }
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: ["\\power"],
        height: 25,
        searchText: "power superscript",
        description: "power, superscript",
        shortcut: {
          char: "^"
        },
        renderSymbol: () => i().createElement("div", {
          className: "icon-power-symbol"
        }, i().createElement("div", {
          className: "align-end",
          style: {
            fontFamily: "Asana"
          }
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
        type: "msup",
        base: null,
        superscript: t.generateEditor(e.elements.powerValue)
      };
    }
  }
  const l = new a();
};
