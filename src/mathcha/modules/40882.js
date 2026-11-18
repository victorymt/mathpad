/* module 40882 — 1302 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    EmptyRight: () => l,
    EmptyRightSc: () => c,
    default: () => d
  });
  var n = r(40927),
    i = r.n(n),
    o = r(69995),
    s = r(82292),
    a = r(52431);
  class l extends o.A {
    delimiter() {}
    bkType() {
      return "empty";
    }
    bracketText() {
      return "|";
    }
    shouldComponentUpdate(e, t) {
      var r;
      return super.shouldComponentUpdate(e, t) || e.lineSelected != this.props.lineSelected;
    }
    getSelectedClssName() {
      return this.props.lineSelected ? "line-selected" : "";
    }
    renderNormal() {
      return i().createElement("empty", {
        className: "normal-size " + this.getSelectedClssName()
      });
    }
    renderComposed() {
      return i().createElement("empty", {
        className: this.getSelectedClssName()
      });
    }
  }
  class c extends a.A {
    getSymbol() {
      return "";
    }
    getViewComponent() {
      return l;
    }
    getLatextName() {
      return "\\right.";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        description: "Right empty bracket!",
        renderSymbol: () => i().createElement(s.A, null)
      });
    }
  }
  const d = new c();
};
