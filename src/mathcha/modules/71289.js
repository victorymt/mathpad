/* module 71289 — 5432 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    FracSlashed: () => f,
    FracSlashedSc: () => y,
    default: () => v
  });
  var n = r(64467),
    i = r(40927),
    o = r.n(i),
    s = r(39791),
    a = r(25742),
    l = r(70224),
    c = r(48440),
    d = r(2543),
    h = r.n(d),
    p = r(32485),
    u = r.n(p);
  function g(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function m(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? g(Object(r), !0).forEach(function (t) {
        (0, n.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  class f extends a.A {
    constructor(e) {
      super(e), (0, n.A)(this, "pathRef", void 0), (0, n.A)(this, "drawSlash", () => {
        if (this.pathRef) {
          var e = this.getElementRect(this.compositeBlock),
            t = this.pathRef.parentElement,
            r = this.getElementRect(t),
            n = this.getMathFontSizePixel() * (this.isSmaller() ? .75 : 1),
            i = .35 * n,
            o = .4 * n,
            s = r.top + .5 - e.top,
            a = e.bottom - r.top - .5,
            l = h().clamp(-1.5 * a / (1.3 * n) + 1, .5 * -n, .05 * n),
            c = h().clamp(-1.5 * s / (1.3 * n) + 1, .5 * -n, .05 * n),
            d = "M".concat(r.right - r.left - c, ",-").concat(s - o, " L").concat(l, ",").concat(a - i);
          if (this.pathRef.getAttribute("d") == d) return void console.log("no changed");
          this.pathRef.setAttribute("d", d);
        }
      }), (0, n.A)(this, "handlePathRef", e => {
        this.pathRef = e;
      });
    }
    getClassName() {
      return u()("frac-slashed-symbol", {
        "frac-inline": this.isSmaller()
      });
    }
    getCompositeBlockStyle() {
      return m(m({}, super.getCompositeBlockStyle()), {}, {
        paddingLeft: "0.05em",
        paddingRight: "0.05em"
      });
    }
    afterReactRender() {
      this.getMtFuncs().getBatchUpdater().pushToEnd(this.drawSlash, this);
    }
    isSmaller() {
      return "\\tfracslashed" == this.props.data.text;
    }
    renderComponent() {
      return o().createElement("div", null, o().createElement(s.A, m(m({
        displayMode: !this.isSmaller()
      }, this.buildMetaDataDirectChildOrEmpty("value")), {}, {
        style: {
          display: "inline-flex",
          verticalAlign: "text-bottom",
          marginBottom: "0.3em"
        }
      })), o().createElement("svg", {
        style: {
          width: "0.4em",
          height: 1,
          overflow: "visible",
          display: "inline-block",
          verticalAlign: "middle"
        }
      }, o().createElement("path", {
        style: {
          strokeWidth: this.getLineThickness()
        },
        ref: this.handlePathRef
      })), o().createElement(s.A, m(m({
        displayMode: !this.isSmaller()
      }, this.buildMetaDataDirectChildOrEmpty("sub1")), {}, {
        style: {
          display: "inline-flex",
          verticalAlign: "text-top",
          marginTop: "0.3em"
        }
      })));
    }
  }
  class y extends c.A {
    getViewComponent() {
      return f;
    }
    getLatextName() {
      return "\\fracslashed";
    }
    getSymbol() {
      return "fracslashed";
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
    getModel(e) {
      var t = super.getModel(e);
      return e && "\\tfracslashed" == e.names[0] && (t.text = "\\tfracslashed"), t;
    }
    getSymbolInfo() {
      var e = o().createElement("div", {
        style: {
          margin: "auto",
          display: "flex",
          flexDirection: "row"
        }
      }, o().createElement("div", {
        className: "common-big-square-icon"
      }), o().createElement("span", {
        style: {
          padding: 2
        }
      }, "/"), o().createElement("div", {
        className: "common-big-square-icon",
        style: {
          marginTop: 10
        }
      }));
      return [this.fillSymbolInfo({
        type: "composite",
        names: ["\\fracslashed"],
        symbol: this.getSymbol(),
        height: 25,
        renderSymbol: () => e
      }), this.fillSymbolInfo({
        type: "composite",
        names: ["\\tfracslashed"],
        symbol: this.getSymbol(),
        description: "smaller \\fracslashed",
        height: 25,
        renderSymbol: () => e
      })];
    }
    toModel(e, t, r) {
      var n = this.getModel();
      return n.elements.value = l.A.createEditorWith(r), n;
    }
    toLatex(e, t, r) {
      return t = m(m({}, t), {}, {
        displayMode: !0
      }), "\\frac{".concat(r.toLatexFromEditor(e.elements.value, t), "}");
    }
    toMathml(e, t) {
      return {
        type: "mfrac",
        numerator: t.generateEditor(e.elements.value),
        denominator: t.generateEditor(e.elements.sub1)
      };
    }
  }
  const v = new y();
};
