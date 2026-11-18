/* module 34017 — 941 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    OpenBraces: () => s,
    default: () => l
  });
  var n = r(74185),
    i = r(30803),
    o = r(52431);
  class s extends n.A {
    bkType() {
      return "brace";
    }
    bracketText() {
      return "{";
    }
    delimiter() {
      return "open-brace";
    }
    noHiddenNormalOnNormalBracket() {}
  }
  class a extends o.A {
    getLatextName() {
      return "\\left{";
    }
    getSymbol() {
      return "{";
    }
    getViewComponent() {
      return s;
    }
    getModel() {
      return {
        id: i.w.nextId(),
        type: "single",
        text: "{"
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "single",
        names: ["\\left{", "{"],
        symbol: "{",
        description: "Height adjust automatically by its content"
      });
    }
    toLatex() {
      return "\\left\\{";
    }
  }
  const l = new a();
};
