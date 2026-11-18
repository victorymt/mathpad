/* module 5981 — 1498 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    EmptyLeft: () => c,
    EmptyLeftSc: () => d,
    default: () => h
  });
  var n = r(40927),
    i = r.n(n),
    o = r(74185),
    s = r(52431),
    a = r(82292);
  class l extends i().Component {
    render() {
      return i().createElement("div", {
        className: "empty-left-icon"
      }, i().createElement("div", {
        style: a.E
      }));
    }
  }
  class c extends o.A {
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
  class d extends s.A {
    getSymbol() {
      return "";
    }
    getViewComponent() {
      return c;
    }
    getLatextName() {
      return "\\left.";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        description: "Left empty bracket!",
        renderSymbol: () => i().createElement(l, null)
      });
    }
  }
  const h = new d();
};
