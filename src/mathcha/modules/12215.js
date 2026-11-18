/* module 12215 — 3941 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    TextCircled: () => p,
    TextCircledSc: () => u,
    default: () => g
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(39791),
    a = r(25742),
    l = r(80931),
    c = r(49812);
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
      super(e), this.containerClassName = "textcircled";
    }
    renderCircleShape() {
      var e = this.props.data.elements.value;
      return this.isEditorEmpty(e) ? o().createElement("circle", {
        cx: "50%",
        cy: "59%",
        r: "46%"
      }) : this.isSingleTextBlockAndOneChar(e) ? this.isSingleTextBlockAndLowerSmall(e) ? o().createElement("circle", {
        cx: "50%",
        cy: "59%",
        r: "46%"
      }) : o().createElement("circle", {
        cx: "50%",
        cy: "57%",
        r: "50%"
      }) : o().createElement("ellipse", {
        cx: "50%",
        cy: "57%",
        rx: "50%",
        ry: "50%"
      });
    }
    renderComponent() {
      return o().createElement("div", {
        style: {
          minWidth: "0.5em",
          paddingLeft: "0.35em",
          paddingRight: "0.35em"
        }
      }, o().createElement("svg", {
        style: {
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          fill: "none",
          width: "100%",
          height: "100%",
          overflow: "visible"
        }
      }, this.renderCircleShape()), o().createElement(s.A, h({
        displayMode: !0
      }, this.buildMetaDataDirectChildOrEmpty("value"))));
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
      return "\\textcircled";
    }
    getSymbol() {
      return "textcircled";
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
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        height: 25,
        renderSymbol: () => o().createElement("div", {
          style: {
            width: 14,
            height: 14,
            border: "1px solid var(--ui-text, black)",
            borderRadius: 10,
            transform: "translateX(3px)"
          }
        }, o().createElement("div", {
          style: {
            marginTop: 3
          },
          className: "big-square common-big-square-icon"
        })),
        searchText: "circle",
        description: "circle, circle box"
      });
    }
    toLatex(e, t, r) {
      var n = e.elements.value;
      return c.A.isSingleCharEditor(n) || c.A.isEditorEmpty(n) ? "\\textcircled{".concat(r.toLatexFromEditor(e.elements.value, t), "} ") : "\\tikz[baseline=(char.base)]{\\node[ellipse,draw] (char) {".concat(r.toLatexFromEditor(e.elements.value, t), "};}\n");
    }
    toMathml(e, t) {
      return {
        type: "menclose",
        notation: "circle",
        element: t.generateEditor(e.elements.value)
      };
    }
  }
  const g = new u();
};
