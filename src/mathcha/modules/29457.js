/* module 29457 — 3703 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => x
  });
  var n = r(3453),
    i = r(64467),
    o = r(40927),
    s = r.n(o),
    a = r(39791),
    l = r(55007),
    c = r(80931),
    d = r(59531),
    h = r(12481),
    p = r(516),
    u = r(34649),
    g = r(15706);
  function m(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function f(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? m(Object(r), !0).forEach(function (t) {
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var y = {
    overflow: "visible"
  };
  class v extends l.A {
    constructor() {
      super(...arguments), (0, i.A)(this, "containerClassName", "under-line-symbol ig-ex-br"), (0, i.A)(this, "composedRef", g.q.create());
    }
    renderSvg(e, t, r) {
      var n = Math.floor(r / 5),
        i = "M".concat(0, ",", 0, " L", e, ",", 0, " M", 0, ",").concat(n, " L").concat(e, ",").concat(n);
      return s().createElement("path", {
        d: i,
        strokeWidth: (0, p.U)(r),
        fill: "none"
      });
    }
    notifyChildrenWidthChange() {
      this.composedRef.invalidateDrawing();
    }
    renderComponent() {
      var e = u.c.extactHeightAndBottomStyleDouble(this.getMathFontSizePixel(), this.isSingleTextBlockAndLowerSmall(this.props.data.elements.value)),
        t = (0, n.A)(e, 3),
        r,
        i,
        o,
        l = {
          display: "block",
          height: t[0],
          position: "relative",
          marginTop: t[1],
          marginBottom: t[2]
        };
      return [s().createElement(a.A, f({
        key: "value",
        optimizeForOneLine: !0
      }, this.buildMetaDataDirectChildOrEmpty("value"))), s().createElement("line-border", {
        key: "line",
        style: l
      }, s().createElement(h.A, {
        ref: this.composedRef.ref,
        fixedContextHandler: this.context.fixedContextHandler,
        renderSvg: this.renderSvg,
        style: y
      }))];
    }
  }
  class b extends c.A {
    getViewComponent() {
      return v;
    }
    getLatextName() {
      return "\\underline-double";
    }
    getModel() {
      return this.getModelFromStructure({
        value: "editor"
      }, this.getLatextName());
    }
    getSymbol() {
      return "_";
    }
    getSymbolInfo() {
      return this.fillSymbolInfo({
        type: "composite",
        names: [this.getLatextName()],
        symbol: this.getSymbol(),
        filterTag: "underline",
        renderSymbol() {
          return s().createElement(d.A, {
            symbol: this.symbol,
            double: !0
          });
        }
      });
    }
    toLatex(e, t, r) {
      return "\\underline{\\underline{".concat(r.toLatexFromEditor(e.elements.value, t), "}}");
    }
    toMathml(e, t) {
      return {
        type: "munder",
        base: {
          type: "munder",
          base: t.generateEditor(e.elements.value),
          accent: !0,
          underscript: {
            type: "mo",
            value: this.getSymbol()
          }
        },
        accent: !0,
        underscript: {
          type: "mo",
          value: this.getSymbol()
        }
      };
    }
  }
  const x = new b();
};
