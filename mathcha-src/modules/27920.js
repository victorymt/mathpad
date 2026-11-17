/* module 27920 — 2250 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => f
  });
  var n = r(64467),
    i = r(25742),
    o = r(48440),
    s = r(40927),
    a = r.n(s),
    l = r(37566),
    c = r(40961),
    d = r.n(c),
    h = r(55451),
    p = r(32485),
    u = r.n(p);
  class g extends i.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "state", {}), (0, n.A)(this, "unmounted", void 0);
    }
    getClassName() {
      return u()(super.getClassName(), "print-remove-background", "role-page-break-block");
    }
    componentDidMount() {
      super.componentDidMount(), h.A.waitALitteWhile(() => {
        this.unmounted || l.f$(d().findDOMNode(this), "compositeblock.table-symbol").length > 0 && this.setState({
          insideTable: !0
        });
      });
    }
    componentWillUnmount() {
      this.unmounted = !0;
    }
    renderComponent() {
      return this.state.insideTable ? a().createElement("span", {
        className: "no-print",
        style: {
          fontSize: "0.8em",
          color: "red"
        }
      }, "Page Break not supported in Table") : a().createElement("span", {
        className: "no-print",
        style: {
          fontSize: "0.8em",
          color: "gray",
          verticalAlign: "0.2em"
        }
      }, "Page Break");
    }
    getCompositeBlockStyle() {
      return {
        background: "rgba(8, 8, 8, 0.2)",
        height: "1.2em",
        display: "block",
        textAlign: "center",
        fontFamily: "Arial"
      };
    }
  }
  class m extends o.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return g;
    }
    getLatextName() {
      return "\\page-break";
    }
    getSymbol() {
      return "Page Break";
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        elements: {}
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        insertInTextModeOnly: !0,
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol()
      });
    }
    toModel(e, t, r) {
      var n;
      return this.getModel();
    }
    toLatex(e, t, r) {
      return "";
    }
  }
  const f = new m();
};
