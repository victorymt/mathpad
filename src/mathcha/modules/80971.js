/* module 80971 — 2481 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    TocUnderlinePlaceholder: () => p,
    TocUnderlinePlaceholderSc: () => u,
    default: () => g
  });
  var n = r(64467),
    i = r(25742),
    o = r(48440),
    s = r(54742),
    a = r(40961),
    l = r.n(a),
    c = r(55451);
  function d(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function h(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? d(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class p extends i.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "toc-underline-placeholder-symbol"), (0, n.A)(this, "isUnmounted", void 0);
    }
    getCompositeBlockStyle() {
      return h(h({}, super.getCompositeBlockStyle()), {}, {
        width: 20,
        overflow: "visible"
      });
    }
    renderComponent() {
      return [];
    }
    shouldComponentUpdate() {
      return !1;
    }
    componentDidMount() {
      c.A.next(() => {
        this.updateUnderline();
      });
    }
    componentWillUnmount() {
      this.isUnmounted = !0;
    }
    updateUnderline() {
      if (!this.isUnmounted) {
        var e = l().findDOMNode(this);
        s.A.generate(e, this.getDzContainer());
      }
    }
  }
  class u extends o.A {
    getViewComponent() {
      return p;
    }
    getLatextName() {
      return "\\system-toc-underline-placeholder";
    }
    getSymbol() {
      return "";
    }
    getModel() {
      return this.getModelFromStructure({}, this.getLatextName());
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        insertInTextModeOnly: !0
      });
    }
    toModel(e, t, r) {}
    toLatex() {
      return this.getLatextName();
    }
    toMathml(e, t) {
      return {
        type: "empty"
      };
    }
  }
  const g = new u();
};
