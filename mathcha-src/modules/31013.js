/* module 31013 — 920 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => l
  });
  var n = r(69995),
    i = r(30803),
    o = r(52431);
  class s extends n.A {
    bkType() {
      return "brace";
    }
    bracketText() {
      return "}";
    }
    delimiter() {
      return "close-brace";
    }
    noHiddenNormalOnNormalBracket() {}
  }
  class a extends o.A {
    getLatextName() {
      return "\\right}";
    }
    getSymbol() {
      return "}";
    }
    getViewComponent() {
      return s;
    }
    getModel() {
      return {
        id: i.w.nextId(),
        type: "single",
        text: "}"
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "single",
        names: ["\\right}", "}"],
        symbol: "}",
        description: "Height adjust automatically by its content"
      });
    }
    toLatex() {
      return "\\right\\}";
    }
  }
  const l = new a();
};
