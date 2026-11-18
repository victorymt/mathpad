/* module 97391 — 1715 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => d
  });
  var n = r(40927),
    i = r.n(n),
    o = r(516),
    s = r(46718);
  class a extends i().Component {
    render() {
      return i().createElement("div", {
        className: "icon-bcancel"
      }, i().createElement("svg", {
        style: {
          height: 20,
          width: 15,
          stroke: "gray"
        }
      }, i().createElement("polyline", {
        points: "3,3 13,13",
        strokeWidth: 1,
        fill: "none"
      })), i().createElement("div", {
        style: {
          marginTop: -19,
          marginLeft: 6.5
        },
        className: "common-big-square-icon square"
      }));
    }
  }
  class l extends s.Cancel {
    renderSvg(e, t, r) {
      var n = this.getDy(r),
        s = 0,
        a = "".concat(0, ",").concat(0 + n, " ").concat(e - 0, ",").concat(t - n);
      return i().createElement("polyline", {
        points: a,
        strokeWidth: (0, o.U)(r),
        fill: "none"
      });
    }
  }
  class c extends s.CancelSc {
    constructor() {
      super();
    }
    getViewComponent() {
      return l;
    }
    getLatextName() {
      return "\\bcancel";
    }
    getSymbol() {
      return "bcancel";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName(), this.getSymbol()],
        symbol: this.getSymbol(),
        height: 25,
        renderSymbol: () => i().createElement(a, null)
      });
    }
    toMathml(e, t) {
      return {
        type: "menclose",
        notation: "downdiagonalstrike",
        element: t.generateEditor(e.elements.value)
      };
    }
  }
  const d = new c();
};
