/* module 95877 — 944 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    OpenBracket: () => s,
    default: () => l
  });
  var n = r(30803),
    i = r(74185),
    o = r(52431);
  class s extends i.A {
    bkType() {
      return "bracket";
    }
    bracketText() {
      return "[";
    }
    delimiter() {
      return "open-bracket";
    }
    noHiddenNormalOnNormalBracket() {}
  }
  class a extends o.A {
    getLatextName() {
      return "\\left[";
    }
    getSymbol() {
      return "[";
    }
    getViewComponent() {
      return s;
    }
    getModel() {
      return {
        id: n.w.nextId(),
        type: "single",
        text: "["
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "single",
        names: ["\\left[", "["],
        symbol: "[",
        description: "Height adjust automatically by its content"
      });
    }
    toLatex() {
      return "\\left[";
    }
  }
  const l = new a();
};
