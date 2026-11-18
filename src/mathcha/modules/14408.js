/* module 14408 — 4180 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    Checkbox: () => y,
    CheckboxSc: () => v,
    default: () => b
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(25742),
    a = r(47858),
    l = r(40961),
    c = r.n(l),
    d = r(48440),
    h = r(18808),
    p = r(60693);
  function u(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function g(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? u(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var m = {
      display: "inline-block",
      cursor: "pointer",
      border: "1px solid",
      width: "14px",
      height: "14px",
      borderRadius: 2,
      position: "relative",
      transform: "translateY(0.16em)"
    },
    f = {
      fontSize: "0.7em",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "70%",
      height: "100%"
    };
  class y extends s.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "containerClassName", "checkbox-symbol"), (0, n.A)(this, "handleCheckClick", e => {
        e.stopPropagation(), e.preventDefault(), this.props.onDataChanged(g(g({}, this.props.data), {}, {
          checked: !this.props.data.checked
        }), {
          preventScroll: !0,
          isOneLineChanged: !0
        });
      });
    }
    getDefaultBaseLine() {
      var e = c().findDOMNode(this),
        t = this.getElementRect(e);
      return {
        top: t.top + p.T.heightOf(t) / 2,
        positionType: "middle"
      };
    }
    getCompositeBlockStyle() {
      return g(g({}, a.A.getHtmlFromStyle(this.props.data, this.props.textDecoration, this.context.baseMathModeFontFamily, void 0)), {}, {
        lineHeight: "1.4em",
        paddingRight: "0.4em",
        overflow: "visible"
      });
    }
    renderComponent() {
      var e = this.props.data.style ? this.props.data.style.fontSize : void 0,
        t = o().createElement("div", {
          "aria-hidden": !0,
          style: f
        }, o().createElement("svg", {
          viewBox: "0 0 24 24",
          style: {
            width: "100%",
            height: "100%"
          }
        }, o().createElement("path", {
          d: "M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z"
        }))),
        r = Math.round(.95 * h.l.getAbsoluteFontSize(e, this.getTextFontSizePixel())),
        n = this.props.data.checked ? t : "";
      return o().createElement("div", {
        role: "checkbox",
        "aria-checked": !!this.props.data.checked,
        className: "regular-checkbox",
        style: g(g({}, m), {}, {
          width: r,
          height: r,
          zIndex: 3
        }),
        onMouseDown: this.handleCheckClick
      }, n);
    }
  }
  class v extends d.A {
    constructor() {
      super(...arguments), (0, n.A)(this, "toMathml", void 0);
    }
    getViewComponent() {
      return y;
    }
    getLatextName() {
      return "\\checkbox";
    }
    getSymbol() {
      return "checkbox";
    }
    getModel() {
      return this.getModelFromStructure({}, this.getLatextName());
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        insertInTextModeOnly: !0,
        names: [this.getLatextName()],
        symbol: this.getSymbol()
      });
    }
    toModel() {
      var e;
      return this.getModel();
    }
    toLatex(e) {
      return e.checked ? "\\makebox[0pt][l]{$\\square$}\\raisebox{.15ex}{\\hspace{0.1em}$\\checkmark$}" : "\\makebox[0pt][l]{$\\square$}\\raisebox{.15ex}{\\hspace{1em}}";
    }
  }
  const b = new v();
};
