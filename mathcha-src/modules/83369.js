/* module 83369 — 3098 chars */
module.exports = function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, {
    default: () => b
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
    u = r(34649);
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
        (0, i.A)(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  var f = {
    overflow: "visible"
  };
  class y extends l.A {
    constructor() {
      super(...arguments), (0, i.A)(this, "containerClassName", "under-line-symbol ig-ex-br");
    }
    renderSvg(e, t, r) {
      var n = "".concat(0, ",", 0, " ", e, ",", 0);
      return s().createElement("polyline", {
        points: n,
        strokeWidth: (0, p.U)(r),
        fill: "none"
      });
    }
    renderComponent() {
      var e = u.c.extactHeightAndBottomStyle(this.getMathFontSizePixel(), this.isSingleTextBlockAndLowerSmall(this.props.data.elements.value)),
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
      return [s().createElement(a.A, m({
        key: "value",
        optimizeForOneLine: !0
      }, this.buildMetaDataDirectChildOrEmpty("value"))), s().createElement("line-border", {
        key: "line",
        style: l
      }, s().createElement(h.A, {
        fixedContextHandler: this.context.fixedContextHandler,
        renderSvg: this.renderSvg,
        style: f
      }))];
    }
  }
  class v extends c.A {
    getViewComponent() {
      return y;
    }
    getLatextName() {
      return "\\underline";
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
        renderSymbol() {
          return s().createElement(d.A, {
            symbol: this.symbol,
            double: !1
          });
        }
      });
    }
    toMathml(e, t) {
      return {
        type: "munder",
        base: t.generateEditor(e.elements.value),
        accent: !0,
        underscript: {
          type: "mo",
          value: this.getSymbol()
        }
      };
    }
  }
  const b = new v();
};
