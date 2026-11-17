/* module 500 — 4238 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    Qed: () => v,
    QedSc: () => b,
    default: () => x
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(25742),
    a = r(48440),
    l = r(35973),
    c = r(55451),
    d = r(40961),
    h = r.n(d),
    p = r(37566),
    u = r(94320),
    g = r(19340),
    m = r(7258);
  function f(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function y(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? f(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class v extends s.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "qed-symbol"), (0, n.A)(this, "mutationObservable", void 0), (0, n.A)(this, "resizeObservable", void 0), (0, n.A)(this, "delayRun", c.A.createPromiseLaterRubObject()), (0, n.A)(this, "delayCalculatePosition", () => {
        this.delayRun.later(this.calculateTransformPosition);
      }), (0, n.A)(this, "calculateTransformPosition", () => {
        !this.willComponentUnmount && this.compositeBlock && l.E.calculateTransform(this.compositeBlock, this.getDzContainer());
      });
    }
    getCompositeBlockStyle() {
      return y(y({}, super.getCompositeBlockStyle()), {}, {
        paddingLeft: "1em"
      });
    }
    shouldComponentUpdate() {
      return !0;
    }
    componentDidMount() {
      this.mutationObservable = new MutationObserver(this.delayCalculatePosition), this.resizeObservable = new u.t(this.delayCalculatePosition);
      var e = h().findDOMNode(this),
        t = {
          childList: !0,
          subtree: !0,
          characterData: !0
        };
      this.mutationObservable.observe(p.f$(e, "blocks,line")[0], t), this.resizeObservable.observe(p.f$(e, "line")[0]), this.delayRun.later(this.calculateTransformPosition);
    }
    componentWillUnmount() {
      super.componentWillUnmount(), this.delayRun.cancel(), this.mutationObservable.disconnect(), this.resizeObservable.disconnect();
    }
    renderComponent() {
      var e = this.getComputedFontSizeRatio(),
        t = this.context.mathFontSizeBase * e,
        r = (0, m.$9)((0, g.zN)(this.context.baseMathModeFontFamily), "qed");
      return [o().createElement("span", {
        key: "real",
        className: "qed-real",
        "data-math-source-symbol": r ? "qed" : void 0,
        style: {
          fontFamily: r || "Asana-Math, Asana",
          fontSize: t,
          display: "inline-block"
        }
      }, "□"), this.props.lineSelected && o().createElement("span", {
        key: "fake",
        className: "no-print",
        style: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 2,
          fontSize: "0.8em",
          color: "rgb(72 72 72)",
          background: "rgb(199 198 198)",
          opacity: .5
        }
      }, "\\qed")];
    }
  }
  class b extends a.A {
    getViewComponent() {
      return v;
    }
    getLatextName() {
      return "\\qed";
    }
    getSymbol() {
      return "qed";
    }
    getModel() {
      return this.getModelFromStructure({}, this.getLatextName());
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        renderSymbol: () => o().createElement("span", {
          style: {
            fontFamily: "Asana-Math, Asana",
            fontSize: "1.2em"
          }
        }, "□")
      });
    }
    toModel(e, t, r) {
      return this.getModel();
    }
    toLatex() {
      return "\\qed ";
    }
    toMathml(e, t) {
      return {
        type: "empty"
      };
    }
  }
  const x = new b();
};
