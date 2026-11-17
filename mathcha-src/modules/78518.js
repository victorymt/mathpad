/* module 78518 — 2879 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    Boxed: () => p,
    BoxedSc: () => u,
    default: () => g
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(39791),
    a = r(25742),
    l = r(80931),
    c = r(70224);
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
  class p extends a.A {
    constructor(e) {
      super(e), this.containerClassName = "boxed";
    }
    renderComponent() {
      return o().createElement("div", {
        style: {
          borderStyle: "solid",
          borderWidth: 1,
          paddingLeft: "0.3em",
          paddingRight: "0.3em",
          paddingBottom: "0.1em",
          marginTop: "0.1em",
          marginBottom: "0.1em"
        }
      }, o().createElement(s.A, h({
        showBorderOnSelected: !1,
        displayMode: !0
      }, this.buildMetaDataFromName("value"))));
    }
  }
  class u extends l.A {
    constructor() {
      super();
    }
    getViewComponent() {
      return p;
    }
    getLatextName() {
      return "\\boxed";
    }
    getSymbol() {
      return "boxed";
    }
    getModelMeta() {
      return {
        text: this.getLatextName(),
        elements: {
          value: {
            onRemove: "all"
          }
        }
      };
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName(), this.getSymbol()],
        symbol: this.getSymbol(),
        height: 25,
        renderSymbol: () => o().createElement("div", {
          style: {
            width: 10,
            height: 10,
            border: "1px solid var(--ui-text, black)",
            transform: "translateX(3px)"
          }
        })
      });
    }
    toModel(e, t, r) {
      var n = this.getModel();
      return n.elements.value = c.A.createEditorWith(r), n;
    }
    toLatex(e, t, r) {
      return t = h(h({}, t), {}, {
        displayMode: !0
      }), "\\boxed{".concat(r.toLatexFromEditor(e.elements.value, t), "}");
    }
    toMathml(e, t) {
      return {
        type: "menclose",
        notation: "box",
        element: t.generateEditor(e.elements.value)
      };
    }
  }
  const g = new u();
};
